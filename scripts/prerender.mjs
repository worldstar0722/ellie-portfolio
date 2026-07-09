// Injects server-rendered HTML into the built output after the client
// build: dist/index.html for the homepage, plus dist/work/<slug>/index.html
// for each case study so research content is crawlable without JS.
// Runs as part of `npm run build` (works on Vercel — pure Node, no browser).
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";

// React.lazy fires its dynamic import (maplibre-gl) during renderToString;
// it can't finish in Node and must not fail the build after we're done.
process.on("unhandledRejection", () => {});

const { render, routes } = await import(
  new URL("../dist-server/entry-server.js", import.meta.url)
);

const marker = '<div id="root"></div>';
const template = readFileSync("dist/index.html", "utf8");
if (!template.includes(marker)) {
  console.error("prerender: #root marker not found in dist/index.html");
  process.exit(1);
}

for (const route of routes) {
  const html = template.replace(marker, `<div id="root">${render(route)}</div>`);
  const outFile =
    route === "/" ? "dist/index.html" : join("dist", route, "index.html");
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, html);
  console.log("prerender:", outFile);
}

rmSync("dist-server", { recursive: true, force: true });
process.exit(0);

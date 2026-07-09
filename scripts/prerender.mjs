// Injects the server-rendered app into dist/index.html after the client
// build, so all text content is present without executing JavaScript.
// Runs as part of `npm run build` (works on Vercel — pure Node, no browser).
import { readFileSync, writeFileSync, rmSync } from "node:fs";

// React.lazy fires its dynamic import (maplibre-gl) during renderToString;
// it can't finish in Node and must not fail the build after we're done.
process.on("unhandledRejection", () => {});

const { render } = await import(
  new URL("../dist-server/entry-server.js", import.meta.url)
);

const marker = '<div id="root"></div>';
const html = readFileSync("dist/index.html", "utf8");
if (!html.includes(marker)) {
  console.error("prerender: #root marker not found in dist/index.html");
  process.exit(1);
}
writeFileSync(
  "dist/index.html",
  html.replace(marker, `<div id="root">${render()}</div>`)
);
rmSync("dist-server", { recursive: true, force: true });
console.log("prerender: injected server-rendered HTML into dist/index.html");
process.exit(0);

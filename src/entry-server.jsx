import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { projects } from "./data/projects.js";

// Build-time prerender entry: emits page HTML so crawlers, AI screening
// tools, and save-as-PDF get real content without JS. The router reads
// __SSR_PATH__ when there is no window.
export function render(path = "/") {
  globalThis.__SSR_PATH__ = path;
  return renderToString(<App />);
}

export const routes = ["/", ...projects.map((p) => `/work/${p.slug}`)];

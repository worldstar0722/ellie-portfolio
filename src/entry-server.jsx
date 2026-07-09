import { renderToString } from "react-dom/server";
import App from "./App.jsx";

// Build-time prerender entry: emits the full page HTML so crawlers,
// AI screening tools, and save-as-PDF get real content without JS.
export function render() {
  return renderToString(<App />);
}

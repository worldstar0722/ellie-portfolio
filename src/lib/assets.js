// Resolves an asset name to a URL under /images/.
//
// Two paths:
//   1. Data declares an exact `file` (e.g. "PROJECT01_sentiment_breakdown.png")
//      — used directly, so the image is in the server-rendered HTML with no
//      probing and no pop-in. This is the normal case.
//   2. No `file` declared — probe the supported extensions so a file dropped
//      into public/images/ with a matching base name still appears without
//      any code edit. Results are cached per name.
export const EXTENSIONS = ["webp", "jpg", "jpeg", "png", "pdf"];

const cache = new Map();

function probeImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

async function probe(name) {
  for (const ext of EXTENSIONS) {
    const url = `/images/${name}.${ext}`;
    if (ext === "pdf") {
      try {
        // The SPA rewrite answers 200 for missing files, so require the
        // %PDF magic bytes before treating this as a real document.
        const res = await fetch(url, { headers: { Range: "bytes=0-7" } });
        if (!res.ok) continue;
        if (!(await res.text()).startsWith("%PDF")) continue;
        const { renderPdfPreview } = await import("./pdfPreview.js");
        return await renderPdfPreview(url);
      } catch {
        continue;
      }
    } else if (await probeImage(url)) {
      return url;
    }
  }
  return null;
}

export function resolveAsset(name) {
  if (!cache.has(name)) cache.set(name, probe(name));
  return cache.get(name);
}

export function fileUrl(file) {
  return file ? `/images/${file}` : null;
}

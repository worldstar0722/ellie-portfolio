import { useEffect, useState } from "react";
import { renderPdfPreview } from "../lib/pdfPreview.js";

const ratioClass = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  square: "aspect-square",
  "21:9": "aspect-[21/9]",
  "4:5": "aspect-[4/5]",
};

// Any of these formats is accepted for an asset — the first one found in
// public/images/ wins. PDFs preview as their first page.
const EXTENSIONS = ["webp", "jpg", "jpeg", "png", "pdf"];

function probeImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

async function resolveAsset(name) {
  for (const ext of EXTENSIONS) {
    const url = `/images/${name}.${ext}`;
    if (ext === "pdf") {
      try {
        // The SPA rewrite answers 200 for missing files, so read the
        // first bytes and require the %PDF magic before rendering.
        const res = await fetch(url, { headers: { Range: "bytes=0-7" } });
        if (!res.ok) continue;
        const start = (await res.text()).slice(0, 5);
        if (!start.startsWith("%PDF")) continue;
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

// Labeled asset frame: shows the real file when one exists under any
// supported extension (never cropped — object-contain keeps the whole
// image visible whatever its shape); otherwise a polished paper
// placeholder with a clear "upload later" label.
export default function Placeholder({
  name,
  hint,
  ratio = "16:9",
  uploadLabel = "Upload later",
  className = "",
  src, // optional local override (used by the gallery editor previews)
}) {
  const [resolved, setResolved] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (src) return undefined;
    let cancelled = false;
    setResolved(null);
    setFailed(false);
    resolveAsset(name).then((url) => {
      if (cancelled) return;
      if (url) setResolved(url);
      else setFailed(true);
    });
    return () => {
      cancelled = true;
    };
  }, [name, src]);

  const shown = src ?? resolved;

  return (
    <figure
      className={`relative overflow-hidden rounded-[20px] border border-dashed border-ink/15 bg-[#F7F4EE]/70 placeholder-grid ${ratioClass[ratio] ?? "aspect-video"} ${className}`}
    >
      {shown ? (
        <img
          src={shown}
          alt={hint}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain"
        />
      ) : failed ? (
        <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
          <span className="max-w-full truncate rounded-full border-hairline border-solid bg-white/80 px-3 py-1 text-[10px] font-medium uppercase tracking-label text-ink/50">
            {name}
          </span>
          <span className="text-xs font-medium text-ink/55">
            {uploadLabel}: {hint} · {ratio}
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}

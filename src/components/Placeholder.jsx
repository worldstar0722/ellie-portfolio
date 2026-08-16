import { useAsset } from "../hooks/useAsset.js";

const ratioClass = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  square: "aspect-square",
  "21:9": "aspect-[21/9]",
  "4:5": "aspect-[4/5]",
};

// Asset frame. Shows the real image whenever one exists — never cropped
// (object-contain keeps the whole image visible whatever its shape).
//
// When the asset is missing:
//   - hideIfMissing (public galleries) renders nothing, so the grid closes
//     up instead of showing an empty box;
//   - otherwise a labeled paper placeholder is drawn, which is what the
//     gallery editor wants while arranging slots.
export default function Placeholder({
  name,
  file,
  hint,
  ratio = "16:9",
  uploadLabel = "Upload later",
  className = "",
  hideIfMissing = false,
  src, // local override (gallery editor previews)
}) {
  const asset = useAsset(name, file);
  const shown = src ?? asset.url;

  if (!shown && hideIfMissing) return null;

  // A real image gets the site's normal frame (solid hairline, soft
  // shadow); only an empty slot keeps the dashed placeholder treatment.
  const frame = shown
    ? "border-hairline border-solid bg-[#F7F4EE]/40 shadow-[0_2px_20px_rgba(35,39,47,0.05)]"
    : "border border-dashed border-ink/15 bg-[#F7F4EE]/70 placeholder-grid";

  return (
    <figure
      className={`relative overflow-hidden rounded-[20px] ${frame} ${ratioClass[ratio] ?? "aspect-video"} ${className}`}
    >
      {shown ? (
        <img
          src={shown}
          alt={hint}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain"
        />
      ) : asset.status === "missing" ? (
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

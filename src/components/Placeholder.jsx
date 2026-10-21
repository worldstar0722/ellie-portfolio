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
//   - otherwise a flat empty frame holds the space. The slot name and the
//     "upload later" hint are production notes, so they only appear when
//     showSlot is set — the gallery editor passes it, the public site
//     never does.
export default function Placeholder({
  name,
  file,
  hint,
  ratio = "16:9",
  uploadLabel = "Upload later",
  className = "",
  hideIfMissing = false,
  showSlot = false,
  src, // local override (gallery editor previews)
}) {
  const asset = useAsset(name, file);
  const shown = src ?? asset.url;

  if (!shown && hideIfMissing) return null;

  return (
    <figure
      className={`relative overflow-hidden rounded-xl bg-paper ${
        shown ? "border-hairline border-solid" : ""
      } ${ratioClass[ratio] ?? "aspect-video"} ${className}`}
    >
      {shown ? (
        <img
          src={shown}
          alt={hint}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain"
        />
      ) : showSlot && asset.status === "missing" ? (
        <figcaption className="absolute inset-0 flex flex-col justify-end gap-1 p-4">
          <span className="truncate text-micro font-medium uppercase tracking-label text-ink/65">
            {name}
          </span>
          <span className="text-micro text-ink/65">
            {uploadLabel}: {hint} · {ratio}
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}

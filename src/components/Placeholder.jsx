import { useState } from "react";

const ratioClass = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  square: "aspect-square",
  "21:9": "aspect-[21/9]",
};

// Labeled asset placeholder: renders /images/{name}.jpg when the asset
// exists; otherwise a polished paper-toned frame with a soft grid and a
// clear "upload later" label. Never an empty white box.
export default function Placeholder({
  name,
  hint,
  ratio = "16:9",
  uploadLabel = "Upload later",
  className = "",
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure
      className={`relative overflow-hidden rounded-[20px] border border-dashed border-ink/15 bg-[#F7F4EE]/70 placeholder-grid ${ratioClass[ratio] ?? "aspect-video"} ${className}`}
    >
      <img
        src={`/images/${name}.jpg`}
        alt={hint}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
      {!loaded ? (
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

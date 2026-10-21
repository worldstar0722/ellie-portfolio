import { useLanguage } from "../hooks/useLanguage.jsx";
import { metaFor } from "../lib/imageMeta.js";

// Evidence figure. Takes an explicit file under /images/ — real extension
// and all, including .svg — rather than guessing one, and defaults to
// `contain` so posters, maps, ERDs and charts are never cropped.
//
// caption/credit come from the data files in both languages. They are not
// decoration: a cropped poster panel or a classroom screenshot has to say
// what it is and whose work it is, or it reads as a claim it isn't.
export default function Figure({
  file,
  alt,
  caption,
  credit,
  fit = "contain",
  priority = false,
  zoomable = true,
  className = "",
  sources, // optional <source> list, e.g. SVG first with a PNG fallback
  boxRatio, // "16/9" to letterbox a tall asset into a consistent slot
}) {
  const { t } = useLanguage();
  const meta = metaFor(file);
  if (!file || !meta) return null;

  const src = `/images/${file}`;
  const fallback = sources?.length ? `/images/${sources[sources.length - 1]}` : src;
  const fallbackMeta = metaFor(sources?.[sources.length - 1] ?? file) ?? meta;

  const img = (
    <img
      src={fallback}
      alt={alt}
      width={fallbackMeta.w}
      height={fallbackMeta.h}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      className={`absolute inset-0 h-full w-full ${
        fit === "cover" ? "object-cover" : "object-contain"
      }`}
    />
  );

  return (
    <figure className={className}>
      <div
        className="relative overflow-hidden rounded-xl bg-paper"
        style={{ aspectRatio: boxRatio ?? `${meta.w} / ${meta.h}` }}
      >
        {sources?.length ? (
          <picture>
            {sources.slice(0, -1).map((s) => (
              <source
                key={s}
                srcSet={`/images/${s}`}
                type={s.endsWith(".svg") ? "image/svg+xml" : undefined}
              />
            ))}
            {img}
          </picture>
        ) : (
          img
        )}
      </div>

      {caption || credit || zoomable ? (
        <figcaption className="mt-4 space-y-1">
          {caption ? (
            <p className="text-micro text-ink/75">{caption}</p>
          ) : null}
          {credit ? (
            <p className="text-micro text-ink/65">
              {t.caseStudy.creditLabel}: {credit}
            </p>
          ) : null}
          {zoomable ? (
            <p>
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-micro font-medium uppercase tracking-label text-ink/75"
              >
                {t.caseStudy.viewFullSize} <span aria-hidden="true">↗</span>
              </a>
            </p>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

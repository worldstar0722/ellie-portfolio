import { useScrollFade } from "../hooks/useScrollFade.js";

export default function Section({ id, heading, children, className = "" }) {
  const ref = useScrollFade();

  return (
    <section id={id} className={`border-t-hairline ${className}`}>
      <div
        ref={ref}
        className="fade-section mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-28"
      >
        {heading ? (
          <h2 className="mb-12 text-xs font-semibold uppercase tracking-wide2 text-ink/50 md:mb-16">
            {heading}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}

import { Reveal } from "./motion.jsx";

export default function Section({ id, heading, children, className = "" }) {
  return (
    <section id={id} className={`border-t-hairline ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-32">
        {heading ? (
          <Reveal>
            <h2 className="mb-10 text-xs font-medium uppercase tracking-wide2 text-ink/50 md:mb-14">
              {heading}
            </h2>
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}

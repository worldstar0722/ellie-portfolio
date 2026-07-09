import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";

export default function Research() {
  const { t } = useLanguage();

  return (
    <Section id="research" heading={t.research.heading}>
      <div>
        {t.research.entries.map((entry) => (
          <article
            key={entry.id}
            id={`research-${entry.id}`}
            className="grid gap-6 border-t-hairline py-12 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-10 md:py-16"
          >
            <div className="md:col-span-3">
              <span className="text-[10px] font-semibold uppercase tracking-wide2 text-clay">
                {t.research.tag}
              </span>
            </div>

            <div className="md:col-span-9">
              <h3 className="max-w-2xl text-2xl font-semibold leading-snug tracking-headline text-ink md:text-3xl">
                {entry.title}
              </h3>
              <p className="mt-4 text-sm text-ink/45">{entry.role}</p>

              <ul className="mt-8 max-w-xl">
                {entry.findings.map((finding, i) => (
                  <li
                    key={i}
                    className="border-t-hairline py-3 text-sm leading-relaxed text-ink/70 first:border-t-0"
                  >
                    {finding}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

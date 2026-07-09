import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import { Stagger, StaggerChild } from "./motion.jsx";

export default function ResearchHighlights() {
  const { t } = useLanguage();

  return (
    <Section id="research" heading={t.research.heading}>
      <Stagger className="grid gap-12 md:grid-cols-2 md:gap-10">
        {t.research.entries.map((entry) => (
          <StaggerChild
            as="article"
            key={entry.id}
            className="flex flex-col rounded-[20px] border-hairline border-solid p-8 md:p-10"
          >
            <span className="text-[10px] font-medium uppercase tracking-wide2 text-clay">
              RESEARCH
            </span>
            <h3 className="mt-4 text-xl font-bold leading-snug tracking-headline text-ink md:text-2xl">
              {entry.title}
            </h3>
            <p className="mt-3 text-sm text-ink/45">{entry.role}</p>

            <h4 className="mt-8 text-[10px] font-medium uppercase tracking-wide2 text-ink/40">
              {t.research.evidenceLabel}
            </h4>
            <ul className="mt-3">
              {entry.evidence.map((item, i) => (
                <li
                  key={i}
                  className="border-t-hairline py-2.5 text-sm leading-relaxed text-ink/70 first:border-t-0"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-6 pt-8">
              <a
                href={`#/case/${entry.projectId}`}
                className="link-underline text-[12px] font-medium uppercase tracking-label"
              >
                {t.research.readMore} <span aria-hidden="true">↗</span>
              </a>
              <a
                href="#work"
                className="link-underline text-[12px] font-medium uppercase tracking-label"
              >
                {t.research.viewProject} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </StaggerChild>
        ))}
      </Stagger>
    </Section>
  );
}

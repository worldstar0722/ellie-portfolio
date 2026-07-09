import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import { Stagger, StaggerChild } from "./motion.jsx";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience" heading={t.experience.heading}>
      <Stagger as="ul">
        {t.experience.entries.map((entry) => (
          <StaggerChild
            as="li"
            key={entry.id}
            className="grid gap-2 border-t-hairline py-8 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-4">
              <h3 className="text-base font-semibold text-ink">{entry.title}</h3>
              <p className="mt-1 text-xs text-ink/45">{entry.org}</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-label text-ink/35 md:hidden">
                {entry.period}
              </p>
            </div>
            <div className="md:col-span-6">
              <p className="text-sm leading-relaxed text-ink/50">
                {entry.detail}
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-label text-clay">
                {entry.metric}
              </p>
            </div>
            <p className="hidden text-right text-[11px] font-medium uppercase tracking-label text-ink/35 md:col-span-2 md:block">
              {entry.period}
            </p>
          </StaggerChild>
        ))}
      </Stagger>
    </Section>
  );
}

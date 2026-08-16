import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import { Stagger, StaggerChild } from "./motion.jsx";

export default function Education() {
  const { t } = useLanguage();

  return (
    <Section id="education" heading={t.education.heading}>
      <Stagger as="ul">
        {t.education.entries.map((entry) => (
          <StaggerChild
            as="li"
            key={entry.id}
            className="grid gap-2 border-t-hairline py-8 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-5">
              <h3 className="text-base font-semibold text-ink">
                {entry.degree}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-ink/50">
                {entry.school}
              </p>
              <p className="mt-1.5 text-[11px] font-medium uppercase tracking-label text-ink/35 md:hidden">
                {entry.period}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-ink/50 md:col-span-5">
              {entry.detail}
            </p>
            <p className="hidden text-right text-[11px] font-medium uppercase tracking-label text-ink/35 md:col-span-2 md:block">
              {entry.period}
            </p>
          </StaggerChild>
        ))}
      </Stagger>
    </Section>
  );
}

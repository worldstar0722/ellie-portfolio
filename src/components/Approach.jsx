import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import { Reveal, Stagger, StaggerChild } from "./motion.jsx";

export default function Approach() {
  const { t } = useLanguage();

  return (
    <Section id="approach" heading={t.approach.heading}>
      <Reveal>
        <p className="mb-12 max-w-2xl text-2xl font-bold leading-snug tracking-headline text-ink md:mb-16 md:text-3xl">
          {t.approach.title}
        </p>
      </Reveal>
      <Stagger as="ol" className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        {t.approach.steps.map((step, i) => (
          <StaggerChild
            as="li"
            key={i}
            className={`pr-8 lg:px-6 ${i > 0 ? "lg:border-l-hairline" : "lg:pl-0"}`}
          >
            <span className="text-[11px] font-medium tracking-wide2 text-clay">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-sm font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/55">
              {step.text}
            </p>
          </StaggerChild>
        ))}
      </Stagger>
    </Section>
  );
}

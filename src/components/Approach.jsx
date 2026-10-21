import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import { Reveal, Stagger, StaggerChild } from "./motion.jsx";

export default function Approach() {
  const { t } = useLanguage();

  return (
    <Section id="approach" heading={t.approach.heading}>
      <Reveal>
        <p className="mb-12 max-w-2xl text-h4 font-bold tracking-headline text-ink md:text-h3">
          {t.approach.title}
        </p>
      </Reveal>
      <Stagger as="ol" className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
        {t.approach.steps.map((step, i) => (
          <StaggerChild
            as="li"
            key={i}
            className="border-t-hairline pr-8 pt-4 lg:pr-10"
          >
            <span className="text-micro font-medium tracking-wide2 text-clay-text">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-body font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-body text-ink/75">{step.text}</p>
          </StaggerChild>
        ))}
      </Stagger>
    </Section>
  );
}

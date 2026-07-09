import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import { Stagger, StaggerChild } from "./motion.jsx";

export default function Recognition() {
  const { t } = useLanguage();

  return (
    <Section id="recognition" heading={t.recognition.heading}>
      <Stagger as="ul" className="max-w-3xl">
        {t.recognition.items.map((item, i) => (
          <StaggerChild
            as="li"
            key={i}
            className="flex items-baseline gap-4 border-t-hairline py-5 first:border-t-0 first:pt-0 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="block h-[7px] w-[7px] shrink-0 translate-y-[-1px] rounded-full bg-clay/70"
            />
            <p className="text-sm leading-relaxed text-ink/80 md:text-base">
              {item}
            </p>
          </StaggerChild>
        ))}
      </Stagger>
    </Section>
  );
}

import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import Logo from "./Logo.jsx";
import { Reveal, Stagger, StaggerChild } from "./motion.jsx";

export default function Identity() {
  const { t } = useLanguage();

  return (
    <Section id="identity" heading={t.identity.heading}>
      <Reveal className="grid gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-3">
          <span className="text-[10px] font-medium uppercase tracking-wide2 text-clay">
            {t.identity.markLabel}
          </span>
          <Logo className="mt-6 h-[56px] w-auto" />
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-ink/70 md:col-span-9">
          {t.identity.markStory}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 border-t-hairline pt-10 md:mt-16 md:grid-cols-12 md:gap-10 md:pt-12">
        <Reveal className="md:col-span-3">
          <span className="text-[10px] font-medium uppercase tracking-wide2 text-ink/40">
            {t.identity.paletteLabel}
          </span>
        </Reveal>
        <Stagger
          as="ul"
          className="grid grid-cols-2 gap-y-6 sm:grid-cols-3 md:col-span-9 lg:grid-cols-5"
        >
          {t.identity.colors.map((color, i) => (
            <StaggerChild
              as="li"
              key={color.hex}
              className={`pr-6 lg:px-6 ${i > 0 ? "lg:border-l-hairline" : "lg:pl-0"}`}
            >
              <span
                aria-hidden="true"
                className="block h-11 w-11 rounded-full border-hairline border-solid"
                style={{ backgroundColor: color.hex }}
              />
              <p className="mt-3 text-xs font-semibold text-ink">{color.name}</p>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-label text-ink/40">
                {color.hex}
              </p>
            </StaggerChild>
          ))}
        </Stagger>
      </div>

      <div className="mt-14 grid gap-8 border-t-hairline pt-10 md:mt-16 md:grid-cols-12 md:gap-10 md:pt-12">
        <Reveal className="md:col-span-3">
          <span className="text-[10px] font-medium uppercase tracking-wide2 text-ink/40">
            {t.identity.storyLabel}
          </span>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-9">
          <p className="max-w-2xl text-base leading-relaxed text-ink/70">
            {t.identity.story}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

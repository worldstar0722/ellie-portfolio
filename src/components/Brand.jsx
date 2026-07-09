import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import Logo from "./Logo.jsx";
import { Reveal, Stagger, StaggerChild } from "./motion.jsx";

export default function Brand() {
  const { t } = useLanguage();

  return (
    <Section id="identity" heading={t.brand.heading}>
      {/* The mark */}
      <Reveal className="grid gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-3">
          <span className="text-[10px] font-medium uppercase tracking-wide2 text-clay">
            {t.brand.markLabel}
          </span>
          <Logo className="mt-8 h-[72px] w-auto" />
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-ink/70 md:col-span-9 md:text-lg">
          {t.brand.markStory}
        </p>
      </Reveal>

      {/* The palette */}
      <div className="mt-20 grid gap-8 border-t-hairline pt-14 md:mt-24 md:grid-cols-12 md:gap-10 md:pt-20">
        <Reveal className="md:col-span-3">
          <span className="text-[10px] font-medium uppercase tracking-wide2 text-ink/40">
            {t.brand.paletteLabel}
          </span>
        </Reveal>
        <Stagger
          as="ul"
          className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 md:col-span-9 lg:grid-cols-5"
        >
          {t.brand.colors.map((color, i) => (
            <StaggerChild
              as="li"
              key={color.hex}
              className={`pr-6 lg:px-6 ${i > 0 ? "lg:border-l-hairline" : "lg:pl-0"}`}
            >
              <span
                aria-hidden="true"
                className="block h-14 w-14 rounded-full border-hairline border-solid"
                style={{ backgroundColor: color.hex }}
              />
              <p className="mt-4 text-xs font-semibold text-ink">{color.name}</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-label text-ink/40">
                {color.hex}
              </p>
            </StaggerChild>
          ))}
        </Stagger>
      </div>

      {/* The story */}
      <div className="mt-20 grid gap-8 border-t-hairline pt-14 md:mt-24 md:grid-cols-12 md:gap-10 md:pt-20">
        <Reveal className="md:col-span-3">
          <span className="text-[10px] font-medium uppercase tracking-wide2 text-ink/40">
            {t.brand.storyLabel}
          </span>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-9">
          <p className="max-w-2xl text-base leading-relaxed text-ink/70">
            {t.brand.story}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

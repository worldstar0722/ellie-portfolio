import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import Logo from "./Logo.jsx";
import { Reveal } from "./motion.jsx";

export default function Identity() {
  const { t } = useLanguage();

  return (
    <Section id="identity" heading={t.identity.heading}>
      <Reveal className="grid gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-3">
          <span className="text-micro font-medium uppercase tracking-wide2 text-clay-text">
            {t.identity.markLabel}
          </span>
          <Logo className="mt-6 h-[56px] w-auto" />
        </div>
        <p className="max-w-2xl text-lead text-ink/75 md:col-span-9">
          {t.identity.markStory}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 border-t-hairline pt-8 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-3">
          <span className="text-micro font-medium uppercase tracking-wide2 text-ink/65">
            {t.identity.storyLabel}
          </span>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-9">
          <p className="max-w-2xl text-lead text-ink/75">
            {t.identity.story}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

import { useLanguage } from "../hooks/useLanguage.jsx";
import { useScrollFade } from "../hooks/useScrollFade.js";

export default function Hero() {
  const { t } = useLanguage();
  const ref = useScrollFade();

  return (
    <section id="top">
      <div
        ref={ref}
        className="fade-section mx-auto max-w-6xl px-6 pb-28 pt-24 sm:px-8 md:pb-40 md:pt-36"
      >
        <p className="mb-8 text-[11px] font-semibold uppercase tracking-wide2 text-clay md:mb-10">
          {t.hero.tagline}
        </p>

        <h1 className="text-5xl font-semibold leading-[1.05] tracking-headline sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block text-ink">{t.hero.headlineLine1}</span>
          <span className="block text-navy">{t.hero.headlineLine2}</span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/55 md:mt-10 md:text-lg">
          {t.hero.subline}
        </p>

        <div className="mt-12 flex items-center gap-8 md:mt-14">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[12px] font-medium uppercase tracking-label"
          >
            {t.hero.resume} <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[12px] font-medium uppercase tracking-label"
          >
            {t.hero.linkedin} <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://calendly.com/worldstar0722/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[12px] font-medium uppercase tracking-label"
          >
            {t.hero.coffeeChat} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

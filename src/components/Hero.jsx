import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage.jsx";
import { easeOutSoft } from "./motion.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const line = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOutSoft } },
};

// Portrait with WebP + JPG fallback. aspect-ratio is reserved up front so
// there is no layout shift; until the files are uploaded, the frame shows
// the site's labeled paper placeholder instead of a broken image.
function HeroPortrait({ alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-paper"
      style={{ aspectRatio: "4 / 5" }}
    >
      {!failed ? (
        <picture>
          <source srcSet="/images/ellie-portrait.webp" type="image/webp" />
          <img
            src="/images/ellie-portrait.jpg"
            alt={alt}
            width="800"
            height="1000"
            fetchpriority="high"
            onError={() => setFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
      ) : null}
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  const ctas = [
    { label: t.hero.viewWork, href: "#work" },
    { label: t.hero.resume, href: "/resume.pdf", external: true },
    { label: t.hero.linkedin, href: "https://www.linkedin.com/in/worldstar0722/", external: true },
    { label: t.hero.coffeeChat, href: "https://calendly.com/worldstar0722/30min", external: true },
  ];

  return (
    <section id="top">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 pb-32 pt-24 sm:px-8 md:grid-cols-12 md:gap-10 md:pb-40 md:pt-32"
      >
        <div className="md:col-span-7 lg:col-span-8">
          <motion.p
            variants={line}
            className="mb-8 text-micro font-medium uppercase tracking-wide2 text-clay-text"
          >
            {t.hero.tagline}
          </motion.p>

          {/* The only L1 on the site. */}
          <h1 className="text-h3 font-bold tracking-headline sm:text-h2 lg:text-h1">
            <motion.span variants={line} className="block text-ink">
              {t.hero.headlineLine1}
            </motion.span>
            <motion.span variants={line} className="block text-navy">
              {t.hero.headlineLine2}
            </motion.span>
          </h1>

          <motion.p
            variants={line}
            className="mt-8 max-w-2xl text-lead text-ink/75"
          >
            {t.hero.supporting}
          </motion.p>

          <motion.div variants={line} className="mt-8">
            <p className="text-body font-medium text-ink/75">
              {t.hero.subline}
            </p>
            <p className="mt-2 text-micro text-ink/65">
              {t.hero.sublineMeta}
            </p>
          </motion.div>

          {/* Mobile: portrait stacks below the subline */}
          <motion.div variants={line} className="mt-8 md:hidden">
            <HeroPortrait alt={t.hero.portraitAlt} />
          </motion.div>

          <motion.div
            variants={line}
            className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            {ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noopener noreferrer" : undefined}
                className="link-underline text-micro font-medium uppercase tracking-label"
              >
                {cta.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Desktop: portrait on the right, headline stays left */}
        <motion.div
          variants={line}
          className="hidden md:col-span-5 md:block lg:col-span-4"
        >
          <HeroPortrait alt={t.hero.portraitAlt} />
        </motion.div>
      </motion.div>
    </section>
  );
}

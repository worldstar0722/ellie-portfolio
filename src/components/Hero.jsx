import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage.jsx";
import { easeOutSoft } from "./motion.jsx";
import Placeholder from "./Placeholder.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const line = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOutSoft } },
};

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
        className="mx-auto max-w-6xl px-6 pb-24 pt-24 sm:px-8 md:pb-32 md:pt-36"
      >
        <motion.p
          variants={line}
          className="mb-8 text-[11px] font-medium uppercase tracking-wide2 text-clay"
        >
          {t.hero.tagline}
        </motion.p>

        <h1 className="text-5xl font-bold leading-[1.08] tracking-headline sm:text-6xl md:text-7xl lg:text-8xl">
          <motion.span variants={line} className="block text-ink">
            {t.hero.headlineLine1}
          </motion.span>
          <motion.span variants={line} className="block text-navy">
            {t.hero.headlineLine2}
          </motion.span>
        </h1>

        <motion.p
          variants={line}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70 md:text-xl"
        >
          {t.hero.supporting}
        </motion.p>

        <motion.p
          variants={line}
          className="mt-5 text-sm leading-relaxed text-ink/45"
        >
          {t.hero.subline}
        </motion.p>

        <motion.div
          variants={line}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          {ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              target={cta.external ? "_blank" : undefined}
              rel={cta.external ? "noopener noreferrer" : undefined}
              className="link-underline text-[12px] font-medium uppercase tracking-label"
            >
              {cta.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </motion.div>

        <motion.div variants={line} className="mt-16 md:mt-20">
          <Placeholder
            name="hero_collage"
            hint={t.hero.visualLabel}
            ratio="21:9"
            uploadLabel={t.work.uploadLater}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

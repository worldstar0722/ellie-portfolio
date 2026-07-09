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

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-6 pb-32 pt-28 sm:px-8 md:pb-52 md:pt-44"
      >
        <motion.p
          variants={line}
          className="mb-8 text-[11px] font-medium uppercase tracking-wide2 text-clay md:mb-10"
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
          className="mt-8 max-w-xl text-base leading-relaxed text-ink/55 md:mt-10 md:text-lg"
        >
          {t.hero.subline}
        </motion.p>

        <motion.div
          variants={line}
          className="mt-12 flex flex-wrap items-center gap-8 md:mt-14"
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
}

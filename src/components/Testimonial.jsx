import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import { Reveal } from "./motion.jsx";

export default function Testimonial() {
  const { t } = useLanguage();

  return (
    <Section id="testimonial">
      <figure className="mx-auto max-w-3xl py-8 text-center md:py-16">
        <Reveal>
          <blockquote className="text-2xl font-semibold leading-snug tracking-headline text-ink md:text-4xl md:leading-tight">
            {t.testimonial.quote}
          </blockquote>
        </Reveal>
        <Reveal delay={0.15}>
          <figcaption className="mt-10 text-[11px] font-medium uppercase tracking-label text-ink/40">
            {t.testimonial.attribution}
          </figcaption>
        </Reveal>
      </figure>
    </Section>
  );
}

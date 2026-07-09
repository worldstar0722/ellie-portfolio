import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import { Reveal } from "./motion.jsx";

export default function Testimonial() {
  const { t } = useLanguage();

  return (
    <Section id="testimonial">
      <Reveal>
        <figure className="mx-auto max-w-3xl rounded-[20px] border-hairline border-solid px-8 py-12 text-center md:px-16 md:py-16">
          <blockquote className="text-xl font-semibold leading-snug tracking-headline text-ink md:text-3xl md:leading-tight">
            {t.testimonial.quote}
          </blockquote>
          <figcaption className="mt-8 text-[11px] font-medium uppercase tracking-label text-ink/40">
            {t.testimonial.attribution}
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  );
}

import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import { Reveal, Stagger, StaggerChild, Collapse } from "./motion.jsx";

function FeaturedCard({ entry }) {
  return (
    <StaggerChild
      as="li"
      className="grid gap-3 border-t-hairline py-8 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-10"
    >
      <div className="md:col-span-4">
        <h3 className="text-base font-semibold text-ink">{entry.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-ink/50">{entry.org}</p>
        {entry.meta ? (
          <p className="mt-1 text-[11px] text-ink/35">{entry.meta}</p>
        ) : null}
        <p className="mt-1.5 text-[11px] font-medium uppercase tracking-label text-ink/35 md:hidden">
          {entry.period}
        </p>
      </div>

      <div className="md:col-span-6">
        <p className="text-sm leading-relaxed text-ink/60">
          {entry.description}
        </p>
        {entry.courses ? (
          <ul className="mt-3 space-y-1">
            {entry.courses.map((course) => (
              <li key={course} className="text-xs text-ink/50">
                {course}
              </li>
            ))}
          </ul>
        ) : null}
        {entry.nested ? (
          <ul className="mt-3 space-y-1.5">
            {entry.nested.map((role) => (
              <li key={role} className="flex items-baseline gap-2.5 text-xs text-ink/50">
                <span
                  aria-hidden="true"
                  className="block h-[4px] w-[4px] shrink-0 rounded-full bg-clay/60"
                />
                {role}
              </li>
            ))}
          </ul>
        ) : null}
        <ul className="mt-4 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border-hairline border-solid px-2.5 py-0.5 text-[10px] font-medium tracking-label text-ink/55"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <p className="hidden text-right text-[11px] font-medium uppercase tracking-label text-ink/35 md:col-span-2 md:block">
        {entry.period}
      </p>
    </StaggerChild>
  );
}

export default function Experience() {
  const { t } = useLanguage();
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <Section id="experience" heading={t.experience.heading}>
      <Reveal>
        <p className="mb-12 max-w-2xl text-2xl font-bold leading-snug tracking-headline text-ink md:mb-16 md:text-3xl">
          {t.experience.subtitle}
        </p>
      </Reveal>

      <Stagger as="ul">
        {t.experience.featured.map((entry) => (
          <FeaturedCard key={entry.id} entry={entry} />
        ))}
      </Stagger>

      {/* Earlier roles: compact, collapsed, secondary */}
      <Reveal>
        <div className="mt-10 border-t-hairline pt-6">
          <button
            type="button"
            onClick={() => setShowEarlier((v) => !v)}
            aria-expanded={showEarlier}
            aria-controls="earlier-experience"
            className="link-underline text-[12px] font-medium uppercase tracking-label text-ink/60"
          >
            {t.experience.earlierHeading} ({t.experience.earlier.length}){" "}
            <span aria-hidden="true">{showEarlier ? "−" : "+"}</span>
          </button>
          <Collapse open={showEarlier} id="earlier-experience">
            <ul className="pt-5">
              {t.experience.earlier.map((entry) => (
                <li
                  key={entry.id}
                  className="grid gap-1 border-t-hairline py-4 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-8"
                >
                  <div className="md:col-span-4">
                    <p className="text-sm font-medium text-ink/80">
                      {entry.title}
                    </p>
                    <p className="text-[11px] text-ink/40">{entry.org}</p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink/50 md:col-span-6">
                    {entry.description}
                  </p>
                  <p className="text-[10px] font-medium uppercase tracking-label text-ink/35 md:col-span-2 md:text-right">
                    {entry.period}
                  </p>
                </li>
              ))}
            </ul>
          </Collapse>

          <p className="mt-6">
            <a
              href="https://www.linkedin.com/in/worldstar0722/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[12px] font-medium uppercase tracking-label"
            >
              {t.experience.linkedInCta} <span aria-hidden="true">↗</span>
            </a>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

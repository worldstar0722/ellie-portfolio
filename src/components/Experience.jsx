import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import { Reveal, Stagger, StaggerChild, Collapse } from "./motion.jsx";

function FeaturedCard({ entry, currentFocusLabel }) {
  // Older campus roles render tighter so they never compete with the
  // finance and technology roles above them.
  if (entry.compact) {
    return (
      <StaggerChild
        as="li"
        className="grid gap-2 border-t-hairline py-6 md:grid-cols-12 md:gap-10"
      >
        <div className="md:col-span-4">
          <h3 className="text-body font-medium text-ink">{entry.title}</h3>
          <p className="mt-1 text-micro text-ink/65">{entry.org}</p>
        </div>
        <p className="text-micro text-ink/65 md:col-span-6">
          {entry.description}
        </p>
        <p className="text-micro font-medium uppercase tracking-label text-ink/65 md:col-span-2 md:text-right">
          {entry.period}
        </p>
      </StaggerChild>
    );
  }

  return (
    <StaggerChild
      as="li"
      className="grid gap-4 border-t-hairline py-8 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-10"
    >
      <div className="md:col-span-4">
        {currentFocusLabel ? (
          <p className="mb-2 text-micro font-medium uppercase tracking-wide2 text-clay-text">
            {currentFocusLabel}
          </p>
        ) : null}
        <h3 className="text-lead font-semibold text-ink">{entry.title}</h3>
        <p className="mt-2 text-micro text-ink/65">{entry.org}</p>
        {entry.meta ? (
          <p className="mt-1 text-micro text-ink/65">{entry.meta}</p>
        ) : null}
        <p className="mt-2 text-micro font-medium uppercase tracking-label text-ink/65 md:hidden">
          {entry.period}
        </p>
      </div>

      <div className="md:col-span-6">
        <p className="text-body text-ink/75">{entry.description}</p>
        {entry.courses ? (
          <ul className="mt-4 space-y-1">
            {entry.courses.map((course) => (
              <li key={course} className="text-micro text-ink/65">
                {course}
              </li>
            ))}
          </ul>
        ) : null}
        {entry.nested ? (
          <ul className="mt-4 space-y-2">
            {entry.nested.map((role) => (
              <li
                key={role}
                className="flex items-baseline gap-2 text-micro text-ink/65"
              >
                <span
                  aria-hidden="true"
                  className="relative top-[-2px] block h-[4px] w-[4px] shrink-0 rounded-full bg-clay"
                />
                {role}
              </li>
            ))}
          </ul>
        ) : null}
        <p className="mt-4 text-micro font-medium tracking-label text-ink/65">
          {entry.tags.join("  ·  ")}
        </p>
      </div>

      <p className="hidden text-right text-micro font-medium uppercase tracking-label text-ink/65 md:col-span-2 md:block">
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
        <p className="mb-12 max-w-2xl text-h4 font-bold tracking-headline text-ink md:text-h3">
          {t.experience.subtitle}
        </p>
      </Reveal>

      <Stagger as="ul">
        {t.experience.featured.map((entry, i) => (
          <FeaturedCard
            key={entry.id}
            entry={entry}
            currentFocusLabel={i === 0 ? t.experience.currentFocusLabel : null}
          />
        ))}
      </Stagger>

      {/* Earlier roles: compact, collapsed, secondary */}
      <Reveal>
        <div className="mt-8 border-t-hairline pt-8">
          <button
            type="button"
            onClick={() => setShowEarlier((v) => !v)}
            aria-expanded={showEarlier}
            aria-controls="earlier-experience"
            className="link-underline text-micro font-medium uppercase tracking-label text-ink/75"
          >
            {t.experience.earlierHeading} ({t.experience.earlier.length}){" "}
            <span aria-hidden="true">{showEarlier ? "−" : "+"}</span>
          </button>
          <Collapse open={showEarlier} id="earlier-experience">
            <ul className="pt-6">
              {t.experience.earlier.map((entry) => (
                <li
                  key={entry.id}
                  className="grid gap-2 border-t-hairline py-4 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-8"
                >
                  <div className="md:col-span-4">
                    <p className="text-body font-medium text-ink/80">
                      {entry.title}
                    </p>
                    <p className="text-micro text-ink/65">{entry.org}</p>
                  </div>
                  <p className="text-micro text-ink/65 md:col-span-6">
                    {entry.description}
                  </p>
                  <p className="text-micro font-medium uppercase tracking-label text-ink/65 md:col-span-2 md:text-right">
                    {entry.period}
                  </p>
                </li>
              ))}
            </ul>
          </Collapse>

          <p className="mt-8">
            <a
              href="https://www.linkedin.com/in/worldstar0722/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-micro font-medium uppercase tracking-label"
            >
              {t.experience.linkedInCta} <span aria-hidden="true">↗</span>
            </a>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

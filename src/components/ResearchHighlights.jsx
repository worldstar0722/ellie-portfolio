import { useLanguage } from "../hooks/useLanguage.jsx";
import { Link } from "../lib/router.jsx";
import Section from "./Section.jsx";
import { Stagger, StaggerChild, Reveal } from "./motion.jsx";

// Compact credibility strip: academic depth behind the Featured Work
// case studies, deliberately smaller than the project cards above it.
export default function ResearchHighlights() {
  const { t } = useLanguage();

  return (
    <Section id="research" heading={t.research.heading}>
      <Stagger>
        {t.research.entries.map((entry) => (
          <StaggerChild
            as="article"
            key={entry.id}
            className="grid gap-4 border-t-hairline py-8 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-7">
              <span className="text-[10px] font-medium uppercase tracking-wide2 text-clay">
                RESEARCH
              </span>
              <h3 className="mt-2 max-w-xl text-base font-semibold leading-snug text-ink md:text-lg">
                {entry.title}
              </h3>
              <p className="mt-1.5 text-xs text-ink/45">{entry.role}</p>
            </div>

            <div className="flex flex-col md:col-span-5">
              <ul className="flex flex-wrap gap-2">
                {entry.evidence.map((item, i) => (
                  <li
                    key={i}
                    className="rounded-full border-hairline border-solid bg-[#F7F4EE]/60 px-3 py-1 text-[11px] font-medium text-ink/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link
                  to={`/work/${entry.projectId}`}
                  className="link-underline text-[12px] font-medium uppercase tracking-label"
                >
                  {t.research.viewCase} <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </StaggerChild>
        ))}
      </Stagger>

      {/* Secondary document link for research-minded readers */}
      <Reveal>
        <p className="mt-10 border-t-hairline pt-6 text-[12px]">
          <a
            href="/academic-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-medium uppercase tracking-label text-ink/60"
          >
            {t.research.academicCv} <span aria-hidden="true">↗</span>
          </a>
          <span className="ml-3 text-ink/40">{t.research.academicCvNote}</span>
        </p>
      </Reveal>
    </Section>
  );
}

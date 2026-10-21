import { Fragment } from "react";
import { useLanguage } from "../hooks/useLanguage.jsx";
import { projects } from "../data/projects.js";
import { Link } from "../lib/router.jsx";
import Section from "./Section.jsx";
import Figure from "./Figure.jsx";
import { Reveal } from "./motion.jsx";

// Three tiers, and they have to be legible at a squint:
//   1 — the research case studies: full-width image, largest headings;
//   2 — the PropTech study: same layout, image in the narrow column;
//   3 — supporting technical and urban work: compact row, small thumbnail.
const TIER = {
  fintech: 1,
  appliedai: 1,
  transferable: 1,
  proptech: 2,
  technical: 3,
  additional: 3,
};

function GroupLabel({ label, first, primary }) {
  return (
    <Reveal>
      <p
        className={`text-micro font-medium uppercase tracking-wide2 ${
          primary ? "text-clay-text" : "text-ink/65"
        } ${first ? "" : "mt-8 border-t-hairline pt-16 md:pt-20"}`}
      >
        {label}
      </p>
    </Reveal>
  );
}

// Supporting work: deliberately lighter than the case studies above it —
// a small thumbnail at most, tighter type.
function CompactProjectCard({ project }) {
  const { lang, t } = useLanguage();
  const copy = project[lang];

  return (
    <Reveal as="article" className="border-t-hairline py-8">
      <div className="grid gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-3">
          {/* Letterboxed into one slot shape: these covers range from a
              tall ERD page to a wide dashboard, and at thumbnail size a
              consistent box reads better than a faithful aspect ratio. */}
          <Figure
            file={project.cover.file}
            sources={project.cover.sources}
            alt={copy.coverAlt}
            fit={project.cover.fit}
            boxRatio="16 / 10"
            zoomable={false}
          />
        </div>
        <div className="md:col-span-6">
          <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="text-micro font-medium tracking-wide2 text-clay-text">
              {project.number}
            </span>
            <span className="text-micro font-medium uppercase tracking-label text-ink/65">
              {copy.category}
            </span>
          </p>
          <h3 className="mt-2 text-h4 font-semibold tracking-headline text-ink">
            {copy.title}
          </h3>
          <p className="mt-2 max-w-xl text-body text-ink/75">{copy.subtitle}</p>
          <p className="mt-4 text-micro text-ink/65">{copy.role}</p>
        </div>
        <div className="flex flex-col gap-4 md:col-span-3">
          <p className="text-micro font-medium tracking-label text-ink/65">
            {project.tools.join("  ·  ")}
          </p>
          <Link
            to={`/work/${project.slug}`}
            className="link-underline self-start text-micro font-medium uppercase tracking-label"
          >
            {t.work.viewCaseStudy} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectCard({ project, tier, flip, flush }) {
  const { lang, t } = useLanguage();
  const copy = project[lang];
  const labels = t.work;
  const lead = tier === 1;

  return (
    <Reveal
      as="article"
      className={`py-16 md:py-20 ${
        flush ? "pt-8" : "border-t-hairline first:border-t-0 first:pt-0"
      }`}
    >
      <div
        className={`grid gap-10 md:gap-12 ${
          lead ? "md:grid-cols-2" : "md:grid-cols-12"
        }`}
      >
        <div
          className={`flex flex-col ${flip ? "md:order-2" : ""} ${
            lead ? "" : "md:col-span-7"
          }`}
        >
          <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="text-micro font-medium tracking-wide2 text-clay-text">
              {project.number}
            </span>
            <span className="text-micro font-medium uppercase tracking-label text-ink/65">
              {copy.category}
            </span>
            {project.inProgress ? (
              <span className="text-micro font-medium uppercase tracking-label text-clay-text">
                · {t.caseStudy.inProgress}
              </span>
            ) : null}
          </p>
          <h3
            className={`mt-4 font-bold tracking-headline text-ink ${
              lead ? "text-h4 md:text-h3" : "text-h4"
            }`}
          >
            {copy.title}
          </h3>
          <p
            className={`mt-4 text-ink/75 ${
              lead ? "max-w-md text-lead" : "max-w-lg text-body"
            }`}
          >
            {copy.subtitle}
          </p>

          <p className="mt-8 text-body text-ink/75">
            <span className="block text-micro font-medium uppercase tracking-wide2 text-ink/65">
              {labels.roleLabel}
            </span>
            <span className="mt-2 block">{copy.role}</span>
          </p>

          <div className="mt-6">
            <h4 className="text-micro font-medium uppercase tracking-wide2 text-ink/65">
              {labels.toolsLabel}
            </h4>
            <p className="mt-2 text-body text-ink/75">
              {project.tools.join("  ·  ")}
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-micro font-medium uppercase tracking-wide2 text-ink/65">
              {labels.proofLabel}
            </h4>
            <ul className="mt-2">
              {copy.proofPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-baseline gap-4 border-t-hairline py-2 text-body text-ink/75 first:border-t-0"
                >
                  <span
                    aria-hidden="true"
                    className="relative top-[-2px] block h-[5px] w-[5px] shrink-0 rounded-full bg-clay"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-8">
            <Link
              to={`/work/${project.slug}`}
              className="link-underline text-micro font-medium uppercase tracking-label"
            >
              {labels.viewCaseStudy} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div
          className={`${flip ? "md:order-1" : ""} ${
            lead ? "" : "md:col-span-5"
          }`}
        >
          <Figure
            file={project.cover.file}
            sources={project.cover.sources}
            alt={copy.coverAlt}
            fit={project.cover.fit}
            zoomable={false}
            className="md:sticky md:top-24"
          />
        </div>
      </div>
    </Reveal>
  );
}

export default function FeaturedWork() {
  const { t } = useLanguage();

  return (
    <Section id="work" heading={t.work.heading}>
      <div>
        {projects.map((project, i) => {
          const opensGroup = project.group !== projects[i - 1]?.group;
          const tier = TIER[project.group] ?? 3;
          return (
            <Fragment key={project.slug}>
              {opensGroup ? (
                <GroupLabel
                  label={t.work.groups[project.group]}
                  first={i === 0}
                  primary={project.group === "fintech"}
                />
              ) : null}
              {tier === 3 ? (
                <CompactProjectCard project={project} />
              ) : (
                <ProjectCard
                  project={project}
                  tier={tier}
                  flip={i % 2 === 1}
                  flush={opensGroup}
                />
              )}
            </Fragment>
          );
        })}
      </div>
    </Section>
  );
}

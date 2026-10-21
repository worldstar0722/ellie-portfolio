import { useEffect, useState } from "react";
import { useLanguage } from "../hooks/useLanguage.jsx";
import { projects } from "../data/projects.js";
import { Link } from "../lib/router.jsx";
import { isEditMode } from "../lib/editMode.js";
import Figure from "./Figure.jsx";
import GalleryEditor from "./GalleryEditor.jsx";
import { Reveal } from "./motion.jsx";

function SectionBlock({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-t-hairline py-16">
      <Reveal>
        <h2 className="mb-8 text-micro font-medium uppercase tracking-wide2 text-ink/65">
          {title}
        </h2>
        {children}
      </Reveal>
    </section>
  );
}

// A row with nothing to say renders nothing: fields that are still blank
// (an unknown timeline, a source not yet written up) stay out of the
// public page rather than announcing that they are missing.
function Row({ label, children }) {
  if (!children) return null;

  return (
    <div className="grid gap-2 border-t-hairline py-4 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-8">
      <h3 className="text-micro font-medium uppercase tracking-wide2 text-ink/65 md:col-span-3 md:pt-1">
        {label}
      </h3>
      <p className="text-body text-ink/75 md:col-span-9">{children}</p>
    </div>
  );
}

export default function CaseStudy({ project }) {
  const { lang, t } = useLanguage();
  const copy = project[lang];
  const L = t.caseStudy;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setEditMode(isEditMode()); // client-only: keeps SSR output stable
  }, [project.slug]);

  const anchors = [
    { id: "cs-overview", label: L.overview },
    ...(copy.researchContext
      ? [{ id: "cs-research", label: L.researchContext }]
      : []),
    { id: "cs-problem", label: L.problem },
    { id: "cs-data", label: L.data },
    { id: "cs-method", label: L.method },
    { id: "cs-results", label: L.results },
    { id: "cs-impact", label: L.impact },
    { id: "cs-evidence", label: L.evidence },
    { id: "cs-reflection", label: L.reflection },
  ];

  return (
    <main>
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        {/* Project hero */}
        <div className="pb-16 pt-16 md:pt-24">
          <Reveal>
            <Link
              to="/"
              className="link-underline text-micro font-medium uppercase tracking-label text-ink/75"
            >
              ← {L.backToWork}
            </Link>
            <p className="mt-8 text-micro font-medium tracking-wide2 text-clay-text">
              {project.number}
            </p>
            <h1 className="mt-4 max-w-3xl text-h3 font-bold tracking-headline text-ink md:text-h2">
              {copy.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lead text-ink/75">
              {copy.subtitle}
            </p>

            <div className="mt-8 max-w-3xl">
              <Row label={L.roleLabel}>{copy.role}</Row>
              <Row label={L.teamLabel}>
                {project.team?.length ? project.team.join(" · ") : null}
              </Row>
              <Row label={L.mentorLabel}>
                {project.mentors?.length ? project.mentors.join(" · ") : null}
              </Row>
              <Row label={L.courseLabel}>{project.course}</Row>
              <Row label={L.typeLabel}>{copy.projectType}</Row>
              <Row label={L.timelineLabel}>{copy.timeline}</Row>
              <Row label={L.statusLabel}>{copy.status}</Row>
              <Row label={L.toolsLabel}>{project.tools.join(" · ")}</Row>
              <Row label={L.outcomeLabel}>{copy.outcome}</Row>
            </div>

            <div className="mt-8">
              <Figure
                file={project.cover.file}
                sources={project.cover.sources}
                alt={copy.coverAlt}
                fit={project.cover.fit}
                priority
                zoomable={false}
              />
            </div>
          </Reveal>
        </div>

        {/* Snapshot */}
        <section className="border-t-hairline py-12">
          <Reveal>
            <h2 className="mb-6 text-micro font-medium uppercase tracking-wide2 text-ink/65">
              {L.snapshot}
            </h2>
            <ul className="grid grid-cols-2 gap-x-8 md:grid-cols-5">
              {copy.snapshot.map((item) => (
                <li key={item.label} className="border-t-hairline py-4">
                  <p className="text-micro font-medium uppercase tracking-label text-ink/65">
                    {item.label}
                  </p>
                  <p className="mt-2 text-body font-semibold text-ink">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Body with sticky side nav */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav
              aria-label={L.onThisPage}
              className="sticky top-24 border-l-hairline pl-6"
            >
              <p className="text-micro font-medium uppercase tracking-wide2 text-ink/65">
                {L.onThisPage}
              </p>
              <ul className="mt-4 space-y-2">
                {anchors.map((a) => (
                  <li key={a.id}>
                    <a
                      href={`#${a.id}`}
                      className="text-micro font-medium text-ink/75 transition-colors duration-200 hover:text-navy"
                    >
                      {a.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="lg:col-span-9">
            <SectionBlock id="cs-overview" title={L.overview}>
              <p className="max-w-2xl text-lead text-ink/75">
                {copy.overview}
              </p>
            </SectionBlock>

            {copy.researchContext ? (
              <SectionBlock id="cs-research" title={L.researchContext}>
                <div className="max-w-2xl border-l-hairline pl-6">
                  <p className="text-lead font-semibold text-ink">
                    {copy.researchContext.paper}
                  </p>
                  <p className="mt-2 text-micro text-ink/65">
                    {copy.researchContext.credit}
                  </p>
                  <p className="mt-4 text-body text-ink/75">
                    {copy.researchContext.text}
                  </p>
                </div>
              </SectionBlock>
            ) : null}

            <SectionBlock id="cs-problem" title={L.problem}>
              <p className="max-w-2xl text-lead text-ink/75">
                {copy.problem}
              </p>
            </SectionBlock>

            <SectionBlock id="cs-data" title={L.data}>
              <Row label={L.datasetLabel}>{copy.data.dataset}</Row>
              <Row label={L.sourceLabel}>{copy.data.source}</Row>
              <Row label={L.cleaningLabel}>{copy.data.cleaning}</Row>
              <Row label={L.limitationsLabel}>{copy.data.limitations}</Row>
            </SectionBlock>

            <SectionBlock id="cs-method" title={L.method}>
              <ol className="grid gap-x-10 sm:grid-cols-2">
                {copy.methodSteps.map((step, i) => (
                  <li key={i} className="border-t-hairline py-4">
                    <span className="text-micro font-medium tracking-wide2 text-clay-text">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-body font-medium text-ink/80">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </SectionBlock>

            <SectionBlock id="cs-results" title={L.results}>
              <h3 className="mb-4 text-micro font-medium uppercase tracking-wide2 text-ink/65">
                {L.findingsLabel}
              </h3>
              <ol className="space-y-4">
                {copy.findings.map((finding, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-micro font-medium tracking-wide2 text-clay-text">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="max-w-2xl text-lead text-ink/75">
                      {finding}
                    </p>
                  </li>
                ))}
              </ol>

              <ul className="mt-16 grid grid-cols-2 gap-x-8 lg:grid-cols-4">
                {copy.metrics.map((metric) => (
                  <li
                    key={metric.label}
                    className="min-w-0 border-t-hairline py-4"
                  >
                    {/* A single long value ("Recommendations") is wider than
                        a two-column cell at 375px, so let it break. */}
                    <p className="hyphens-auto break-words text-h4 font-bold tracking-headline text-navy">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-micro font-medium uppercase tracking-label text-ink/65">
                      {metric.label}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-16 grid gap-8 sm:grid-cols-2">
                {(copy.highlights ?? []).map((highlight) => (
                  <div
                    key={highlight.label}
                    className="border-l-hairline pl-6"
                  >
                    <p className="text-micro font-medium uppercase tracking-wide2 text-clay-text">
                      {highlight.label}
                    </p>
                    <p className="mt-4 text-body text-ink/75">
                      {highlight.text}
                    </p>
                  </div>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock id="cs-impact" title={L.impact}>
              <p className="max-w-2xl text-lead text-ink/75">{copy.impact}</p>
            </SectionBlock>

            <SectionBlock id="cs-evidence" title={L.evidence}>
              {editMode ? (
                <GalleryEditor project={project} lang={lang} />
              ) : (
                <>
                  <div className="grid gap-10 sm:grid-cols-2">
                    {copy.evidence.map((asset) => (
                      <Figure
                        key={asset.file}
                        file={asset.file}
                        sources={asset.sources}
                        alt={asset.alt}
                        caption={asset.caption}
                        credit={asset.credit}
                        fit={asset.fit}
                      />
                    ))}
                  </div>
                  {/* Why an expected figure is absent, where that absence
                      is itself part of the story. */}
                  {copy.evidenceNote ? (
                    <p className="mt-10 max-w-2xl border-l-hairline pl-6 text-body text-ink/75">
                      {copy.evidenceNote}
                    </p>
                  ) : null}
                  {project.privateRepo ? (
                    <p className="mt-6 max-w-2xl text-micro text-ink/65">
                      {L.codeAccessNote}
                    </p>
                  ) : null}
                </>
              )}
            </SectionBlock>

            <SectionBlock id="cs-reflection" title={L.reflection}>
              <Row label={L.learnedLabel}>{copy.reflection.learned}</Row>
              <Row label={L.improveLabel}>{copy.reflection.improve}</Row>
              <Row label={L.expandLabel}>{copy.reflection.expand}</Row>
            </SectionBlock>

            <SectionBlock id="cs-links" title={L.links}>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {/* Only links that exist are listed — "coming soon"
                    placeholders are production notes, not content. */}
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-micro font-medium uppercase tracking-label"
                  >
                    {L.github} <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
                {project.researchBacked ? (
                  <a
                    href="/academic-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-micro font-medium uppercase tracking-label text-ink/75"
                  >
                    {L.academicCv} <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
                <Link
                  to="/"
                  className="link-underline text-micro font-medium uppercase tracking-label"
                >
                  {L.backToWork} <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  to={`/work/${next.slug}`}
                  className="link-underline text-micro font-medium uppercase tracking-label !text-navy"
                >
                  {L.nextProject}: {next[lang].title}{" "}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </SectionBlock>
          </div>
        </div>
      </div>
    </main>
  );
}

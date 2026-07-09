import { useEffect } from "react";
import { useLanguage } from "../hooks/useLanguage.jsx";
import { projects } from "../data/projects.js";
import { Link } from "../lib/router.jsx";
import Placeholder from "./Placeholder.jsx";
import { Reveal } from "./motion.jsx";

function SectionBlock({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-t-hairline py-12 md:py-16">
      <Reveal>
        <h2 className="mb-8 text-xs font-medium uppercase tracking-wide2 text-ink/50">
          {title}
        </h2>
        {children}
      </Reveal>
    </section>
  );
}

function Row({ label, children }) {
  return (
    <div className="grid gap-1.5 border-t-hairline py-4 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-8">
      <h3 className="text-[10px] font-medium uppercase tracking-wide2 text-ink/40 md:col-span-3 md:pt-1">
        {label}
      </h3>
      <p className="text-sm leading-relaxed text-ink/70 md:col-span-9">
        {children}
      </p>
    </div>
  );
}

function ComingSoon({ label, soon }) {
  return (
    <span className="text-[12px] font-medium uppercase tracking-label text-ink/35">
      {label} — {soon}
    </span>
  );
}

export default function CaseStudy({ project }) {
  const { lang, t } = useLanguage();
  const copy = project[lang];
  const L = t.caseStudy;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  useEffect(() => {
    window.scrollTo(0, 0);
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
    { id: "cs-gallery", label: L.gallery },
    { id: "cs-reflection", label: L.reflection },
  ];

  return (
    <main>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Project hero */}
        <div className="pb-12 pt-16 md:pb-16 md:pt-24">
          <Reveal>
            <Link
              to="/"
              className="link-underline text-[11px] font-medium uppercase tracking-label text-ink/50"
            >
              ← {L.backToWork}
            </Link>
            <p className="mt-10 text-[11px] font-medium tracking-wide2 text-clay">
              {project.number}
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-headline text-ink md:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/60 md:text-lg">
              {copy.subtitle}
            </p>

            <div className="mt-8 max-w-3xl">
              <Row label={L.roleLabel}>{copy.role}</Row>
              <Row label={L.typeLabel}>{copy.projectType}</Row>
              <Row label={L.timelineLabel}>{copy.timeline}</Row>
              <Row label={L.toolsLabel}>{project.tools.join(" · ")}</Row>
              <Row label={L.outcomeLabel}>{copy.outcome}</Row>
            </div>

            <div className="mt-10">
              <Placeholder
                name={project.cover.name}
                hint={project.cover.hint}
                ratio="16:9"
                uploadLabel={L.uploadLater}
              />
            </div>
          </Reveal>
        </div>

        {/* Snapshot */}
        <section className="border-t-hairline py-10 md:py-12">
          <Reveal>
            <h2 className="mb-6 text-xs font-medium uppercase tracking-wide2 text-ink/50">
              {L.snapshot}
            </h2>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {copy.snapshot.map((item) => (
                <li
                  key={item.label}
                  className="rounded-2xl border-hairline border-solid bg-[#F7F4EE]/50 p-4"
                >
                  <p className="text-[10px] font-medium uppercase tracking-label text-ink/45">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold leading-snug text-ink">
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
              <p className="text-[10px] font-medium uppercase tracking-wide2 text-ink/35">
                {L.onThisPage}
              </p>
              <ul className="mt-4 space-y-2.5">
                {anchors.map((a) => (
                  <li key={a.id}>
                    <a
                      href={`#${a.id}`}
                      className="text-xs font-medium text-ink/55 transition-colors duration-200 hover:text-navy"
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
              <p className="max-w-2xl text-base leading-relaxed text-ink/75">
                {copy.overview}
              </p>
            </SectionBlock>

            {copy.researchContext ? (
              <SectionBlock id="cs-research" title={L.researchContext}>
                <div className="max-w-2xl rounded-2xl border-hairline border-solid bg-[#F7F4EE]/40 p-6 md:p-8">
                  <p className="text-sm font-semibold leading-snug text-ink md:text-base">
                    {copy.researchContext.paper}
                  </p>
                  <p className="mt-2 text-xs text-ink/45">
                    {copy.researchContext.credit}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/75">
                    {copy.researchContext.text}
                  </p>
                </div>
              </SectionBlock>
            ) : null}

            <SectionBlock id="cs-problem" title={L.problem}>
              <p className="max-w-2xl text-base leading-relaxed text-ink/75">
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
              <ol className="grid gap-4 sm:grid-cols-2">
                {copy.methodSteps.map((step, i) => (
                  <li
                    key={i}
                    className="rounded-2xl border-hairline border-solid p-5"
                  >
                    <span className="text-[11px] font-medium tracking-wide2 text-clay">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-ink/80">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </SectionBlock>

            <SectionBlock id="cs-results" title={L.results}>
              <h3 className="mb-4 text-[10px] font-medium uppercase tracking-wide2 text-ink/40">
                {L.findingsLabel}
              </h3>
              <ol className="space-y-4">
                {copy.findings.map((finding, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-[11px] font-medium tracking-wide2 text-clay">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="max-w-2xl text-sm leading-relaxed text-ink/75 md:text-base">
                      {finding}
                    </p>
                  </li>
                ))}
              </ol>

              <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {copy.metrics.map((metric) => (
                  <li
                    key={metric.label}
                    className="rounded-2xl border-hairline border-solid p-5"
                  >
                    <p className="text-xl font-bold tracking-headline text-navy md:text-2xl">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-label text-ink/45">
                      {metric.label}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {copy.charts.map((chart) => (
                  <figure key={chart.name}>
                    <Placeholder
                      name={chart.name}
                      hint={chart.hint}
                      ratio={chart.ratio}
                      uploadLabel={L.uploadLater}
                    />
                    <figcaption className="mt-3 text-xs leading-relaxed text-ink/55">
                      {chart.note}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock id="cs-impact" title={L.impact}>
              <p className="max-w-2xl text-base leading-relaxed text-ink/75">
                {copy.impact}
              </p>
            </SectionBlock>

            <SectionBlock id="cs-gallery" title={L.gallery}>
              <div className="grid gap-6 sm:grid-cols-2">
                {copy.gallery.map((asset) => (
                  <Placeholder
                    key={asset.name}
                    name={asset.name}
                    hint={asset.hint}
                    ratio={asset.ratio}
                    uploadLabel={L.uploadLater}
                  />
                ))}
              </div>
            </SectionBlock>

            <SectionBlock id="cs-reflection" title={L.reflection}>
              <Row label={L.learnedLabel}>{copy.reflection.learned}</Row>
              <Row label={L.improveLabel}>{copy.reflection.improve}</Row>
              <Row label={L.expandLabel}>{copy.reflection.expand}</Row>
            </SectionBlock>

            <SectionBlock id="cs-links" title={L.links}>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-[12px] font-medium uppercase tracking-label"
                  >
                    {L.github} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <ComingSoon label={L.github} soon={L.comingSoon} />
                )}
                <ComingSoon label={L.dashboard} soon={L.comingSoon} />
                <ComingSoon label={L.report} soon={L.comingSoon} />
                <ComingSoon label={L.presentation} soon={L.comingSoon} />
                {project.researchBacked ? (
                  <a
                    href="/academic-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-[12px] font-medium uppercase tracking-label text-ink/60"
                  >
                    {L.academicCv} <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
                <Link
                  to="/"
                  className="link-underline text-[12px] font-medium uppercase tracking-label"
                >
                  {L.backToWork} <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  to={`/work/${next.slug}`}
                  className="link-underline text-[12px] font-medium uppercase tracking-label !text-navy"
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

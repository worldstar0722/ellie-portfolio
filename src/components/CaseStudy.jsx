import { useEffect } from "react";
import { useLanguage } from "../hooks/useLanguage.jsx";
import Placeholder from "./Placeholder.jsx";
import { Reveal } from "./motion.jsx";

function Block({ id, title, children }) {
  return (
    <section id={id} className="border-t-hairline">
      <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 md:py-20">
        <Reveal>
          <h2 className="mb-8 text-xs font-medium uppercase tracking-wide2 text-ink/50 md:mb-10">
            {title}
          </h2>
          {children}
        </Reveal>
      </div>
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

function ComingSoonLink({ label, soon }) {
  return (
    <span className="text-[12px] font-medium uppercase tracking-label text-ink/35">
      {label} — {soon}
    </span>
  );
}

export default function CaseStudy({ project }) {
  const { lang, t } = useLanguage();
  const copy = project[lang];
  const cs = copy.caseStudy;
  const L = t.caseStudy;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  return (
    <main>
      {/* Overview */}
      <section>
        <div className="mx-auto max-w-4xl px-6 pb-14 pt-20 sm:px-8 md:pb-20 md:pt-28">
          <Reveal>
            <a
              href="#work"
              className="link-underline text-[11px] font-medium uppercase tracking-label text-ink/50"
            >
              ← {L.backToWork}
            </a>
            <p className="mt-10 text-[11px] font-medium tracking-wide2 text-clay">
              {project.number}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-headline text-ink md:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/60 md:text-lg">
              {cs.summary}
            </p>

            <div className="mt-10">
              <Row label={L.roleLabel}>{copy.role}</Row>
              <Row label={L.toolsLabel}>{project.tools.join(" · ")}</Row>
              <Row label={L.overview}>{cs.timeline}</Row>
            </div>

            <div className="mt-10">
              <Placeholder
                name={project.cover.name}
                hint={project.cover.hint}
                ratio={project.cover.ratio}
                uploadLabel={L.uploadLater}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Block id="cs-problem" title={L.problem}>
        <Row label={L.questionLabel}>{cs.problem.question}</Row>
        <Row label={L.whyLabel}>{cs.problem.why}</Row>
      </Block>

      <Block id="cs-data" title={L.data}>
        <Row label={L.datasetLabel}>{cs.data.dataset}</Row>
        <Row label={L.sourceLabel}>{cs.data.source}</Row>
        <Row label={L.cleaningLabel}>{cs.data.cleaning}</Row>
      </Block>

      <Block id="cs-method" title={L.method}>
        <Row label={L.workflowLabel}>{cs.method.workflow}</Row>
        <Row label={L.modelLabel}>{cs.method.model}</Row>
        <Row label={L.assumptionsLabel}>{cs.method.assumptions}</Row>
      </Block>

      <Block id="cs-results" title={L.results}>
        <ol className="space-y-4">
          {cs.findings.map((finding, i) => (
            <li key={i} className="flex gap-4">
              <span className="text-[11px] font-medium tracking-wide2 text-clay">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-ink/70 md:text-base">
                {finding}
              </p>
            </li>
          ))}
        </ol>
        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {cs.metrics.map((metric) => (
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
      </Block>

      <Block id="cs-impact" title={L.impact}>
        <Row label={L.decisionLabel}>{cs.impact.decision}</Row>
        <Row label={L.changedLabel}>{cs.impact.changed}</Row>
        <Row label={L.nextLabel}>{cs.impact.next}</Row>
      </Block>

      <Block id="cs-gallery" title={L.gallery}>
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
      </Block>

      <Block id="cs-links" title={L.links}>
        <div className="flex flex-wrap items-center gap-8">
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
            <ComingSoonLink label={L.github} soon={L.comingSoon} />
          )}
          <ComingSoonLink label={L.dashboard} soon={L.comingSoon} />
          <ComingSoonLink label={L.report} soon={L.comingSoon} />
          <a
            href="#work"
            className="link-underline text-[12px] font-medium uppercase tracking-label"
          >
            {L.backToWork} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Block>
    </main>
  );
}

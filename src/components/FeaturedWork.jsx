import { useLanguage } from "../hooks/useLanguage.jsx";
import { projects } from "../data/projects.js";
import Section from "./Section.jsx";
import Placeholder from "./Placeholder.jsx";
import { Reveal } from "./motion.jsx";

function Field({ label, children }) {
  return (
    <div>
      <h4 className="text-[10px] font-medium uppercase tracking-wide2 text-ink/40">
        {label}
      </h4>
      <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{children}</p>
    </div>
  );
}

function Ctas({ project, labels }) {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <a
        href={`#/case/${project.id}`}
        className="link-underline text-[12px] font-medium uppercase tracking-label"
      >
        {labels.viewCaseStudy} <span aria-hidden="true">↗</span>
      </a>
      {project.links.github ? (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-[12px] font-medium uppercase tracking-label"
        >
          {labels.github} <span aria-hidden="true">↗</span>
        </a>
      ) : null}
    </div>
  );
}

function ToolPills({ tools }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tools.map((tool) => (
        <li
          key={tool}
          className="rounded-full border-hairline border-solid px-3 py-1 text-[11px] font-medium tracking-label text-ink/60"
        >
          {tool}
        </li>
      ))}
    </ul>
  );
}

// Large two-column card for the two most role-relevant projects
function LargeCard({ project }) {
  const { lang, t } = useLanguage();
  const copy = project[lang];
  const labels = t.work;

  return (
    <Reveal
      as="article"
      className="border-t-hairline py-14 first:border-t-0 first:pt-0 md:py-20"
    >
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col">
          <span className="text-[11px] font-medium tracking-wide2 text-clay">
            {project.number}
          </span>
          <h3 className="mt-3 text-2xl font-bold leading-snug tracking-headline text-ink md:text-3xl">
            {copy.title}
          </h3>
          <p className="mt-3 max-w-md text-base leading-relaxed text-ink/55">
            {copy.subtitle}
          </p>

          <div className="mt-6 space-y-4">
            <Field label={labels.roleLabel}>{copy.role}</Field>
            <div>
              <h4 className="mb-2 text-[10px] font-medium uppercase tracking-wide2 text-ink/40">
                {labels.toolsLabel}
              </h4>
              <ToolPills tools={project.tools} />
            </div>
            <Field label={labels.problemLabel}>{copy.problem}</Field>
            <Field label={labels.methodLabel}>{copy.method}</Field>
            <Field label={labels.resultLabel}>{copy.result}</Field>
          </div>

          <div className="mt-auto pt-8">
            <Ctas project={project} labels={labels} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Placeholder
            name={project.cover.name}
            hint={project.cover.hint}
            ratio={project.cover.ratio}
            uploadLabel={labels.uploadLater}
          />
          <div className="grid grid-cols-2 gap-4">
            {copy.gallery.slice(1, 3).map((asset) => (
              <Placeholder
                key={asset.name}
                name={asset.name}
                hint={asset.hint}
                ratio="4:3"
                uploadLabel={labels.uploadLater}
              />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// Compact card for the urban projects
function CompactCard({ project }) {
  const { lang, t } = useLanguage();
  const copy = project[lang];
  const labels = t.work;

  return (
    <Reveal as="article" className="flex flex-col">
      <Placeholder
        name={project.cover.name}
        hint={project.cover.hint}
        ratio={project.cover.ratio}
        uploadLabel={labels.uploadLater}
      />
      <span className="mt-6 text-[11px] font-medium tracking-wide2 text-clay">
        {project.number}
      </span>
      <h3 className="mt-2 text-xl font-bold leading-snug tracking-headline text-ink md:text-2xl">
        {copy.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/55">{copy.subtitle}</p>
      <p className="mt-1 text-xs text-ink/45">{copy.role}</p>
      <div className="mt-4">
        <ToolPills tools={project.tools} />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink/70">{copy.result}</p>
      <div className="mt-auto pt-6">
        <Ctas project={project} labels={labels} />
      </div>
    </Reveal>
  );
}

export default function FeaturedWork() {
  const { t } = useLanguage();
  const large = projects.filter((p) => p.featured);
  const compact = projects.filter((p) => !p.featured);

  return (
    <Section id="work" heading={t.work.heading}>
      <div>
        {large.map((project) => (
          <LargeCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-14 grid gap-12 border-t-hairline pt-14 md:mt-20 md:grid-cols-2 md:gap-10 md:pt-20">
        {compact.map((project) => (
          <CompactCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

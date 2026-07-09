import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage.jsx";
import { projects } from "../data/projects.js";
import Section from "./Section.jsx";

function ProjectImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F2F2F4]">
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        />
      ) : null}
    </div>
  );
}

function DetailBlock({ label, children }) {
  return (
    <div className="border-t-hairline py-6 md:grid md:grid-cols-12 md:gap-10">
      <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-wide2 text-ink/40 md:col-span-3 md:mb-0">
        {label}
      </h4>
      <p className="max-w-2xl text-sm leading-relaxed text-ink/70 md:col-span-9">
        {children}
      </p>
    </div>
  );
}

function ProjectRow({ project, isOpen, onToggle }) {
  const { lang, t } = useLanguage();
  const copy = project[lang];
  const labels = t.selectedWork;
  const detailId = `project-detail-${project.id}`;

  return (
    <article className="border-t-hairline py-12 first:border-t-0 first:pt-0 md:py-16">
      <div className="group grid gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <ProjectImage src={project.image} alt={copy.title} />
        </div>

        <div className="flex flex-col md:col-span-5">
          <span className="text-[11px] font-semibold tracking-wide2 text-clay">
            {project.number}
          </span>

          <h3 className="mt-4 text-2xl font-semibold leading-snug tracking-headline text-ink transition-transform duration-300 ease-out group-hover:translate-x-1 md:text-3xl">
            {copy.title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/50">
            {copy.subtitle}
          </p>

          <p className="mt-6 text-[11px] uppercase tracking-label text-ink/40 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
            {labels.tools} — {project.tools.join(" · ")}
          </p>

          <div className="mt-auto pt-8">
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={isOpen}
              aria-controls={detailId}
              className="link-underline text-[12px] font-medium uppercase tracking-label"
            >
              {isOpen ? labels.close : labels.viewProject}{" "}
              <span aria-hidden="true">{isOpen ? "×" : "↗"}</span>
            </button>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div
          id={detailId}
          className="fade-section is-visible mt-10 md:mt-12"
        >
          <DetailBlock label={labels.problem}>{copy.problem}</DetailBlock>
          <DetailBlock label={labels.approach}>{copy.approach}</DetailBlock>
          <DetailBlock label={labels.result}>{copy.result}</DetailBlock>

          {project.relatedResearch ? (
            <div className="border-t-hairline py-6 md:grid md:grid-cols-12 md:gap-10">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-wide2 text-ink/40 md:col-span-3 md:mb-0">
                {labels.relatedResearch}
              </span>
              <a
                href={`#research-${project.relatedResearch}`}
                className="link-underline text-sm md:col-span-9"
              >
                {t.research.entries.find(
                  (e) => e.id === project.relatedResearch
                )?.title ?? labels.relatedResearch}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export default function SelectedWork() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState(null);

  return (
    <Section id="work" heading={t.selectedWork.heading}>
      <div>
        {projects.map((project) => (
          <ProjectRow
            key={project.id}
            project={project}
            isOpen={openId === project.id}
            onToggle={() =>
              setOpenId((current) =>
                current === project.id ? null : project.id
              )
            }
          />
        ))}
      </div>
    </Section>
  );
}

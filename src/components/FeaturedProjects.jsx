import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage.jsx";
import { projects } from "../data/projects.js";
import Section from "./Section.jsx";
import { Reveal } from "./motion.jsx";

function ProjectImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-[#F2F2F4] shadow-[0_2px_20px_rgba(35,39,47,0.05)]">
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : null}
    </div>
  );
}

function ProjectCard({ project }) {
  const { lang, t } = useLanguage();
  const copy = project[lang];

  return (
    <Reveal
      as="article"
      className="border-t-hairline py-16 first:border-t-0 first:pt-0 md:py-24"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-4">
          <span className="text-[11px] font-medium tracking-wide2 text-clay">
            {project.number}
          </span>
          <h3 className="text-2xl font-bold leading-snug tracking-headline text-ink md:text-3xl">
            {copy.title}
          </h3>
        </div>
        <span className="text-[11px] font-medium uppercase tracking-label text-ink/35">
          {copy.date}
        </span>
      </div>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl">
        {copy.problem}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border-hairline border-solid px-3 py-1 text-[11px] font-medium tracking-label text-ink/60"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div
        className={`mt-10 grid gap-6 ${
          project.images.length > 1 ? "sm:grid-cols-2" : ""
        }`}
      >
        {project.images.map((src) => (
          <ProjectImage key={src} src={src} alt={copy.title} />
        ))}
      </div>

      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink/60">
        {copy.whatIDid}
      </p>

      <div className="mt-8 flex flex-wrap items-baseline justify-between gap-3 border-t-hairline pt-6">
        <p className="max-w-xl text-sm font-semibold leading-relaxed text-ink">
          {copy.takeaway}
        </p>
        {copy.metric ? (
          <p className="text-[11px] font-medium uppercase tracking-label text-clay">
            {copy.metric}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}

export default function FeaturedProjects() {
  const { t } = useLanguage();

  return (
    <Section id="work" heading={t.projects.heading}>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

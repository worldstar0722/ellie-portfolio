import { useLanguage } from "../hooks/useLanguage.jsx";
import { projects } from "../data/projects.js";
import { Link } from "../lib/router.jsx";
import Section from "./Section.jsx";
import Placeholder from "./Placeholder.jsx";
import { Reveal } from "./motion.jsx";

function ProjectCard({ project, flip }) {
  const { lang, t } = useLanguage();
  const copy = project[lang];
  const labels = t.work;

  return (
    <Reveal
      as="article"
      className="border-t-hairline py-14 first:border-t-0 first:pt-0 md:py-20"
    >
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        <div className={`flex flex-col ${flip ? "md:order-2" : ""}`}>
          <span className="text-[11px] font-medium tracking-wide2 text-clay">
            {project.number}
          </span>
          <h3 className="mt-3 text-2xl font-bold leading-snug tracking-headline text-ink md:text-3xl">
            {copy.title}
          </h3>
          <p className="mt-3 max-w-md text-base leading-relaxed text-ink/55">
            {copy.subtitle}
          </p>

          <p className="mt-6 text-sm text-ink/70">
            <span className="text-[10px] font-medium uppercase tracking-wide2 text-ink/40">
              {labels.roleLabel}
            </span>
            <span className="mt-1.5 block">{copy.role}</span>
          </p>

          <div className="mt-5">
            <h4 className="mb-2 text-[10px] font-medium uppercase tracking-wide2 text-ink/40">
              {labels.toolsLabel}
            </h4>
            <ul className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border-hairline border-solid px-3 py-1 text-[11px] font-medium tracking-label text-ink/60"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h4 className="mb-1 text-[10px] font-medium uppercase tracking-wide2 text-ink/40">
              {labels.proofLabel}
            </h4>
            <ul>
              {copy.proofPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-baseline gap-3 border-t-hairline py-2 text-sm text-ink/70 first:border-t-0"
                >
                  <span
                    aria-hidden="true"
                    className="block h-[5px] w-[5px] shrink-0 rounded-full bg-clay/70"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-7">
            <Link
              to={`/work/${project.slug}`}
              className="link-underline text-[12px] font-medium uppercase tracking-label"
            >
              {labels.viewCaseStudy} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className={flip ? "md:order-1" : ""}>
          <Placeholder
            name={project.cover.name}
            hint={copy.gallery[1]?.hint ?? project.cover.hint}
            ratio={project.cover.ratio}
            uploadLabel={labels.uploadLater}
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
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} flip={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}

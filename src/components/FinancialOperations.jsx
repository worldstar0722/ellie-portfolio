import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import { Reveal, Stagger, StaggerChild } from "./motion.jsx";

// The operational half of the finance story: markets are covered by the
// case studies, this shows the workflow side. The flow is conceptual —
// the stages of the process worked within, not a system built.
export default function FinancialOperations() {
  const { t } = useLanguage();
  const f = t.finops;

  return (
    <Section id="financial-operations" heading={f.heading}>
      <Reveal>
        <p className="max-w-2xl text-2xl font-bold leading-snug tracking-headline text-ink md:text-3xl">
          {f.title}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70">
          {f.intro}
        </p>
      </Reveal>

      <Reveal>
        <div className="mt-12 border-t-hairline pt-10 md:mt-16 md:pt-12">
          <h3 className="text-[10px] font-medium uppercase tracking-wide2 text-ink/40">
            {f.flowLabel}
          </h3>
          <ol className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3">
            {f.flow.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="rounded-full border-hairline border-solid bg-[#F7F4EE]/60 px-4 py-2 text-xs font-medium text-ink/75">
                  {step}
                </span>
                {i < f.flow.length - 1 ? (
                  <span aria-hidden="true" className="text-clay/60">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 border-t-hairline pt-10 md:mt-16 md:grid-cols-12 md:gap-10 md:pt-12">
        <Reveal className="md:col-span-3">
          <h3 className="text-[10px] font-medium uppercase tracking-wide2 text-ink/40">
            {f.themesLabel}
          </h3>
        </Reveal>
        <div className="md:col-span-9">
          <Stagger as="ul" className="flex flex-wrap gap-2">
            {f.themes.map((theme) => (
              <StaggerChild
                as="li"
                key={theme}
                className="rounded-full border-hairline border-solid px-3 py-1.5 text-xs text-ink/65"
              >
                {theme}
              </StaggerChild>
            ))}
          </Stagger>
          <Reveal>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-label text-ink/35">
              {f.roleLabel} — {f.role}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

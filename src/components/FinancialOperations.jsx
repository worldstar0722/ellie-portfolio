import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import { Reveal, Stagger, StaggerChild } from "./motion.jsx";

// The operational half of the finance story: markets are covered by the
// case studies, this shows the records side. The cycle below is a
// simplified illustration of the process worked within — labelled as such
// in the copy — not a system built.
export default function FinancialOperations() {
  const { t } = useLanguage();
  const f = t.finops;

  return (
    <Section id="financial-operations" heading={f.heading}>
      <Reveal>
        <p className="max-w-2xl text-h4 font-bold tracking-headline text-ink md:text-h3">
          {f.title}
        </p>
        <p className="mt-8 max-w-2xl text-lead text-ink/75">{f.intro}</p>
      </Reveal>

      <Reveal>
        <div className="mt-12 border-t-hairline pt-8">
          <h3 className="text-micro font-medium uppercase tracking-wide2 text-ink/65">
            {f.flowLabel}
          </h3>
          <ol className="mt-4 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-5">
            {f.flow.map((step, i) => (
              <li
                key={step}
                className="flex items-baseline gap-4 border-t-hairline py-4 lg:block lg:border-t-0"
              >
                <span
                  aria-hidden="true"
                  className="text-micro font-medium tracking-wide2 text-clay-text"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="block text-body font-medium text-ink lg:mt-2">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 border-t-hairline pt-8 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-3">
          <h3 className="text-micro font-medium uppercase tracking-wide2 text-ink/65">
            {f.themesLabel}
          </h3>
        </Reveal>
        <div className="md:col-span-9">
          <Stagger as="ul" className="grid gap-x-10 sm:grid-cols-3">
            {f.themes.map((theme) => (
              <StaggerChild
                as="li"
                key={theme}
                className="border-t-hairline py-2 text-body text-ink/75 sm:border-t-0 sm:py-0"
              >
                {theme}
              </StaggerChild>
            ))}
          </Stagger>
          <Reveal>
            <p className="mt-8 text-micro font-medium uppercase tracking-label text-ink/65">
              {f.roleLabel} — {f.role}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

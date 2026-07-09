import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience" heading={t.experience.heading}>
      <ul>
        {t.experience.entries.map((entry) => (
          <li
            key={entry.id}
            className="grid gap-2 border-t-hairline py-7 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-10"
          >
            <h3 className="text-base font-medium text-ink md:col-span-5">
              {entry.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink/50 md:col-span-7">
              {entry.detail}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

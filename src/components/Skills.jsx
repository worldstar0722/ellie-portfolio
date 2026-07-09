import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";

// Hairline grid: stacked rows on mobile, 2x2 on sm, 4 columns on lg.
const cellBorders = [
  "",
  "border-t-hairline sm:border-t-0 sm:border-l-hairline",
  "border-t-hairline lg:border-t-0 lg:border-l-hairline",
  "border-t-hairline sm:border-l-hairline lg:border-t-0",
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills" heading={t.skills.heading}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {t.skills.categories.map((category, i) => (
          <div
            key={category.id}
            className={`py-8 first:pt-0 last:pb-0 sm:p-8 sm:first:pt-8 sm:last:pb-8 lg:py-2 lg:first:pl-0 lg:first:pt-2 lg:last:pb-2 ${cellBorders[i]}`}
          >
            <h3 className="text-[10px] font-semibold uppercase tracking-wide2 text-ink/40">
              {category.label}
            </h3>
            <ul className="mt-6 space-y-2.5">
              {category.items.map((item) => (
                <li key={item} className="text-sm text-ink/75">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

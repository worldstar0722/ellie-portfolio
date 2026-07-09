import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";

export default function Journey() {
  const { t } = useLanguage();
  const stops = t.journey.stops;
  const [activeId, setActiveId] = useState(stops[0].id);
  const active = stops.find((s) => s.id === activeId) ?? stops[0];

  return (
    <Section id="journey" heading={t.journey.heading}>
      <p className="mb-14 max-w-2xl text-2xl font-medium leading-snug tracking-headline text-ink md:text-3xl">
        {t.journey.subheading}
      </p>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:block">
        <div className="relative">
          <div
            className="absolute left-0 right-0 top-[5px] h-px bg-hairline"
            aria-hidden="true"
          />
          <ol className="relative flex justify-between">
            {stops.map((stop) => {
              const isActive = stop.id === activeId;
              return (
                <li key={stop.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(stop.id)}
                    aria-expanded={isActive}
                    className="group flex flex-col items-start gap-4 pr-4 text-left"
                  >
                    <span
                      aria-hidden="true"
                      className={`block h-[11px] w-[11px] rounded-full transition-colors duration-300 ${
                        isActive
                          ? "bg-clay"
                          : "bg-hairline group-hover:bg-ink/30"
                      }`}
                    />
                    <span className="flex flex-col gap-1">
                      <span
                        className={`text-sm font-medium tracking-headline transition-colors duration-200 ${
                          isActive ? "text-ink" : "text-ink/45 group-hover:text-navy"
                        }`}
                      >
                        {stop.city}
                      </span>
                      <span className="text-[10px] uppercase tracking-label text-ink/35">
                        {stop.period}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-12 border-t-hairline pt-8" aria-live="polite">
          <p
            key={active.id}
            className="fade-section is-visible max-w-2xl text-base leading-relaxed text-ink/70"
          >
            {active.story}
          </p>
        </div>
      </div>

      {/* Mobile: vertical stacked timeline */}
      <ol className="md:hidden">
        {stops.map((stop, i) => {
          const isActive = stop.id === activeId;
          return (
            <li
              key={stop.id}
              className={i > 0 ? "border-t-hairline" : undefined}
            >
              <button
                type="button"
                onClick={() => setActiveId(stop.id)}
                aria-expanded={isActive}
                className="flex w-full items-center gap-4 py-5 text-left"
              >
                <span
                  aria-hidden="true"
                  className={`block h-[10px] w-[10px] shrink-0 rounded-full transition-colors duration-300 ${
                    isActive ? "bg-clay" : "bg-hairline"
                  }`}
                />
                <span className="flex flex-1 items-baseline justify-between gap-3">
                  <span
                    className={`text-sm font-medium ${
                      isActive ? "text-ink" : "text-ink/50"
                    }`}
                  >
                    {stop.city}
                  </span>
                  <span className="text-[10px] uppercase tracking-label text-ink/35">
                    {stop.period}
                  </span>
                </span>
              </button>
              {isActive ? (
                <p className="fade-section is-visible pb-6 pl-[26px] text-sm leading-relaxed text-ink/70">
                  {stop.story}
                </p>
              ) : null}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

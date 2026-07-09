import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import JourneyMap from "./JourneyMap.jsx";

export default function Journey() {
  const { t } = useLanguage();
  const stops = t.journey.stops;
  const [activeId, setActiveId] = useState(stops[0].id);
  const active = stops.find((s) => s.id === activeId) ?? stops[0];

  const cityNames = Object.fromEntries(stops.map((s) => [s.id, s.city]));

  return (
    <Section id="journey" heading={t.journey.heading}>
      <p className="mb-10 max-w-2xl text-2xl font-medium leading-snug tracking-headline text-ink md:mb-14 md:text-3xl">
        {t.journey.subheading}
      </p>

      {/* Geographic route map — the arc draws itself on scroll into view */}
      <div className="hidden md:block">
        <JourneyMap
          variant="desktop"
          cityNames={cityNames}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </div>
      <div className="md:hidden">
        <JourneyMap
          variant="mobile"
          cityNames={cityNames}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </div>

      {/* Desktop: city tabs + story panel, synced with the map */}
      <div className="mt-10 hidden md:block">
        <ol className="flex border-t-hairline">
          {stops.map((stop) => {
            const isActive = stop.id === activeId;
            return (
              <li key={stop.id} className="flex-1">
                <button
                  type="button"
                  onClick={() => setActiveId(stop.id)}
                  aria-expanded={isActive}
                  className="group flex w-full flex-col gap-1 py-5 pr-4 text-left"
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className={`block h-[9px] w-[9px] rounded-full transition-colors duration-300 ${
                        isActive ? "bg-clay" : "bg-hairline group-hover:bg-ink/30"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium tracking-headline transition-colors duration-200 ${
                        isActive ? "text-ink" : "text-ink/45 group-hover:text-navy"
                      }`}
                    >
                      {stop.city}
                    </span>
                  </span>
                  <span className="pl-[19px] text-[10px] uppercase tracking-label text-ink/35">
                    {stop.period}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="border-t-hairline pt-8" aria-live="polite">
          <p
            key={active.id}
            className="fade-section is-visible max-w-2xl text-base leading-relaxed text-ink/70"
          >
            {active.story}
          </p>
        </div>
      </div>

      {/* Mobile: vertical stacked timeline, synced with the map */}
      <ol className="mt-8 md:hidden">
        {stops.map((stop) => {
          const isActive = stop.id === activeId;
          return (
            <li key={stop.id} className="border-t-hairline">
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

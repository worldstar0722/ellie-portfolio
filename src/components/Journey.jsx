import { lazy, Suspense, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage.jsx";
import Section from "./Section.jsx";
import { Reveal, Stagger, StaggerChild, Collapse, easeOutSoft } from "./motion.jsx";

// MapLibre is heavy; split it into its own chunk so the main bundle stays lean.
const JourneyMap = lazy(() => import("./JourneyMap.jsx"));

function MapFallback() {
  return (
    <div className="h-[320px] w-full rounded-[20px] border-hairline border-solid bg-[#F7F4EE] md:h-[440px]" />
  );
}

export default function Journey() {
  const { t } = useLanguage();
  const stops = t.journey.stops;
  const [activeId, setActiveId] = useState(stops[0].id);
  const active = stops.find((s) => s.id === activeId) ?? stops[0];

  const cityNames = Object.fromEntries(stops.map((s) => [s.id, s.city]));

  return (
    <Section id="journey" heading={t.journey.heading}>
      <Reveal>
        <p className="mb-12 max-w-2xl text-2xl font-bold leading-snug tracking-headline text-ink md:mb-16 md:text-3xl">
          {t.journey.subheading}
        </p>
      </Reveal>

      {/* Geographic map — camera flies between cities as stops change */}
      <Reveal>
        <Suspense fallback={<MapFallback />}>
          <JourneyMap
            cityNames={cityNames}
            activeId={activeId}
            onSelect={setActiveId}
          />
        </Suspense>
      </Reveal>

      {/* Desktop: city tabs + story panel, synced with the map */}
      <div className="mt-12 hidden md:block">
        <Stagger as="ol" className="flex border-t-hairline">
          {stops.map((stop) => {
            const isActive = stop.id === activeId;
            return (
              <StaggerChild as="li" key={stop.id} className="flex-1">
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
                      className={`text-sm font-semibold tracking-headline transition-colors duration-200 ${
                        isActive ? "text-ink" : "text-ink/45 group-hover:text-navy"
                      }`}
                    >
                      {stop.city}
                    </span>
                  </span>
                  <span className="pl-[19px] text-[10px] font-medium uppercase tracking-label text-ink/35">
                    {stop.period}
                  </span>
                </button>
              </StaggerChild>
            );
          })}
        </Stagger>

        <div className="border-t-hairline pt-8" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.p
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25, ease: easeOutSoft }}
              className="max-w-2xl text-base leading-relaxed text-ink/70"
            >
              {active.story}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile: vertical stacked timeline, synced with the map */}
      <Stagger as="ol" className="mt-8 md:hidden">
        {stops.map((stop) => {
          const isActive = stop.id === activeId;
          return (
            <StaggerChild as="li" key={stop.id} className="border-t-hairline">
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
                    className={`text-sm font-semibold ${
                      isActive ? "text-ink" : "text-ink/50"
                    }`}
                  >
                    {stop.city}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-label text-ink/35">
                    {stop.period}
                  </span>
                </span>
              </button>
              <Collapse open={isActive}>
                <p className="pb-6 pl-[26px] text-sm leading-relaxed text-ink/70">
                  {stop.story}
                </p>
              </Collapse>
            </StaggerChild>
          );
        })}
      </Stagger>
    </Section>
  );
}

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "./hooks/useLanguage.jsx";
import { usePath, navigate } from "./lib/router.jsx";
import { projects } from "./data/projects.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import FeaturedWork from "./components/FeaturedWork.jsx";
import Approach from "./components/Approach.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Journey from "./components/Journey.jsx";
import Identity from "./components/Identity.jsx";
import Footer from "./components/Footer.jsx";
import CaseStudy from "./components/CaseStudy.jsx";

// Retired slugs → current ones, so shared links keep working
const legacySlugs = {
  "urban-transect-field-study": "where-should-you-invest-slc",
};

// Old hash routes (#/case/<id>) → new path routes (/work/<slug>)
const legacyCaseIds = {
  "super-bowl-analytics": "super-bowl-advertising-analytics",
  "finbert-stock-prediction": "stock-price-prediction-finbert",
  "slc-civic-center": "slc-civic-center-healthy-urban-planning",
  "urban-transect-study": "where-should-you-invest-slc",
};

function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <Approach />
      <Skills />
      <Experience />
      <Education />
      <Journey />
      <Identity />
    </main>
  );
}

export default function App() {
  const path = usePath();
  const workMatch = path.match(/^\/work\/([\w-]+)\/?$/);
  const project = workMatch
    ? projects.find((p) => p.slug === workMatch[1])
    : null;

  // Redirect legacy #/case/<id> links to the new /work/<slug> routes
  useEffect(() => {
    const hashMatch = window.location.hash.match(/^#\/case\/([\w-]+)$/);
    if (hashMatch) {
      const slug = legacyCaseIds[hashMatch[1]] ?? hashMatch[1];
      navigate(`/work/${slug}`);
    }
  }, []);

  // Retired slug → its replacement; anything else unknown goes home
  useEffect(() => {
    if (!workMatch || project) return;
    const replacement = legacySlugs[workMatch[1]];
    navigate(replacement ? `/work/${replacement}` : "/");
  }, [workMatch, project]);

  useEffect(() => {
    if (!project && !window.location.hash) window.scrollTo(0, 0);
  }, [path, project]);

  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-white text-ink">
          <Nav onCasePage={Boolean(project)} />
          {project ? <CaseStudy project={project} /> : <Home />}
          <Footer />
        </div>
      </MotionConfig>
    </LanguageProvider>
  );
}

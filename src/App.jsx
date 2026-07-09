import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "./hooks/useLanguage.jsx";
import { usePath, navigate } from "./lib/router.jsx";
import { projects } from "./data/projects.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import FeaturedWork from "./components/FeaturedWork.jsx";
import Approach from "./components/Approach.jsx";
import ResearchHighlights from "./components/ResearchHighlights.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Journey from "./components/Journey.jsx";
import Identity from "./components/Identity.jsx";
import Footer from "./components/Footer.jsx";
import CaseStudy from "./components/CaseStudy.jsx";

// Old hash routes (#/case/<id>) → new path routes (/work/<slug>)
const legacyCaseIds = {
  "super-bowl-analytics": "super-bowl-advertising-analytics",
  "finbert-stock-prediction": "stock-price-prediction-finbert",
  "slc-civic-center": "slc-civic-center-healthy-urban-planning",
  "urban-transect-study": "urban-transect-field-study",
};

function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <ResearchHighlights />
      <Approach />
      <Skills />
      <Experience />
      <Testimonial />
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

  // Unknown /work/* slug: send back home rather than rendering a blank page
  useEffect(() => {
    if (workMatch && !project) navigate("/");
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

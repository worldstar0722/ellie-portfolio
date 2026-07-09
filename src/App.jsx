import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "./hooks/useLanguage.jsx";
import { useHashRoute } from "./hooks/useHashRoute.js";
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

function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <Approach />
      <ResearchHighlights />
      <Skills />
      <Experience />
      <Testimonial />
      <Journey />
      <Identity />
    </main>
  );
}

export default function App() {
  const { caseId, hash } = useHashRoute();
  const project = caseId ? projects.find((p) => p.id === caseId) : null;

  // When navigating home from a case study via a "#section" anchor, the
  // target section mounts after the hash changes — scroll to it manually.
  useEffect(() => {
    if (project) return;
    if (hash && !hash.startsWith("#/")) {
      const target = document.querySelector(hash);
      if (target) target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [project, hash]);

  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-white text-ink">
          <Nav />
          {project ? <CaseStudy project={project} /> : <Home />}
          <Footer />
        </div>
      </MotionConfig>
    </LanguageProvider>
  );
}

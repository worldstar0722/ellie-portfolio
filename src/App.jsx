import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "./hooks/useLanguage.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import FeaturedProjects from "./components/FeaturedProjects.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Journey from "./components/Journey.jsx";
import Recognition from "./components/Recognition.jsx";
import Footer from "./components/Footer.jsx";

// Narrative order: claim (hero) → evidence (projects, skills, experience)
// → story (journey) → trust (recognition) → action (contact footer).
export default function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-white text-ink">
          <Nav />
          <main>
            <Hero />
            <FeaturedProjects />
            <Skills />
            <Experience />
            <Journey />
            <Recognition />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LanguageProvider>
  );
}

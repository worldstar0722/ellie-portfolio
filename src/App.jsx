import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "./hooks/useLanguage.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Journey from "./components/Journey.jsx";
import Research from "./components/Research.jsx";
import SelectedWork from "./components/SelectedWork.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Brand from "./components/Brand.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-white text-ink">
        <Nav />
        <main>
          <Hero />
          <Journey />
          <Research />
          <SelectedWork />
          <Skills />
          <Experience />
          <Testimonial />
          <Brand />
        </main>
          <Footer />
        </div>
      </MotionConfig>
    </LanguageProvider>
  );
}

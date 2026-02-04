import { Hero } from "./sections/Hero";
import { KPIStrip } from "./sections/KPIStrip";
import { FeaturedCaseStudies } from "./sections/FeaturedCaseStudies";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { EducationCertifications } from "./sections/EducationCertifications";
import { ContactSection } from "./sections/ContactSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");
    if (!section) return;

    // Allow layout to paint before scrolling
    window.setTimeout(() => {
      const el = document.getElementById(section);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, [location.search]);

  return (
    <div className="mx-auto max-w-6xl px-6">
      <Hero />
      <KPIStrip />
      <FeaturedCaseStudies />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <EducationCertifications />
      <ContactSection />
    </div>
  );
}
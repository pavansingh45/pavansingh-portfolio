import { Hero } from "./sections/Hero";
import { KPIStrip } from "./sections/KPIStrip";
import { FeaturedCaseStudies } from "./sections/FeaturedCaseStudies";

export function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <Hero />
      <KPIStrip />
      <FeaturedCaseStudies />
    </div>
  );
}
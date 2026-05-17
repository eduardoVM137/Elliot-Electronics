import { ApproachSection } from "@/sections/home/approach-section";
import { CaseStudiesSection } from "@/sections/home/case-studies-section";
import { HomeHero } from "@/sections/home/home-hero";
import { MetricsSection } from "@/sections/home/metrics-section";
import { PortfolioSection } from "@/sections/home/portfolio-section";
import { ProblemSection } from "@/sections/home/problem-section";
import { FinalCta } from "@/sections/shared/final-cta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProblemSection />
      <ApproachSection />
      <PortfolioSection />
      <CaseStudiesSection />
      <MetricsSection />
      <FinalCta />
    </>
  );
}

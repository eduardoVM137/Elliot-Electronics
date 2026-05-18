import type { Metadata } from "next";

import { EnergyIntro } from "@/modules/energy/energy-intro";
import { EnergySimulator } from "@/modules/energy/energy-simulator";
import { SolarProjects } from "@/modules/energy/solar-projects";
import { SolarSystemTypes } from "@/modules/energy/solar-system-types";
import { getSolution } from "@/data/solutions";
import { SolutionHero } from "@/sections/shared/solution-hero";
import { FinalCta } from "@/sections/shared/final-cta";

export const metadata: Metadata = {
  title: "Energia solar",
};

export default function EnergyPage() {
  const solution = getSolution("energia");

  if (!solution) return null;

  return (
    <>
      <SolutionHero solution={solution} secondaryCta="Ver proyectos solares" />
      <EnergyIntro />
      <EnergySimulator />
      <SolarSystemTypes />
      <SolarProjects />
      <FinalCta
        title="Listo para empezar a ahorrar?"
        body="Evalua tu consumo y descubre tu potencial solar."
        cta="Simular mi ahorro"
      />
    </>
  );
}

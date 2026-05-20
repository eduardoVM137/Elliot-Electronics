import type { Metadata } from "next";

import { EnergyIntro } from "@/modules/energy/energy-intro";
import { EnergySimulator } from "@/modules/energy/energy-simulator";
import { SolarProjects } from "@/modules/energy/solar-projects";
import { SolarSystemTypes } from "@/modules/energy/solar-system-types";
import { getSolution } from "@/data/solutions";
import { SolutionHero } from "@/sections/shared/solution-hero";
import { FinalCta } from "@/sections/shared/final-cta";

export const metadata: Metadata = {
  title: "Paneles Solares Industriales en Nuevo Laredo",
  description:
    "Instalación de paneles solares industriales en Nuevo Laredo y Tamaulipas. Sistemas fotovoltaicos para empresas con ROI medible, monitoreo 24/7 y soporte técnico. Elliot Electronics.",
  keywords: [
    "paneles solares Nuevo Laredo",
    "paneles solares Tamaulipas",
    "paneles solares industriales",
    "instalación paneles solares empresa",
    "energía solar industrial México",
    "sistema fotovoltaico industrial",
    "ahorro energía solar",
    "paneles solares Elliot Electronics",
  ],
  alternates: { canonical: "/soluciones/energia" },
  openGraph: {
    title: "Paneles Solares Industriales | Elliot Electronics",
    description:
      "Instalación de paneles solares industriales en Nuevo Laredo y Tamaulipas. ROI medible y soporte técnico 24/7.",
    url: "/soluciones/energia",
  },
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

import type { Metadata } from "next";

import { getSolution } from "@/data/solutions";
import { ControlCenter } from "@/modules/systems/control-center";
import { DataFlow } from "@/modules/systems/data-flow";
import { FinalCta } from "@/sections/shared/final-cta";
import { ProofStrip } from "@/sections/shared/proof-strip";
import { SolutionFeatureGrid } from "@/sections/shared/solution-feature-grid";
import { SolutionHero } from "@/sections/shared/solution-hero";

export const metadata: Metadata = {
  title: "Sistemas SCADA y Dashboards Industriales",
  description:
    "Plataformas SCADA, dashboards industriales y monitoreo en tiempo real para operaciones en México. Visualización de variables, alertas automáticas y control centralizado. Elliot Electronics.",
  keywords: [
    "sistemas SCADA México",
    "dashboards industriales",
    "monitoreo industrial tiempo real",
    "SCADA Nuevo Laredo",
    "control industrial digital",
    "sistemas de control Tamaulipas",
    "Elliot Electronics",
    "elliot electronics",
    "sistemas Elliot Electronics",
  ],
  alternates: { canonical: "/soluciones/sistemas" },
  openGraph: {
    title: "Sistemas SCADA y Dashboards Industriales | Elliot Electronics",
    description:
      "Plataformas SCADA y dashboards industriales con monitoreo en tiempo real. Control centralizado para operaciones en México.",
    url: "/soluciones/sistemas",
  },
};

export default function SystemsPage() {
  const solution = getSolution("sistemas");

  if (!solution) return null;

  return (
    <>
      <SolutionHero solution={solution} secondaryCta="Ver plataforma" />
      <ProofStrip solution={solution} />
      <SolutionFeatureGrid solution={solution} />
      <ControlCenter />
      <DataFlow />
      <FinalCta
        title="¿Quieres ver como funcionaria en tu operacion?"
        body="Agenda una demo personalizada con indicadores de tu empresa."
        cta="Ver demo"
      />
    </>
  );
}

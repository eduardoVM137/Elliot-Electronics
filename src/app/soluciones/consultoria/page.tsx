import type { Metadata } from "next";

import { getSolution } from "@/data/solutions";
import { ExecutiveReport } from "@/modules/consulting/executive-report";
import { Roadmap } from "@/modules/consulting/roadmap";
import { FinalCta } from "@/sections/shared/final-cta";
import { ProofStrip } from "@/sections/shared/proof-strip";
import { SolutionFeatureGrid } from "@/sections/shared/solution-feature-grid";
import { SolutionHero } from "@/sections/shared/solution-hero";

export const metadata: Metadata = {
  title: "Consultoría Técnica Industrial",
  description:
    "Consultoría técnica industrial en Nuevo Laredo y México. Diagnóstico de energía, automatización y sistemas. Roadmap de inversión con escenarios de ROI y riesgo medibles. Elliot Electronics.",
  keywords: [
    "consultoría técnica industrial",
    "consultoría ingeniería Nuevo Laredo",
    "diagnóstico industrial México",
    "asesoría técnica industrial",
    "roadmap inversión industrial",
    "Elliot Electronics",
    "elliot electronics",
    "consultoria Elliot Electronics",
  ],
  alternates: { canonical: "/soluciones/consultoria" },
  openGraph: {
    title: "Consultoría Técnica Industrial | Elliot Electronics",
    description:
      "Diagnóstico de energía, automatización y sistemas en Nuevo Laredo. Roadmap con ROI medible para tu operación.",
    url: "/soluciones/consultoria",
  },
};

export default function ConsultingPage() {
  const solution = getSolution("consultoria");

  if (!solution) return null;

  return (
    <>
      <SolutionHero solution={solution} secondaryCta="Ver casos de exito" />
      <ProofStrip solution={solution} />
      <SolutionFeatureGrid solution={solution} />
      <Roadmap />
      <ExecutiveReport />
      <FinalCta
        title="¿Listo para llevar tu empresa al siguiente nivel?"
        body="Solicita un analisis y descubre el potencial."
        cta="Solicitar analisis"
      />
    </>
  );
}

import type { Metadata } from "next";

import { getSolution } from "@/data/solutions";
import { ExecutiveReport } from "@/modules/consulting/executive-report";
import { Roadmap } from "@/modules/consulting/roadmap";
import { FinalCta } from "@/sections/shared/final-cta";
import { ProofStrip } from "@/sections/shared/proof-strip";
import { SolutionFeatureGrid } from "@/sections/shared/solution-feature-grid";
import { SolutionHero } from "@/sections/shared/solution-hero";

export const metadata: Metadata = {
  title: "Consultoria estrategica",
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

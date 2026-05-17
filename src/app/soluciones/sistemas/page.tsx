import type { Metadata } from "next";

import { getSolution } from "@/data/solutions";
import { ControlCenter } from "@/modules/systems/control-center";
import { DataFlow } from "@/modules/systems/data-flow";
import { FinalCta } from "@/sections/shared/final-cta";
import { ProofStrip } from "@/sections/shared/proof-strip";
import { SolutionFeatureGrid } from "@/sections/shared/solution-feature-grid";
import { SolutionHero } from "@/sections/shared/solution-hero";

export const metadata: Metadata = {
  title: "Sistemas",
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

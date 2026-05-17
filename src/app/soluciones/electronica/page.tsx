import type { Metadata } from "next";

import { getSolution } from "@/data/solutions";
import { ElectricalDiagram } from "@/modules/electronics/electrical-diagram";
import { HardwareShowcase } from "@/modules/electronics/hardware-showcase";
import { FinalCta } from "@/sections/shared/final-cta";
import { ProofStrip } from "@/sections/shared/proof-strip";
import { SolutionFeatureGrid } from "@/sections/shared/solution-feature-grid";
import { SolutionHero } from "@/sections/shared/solution-hero";

export const metadata: Metadata = {
  title: "Electronica industrial",
};

export default function ElectronicsPage() {
  const solution = getSolution("electronica");

  if (!solution) return null;

  return (
    <>
      <SolutionHero solution={solution} secondaryCta="Ver tableros" />
      <ProofStrip solution={solution} />
      <SolutionFeatureGrid solution={solution} />
      <HardwareShowcase />
      <ElectricalDiagram />
      <FinalCta
        title="¿Necesitas una solucion electronica?"
        body="Cuéntanos tu necesidad y te ayudamos a resolverla."
        cta="Cotizar solucion"
      />
    </>
  );
}

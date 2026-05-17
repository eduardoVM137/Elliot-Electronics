import type { Metadata } from "next";

import { getSolution } from "@/data/solutions";
import { CapabilitiesMatrix } from "@/modules/engineering/capabilities-matrix";
import {
  EngineeringProcess,
  EngineeringProjects,
} from "@/modules/engineering/engineering-process";
import { FinalCta } from "@/sections/shared/final-cta";
import { ProofStrip } from "@/sections/shared/proof-strip";
import { SolutionFeatureGrid } from "@/sections/shared/solution-feature-grid";
import { SolutionHero } from "@/sections/shared/solution-hero";

export const metadata: Metadata = {
  title: "Ingenieria industrial",
};

export default function EngineeringPage() {
  const solution = getSolution("ingenieria");

  if (!solution) return null;

  return (
    <>
      <SolutionHero solution={solution} secondaryCta="Ver capacidades" />
      <ProofStrip solution={solution} />
      <SolutionFeatureGrid solution={solution} />
      <EngineeringProcess />
      <CapabilitiesMatrix />
      <EngineeringProjects />
      <FinalCta
        title="¿Necesitas resolver un reto tecnico?"
        body="Transformamos requerimientos complejos en soluciones operables."
        cta="Solicitar diagnostico"
      />
    </>
  );
}

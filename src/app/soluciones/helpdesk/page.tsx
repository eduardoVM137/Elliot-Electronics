import type { Metadata } from "next";

import { getSolution } from "@/data/solutions";
import { SlaCards, SupportDashboard } from "@/modules/helpdesk/support-dashboard";
import { FinalCta } from "@/sections/shared/final-cta";
import { ProofStrip } from "@/sections/shared/proof-strip";
import { SolutionFeatureGrid } from "@/sections/shared/solution-feature-grid";
import { SolutionHero } from "@/sections/shared/solution-hero";

export const metadata: Metadata = {
  title: "Helpdesk y soporte",
};

export default function HelpdeskPage() {
  const solution = getSolution("helpdesk");

  if (!solution) return null;

  return (
    <>
      <SolutionHero solution={solution} secondaryCta="Ver SLA" />
      <ProofStrip solution={solution} />
      <SolutionFeatureGrid solution={solution} />
      <SupportDashboard />
      <SlaCards />
      <FinalCta
        title="¿Tu operacion necesita soporte continuo?"
        body="Creamos una mesa de ayuda con monitoreo, SLA y mantenimiento para tus activos."
        cta="Activar soporte"
      />
    </>
  );
}

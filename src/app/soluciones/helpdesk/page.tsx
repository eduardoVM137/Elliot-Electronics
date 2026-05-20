import type { Metadata } from "next";

import { getSolution } from "@/data/solutions";
import { SlaCards, SupportDashboard } from "@/modules/helpdesk/support-dashboard";
import { FinalCta } from "@/sections/shared/final-cta";
import { ProofStrip } from "@/sections/shared/proof-strip";
import { SolutionFeatureGrid } from "@/sections/shared/solution-feature-grid";
import { SolutionHero } from "@/sections/shared/solution-hero";

export const metadata: Metadata = {
  title: "Soporte Técnico Industrial 24/7",
  description:
    "Mesa de ayuda y soporte técnico 24/7 para operaciones industriales en Nuevo Laredo y Tamaulipas. SLA garantizado, monitoreo continuo y mantenimiento preventivo. Elliot Electronics.",
  keywords: [
    "soporte técnico industrial 24/7",
    "helpdesk industrial Nuevo Laredo",
    "mesa de ayuda técnica",
    "mantenimiento preventivo industrial",
    "soporte técnico Tamaulipas",
    "helpdesk Elliot Electronics",
  ],
  alternates: { canonical: "/soluciones/helpdesk" },
  openGraph: {
    title: "Soporte Técnico Industrial 24/7 | Elliot Electronics",
    description:
      "Mesa de ayuda técnica con SLA garantizado en Nuevo Laredo. Monitoreo continuo y mantenimiento preventivo para tu operación.",
    url: "/soluciones/helpdesk",
  },
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

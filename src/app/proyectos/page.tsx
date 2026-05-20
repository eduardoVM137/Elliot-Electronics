import type { Metadata } from "next";

import { ProjectsFilter } from "@/modules/projects/projects-filter";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/visuals/section-header";
import { FinalCta } from "@/sections/shared/final-cta";

export const metadata: Metadata = {
  title: "Proyectos",
};

const portfolioStats = [
  { value: "6+", label: "Proyectos implementados" },
  { value: "5", label: "Estados del país" },
  { value: "6", label: "Sectores industriales" },
  { value: "98%", label: "SLA de soporte" },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-36 pb-20">
        <div className="container">
          <SectionHeader
            eyebrow="Portafolio"
            title="Proyectos reales. Resultados documentados."
            body="Cada caso muestra el problema técnico, la solución implementada y el impacto medible que conseguimos. Sin casos de estudio ficticios."
          />

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {portfolioStats.map((stat) => (
              <div key={stat.label} className="premium-panel rounded-lg p-4 text-center">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <ProjectsFilter projects={projects} />
          </div>
        </div>
      </section>

      <FinalCta
        title="Tu proyecto puede ser el siguiente caso de éxito."
        body="Diagnosticamos tu operación, proponemos una solución técnica y te acompañamos en cada etapa de la implementación."
        cta="Hablar de mi proyecto"
      />
    </>
  );
}

import type { Metadata } from "next";

import { ProjectsFilter } from "@/modules/projects/projects-filter";
import { projects } from "@/data/projects";
import { MotionReveal } from "@/components/visuals/motion-reveal";
import { FinalCta } from "@/sections/shared/final-cta";
import { ProyectosHero } from "@/sections/proyectos/proyectos-hero";

export const metadata: Metadata = {
  title: "Proyectos de Ingeniería Industrial",
  description:
    "Casos de éxito en paneles solares, automatización industrial, tableros eléctricos y sistemas SCADA. Proyectos ejecutados por Elliot Electronics en Nuevo Laredo, Tamaulipas y todo México.",
  alternates: { canonical: "/proyectos" },
  openGraph: {
    title: "Proyectos de Ingeniería Industrial | Elliot Electronics",
    description:
      "Casos de éxito en paneles solares, automatización, tableros eléctricos y SCADA ejecutados en México.",
    url: "/proyectos",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pb-20">
        <ProyectosHero />
        <div className="container">
          <div className="mt-6">
            <ProjectsFilter projects={projects} />
          </div>
        </div>
      </section>

      <MotionReveal>
        <FinalCta
          title="Tu proyecto puede ser el siguiente caso de éxito."
          body="Diagnosticamos tu operación, proponemos una solución técnica y te acompañamos en cada etapa de la implementación."
          cta="Hablar de mi proyecto"
        />
      </MotionReveal>
    </>
  );
}

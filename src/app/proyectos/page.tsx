import type { Metadata } from "next";

import { ProjectGrid } from "@/modules/projects/project-grid";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/visuals/section-header";
import { FinalCta } from "@/sections/shared/final-cta";

export const metadata: Metadata = {
  title: "Proyectos",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-36 pb-16">
        <div className="container">
          <SectionHeader
            eyebrow="Proyectos"
            title="Implementaciones que conectan energia, ingenieria y sistemas."
            body="Casos base para mostrar capacidad tecnica, impacto financiero y continuidad operativa."
          />
          <div className="mt-12">
            <ProjectGrid projects={projects} />
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

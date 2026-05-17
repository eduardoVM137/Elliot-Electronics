import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ImagePanel } from "@/components/visuals/image-panel";
import { SectionHeader } from "@/components/visuals/section-header";
import { projects } from "@/data/projects";

export function CaseStudiesSection() {
  return (
    <section className="section-pad bg-white/[0.025]">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Casos de exito"
            title="Proyectos con impacto tecnico y financiero."
            body="Implementaciones industriales, energeticas y digitales pensadas para operar, medir y escalar."
          />
          <Button asChild variant="secondary">
            <Link href="/proyectos">
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Link key={project.slug} href={`/proyectos/${project.slug}`} className="group">
              <ImagePanel
                image={project.image}
                kicker={project.solution}
                title={project.title}
                className="transition-colors group-hover:border-eliot-electric/40"
              />
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {project.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

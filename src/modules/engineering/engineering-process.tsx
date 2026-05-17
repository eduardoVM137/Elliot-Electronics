import { ArrowRight, ClipboardCheck, DraftingCompass, Factory, Wrench } from "lucide-react";

import { ImagePanel } from "@/components/visuals/image-panel";
import { SectionHeader } from "@/components/visuals/section-header";
import { projects } from "@/data/projects";

const stages = [
  {
    title: "Problema",
    body: "Levantamiento tecnico, riesgos, restricciones y objetivos de negocio.",
    icon: ClipboardCheck,
  },
  {
    title: "Diagnostico",
    body: "Analisis de causa raiz, dimensionamiento y rutas de solucion.",
    icon: DraftingCompass,
  },
  {
    title: "Solucion",
    body: "Ingenieria, seleccion de componentes, documentacion y plan de ejecucion.",
    icon: Wrench,
  },
  {
    title: "Operacion",
    body: "Puesta en marcha, pruebas, capacitacion y mejora continua.",
    icon: Factory,
  },
];

export function EngineeringProcess() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="Metodo tecnico"
          title="Problema, diagnostico y solucion con trazabilidad."
          body="La vista de ingenieria prioriza autoridad tecnica: diagramas, flujos de decision, procesos y evidencia industrial."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {stages.map((stage, index) => (
              <div key={stage.title} className="premium-panel rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-eliot-cyan/30 bg-eliot-cyan/10">
                    <stage.icon className="h-5 w-5 text-eliot-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">0{index + 1}</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">{stage.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{stage.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="premium-panel rounded-lg p-5">
            <div className="grid min-h-[480px] content-center gap-4">
              {["Operacion actual", "Variables criticas", "Modelo de solucion", "Entrega tecnica"].map(
                (item, index) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-44 rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm text-white">
                      {item}
                    </div>
                    <ArrowRight className="h-5 w-5 text-eliot-cyan" />
                    <div className="h-px flex-1 bg-gradient-to-r from-eliot-cyan/60 to-transparent" />
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-xs text-eliot-cyan">
                      {index + 1}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EngineeringProjects() {
  return (
    <section className="pb-20">
      <div className="container">
        <SectionHeader
          eyebrow="Proyectos industriales"
          title="Ingenieria aplicada en planta."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {projects.slice(1, 5).map((project) => (
            <ImagePanel
              key={project.slug}
              image={project.image}
              kicker={project.sector}
              title={project.title}
              aspect="square"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

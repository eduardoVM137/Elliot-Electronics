import type { Metadata } from "next";
import {
  Building2,
  Cpu,
  Headphones,
  Lightbulb,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/visuals/section-header";
import { FinalCta } from "@/sections/shared/final-cta";

export const metadata: Metadata = {
  title: "Nosotros",
};

const values = [
  {
    title: "Rigor tecnico",
    body: "Documentamos, probamos y validamos cada solucion antes de ponerla en operacion.",
    icon: ShieldCheck,
  },
  {
    title: "Vision integral",
    body: "Conectamos energia, hardware, software y soporte dentro de una misma arquitectura de servicio.",
    icon: Workflow,
  },
  {
    title: "Operacion primero",
    body: "Disenamos pensando en continuidad, mantenimiento y facilidad de crecimiento.",
    icon: Building2,
  },
  {
    title: "Innovacion util",
    body: "Aplicamos tecnologia cuando resuelve un problema real y puede sostenerse en operacion.",
    icon: Lightbulb,
  },
  {
    title: "Arquitectura escalable",
    body: "Preparamos soluciones modulares para nuevas areas, lineas de trabajo o sedes.",
    icon: Cpu,
  },
  {
    title: "Acompanamiento tecnico",
    body: "Brindamos soporte despues de la implementacion para mantener la solucion funcionando.",
    icon: Headphones,
  },
];

const industries = [
  "Manufactura",
  "Infraestructura",
  "Retail",
  "Industrial",
  "Logistica",
  "Servicios",
  "Construccion",
  "Energia",
  "Alimentos y bebidas",
  "Automotriz",
  "Salud",
  "Mineria",
];

const storyFeatures = [
  {
    title: "Diagnostico claro",
    body: "Entendemos primero la operacion, sus riesgos, restricciones y objetivos tecnicos.",
    icon: ShieldCheck,
  },
  {
    title: "Arquitectura viable",
    body: "Conectamos energia, electronica, software y soporte dentro de una solucion ordenada.",
    icon: Workflow,
  },
  {
    title: "Implementacion sostenible",
    body: "Dejamos bases documentadas para operar, mantener y escalar sin improvisaciones.",
    icon: Cpu,
  },
];

const workPath = [
  "Analizamos la operacion",
  "Definimos la solucion",
  "Implementamos con orden",
  "Acompanamos despues",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-180px] top-10 h-[420px] w-[420px] rounded-full border border-eliot-cyan/10" />
          <div className="absolute left-[-220px] top-4 h-[520px] w-[520px] rounded-full border border-eliot-cyan/10" />
          <div className="absolute right-10 top-10 h-40 w-40 bg-[radial-gradient(circle,_rgba(56,189,248,0.28)_1px,_transparent_1px)] [background-size:14px_14px]" />
        </div>

        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center rounded-full border border-eliot-cyan/25 bg-white px-4 py-2 text-sm font-semibold text-eliot-blue shadow-sm">
              Nosotros
            </div>

            <h1 className="mx-auto mt-8 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
              Ingenieria clara para operaciones que no pueden detenerse.
            </h1>

            <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-eliot-cyan" />

            <p className="mx-auto mt-7 max-w-3xl text-pretty text-lg leading-8 text-slate-600 md:text-xl">
              Elliot Electronics integra energia, electronica, sistemas, consultoria y soporte
              tecnico para empresas que necesitan soluciones bien documentadas, implementables y
              sostenibles en operacion.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-xl shadow-slate-200/60 md:px-10 md:py-14 lg:px-16">
            <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-eliot-cyan/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-eliot-blue/5 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <Badge variant="muted">Nuestra historia</Badge>

              <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Integramos disciplinas para resolver problemas completos.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Elliot Electronics trabaja sobre una necesidad concreta: muchas operaciones requieren
                energia, hardware, software, electronica y soporte funcionando bajo una misma logica
                tecnica.
              </p>
            </div>

            <div className="relative mx-auto mt-12 max-w-4xl space-y-6 text-base leading-8 text-slate-600 md:text-lg">
              <p>
                Nuestro papel es conectar esas piezas con orden, criterio y documentacion. No
                buscamos proponer tecnologia aislada, sino soluciones que puedan implementarse,
                mantenerse y crecer dentro de la realidad operativa de cada empresa.
              </p>

              <p>
                Nos involucramos desde el diagnostico hasta la puesta en marcha: revisamos el
                contexto, proponemos una arquitectura viable, cuidamos la implementacion y dejamos
                bases para que el sistema pueda mantenerse sin depender de improvisaciones.
              </p>

              <p>
                Nuestro criterio es practico: cada decision debe poder explicarse, probarse y
                sostenerse en el tiempo. La tecnologia solo tiene valor cuando mejora la operacion,
                reduce incertidumbre y puede mantenerse con claridad.
              </p>
            </div>

            <div className="relative mt-12 grid gap-4 md:grid-cols-3">
              {storyFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-eliot-blue shadow-sm">
                    <feature.icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{feature.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">{feature.body}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-12 rounded-2xl border border-eliot-cyan/20 bg-eliot-blue px-6 py-7 text-white md:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-eliot-cyan">
                Nuestra forma de trabajar
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-4">
                {workPath.map((step, index) => (
                  <div key={step} className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-eliot-blue">
                      {index + 1}
                    </div>

                    <p className="pt-1 text-sm font-medium leading-6 text-white/85">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="valores" className="pb-24">
        <div className="container">
          <SectionHeader
            eyebrow="Valores"
            title="Como pensamos y como trabajamos."
            body="Estos principios guian cada proyecto, cada propuesta y cada decision tecnica que tomamos contigo."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="premium-panel rounded-lg p-6">
                <value.icon className="h-6 w-6 text-eliot-cyan" />
                <h3 className="mt-4 text-base font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <SectionHeader
            eyebrow="Industrias"
            title="Sectores donde aportamos valor."
            body="Adaptamos el enfoque tecnico al entorno, la criticidad y la forma de operar de cada empresa."
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="premium-panel rounded-full px-4 py-2 text-sm text-muted-foreground"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Listo para ordenar tu siguiente proyecto tecnico?"
        body="Hablemos primero de la operacion, los riesgos y lo que necesitas resolver. Despues definimos una ruta clara de trabajo."
        cta="Iniciar conversacion"
      />
    </>
  );
}
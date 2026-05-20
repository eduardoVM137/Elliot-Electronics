import type { Metadata } from "next";
import {
  Building2,
  CheckCircle2,
  Cpu,
  Headphones,
  Lightbulb,
  Monitor,
  ShieldCheck,
  Sun,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/visuals/section-header";
import { MetricTile } from "@/components/visuals/metric-tile";
import { ImagePanel } from "@/components/visuals/image-panel";
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

const capabilities = [
  { label: "Energia solar", sub: "Diseno, instalacion y monitoreo", icon: Sun },
  { label: "Automatizacion", sub: "Tableros, control y variables", icon: Cpu },
  { label: "Sistemas", sub: "Dashboards, integracion y datos", icon: Monitor },
  { label: "Soporte tecnico", sub: "Mesa de ayuda y preventivo 24/7", icon: Headphones },
];

const differentiators = [
  "Diagnostico gratuito antes de cualquier propuesta comercial",
  "Propuestas con alcance, costos y cronograma sin letra pequena",
  "Documentacion tecnica entregada al finalizar cada proyecto",
  "Soporte post-implementacion incluido como parte del servicio",
  "Un solo interlocutor tecnico para energia, sistemas y soporte",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-28">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-white dark:from-eliot-night/80 dark:to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center overflow-hidden">
          <div className="h-[560px] w-[900px] bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(33,167,255,0.13),transparent)] dark:bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(33,167,255,0.07),transparent)]" />
        </div>
        {/* Top + bottom borders */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-eliot-cyan/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-eliot-line" />

        <div className="container relative">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center rounded-full border border-eliot-cyan/30 bg-white px-4 py-2 text-sm font-semibold text-eliot-blue shadow-sm dark:border-eliot-cyan/20 dark:bg-eliot-deep dark:text-eliot-cyan">
              Nosotros
            </div>

            <h1 className="mx-auto mt-8 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-950 dark:text-white md:text-6xl">
              Ingenieria clara para operaciones que no pueden detenerse.
            </h1>

            <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-eliot-cyan" />

            <p className="mx-auto mt-7 max-w-3xl text-pretty text-lg leading-8 text-slate-500 dark:text-muted-foreground md:text-xl">
              Combinamos energia, electronica, sistemas, consultoria y soporte
              tecnico para empresas que necesitan soluciones intregadas, sostenibles y
              listas para operar.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="rounded-xl border border-slate-200 bg-white px-5 py-5 shadow-sm transition-shadow hover:shadow-md dark:border-eliot-line dark:bg-white/[0.04]"
              >
                <cap.icon className="h-5 w-5 text-eliot-cyan" />
                <p className="mt-3 text-sm font-semibold text-slate-800 dark:text-white">
                  {cap.label}
                </p>
                <p className="mt-1 text-xs leading-4 text-slate-500 dark:text-muted-foreground">
                  {cap.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra historia */}
      <section className="pb-24">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">

            {/* Left: Narrative */}
            <div>
              <Badge variant="muted">Nuestra historia</Badge>
              <h3 className="mt-4 text-balance text-4xl font-semibold text-white md:text-3xl">
            Menos proveedores, Más integración.
              </h3>
              <div className="mt-5 space-y-4 text-base leading-7 text-muted-foreground">
   
                <p>
                  Nos involucramos desde el diagnostico hasta la puesta en marcha: revisamos
                  el contexto, proponemos una arquitectura viable, cuidamos la implementacion
                  y dejamos bases para que el sistema pueda mantenerse sin depender de
                  improvisaciones.
                </p>
                <p>
                  Nuestro criterio es practico: cada decision debe poder explicarse, probarse
                  y sostenerse en el tiempo. La tecnologia solo tiene valor cuando mejora la
                  operacion, reduce incertidumbre y puede mantenerse con claridad.
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-eliot-cyan" />
                    <span className="text-sm leading-6 text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Image + key metrics */}
            <div className="flex flex-col gap-4 lg:pt-2">
              <ImagePanel
                image="https://images.unsplash.com/photo-1719848576338-9516ba7ccd8b?auto=format&fit=crop&w=1200&q=80"
                kicker="Energia solar e ingenieria"
                title="Proyectos con estándares de calidad"
                aspect="tall"
                className="brightness-90 saturate-75"
              />
              <div className="grid grid-cols-2 gap-4">
                <MetricTile value="100%" label="Clientes contentos" />
                <MetricTile value="$0" label="Costos ocultos en propuestas comerciales" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
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

      {/* Industries */}
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

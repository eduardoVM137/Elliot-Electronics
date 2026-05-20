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
import { MetricTile } from "@/components/visuals/metric-tile";
import { companyMetrics, approachSteps } from "@/data/metrics";
import { FinalCta } from "@/sections/shared/final-cta";

export const metadata: Metadata = {
  title: "Nosotros",
};

const values = [
  {
    title: "Rigor técnico",
    body: "Antes de ejecutar, verificamos. Cada propuesta incluye diagnóstico, cálculo de carga y documentación técnica que respalda cada decisión tomada.",
    icon: ShieldCheck,
  },
  {
    title: "Visión integral",
    body: "No trabajamos en silos. Coordinamos energía, hardware, software y soporte desde la misma mesa para que el sistema funcione como un todo coherente.",
    icon: Workflow,
  },
  {
    title: "Operación primero",
    body: "Diseñamos pensando en quien opera, mantiene y escala el sistema. La continuidad operativa no es opcional: es el punto de partida de cada proyecto.",
    icon: Building2,
  },
  {
    title: "Innovación sobria",
    body: "No instalamos tecnología por instalar. Cada solución se elige por su aplicabilidad real, costo de propiedad y compatibilidad con tu entorno actual.",
    icon: Lightbulb,
  },
  {
    title: "Arquitectura escalable",
    body: "Construimos con componentes modulares para que puedas crecer: nuevas líneas, nuevas sedes, mayor capacidad. Sin tirar lo que ya funciona.",
    icon: Cpu,
  },
  {
    title: "Acompañamiento real",
    body: "El proyecto no termina con la entrega. Soporte técnico, monitoreo y mantenimiento preventivo para proteger tu inversión a largo plazo.",
    icon: Headphones,
  },
];

const methodologyExtended = [
  "Visitamos tu sitio, revisamos consumo, activos y restricciones técnicas. El diagnóstico es gratuito y sin compromiso.",
  "Alcance detallado, ahorro estimado, inversión y cronograma claro. Sin letra pequeña ni sorpresas en costos.",
  "Instalamos, integramos, probamos y entregamos documentación técnica completa. No terminamos hasta que funciona.",
  "Soporte técnico, mantenimiento preventivo y reportes de desempeño para proteger tu inversión a largo plazo.",
];

const industries = [
  "Manufactura",
  "Infraestructura",
  "Retail",
  "Industrial",
  "Logística",
  "Servicios",
  "Construcción",
  "Energía",
  "Alimentos y bebidas",
  "Automotriz",
  "Salud",
  "Minería",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20">
        <div className="container">
          <SectionHeader
            eyebrow="Nosotros"
            title="Ingeniería que opera contigo, no solo para ti."
            body="Desde Nuevo Laredo, llevamos proyectos de energía, automatización, electrónica y soporte a empresas que no pueden permitirse errores técnicos ni tiempo de inactividad."
          />
        </div>
      </section>

      {/* Narrative */}
      <section className="pb-24">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <div>
              <Badge variant="muted">Nuestra historia</Badge>
              <h2 className="mt-5 text-balance text-3xl font-semibold text-white md:text-4xl">
                Nacimos para resolver lo que otros no conectan.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                Elliot Electronics nació de una necesidad concreta: las empresas industriales
                necesitaban un socio técnico que entendiera tanto el panel solar en el techo como
                el servidor en el rack y el tablero de control en planta — todo al mismo tiempo.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                No somos una empresa de mantenimiento que vende energía, ni una empresa de TI que
                hace proyectos eléctricos. Somos una firma de ingeniería que integra disciplinas:
                energía, hardware, software, electrónica y soporte, para que tu operación funcione
                como una sola arquitectura técnica.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Hemos trabajado en manufactura, infraestructura, retail y logística — siempre con
                el mismo principio: cada decisión técnica debe ser medible, documentada y
                sostenible en el tiempo.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {companyMetrics.slice(0, 4).map((metric) => (
                <MetricTile key={metric.label} value={metric.value} label={metric.label} />
              ))}
              <div className="premium-panel col-span-2 rounded-lg p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-eliot-cyan">
                  +15 Industrias atendidas
                </p>
                <p className="mt-2 text-sm leading-5 text-muted-foreground">
                  Manufactura · Infraestructura · Retail · Industrial · Logística · Servicios · y más
                </p>
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
            title="Cómo pensamos y cómo trabajamos."
            body="Estos principios guían cada proyecto, cada propuesta y cada decisión técnica que tomamos contigo."
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

      {/* Methodology */}
      <section id="metodo" className="pb-24">
        <div className="container">
          <SectionHeader
            eyebrow="Metodología"
            title="Un proceso que elimina la incertidumbre."
            body="De la primera reunión a la operación estable: cuatro fases que garantizan resultados medibles y documentados en cada proyecto."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step, i) => (
              <div key={step.id} className="premium-panel rounded-lg p-6">
                <p className="text-5xl font-bold text-eliot-cyan/15">{step.id}</p>
                <h3 className="mt-3 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {methodologyExtended[i]}
                </p>
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
            title="Donde hemos operado."
            body="Nuestra experiencia cubre sectores con demandas técnicas exigentes y tolerancia cero a las fallas operativas."
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
        title="¿Listo para trabajar con un equipo que entiende tu operación?"
        body="Nuestros proyectos parten de un diagnóstico honesto. Hablemos de lo que necesitas antes de hablar de presupuesto."
        cta="Iniciar conversación"
      />
    </>
  );
}

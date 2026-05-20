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

const methodologyExtended = [
  "Levantamos contexto operativo, activos, restricciones tecnicas y prioridades del negocio antes de proponer una solucion.",
  "Definimos alcance, criterios tecnicos, entregables y plan de trabajo para que la decision sea clara desde el inicio.",
  "Implementamos, integramos, probamos y documentamos la solucion con foco en continuidad, mantenimiento y adopcion.",
  "Acompanamos la operacion con soporte tecnico, seguimiento y ajustes cuando el sistema necesita evolucionar.",
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

const industrySummary =
  "Manufactura, infraestructura, retail, logistica, servicios y otros entornos con necesidades tecnicas especificas.";

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-20">
        <div className="container">
          <SectionHeader
            eyebrow="Nosotros"
            title="Ingenieria clara para operaciones que no pueden detenerse."
            body="Elliot Electronics integra energia, electronica, sistemas, consultoria y soporte tecnico para empresas que necesitan soluciones bien documentadas, implementables y sostenibles en operacion."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <div>
              <Badge variant="muted">Nuestra historia</Badge>
              <h2 className="mt-5 text-balance text-3xl font-semibold text-white md:text-4xl">
                Integramos disciplinas para resolver problemas completos.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                Elliot Electronics trabaja sobre una necesidad concreta: muchas operaciones
                requieren energia, hardware, software, electronica y soporte funcionando bajo una
                misma logica tecnica. Nuestro papel es conectar esas piezas con orden, criterio y
                documentacion.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Nos involucramos desde el diagnostico hasta la puesta en marcha: revisamos el
                contexto, proponemos una arquitectura viable, cuidamos la implementacion y dejamos
                bases para que el sistema pueda mantenerse y crecer sin depender de improvisaciones.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Nuestro criterio es practico: cada decision debe poder explicarse, probarse y
                sostenerse en el tiempo. La tecnologia solo tiene valor cuando mejora la operacion,
                reduce incertidumbre y puede mantenerse con claridad.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {companyMetrics.slice(0, 4).map((metric) => (
                <MetricTile key={metric.label} value={metric.value} label={metric.label} />
              ))}
              <div className="premium-panel col-span-2 rounded-lg p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-eliot-cyan">
                  Sectores atendidos
                </p>
                <p className="mt-2 text-sm leading-5 text-muted-foreground">{industrySummary}</p>
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

      <section id="metodo" className="pb-24">
        <div className="container">
          <SectionHeader
            eyebrow="Metodologia"
            title="Un proceso que reduce la incertidumbre."
            body="De la primera reunion a la operacion estable: cuatro fases para ordenar decisiones, responsabilidades y entregables tecnicos."
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

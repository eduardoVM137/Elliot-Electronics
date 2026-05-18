import type { Metadata } from "next";
import { Building2, Cpu, Headphones, Lightbulb, ShieldCheck, Workflow } from "lucide-react";

import { SectionHeader } from "@/components/visuals/section-header";
import { MetricTile } from "@/components/visuals/metric-tile";
import { companyMetrics } from "@/data/metrics";
import { FinalCta } from "@/sections/shared/final-cta";

export const metadata: Metadata = {
  title: "Nosotros",
};

const values = [
  { title: "Rigor tecnico", body: "Cada decision se documenta, prueba y mide.", icon: ShieldCheck },
  { title: "Vision integral", body: "Energia, hardware, software y soporte trabajando juntos.", icon: Workflow },
  { title: "Operacion primero", body: "Diseñamos para continuidad, mantenimiento y crecimiento.", icon: Building2 },
  { title: "Innovacion sobria", body: "Tecnologia util, implementable y alineada al negocio.", icon: Lightbulb },
  { title: "Arquitectura escalable", body: "Componentes modulares para nuevas lineas y sedes.", icon: Cpu },
  { title: "Acompanamiento", body: "Soporte tecnico despues de la implementacion.", icon: Headphones },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-20">
        <div className="container">
          <SectionHeader
            eyebrow="Nosotros"
            title="Una firma de ingenieria para empresas que necesitan claridad tecnica."
            body="Elliot Electronics integra energia, ingenieria, sistemas, electronica, consultoria y helpdesk en una sola arquitectura de servicio."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="premium-panel rounded-lg p-5">
                <value.icon className="h-6 w-6 text-eliot-cyan" />
                <h3 className="mt-5 text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="pb-20">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {companyMetrics.map((metric) => (
              <MetricTile key={metric.label} value={metric.value} label={metric.label} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

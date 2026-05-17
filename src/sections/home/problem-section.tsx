import { AlertTriangle, Cable, CircleDollarSign, Gauge } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/visuals/section-header";

const problems = [
  {
    title: "Altos costos",
    body: "Consumos electricos crecientes, demanda pico y decisiones sin visibilidad financiera.",
    icon: CircleDollarSign,
  },
  {
    title: "Baja eficiencia",
    body: "Equipos, procesos y sistemas operando por debajo de su capacidad real.",
    icon: Gauge,
  },
  {
    title: "Falta de integracion",
    body: "Energia, soporte, datos y control viviendo en plataformas desconectadas.",
    icon: Cable,
  },
  {
    title: "Operacion reactiva",
    body: "Mantenimiento y soporte que llegan tarde porque no existen alertas ni SLA claros.",
    icon: AlertTriangle,
  },
];

export function ProblemSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="Problema"
          title="La operacion moderna necesita mas que proveedores aislados."
          body="Las empresas pierden margen cuando energia, ingenieria, sistemas y soporte no comparten datos ni prioridades."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <Card key={problem.title} className="min-h-52">
              <CardHeader>
                <problem.icon className="h-6 w-6 text-eliot-cyan" />
                <CardTitle>{problem.title}</CardTitle>
                <CardDescription>{problem.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

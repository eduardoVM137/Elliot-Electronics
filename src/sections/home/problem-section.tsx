import { BadgeCheck, ClipboardCheck, Headphones, LineChart } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/visuals/section-header";

const benefits = [
  {
    title: "Ahorro con numeros claros",
    body: "Analizamos tu recibo, demanda y operacion para estimar ahorro, retorno e inversion antes de instalar.",
    icon: LineChart,
  },
  {
    title: "Ingenieria a la medida",
    body: "Dimensionamos sistemas solares, tableros, automatizacion y monitoreo segun tu consumo real.",
    icon: ClipboardCheck,
  },
  {
    title: "Implementacion integral",
    body: "Un solo equipo coordina diseno, suministro, instalacion, pruebas y entrega tecnica.",
    icon: BadgeCheck,
  },
  {
    title: "Soporte posterior",
    body: "Monitoreo, mantenimiento y mesa de ayuda para que la solucion siga produciendo valor.",
    icon: Headphones,
  },
];

export function ProblemSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="Por que elegir Elliot"
          title="No vendemos paneles: disenamos soluciones que bajan costos y sostienen tu operacion."
          body="El cliente recibe una propuesta tecnica y financiera entendible, con acompanamiento desde el diagnostico hasta el mantenimiento."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="min-h-56">
              <CardHeader>
                <benefit.icon className="h-6 w-6 text-primary" />
                <CardTitle>{benefit.title}</CardTitle>
                <CardDescription>{benefit.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

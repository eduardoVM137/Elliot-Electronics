import { BadgeCheck, ClipboardCheck, Headphones, LineChart } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/visuals/section-header";

const benefits = [
  {
    title: "Ingenieria y electronica industrial",
    body: "Tableros, automatizacion, instrumentacion y control para procesos que no pueden detenerse.",
    icon: ClipboardCheck,
  },
  {
    title: "Energia solar con retorno medible",
    body: "Dimensionamos sistemas fotovoltaicos segun consumo, demanda, espacio disponible e inversion.",
    icon: LineChart,
  },
  {
    title: "Solucion integral llave en mano",
    body: "Diagnostico, diseno, instalacion, pruebas, documentacion y capacitacion en una misma ruta.",
    icon: BadgeCheck,
  },
  {
    title: "Helpdesk y mantenimiento",
    body: "Mesa de ayuda, monitoreo y soporte tecnico para que la solucion siga produciendo valor.",
    icon: Headphones,
  },
];

export function ProblemSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="Por que eleginos"
          title="No vendemos equipos aislados: diseñamos infraestructura tecnica para operar mejor."
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

"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ClipboardCheck, Headphones, LineChart } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/visuals/section-header";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, margin: "-60px" };

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
    body: "Diagnostico, diseño, instalacion, pruebas, documentacion y capacitacion en una misma ruta.",
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease }}
        >
          <SectionHeader
            eyebrow="Por que eleginos"
            title="No vendemos equipos aislados: diseñamos infraestructura tecnica para operar mejor."
            body="El cliente recibe una propuesta tecnica y financiera entendible, con acompanamiento desde el diagnostico hasta el mantenimiento."
          />
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="min-h-56">
                <CardHeader>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
                    className="inline-flex"
                  >
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription>{benefit.body}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

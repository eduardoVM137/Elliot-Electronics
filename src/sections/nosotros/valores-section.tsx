"use client";

import { motion } from "framer-motion";
import { Building2, Cpu, Headphones, Lightbulb, ShieldCheck, Workflow } from "lucide-react";

import { SectionHeader } from "@/components/visuals/section-header";

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

const ease = [0.22, 1, 0.36, 1] as const;

export function ValoresSection() {
  return (
    <section id="valores" className="pb-24">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
        >
          <SectionHeader
            eyebrow="Valores"
            title="Como pensamos y como trabajamos."
            body="Estos principios guian cada proyecto, cada propuesta y cada decision tecnica que tomamos contigo."
          />
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
              className="premium-panel rounded-lg p-6 cursor-default"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                className="inline-flex"
              >
                <value.icon className="h-6 w-6 text-eliot-cyan" />
              </motion.div>
              <h3 className="mt-4 text-base font-semibold text-white">{value.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{value.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

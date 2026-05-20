"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/visuals/section-header";
import { HeroBackground } from "@/components/visuals/hero-background";

const portfolioStats = [
  { value: "6+", label: "Proyectos implementados" },
  { value: "5",  label: "Estados del país" },
  { value: "6",  label: "Sectores industriales" },
  { value: "98%",label: "SLA de soporte" },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ProyectosHero() {
  return (
    <div className="relative overflow-hidden pt-36 pb-10">
      <HeroBackground />
      <div className="container relative">

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
        >
          <SectionHeader
            eyebrow="Portafolio"
            title="Proyectos reales. Resultados documentados."
            body="Cada caso muestra el problema técnico, la solución implementada y el impacto medible que conseguimos. Sin casos de estudio ficticios."
          />
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {portfolioStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.93 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.12 + i * 0.07, ease }}
              className="premium-panel rounded-lg p-4 text-center"
            >
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

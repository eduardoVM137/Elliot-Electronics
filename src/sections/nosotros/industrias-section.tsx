"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/visuals/section-header";

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

const ease = [0.22, 1, 0.36, 1] as const;

export function IndustriasSection() {
  return (
    <section className="pb-24">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
        >
          <SectionHeader
            eyebrow="Industrias"
            title="Sectores donde aportamos valor."
            body="Adaptamos el enfoque tecnico al entorno, la criticidad y la forma de operar de cada empresa."
          />
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-3">
          {industries.map((industry, i) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, delay: i * 0.045, ease }}
              whileHover={{ scale: 1.06, transition: { duration: 0.18 } }}
              className="premium-panel rounded-full px-4 py-2 text-sm text-muted-foreground cursor-default"
            >
              {industry}
            </motion.span>
          ))}
        </div>

      </div>
    </section>
  );
}

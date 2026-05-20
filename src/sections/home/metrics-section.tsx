"use client";

import { motion } from "framer-motion";

import { MetricTile } from "@/components/visuals/metric-tile";
import { SectionHeader } from "@/components/visuals/section-header";
import { companyMetrics } from "@/data/metrics";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, margin: "-60px" };

export function MetricsSection() {
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
            eyebrow="Confianza operativa"
            title="Experiencia para proyectos donde el ahorro y la continuidad importan."
            align="center"
          />
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {companyMetrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
            >
              <MetricTile value={metric.value} label={metric.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

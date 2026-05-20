"use client";

import { motion } from "framer-motion";

import { approachSteps } from "@/data/metrics";
import { SectionHeader } from "@/components/visuals/section-header";
import { TechnicalLine } from "@/components/visuals/technical-line";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, margin: "-60px" };

export function ApproachSection() {
  return (
    <section className="section-pad theme-band border-y border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease }}
        >
          <SectionHeader
            eyebrow="Nuestro proceso"
            title="Del reto tecnico a una operacion medible."
            body="Levantamos necesidades, diseñamos la solucion, implementamos con ingenieria y dejamos soporte para continuidad."
            align="center"
          />
        </motion.div>

        <div className="mt-14">
          <motion.div
            initial={{ opacity: 0, scaleX: 0.4 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={vp}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            style={{ originX: 0 }}
          >
            <TechnicalLine />
          </motion.div>

          <div className="grid gap-4 pt-8 md:grid-cols-4">
            {approachSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease }}
                className="relative"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
                  className="absolute -top-[2.45rem] left-0 flex h-9 w-9 items-center justify-center rounded-full border border-eliot-cyan/40 bg-eliot-ink text-xs text-eliot-cyan"
                >
                  {step.id}
                </motion.div>
                <h3 className="text-lg font-semibold uppercase text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

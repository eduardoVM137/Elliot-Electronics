"use client";

import { motion } from "framer-motion";

import { HeroBackground } from "@/components/visuals/hero-background";
import { CapabilitiesCarousel } from "@/modules/nosotros/capabilities-carousel";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export function NosotrosHero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-36 pb-28">
      <HeroBackground />

      <div className="container relative">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div {...fade(0)}>
            <div className="inline-flex items-center rounded-full border border-eliot-cyan/30 bg-white px-4 py-2 text-sm font-semibold text-eliot-blue shadow-sm dark:border-eliot-cyan/20 dark:bg-eliot-deep dark:text-eliot-cyan">
              Nosotros
            </div>
          </motion.div>

          <motion.h1
            {...fade(0.1)}
            className="mx-auto mt-8 max-w-5xl text-balance text-5xl font-semibold leading-tight tracking-tight text-slate-950 dark:text-white md:text-7xl"
          >
            Ingenieria clara para operaciones que no pueden detenerse.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.22, ease }}
            className="mx-auto mt-8 h-1 w-20 origin-center rounded-full bg-eliot-cyan"
          />

          <motion.p
            {...fade(0.3)}
            className="mx-auto mt-8 max-w-2xl text-pretty text-xl leading-8 text-slate-500 dark:text-muted-foreground md:text-2xl"
          >
            Combinamos energia, electronica, sistemas, consultoria y soporte
            tecnico para operaciones integradas y listas para escalar.
          </motion.p>
        </div>

        <motion.div {...fade(0.42)}>
          <CapabilitiesCarousel />
        </motion.div>
      </div>
    </section>
  );
}

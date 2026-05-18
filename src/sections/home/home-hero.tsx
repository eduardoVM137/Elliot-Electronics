"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const heroImage =
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1800&q=90";

const storySteps = [
  "Diagnostico",
  "Ingenieria",
  "Implementacion",
  "Soporte",
];

export function HomeHero() {
  return (
    <section className="hero-surface relative min-h-svh overflow-hidden bg-eliot-ink text-white">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${heroImage})`,
          transformOrigin: "center bottom",
        }}
      />
      <div className="absolute inset-0 bg-[#061044]/[0.48]" />
      <div className="absolute inset-0 bg-gradient-to-b from-eliot-ink/[0.55] via-eliot-ink/[0.18] to-eliot-ink/[0.58]" />
      <div className="absolute inset-0 bg-gradient-to-r from-eliot-ink/[0.34] via-transparent to-eliot-ink/[0.28]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background via-background/[0.55] to-transparent" />

      <div className="container relative flex min-h-svh flex-col justify-center pb-12 pt-32 text-center md:pb-16 md:pt-36">
        <div className="mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs font-semibold uppercase tracking-[0.32em] text-eliot-cyan md:text-sm"
          >
            Eliot Electronics
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mx-auto mt-6 max-w-5xl text-balance font-display text-4xl font-black leading-[1.03] tracking-normal text-white md:text-6xl xl:text-[5.1rem]"
          >
            Infraestructura que convierte energia en rendimiento.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-white/[0.84] md:text-lg md:leading-8"
          >
            Disenamos, integramos y acompanamos soluciones tecnicas para
            empresas que necesitan ahorro, continuidad y claridad operativa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="/contacto">
                Solicitar diagnostico <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/soluciones/ingenieria">Ver soluciones</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34 }}
          className="mx-auto mt-16 grid w-full max-w-5xl grid-cols-2 gap-x-5 gap-y-7 text-left md:grid-cols-4"
        >
          {storySteps.map((step, index) => (
            <div key={step} className="border-t border-white/[0.32] pt-4">
              <p className="text-xs font-semibold text-eliot-cyan">
                0{index + 1}
              </p>
              <p className="mt-2 text-sm font-semibold text-white md:text-base">
                {step}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

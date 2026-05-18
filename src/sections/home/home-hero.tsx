"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Zap, Building2, GraduationCap } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const heroImage =
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1800&q=90";

const capabilities = [
  {
    icon: Building2,
    title: "Direccion operativa",
    text: "Ordenamos prioridades, costos y alcance para que cada proyecto avance con claridad.",
  },
  {
    icon: Zap,
    title: "Paneles solares",
    text: "Sistemas fotovoltaicos para reducir dependencia, estabilizar costos y ganar control.",
  },
  {
    icon: Cpu,
    title: "Sistemas y electronica",
    text: "Integracion de control, monitoreo y equipos para operaciones mas visibles.",
  },
  {
    icon: GraduationCap,
    title: "Soporte continuo",
    text: "Acompanamiento tecnico para mantener decisiones, activos y equipos alineados.",
  },
];

export function HomeHero() {
  return (
    <section className="hero-surface relative min-h-svh overflow-hidden bg-eliot-ink text-white">
      <motion.div
        className="absolute inset-0 scale-105 bg-cover bg-bottom"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.03 }}
        transition={{ duration: 18, ease: "easeOut" }}
        style={{
          backgroundImage: `url(${heroImage})`,
          transformOrigin: "center bottom",
        }}
      />

      <div className="absolute inset-0 bg-[#061044]/[0.56]" />
      <div className="absolute inset-0 bg-gradient-to-b from-eliot-ink/[0.72] via-eliot-ink/[0.22] to-eliot-ink/[0.7]" />
      <div className="absolute inset-0 bg-gradient-to-r from-eliot-ink/[0.48] via-transparent to-eliot-ink/[0.34]" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[18%] h-28 w-[min(860px,88vw)] rounded-full bg-eliot-cyan/20 blur-3xl"
        animate={{
          opacity: [0.18, 0.42, 0.24],
          scaleX: [0.82, 1.08, 0.9],
          x: [-36, 28, -18],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[34%] h-px w-[42rem] rotate-[-14deg] bg-gradient-to-r from-transparent via-eliot-cyan/70 to-transparent"
        animate={{ opacity: [0, 0.7, 0], x: [-120, 120] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/[0.65] to-transparent" />

      <div className="container relative flex min-h-svh flex-col justify-center pb-12 pt-32 text-center md:pb-16 md:pt-36">
        <div className="mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs font-semibold uppercase tracking-[0.32em] text-eliot-cyan md:text-sm"
          >
ELIOT ELECTRONICS | INGENIERÍA, ENERGÍA Y TECNOLOGÍA
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mx-auto mt-6 max-w-5xl text-balance font-display text-4xl font-black leading-[1.03] tracking-normal text-white md:text-6xl xl:text-[5.1rem]"
          >
      Ingeniería, energía y tecnología para operaciones que no pueden detenerse.          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-7 text-white/[0.84] md:text-lg md:leading-8"
          >
     Diseñamos e integramos soluciones en ingeniería, energía solar, electrónica, sistemas e infraestructura técnica para reducir costos, prevenir fallas y mejorar la operación de tu empresa, con consultoría técnica para supervisar proyectos y tomar mejores decisiones.
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
              <Link href="/soluciones/energia">Ver paneles solares</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34 }}
          className="mx-auto mt-16 grid w-full max-w-6xl grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4"
        >
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.42 + index * 0.08 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-2xl shadow-black/10 backdrop-blur-md transition-colors hover:border-eliot-cyan/30 hover:bg-white/[0.12]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-eliot-cyan/15 text-eliot-cyan">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-display text-base font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

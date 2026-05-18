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
    title: "Ingeniería aplicada",
    text: "Diseño, integración y mejora de infraestructura técnica.",
  },
  {
    icon: Zap,
    title: "Energía y eficiencia",
    text: "Soluciones solares, ahorro energético y continuidad operativa.",
  },
  {
    icon: Cpu,
    title: "Sistemas y electrónica",
    text: "Automatización, control, diagnóstico e implementación tecnológica.",
  },
  {
    icon: GraduationCap,
    title: "Consultoría y capacitación",
    text: "Acompañamiento técnico para equipos, empresas y proyectos.",
  },
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

      <div className="absolute inset-0 bg-[#061044]/[0.56]" />
      <div className="absolute inset-0 bg-gradient-to-b from-eliot-ink/[0.72] via-eliot-ink/[0.22] to-eliot-ink/[0.7]" />
      <div className="absolute inset-0 bg-gradient-to-r from-eliot-ink/[0.48] via-transparent to-eliot-ink/[0.34]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/[0.65] to-transparent" />

      <div className="container relative flex min-h-svh flex-col justify-center pb-12 pt-32 text-center md:pb-16 md:pt-36">
        <div className="mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs font-semibold uppercase tracking-[0.32em] text-eliot-cyan md:text-sm"
          >
            Eliot Electronics · Firma de ingeniería
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mx-auto mt-6 max-w-5xl text-balance font-display text-4xl font-black leading-[1.03] tracking-normal text-white md:text-6xl xl:text-[5.1rem]"
          >
            Ingeniería que transforma infraestructura en rendimiento.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-7 text-white/[0.84] md:text-lg md:leading-8"
          >
            Diseñamos, integramos y acompañamos soluciones técnicas en energía,
            sistemas, electrónica, automatización, consultoría y capacitación
            para empresas que necesitan operar con mayor eficiencia, continuidad
            y control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="/contacto">
                Solicitar diagnóstico <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="secondary" size="lg">
              <Link href="/soluciones/ingenieria">Explorar ingeniería</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34 }}
          className="mx-auto mt-16 grid w-full max-w-6xl grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4"
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-2xl shadow-black/10 backdrop-blur-md transition hover:bg-white/[0.12]"
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
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
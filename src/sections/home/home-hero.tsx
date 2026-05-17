"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const heroImage =
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1800&q=90";

const valuePoints = [
  "Diagnostico tecnico y financiero",
  "Implementacion integral",
  "Soporte continuo",
];

const heroStats = [
  { value: "+250", label: "Proyectos e integraciones" },
  { value: "35%", label: "Ahorro energetico potencial" },
  { value: "24/7", label: "Helpdesk, monitoreo y soporte" },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] pt-20 text-[#061044] dark:bg-eliot-ink dark:text-white">
      <div className="absolute inset-0 technical-surface opacity-25" />
      <div className="absolute left-0 top-16 h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 top-20 hidden h-[calc(100%-5rem)] w-[58%] lg:block">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            clipPath: "polygon(13% 0, 100% 0, 100% 100%, 0 100%)",
            backgroundImage: `linear-gradient(90deg, rgba(247,251,255,0.35), rgba(247,251,255,0.08) 28%, rgba(6,16,68,0.58)), url(${heroImage})`,
          }}
        />
      </div>
      <div className="absolute inset-y-20 right-0 hidden w-[64%] bg-gradient-to-r from-[#f7fbff] via-[#f7fbff]/80 to-transparent dark:from-eliot-ink dark:via-eliot-ink/78 lg:block" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative grid min-h-[calc(90svh-5rem)] items-center gap-12 py-14 md:py-16 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="bg-white/[0.85] text-[#075eb5] dark:bg-eliot-electric/10">
              Infraestructura tecnica de alto rendimiento
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-6 text-balance font-display text-5xl font-black leading-[1.02] tracking-normal text-[#07145b] dark:text-white md:text-6xl xl:text-[4.9rem]"
          >
            Ingenieria de alto nivel para empresas que exigen rendimiento.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[#1d2a52] dark:text-eliot-silver/82"
          >
            Integramos energia, hardware, automatizacion y soporte tecnico para
            reducir costos, elevar continuidad y operar con datos claros.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="/contacto">
                Solicitar diagnostico <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/soluciones/ingenieria">
                <Play className="h-4 w-4" /> Ver capacidades
              </Link>
            </Button>
          </motion.div>

          <div className="mt-8 flex flex-col gap-4 text-sm font-semibold text-[#07145b] dark:text-white sm:flex-row sm:flex-wrap">
            {valuePoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                {point}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.18 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-lg bg-primary/10 blur-3xl lg:hidden" />
          <div className="image-surface on-dark relative min-h-[25rem] overflow-hidden rounded-lg border border-white/15 shadow-panel md:min-h-[31rem] lg:bg-transparent lg:shadow-none">
            <div
              className="absolute inset-0 bg-cover bg-center lg:hidden"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(6,16,68,0.08), rgba(6,16,68,0.66)), url(${heroImage})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent dark:from-eliot-ink/40 lg:hidden" />
            <div className="relative flex h-full min-h-[25rem] flex-col justify-center p-5 md:min-h-[31rem] md:p-7 lg:items-end lg:p-0">
              <div className="w-full max-w-[30rem] rounded-lg border border-white/[0.18] bg-eliot-ink/75 p-5 text-white shadow-panel backdrop-blur-2xl md:p-6">
                <div className="flex items-center justify-between border-b border-white/[0.12] pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase text-eliot-cyan">
                      Ruta tecnica
                    </p>
                    <p className="mt-1 text-lg font-black">Diagnostico ejecutivo</p>
                  </div>
                  <span className="rounded-full border border-eliot-cyan/35 bg-eliot-cyan/10 px-3 py-1 text-xs font-semibold text-eliot-cyan">
                    Activo
                  </span>
                </div>

                <div className="mt-5 grid gap-3">
                  {["Analisis", "Diseno", "Implementacion", "Soporte"].map(
                    (step, index) => (
                      <div key={step} className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/[0.08] text-xs font-bold text-eliot-cyan">
                          0{index + 1}
                        </span>
                        <div className="h-px flex-1 bg-white/[0.12]" />
                        <span className="w-32 text-sm font-semibold text-white">
                          {step}
                        </span>
                      </div>
                    ),
                  )}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-md border border-white/15 bg-white/[0.08] p-4">
                    <p className="text-2xl font-black text-white">ROI</p>
                    <p className="mt-1 text-xs text-white/[0.72]">Antes de invertir</p>
                  </div>
                  <div className="rounded-md border border-white/15 bg-white/[0.08] p-4">
                    <p className="text-2xl font-black text-white">SLA</p>
                    <p className="mt-1 text-xs text-white/[0.72]">Continuidad</p>
                  </div>
                  <div className="rounded-md border border-white/15 bg-white/[0.08] p-4">
                    <p className="text-2xl font-black text-white">QA</p>
                    <p className="mt-1 text-xs text-white/[0.72]">Calidad tecnica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container relative pb-14">
        <div className="grid gap-3 md:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.label} className="premium-panel rounded-lg p-5">
              <p className="text-3xl font-black text-[#07145b] dark:text-white">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

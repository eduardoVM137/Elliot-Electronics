"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const heroImage =
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1800&q=90";

const valuePoints = [
  "Ingenieria y electronica industrial",
  "Energia solar con retorno medible",
  "Soporte tecnico continuo",
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
      <div className="absolute left-0 top-20 h-[36rem] w-[36rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative grid min-h-[calc(88svh-5rem)] items-center gap-12 py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge>Ingenieria / electronica / energia solar</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-6 text-balance font-display text-5xl font-black leading-[1.02] tracking-normal text-[#07145b] dark:text-white md:text-6xl xl:text-7xl"
          >
            Ingenieria aplicada, electronica y energia solar para empresas que
            exigen rendimiento.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[#1d2a52] dark:text-eliot-silver/82"
          >
            Disenamos, instalamos y damos soporte a soluciones que reducen
            costos, automatizan procesos y mantienen tu operacion funcionando
            con datos claros.
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
          <div className="absolute -inset-4 rounded-lg bg-primary/10 blur-3xl" />
          <div className="image-surface on-dark relative min-h-[28rem] overflow-hidden rounded-lg border border-white/15 shadow-panel md:min-h-[34rem]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(6,16,68,0.08), rgba(6,16,68,0.66)), url(${heroImage})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent dark:from-eliot-ink/40" />
            <div className="relative flex h-full min-h-[28rem] flex-col justify-between p-5 md:min-h-[34rem] md:p-7">
              <div className="w-fit rounded-md border border-white/20 bg-eliot-ink/55 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase text-eliot-cyan">
                  Energia + control
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Diseno, instalacion y monitoreo en una misma ruta.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-white/15 bg-eliot-ink/60 p-4 backdrop-blur-xl">
                  <p className="text-3xl font-black text-white">ROI</p>
                  <p className="mt-1 text-sm text-white/78">
                    Proyeccion financiera antes de invertir.
                  </p>
                </div>
                <div className="rounded-md border border-white/15 bg-eliot-ink/60 p-4 backdrop-blur-xl">
                  <p className="text-3xl font-black text-white">SLA</p>
                  <p className="mt-1 text-sm text-white/78">
                    Soporte posterior para continuidad operativa.
                  </p>
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

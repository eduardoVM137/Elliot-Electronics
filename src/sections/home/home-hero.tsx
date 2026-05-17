"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const heroImage =
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1800&q=90";

const valuePoints = [
  "Inversion rentable",
  "Ingenieria a la medida",
  "Instalacion y soporte integral",
];

const heroStats = [
  { value: "35%", label: "Ahorro potencial en energia" },
  { value: "+250", label: "Proyectos e integraciones" },
  { value: "24/7", label: "Monitoreo y soporte tecnico" },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] pt-20 text-[#061044] dark:bg-eliot-ink dark:text-white">
      <div
        className="absolute inset-y-20 right-0 hidden w-[62%] bg-cover bg-center lg:block"
        style={{
          backgroundImage: `linear-gradient(90deg, #f7fbff 0%, rgba(247,251,255,0.72) 22%, rgba(247,251,255,0.04) 58%), url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 technical-surface opacity-25" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative grid min-h-[calc(88svh-5rem)] items-center gap-10 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge>Energia solar, ingenieria y soporte para empresas</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-6 text-balance font-display text-5xl font-black leading-[1.02] tracking-normal text-[#07145b] dark:text-white md:text-7xl"
          >
            Soluciones empresariales en energia solar e ingenieria integral.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[#1d2a52] dark:text-eliot-silver/82"
          >
            Reducimos costos electricos, modernizamos operaciones y damos
            seguimiento tecnico para industrias, comercios y PYMES que buscan
            invertir con claridad.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="/contacto">
                Solicitar cotizacion <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/soluciones/energia">
                <Play className="h-4 w-4" /> Ver proceso
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

        <div className="relative lg:hidden">
          <div
            className="aspect-[16/10] rounded-lg bg-cover bg-center shadow-panel"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        </div>
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

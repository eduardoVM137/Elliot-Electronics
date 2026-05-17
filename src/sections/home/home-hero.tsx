"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const heroImage =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=90";

export function HomeHero() {
  return (
    <section className="hero-surface relative min-h-[92svh] overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5,10,17,0.95) 0%, rgba(5,10,17,0.76) 38%, rgba(5,10,17,0.24) 100%), url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 technical-surface opacity-20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-eliot-ink to-transparent" />

      <div className="container relative flex min-h-[calc(92svh-5rem)] items-center">
        <div className="max-w-4xl py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge>Firma de ingenieria industrial</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-6 text-balance font-display text-5xl font-semibold leading-[0.98] text-white md:text-7xl lg:text-8xl"
          >
            Infraestructura inteligente para empresas que no pueden detenerse.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-eliot-silver/80"
          >
            Energia solar, ingenieria, sistemas, electronica, consultoria y
            soporte tecnico conectados en una sola vision operativa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="/contacto">
                Hablemos de tu proyecto <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/soluciones/energia">
                <Play className="h-4 w-4" /> Simular ahorro
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="container relative -mt-24 pb-10">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            "Diagnostico tecnico y financiero",
            "Implementacion llave en mano",
            "Soporte, monitoreo y continuidad",
          ].map((item) => (
            <div key={item} className="premium-panel rounded-lg p-4">
              <ShieldCheck className="mb-3 h-5 w-5 text-eliot-cyan" />
              <p className="text-sm font-medium text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

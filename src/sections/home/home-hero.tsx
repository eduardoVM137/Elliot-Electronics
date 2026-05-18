"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const heroImage =
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1800&q=90";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-eliot-ink pt-20 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-[#061044]/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-eliot-ink/10 via-eliot-ink/24 to-eliot-ink/54" />
      <div className="absolute inset-0 bg-gradient-to-r from-eliot-ink/28 via-transparent to-eliot-ink/22" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative flex min-h-[calc(92svh-5rem)] items-center justify-center py-16 text-center md:py-24">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-sm font-semibold uppercase tracking-[0.28em] text-eliot-cyan"
          >
            Infraestructura tecnica para empresas
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mx-auto mt-6 max-w-4xl text-balance font-display text-4xl font-black leading-[1.04] tracking-normal text-white md:text-6xl xl:text-7xl"
          >
            Ingenieria que mueve empresas.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-white/86 md:text-xl md:leading-8"
          >
            Energia, control y soporte tecnico para operaciones que necesitan
            rendimiento medible.
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
      </div>
    </section>
  );
}

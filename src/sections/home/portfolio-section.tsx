"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/visuals/section-header";
import { solutions } from "@/data/solutions";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, margin: "-60px" };

const homeOrder = ["ingenieria", "electronica", "energia", "consultoria", "helpdesk", "sistemas"];

export function PortfolioSection() {
  const orderedSolutions = homeOrder
    .map((slug) => solutions.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <section className="section-pad">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease }}
        >
          <SectionHeader
            eyebrow="Soluciones"
            title="Capacidades para disenar, instalar y sostener tu operacion."
            body="Integramos analisis, diseño, instalacion, soporte y plataformas de control para que cada inversion tenga retorno, continuidad y calidad tecnica."
          />
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {orderedSolutions.map((solution, i) => solution && (
            <motion.div
              key={solution.slug}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease }}
              whileHover={{ y: -4, transition: { duration: 0.22 } }}
            >
              <Link href={solution.href} className="group block">
                <Card className="on-dark relative min-h-72 overflow-hidden transition-colors group-hover:border-eliot-electric/40">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-55 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(5,10,17,0.08), rgba(5,10,17,0.92)), url(${solution.image})`,
                    }}
                  />
                  <CardHeader className="relative">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-xs font-medium text-eliot-cyan">
                        {solution.index}
                      </span>
                      <solution.icon className="h-6 w-6 text-eliot-cyan" />
                    </div>
                    <CardTitle className="text-2xl">{solution.eyebrow}</CardTitle>
                    <CardDescription>{solution.summary}</CardDescription>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
                      Ver solucion <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

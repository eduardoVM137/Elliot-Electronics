"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ImagePanel } from "@/components/visuals/image-panel";
import { SectionHeader } from "@/components/visuals/section-header";
import { projects } from "@/data/projects";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const vp = { once: true, margin: "-60px" };

export function CaseStudiesSection() {
  return (
    <section className="section-pad theme-band">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <SectionHeader
            eyebrow="Casos de exito"
            title="Proyectos con impacto tecnico y financiero."
            body="Implementaciones industriales, energeticas y digitales pensadas para operar, medir y escalar."
          />
          <Button asChild variant="secondary">
            <Link href="/proyectos">
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              whileHover={{ y: -4, transition: { duration: 0.22 } }}
            >
              <Link href={`/proyectos/${project.slug}`} className="group block">
                <ImagePanel
                  image={project.image}
                  kicker={project.solution}
                  title={project.title}
                  className="transition-colors group-hover:border-eliot-electric/40"
                />
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {project.summary}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

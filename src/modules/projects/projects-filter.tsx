"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { ImagePanel } from "@/components/visuals/image-panel";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

const solutions = [
  "Todos",
  "Energia",
  "Ingenieria",
  "Sistemas",
  "Electronica",
  "Consultoria",
  "Helpdesk",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos" ? projects : projects.filter((p) => p.solution === active);

  return (
    <>
      {/* ── Filter tabs with sliding pill indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease }}
        className="flex flex-wrap gap-2"
      >
        {solutions.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            className={cn(
              "relative rounded-full px-4 py-1.5 text-sm transition-colors",
              active === s ? "text-white" : "premium-panel text-muted-foreground hover:text-white",
            )}
          >
            {active === s && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-eliot-electric"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{s}</span>
          </button>
        ))}
      </motion.div>

      {/* ── Project cards ── */}
      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 18, scale: 0.95 }}
              animate={{
                opacity: 1, y: 0, scale: 1,
                transition: { duration: 0.45, delay: i * 0.06, ease },
              }}
              exit={{
                opacity: 0, scale: 0.92,
                transition: { duration: 0.18, delay: 0 },
              }}
            >
              <Link
                href={`/proyectos/${project.slug}`}
                className="group block"
              >
                <ImagePanel
                  image={project.image}
                  kicker={project.solution}
                  title={project.title}
                  className="transition-colors group-hover:border-eliot-electric/40"
                />
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-wide text-eliot-cyan">
                      {project.sector}
                    </p>
                    <p className="text-xs text-muted-foreground">{project.location}</p>
                  </div>
                  <h3 className="text-base font-semibold text-white transition-colors group-hover:text-eliot-cyan">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">{project.impact}</p>
                  <div className="flex items-center gap-5 pt-1">
                    {project.stats.slice(0, 2).map((stat) => (
                      <div key={stat.label}>
                        <span className="text-base font-semibold text-white">{stat.value}</span>
                        <span className="ml-1.5 text-xs text-muted-foreground">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

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

export function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos" ? projects : projects.filter((p) => p.solution === active);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {solutions.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm transition-colors",
              active === s
                ? "bg-eliot-electric text-white"
                : "premium-panel text-muted-foreground hover:text-white",
            )}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <Link
            key={project.slug}
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
        ))}
      </div>
    </>
  );
}

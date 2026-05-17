import Link from "next/link";

import { ImagePanel } from "@/components/visuals/image-panel";
import type { Project } from "@/data/projects";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link key={project.slug} href={`/proyectos/${project.slug}`} className="group">
          <ImagePanel
            image={project.image}
            kicker={project.solution}
            title={project.title}
            className="transition-colors group-hover:border-eliot-electric/40"
          />
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">{project.sector} / {project.location}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

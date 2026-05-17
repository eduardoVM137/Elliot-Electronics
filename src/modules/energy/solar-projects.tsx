import Link from "next/link";

import { ImagePanel } from "@/components/visuals/image-panel";
import { projects } from "@/data/projects";

export function SolarProjects() {
  const solarProjects = projects.filter((project) => project.solution === "Energia");

  return (
    <section className="pb-20">
      <div className="container">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase text-eliot-cyan">
              Proyectos solares
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Energia en campo.</h2>
          </div>
          <Link href="/proyectos" className="text-sm text-muted-foreground hover:text-foreground">
            Ver todos
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[...solarProjects, ...projects.slice(1, 3)].map((project) => (
            <Link key={project.slug} href={`/proyectos/${project.slug}`}>
              <ImagePanel image={project.image} kicker={project.sector} title={project.title} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

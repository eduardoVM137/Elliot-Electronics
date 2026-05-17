import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { ImagePanel } from "@/components/visuals/image-panel";
import { projects, getProjectBySlug } from "@/data/projects";
import { FinalCta } from "@/sections/shared/final-cta";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return {
    title: project?.title ?? "Proyecto",
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="pt-36 pb-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <Badge>{project.solution}</Badge>
              <h1 className="mt-6 text-balance text-4xl font-semibold text-white md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
                {project.summary}
              </p>
              <p className="mt-8 text-sm font-medium uppercase text-eliot-cyan">
                Impacto
              </p>
              <p className="mt-3 text-lg leading-8 text-white">{project.impact}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="premium-panel rounded-lg p-5">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <ImagePanel image={project.image} title={project.sector} kicker={project.location} aspect="tall" />
          </div>
        </div>
      </section>
      <FinalCta
        title="¿Quieres un proyecto con este nivel de control?"
        body="Llevamos la misma logica de diagnostico, ejecucion y soporte a tu empresa."
      />
    </>
  );
}

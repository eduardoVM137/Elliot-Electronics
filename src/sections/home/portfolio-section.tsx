import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/visuals/section-header";
import { solutions } from "@/data/solutions";

export function PortfolioSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="Carteras de negocio"
          title="Seis productos, una misma arquitectura de valor."
          body="Cada linea esta disenada con una experiencia propia, pero comparte el mismo sistema visual, los mismos datos y la misma navegacion."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => (
            <Link key={solution.slug} href={solution.href} className="group">
              <Card className="relative min-h-72 overflow-hidden transition-colors group-hover:border-eliot-electric/40">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-35 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(5,10,17,0.15), rgba(5,10,17,0.9)), url(${solution.image})`,
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
                    Explorar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

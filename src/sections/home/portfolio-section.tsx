import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/visuals/section-header";
import { solutions } from "@/data/solutions";

const homeOrder = ["ingenieria", "electronica", "energia", "consultoria", "helpdesk", "sistemas"];

export function PortfolioSection() {
  const orderedSolutions = homeOrder
    .map((slug) => solutions.find((solution) => solution.slug === slug))
    .filter(Boolean);

  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="Soluciones"
          title="Capacidades para disenar, instalar y sostener tu operacion."
          body="Ingenieria, electronica y energia solar como frente principal; consultoria para decidir con claridad, helpdesk para continuidad y sistemas cuando la operacion necesita datos."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {orderedSolutions.map((solution) => solution && (
            <Link key={solution.slug} href={solution.href} className="group">
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
          ))}
        </div>
      </div>
    </section>
  );
}

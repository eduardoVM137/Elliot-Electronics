import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Solution } from "@/data/solutions";

type SolutionHeroProps = {
  solution: Solution;
  secondaryCta?: string;
};

export function SolutionHero({ solution, secondaryCta = "Ver proyectos" }: SolutionHeroProps) {
  return (
    <section className="hero-surface relative min-h-[78svh] overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5,10,17,0.96) 0%, rgba(5,10,17,0.72) 44%, rgba(5,10,17,0.22) 100%), url(${solution.image})`,
        }}
      />
      <div className="absolute inset-0 technical-surface opacity-20" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-eliot-ink to-transparent" />

      <div className="container relative flex min-h-[calc(78svh-5rem)] items-center">
        <div className="max-w-3xl py-24">
          <Badge>{solution.index}. {solution.eyebrow}</Badge>
          <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-[1] text-white md:text-7xl">
            {solution.title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-eliot-silver/82">
            {solution.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/contacto">
                {solution.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/proyectos">{secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

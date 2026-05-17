import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FinalCtaProps = {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
  className?: string;
};

export function FinalCta({
  title = "¿Tienes un proyecto en mente?",
  body = "Hablemos y encontremos la mejor solucion para tu empresa.",
  cta = "Agendar reunion",
  href = "/contacto",
  className,
}: FinalCtaProps) {
  return (
    <section className={cn("pb-20", className)}>
      <div className="container">
        <div className="premium-panel relative overflow-hidden rounded-lg p-6 md:p-9">
          <div className="absolute inset-0 technical-surface opacity-15" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-balance text-2xl font-semibold text-white md:text-4xl">
                {title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                {body}
              </p>
            </div>
            <Button asChild>
              <Link href={href}>
                {cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

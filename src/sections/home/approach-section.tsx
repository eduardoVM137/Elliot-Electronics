import { approachSteps } from "@/data/metrics";
import { SectionHeader } from "@/components/visuals/section-header";
import { TechnicalLine } from "@/components/visuals/technical-line";

export function ApproachSection() {
  return (
    <section className="section-pad border-y border-white/10 bg-white/[0.025]">
      <div className="container">
        <SectionHeader
          eyebrow="Enfoque Eliot"
          title="Del diagnostico a la continuidad operativa."
          body="Un modelo horizontal que conecta estrategia, diseno tecnico, implementacion y soporte."
          align="center"
        />
        <div className="mt-14">
          <TechnicalLine />
          <div className="grid gap-4 pt-8 md:grid-cols-4">
            {approachSteps.map((step) => (
              <div key={step.id} className="relative">
                <div className="absolute -top-[2.45rem] left-0 flex h-9 w-9 items-center justify-center rounded-full border border-eliot-cyan/40 bg-eliot-ink text-xs text-eliot-cyan">
                  {step.id}
                </div>
                <h3 className="text-lg font-semibold uppercase text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

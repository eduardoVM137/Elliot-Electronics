import type { Solution } from "@/data/solutions";

type SolutionFeatureGridProps = {
  solution: Solution;
};

export function SolutionFeatureGrid({ solution }: SolutionFeatureGridProps) {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-3">
          {solution.features.map((feature) => (
            <div key={feature.title} className="premium-panel rounded-lg p-5">
              <feature.icon className="h-6 w-6 text-eliot-cyan" />
              <h3 className="mt-5 text-base font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

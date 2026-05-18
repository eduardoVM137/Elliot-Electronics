import type { Solution } from "@/data/solutions";

export function ProofStrip({ solution }: { solution: Solution }) {
  return (
    <section className="-mt-16 pb-8">
      <div className="container relative">
        <div className="grid gap-3 md:grid-cols-3">
          {solution.proof.map((item) => (
            <div key={item.label} className="premium-panel rounded-lg p-5">
              <p className="text-2xl font-semibold text-foreground dark:text-white md:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

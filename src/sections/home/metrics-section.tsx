import { MetricTile } from "@/components/visuals/metric-tile";
import { SectionHeader } from "@/components/visuals/section-header";
import { companyMetrics } from "@/data/metrics";

export function MetricsSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="Confianza operativa"
          title="Experiencia para proyectos donde el ahorro y la continuidad importan."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {companyMetrics.map((metric) => (
            <MetricTile key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

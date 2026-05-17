import { Cpu, Gauge, PlugZap, Shield, Wrench, Zap } from "lucide-react";

import { ImagePanel } from "@/components/visuals/image-panel";
import { SectionHeader } from "@/components/visuals/section-header";

const solutions = [
  "Control y automatizacion",
  "Variadores de frecuencia",
  "Distribucion electrica",
  "Instrumentacion",
  "Tableros de fuerza",
];

const components = [
  { title: "PLC / control", icon: Cpu },
  { title: "Protecciones", icon: Shield },
  { title: "Medicion", icon: Gauge },
  { title: "Potencia", icon: Zap },
  { title: "Cableado", icon: PlugZap },
  { title: "Mantenimiento", icon: Wrench },
];

export function HardwareShowcase() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="Hardware real"
          title="Tableros, control y automatizacion con criterio industrial."
          body="Esta vista se siente fisica: componentes, gabinetes, diagramas y rutas de conexion."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-3">
            {solutions.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm text-white">
                {item}
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <ImagePanel
              image="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80"
              title="Gabinete de control"
              kicker="Integracion"
              aspect="tall"
            />
            <div className="grid gap-4">
              {components.map((component) => (
                <div key={component.title} className="premium-panel rounded-lg p-4">
                  <component.icon className="h-5 w-5 text-eliot-cyan" />
                  <p className="mt-3 text-sm font-medium text-white">{component.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

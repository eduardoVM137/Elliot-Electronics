import { Cable, Cog, DraftingCompass, Gauge, Network, ShieldCheck } from "lucide-react";

const capabilities = [
  { title: "Procesos", body: "Optimizacion y balanceo de lineas.", icon: Cog },
  { title: "Electrica", body: "Calculo, protecciones y normas.", icon: Cable },
  { title: "Mecanica", body: "Layout, montaje y pruebas.", icon: DraftingCompass },
  { title: "Instrumentacion", body: "Sensores, medicion y control.", icon: Gauge },
  { title: "Sistemas", body: "Integracion con datos operativos.", icon: Network },
  { title: "Calidad", body: "Pruebas, documentacion y entrega.", icon: ShieldCheck },
];

export function CapabilitiesMatrix() {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {capabilities.map((capability) => (
            <div key={capability.title} className="premium-panel rounded-lg p-5">
              <capability.icon className="h-6 w-6 text-eliot-cyan" />
              <h3 className="mt-5 font-semibold text-white">{capability.title}</h3>
              <p className="mt-2 text-sm leading-5 text-muted-foreground">
                {capability.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

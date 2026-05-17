import { BatteryCharging, Factory, Home, Network } from "lucide-react";

const systems = [
  {
    title: "Interconectado",
    body: "Ahorro directo para empresas conectadas a red.",
    icon: Network,
  },
  {
    title: "Hibrido",
    body: "Respaldo y optimizacion con bancos de baterias.",
    icon: BatteryCharging,
  },
  {
    title: "Industrial",
    body: "Dimensionamiento para demanda, techumbre y expansion.",
    icon: Factory,
  },
  {
    title: "Comercial",
    body: "Soluciones para plazas, pymes y edificios corporativos.",
    icon: Home,
  },
];

export function SolarSystemTypes() {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-4">
          {systems.map((system) => (
            <div key={system.title} className="premium-panel rounded-lg p-5">
              <system.icon className="h-6 w-6 text-eliot-cyan" />
              <h3 className="mt-5 text-lg font-semibold text-white">{system.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{system.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

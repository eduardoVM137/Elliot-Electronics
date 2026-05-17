import { ArrowRight, Cable, Cpu, Gauge, MonitorCog, RadioTower } from "lucide-react";

const flow = [
  { title: "Sensores", icon: Gauge },
  { title: "Controlador", icon: Cpu },
  { title: "Comunicacion", icon: RadioTower },
  { title: "Actuadores", icon: Cable },
  { title: "Supervision", icon: MonitorCog },
];

export function ElectricalDiagram() {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="premium-panel rounded-lg p-6">
          <p className="text-sm font-medium uppercase text-eliot-cyan">
            Diagrama de solucion
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-[repeat(9,minmax(0,1fr))] md:items-center">
            {flow.map((item, index) => (
              <div key={item.title} className="contents">
                <div className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-center">
                  <item.icon className="mx-auto h-6 w-6 text-eliot-cyan" />
                  <p className="mt-3 text-sm text-white">{item.title}</p>
                </div>
                {index < flow.length - 1 && (
                  <ArrowRight className="mx-auto hidden h-5 w-5 text-eliot-cyan md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

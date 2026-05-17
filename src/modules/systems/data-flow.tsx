import { ArrowRight, CloudCog, Cpu, Database, Gauge, Server } from "lucide-react";
import { Fragment } from "react";

const flow = [
  { title: "Sensores", icon: Gauge },
  { title: "Controlador", icon: Cpu },
  { title: "Gateway", icon: Server },
  { title: "Data lake", icon: Database },
  { title: "Dashboard", icon: CloudCog },
];

export function DataFlow() {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="premium-panel rounded-lg p-6">
          <div className="grid gap-4 md:grid-cols-[repeat(9,minmax(0,1fr))] md:items-center">
            {flow.map((item, index) => (
              <Fragment key={item.title}>
                <div key={item.title} className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-center">
                  <item.icon className="mx-auto h-6 w-6 text-eliot-cyan" />
                  <p className="mt-3 text-sm font-medium text-white">{item.title}</p>
                </div>
                {index < flow.length - 1 && (
                  <ArrowRight
                    key={`${item.title}-arrow`}
                    className="mx-auto hidden h-5 w-5 text-eliot-cyan md:block"
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

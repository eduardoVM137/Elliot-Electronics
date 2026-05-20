import {
  Activity,
  ClipboardCheck,
  Factory,
  Gauge,
  Store,
  Wrench,
  Zap,
} from "lucide-react";

const operatingContexts = [
  {
    title: "Industria",
    body: "Naves, manufactura, bombeo, refrigeracion y procesos con demanda constante.",
    icon: Factory,
  },
  {
    title: "Comercio",
    body: "Plazas, edificios, talleres, bodegas y PyMEs que necesitan costos predecibles.",
    icon: Store,
  },
  {
    title: "Operacion",
    body: "Monitoreo, mantenimiento y soporte para conservar produccion despues de instalar.",
    icon: Activity,
  },
];

const processSteps = [
  "Diagnostico energetico",
  "Ingenieria del sistema",
  "Instalacion documentada",
  "Monitoreo y mantenimiento",
];

export function EnergyIntro() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="premium-panel overflow-hidden rounded-lg">
          <div className="grid gap-px bg-border/70 lg:grid-cols-[1.05fr_1fr_1fr]">
            <div className="bg-card p-6 md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-eliot-electric/20 bg-eliot-electric/10 text-eliot-electric">
                <Zap className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-eliot-cyan">
                El problema
              </p>
              <h2 className="mt-3 text-balance text-2xl font-semibold text-foreground md:text-4xl">
                La energia ya no puede tratarse como un gasto aislado.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Tarifas variables, picos de demanda, equipos criticos y falta
                de visibilidad convierten la energia en riesgo operativo. El
                impacto no es solo financiero: afecta continuidad, planeacion,
                mantenimiento y crecimiento.
              </p>
            </div>

            <div className="bg-card p-6 md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-eliot-electric/20 bg-eliot-electric/10 text-eliot-electric">
                <Gauge className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-eliot-cyan">
                La solucion
              </p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">
                Un sistema solar dimensionado con datos reales.
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                El arreglo correcto reduce dependencia de red, estabiliza
                costos, aprovecha techo o terreno disponible y permite decidir
                con produccion, cobertura y retorno estimados antes de invertir.
              </p>
            </div>

            <div className="bg-card p-6 md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-eliot-electric/20 bg-eliot-electric/10 text-eliot-electric">
                <ClipboardCheck className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-eliot-cyan">
                Como lo resolvemos
              </p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">
                Ingenieria, instalacion y soporte en una misma ruta.
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Eliot Electronics revisa consumo, demanda y sitio; define el
                sistema interconectado, hibrido o aislado; documenta la
                instalacion y deja seguimiento tecnico para operar con claridad.
              </p>
            </div>
          </div>

          <div className="border-t border-border bg-background/70 p-4 md:p-5">
            <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
                {operatingContexts.map((item) => (
                  <div key={item.title} className="bg-card p-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-eliot-electric/20 bg-eliot-electric/10 text-eliot-electric">
                        <item.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

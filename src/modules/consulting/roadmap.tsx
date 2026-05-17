const roadmap = [
  { id: "01", title: "Diagnostico", body: "Auditoria, entrevistas y captura de datos." },
  { id: "02", title: "Estrategia", body: "Definicion de escenarios, riesgo e inversion." },
  { id: "03", title: "Plan de accion", body: "Roadmap priorizado con quick wins." },
  { id: "04", title: "Implementacion", body: "Gobernanza, equipo, recursos y avance." },
  { id: "05", title: "Evaluacion", body: "Medicion de resultados y mejora continua." },
];

export function Roadmap() {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="premium-panel rounded-lg p-6">
          <p className="text-sm font-medium uppercase text-eliot-cyan">
            Nuestro enfoque de consultoria
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {roadmap.map((step) => (
              <div key={step.id}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-eliot-cyan/40 text-sm text-eliot-cyan">
                  {step.id}
                </div>
                <h3 className="mt-5 font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

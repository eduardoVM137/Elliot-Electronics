"use client";

import { FileSearch, Landmark, LineChart, Target, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartFrame } from "@/components/visuals/chart-frame";

const impact = [
  { name: "Energia", value: 2.4 },
  { name: "Operacion", value: 1.8 },
  { name: "Sistemas", value: 1.3 },
  { name: "Soporte", value: 0.9 },
];

const roi = [
  { name: "Capturado", value: 65, fill: "#21a7ff" },
  { name: "Pendiente", value: 35, fill: "rgba(255,255,255,0.12)" },
];

const consultingAreas = [
  { title: "Eficiencia operacional", body: "Costos, tiempos y cuellos de botella.", icon: Target },
  { title: "Estrategia energetica", body: "Ahorro, demanda y contratos.", icon: TrendingUp },
  { title: "Transformacion digital", body: "Datos, sistemas e integraciones.", icon: LineChart },
  { title: "Gobernanza", body: "Roadmap, prioridades y seguimiento.", icon: Landmark },
];

export function ExecutiveReport() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase text-eliot-cyan">
              Analisis y reportes
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold text-white md:text-5xl">
              Diagnostico ejecutivo con impacto estimado.
            </h2>
            <p className="mt-5 text-pretty leading-7 text-muted-foreground">
              La consultoria convierte observaciones tecnicas en decisiones:
              escenarios, ROI, riesgo y prioridad.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {consultingAreas.map((area) => (
                <div key={area.title} className="premium-panel rounded-lg p-5">
                  <area.icon className="h-6 w-6 text-eliot-cyan" />
                  <h3 className="mt-5 font-semibold text-white">{area.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{area.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-panel overflow-hidden rounded-lg">
            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              {[
                ["Impacto potencial", "$2.4 M MXN"],
                ["Ventana", "90 dias"],
                ["Prioridad", "Alta"],
              ].map(([label, value]) => (
                <div key={label} className="bg-eliot-night/80 p-5">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-0 md:grid-cols-[1fr_0.8fr]">
              <ChartFrame className="h-80 p-5">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={impact}>
                    <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                    <XAxis dataKey="name" stroke="#8aa4b8" fontSize={12} />
                    <YAxis stroke="#8aa4b8" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        background: "#07111c",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 8,
                      }}
                    />
                    <Bar dataKey="value" fill="#21a7ff" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartFrame>
              <div className="border-t border-white/10 p-5 md:border-l md:border-t-0">
                <div className="flex items-center gap-3">
                  <FileSearch className="h-5 w-5 text-eliot-cyan" />
                  <p className="text-sm font-medium text-white">Roadmap ejecutivo</p>
                </div>
                <ChartFrame className="mt-6 h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={roi}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={58}
                        outerRadius={82}
                        stroke="none"
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartFrame>
                <p className="text-center text-3xl font-semibold text-white">65%</p>
                <p className="text-center text-xs text-muted-foreground">Valor priorizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

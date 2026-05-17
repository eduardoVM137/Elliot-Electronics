"use client";

import { Bell, ChartNoAxesColumnIncreasing, Cloud, Database, Radar } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartFrame } from "@/components/visuals/chart-frame";

const loadData = [
  { time: "08:00", energia: 72, tickets: 8 },
  { time: "10:00", energia: 81, tickets: 6 },
  { time: "12:00", energia: 78, tickets: 5 },
  { time: "14:00", energia: 92, tickets: 7 },
  { time: "16:00", energia: 86, tickets: 3 },
  { time: "18:00", energia: 74, tickets: 2 },
];

const modules = [
  { title: "Monitoreo", body: "Vision de activos en tiempo real.", icon: Radar },
  { title: "Reportes", body: "Cierres y metricas ejecutivas.", icon: ChartNoAxesColumnIncreasing },
  { title: "Alertas", body: "SLA, reglas y notificaciones.", icon: Bell },
  { title: "Integraciones", body: "ERP, sensores y nube.", icon: Cloud },
];

export function ControlCenter() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase text-eliot-cyan">
              Nuestra plataforma
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold text-white md:text-5xl">
              Control total en una sola pantalla.
            </h2>
          </div>
          <Tabs defaultValue="operacion" className="md:w-auto">
            <TabsList>
              <TabsTrigger value="operacion">Operacion</TabsTrigger>
              <TabsTrigger value="energia">Energia</TabsTrigger>
              <TabsTrigger value="soporte">Soporte</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <Tabs defaultValue="operacion">
          <TabsList className="md:hidden">
            <TabsTrigger value="operacion">Operacion</TabsTrigger>
            <TabsTrigger value="energia">Energia</TabsTrigger>
            <TabsTrigger value="soporte">Soporte</TabsTrigger>
          </TabsList>

          {["operacion", "energia", "soporte"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="premium-panel overflow-hidden rounded-lg">
                <div className="grid gap-px bg-white/10 md:grid-cols-4">
                  {[
                    ["Operaciones activas", "125.4 kW"],
                    ["Eficiencia", "97%"],
                    ["Alertas criticas", "3"],
                    ["Datos procesados", "18.2k"],
                  ].map(([label, value]) => (
                    <div key={label} className="bg-eliot-night/80 p-5">
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                  <ChartFrame className="h-80 p-5">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={loadData}>
                        <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                        <XAxis dataKey="time" stroke="#8aa4b8" fontSize={12} />
                        <YAxis stroke="#8aa4b8" fontSize={12} />
                        <Tooltip
                          contentStyle={{
                            background: "#07111c",
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: 8,
                          }}
                        />
                        <Line type="monotone" dataKey="energia" stroke="#6be9ff" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="tickets" stroke="#55f0a2" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartFrame>
                  <div className="border-t border-white/10 p-5 lg:border-l lg:border-t-0">
                    <div className="grid gap-3">
                      {["Panel 1", "Panel 2", "Panel 3", "Controlador"].map((asset, index) => (
                        <div key={asset} className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3">
                          <span className="inline-flex items-center gap-2 text-sm text-white">
                            <Database className="h-4 w-4 text-eliot-cyan" />
                            {asset}
                          </span>
                          <span className="text-xs text-eliot-success">
                            {index === 3 ? "Sync" : "Activo"}
                          </span>
                        </div>
                      ))}
                    </div>
                    <ChartFrame className="mt-6 h-32">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={loadData}>
                          <Area type="monotone" dataKey="energia" stroke="#21a7ff" fill="#21a7ff" fillOpacity={0.15} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </ChartFrame>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {modules.map((module) => (
            <div key={module.title} className="premium-panel rounded-lg p-5">
              <module.icon className="h-6 w-6 text-eliot-cyan" />
              <h3 className="mt-5 font-semibold text-white">{module.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{module.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

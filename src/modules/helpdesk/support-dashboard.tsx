"use client";

import { AlertCircle, CheckCircle2, Clock, Headphones, ServerCog } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartFrame } from "@/components/visuals/chart-frame";

const uptime = [
  { day: "Lun", value: 98.9 },
  { day: "Mar", value: 99.4 },
  { day: "Mie", value: 99.1 },
  { day: "Jue", value: 99.7 },
  { day: "Vie", value: 99.3 },
  { day: "Sab", value: 99.8 },
  { day: "Dom", value: 99.6 },
];

const tickets = [
  { type: "Critico", value: 2 },
  { type: "Alto", value: 7 },
  { type: "Medio", value: 18 },
  { type: "Bajo", value: 24 },
];

const queue = [
  { title: "Inversor sin respuesta", status: "Critico", time: "04 min" },
  { title: "Servidor con latencia", status: "Alto", time: "18 min" },
  { title: "Mantenimiento preventivo", status: "Programado", time: "Hoy" },
  { title: "Actualizacion de firmware", status: "En progreso", time: "52%" },
];

export function SupportDashboard() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase text-eliot-cyan">
            Monitoreo continuo
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-white md:text-5xl">
            Mesa de ayuda con SLA visible.
          </h2>
        </div>

        <div className="premium-panel overflow-hidden rounded-lg">
          <div className="grid gap-px bg-white/10 md:grid-cols-4">
            {[
              ["Uptime", "99.6%", CheckCircle2],
              ["Tickets abiertos", "31", Headphones],
              ["MTTR", "42 min", Clock],
              ["Alertas criticas", "2", AlertCircle],
            ].map(([label, value, Icon]) => (
              <div key={String(label)} className="bg-eliot-night/80 p-5">
                <Icon className="h-5 w-5 text-eliot-cyan" />
                <p className="mt-4 text-xs text-muted-foreground">{String(label)}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{String(value)}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <ChartFrame className="h-80 p-5">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={uptime}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                  <XAxis dataKey="day" stroke="#8aa4b8" fontSize={12} />
                  <YAxis stroke="#8aa4b8" fontSize={12} domain={[98, 100]} />
                  <Tooltip
                    contentStyle={{
                      background: "#07111c",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 8,
                    }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#55f0a2" fill="#55f0a2" fillOpacity={0.18} />
                </AreaChart>
              </ResponsiveContainer>
            </ChartFrame>
            <div className="border-t border-white/10 p-5 lg:border-l lg:border-t-0">
              <div className="grid gap-3">
                {queue.map((ticket) => (
                  <div key={ticket.title} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-white">{ticket.title}</p>
                      <span className="text-xs text-eliot-cyan">{ticket.time}</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">{ticket.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ChartFrame className="h-56 border-t border-white/10 p-5">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tickets}>
                <XAxis dataKey="type" stroke="#8aa4b8" fontSize={12} />
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
        </div>
      </div>
    </section>
  );
}

export function SlaCards() {
  return (
    <section className="pb-20">
      <div className="container grid gap-4 md:grid-cols-4">
        {[
          ["24/7", "Monitoreo de activos criticos"],
          ["SLA", "Tiempos de respuesta por severidad"],
          ["Preventivo", "Mantenimiento calendarizado"],
          ["Remoto", "Diagnostico y soporte especializado"],
        ].map(([title, body]) => (
          <div key={title} className="premium-panel rounded-lg p-5">
            <ServerCog className="h-6 w-6 text-eliot-cyan" />
            <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

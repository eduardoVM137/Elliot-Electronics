"use client";

import { useMemo, useState } from "react";
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
import { formatCurrency } from "@/lib/utils";

const monthlyCurve = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

export function EnergySimulator() {
  const [monthlyBill, setMonthlyBill] = useState(12500);
  const [demand, setDemand] = useState(50);

  const estimate = useMemo(() => {
    const annualSpend = monthlyBill * 12;
    const annualSavings = annualSpend * 0.62;
    const investment = demand * 22500;
    const roi = investment / annualSavings;
    const production = demand * 1464;

    const data = monthlyCurve.map((month, index) => {
      const seasonal = 0.84 + Math.sin((index / 12) * Math.PI) * 0.34;
      return {
        month,
        consumo: Math.round(monthlyBill * (0.86 + index * 0.01)),
        ahorro: Math.round((annualSavings / 12) * seasonal),
      };
    });

    const mix = [
      { name: "Red", value: Math.round(annualSpend - annualSavings) },
      { name: "Solar", value: Math.round(annualSavings) },
    ];

    return { annualSavings, investment, roi, production, data, mix };
  }, [monthlyBill, demand]);

  return (
    <section className="section-pad">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase text-eliot-cyan">
              Simulador solar
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold text-white md:text-5xl">
              Calcula tu ahorro en minutos.
            </h2>
            <p className="mt-5 text-pretty leading-7 text-muted-foreground">
              Una estimacion ejecutiva para dimensionar inversion, potencia,
              produccion y retorno sin convertir el sitio en una app compleja.
            </p>

            <div className="mt-8 grid gap-5">
              <label className="premium-panel block rounded-lg p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-muted-foreground">Consumo mensual</span>
                  <strong className="text-lg text-white">{formatCurrency(monthlyBill)}</strong>
                </div>
                <input
                  type="range"
                  min={8000}
                  max={180000}
                  step={2500}
                  value={monthlyBill}
                  onChange={(event) => setMonthlyBill(Number(event.target.value))}
                  className="mt-5 w-full accent-eliot-electric"
                />
              </label>

              <label className="premium-panel block rounded-lg p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-muted-foreground">Potencia objetivo</span>
                  <strong className="text-lg text-white">{demand} kWp</strong>
                </div>
                <input
                  type="range"
                  min={20}
                  max={550}
                  step={10}
                  value={demand}
                  onChange={(event) => setDemand(Number(event.target.value))}
                  className="mt-5 w-full accent-eliot-electric"
                />
              </label>
            </div>
          </div>

          <div className="premium-panel overflow-hidden rounded-lg">
            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              <div className="bg-eliot-night/80 p-5">
                <p className="text-xs text-muted-foreground">Ahorro anual estimado</p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {formatCurrency(estimate.annualSavings)}
                </p>
              </div>
              <div className="bg-eliot-night/80 p-5">
                <p className="text-xs text-muted-foreground">Retorno</p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {estimate.roi.toFixed(1)} anos
                </p>
              </div>
              <div className="bg-eliot-night/80 p-5">
                <p className="text-xs text-muted-foreground">Produccion anual</p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {estimate.production.toLocaleString("es-MX")} kWh
                </p>
              </div>
            </div>

            <div className="grid gap-0 md:grid-cols-[1.25fr_0.75fr]">
              <ChartFrame className="h-80 p-5">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={estimate.data}>
                    <defs>
                      <linearGradient id="energySavings" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="5%" stopColor="#6be9ff" stopOpacity={0.5} />
                        <stop offset="95%" stopColor="#6be9ff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                    <XAxis dataKey="month" stroke="#8aa4b8" fontSize={12} />
                    <YAxis stroke="#8aa4b8" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        background: "#07111c",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 8,
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="ahorro"
                      stroke="#6be9ff"
                      strokeWidth={2}
                      fill="url(#energySavings)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartFrame>
              <ChartFrame className="h-80 border-t border-white/10 p-5 md:border-l md:border-t-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={estimate.mix}>
                    <XAxis dataKey="name" stroke="#8aa4b8" fontSize={12} />
                    <YAxis hide />
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
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight, BarChart2, Cpu, Headphones, Monitor, Sun, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Capability = {
  label: string;
  sub: string;
  icon: LucideIcon;
  href: string;
};

const capabilities: Capability[] = [
  { label: "Energia solar", sub: "Diseno, instalacion y monitoreo", icon: Sun, href: "/soluciones/energia" },
  { label: "Ingenieria", sub: "Automatizacion y control industrial", icon: Cpu, href: "/soluciones/ingenieria" },
  { label: "Electronica", sub: "Tableros, fabricacion y pruebas", icon: Zap, href: "/soluciones/electronica" },
  { label: "Sistemas", sub: "Dashboards, integracion y datos", icon: Monitor, href: "/soluciones/sistemas" },
  { label: "Consultoria", sub: "Diagnostico, roadmap e inversiones", icon: BarChart2, href: "/soluciones/consultoria" },
  { label: "Helpdesk", sub: "Mesa de ayuda y preventivo 24/7", icon: Headphones, href: "/soluciones/helpdesk" },
];

function CapCard({ cap }: { cap: Capability }) {
  return (
    <Link
      href={cap.href}
      className="group flex w-64 shrink-0 items-center gap-4 rounded-xl border border-slate-200/60 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all hover:border-eliot-cyan/40 hover:bg-white dark:border-eliot-line/60 dark:bg-white/[0.05] dark:hover:bg-white/[0.09]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-eliot-cyan/10">
        <cap.icon className="h-5 w-5 text-eliot-cyan" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-slate-800 dark:text-white">{cap.label}</p>
        <p className="mt-0.5 text-xs leading-4 text-slate-500 dark:text-muted-foreground">{cap.sub}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 opacity-0 transition-all group-hover:opacity-100 group-hover:text-eliot-cyan dark:text-eliot-steel" />
    </Link>
  );
}

export function CapabilitiesCarousel() {
  return (
    <div
      className="relative mt-28 w-full overflow-hidden"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent, black 14%, black 86%, transparent)",
        maskImage: "linear-gradient(to right, transparent, black 14%, black 86%, transparent)",
      }}
    >
      <style>{`
        @keyframes marquee-x {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-run {
          animation: marquee-x 22s linear infinite;
        }
        .marquee-run:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/*
        Two identical sets wrapped in their own divs with pr-3 (= same as gap-3).
        This makes each set's rendered width = (6 × card) + (5 × gap) + trailing-gap,
        so -50% translateX lands exactly at the start of set 2 → seamless loop.
      */}
      <div className="marquee-run flex">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-3 pr-3">
            {capabilities.map((cap) => (
              <CapCard key={cap.label} cap={cap} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BarChart3,
  Bolt,
  BrainCircuit,
  CircuitBoard,
  CloudCog,
  Cpu,
  Gauge,
  Headphones,
  LineChart,
  PanelsTopLeft,
  ShieldCheck,
  SlidersHorizontal,
  SunMedium,
  Workflow,
  Wrench,
} from "lucide-react";

export type SolutionSlug =
  | "energia"
  | "ingenieria"
  | "sistemas"
  | "electronica"
  | "consultoria"
  | "helpdesk";

export type Solution = {
  slug: SolutionSlug;
  index: string;
  href: string;
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  icon: LucideIcon;
  proof: { label: string; value: string }[];
  features: { title: string; body: string; icon: LucideIcon }[];
  cta: string;
};

export const solutions: Solution[] = [
  {
    slug: "ingenieria",
    index: "01",
    href: "/soluciones/ingenieria",
    eyebrow: "Ingenieria industrial",
    title: "Ingenieria que transforma industrias",
    summary:
      "Diagnostico, diseno, integracion y puesta en marcha para operaciones que requieren precision tecnica.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80",
    icon: Workflow,
    proof: [
      { label: "Proyectos", value: "+250" },
      { label: "Anios", value: "+12" },
      { label: "Satisfaccion", value: "98%" },
    ],
    features: [
      { title: "Procesos", body: "Optimizacion de lineas y flujo operativo.", icon: Workflow },
      { title: "Electrica", body: "Tableros, calculo y documentacion.", icon: Bolt },
      { title: "Instrumentacion", body: "Sensores, telemetria y control.", icon: Gauge },
    ],
    cta: "Conoce nuestra ingenieria",
  },
  {
    slug: "energia",
    index: "03",
    href: "/soluciones/energia",
    eyebrow: "Energia / paneles",
    title: "Energia solar para operaciones que no pueden detenerse",
    summary:
      "Infraestructura fotovoltaica disenada con criterio de ingenieria para reducir dependencia energetica, proteger la operacion y dar visibilidad al consumo.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
    icon: SunMedium,
    proof: [
      { label: "Naves, manufactura, bombeo y refrigeracion.", value: "Industria" },
      { label: "Plazas, edificios, talleres y PyMEs.", value: "Comercio" },
      { label: "Datos, mantenimiento y soporte post-instalacion.", value: "Operacion" },
    ],
    features: [
      { title: "Diagnostico energetico", body: "Analizamos recibos, demanda, horarios, techo o terreno y cargas criticas antes de dimensionar.", icon: LineChart },
      { title: "Ingenieria e instalacion", body: "Disenamos, instalamos y documentamos sistemas interconectados, hibridos o aislados con criterio industrial.", icon: ShieldCheck },
      { title: "Operacion continua", body: "Monitoreo, mantenimiento preventivo y soporte para que el sistema siga produciendo.", icon: Wrench },
    ],
    cta: "Simular ahorro",
  },
  {
    slug: "sistemas",
    index: "06",
    href: "/soluciones/sistemas",
    eyebrow: "Sistemas",
    title: "Sistemas inteligentes para decisiones mas precisas",
    summary:
      "Dashboards, monitoreo, integraciones y automatizacion para ver la operacion en tiempo real.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    icon: PanelsTopLeft,
    proof: [
      { label: "Datos", value: "125k" },
      { label: "Uptime", value: "99.7%" },
      { label: "Alertas", value: "3 min" },
    ],
    features: [
      { title: "Dashboards", body: "KPIs operativos por perfil y area.", icon: BarChart3 },
      { title: "Integracion", body: "Conecta activos, ERP y sensores.", icon: CloudCog },
      { title: "Alertas", body: "Reglas de negocio y escalamiento.", icon: BadgeCheck },
    ],
    cta: "Ver plataforma",
  },
  {
    slug: "electronica",
    index: "02",
    href: "/soluciones/electronica",
    eyebrow: "Electronica",
    title: "Soluciones electronicas que conectan y hacen posible",
    summary:
      "Tableros, automatizacion y control industrial disenados para ambientes exigentes.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    icon: CircuitBoard,
    proof: [
      { label: "Diseno", value: "Custom" },
      { label: "Pruebas", value: "FAT/SAT" },
      { label: "Soporte", value: "Remoto" },
    ],
    features: [
      { title: "Cuadros a medida", body: "Seleccion electrica y layout interno.", icon: Cpu },
      { title: "Alta confiabilidad", body: "Componentes y normas industriales.", icon: ShieldCheck },
      { title: "Implementacion", body: "Montaje, pruebas y capacitacion.", icon: Wrench },
    ],
    cta: "Cotizar solucion",
  },
  {
    slug: "consultoria",
    index: "04",
    href: "/soluciones/consultoria",
    eyebrow: "Consultoria",
    title: "Consultoria estrategica para decisiones que generan valor",
    summary:
      "Analizamos la operacion, diseñamos escenarios y entregamos un plan ejecutivo accionable.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    icon: BrainCircuit,
    proof: [
      { label: "Roadmaps", value: "90 dias" },
      { label: "ROI", value: "2.4x" },
      { label: "Riesgo", value: "-28%" },
    ],
    features: [
      { title: "Analisis profundo", body: "Entrevistas, datos y brechas.", icon: BarChart3 },
      { title: "Estrategia", body: "Plan por fases y prioridad financiera.", icon: SlidersHorizontal },
      { title: "Acompanamiento", body: "Gobernanza y seguimiento ejecutivo.", icon: Headphones },
    ],
    cta: "Solicitar analisis",
  },
  {
    slug: "helpdesk",
    index: "05",
    href: "/soluciones/helpdesk",
    eyebrow: "Helpdesk",
    title: "Soporte tecnico continuo para operaciones siempre activas",
    summary:
      "Mesa de ayuda, monitoreo, SLA y mantenimiento preventivo para activos criticos.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    icon: Headphones,
    proof: [
      { label: "Cobertura", value: "24/7" },
      { label: "SLA", value: "98%" },
      { label: "MTTR", value: "-36%" },
    ],
    features: [
      { title: "Tickets", body: "Clasificacion, prioridad y seguimiento.", icon: BadgeCheck },
      { title: "Monitoreo", body: "Alertas de continuidad y salud.", icon: Gauge },
      { title: "Mantenimiento", body: "Prevencion y soporte recurrente.", icon: Wrench },
    ],
    cta: "Activar soporte",
  },
];

export function getSolution(slug: SolutionSlug) {
  return solutions.find((solution) => solution.slug === slug);
}

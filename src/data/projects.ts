export type Project = {
  slug: string;
  title: string;
  sector: string;
  location: string;
  image: string;
  summary: string;
  solution: string;
  impact: string;
  stats: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "nave-industrial-solar",
    title: "Nave industrial solar",
    sector: "Manufactura",
    location: "Jalisco",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Sistema fotovoltaico interconectado con monitoreo ejecutivo de consumo y retorno.",
    solution: "Energia",
    impact: "120 kWp instalados con reduccion del gasto energetico operativo.",
    stats: [
      { label: "Capacidad", value: "120 kWp" },
      { label: "Ahorro anual", value: "34%" },
      { label: "ROI", value: "3.1 anos" },
    ],
  },
  {
    slug: "planta-bombeo-control",
    title: "Sistema de bombeo",
    sector: "Infraestructura",
    location: "Nuevo Leon",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Automatizacion de control, tableros y lectura de variables criticas para continuidad operativa.",
    solution: "Ingenieria",
    impact: "Reduccion de paros no programados y mejor visibilidad tecnica.",
    stats: [
      { label: "Variables", value: "42" },
      { label: "Uptime", value: "99.2%" },
      { label: "Alertas", value: "Tiempo real" },
    ],
  },
  {
    slug: "centro-comercial-energia",
    title: "Centro comercial",
    sector: "Retail",
    location: "Queretaro",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Dashboard de consumo, demanda pico, tickets de mantenimiento y supervision multi-sitio.",
    solution: "Sistemas",
    impact: "Control operacional integrado para administracion y mantenimiento.",
    stats: [
      { label: "Sitios", value: "8" },
      { label: "KPIs", value: "24/7" },
      { label: "Tickets", value: "-41%" },
    ],
  },
  {
    slug: "tableros-control-industrial",
    title: "Tableros de control",
    sector: "Industrial",
    location: "Aguascalientes",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Fabricacion e integracion de tableros con proteccion, control y documentacion tecnica.",
    solution: "Electronica",
    impact: "Mayor confiabilidad electrica en procesos de produccion critica.",
    stats: [
      { label: "Gabinetes", value: "16" },
      { label: "Pruebas", value: "FAT/SAT" },
      { label: "Soporte", value: "Remoto" },
    ],
  },
  {
    slug: "roadmap-transformacion-operativa",
    title: "Roadmap operativo",
    sector: "Servicios",
    location: "CDMX",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Diagnostico de energia, sistemas y soporte para priorizar inversiones con impacto medible.",
    solution: "Consultoria",
    impact: "Portafolio ejecutivo con escenarios de inversion, riesgo y retorno.",
    stats: [
      { label: "Iniciativas", value: "18" },
      { label: "ROI", value: "2.4 anos" },
      { label: "Prioridad", value: "90 dias" },
    ],
  },
  {
    slug: "mesa-ayuda-industrial",
    title: "Helpdesk industrial",
    sector: "Operacion",
    location: "Bajio",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Mesa de ayuda, SLA, monitoreo y mantenimiento preventivo para continuidad tecnica.",
    solution: "Helpdesk",
    impact: "Respuesta coordinada para multiples areas y activos criticos.",
    stats: [
      { label: "SLA", value: "98%" },
      { label: "Cobertura", value: "24/7" },
      { label: "MTTR", value: "-36%" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

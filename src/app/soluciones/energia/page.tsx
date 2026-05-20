import type { Metadata } from "next";

import { EnergyIntro } from "@/modules/energy/energy-intro";
import { EnergySimulator } from "@/modules/energy/energy-simulator";
import { SolarProjects } from "@/modules/energy/solar-projects";
import { SolarSystemTypes } from "@/modules/energy/solar-system-types";
import { getSolution } from "@/data/solutions";
import { SolutionHero } from "@/sections/shared/solution-hero";
import { FinalCta } from "@/sections/shared/final-cta";

export const metadata: Metadata = {
  title: "Paneles Solares Industriales en Nuevo Laredo",
  description:
    "Instalación de paneles solares industriales en Nuevo Laredo y Tamaulipas. Sistemas fotovoltaicos para empresas con ROI medible, monitoreo 24/7 y soporte técnico. Elliot Electronics.",
  keywords: [
    "paneles solares Nuevo Laredo",
    "paneles solares Tamaulipas",
    "paneles solares industriales",
    "instalación paneles solares empresa",
    "energía solar industrial México",
    "sistema fotovoltaico industrial",
    "ahorro energía solar",
    "Elliot Electronics",
    "elliot electronics",
    "paneles solares Elliot Electronics",
  ],
  alternates: { canonical: "/soluciones/energia" },
  openGraph: {
    title: "Paneles Solares Industriales | Elliot Electronics",
    description:
      "Instalación de paneles solares industriales en Nuevo Laredo y Tamaulipas. ROI medible y soporte técnico 24/7.",
    url: "/soluciones/energia",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Instalación de Paneles Solares Industriales en Nuevo Laredo",
  provider: { "@type": "Organization", name: "Elliot Electronics", url: "https://elliot-electronics.com" },
  areaServed: [
    { "@type": "City", name: "Nuevo Laredo" },
    { "@type": "State", name: "Tamaulipas" },
    { "@type": "Country", name: "México" },
  ],
  description: "Instalación de sistemas fotovoltaicos industriales en Nuevo Laredo, Tamaulipas. Diagnóstico energético, diseño, instalación y monitoreo 24/7.",
  serviceType: "Instalación de Energía Solar Industrial",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta instalar paneles solares en Nuevo Laredo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El costo varía según el consumo y el tamaño del sistema. En Elliot Electronics realizamos un diagnóstico energético gratuito para dimensionar el sistema ideal y calcular el retorno de inversión. Contáctanos para una cotización personalizada en Nuevo Laredo o Tamaulipas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda la instalación de paneles solares industriales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un sistema fotovoltaico industrial típico se instala en 2 a 6 semanas dependiendo de la capacidad. Elliot Electronics gestiona permisos, ingeniería, instalación y pruebas de comisionamiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué ahorro puedo lograr con paneles solares industriales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestros proyectos han logrado ahorros del 30 al 60% en la factura eléctrica, con retorno de inversión entre 2 y 4 años según el consumo y la tarifa CFE. El ahorro depende del consumo energético y el tamaño del sistema instalado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Elliot Electronics instala paneles solares en Tamaulipas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Elliot Electronics está basada en Nuevo Laredo, Tamaulipas y atiende proyectos de paneles solares en toda la región noreste de México, incluyendo Tamaulipas, Nuevo León y estados cercanos.",
      },
    },
  ],
};

export default function EnergyPage() {
  const solution = getSolution("energia");

  if (!solution) return null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SolutionHero solution={solution} secondaryCta="Ver proyectos solares" />
      <EnergyIntro />
      <EnergySimulator />
      <SolarSystemTypes />
      <SolarProjects />
      <FinalCta
        title="Listo para empezar a ahorrar?"
        body="Evalua tu consumo y descubre tu potencial solar."
        cta="Simular mi ahorro"
      />
    </>
  );
}

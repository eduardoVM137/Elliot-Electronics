import type { Metadata } from "next";

import { MotionReveal } from "@/components/visuals/motion-reveal";
import { FinalCta } from "@/sections/shared/final-cta";
import { NosotrosHero } from "@/sections/nosotros/nosotros-hero";
import { HistoriaSection } from "@/sections/nosotros/historia-section";
import { ValoresSection } from "@/sections/nosotros/valores-section";
import { IndustriasSection } from "@/sections/nosotros/industrias-section";

export const metadata: Metadata = {
  title: "Nosotros — Empresa de Ingeniería en Nuevo Laredo",
  description:
    "Elliot Electronics es una empresa de ingeniería industrial en Nuevo Laredo, Tamaulipas. Instalamos paneles solares, automatizamos operaciones y ofrecemos soporte técnico 24/7 para industrias que no pueden detenerse.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Nosotros | Elliot Electronics — Ingeniería en Nuevo Laredo",
    description:
      "Empresa de ingeniería industrial en Nuevo Laredo, Tamaulipas. Paneles solares, automatización y soporte técnico 24/7.",
    url: "/nosotros",
  },
};

export default function AboutPage() {
  return (
    <>
      <NosotrosHero />
      <HistoriaSection />
      <ValoresSection />
      <IndustriasSection />
      <MotionReveal>
        <FinalCta
          title="Listo para ordenar tu siguiente proyecto tecnico?"
          body="Hablemos primero de la operacion, los riesgos y lo que necesitas resolver. Despues definimos una ruta clara de trabajo."
          cta="Iniciar conversacion"
        />
      </MotionReveal>
    </>
  );
}

import type { Metadata } from "next";

import { ContactoSection } from "@/sections/contacto/contacto-section";

export const metadata: Metadata = {
  title: "Contacto — Nuevo Laredo, Tamaulipas",
  description:
    "Contacta a Elliot Electronics en Nuevo Laredo, Tamaulipas. Cotiza paneles solares industriales, automatización, tableros eléctricos o soporte técnico 24/7. Respondemos en menos de 24 horas.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | Elliot Electronics — Nuevo Laredo",
    description:
      "Cotiza paneles solares, automatización industrial o soporte técnico 24/7 en Nuevo Laredo. Respondemos en menos de 24 horas.",
    url: "/contacto",
  },
};

export default function ContactPage() {
  return <ContactoSection />;
}

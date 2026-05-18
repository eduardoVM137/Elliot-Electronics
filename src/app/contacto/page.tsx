import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { SectionHeader } from "@/components/visuals/section-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function ContactPage() {
  return (
    <section className="pt-36 pb-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Contacto"
              title="Hablemos de tu proyecto."
              body="Cuentanos que operacion quieres mejorar: energia, sistemas, electronica, consultoria o soporte."
            />
            <div className="mt-8 grid gap-4">
              <div className="inline-flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-eliot-cyan" />
                {siteConfig.email}
              </div>
              <div className="inline-flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-eliot-cyan" />
                {siteConfig.phone}
              </div>
              <div className="inline-flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-eliot-cyan" />
                {siteConfig.location}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
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
              body="Cuéntanos que operacion quieres mejorar: energia, sistemas, electronica, consultoria o soporte."
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

          <form
            className="premium-panel grid gap-5 rounded-lg p-6"
            action={`mailto:${siteConfig.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-2">
              <label className="text-sm text-muted-foreground" htmlFor="name">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                className="h-12 rounded-md border border-white/10 bg-white/[0.05] px-4 text-white outline-none focus:border-eliot-cyan"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-muted-foreground" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="h-12 rounded-md border border-white/10 bg-white/[0.05] px-4 text-white outline-none focus:border-eliot-cyan"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-muted-foreground" htmlFor="solution">
                Solucion de interes
              </label>
              <select
                id="solution"
                name="solution"
                className="h-12 rounded-md border border-white/10 bg-white/[0.05] px-4 text-white outline-none focus:border-eliot-cyan"
              >
                <option>Energia / paneles solares</option>
                <option>Ingenieria</option>
                <option>Sistemas</option>
                <option>Electronica</option>
                <option>Consultoria</option>
                <option>Helpdesk</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-muted-foreground" htmlFor="message">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="rounded-md border border-white/10 bg-white/[0.05] p-4 text-white outline-none focus:border-eliot-cyan"
              />
            </div>
            <Button type="submit">Enviar solicitud</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

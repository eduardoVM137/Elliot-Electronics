"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { SectionHeader } from "@/components/visuals/section-header";
import { HeroBackground } from "@/components/visuals/hero-background";
import { siteConfig } from "@/lib/site";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const contactItems = [
  { icon: Mail,    value: siteConfig.email },
  { icon: Phone,   value: siteConfig.phone },
  { icon: MapPin,  value: siteConfig.location },
];

export function ContactoSection() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20">
      <HeroBackground />
      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* ── Left ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionHeader
                eyebrow="Contacto"
                title="Hablemos de tu proyecto."
                body="Cuentanos que operacion quieres mejorar: energia, sistemas, electronica, consultoria o soporte."
              />
            </motion.div>

            <div className="mt-8 flex flex-col gap-4">
              {contactItems.map(({ icon: Icon, value }, i) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.22 + i * 0.09, ease }}
                  className="inline-flex items-center gap-3 text-muted-foreground"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-eliot-cyan/10">
                    <Icon className="h-4 w-4 text-eliot-cyan" />
                  </span>
                  {value}
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease }}
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

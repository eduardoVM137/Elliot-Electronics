"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ImagePanel } from "@/components/visuals/image-panel";
import { MetricTile } from "@/components/visuals/metric-tile";

const differentiators = [
  "Diagnostico gratuito antes de cualquier propuesta comercial",
  "Propuestas con alcance, costos y cronograma sin letra pequena",
  "Documentacion tecnica entregada al finalizar cada proyecto",
  "Soporte post-implementacion incluido como parte del servicio",
  "Un solo interlocutor tecnico para energia, sistemas y soporte",
];

const ease = [0.22, 1, 0.36, 1] as const;

const vp = { once: true, margin: "-60px" };

export function HistoriaSection() {
  return (
    <section className="pb-24">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">

          {/* ── Left: narrative ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.7, ease }}
            >
              <Badge variant="muted">Nuestra historia</Badge>
              <h3 className="mt-4 text-balance text-3xl font-semibold text-white md:text-4xl">
                Menos proveedores, Más integración.
              </h3>
            </motion.div>

            <div className="mt-5 space-y-4 text-base leading-7 text-muted-foreground">
              {[
                "Nos involucramos desde el diagnostico hasta la puesta en marcha: revisamos el contexto, proponemos una arquitectura viable, cuidamos la implementacion y dejamos bases para que el sistema pueda mantenerse sin depender de improvisaciones.",
                "Nuestro criterio es practico: cada decision debe poder explicarse, probarse y sostenerse en el tiempo. La tecnologia solo tiene valor cuando mejora la operacion, reduce incertidumbre y puede mantenerse con claridad.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.65, delay: 0.1 + i * 0.1, ease }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {differentiators.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.5, delay: 0.22 + i * 0.07, ease }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-eliot-cyan" />
                  <span className="text-sm leading-6 text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ── Right: image + metrics ── */}
          <div className="flex flex-col gap-4 lg:pt-2">
            <motion.div
              initial={{ opacity: 0, scale: 1.04, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.0, ease }}
            >
              <ImagePanel
                image="https://images.unsplash.com/photo-1719848576338-9516ba7ccd8b?auto=format&fit=crop&w=1200&q=80"
                kicker="Energia solar e ingenieria"
                title="Proyectos con estándares de calidad"
                aspect="tall"
                className="brightness-90 saturate-75"
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100%", label: "Clientes contentos" },
                { value: "$0", label: "Costos ocultos en propuestas" },
              ].map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.1, ease }}
                >
                  <MetricTile value={m.value} label={m.label} />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

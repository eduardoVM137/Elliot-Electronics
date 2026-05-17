import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { BrandMark } from "@/components/visuals/brand-mark";
import { solutionNav } from "@/data/navigation";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04080d]">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.3fr_2fr]">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
            Firma de ingenieria integral para energia, sistemas, electronica y
            soporte tecnico en operaciones industriales.
          </p>
          <div className="mt-6 flex items-center gap-3 text-muted-foreground">
            <span className="text-xs">in</span>
            <span className="text-xs">f</span>
            <span className="text-xs">ig</span>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-xs font-semibold uppercase text-white">Soluciones</h3>
            <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
              {solutionNav.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase text-white">Empresa</h3>
            <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
              <Link href="/nosotros" className="hover:text-white">
                Nosotros
              </Link>
              <Link href="/proyectos" className="hover:text-white">
                Proyectos
              </Link>
              <Link href="/contacto" className="hover:text-white">
                Contacto
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase text-white">Contacto</h3>
            <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {siteConfig.location}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Eliot Electronics. Todos los derechos reservados.</p>
        <div className="flex gap-5">
          <span>Aviso de privacidad</span>
          <span>Terminos y condiciones</span>
        </div>
      </div>
    </footer>
  );
}

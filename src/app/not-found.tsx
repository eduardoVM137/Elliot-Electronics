import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center pt-20">
      <div className="container text-center">
        <p className="text-sm font-medium uppercase text-eliot-cyan">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Pagina no encontrada</h1>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          La ruta no existe dentro de la arquitectura inicial de Eliot Electronics.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </section>
  );
}

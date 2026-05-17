# Eliot Electronics

Sitio corporativo premium para una firma de ingenieria con carteras de energia, ingenieria, sistemas, electronica, consultoria y helpdesk.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui-style primitives
- Recharts
- Sitio estatico sin base de datos

## Desarrollo

```bash
npm install
npm run dev
```

URL local:

```txt
http://127.0.0.1:3000
```

## Verificacion antes de desplegar

```bash
npm run deploy:check
```

Este comando ejecuta:

- TypeScript strict check
- Build estatico de Next.js

## Variables de entorno

Copia `.env.example` a `.env.local` cuando ya tengas dominio:

```bash
NEXT_PUBLIC_SITE_URL=https://eliotelectronics.mx
```

Tambien configura la misma variable en el proveedor de hosting para que `sitemap.xml`, `robots.txt`, canonical y Open Graph usen el dominio correcto.

## Deploy recomendado

Vercel es la ruta mas directa para este proyecto porque detecta Next.js, ejecuta el build y permite conectar dominio/SSL desde el dashboard.

Build command:

```bash
npm run build
```

Output:

```txt
out
```

El proyecto usa `output: "export"` en `next.config.ts`, asi que el build genera un sitio estatico.

## Documentacion interna

- Arquitectura y UX: `docs/architecture.md`
- Checklist de dominio y deploy: `docs/deployment.md`

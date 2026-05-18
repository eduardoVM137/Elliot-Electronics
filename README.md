# Elliot Electronics

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
NEXT_PUBLIC_SITE_URL=https://elliot-electronics.com
NEXT_PUBLIC_CONTACT_ENDPOINT=/api/contact
```

Tambien configura la misma variable en el proveedor de hosting para que `sitemap.xml`, `robots.txt`, canonical y Open Graph usen el dominio correcto.

## Deploy recomendado

Vercel es la ruta recomendada para este proyecto porque esta construido con Next.js y permite previews, SSL, dominios personalizados y despliegues automaticos con muy poca configuracion.

Mantendremos `elliot-electronics.com` en Cloudflare como registrar/DNS, pero el hosting sera Vercel.

Build command:

```bash
npm run build
```

Variable de entorno en Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://elliot-electronics.com
NEXT_PUBLIC_CONTACT_ENDPOINT=/api/contact
```

El proyecto usa `output: "export"` en `next.config.ts`, asi que el build genera un sitio estatico.

## Formulario de contacto

El formulario envia los datos al endpoint definido en `NEXT_PUBLIC_CONTACT_ENDPOINT`. La opcion recomendada es desplegar el Worker incluido en `worker/src/index.ts` y exponerlo en `/api/contact`.

El Worker usa Resend y envia los mensajes a `contacto@elliot-electronics.com`, con `reply_to` apuntando al correo escrito por el cliente para que puedas responder directamente.

Variables del Worker:

```bash
TO_EMAIL=contacto@elliot-electronics.com,otro-correo@ejemplo.com
FROM_EMAIL=contacto@elliot-electronics.com
ALLOWED_ORIGIN=https://elliot-electronics.com
```

Secreto requerido:

```bash
npx wrangler secret put RESEND_API_KEY
```

## Documentacion interna

- Arquitectura y UX: `docs/architecture.md`
- Checklist de dominio y deploy: `docs/deployment.md`

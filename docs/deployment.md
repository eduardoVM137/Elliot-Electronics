# Deployment Checklist

## 1. Antes de comprar dominio

Define el dominio principal. Opciones naturales:

- `eliotelectronics.mx`
- `eliotelectronics.com.mx`
- `eliotelectronics.com`
- `eliot-electronics.com`

Recomendacion de marca: si esta disponible, compra el dominio principal y una variante defensiva para evitar confusiones. Por ejemplo: `.mx` para Mexico y `.com` si existe.

## 2. Donde comprar

Rutas razonables:

- Cloudflare Registrar: buena opcion si quieres DNS rapido, DNSSEC y renovaciones sin sobreprecio de registrar.
- Vercel Domains: camino simple si quieres comprar y desplegar todo en el mismo lugar.
- Namecheap, GoDaddy u otro registrar: tambien funciona, pero revisa precio de renovacion, privacidad WHOIS y facilidad de DNS.

## 3. Deploy en Vercel

1. Sube el proyecto a GitHub.
2. En Vercel, crea un nuevo proyecto desde el repositorio.
3. Framework: Next.js.
4. Build command: `npm run build`.
5. Configura `NEXT_PUBLIC_SITE_URL` con el dominio final.
6. Despliega.
7. Abre el dominio temporal de Vercel y revisa home, soluciones, proyectos y contacto.

## 4. DNS

Cuando agregues el dominio en Vercel, Vercel te indicara los registros exactos.

Configuracion tipica:

- Dominio apex, por ejemplo `eliotelectronics.mx`: registro `A`.
- Subdominio `www.eliotelectronics.mx`: registro `CNAME`.

No mezcles dos metodos a la vez. Elige:

- Gestionar DNS en Vercel con nameservers de Vercel.
- Gestionar DNS en Cloudflare u otro proveedor y agregar ahi los registros que Vercel indique.

## 5. Canonical

Elige una version principal:

- Recomendado: `https://eliotelectronics.mx`
- Redireccionar `www` hacia apex, o apex hacia `www`, pero no dejar ambos como versiones independientes.

## 6. Despues de publicar

Revisar:

- `https://tudominio.com/robots.txt`
- `https://tudominio.com/sitemap.xml`
- SSL activo
- Redireccion de `www`
- Formularios y CTA
- Vista mobile
- Lighthouse
- Google Search Console

## 7. Pendientes de contenido real

Antes de campana comercial:

- Reemplazar imagenes temporales por activos propios.
- Completar datos reales de contacto.
- Definir aviso de privacidad.
- Validar claims de ahorro/ROI con datos reales.
- Agregar analitica si la empresa lo requiere.

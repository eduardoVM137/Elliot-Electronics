# Deployment Checklist

## 1. Antes de comprar dominio

Dominio principal actual:

- `eliot-electronics.com`

Variantes defensivas a considerar despues:

- `eliotelectronics.com`
- `eliotelectronics.mx`
- `eliot-electronics.mx`
- `eliot-electronics.com.mx`

Recomendacion de marca: mantener `eliot-electronics.com` como canonical por ahora y comprar variantes defensivas cuando el presupuesto lo permita.

## 2. Donde comprar

El dominio ya esta en Cloudflare. Mantener DNS y dominio ahi es una buena decision para este proyecto.

## 3. Deploy recomendado en Vercel

1. Sube el proyecto a GitHub.
2. En Vercel, selecciona Add New Project.
3. Importa el repositorio de GitHub.
4. Framework preset: Next.js.
5. Build command: `npm run build`.
6. Configura la variable:
   - `NEXT_PUBLIC_SITE_URL=https://eliot-electronics.com`
7. Despliega.
8. Revisa el subdominio temporal `*.vercel.app`.

## 4. Dominio con Vercel + Cloudflare DNS

Despues de que Vercel despliegue correctamente:

1. Entra al proyecto de Vercel.
2. Ve a Settings > Domains.
3. Agrega `eliot-electronics.com`.
4. Agrega `www.eliot-electronics.com`.
5. Vercel te dira que registros DNS necesita.
6. En Cloudflare, ve a DNS > Records.
7. Agrega los registros que Vercel indique.
8. Importante: deja esos registros en modo DNS only, no proxied.
9. Configura una redireccion para que `www` apunte al dominio principal.

Configuracion tipica:

- `@` como registro `A` hacia `76.76.21.21`.
- `www` como `CNAME` hacia el valor que Vercel indique.

Usa siempre el valor exacto del dashboard de Vercel si difiere.

## 5. Canonical

Elige una version principal:

- Recomendado: `https://eliot-electronics.com`
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

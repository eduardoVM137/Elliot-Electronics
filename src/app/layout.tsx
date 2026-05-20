import type { Metadata } from "next";

import { ThemeScript } from "@/components/theme/theme-script";
import { SiteShell } from "@/layouts/site-shell";
import { siteConfig } from "@/lib/site";
import { getSiteUrl } from "@/lib/urls";
import "@/styles/globals.css";

const siteUrl = getSiteUrl();

const defaultDescription =
  "Elliot Electronics — Empresa de ingeniería en Nuevo Laredo, Tamaulipas. Instalación de paneles solares industriales, automatización, tableros eléctricos, sistemas de control y soporte técnico 24/7 para operaciones que no pueden detenerse.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Elliot Electronics | Paneles Solares, Ingeniería Industrial y Sistemas",
    template: "%s | Elliot Electronics",
  },

  description: defaultDescription,

  keywords: [
    "Elliot Electronics",
    "elliot electronics",
    "elliot-electronics",
    "elliot electronics nuevo laredo",
    "elliot electronics tamaulipas",
    "paneles solares",
    "paneles solares Nuevo Laredo",
    "paneles solares Tamaulipas",
    "instalación paneles solares industrial",
    "energía solar industrial México",
    "sistema fotovoltaico industrial",
    "ingeniería industrial Nuevo Laredo",
    "automatización industrial Tamaulipas",
    "tableros de control eléctrico",
    "sistemas SCADA",
    "helpdesk técnico industrial",
    "soporte técnico 24/7",
    "consultoría técnica industrial",
    "electronica industrial",
    "mantenimiento preventivo industrial",
    "ingenieria electrica Nuevo Laredo",
  ],

  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,

  verification: {
    google: "A8LaaRmGnEV0vVPdp4KshSL27q7fUwN4nGoOf090pec",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },

  alternates: { canonical: "/" },

  icons: { icon: "/brand/elliot-mark.png" },

  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: siteConfig.name,
    title: "Elliot Electronics | Paneles Solares, Ingeniería Industrial y Sistemas",
    description: defaultDescription,
    images: [
      {
        url: "/brand/elliot-mark.png",
        width: 512,
        height: 512,
        alt: "Elliot Electronics",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Elliot Electronics | Paneles Solares, Ingeniería Industrial y Sistemas",
    description: defaultDescription,
    images: ["/brand/elliot-mark.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "Elliot Electronics",
      alternateName: ["elliot-electronics", "elliot electronics", "Elliot Electronics Nuevo Laredo"],
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/brand/elliot-mark.png`,
      },
      description: defaultDescription,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "",
        addressLocality: "Nuevo Laredo",
        addressRegion: "Tamaulipas",
        postalCode: "88000",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 27.4760,
        longitude: -99.5075,
      },
      areaServed: [
        "Nuevo Laredo",
        "Tamaulipas",
        "Monterrey",
        "Noreste de México",
        "México",
      ],
      sameAs: [siteUrl],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Soluciones de Ingeniería",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paneles solares industriales Nuevo Laredo" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instalación de paneles solares en Tamaulipas" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatización y tableros de control" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sistemas SCADA y dashboards industriales" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrónica industrial y fabricación de tableros" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consultoría técnica industrial" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Helpdesk y soporte técnico 24/7" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Elliot Electronics",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "es-MX",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

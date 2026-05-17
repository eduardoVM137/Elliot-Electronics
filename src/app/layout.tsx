import type { Metadata } from "next";

import { SiteShell } from "@/layouts/site-shell";
import { siteConfig } from "@/lib/site";
import { getSiteUrl } from "@/lib/urls";
import "@/styles/globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eliot Electronics | Ingenieria, energia y sistemas",
    template: "%s | Eliot Electronics",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: siteConfig.name,
    title: "Eliot Electronics | Ingenieria, energia y sistemas",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Eliot Electronics | Ingenieria, energia y sistemas",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

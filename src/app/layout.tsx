import type { Metadata } from "next";

import { ThemeScript } from "@/components/theme/theme-script";
import { SiteShell } from "@/layouts/site-shell";
import { siteConfig } from "@/lib/site";
import { getSiteUrl } from "@/lib/urls";
import "@/styles/globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elliot Electronics | Ingenieria, energia y sistemas",
    template: "%s | Elliot Electronics",
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
    title: "Elliot Electronics | Ingenieria, energia y sistemas",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Elliot Electronics | Ingenieria, energia y sistemas",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

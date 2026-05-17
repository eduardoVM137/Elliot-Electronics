import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elliot Electronics",
    short_name: "Elliot",
    description:
      "Firma de ingenieria para energia, sistemas, electronica, consultoria y soporte tecnico.",
    start_url: "/",
    display: "standalone",
    background_color: "#050a11",
    theme_color: "#21a7ff",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

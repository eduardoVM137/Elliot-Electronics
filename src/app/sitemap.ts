import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { solutions } from "@/data/solutions";
import { getSiteUrl } from "@/lib/urls";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticRoutes = ["", "/proyectos", "/nosotros", "/contacto"];
  const solutionRoutes = solutions.map((solution) => solution.href);
  const projectRoutes = projects.map((project) => `/proyectos/${project.slug}`);

  return [...staticRoutes, ...solutionRoutes, ...projectRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === "" ? 1 :
      route === "/soluciones/energia" ? 0.95 :
      route === "/soluciones/ingenieria" ? 0.9 :
      route.startsWith("/soluciones") ? 0.85 :
      route === "/contacto" ? 0.8 :
      route === "/proyectos" ? 0.75 :
      route === "/nosotros" ? 0.7 :
      0.6,
  }));
}

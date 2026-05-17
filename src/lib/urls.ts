import { siteConfig } from "@/lib/site";

export function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim() || siteConfig.defaultUrl;

  return value.endsWith("/") ? value.slice(0, -1) : value;
}

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/about", "/now"];
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://v-sammiekiogora.github.io/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.7,
  }));
}

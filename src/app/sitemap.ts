import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { workItems } from "@/data/work";

export const dynamic = "force-static";

const routes = [
  "",
  "/work",
  ...workItems.map((item) => `/work/${item.slug}`),
  "/about",
  "/now",
  "/notes",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/now" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/work" ? 0.9 : 0.7,
  }));
}

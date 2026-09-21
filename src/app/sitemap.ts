import { MetadataRoute } from "next";
import { ALL_TEXAS_COUNTIES } from "@/data/texasCounties";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mapswithteeth.org";
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/ask-us-to-look",
    "/bridge",
    "/build-with-us",
    "/feedback",
    "/find-help",
    "/for-partners",
    "/governance",
    "/how-it-works",
    "/how-we-research",
    "/other-ways-through",
    "/safety",
    "/support",
    "/texas",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const countyRoutes = ALL_TEXAS_COUNTIES.map((county) => ({
    url: `${baseUrl}/texas/${county.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...countyRoutes];
}

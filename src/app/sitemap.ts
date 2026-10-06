import { MetadataRoute } from "next";
import { getPublicArticles } from "@/domain/writing/queries";
import { ALL_TEXAS_COUNTIES } from "@/data/texasCounties";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mapswithteeth.org";
  const now = new Date();

  // Core static pages
  const staticRoutes = [
    "",
    "/find-help",
    "/other-ways-through",
    "/texas",
    "/ask-us-to-look",
    "/the-gap",
    "/continuity",
    "/policy",
    "/bad-maps",
    "/for-partners",
    "/about",
    "/how-we-research",
    "/methodology",
    "/technical",
    "/governance",
    "/safety",
    "/support",
    "/feedback",
    "/writing",
    "/writing/author",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/writing") || route === "/continuity" || route === "/policy" ? 0.8 : 0.7,
  }));

  // Texas county routes
  const countyRoutes = ALL_TEXAS_COUNTIES.map((county) => ({
    url: `${baseUrl}/texas/${county.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Writing articles routes (Public only)
  const articleRoutes = getPublicArticles().map((article) => ({
    url: `${baseUrl}/writing/${article.slug}`,
    lastModified: new Date(article.lastUpdated || article.publicationDate),
    changeFrequency: "monthly" as const,
    priority: article.featured ? 0.9 : 0.75,
  }));

  return [...staticRoutes, ...countyRoutes, ...articleRoutes];
}

import type { MetadataRoute } from "next";
import { SITE_CONFIG, SERVICES, BLOG_POSTS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/xizmatlar`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/xizmatlar/sayt-yaratish`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/xizmatlar/landing-page`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/xizmatlar/korporativ-sayt`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/xizmatlar/internet-dokon`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/xizmatlar/crm`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/xizmatlar/telegram-bot`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/portfel`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/narxlar`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/haqimizda`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/aloqa`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/xizmatlar/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}

import type { MetadataRoute } from "next";
import { SITE_CONFIG, BLOG_POSTS } from "@/lib/constants";

// All service detail slugs from SERVICES + dedicated pages
const SERVICE_DETAIL_SLUGS = [
  "korporativ-sayt",
  "internet-dokon",
  "landing-page",
  "veb-dastur",
  "seo-optimizatsiya",
  "qayta-ishlash",
];

const DEDICATED_SERVICE_SLUGS = [
  "sayt-yaratish",
  "landing-page",
  "korporativ-sayt",
  "internet-dokon",
  "crm",
  "telegram-bot",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                          lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/xizmatlar`,           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/narxlar`,             lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`,                lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/haqimizda`,           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/aloqa`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Dedicated /xizmatlar/* landing pages
  const dedicatedServiceRoutes: MetadataRoute.Sitemap = DEDICATED_SERVICE_SLUGS.map((slug) => ({
    url: `${base}/xizmatlar/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Dynamic /xizmatlar/[slug] detail pages (from SERVICES array)
  const serviceDetailRoutes: MetadataRoute.Sitemap = SERVICE_DETAIL_SLUGS.map((slug) => ({
    url: `${base}/xizmatlar/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Deduplicate — dedicated pages override detail if same slug
  const allServiceUrls = new Map<string, MetadataRoute.Sitemap[number]>();
  [...serviceDetailRoutes, ...dedicatedServiceRoutes].forEach((r) => {
    allServiceUrls.set(r.url, r);
  });

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...Array.from(allServiceUrls.values()),
    ...blogRoutes,
  ];
}

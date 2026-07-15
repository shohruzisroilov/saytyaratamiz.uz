import { SITE_CONFIG, BLOG_POSTS } from "@/lib/constants";

export const dynamic = "force-static";
export const revalidate = 86400; // 24h

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = BLOG_POSTS.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const items = posts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_CONFIG.url}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_CONFIG.url}/blog/${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${escapeXml(SITE_CONFIG.email)} (${escapeXml(post.author)})</author>
      <category>${escapeXml(post.category)}</category>
      ${post.tags.map((t) => `<category>${escapeXml(t)}</category>`).join("\n      ")}
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(SITE_CONFIG.name)} — Blog</title>
    <link>${SITE_CONFIG.url}</link>
    <description>${escapeXml(SITE_CONFIG.description)}</description>
    <language>uz</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_CONFIG.url}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_CONFIG.url}/icons/icon-128.png</url>
      <title>${escapeXml(SITE_CONFIG.name)}</title>
      <link>${SITE_CONFIG.url}</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}

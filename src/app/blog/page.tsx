import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { SITE_CONFIG, BLOG_POSTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog — Veb Dizayn, SEO va E-Commerce Maqolalari",
  description:
    "Sayt yaratish, SEO optimallashtirish, internet do'kon va zamonaviy texnologiyalar haqida amaliy maqolalar. O'zbekistonda veb-biznes uchun foydali bilimlar.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
    types: { "application/rss+xml": `${SITE_CONFIG.url}/feed.xml` },
  },
  keywords: [
    "veb dizayn blog", "SEO maslahatlar", "sayt yaratish bo'yicha maqolalar",
    "e-commerce O'zbekiston", "landing page maslahatlar", "Next.js blog",
  ],
  openGraph: {
    title: "Blog — Veb Dizayn, SEO va E-Commerce | SaytYaratamiz.uz",
    description: "Amaliy maqolalar: SEO, veb dizayn, e-commerce va zamonaviy texnologiyalar.",
    url: `${SITE_CONFIG.url}/blog`,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  SEO: "text-green-600 bg-green-50 dark:bg-green-950/30 dark:text-green-400",
  "E-commerce": "text-blue-600 bg-blue-50 dark:bg-blue-950/30 dark:text-blue-400",
  "Landing Page": "text-violet-600 bg-violet-50 dark:bg-violet-950/30 dark:text-violet-400",
  Texnologiya: "text-orange-600 bg-orange-50 dark:bg-orange-950/30 dark:text-orange-400",
  Performance: "text-cyan-600 bg-cyan-50 dark:bg-cyan-950/30 dark:text-cyan-400",
};

function BlogJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: SITE_CONFIG.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_CONFIG.url}/blog` },
        ],
      },
      {
        "@type": "Blog",
        "@id": `${SITE_CONFIG.url}/blog`,
        url: `${SITE_CONFIG.url}/blog`,
        name: "SaytYaratamiz.uz Blog",
        description: "Veb dizayn, SEO va e-commerce haqida amaliy maqolalar",
        publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
        blogPost: BLOG_POSTS.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          description: p.excerpt,
          url: `${SITE_CONFIG.url}/blog/${p.slug}`,
          datePublished: p.date,
          author: { "@type": "Person", name: p.author },
          keywords: p.tags.join(", "),
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <BlogJsonLd />

      {/* Hero */}
      <section className="pt-28 pb-14 bg-background" aria-labelledby="blog-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-2xl text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-6">
            <a href="/" className="hover:text-primary transition-colors">Bosh sahifa</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground font-medium" aria-current="page">Blog</span>
          </nav>

          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15 mb-5">
            Blog
          </span>
          <h1 id="blog-heading" className="text-4xl sm:text-5xl font-bold text-foreground tracking-[-0.02em] mb-4">
            Foydali <span className="gradient-text">Maqolalar</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            SEO, veb dizayn, e-commerce va texnologiyalar haqida amaliy bilimlar.
            Saytingizni va biznesingizni rivojlantiring.
          </p>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`}>
            <article className="mb-10 rounded-[20px] overflow-hidden border border-border bg-card hover:border-primary/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group cursor-pointer">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto bg-gradient-to-br from-primary/8 to-accent/8 flex items-center justify-center text-7xl select-none" role="img" aria-label={featured.title}>
                  {featured.emoji}
                </div>
                <div className="p-7 sm:p-9 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className={cn("px-2.5 py-1 rounded-full text-[11px] font-semibold", CATEGORY_COLORS[featured.category])}>
                        {featured.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        <span>{featured.readTime}</span>
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-sm">{featured.excerpt}</p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-primary font-semibold text-sm">
                    To&apos;liq o&apos;qish
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </article>
          </Link>

          {/* Interactive search, categories & pagination list */}
          <div className="mt-14 pt-14 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground tracking-[-0.02em] mb-6">
              Barcha maqolalar
            </h2>
            <BlogList posts={BLOG_POSTS} />
          </div>
        </div>
      </section>
    </>
  );
}

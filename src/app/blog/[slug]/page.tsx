import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react";
import { SITE_CONFIG, BLOG_POSTS } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";
import { cn } from "@/lib/utils";
import { SocialShare } from "@/components/blog/SocialShare";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Maqola topilmadi" };

  const url = `${SITE_CONFIG.url}/blog/${slug}`;
  return {
    title: `${post.title}`,
    description: post.excerpt,
    alternates: { canonical: url },
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      siteName: SITE_CONFIG.name,
      locale: "uz_UZ",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/og.png"],
    },
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  SEO: "text-green-600 bg-green-50 dark:bg-green-950/30 dark:text-green-400",
  "E-commerce": "text-blue-600 bg-blue-50 dark:bg-blue-950/30 dark:text-blue-400",
  "Landing Page": "text-violet-600 bg-violet-50 dark:bg-violet-950/30 dark:text-violet-400",
  Texnologiya: "text-orange-600 bg-orange-50 dark:bg-orange-950/30 dark:text-orange-400",
  Performance: "text-cyan-600 bg-cyan-50 dark:bg-cyan-950/30 dark:text-cyan-400",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("uz-Latn-UZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(
    (p) => p.id !== post.id && p.category === post.category
  ).slice(0, 2);
  const others = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3 - related.length);
  const relatedPosts = [...related, ...others].slice(0, 3);

  const postUrl = `${SITE_CONFIG.url}/blog/${post.slug}`;

  const toc = post.content
    .split("\n\n")
    .filter((para) => /^\*\*[^*]+\*\*$/.test(para.trim()))
    .map((para) => {
      const text = para.replace(/\*\*/g, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      return { text, id };
    });

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: SITE_CONFIG.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_CONFIG.url}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": postUrl,
        headline: post.title,
        description: post.excerpt,
        url: postUrl,
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.date).toISOString(),
        author: {
          "@type": "Person",
          name: post.author,
          url: SITE_CONFIG.url,
        },
        publisher: {
          "@id": `${SITE_CONFIG.url}/#organization`,
        },
        image: {
          "@type": "ImageObject",
          url: `${SITE_CONFIG.url}/og.png`,
          width: 1200,
          height: 630,
        },
        keywords: post.tags.join(", "),
        articleSection: post.category,
        inLanguage: "uz",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": postUrl,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="pt-28 pb-10 bg-background" aria-labelledby="post-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
            <a href="/" className="hover:text-primary transition-colors">Bosh sahifa</a>
            <span aria-hidden="true">/</span>
            <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground font-medium truncate max-w-[200px]" aria-current="page">
              {post.title}
            </span>
          </nav>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={cn("px-2.5 py-1 rounded-full text-[11px] font-semibold", CATEGORY_COLORS[post.category] || "bg-muted text-muted-foreground")}>
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{post.readTime}</span>
            </span>
            <time className="flex items-center gap-1.5 text-xs text-muted-foreground" dateTime={post.date}>
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              {formatDate(post.date)}
            </time>
          </div>

          <h1 id="post-heading" className="text-3xl sm:text-4xl font-bold text-foreground tracking-[-0.02em] leading-tight mb-5">
            {post.title}
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed border-l-2 border-primary pl-4 italic">
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
            <div
              className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-sm font-bold text-primary shrink-0"
              aria-hidden="true"
            >
              {post.author[0]}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{post.author}</p>
              <p className="text-xs text-muted-foreground">SaytYaratamiz.uz eksperti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cover */}
      <div
        className="bg-gradient-to-br from-primary/6 to-accent/6 border-y border-border"
        role="img"
        aria-label={post.title}
      >
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-3xl">
          <div className="flex items-center justify-center h-52 text-8xl select-none">
            {post.emoji}
          </div>
        </div>
      </div>

      {/* Article content */}
      <article className="py-12 bg-background" aria-labelledby="post-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-5xl">
          <div className="grid lg:grid-cols-4 gap-10 items-start">
            
            {/* Desktop Sidebar (TOC & Share) */}
            <aside className="lg:col-span-1 lg:sticky lg:top-24 space-y-6 order-last lg:order-first">
              {toc.length > 0 && (
                <nav className="space-y-3 bg-muted/30 p-5 rounded-[16px] border border-border" aria-label="Mundarija">
                  <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Mundarija</p>
                  <ul className="space-y-2.5 text-xs">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="block text-foreground/70 hover:text-primary leading-normal hover:translate-x-0.5 transition-all">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
              <SocialShare url={postUrl} title={post.title} />
            </aside>

            {/* Article Body */}
            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                {post.content.split("\n\n").map((para, i) => {
                  // Bold-only paragraphs become h2 with ID
                  if (/^\*\*[^*]+\*\*$/.test(para.trim())) {
                    const headingText = para.trim().replace(/\*\*/g, "");
                    const headingId = headingText
                      .toLowerCase()
                      .replace(/[^a-z0-9\s-]/g, "")
                      .replace(/\s+/g, "-");
                    return (
                      <h2
                        key={i}
                        id={headingId}
                        className="text-xl font-bold text-foreground mt-10 mb-3 tracking-[-0.01em] scroll-mt-24"
                      >
                        {headingText}
                      </h2>
                    );
                  }
                  const parts = para.split(/(\*\*[^*]+\*\*)/g);
                  return (
                    <p key={i} className="text-foreground/85 leading-[1.8] mb-5 text-sm sm:text-base">
                      {parts.map((part, j) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <strong key={j} className="font-semibold text-foreground">
                            {part.replace(/\*\*/g, "")}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <footer className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-border">
                <Tag className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden="true" />
                <span className="sr-only">Teglar:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border hover:border-primary/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </footer>
            </div>

          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <aside className="py-16 bg-surface" aria-labelledby="related-heading">
          <div className="container mx-auto px-5 sm:px-8 lg:px-10">
            <h2 id="related-heading" className="text-xl font-bold text-foreground tracking-[-0.02em] mb-6">
              Boshqa maqolalar
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPosts.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`}>
                  <article className="h-full rounded-[16px] bg-card border border-border hover:border-primary/20 hover:shadow-[0_8px_28px_rgba(0,0,0,0.05)] transition-all duration-300 group overflow-hidden cursor-pointer">
                    <div className="h-32 bg-gradient-to-br from-muted/60 to-muted flex items-center justify-center text-4xl select-none" role="img" aria-label={p.title}>
                      {p.emoji}
                    </div>
                    <div className="p-4 space-y-2">
                      <span className={cn("px-2.5 py-0.5 rounded-full text-[11px] font-semibold", CATEGORY_COLORS[p.category] || "bg-muted text-muted-foreground")}>
                        {p.category}
                      </span>
                      <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-200 leading-snug">
                        {p.title}
                      </h3>
                      <div className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                        O&apos;qish
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      )}

      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react";
import { SITE_CONFIG, BLOG_POSTS } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";
import { cn } from "@/lib/utils";

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

  return {
    title: `${post.title} — SaytYaratamiz.uz Blog`,
    description: post.excerpt,
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${slug}` },
    keywords: post.tags,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE_CONFIG.url}/blog/${slug}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
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
  const d = new Date(dateStr);
  return d.toLocaleDateString("uz-Latn-UZ", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2);
  const others = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3 - related.length);
  const relatedPosts = [...related, ...others].slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    datePublished: post.date,
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-28 pb-10 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Barcha maqolalar
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={cn("px-2.5 py-1 rounded-full text-[11px] font-semibold", CATEGORY_COLORS[post.category] || "bg-muted text-muted-foreground")}>
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.date)}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-[-0.02em] leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed border-l-2 border-primary pl-4 italic">
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-sm font-bold text-primary shrink-0">
              {post.author[0]}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{post.author}</p>
              <p className="text-xs text-muted-foreground">SaytYaratamiz.uz eksperti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cover image placeholder */}
      <section className="bg-gradient-to-br from-primary/6 to-accent/6 border-y border-border">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-3xl">
          <div className="flex items-center justify-center h-52 text-8xl select-none">
            {post.emoji}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-3xl">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return (
                  <h2 key={i} className="text-xl font-bold text-foreground mt-8 mb-3 tracking-[-0.01em]">
                    {para.replace(/\*\*/g, "")}
                  </h2>
                );
              }
              // Parse bold within paragraph
              const parts = para.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="text-foreground/85 leading-[1.8] mb-4">
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
          <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-border">
            <Tag className="w-4 h-4 text-muted-foreground" />
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-surface" aria-labelledby="related-heading">
          <div className="container mx-auto px-5 sm:px-8 lg:px-10">
            <h2 id="related-heading" className="text-xl font-bold text-foreground tracking-[-0.02em] mb-6">
              Boshqa maqolalar
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPosts.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`}>
                  <article className="h-full rounded-[16px] bg-card border border-border hover:border-primary/20 hover:shadow-[0_8px_28px_rgba(0,0,0,0.05)] transition-all duration-300 group overflow-hidden cursor-pointer">
                    <div className="h-32 bg-gradient-to-br from-muted/60 to-muted flex items-center justify-center text-4xl select-none">
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
                        O'qish <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}

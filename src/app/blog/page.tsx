import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { SITE_CONFIG, BLOG_POSTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog — Veb Dizayn, SEO va E-Commerce Maqolalari",
  description:
    "Sayt yaratish, SEO optimallashtirish, internet do'kon va zamonaviy texnologiyalar haqida amaliy maqolalar. O'zbekistonda veb-biznes uchun foydali bilimlar.",
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
  keywords: ["veb dizayn blog", "SEO maslahatlar", "sayt yaratish bo'yicha maqolalar", "e-commerce O'zbekiston"],
};

const CATEGORY_COLORS: Record<string, string> = {
  SEO: "text-green-600 bg-green-50 dark:bg-green-950/30 dark:text-green-400",
  "E-commerce": "text-blue-600 bg-blue-50 dark:bg-blue-950/30 dark:text-blue-400",
  "Landing Page": "text-violet-600 bg-violet-50 dark:bg-violet-950/30 dark:text-violet-400",
  Texnologiya: "text-orange-600 bg-orange-50 dark:bg-orange-950/30 dark:text-orange-400",
  Performance: "text-cyan-600 bg-cyan-50 dark:bg-cyan-950/30 dark:text-cyan-400",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-14 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-2xl text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15 mb-5">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-[-0.02em] mb-4">
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
                <div className="h-64 md:h-auto bg-gradient-to-br from-primary/8 to-accent/8 flex items-center justify-center text-7xl select-none">
                  {featured.emoji}
                </div>
                <div className="p-7 sm:p-9 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className={cn("px-2.5 py-1 rounded-full text-[11px] font-semibold", CATEGORY_COLORS[featured.category])}>
                        {featured.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {featured.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-sm">{featured.excerpt}</p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-primary font-semibold text-sm group/link">
                    To&apos;liq o&apos;qish
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          </Link>

          {/* Other posts */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="h-full rounded-[16px] bg-card border border-border hover:border-primary/20 hover:shadow-[0_8px_28px_rgba(0,0,0,0.05)] transition-all duration-300 group overflow-hidden cursor-pointer">
                  <div className="h-40 bg-gradient-to-br from-muted/60 to-muted flex items-center justify-center text-5xl select-none">
                    {post.emoji}
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className={cn("px-2.5 py-0.5 rounded-full text-[11px] font-semibold", CATEGORY_COLORS[post.category])}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground text-[15px] group-hover:text-primary transition-colors duration-200 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary pt-1">
                      O&apos;qish
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

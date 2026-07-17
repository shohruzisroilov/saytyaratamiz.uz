"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search, Clock, ArrowRight, ChevronLeft, ChevronRight,
  ShoppingCart, Target, Code2, Zap, BarChart2, FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Search, ShoppingCart, Target, Code2, Zap, BarChart2,
};

interface BlogListProps {
  posts: BlogPost[];
}

const CATEGORIES = ["Barchasi", "SEO", "E-commerce", "Landing Page", "Texnologiya", "Performance"];

const CATEGORY_COLORS: Record<string, string> = {
  SEO: "text-green-600 bg-green-50 border-green-200/50",
  "E-commerce": "text-blue-600 bg-blue-50 border-blue-200/50",
  "Landing Page": "text-violet-600 bg-violet-50 border-violet-200/50",
  Texnologiya: "text-orange-600 bg-orange-50 border-orange-200/50",
  Performance: "text-cyan-600 bg-cyan-50 border-cyan-200/50",
};

const ITEMS_PER_PAGE = 6;

export function BlogList({ posts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on search query & category selection
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "Barchasi" ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPosts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-12">
      {/* Controls: Search and Categories */}
      <div className="flex flex-col md:flex-row gap-5 items-stretch md:items-center justify-between p-4 rounded-2xl bg-muted/40 border border-border">
        
        {/* Category selector */}
        <div className="flex flex-wrap gap-1.5 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button type="button"
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className={cn(
                "px-4 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                selectedCategory === cat
                  ? "bg-primary text-white border-primary shadow-[0_4px_12px_rgba(37,99,235,0.2)]"
                  : "bg-background text-muted-foreground border-border/80 hover:text-foreground hover:bg-muted"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search bar */}
        <div className="relative w-full md:w-auto md:min-w-[260px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Maqolalardan izlash..."
            className="w-full pl-10 pr-4 py-2.5 rounded-md text-xs bg-background border border-border focus:border-primary/45 focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Blog Cards Grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPosts.map((post) => {
            const Icon = ICON_MAP[post.icon] || FileText;
            return (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group h-full flex">
              <article className="flex flex-col w-full rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-300 overflow-hidden cursor-pointer">
                {/* Image Placeholder with Icon */}
                <div className="h-44 bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center select-none group-hover:scale-[1.02] transition-transform duration-500" aria-hidden="true">
                  <Icon className="w-11 h-11 text-primary/70" strokeWidth={1.5} />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className={cn("px-2.5 py-0.5 rounded-full text-[10px] font-bold border", CATEGORY_COLORS[post.category] || "bg-muted text-muted-foreground")}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-foreground text-base tracking-tight leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary pt-5 mt-5 border-t border-border/60">
                    O&apos;qish
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-muted/20 border border-border rounded-2xl">
          <p className="text-base font-medium text-muted-foreground">Siz qidirgan so&apos;rov bo&apos;yicha maqola topilmadi.</p>
          <button type="button"
            onClick={() => { setSearchQuery(""); setSelectedCategory("Barchasi"); }}
            className="mt-4 text-xs font-bold text-primary hover:underline"
          >
            Filtrlarni tozalash
          </button>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <nav aria-label="Sahifalar navigatsiyasi" className="flex items-center justify-center gap-2 pt-6">
          <button type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:bg-muted disabled:opacity-40 disabled:hover:bg-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Oldingi sahifa"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button type="button"
              key={page}
              onClick={() => handlePageChange(page)}
              className={cn(
                "w-10 h-10 rounded-md text-xs font-bold transition-all border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                currentPage === page
                  ? "bg-primary text-white border-primary shadow-[0_4px_12px_rgba(37,99,235,0.2)]"
                  : "bg-background text-foreground border-border hover:bg-muted"
              )}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          ))}

          <button type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:bg-muted disabled:opacity-40 disabled:hover:bg-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Keyingi sahifa"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </nav>
      )}
    </div>
  );
}

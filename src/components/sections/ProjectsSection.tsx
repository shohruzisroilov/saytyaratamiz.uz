"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const CATEGORIES = ["Barchasi", "Internet Do'kon", "Korporativ Sayt", "Veb Dastur", "Landing Page"];

const CATEGORY_COLORS: Record<string, string> = {
  "Internet Do'kon": "text-blue-600 bg-blue-50 dark:bg-blue-950/30 dark:text-blue-400",
  "Korporativ Sayt": "text-violet-600 bg-violet-50 dark:bg-violet-950/30 dark:text-violet-400",
  "Veb Dastur": "text-orange-600 bg-orange-50 dark:bg-orange-950/30 dark:text-orange-400",
  "Landing Page": "text-green-600 bg-green-50 dark:bg-green-950/30 dark:text-green-400",
};

const TECH_INITIALS: Record<string, string> = {
  "Internet Do'kon": "🛒",
  "Korporativ Sayt": "🏢",
  "Veb Dastur": "⚙️",
  "Landing Page": "🎯",
};

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Barchasi");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    activeCategory === "Barchasi"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 lg:py-28 bg-background" aria-labelledby="projects-heading">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="max-w-xl mx-auto text-center mb-10 space-y-4"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
            Loyihalar
          </span>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-foreground tracking-[-0.02em]">
            Yaratgan Saytlarimiz
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            150+ muvaffaqiyatli loyihamizdan bir qismi. Har bir sayt — mijozimizning muvaffaqiyat hikoyasi.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Loyiha filtrlari">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeCategory === cat
                  ? "bg-primary text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)]"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" role="tabpanel">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group rounded-[16px] overflow-hidden border border-border bg-card hover:border-primary/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-muted/60 to-muted overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl select-none">{TECH_INITIALS[project.category] || "🌐"}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-foreground text-[15px] transition-colors duration-200">
                      {project.title}
                    </h3>
                    <span className={cn(
                      "shrink-0 px-2.5 py-0.5 rounded-full text-[11px] font-semibold",
                      CATEGORY_COLORS[project.category] || "bg-muted text-muted-foreground"
                    )}>
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-[6px] text-[11px] font-mono bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/loyihalar"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-primary text-white font-semibold text-sm shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:bg-primary-dark hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] transition-all duration-200 hover:-translate-y-px"
          >
            Barcha Loyihalar
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

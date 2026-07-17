"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH, REVEAL_VIEWPORT } from "@/lib/motion";

const AVATAR_COLORS = [
  "from-blue-400 to-blue-600",
  "from-violet-400 to-violet-600",
  "from-pink-400 to-pink-600",
  "from-teal-400 to-teal-600",
  "from-orange-400 to-orange-600",
  "from-green-400 to-green-600",
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, REVEAL_VIEWPORT);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  const visible = Array.from({ length: 3 }, (_, i) =>
    TESTIMONIALS[(current + i) % TESTIMONIALS.length]
  );

  return (
    <section className="py-20 lg:py-28 bg-surface overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header row */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_SMOOTH }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
              Mijozlar Fikri
            </span>
            <h2 id="testimonials-heading" className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-foreground tracking-[-0.02em]">
              Ular Nima Deydi?
            </h2>
          </div>

          <div className="flex items-center gap-2" aria-label="Navigatsiya">
            <button type="button"
              onClick={prev}
              className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-200"
              aria-label="Oldingi"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button type="button"
              onClick={next}
              className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-200"
              aria-label="Keyingi"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" aria-live="polite">
          <AnimatePresence mode="popLayout">
            {visible.map((item, i) => {
              const gradientIdx = TESTIMONIALS.findIndex((t) => t.id === item.id);
              return (
                <motion.article
                  key={`${item.id}-${current}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: EASE_SMOOTH }}
                  className="flex flex-col p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-shadow duration-300"
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4" aria-label={`${item.rating} yulduz`}>
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={cn("w-3.5 h-3.5", j < item.rating ? "fill-yellow-400 text-yellow-400" : "text-muted")} />
                    ))}
                  </div>

                  {/* Review */}
                  <blockquote className="flex-1 text-sm text-muted-foreground leading-relaxed mb-5">
                    &ldquo;{item.content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0",
                      `bg-gradient-to-br ${AVATAR_COLORS[gradientIdx % AVATAR_COLORS.length]}`
                    )}>
                      {item.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.position}, {item.company}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-8" role="tablist">
          {TESTIMONIALS.map((_, i) => (
            <button type="button"
              key={i}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`${i + 1}-fikr`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === current ? "w-5 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

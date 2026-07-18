"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
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

const TRACK = [...TESTIMONIALS, ...TESTIMONIALS];

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, REVEAL_VIEWPORT);

  return (
    <section className="py-20 lg:py-28 bg-surface overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header row */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_SMOOTH }}
          className="mb-12"
        >
          <div className="space-y-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
              Mijozlar Fikri
            </span>
            <h2 id="testimonials-heading" className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-foreground tracking-[-0.02em]">
              Ular Nima Deydi?
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div
        className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        aria-label="Mijozlar fikrlari"
      >
        <div
          className="flex w-max gap-5 animate-[marquee-x_45s_linear_infinite] hover:[animation-play-state:paused]"
        >
          {TRACK.map((item, i) => {
            const gradientIdx = TESTIMONIALS.findIndex((t) => t.id === item.id);
            return (
              <article
                key={`${item.id}-${i}`}
                aria-hidden={i >= TESTIMONIALS.length}
                className="flex flex-col w-[320px] sm:w-[380px] shrink-0 p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-shadow duration-300"
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

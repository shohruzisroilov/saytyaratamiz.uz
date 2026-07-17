"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";
import { EASE_SMOOTH, REVEAL_VIEWPORT } from "@/lib/motion";

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, REVEAL_VIEWPORT);

  return (
    <section className="py-14 lg:py-16 bg-background border-y border-border" aria-label="Statistika">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-border">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.07, ease: EASE_SMOOTH }}
              className="text-center lg:px-10"
            >
              <p className="text-3xl sm:text-4xl font-bold text-foreground tracking-[-0.02em] tabular-nums">
                {stat.value}
                <span className="text-primary">{stat.suffix}</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1.5 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

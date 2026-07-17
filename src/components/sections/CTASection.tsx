"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Send, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { EASE_SMOOTH, REVEAL_VIEWPORT } from "@/lib/motion";

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, REVEAL_VIEWPORT);

  return (
    <section className="py-16 lg:py-24 bg-background" aria-labelledby="cta-heading">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE_SMOOTH }}
          className="relative overflow-hidden rounded-3xl bg-[#0f172a] px-8 sm:px-12 lg:px-16 py-14 lg:py-20"
        >
          {/* Subtle blue gradient top-left */}
          <div
            className="absolute -top-32 -left-32 w-80 h-80 bg-primary/25 rounded-full blur-[80px]"
            aria-hidden="true"
          />
          {/* Accent glow bottom-right */}
          <div
            className="absolute -bottom-24 -right-24 w-72 h-72 bg-accent/15 rounded-full blur-[80px]"
            aria-hidden="true"
          />
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-15"
            aria-hidden="true"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-medium">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Bugun buyurtma bering — ertaga boshamiz
            </div>

            <h2 id="cta-heading" className="font-display text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-white leading-[1.15] tracking-[-0.02em]">
              O&apos;z Saytingizni<br className="hidden sm:block" /> Ishga Tushirmoqchimisiz?
            </h2>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              Hozir murojaat qiling —{" "}
              <strong className="text-white font-semibold">bepul konsultatsiya</strong>{" "}
              va biznesingizga mos eng yaxshi yechimni olasiz.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/aloqa"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#0f172a] font-bold text-sm hover:bg-white/95 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_28px_rgba(255,255,255,0.2)] transition-all duration-200 hover:-translate-y-px"
              >
                Bepul Konsultatsiya
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={SITE_CONFIG.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 hover:border-white/40 text-white font-semibold text-sm hover:bg-white/8 transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
            </div>

            {/* Phone */}
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors duration-200 pt-1"
            >
              <Phone className="w-4 h-4" />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

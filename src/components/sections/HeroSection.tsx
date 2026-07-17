"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Star, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";



const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const PARTICLES = [
  { top: "15%", left: "18%", size: "w-2 h-2", color: "bg-primary/40", duration: 7, delay: 0 },
  { top: "72%", left: "10%", size: "w-1.5 h-1.5", color: "bg-mint/50", duration: 9, delay: 1.5 },
  { top: "22%", left: "88%", size: "w-2 h-2", color: "bg-lavender/40", duration: 8, delay: 0.5 },
  { top: "62%", left: "78%", size: "w-1.5 h-1.5", color: "bg-primary/40", duration: 10, delay: 2 },
  { top: "42%", left: "50%", size: "w-1 h-1", color: "bg-mint/40", duration: 6, delay: 1 },
  { top: "85%", left: "45%", size: "w-1.5 h-1.5", color: "bg-lavender/40", duration: 11, delay: 2.5 },
];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Browser mockup colours — switch by theme
  const isDark = false;
  const mock = {
    windowBg:   isDark ? "#0d1526" : "#ffffff",
    titleBg:    isDark ? "#162032" : "#f4f6f8",
    border:     isDark ? "#1e2d3d" : "#e2e8f0",
    urlBg:      isDark ? "#0d1526" : "#ffffff",
    urlText:    isDark ? "#4a6080" : "#94a3b8",
    skeleton:   isDark ? "#1e2d3d" : "#e2e8f0",
    skeletonAlt:isDark ? "#162032" : "#f8fafc",
    heading:    isDark ? "rgba(241,245,249,0.10)" : "rgba(15,23,42,0.10)",
    floatBg:    isDark ? "#162032" : "#ffffff",
    floatText:  isDark ? "#f1f5f9" : "#0f172a",
    floatSub:   isDark ? "#94a3b8" : "#64748b",
  };
  return (
    <section
      className="relative min-h-dvh flex items-center overflow-hidden pt-16 lg:pt-20"
      aria-label="Bosh sahifa"
    >
      {/* Background — soft atmospheric mesh, slowly drifting */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-pattern opacity-60" />

        {/* Blue glow top-left */}
        <motion.div
          className="absolute -top-40 -left-40 w-[650px] h-[650px] bg-primary/10 rounded-full blur-[110px]"
          animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Mint glow top-right */}
        <motion.div
          className="absolute -top-24 right-0 w-[460px] h-[460px] bg-mint/12 rounded-full blur-[110px]"
          animate={{ x: [0, -30, 20, 0], y: [0, -25, 15, 0], scale: [1, 0.94, 1.06, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Lavender glow bottom-right */}
        <motion.div
          className="absolute -bottom-40 -right-20 w-[540px] h-[540px] bg-lavender/12 rounded-full blur-[110px]"
          animate={{ x: [0, 25, -35, 0], y: [0, -20, 25, 0], scale: [1, 1.05, 0.95, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Ambient floating particles */}
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className={cn("absolute rounded-full", p.size, p.color)}
            style={{ top: p.top, left: p.left }}
            animate={{ y: [0, -18, 0], opacity: [0.15, 0.6, 0.15] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        ))}
      </div>

      <div className="container mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-7"
          >


            {/* Heading */}
            <motion.div variants={item} className="space-y-3">
              <h1 className="font-display text-[2.6rem] sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-bold text-foreground leading-[1.12] tracking-[-0.02em]">
                Professional{" "}
                <span className="gradient-text">Sayt Yaratish</span>{" "}
                Xizmati
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[480px] mt-4">
                Korporativ sayt, internet do&apos;kon, landing page —{" "}
                <strong className="text-foreground font-semibold">tez, sifatli va arzon</strong>{" "}
                narxda yaratamiz.
              </p>
            </motion.div>



            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/aloqa"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white text-sm bg-primary hover:bg-primary-dark shadow-[0_4px_20px_rgba(37,99,235,0.28)] hover:shadow-[0_8px_28px_rgba(37,99,235,0.38)] transition-all duration-250 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Bepul Konsultatsiya
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/xizmatlar"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-foreground border border-border hover:border-primary/40 hover:bg-muted/60 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Ishlarimizni Ko&apos;rish
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-6 pt-1">
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  {["J", "M", "B", "N"].map((letter, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-white shadow-sm flex items-center justify-center"
                    >
                      <span className="text-[10px] font-bold text-primary">{letter}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">120+ mamnun mijoz</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm text-muted-foreground">150+ loyiha yakunlangan</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Browser mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative hidden lg:block"
            style={{ perspective: 1200 }}
            aria-hidden="true"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl scale-110" />

            {/* Browser window */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] cursor-default origin-center transition-shadow duration-300 hover:shadow-[0_28px_80px_rgba(37,99,235,0.14)]"
              style={{ border: `1px solid ${mock.border}` }}
              whileHover={{ rotateX: 3, rotateY: -4, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
            >
              {/* Title bar */}
              <div
                className="flex items-center gap-3 px-4 py-3"
                style={{ background: mock.titleBg, borderBottom: `1px solid ${mock.border}` }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div
                  className="flex-1 rounded-[7px] px-3 py-1.5 text-[11px] text-center select-none"
                  style={{ background: mock.urlBg, border: `1px solid ${mock.border}`, color: mock.urlText }}
                >
                  saytyaratamiz.uz
                </div>
              </div>

              {/* Page content */}
              <div className="p-6 min-h-[340px] space-y-5" style={{ background: mock.windowBg }}>
                {/* Fake nav */}
                <div className="flex items-center justify-between mb-2 select-none">
                  <motion.div 
                    className="w-20 h-5 rounded-sm cursor-pointer" 
                    style={{ background: "rgba(37,99,235,0.20)" }}
                    whileHover={{ background: "rgba(37,99,235,0.30)", scale: 1.03 }}
                  />
                  <div className="flex gap-2.5">
                    {[1, 2, 3].map((i) => (
                      <motion.div 
                        key={i} 
                        className="w-8 h-3 rounded-[4px] cursor-pointer" 
                        style={{ background: mock.skeleton }}
                        whileHover={{ scale: 1.1, background: "rgba(37,99,235,0.15)" }}
                      />
                    ))}
                  </div>
                  <motion.div 
                    className="w-16 h-7 rounded-sm bg-primary cursor-pointer"
                    whileHover={{ scale: 1.04, backgroundColor: "#1d4ed8" }}
                    whileTap={{ scale: 0.98 }}
                  />
                </div>

                {/* Fake hero text */}
                <div className="space-y-2.5 pt-2 select-none">
                  <div className="w-[72%] h-7 rounded" style={{ background: mock.heading }} />
                  <div className="w-[52%] h-7 rounded" style={{ background: "rgba(37,99,235,0.18)" }} />
                  <div className="w-full h-2.5 rounded mt-3" style={{ background: mock.skeleton }} />
                  <div className="w-[84%] h-2.5 rounded" style={{ background: mock.skeleton }} />
                </div>

                {/* CTA buttons */}
                <div className="flex gap-3 pt-1 select-none">
                  <motion.div 
                    className="w-28 h-9 rounded bg-primary cursor-pointer"
                    whileHover={{ scale: 1.04, backgroundColor: "#1d4ed8", boxShadow: "0 4px 15px rgba(37,99,235,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  />
                  <motion.div 
                    className="w-24 h-9 rounded cursor-pointer" 
                    style={{ background: mock.skeletonAlt, border: `1px solid ${mock.border}` }}
                    whileHover={{ scale: 1.04, background: "rgba(0,0,0,0.04)" }}
                    whileTap={{ scale: 0.98 }}
                  />
                </div>

                {/* Service cards */}
                <div className="grid grid-cols-3 gap-3 pt-2 select-none">
                  {[
                    { tint: "rgba(37,99,235,0.14)", tintHover: "rgba(37,99,235,0.24)", glow: "rgba(37,99,235,0.35)" },
                    { tint: "rgba(16,185,129,0.14)", tintHover: "rgba(16,185,129,0.24)", glow: "rgba(16,185,129,0.35)" },
                    { tint: "rgba(139,92,246,0.14)", tintHover: "rgba(139,92,246,0.24)", glow: "rgba(139,92,246,0.35)" },
                  ].map((c, i) => (
                    <motion.div
                      key={i}
                      className="rounded-md p-3 flex items-center gap-2 cursor-pointer"
                      style={{ background: mock.skeletonAlt, border: `1px solid ${mock.border}` }}
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                        borderColor: c.glow,
                        boxShadow: "0 10px 25px -5px rgba(37,99,235,0.08), 0 8px 10px -6px rgba(37,99,235,0.08)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      {/* Left: Icon placeholder */}
                      <motion.div
                        className="w-8 h-8 rounded-sm shrink-0"
                        style={{ background: c.tint }}
                        whileHover={{ background: c.tintHover, scale: 1.08 }}
                      />
                      {/* Right: Text placeholder lines */}
                      <div className="flex-1 space-y-1.5 min-w-0">
                        <div className="w-full h-1.5 rounded-full animate-pulse" style={{ background: mock.skeleton }} />
                        <div className="w-[60%] h-1.5 rounded-full animate-pulse" style={{ background: mock.skeleton }} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating: Loyiha tugallandi */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, rotate: -2, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
              className="absolute -top-5 -left-8 px-4 py-2.5 rounded-md shadow-[0_8px_28px_rgba(0,0,0,0.12)] flex items-center gap-2 cursor-pointer transition-shadow"
              style={{ background: mock.floatBg, border: `1px solid ${mock.border}` }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-semibold whitespace-nowrap" style={{ color: mock.floatText }}>
                Loyiha tayyor!
              </span>
            </motion.div>

            {/* Floating: Stats */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              whileHover={{ scale: 1.1, rotate: 2, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
              className="absolute -bottom-5 -right-6 px-4 py-2.5 rounded-md shadow-[0_8px_28px_rgba(0,0,0,0.12)] flex items-center gap-2.5 cursor-pointer transition-shadow"
              style={{ background: mock.floatBg, border: `1px solid ${mock.border}` }}
            >
              <div className="w-7 h-7 rounded-full bg-mint/15 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4 text-mint" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs font-bold" style={{ color: mock.floatText }}>+340%</div>
                <div className="text-[10px]" style={{ color: mock.floatSub }}>Trafik oshdi</div>
              </div>
            </motion.div>


          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[11px] text-muted-foreground tracking-wider uppercase">Pastga</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-border/60 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

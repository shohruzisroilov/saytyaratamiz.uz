"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Star, Zap, Shield, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const TRUST_BADGES = [
  { icon: Zap, text: "Tez ishlash" },
  { icon: Shield, text: "SSL xavfsizlik" },
  { icon: Globe, text: "SEO ready" },
];

const TECH_TAGS = [
  { text: "Next.js", cls: "text-blue-500 border-blue-200 bg-blue-50 dark:border-blue-900/60 dark:bg-blue-950/30" },
  { text: "TypeScript", cls: "text-violet-500 border-violet-200 bg-violet-50 dark:border-violet-900/60 dark:bg-violet-950/30" },
  { text: "React", cls: "text-cyan-500 border-cyan-200 bg-cyan-50 dark:border-cyan-900/60 dark:bg-cyan-950/30" },
  { text: "Tailwind", cls: "text-teal-500 border-teal-200 bg-teal-50 dark:border-teal-900/60 dark:bg-teal-950/30" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Browser mockup colours — switch by theme
  const isDark = mounted && resolvedTheme === "dark";
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
      className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20"
      aria-label="Bosh sahifa"
    >
      {/* Background — very subtle */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-pattern opacity-60 dark:opacity-20" />
        {/* Blue glow top-left */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[100px]" />
        {/* Accent glow bottom-right */}
        <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[100px]" />
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
            {/* Badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
                <Star className="w-3 h-3 fill-current" />
                O&apos;zbekistonda №1 Veb Studio
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={item} className="space-y-3">
              <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-bold text-foreground leading-[1.12] tracking-[-0.02em]">
                Professional{" "}
                <span className="gradient-text">Sayt Yaratish</span>{" "}
                Xizmati
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[480px] mt-4">
                Korporativ sayt, internet do&apos;kon, landing page —
                barcha turdagi saytlarni{" "}
                <strong className="text-foreground font-semibold">tez, sifatli va arzon</strong>{" "}
                narxda yaratamiz.
              </p>
            </motion.div>

            {/* Trust badges */}
            <motion.ul variants={item} className="flex flex-wrap gap-4">
              {TRUST_BADGES.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="w-4 h-4 text-primary" />
                  {text}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/aloqa"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[12px] font-semibold text-white text-sm bg-primary hover:bg-primary-dark shadow-[0_4px_20px_rgba(37,99,235,0.28)] hover:shadow-[0_8px_28px_rgba(37,99,235,0.38)] transition-all duration-250 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Bepul Konsultatsiya
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/portfel"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[12px] font-semibold text-sm text-foreground border border-border hover:border-primary/40 hover:bg-muted/60 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-white dark:border-[#020817] flex items-center justify-center"
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
            aria-hidden="true"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-[24px] blur-3xl scale-110" />

            {/* Browser window */}
            <div
              className="relative rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
              style={{ border: `1px solid ${mock.border}` }}
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
                  className="flex-1 rounded-[7px] px-3 py-1.5 text-[11px] text-center"
                  style={{ background: mock.urlBg, border: `1px solid ${mock.border}`, color: mock.urlText }}
                >
                  saytyaratamiz.uz
                </div>
              </div>

              {/* Page content */}
              <div className="p-6 min-h-[340px] space-y-5" style={{ background: mock.windowBg }}>
                {/* Fake nav */}
                <div className="flex items-center justify-between mb-2">
                  <div className="w-20 h-5 rounded-[8px]" style={{ background: "rgba(37,99,235,0.20)" }} />
                  <div className="flex gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-3.5 rounded-[6px]" style={{ background: mock.skeleton }} />
                    ))}
                  </div>
                  <div className="w-16 h-7 rounded-[8px] bg-[#2563eb]" />
                </div>

                {/* Fake hero text */}
                <div className="space-y-2.5 pt-2">
                  <div className="w-[72%] h-7 rounded-[10px]" style={{ background: mock.heading }} />
                  <div className="w-[52%] h-7 rounded-[10px]" style={{ background: "rgba(37,99,235,0.18)" }} />
                  <div className="w-full h-2.5 rounded mt-3" style={{ background: mock.skeleton }} />
                  <div className="w-[84%] h-2.5 rounded" style={{ background: mock.skeleton }} />
                </div>

                {/* CTA buttons */}
                <div className="flex gap-3 pt-1">
                  <div className="w-28 h-9 rounded-[10px] bg-[#2563eb]" />
                  <div className="w-24 h-9 rounded-[10px]" style={{ background: mock.skeletonAlt, border: `1px solid ${mock.border}` }} />
                </div>

                {/* Service cards */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="rounded-[12px] p-3.5 space-y-2"
                      style={{ background: mock.skeletonAlt, border: `1px solid ${mock.border}` }}
                    >
                      <div className="w-8 h-8 rounded-[8px]" style={{ background: "rgba(37,99,235,0.14)" }} />
                      <div className="w-full h-2 rounded-full" style={{ background: mock.skeleton }} />
                      <div className="w-[65%] h-2 rounded-full" style={{ background: mock.skeleton }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating: Loyiha tugallandi */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -left-8 px-4 py-2.5 rounded-[12px] shadow-[0_8px_28px_rgba(0,0,0,0.12)] flex items-center gap-2"
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
              className="absolute -bottom-5 -right-6 px-4 py-2.5 rounded-[12px] shadow-[0_8px_28px_rgba(0,0,0,0.12)] flex items-center gap-2.5"
              style={{ background: mock.floatBg, border: `1px solid ${mock.border}` }}
            >
              <span className="text-base">📈</span>
              <div>
                <div className="text-xs font-bold" style={{ color: mock.floatText }}>+340%</div>
                <div className="text-[10px]" style={{ color: mock.floatSub }}>Trafik oshdi</div>
              </div>
            </motion.div>

            {/* Tech tags */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              {TECH_TAGS.map((tag, i) => (
                <motion.div
                  key={tag.text}
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
                  className={cn(
                    "px-3 py-1.5 rounded-[8px] border text-xs font-semibold whitespace-nowrap",
                    tag.cls
                  )}
                >
                  {tag.text}
                </motion.div>
              ))}
            </div>
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

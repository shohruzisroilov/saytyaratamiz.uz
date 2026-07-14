"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/90 dark:bg-[#020817]/90 backdrop-blur-xl border-b border-[#e8edf3] dark:border-[#1e2d3d] shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[64px] lg:h-[72px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group shrink-0"
              aria-label="SaytYaratamiz.uz bosh sahifasi"
            >
              <div className="relative w-8 h-8 lg:w-9 lg:h-9">
                <div className="absolute inset-0 bg-primary rounded-[10px] shadow-[0_4px_12px_rgba(37,99,235,0.25)] group-hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] transition-shadow duration-300" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">S</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-semibold text-foreground text-sm tracking-tight group-hover:text-primary transition-colors duration-200">
                  SaytYaratamiz
                </span>
                <span className="text-[11px] text-muted-foreground font-medium">.uz</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Asosiy navigatsiya">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-3.5 py-2 rounded-[10px] text-sm font-medium transition-all duration-200",
                      isActive
                        ? "text-primary"
                        : "text-foreground/65 hover:text-foreground hover:bg-muted/70"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 bg-primary/8 rounded-[10px]"
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2.5">
              <ThemeToggle />
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-[10px] text-sm font-medium text-foreground/65 hover:text-foreground border border-transparent hover:border-border transition-all duration-200"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
              <Link
                href="/aloqa"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-semibold text-white bg-primary hover:bg-primary-dark shadow-[0_2px_12px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_16px_rgba(37,99,235,0.4)] transition-all duration-200 hover:-translate-y-px"
              >
                Bepul Konsultatsiya
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="w-9 h-9 rounded-[10px] flex items-center justify-center bg-muted/70 hover:bg-muted transition-colors"
                aria-label={isMobileOpen ? "Menyuni yopish" : "Menyuni ochish"}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen
                  ? <X className="w-4.5 h-4.5 text-foreground" />
                  : <Menu className="w-4.5 h-4.5 text-foreground" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-background border-l border-border shadow-[−20px_0_60px_rgba(0,0,0,0.08)] lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileOpen(false)}>
                  <div className="w-8 h-8 bg-primary rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(37,99,235,0.25)]">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <span className="font-semibold text-foreground text-sm">SaytYaratamiz.uz</span>
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-8 h-8 rounded-[10px] bg-muted flex items-center justify-center hover:bg-border transition-colors"
                >
                  <X className="w-4 h-4 text-foreground" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto p-4" aria-label="Mobil navigatsiya">
                <div className="space-y-0.5">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.25 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center px-3.5 py-2.5 rounded-[10px] text-sm font-medium transition-all duration-200",
                          pathname === item.href
                            ? "bg-primary/8 text-primary"
                            : "text-foreground/70 hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-border space-y-2.5">
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-[10px] border border-border text-sm font-medium text-foreground/70 hover:border-primary/40 hover:text-primary transition-all"
                >
                  <Phone className="w-4 h-4" />
                  {SITE_CONFIG.phone}
                </a>
                <Link
                  href="/aloqa"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-[10px] bg-primary text-white text-sm font-semibold shadow-[0_2px_12px_rgba(37,99,235,0.3)] hover:bg-primary-dark transition-colors"
                >
                  Bepul Konsultatsiya
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

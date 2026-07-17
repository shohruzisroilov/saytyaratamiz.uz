"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, Minus, ArrowRight, Star, HelpCircle, Laptop, Settings, Clock } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH, REVEAL_VIEWPORT } from "@/lib/motion";

// Comparison table raw data
const COMPARISON_FEATURES = [
  { name: "Dizayn turi", landing: "Individual", corporate: "Eksklyuziv", ecommerce: "Eksklyuziv", crm: "Biznes dizayn", bot: "Web-App / UI", seo: "N/A" },
  { name: "Admin panel", landing: "Yo'q", corporate: "Ha (Qulay)", ecommerce: "Ha (Maxsus)", crm: "Ha (To'liq panel)", bot: "Ha (Panel)", seo: "N/A" },
  { name: "Online to'lov (Payme/Click)", landing: "Yo'q", corporate: "Yo'q", ecommerce: "Ha (Integratsiya)", crm: "Ha (Sinchron)", bot: "Ha (Integratsiya)", seo: "N/A" },
  { name: "Ko'p tilli versiya", landing: "Yo'q", corporate: "Ha (UZ/RU/EN)", ecommerce: "Ha (UZ/RU/EN)", crm: "Ha (2 ta til)", bot: "Ha (2 ta til)", seo: "N/A" },
  { name: "Ma'lumotlar bazasi", landing: "Yo'q", corporate: "Ha (MySQL/PG)", ecommerce: "Ha (MySQL/PG)", crm: "Ha (Bulutli)", bot: "Ha (MongoDB)", seo: "N/A" },
  { name: "Telegram xabarnomalar", landing: "Ha", corporate: "Yo'q", ecommerce: "Ha", crm: "Ha", bot: "Ha", seo: "N/A" },
  { name: "SEO sozlamalari", landing: "Boshlang'ich", corporate: "Batafsil", ecommerce: "Batafsil", crm: "Yo'q", bot: "Yo'q", seo: "Maksimal" },
  { name: "Bepul texnik yordam", landing: "1 oy", corporate: "3 oy", ecommerce: "3 oy", crm: "6 oy", bot: "1 oy", seo: "Doimiy" },
];

interface PricingSectionProps {
  showHeader?: boolean;
}

export function PricingSection({ showHeader = true }: PricingSectionProps) {
  const [activeTab, setActiveTab] = useState<"web" | "systems">("web");

  const webPlans = PRICING_PLANS.filter((p) => ["landing", "corporate", "ecommerce"].includes(p.id));
  const systemPlans = PRICING_PLANS.filter((p) => ["crm", "bot", "seo"].includes(p.id));
  const activePlans = activeTab === "web" ? webPlans : systemPlans;

  return (
    <section
      className="py-20 lg:py-28 bg-background"
      id="narxlar"
      {...(showHeader ? { "aria-labelledby": "pricing-heading" } : { "aria-label": "Narxlar" })}
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        {showHeader && (
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
              Tariflar va narxlar
            </span>
            <h2 id="pricing-heading" className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-foreground tracking-[-0.02em]">
              Shaffof va <span className="gradient-text">Raqobatbardosh</span> Tariflar
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              Ehtiyojingizga mos paketni tanlang — barcha narxlar aniq, yashirin to&apos;lov yo&apos;q.
            </p>
          </div>
        )}

        {/* Tabs Control */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-muted/60 border border-border">
            <button type="button"
              onClick={() => setActiveTab("web")}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                activeTab === "web"
                  ? "bg-background text-primary shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Laptop className="w-4 h-4 inline-block -mt-0.5 mr-1.5" aria-hidden="true" />
              Veb-saytlar
            </button>
            <button type="button"
              onClick={() => setActiveTab("systems")}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                activeTab === "systems"
                  ? "bg-background text-primary shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Settings className="w-4 h-4 inline-block -mt-0.5 mr-1.5" aria-hidden="true" />
              Tizimlar & SEO
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-20">
          {activePlans.map((plan, index) => (
            <motion.article
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={REVEAL_VIEWPORT}
              transition={{ duration: 0.65, delay: index * 0.07, ease: EASE_SMOOTH }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: EASE_SMOOTH } }}
              className={cn(
                "relative flex flex-col rounded-3xl bg-card p-6 sm:p-8 transition-shadow duration-300",
                plan.popular
                  ? "shadow-[0_20px_40px_rgba(37,99,235,0.1)] ring-1 ring-primary/25 scale-[1.02] md:scale-[1.03]"
                  : "shadow-card hover:shadow-card-hover"
              )}
            >
              {/* Popular Recommended Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold bg-primary text-white shadow-[0_4px_16px_rgba(37,99,235,0.3)] tracking-wide uppercase">
                    <Star className="w-3 h-3 fill-current" aria-hidden="true" />
                    Tavsiya etiladi
                  </span>
                </div>
              )}

              {/* Plan Metadata */}
              <div className="mb-6">
                <h3 className="font-display font-bold text-foreground text-xl tracking-tight mb-1">{plan.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed min-h-[32px]">{plan.description}</p>
              </div>

              {/* Timeframe & Price */}
              <div className="mb-6 pb-6 border-b border-border space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-[2.2rem] font-black text-foreground tracking-[-0.03em] tabular-nums">
                    {plan.price}
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">
                    {plan.id === "seo" ? "so'm / oydan" : "so'mdan"}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted/65 text-[11px] font-semibold text-foreground/80 border border-border/60">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  Muddat: <span className="text-primary font-bold">{plan.duration}</span>
                </div>
              </div>

              {/* Features Included List */}
              <div className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">{f}</span>
                  </div>
                ))}
                {plan.notIncluded?.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 opacity-40">
                    <Minus className="w-4.5 h-4.5 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground line-through">{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/aloqa"
                className={cn(
                  "flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary-dark shadow-[0_6px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)]"
                    : "border border-border hover:border-primary/45 text-foreground hover:text-primary hover:bg-primary/4"
                )}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Feature Comparison Table Title */}
        <div className="max-w-2xl mx-auto text-center mb-8 space-y-2">
          <h3 className="font-display text-xl font-bold text-foreground tracking-tight">Tariflarni batafsil taqqoslash</h3>
          <p className="text-xs text-muted-foreground">O&apos;zingizga mos yechimni to&apos;liq xususiyatlar jadvalidan tanlab oling.</p>
        </div>

        {/* Responsive Comparison Table Wrapper */}
        <div className="w-full overflow-x-auto rounded-2xl border border-border bg-card shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <table className="w-full border-collapse text-left min-w-[700px]">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="p-4 sm:p-5 text-sm font-bold text-foreground">Imkoniyatlar</th>
                <th className="p-4 text-xs font-bold text-foreground text-center">Landing Page</th>
                <th className="p-4 text-xs font-bold text-primary text-center bg-primary/4">Korporativ</th>
                <th className="p-4 text-xs font-bold text-foreground text-center">Do&apos;kon</th>
                <th className="p-4 text-xs font-bold text-foreground text-center">CRM</th>
                <th className="p-4 text-xs font-bold text-foreground text-center">Telegram Bot</th>
                <th className="p-4 text-xs font-bold text-foreground text-center">SEO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {COMPARISON_FEATURES.map((feature, i) => (
                <tr key={i} className="hover:bg-muted/10 transition-colors">
                  <td className="p-4 sm:p-5 text-sm font-medium text-foreground">{feature.name}</td>
                  <td className="p-4 text-xs text-center text-muted-foreground">{feature.landing}</td>
                  <td className="p-4 text-xs text-center font-semibold text-primary bg-primary/4">{feature.corporate}</td>
                  <td className="p-4 text-xs text-center text-muted-foreground">{feature.ecommerce}</td>
                  <td className="p-4 text-xs text-center text-muted-foreground">{feature.crm}</td>
                  <td className="p-4 text-xs text-center text-muted-foreground">{feature.bot}</td>
                  <td className="p-4 text-xs text-center text-muted-foreground">{feature.seo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Support Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 p-6 rounded-2xl bg-muted/30 border border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center text-primary">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Sizga maxsus yoki murakkab loyiha kerakmi?</p>
              <p className="text-xs text-muted-foreground mt-0.5">Biznes talablaringizga asosan butunlay individual narx belgilashimiz mumkin.</p>
            </div>
          </div>
          <Link
            href="/aloqa"
            className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold text-xs transition-colors shadow-[0_4px_12px_rgba(37,99,235,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Bepul loyiha smetasi
          </Link>
        </div>

      </div>
    </section>
  );
}

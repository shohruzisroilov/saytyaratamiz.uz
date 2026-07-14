"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Minus, ArrowRight } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-background" aria-labelledby="pricing-heading" id="narxlar">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto text-center mb-14 lg:mb-16 space-y-4"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
            Narxlar
          </span>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-foreground tracking-[-0.02em]">
            Shaffof Narx Siyosati
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Yashirin to&apos;lovlarsiz. Narxga nima kirishini oldindan bilasiz.
            Individual loyihalar uchun alohida hisob-kitob qilinadi.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 items-start">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className={cn(
                "relative flex flex-col rounded-[20px] border bg-card",
                plan.popular
                  ? "border-primary/30 shadow-[0_0_0_1px_rgba(37,99,235,0.1),0_16px_48px_rgba(37,99,235,0.1)] md:scale-[1.02]"
                  : "border-border hover:border-primary/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-all duration-300"
              )}
            >
              {/* Popular ribbon */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-primary text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)] whitespace-nowrap">
                    ✦ Eng Mashhur Tanlov
                  </span>
                </div>
              )}

              <div className="p-6 lg:p-7 flex flex-col flex-1">
                {/* Plan name */}
                <div className="mb-6">
                  <h3 className="font-bold text-foreground text-lg mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[2.4rem] font-black text-foreground tracking-[-0.03em]">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">so&apos;mdan</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1">Bir martalik to&apos;lov</p>
                </div>

                {/* Features */}
                <div className="flex-1 space-y-2.5 mb-7">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{f}</span>
                    </div>
                  ))}
                  {plan.notIncluded?.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 opacity-40">
                      <Minus className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/aloqa"
                  className={cn(
                    "flex items-center justify-center gap-2 py-3 rounded-[12px] font-semibold text-sm transition-all duration-200",
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary-dark shadow-[0_4px_16px_rgba(37,99,235,0.28)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.38)] hover:-translate-y-px"
                      : "border border-border hover:border-primary/40 text-foreground hover:text-primary"
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Katta korporativ loyiha uchun?{" "}
          <Link href="/aloqa" className="text-primary font-semibold hover:underline">
            Individual narx so&apos;rang →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}

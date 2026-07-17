"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2, ShoppingCart, LayoutTemplate,
  Code2, TrendingUp, RefreshCw,
  CheckCircle2, ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

const ICON_MAP: Record<string, React.ElementType> = {
  Building2, ShoppingCart, LayoutTemplate, Code2, TrendingUp, RefreshCw,
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15 tracking-wide">
      {children}
    </span>
  );
}

const CHIP_COLORS = [
  "bg-primary/10 text-primary group-hover:bg-primary/15",
  "bg-mint/10 text-mint group-hover:bg-mint/15",
  "bg-lavender/10 text-lavender group-hover:bg-lavender/15",
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = ICON_MAP[service.icon] || Code2;
  const chipColor = CHIP_COLORS[index % CHIP_COLORS.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "relative flex flex-col rounded-2xl p-6 bg-card shadow-card",
        "hover:shadow-card-hover hover:-translate-y-0.5",
        "transition-all duration-300 group",
        service.popular && "ring-1 ring-primary/20"
      )}
    >
      {service.popular && (
        <div className="absolute -top-3 left-5">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-primary text-white shadow-[0_4px_12px_rgba(37,99,235,0.3)]">
            Eng Mashhur
          </span>
        </div>
      )}

      {/* Icon */}
      <div className={cn(
        "w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300",
        chipColor
      )}>
        <Icon className="w-5 h-5" />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-3">
        <h3 className="font-display font-semibold text-foreground text-[15px] leading-tight group-hover:text-primary transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5 pt-1" aria-label={`${service.title} xususiyatlari`}>
          {service.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-5 mt-5 border-t border-border">
        {service.price ? (
          <div>
            <span className="text-[11px] text-muted-foreground">dan boshlab</span>
            <p className="font-bold text-foreground text-sm mt-0.5">
              {service.price}{" "}
              <span className="text-xs font-normal text-muted-foreground">so&apos;m</span>
            </p>
          </div>
        ) : <div />}

        <Link
          href={`/xizmatlar/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark group/link transition-colors"
        >
          Batafsil
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-background" aria-labelledby="services-heading" id="xizmatlar">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto text-center mb-14 lg:mb-16 space-y-4"
        >
          <SectionLabel>Bizning Xizmatlar</SectionLabel>
          <h2 id="services-heading" className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-foreground tracking-[-0.02em]">
            Qanday Sayt Kerak?
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Har qanday turdagi sayt va ilovani professional darajada yaratamiz — narx-sifat nisbati eng yaxshisi.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Kerakli xizmatni topa olmadingizmi?
          </p>
          <Link
            href="/aloqa"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 text-primary font-semibold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 hover:shadow-[0_4px_16px_rgba(37,99,235,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Biz bilan bog&apos;laning
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare, FileText, Palette, Code2, TestTube2, Rocket,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Konsultatsiya",
    desc: "Loyiha maqsadi, talablar va muddatni bepul konsultatsiyada aniqlaymiz.",
    color: "bg-primary/10 text-primary",
    badge: "bg-primary",
  },
  {
    num: "02",
    icon: FileText,
    title: "Texnik Vazifa",
    desc: "Talablarni yozma shaklga o'tkazamiz — narx va muddat aniq belgilanadi.",
    color: "bg-lavender/10 text-lavender",
    badge: "bg-lavender",
  },
  {
    num: "03",
    icon: Palette,
    title: "Dizayn",
    desc: "Figma'da dizayn tayyorlaymiz, tasdiqlaguningizcha tahrirlaymiz.",
    color: "bg-mint/10 text-mint",
    badge: "bg-mint",
  },
  {
    num: "04",
    icon: Code2,
    title: "Dasturlash",
    desc: "Tasdiqlangan dizayn asosida zamonaviy texnologiyalar bilan saytni quramiz.",
    color: "bg-primary/10 text-primary",
    badge: "bg-primary",
  },
  {
    num: "05",
    icon: TestTube2,
    title: "Test",
    desc: "Barcha qurilmalarda sinab, xatolarni bartaraf etamiz.",
    color: "bg-lavender/10 text-lavender",
    badge: "bg-lavender",
  },
  {
    num: "06",
    icon: Rocket,
    title: "Ishga Tushirish",
    desc: "Saytni domenga joylashtirib, qo'llanma va 3 oy bepul yordam beramiz.",
    color: "bg-mint/10 text-mint",
    badge: "bg-mint",
  },
];

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-surface" aria-labelledby="process-heading">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="max-w-xl mx-auto text-center mb-14 lg:mb-16 space-y-4"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
            Ish Jarayoni
          </span>
          <h2 id="process-heading" className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-foreground tracking-[-0.02em]">
            Qanday Ishlayamiz?
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Oddiy va shaffof jarayon — har bir bosqich siz bilan kelishiladi.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden"
              >
                {/* Step number — small filled badge */}
                <span className={cn(
                  "absolute top-5 right-5 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white select-none",
                  step.badge
                )}>
                  {index + 1}
                </span>

                {/* Icon */}
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-5", step.color)}>
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-display font-semibold text-foreground text-[15px] mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed pr-8">{step.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

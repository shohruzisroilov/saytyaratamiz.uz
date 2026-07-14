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
    desc: "Bepul konsultatsiya o'tkazamiz. Loyiha maqsadlari, talablar va muddatlarni aniqlaymiz.",
    color: "bg-blue-500/8 text-blue-500",
  },
  {
    num: "02",
    icon: FileText,
    title: "Texnik Vazifa",
    desc: "Barcha talablarni yozma shaklda rasmiylashtiramiz. Narx va muddat belgilanadi.",
    color: "bg-violet-500/8 text-violet-500",
  },
  {
    num: "03",
    icon: Palette,
    title: "Dizayn",
    desc: "Figma'da prototip va dizayn tayyorlaymiz. Siz tasdiqlaguningizcha tahrirlanadi.",
    color: "bg-pink-500/8 text-pink-500",
  },
  {
    num: "04",
    icon: Code2,
    title: "Dasturlash",
    desc: "Tasdiqlangan dizayn asosida zamonaviy texnologiyalar bilan saytni quramiz.",
    color: "bg-orange-500/8 text-orange-500",
  },
  {
    num: "05",
    icon: TestTube2,
    title: "Test",
    desc: "Barcha qurilmalarda test qilamiz. Xato va kamchiliklarni bartaraf etamiz.",
    color: "bg-teal-500/8 text-teal-500",
  },
  {
    num: "06",
    icon: Rocket,
    title: "Ishga Tushirish",
    desc: "Saytni domenga joylashtiramiz. Qo'llanma va 3 oy bepul qo'llab-quvvatlash beramiz.",
    color: "bg-green-500/8 text-green-500",
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
          <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-foreground tracking-[-0.02em]">
            Qanday Ishlayamiz?
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Oddiy va shaffof jarayon. Har bir bosqich siz bilan kelishilgan holda amalga oshiriladi.
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
                className="relative p-6 rounded-[16px] border border-border bg-card hover:border-primary/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-all duration-300 group overflow-hidden"
              >
                {/* Step number — large background */}
                <span className="absolute top-4 right-5 text-[52px] font-black text-border/60 select-none leading-none group-hover:text-primary/8 transition-colors duration-300">
                  {step.num}
                </span>

                {/* Icon */}
                <div className={cn("w-10 h-10 rounded-[10px] flex items-center justify-center mb-5", step.color)}>
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-semibold text-foreground text-[15px] mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed pr-8">{step.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

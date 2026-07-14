"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function FAQItem({
  question, answer, isOpen, onToggle, index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        "rounded-[14px] border overflow-hidden transition-all duration-200",
        isOpen
          ? "border-primary/25 shadow-[0_4px_20px_rgba(37,99,235,0.06)]"
          : "border-border hover:border-primary/15"
      )}
    >
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-5 py-4 text-left bg-card hover:bg-muted/40 transition-colors duration-150"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-foreground text-sm sm:text-[15px] pr-6 leading-snug">
          {question}
        </span>
        <span className={cn(
          "w-6 h-6 rounded-full border border-border flex items-center justify-center shrink-0 transition-all duration-300",
          isOpen && "bg-primary border-primary text-white rotate-45"
        )}>
          <Plus className="w-3 h-3" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 bg-card">
              <p className="text-sm text-muted-foreground leading-relaxed border-t border-border/60 pt-4">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-surface" aria-labelledby="faq-heading">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="text-center mb-12 space-y-4"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
              Ko&apos;p So&apos;raladigan Savollar
            </span>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-foreground tracking-[-0.02em]">
              Savollaringiz Bormi?
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg">
              Eng ko&apos;p so&apos;raladigan savollarga javoblar. Boshqa savollar uchun biz bilan bog&apos;laning.
            </p>
          </motion.div>

          {/* FAQ list */}
          <div className="space-y-2.5">
            {FAQS.map((faq, index) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

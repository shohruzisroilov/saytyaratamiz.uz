"use client";

import { motion } from "framer-motion";

const COMPANIES = [
  {
    name: "NovaPay",
    desc: "To'lov tizimi",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11h.01M16 11h.01M8 11h.01" />
      </svg>
    ),
  },
  {
    name: "TerraBuild",
    desc: "Sanoat va qurilish",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: "AlphaTech",
    desc: "Raqamli yechimlar",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "TaxFlow",
    desc: "Moliya integratsiyasi",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: "EcoMarket",
    desc: "Chakana savdo",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: "SkyCloud",
    desc: "Bulutli texnologiyalar",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

export function TrustedCompanies() {
  return (
    <section className="py-12 bg-muted/40 border-y border-border overflow-hidden" aria-label="Bizga ishonch bildirgan brendlar">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          O&apos;zbekiston bo&apos;ylab 120+ dan ortiq kompaniya va startaplar ishonchi
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-center">
          {COMPANIES.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col items-center justify-center text-center p-3 rounded-[12px] bg-background/50 border border-border/50 hover:border-primary/25 hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:bg-background transition-all duration-300 group cursor-default"
            >
              <div className="w-9 h-9 rounded-[8px] bg-muted/80 flex items-center justify-center text-muted-foreground group-hover:bg-primary/8 group-hover:text-primary transition-colors duration-300 mb-2">
                {company.icon}
              </div>
              <span className="font-bold text-foreground/80 group-hover:text-foreground text-[13px] tracking-tight transition-colors">
                {company.name}
              </span>
              <span className="text-[10px] text-muted-foreground mt-0.5 font-medium group-hover:text-muted-foreground/80 transition-colors">
                {company.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

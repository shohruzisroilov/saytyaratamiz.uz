"use client";

import { motion } from "framer-motion";
import { Zap, Search, Eye, ShieldCheck, Smartphone, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const CHIP_COLORS = [
  "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white",
  "bg-mint/10 text-mint group-hover:bg-mint group-hover:text-white",
  "bg-lavender/10 text-lavender group-hover:bg-lavender group-hover:text-white",
];

const BENEFITS = [
  {
    icon: Zap,
    title: "Maksimal tezlik va hosildorlik",
    desc: "Saytlarimiz Next.js va React kabi eng zamonaviy texnologiyalardan foydalanib quriladi. Bu esa 1 soniyadan kam yuklanish vaqti va Google PageSpeed testlarida 95+ natijani kafolatlaydi.",
  },
  {
    icon: Search,
    title: "Chuqur va professional SEO",
    desc: "Metadata API, JSON-LD schema, Breadcrumb va sitemap fayllari birinchi kundan boshlab standart bo'yicha qo'shiladi. Saytingiz Google qidiruv tizimida tez va samarali indekslanadi.",
  },
  {
    icon: Eye,
    title: "Mutlaqo shaffof va aniq shartlar",
    desc: "Loyihaning aniq narxi va topshirilish muddati texnik topshiriqda belgilab olinadi. Biznesingiz uchun hech qanday yashirin to'lovlar yoki asossiz kechikishlar bo'lmaydi.",
  },
  {
    icon: ShieldCheck,
    title: "3 oylik bepul texnik yordam",
    desc: "Saytingiz topshirilgandan so'ng ham sizni yolg'iz qoldirmaymiz. Tizim xavfsizligini ta'minlash, backup olish va kichik o'zgarishlar kiritish 3 oy davomida bepul bajariladi.",
  },
  {
    icon: Smartphone,
    title: "100% mobil va responsive UI/UX",
    desc: "Barcha saytlarimiz telefonlar, planshetlar va noutbuklar uchun mukammal moslashgan. Foydalanuvchilarga saytdan foydalanishda maksimal qulaylik yaratiladi.",
  },
  {
    icon: TrendingUp,
    title: "Biznes natijalariga yo'naltirilganlik",
    desc: "Biz shunchaki chiroyli kod yozmaymiz. Har bir tugma, forma va kontent bloki mijozlarni jalb qilish va onlayn savdolaringizni oshirish maqsadida maxsus loyihalashtiriladi.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface-elevated" aria-labelledby="why-us-heading">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16 space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15 tracking-wide">
            Nima uchun biz?
          </span>
          <h2 id="why-us-heading" className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-foreground tracking-[-0.02em]">
            Biznesingizni <span className="gradient-text">Raqamli Dunyoda</span> Rivojlantiring
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Biz professional yondashuv, yuksak texnologik sifat va tezkor qo&apos;llab-quvvatlashni yagona tizimda jamlaymiz.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            const chip = CHIP_COLORS[i % CHIP_COLORS.length];
            return (
              <motion.article
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="p-6 sm:p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300", chip)}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-3 tracking-tight group-hover:text-primary transition-colors duration-200">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {b.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

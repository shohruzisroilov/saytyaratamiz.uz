import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, Globe, Shield, BarChart2, Users, Search } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Korporativ Sayt Yaratish — Kompaniyangiz Imijini Kuchaytiring",
  description:
    "Kompaniyangiz uchun professional korporativ veb-sayt. Brend identifikatsiyasi, SEO, admin panel, ko'p tilli versiya. Narx 1 500 000 so'mdan. 10–15 kunda tayyor.",
  alternates: { canonical: `${SITE_CONFIG.url}/xizmatlar/korporativ-sayt` },
  keywords: ["korporativ sayt", "kompaniya sayt yaratish", "biznes sayt", "professional sayt O'zbekiston"],
};

const FEATURES = [
  "Brend identifikatsiyasi va dizayn",
  "10 sahifagacha (bosh, xizmatlar, haqimizda, aloqa...)",
  "Admin panel — kontentni o'zingiz boshqaring",
  "SEO optimizatsiya (on-page + texnik)",
  "Ko'p tilli versiya (UZ/RU/EN)",
  "Forma va callback tizimi",
  "Google Analytics va Search Console",
  "Mobil responsive dizayn",
  "SSL sertifikat va xavfsizlik",
  "6 oy texnik qo'llab-quvvatlash",
];

const INDUSTRIES = [
  { emoji: "🏥", label: "Tibbiyot klinikaları" },
  { emoji: "⚖️", label: "Yuridik firmalar" },
  { emoji: "🏗️", label: "Qurilish kompaniyalari" },
  { emoji: "🎓", label: "Ta'lim muassasalari" },
  { emoji: "🏦", label: "Moliya va bank" },
  { emoji: "🍽️", label: "Restoran va kafeler" },
  { emoji: "💆", label: "Go'zallik salonlari" },
  { emoji: "🚗", label: "Avtomobil servis" },
  { emoji: "🏠", label: "Ko'chmas mulk" },
  { emoji: "📦", label: "Logistika va yetkazib berish" },
  { emoji: "💻", label: "IT kompaniyalar" },
  { emoji: "🌿", label: "Ekologiya va agro" },
];

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Korporativ Sayt Yaratish",
    description: "Kompaniyalar uchun professional korporativ veb-sayt yaratish xizmati",
    provider: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    offers: { "@type": "Offer", price: "1500000", priceCurrency: "UZS" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function KorporativSaytPage() {
  return (
    <>
      <JsonLd />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
              Xizmat — Korporativ Sayt
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-[-0.02em]">
              Kompaniyangiz Imijini{" "}
              <span className="gradient-text">Kuchaytiring</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Birinchi taassurot muhim. Professional korporativ sayt yangi mijozlar jalb qiladi,
              ishonch uyg'otadi va brendingizni yuksaltiradi. Narx{" "}
              <strong className="text-foreground">1 500 000 so'mdan</strong> boshlanadi.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="/aloqa" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] bg-primary text-white font-semibold text-sm shadow-[0_4px_16px_rgba(37,99,235,0.28)] hover:bg-primary-dark transition-all duration-200 hover:-translate-y-px">
                Bepul Maslahat Olish
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/portfel" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] border border-border text-foreground font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all duration-200">
                Namunalarni Ko'rish
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features included */}
      <section className="py-16 bg-surface" aria-labelledby="features-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-3xl">
          <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold text-foreground tracking-[-0.02em] text-center mb-10">
            Korporativ saytga nima kiradi?
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {FEATURES.map((f) => (
              <div key={f} className="flex items-center gap-3 p-4 rounded-[12px] bg-card border border-border hover:border-primary/20 transition-colors duration-200">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-sm font-medium text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-background" aria-labelledby="industries-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <h2 id="industries-heading" className="text-2xl sm:text-3xl font-bold text-foreground tracking-[-0.02em] text-center mb-10">
            Qaysi soha uchun?
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {INDUSTRIES.map((ind) => (
              <div key={ind.label} className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-muted/40 text-sm font-medium text-foreground hover:border-primary/30 transition-colors duration-200">
                <span>{ind.emoji}</span>
                {ind.label}
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6">va boshqa barcha sohalar uchun</p>
        </div>
      </section>

      {/* Price */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-lg mx-auto">
          <div className="rounded-[20px] border border-primary/20 bg-card p-8 text-center shadow-[0_8px_32px_rgba(37,99,235,0.08)]">
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider font-medium">Narx</p>
            <p className="text-[2.6rem] font-black text-foreground tracking-[-0.03em]">
              1 500 000{" "}
              <span className="text-base font-normal text-muted-foreground">so'mdan</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2 mb-6">10–15 ish kunida topshiriladi · 6 oy qo'llab-quvvatlash</p>
            <Link href="/aloqa" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] bg-primary text-white font-semibold text-sm w-full justify-center shadow-[0_4px_16px_rgba(37,99,235,0.28)] hover:bg-primary-dark transition-all duration-200">
              Buyurtma Berish
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

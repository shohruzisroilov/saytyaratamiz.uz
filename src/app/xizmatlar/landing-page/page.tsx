import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Target, Zap, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Landing Page Yaratish — Yuqori Konversiyali Bir Sahifali Sayt",
  description:
    "Reklama kampaniyalari uchun yuqori konversiyali landing page yaratish. 3-5 ish kunida tayyor, A/B testing, Payme/Click integratsiya. Narx 1 200 000 so'mdan.",
  alternates: { canonical: `${SITE_CONFIG.url}/xizmatlar/landing-page` },
  keywords: ["landing page yaratish", "bir sahifali sayt", "konversiya", "reklama sayt", "landing page narxi"],
};

const FEATURES = [
  "Yuqori konversiyali dizayn",
  "3-5 ish kunida topshirish",
  "Tez yuklash (1 soniyadan kam)",
  "Payme / Click forma integratsiya",
  "Google Analytics ulanishi",
  "A/B testing imkoniyati",
  "Mobil responsive",
  "SEO meta teglar",
  "3 oy bepul texnik yordam",
  "Reklama pikseli (Facebook, Google)",
];

const USE_CASES = [
  { emoji: "🎯", title: "Mahsulot taqdimoti", desc: "Yangi mahsulot yoki xizmatni bozorga chiqarish uchun." },
  { emoji: "📦", title: "Oʻtkazish aksiyasi", desc: "Chegirma va aksiyalarni keng auditoriyaga yetkazish." },
  { emoji: "📞", title: "Lead generatsiya", desc: "Potensial mijozlar kontaktlarini to'plash." },
  { emoji: "🏆", title: "Event registration", desc: "Konferensiya, seminar va onlayn tadbirlar uchun." },
  { emoji: "💼", title: "Franchise taklif", desc: "Franchise yoki hamkorlik taklifini taqdim etish." },
  { emoji: "🛍️", title: "Maxsus taklif", desc: "Black Friday, yangi yil va boshqa maxsus takliflar." },
];

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: SITE_CONFIG.url },
          { "@type": "ListItem", position: 2, name: "Xizmatlar", item: `${SITE_CONFIG.url}/xizmatlar` },
          { "@type": "ListItem", position: 3, name: "Landing Page", item: `${SITE_CONFIG.url}/xizmatlar/landing-page` },
        ],
      },
      {
        "@type": "Service",
        name: "Landing Page Yaratish",
        description: "Yuqori konversiyali bir sahifali sayt yaratish xizmati",
        provider: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        offers: { "@type": "Offer", price: "1200000", priceCurrency: "UZS" },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function LandingPagePage() {
  return (
    <>
      <JsonLd />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
                Xizmat — Landing Page
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-[-0.02em] leading-tight">
                Yuqori Konversiyali{" "}
                <span className="gradient-text">Landing Page</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Reklama byudjetingizdan maksimal natija oling. Har bir element
                faqat bitta maqsadga — <strong className="text-foreground">tashrif buyuruvchini mijozga aylantirish</strong>ga
                xizmat qiladi.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-2">
                {[
                  { val: "40%", label: "O'rtacha konversiya o'sishi" },
                  { val: "3 kun", label: "Yaratish muddati" },
                  { val: "1.2M", label: "So'mdan boshlab" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-3 rounded-[12px] bg-muted/40 border border-border">
                    <p className="font-black text-primary text-lg tracking-[-0.02em]">{s.val}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Link href="/aloqa" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] bg-primary text-white font-semibold text-sm shadow-[0_4px_16px_rgba(37,99,235,0.28)] hover:bg-primary-dark transition-all duration-200 hover:-translate-y-px">
                  Buyurtma berish
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/loyihalar" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] border border-border text-foreground font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all duration-200">
                  Namunalar
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="w-full max-w-[340px] rounded-[20px] border border-border bg-card shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
                <div className="bg-muted/60 px-4 py-3 flex items-center gap-2 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                </div>
                <div className="p-6 space-y-4 bg-white dark:bg-[#0d1526]">
                  <div className="w-3/4 h-6 bg-foreground/8 rounded-[8px]" />
                  <div className="w-1/2 h-6 bg-primary/20 rounded-[8px]" />
                  <div className="space-y-1.5">
                    <div className="w-full h-2.5 bg-muted rounded" />
                    <div className="w-5/6 h-2.5 bg-muted rounded" />
                  </div>
                  <div className="w-32 h-10 bg-primary rounded-[10px]" />
                  <div className="pt-4 border-t border-border space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-500/20" />
                        <div className="flex-1 h-2.5 bg-muted rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2.5 rounded-[12px] bg-white dark:bg-[#162032] border border-border shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-bold text-foreground">+40% konversiya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 bg-surface" aria-labelledby="usecases-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <h2 id="usecases-heading" className="text-2xl sm:text-3xl font-bold text-foreground tracking-[-0.02em] text-center mb-10">
            Kim uchun kerak?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {USE_CASES.map((u) => (
              <div key={u.title} className="flex items-start gap-4 p-5 rounded-[16px] bg-card border border-border hover:border-primary/20 transition-colors duration-200">
                <span className="text-2xl">{u.emoji}</span>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{u.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background" aria-labelledby="features-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-3xl">
          <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold text-foreground tracking-[-0.02em] mb-8">
            Narxga nima kiradi?
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {FEATURES.map((f) => (
              <div key={f} className="flex items-center gap-3 p-4 rounded-[12px] bg-muted/40 border border-border">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-sm font-medium text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

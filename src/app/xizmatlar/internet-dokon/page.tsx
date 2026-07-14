import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShoppingCart, CreditCard, Package, BarChart2, Users, Truck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Internet Do'kon Yaratish — O'zbekistonda Online Savdo Boshlang",
  description:
    "Professional internet do'kon yaratish: Payme/Click to'lov, mahsulot katalogi, buyurtma boshqaruvi, CRM integratsiya. Narx 3 000 000 so'mdan. 20–30 kunda tayyor.",
  alternates: { canonical: `${SITE_CONFIG.url}/xizmatlar/internet-dokon` },
  keywords: ["internet do'kon yaratish", "online do'kon", "e-commerce O'zbekiston", "Payme integratsiya", "online savdo"],
};

const FEATURES = [
  "Cheksiz mahsulot katalogi",
  "Payme, Click, Uzcard, Humo to'lov",
  "Buyurtma boshqaruvi paneli",
  "Ombor va inventar hisobi",
  "Mijozlar kabineti (ro'yxatdan o'tish)",
  "Savatchaga qo'shish va wishlist",
  "Qidiruv va filtr tizimi",
  "Mahsulot sharhlari va reyting",
  "Chegirma va promo-kod tizimi",
  "SMS va email bildirishnoma",
  "1 yil texnik qo'llab-quvvatlash",
  "Google Shopping integratsiya",
];

const BENEFITS = [
  { icon: CreditCard, title: "Onlayn to'lov", desc: "Payme, Click, Uzcard — O'zbekistonda eng keng ishlatiladigan to'lov tizimlari." },
  { icon: Package, title: "Ombor boshqaruvi", desc: "Qolgan mahsulotlar, kirish-chiqish va avtomatik ogohlantirishlar." },
  { icon: BarChart2, title: "Savdo analitikasi", desc: "Qaysi mahsulot ko'proq sotilayotgani, trafik va konversiya ko'rsatkichlari." },
  { icon: Users, title: "Mijozlar bazasi", desc: "Ro'yxatdan o'tgan mijozlar, buyurtmalar tarixi va repeat purchase." },
  { icon: Truck, title: "Yetkazib berish", desc: "Shahar bo'yicha va mintaqaviy yetkazib berish narxlari boshqaruvi." },
  { icon: ShoppingCart, title: "Mobil app ready", desc: "iOS va Android ilovalariga API orqali ulash imkoni." },
];

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Internet Do'kon Yaratish",
    description: "To'liq funksional e-commerce sayt yaratish xizmati",
    provider: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    offers: { "@type": "Offer", price: "3000000", priceCurrency: "UZS" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function InternetDokonPage() {
  return (
    <>
      <JsonLd />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
              Xizmat — Internet Do'kon
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-[-0.02em]">
              O'zbekistonda{" "}
              <span className="gradient-text">Online Savdo</span>{" "}
              Boshlang
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Mahsulotlaringizni 24/7 onlayn soting. To'liq funksional internet do'kon:
              Payme/Click to'lov, mahsulot katalogi, buyurtma boshqaruvi va mijozlar kabineti.
              Narx <strong className="text-foreground">3 000 000 so'mdan</strong> boshlanadi.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="/aloqa" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] bg-primary text-white font-semibold text-sm shadow-[0_4px_16px_rgba(37,99,235,0.28)] hover:bg-primary-dark transition-all duration-200 hover:-translate-y-px">
                Bepul Konsultatsiya
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/portfel" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] border border-border text-foreground font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all duration-200">
                Do'kon namunalari
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-surface" aria-labelledby="benefits-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <h2 id="benefits-heading" className="text-2xl sm:text-3xl font-bold text-foreground tracking-[-0.02em] text-center mb-10">
            Nima olasiz?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="p-5 rounded-[16px] bg-card border border-border hover:border-primary/20 hover:shadow-[0_8px_28px_rgba(0,0,0,0.05)] transition-all duration-300">
                  <div className="w-10 h-10 rounded-[10px] bg-primary/8 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-[15px] mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background" aria-labelledby="features-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-3xl">
          <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold text-foreground tracking-[-0.02em] mb-8">
            To'liq funksionallik
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

      {/* Price */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-lg mx-auto rounded-[20px] border border-primary/20 bg-card p-8 text-center shadow-[0_8px_32px_rgba(37,99,235,0.08)]">
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider font-medium">Narx</p>
            <p className="text-[2.6rem] font-black text-foreground tracking-[-0.03em]">
              3 000 000{" "}
              <span className="text-base font-normal text-muted-foreground">so'mdan</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2 mb-6">
              20–30 ish kunida topshiriladi · 1 yil qo'llab-quvvatlash
            </p>
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

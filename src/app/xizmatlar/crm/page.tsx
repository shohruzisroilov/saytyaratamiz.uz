import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, BarChart2, Bell, Workflow, Mail, Shield } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "CRM Tizim Yaratish — Mijozlar Boshqaruvi va Savdo Avtomatizatsiyasi",
  description:
    "Biznesingiz uchun maxsus CRM tizim: mijozlar bazasi, savdo pipeline, avtomatik eslatmalar va analitika. O'zbekistonda CRM dastur yaratish. Narx 6 000 000 so'mdan.",
  alternates: { canonical: `${SITE_CONFIG.url}/xizmatlar/crm` },
  keywords: ["CRM tizim yaratish", "mijozlar boshqaruvi", "savdo avtomatizatsiya", "CRM dastur O'zbekiston"],
};

const FEATURES = [
  { icon: Users, title: "Mijozlar bazasi", desc: "Barcha mijozlar, aloqalar va muloqotlar tarixi bir joyda." },
  { icon: Workflow, title: "Savdo pipeline", desc: "Bitimlarni bosqichlarga bo'lib vizual kuzating." },
  { icon: Bell, title: "Avtomatik eslatmalar", desc: "Qo'ng'iroq, uchrashuv va vazifalar uchun bildirishnomalar." },
  { icon: BarChart2, title: "Savdo hisobotlari", desc: "Daromad, konversiya va menejer samaradorligini o'lching." },
  { icon: Mail, title: "Email marketing", desc: "Mijozlarga avtomatik email ketma-ketliklari yuborish." },
  { icon: Shield, title: "Foydalanuvchi rollari", desc: "Menejer, supervisor, admin uchun alohida huquqlar." },
];

const INTEGRATIONS = [
  "Telegram bot", "WhatsApp Business", "Gmail / Outlook",
  "Payme / Click", "1C Buxgalteriya", "Google Sheets",
  "Telegram CRM kanal", "Mobil ilova", "REST API",
];

const FOR_WHO = [
  { emoji: "🏢", label: "Savdo bo'limlari" },
  { emoji: "🏗️", label: "Qurilish kompaniyalari" },
  { emoji: "🏥", label: "Tibbiyot klinikalari" },
  { emoji: "📚", label: "O'quv markazlari" },
  { emoji: "🏠", label: "Ko'chmas mulk" },
  { emoji: "🚗", label: "Avtosalon va servis" },
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
          { "@type": "ListItem", position: 3, name: "CRM Tizim", item: `${SITE_CONFIG.url}/xizmatlar/crm` },
        ],
      },
      {
        "@type": "Service",
        name: "CRM Tizim Yaratish",
        description: "Biznes uchun maxsus CRM dastur yaratish xizmati",
        provider: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        offers: { "@type": "Offer", price: "5000000", priceCurrency: "UZS" },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function CrmPage() {
  return (
    <>
      <JsonLd />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
              Xizmat — CRM Tizim
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-[-0.02em]">
              Savdoni{" "}
              <span className="gradient-text">Avtomatlashtiring</span>{" "}
              va Nazorat Qiling
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Biznesingizning ehtiyojlariga mos maxsus CRM tizim. Mijozlar yo'qolmasin,
              bitimlar unutilmasin, savdo ko'rsatkichlari oshsin.
              Narx <strong className="text-foreground">6 000 000 so'mdan</strong> boshlanadi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="/aloqa" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] bg-primary text-white font-semibold text-sm shadow-[0_4px_16px_rgba(37,99,235,0.28)] hover:bg-primary-dark transition-all duration-200 hover:-translate-y-px">
                Demo Ko'rish
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/aloqa" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] border border-border text-foreground font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all duration-200">
                Narx so'rash
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-surface" aria-labelledby="features-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold text-foreground tracking-[-0.02em] text-center mb-10">
            CRM tizim imkoniyatlari
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-5 rounded-[16px] bg-card border border-border hover:border-primary/20 hover:shadow-[0_8px_28px_rgba(0,0,0,0.05)] transition-all duration-300">
                  <div className="w-10 h-10 rounded-[10px] bg-primary/8 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-[15px] mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who needs it */}
      <section className="py-16 bg-background" aria-labelledby="forwho-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <h2 id="forwho-heading" className="text-2xl sm:text-3xl font-bold text-foreground tracking-[-0.02em] text-center mb-8">
            Kim uchun?
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {FOR_WHO.map((w) => (
              <div key={w.label} className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-muted/40 text-sm font-medium text-foreground">
                <span>{w.emoji}</span>
                {w.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-surface" aria-labelledby="integrations-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <h2 id="integrations-heading" className="text-2xl font-bold text-foreground tracking-[-0.02em] text-center mb-8">
            Integratsiyalar
          </h2>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
            {INTEGRATIONS.map((item) => (
              <span key={item} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/30 transition-colors duration-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Shield, Zap, Globe, Smartphone, BarChart2 } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Sayt Yaratish Xizmati — O'zbekistonda Professional Veb Dizayn",
  description:
    "O'zbekistonda professional sayt yaratish xizmati. Next.js, React asosida tez yuklanadigan, SEO optimallashtirilgan va mobil mos saytlar. Narx 1 200 000 so'mdan.",
  alternates: { canonical: `${SITE_CONFIG.url}/xizmatlar/sayt-yaratish` },
  keywords: ["sayt yaratish", "veb sayt yaratish", "professional sayt", "Next.js sayt", "React sayt"],
};

const WHY_US = [
  { icon: Zap, title: "Tez yuklash", desc: "Saytlarimiz Google PageSpeed da 95+ ball oladi. Mijozlar kutib qolmaydi." },
  { icon: Shield, title: "Xavfsizlik", desc: "SSL sertifikat, DDoS himoya va muntazam backup. Ma'lumotlaringiz xavfsiz." },
  { icon: Globe, title: "SEO ready", desc: "Har bir sahifa meta teglar, schema markup va tezlik bo'yicha optimallashtirilgan." },
  { icon: Smartphone, title: "100% Responsive", desc: "Telefon, planshet va kompyuterda mukammal ko'rinadi." },
  { icon: BarChart2, title: "Analytics", desc: "Google Analytics va Search Console integratsiyasi bepul kiradi." },
  { icon: Clock, title: "Tez yetkazish", desc: "Landing page 3-5 kunda, korporativ sayt 7-10 kunda topshiriladi." },
];

const PROCESS = [
  { num: "01", title: "Bepul konsultatsiya", desc: "Loyiha maqsad va talablarini aniqlaymiz." },
  { num: "02", title: "Texnik vazifa", desc: "Narx, muddat va funksionallikni yozma tasdiqlayamiz." },
  { num: "03", title: "Dizayn yaratish", desc: "Figma da prototip va dizayn, siz tasdiqlaysiz." },
  { num: "04", title: "Dasturlash", desc: "Zamonaviy texnologiyalar bilan saytni quramiz." },
  { num: "05", title: "Test va topshirish", desc: "Barcha qurilmalarda tekshirib, saytni topshiramiz." },
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
          { "@type": "ListItem", position: 3, name: "Sayt Yaratish", item: `${SITE_CONFIG.url}/xizmatlar/sayt-yaratish` },
        ],
      },
      {
        "@type": "Service",
        name: "Sayt Yaratish Xizmati",
        description: "O'zbekistonda professional sayt yaratish xizmati",
        provider: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        areaServed: { "@type": "Country", name: "O'zbekiston" },
        serviceType: "Web Development",
        offers: { "@type": "Offer", priceRange: "1200000-6000000", priceCurrency: "UZS" },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function SaytYaratishPage() {
  return (
    <>
      <JsonLd />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
              Xizmatlar
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3rem] font-bold text-foreground tracking-[-0.02em]">
              Professional{" "}
              <span className="gradient-text">Sayt Yaratish</span>{" "}
              Xizmati
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Next.js va React asosida tez, SEO-tayyor va chiroyli saytlar yaratamiz.
              Narx 1 200 000 so'mdan boshlanadi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/aloqa"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-white font-semibold text-sm shadow-[0_4px_16px_rgba(37,99,235,0.28)] hover:bg-primary-dark transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Bepul Konsultatsiya
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/narxlar" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-border text-foreground font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all duration-200">
                Narxlarni Ko'rish
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service types */}
      <section className="py-16 bg-surface" aria-labelledby="services-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <h2 id="services-heading" className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-[-0.02em] text-center mb-10">
            Qaysi turdagi sayt kerak?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                href={`/xizmatlar/${s.slug}`}
                className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/25 hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded bg-primary/8 group-hover:bg-primary/12 flex items-center justify-center shrink-0 transition-colors">
                  <span className="text-primary font-bold text-sm">{s.title[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{s.title}</p>
                  {s.price && <p className="text-xs text-muted-foreground mt-0.5">{s.price} so'mdan</p>}
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 lg:py-20 bg-background" aria-labelledby="why-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <h2 id="why-heading" className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-[-0.02em] text-center mb-10">
            Nima uchun bizni tanlashadi?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-5 rounded-xl bg-muted/40 border border-border hover:border-primary/20 transition-colors duration-200">
                  <div className="w-9 h-9 rounded bg-primary/8 flex items-center justify-center mb-4">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-surface" aria-labelledby="process-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-3xl">
          <h2 id="process-heading" className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-[-0.02em] text-center mb-10">
            Ish jarayoni
          </h2>
          <div className="relative">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-border hidden sm:block" aria-hidden="true" />
            <div className="space-y-6">
              {PROCESS.map((step) => (
                <div key={step.num} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(37,99,235,0.28)] relative z-10">
                    {step.num}
                  </div>
                  <div className="flex-1 pt-2.5">
                    <h3 className="font-display font-semibold text-foreground text-[15px]">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

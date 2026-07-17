import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Building2, ShoppingCart, LayoutTemplate, Code2, TrendingUp, RefreshCw,
  Bot, Database,
} from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Xizmatlar — Sayt Yaratish, CRM, Telegram Bot va Boshqa Veb Xizmatlar",
  description:
    "SaytYaratamiz.uz barcha veb xizmatlari: korporativ sayt, internet do'kon, landing page, CRM tizim, Telegram bot va SEO. O'zbekistonda professional veb studiya.",
  alternates: { canonical: `${SITE_CONFIG.url}/xizmatlar` },
  keywords: ["sayt yaratish xizmatlari", "CRM tizim", "Telegram bot", "internet do'kon", "korporativ sayt"],
};

const ICON_MAP: Record<string, React.ElementType> = {
  Building2, ShoppingCart, LayoutTemplate, Code2, TrendingUp, RefreshCw,
};

const EXTRA_SERVICES = [
  {
    icon: Bot,
    title: "Telegram Bot",
    desc: "Savdo, buyurtma qabul qilish va mijozlar xizmati uchun avtomatik bot.",
    href: "/xizmatlar/telegram-bot",
    price: "2 000 000",
  },
  {
    icon: Database,
    title: "CRM Tizim",
    desc: "Mijozlar bazasi, savdo pipeline va analitika bilan maxsus CRM dastur.",
    href: "/xizmatlar/crm",
    price: "5 000 000",
  },
];

function ServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: SITE_CONFIG.url },
          { "@type": "ListItem", position: 2, name: "Xizmatlar", item: `${SITE_CONFIG.url}/xizmatlar` },
        ],
      },
      {
        "@type": "ItemList",
        name: "SaytYaratamiz.uz Xizmatlari",
        itemListElement: SERVICES.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: s.title,
            description: s.description,
            url: `${SITE_CONFIG.url}/xizmatlar/${s.slug}`,
          },
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ServicesPage() {
  return (
    <>
      <ServiceJsonLd />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-3xl text-center space-y-5">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
            Bizning Xizmatlar
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3rem] font-bold text-foreground tracking-[-0.02em]">
            Professional{" "}
            <span className="gradient-text">Veb Xizmatlar</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Har qanday turdagi veb-loyihani professional darajada yaratamiz.
            Saytdan tortib CRM tizim va Telegram botgacha — yagona jamoa, yagona sifat.
          </p>
        </div>
      </section>

      {/* Main services */}
      <section className="pb-16 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <div className="space-y-14">
            {SERVICES.map((service, index) => {
              const Icon = ICON_MAP[service.icon] || Code2;
              const isEven = index % 2 === 1;

              return (
                <article
                  key={service.id}
                  id={service.slug}
                  className={cn(
                    "grid md:grid-cols-2 gap-10 lg:gap-16 items-center",
                    isEven && "md:[direction:rtl]"
                  )}
                >
                  <div className={cn(isEven && "[direction:ltr]")}>
                    <div className="rounded-2xl p-10 lg:p-14 flex items-center justify-center bg-muted/40 border border-border min-h-[220px]">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 rounded-xl bg-primary/8 flex items-center justify-center mx-auto">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        {service.price && (
                          <div className="inline-block px-4 py-2.5 rounded-md bg-background border border-border">
                            <span className="text-[11px] text-muted-foreground block mb-0.5">dan boshlab</span>
                            <p className="font-bold text-foreground">{service.price} so&apos;m</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={cn("space-y-5", isEven && "[direction:ltr]")}>
                    {service.popular && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary text-white shadow-[0_4px_12px_rgba(37,99,235,0.3)]">
                        Eng Mashhur
                      </span>
                    )}
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-[-0.02em]">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                    <ul className="grid sm:grid-cols-2 gap-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                          <span className="text-foreground/85">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-3 pt-1">
                      <Link
                        href="/aloqa"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-white font-semibold text-sm shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:bg-primary-dark hover:-translate-y-px transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        Buyurtma Berish
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/xizmatlar/${service.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-sm font-medium hover:border-primary/40 hover:text-primary transition-all duration-200"
                      >
                        Batafsil
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Extra services */}
      <section className="py-16 bg-surface" aria-labelledby="extra-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <h2 id="extra-heading" className="font-display text-2xl font-bold text-foreground tracking-[-0.02em] mb-8">
            Qo&apos;shimcha xizmatlar
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {EXTRA_SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group flex items-start gap-5 p-6 rounded-xl bg-card border border-border hover:border-primary/25 hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-md bg-primary/8 group-hover:bg-primary/12 flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-foreground text-[15px] group-hover:text-primary transition-colors mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                    <p className="text-sm font-bold text-primary">{s.price} so&apos;mdan</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

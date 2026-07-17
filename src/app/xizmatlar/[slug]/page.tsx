import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import {
  Building2, ShoppingCart, LayoutTemplate, Code2, TrendingUp, RefreshCw,
} from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ElementType> = {
  Building2, ShoppingCart, LayoutTemplate, Code2, TrendingUp, RefreshCw,
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Topilmadi" };

  const url = `${SITE_CONFIG.url}/xizmatlar/${slug}`;
  const desc = `${service.description}${service.price ? ` Narx: ${service.price} so'mdan boshlab.` : ""} O'zbekistonda professional xizmat.`;

  return {
    title: `${service.title} — Professional Xizmat O'zbekistonda`,
    description: desc,
    alternates: { canonical: url },
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} O'zbekiston`,
      `${service.title.toLowerCase()} narxi`,
      "saytyaratamiz",
      ...service.features.slice(0, 3),
    ],
    openGraph: {
      title: `${service.title} — SaytYaratamiz.uz`,
      description: desc,
      url,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = ICON_MAP[service.icon] || Code2;
  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);
  const pageUrl = `${SITE_CONFIG.url}/xizmatlar/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: SITE_CONFIG.url },
          { "@type": "ListItem", position: 2, name: "Xizmatlar", item: `${SITE_CONFIG.url}/xizmatlar` },
          { "@type": "ListItem", position: 3, name: service.title, item: pageUrl },
        ],
      },
      {
        "@type": "Service",
        "@id": pageUrl,
        name: service.title,
        description: service.description,
        url: pageUrl,
        provider: { "@id": `${SITE_CONFIG.url}/#organization` },
        areaServed: { "@type": "Country", name: "O'zbekiston", sameAs: "https://www.wikidata.org/wiki/Q265" },
        serviceType: service.title,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: service.title,
          itemListElement: service.features.map((f, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: { "@type": "Offer", itemOffered: { "@type": "Service", name: f } },
          })),
        },
        ...(service.price && {
          offers: {
            "@type": "Offer",
            price: service.price.replace(/\s/g, ""),
            priceCurrency: "UZS",
            availability: "https://schema.org/InStock",
            priceValidUntil: "2026-12-31",
            seller: { "@id": `${SITE_CONFIG.url}/#organization` },
            url: pageUrl,
          },
        }),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-background" aria-labelledby="service-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-10">
            <a href="/" className="hover:text-primary transition-colors">Bosh sahifa</a>
            <span aria-hidden="true">/</span>
            <a href="/xizmatlar" className="hover:text-primary transition-colors">Xizmatlar</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground font-medium" aria-current="page">{service.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              {service.popular && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white shadow-[0_4px_12px_rgba(37,99,235,0.3)]">
                  Eng Mashhur Xizmat
                </span>
              )}
              <h1 id="service-heading" className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight tracking-[-0.02em]">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {service.price && (
                <div className="inline-block p-5 rounded-xl bg-muted/40 border border-border">
                  <span className="text-xs text-muted-foreground block mb-1 uppercase tracking-wider font-medium">
                    Narx: dan boshlab
                  </span>
                  <span className="text-[2.2rem] font-black text-foreground tracking-[-0.03em]">
                    {service.price}{" "}
                    <span className="text-base font-normal text-muted-foreground">so&apos;m</span>
                  </span>
                </div>
              )}

              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/aloqa"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-white font-semibold text-sm shadow-[0_4px_16px_rgba(37,99,235,0.28)] hover:bg-primary-dark hover:shadow-[0_6px_20px_rgba(37,99,235,0.38)] transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Buyurtma Berish
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:border-primary/40 hover:text-primary transition-all duration-200 font-medium text-sm"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Qo&apos;ng&apos;iroq
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center" aria-hidden="true">
              <div className="w-44 h-44 rounded-[28px] bg-primary/8 flex items-center justify-center shadow-[0_20px_60px_rgba(37,99,235,0.1)]">
                <Icon className="w-20 h-20 text-primary/70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-surface" aria-labelledby="features-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-3xl">
          <h2 id="features-heading" className="font-display text-2xl font-bold text-foreground mb-8 tracking-[-0.02em]">
            Nima Kiradi?
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3" aria-label={`${service.title} xususiyatlari`}>
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 p-4 rounded-md bg-card border border-border hover:border-primary/20 transition-colors duration-200"
              >
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" aria-hidden="true" />
                <span className="font-medium text-foreground text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-background" aria-labelledby="related-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <h2 id="related-heading" className="font-display text-xl font-bold text-foreground mb-6 tracking-[-0.02em]">
            Boshqa Xizmatlar
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((s) => {
              const RelIcon = ICON_MAP[s.icon] || Code2;
              return (
                <Link
                  key={s.id}
                  href={`/xizmatlar/${s.slug}`}
                  className="flex items-center gap-3.5 p-4 rounded-lg bg-muted/40 border border-border hover:border-primary/25 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded bg-primary/8 group-hover:bg-primary/12 flex items-center justify-center shrink-0 transition-colors" aria-hidden="true">
                    <RelIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                      {s.title}
                    </p>
                    {s.price && (
                      <p className="text-xs text-muted-foreground mt-0.5">{s.price} so&apos;mdan</p>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

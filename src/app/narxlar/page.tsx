import type { Metadata } from "next";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_CONFIG, PRICING_PLANS, FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Narxlar — Sayt Yaratish Qanchaga Tushadi? Shaffof Narx Jadvali 2025",
  description:
    "Landing page 1 200 000 so'mdan, korporativ sayt 2 900 000 so'mdan, internet do'kon 4 900 000 so'mdan. Yashirin to'lovlarsiz. O'zbekistonda sayt yaratish narxi 2025.",
  alternates: { canonical: `${SITE_CONFIG.url}/narxlar` },
  keywords: [
    "sayt yaratish narxi", "landing page narxi", "korporativ sayt narxi",
    "internet do'kon narxi", "sayt narxi O'zbekiston 2025",
    "veb sayt narxi", "sayt yaratish qancha turadi",
  ],
  openGraph: {
    title: "Sayt Yaratish Narxlari 2025 — SaytYaratamiz.uz",
    description: "Shaffof narxlar: landing page 1.2M, korporativ sayt 2.9M, internet do'kon 4.9M so'mdan.",
    url: `${SITE_CONFIG.url}/narxlar`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

function PricingJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // Breadcrumb
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: SITE_CONFIG.url },
          { "@type": "ListItem", position: 2, name: "Narxlar", item: `${SITE_CONFIG.url}/narxlar` },
        ],
      },
      // Individual offer per plan
      ...PRICING_PLANS.map((plan) => ({
        "@type": "Product",
        name: `SaytYaratamiz.uz — ${plan.name} Paketi`,
        description: plan.description,
        brand: { "@type": "Brand", name: SITE_CONFIG.name },
        offers: {
          "@type": "Offer",
          name: plan.name,
          price: plan.price.replace(/\s/g, ""),
          priceCurrency: "UZS",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
          seller: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
          url: `${SITE_CONFIG.url}/narxlar`,
        },
      })),
      // FAQ
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function PricingPage() {
  return (
    <>
      <PricingJsonLd />

      <section className="pt-28 pb-4 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-3xl text-center space-y-4">
          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-2">
            <a href="/" className="hover:text-primary transition-colors">Bosh sahifa</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground font-medium" aria-current="page">Narxlar</span>
          </nav>

          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
            Narxlar
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-[-0.02em]">
            Aniq va <span className="gradient-text">Shaffof Narxlar</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Yashirin to&apos;lov yo&apos;q — narxga nima kirishini oldindan bilasiz.
            Individual loyihalar uchun alohida taklif tayyorlaymiz.
          </p>
        </div>
      </section>

      <PricingSection showHeader={false} />
      <FAQSection />
      <CTASection />
    </>
  );
}

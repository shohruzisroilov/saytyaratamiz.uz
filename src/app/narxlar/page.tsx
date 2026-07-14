import type { Metadata } from "next";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Narxlar — Sayt Yaratish Qanchaga Tushadi? Shaffof Narx Jadvali",
  description:
    "Landing page 800 000 so'mdan, korporativ sayt 1 500 000 so'mdan, internet do'kon 3 000 000 so'mdan. Yashirin to'lovlarsiz. O'zbekistonda sayt yaratish narxi 2025.",
  alternates: { canonical: `${SITE_CONFIG.url}/narxlar` },
  keywords: ["sayt yaratish narxi", "landing page narxi", "korporativ sayt narxi", "internet do'kon narxi", "sayt narxi O'zbekiston 2025"],
};

function PricingJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    name: "Sayt Yaratish Narxlari",
    description: "O'zbekistonda sayt yaratish narxlari ro'yxati",
    priceCurrency: "UZS",
    url: `${SITE_CONFIG.url}/narxlar`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function PricingPage() {
  return (
    <>
      <PricingJsonLd />

      {/* Hero */}
      <section className="pt-28 pb-4 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-3xl text-center space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
            Narxlar
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-[-0.02em]">
            Aniq va <span className="gradient-text">Shaffof Narxlar</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Yashirin to&apos;lovlar yo&apos;q. Narxga nima kirishini oldindan bilib olasiz.
            Individual loyihalar uchun alohida taklif tayyorlaymiz.
          </p>
        </div>
      </section>

      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

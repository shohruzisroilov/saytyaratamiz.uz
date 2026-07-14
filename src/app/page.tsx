import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SaytYaratamiz.uz — O'zbekistonda №1 Professional Sayt Yaratish Xizmati",
  description:
    "O'zbekistonda professional sayt yaratish: korporativ sayt, internet do'kon, landing page, CRM, Telegram bot. 150+ muvaffaqiyatli loyiha. Bepul konsultatsiya.",
  alternates: { canonical: SITE_CONFIG.url },
  keywords: [
    "sayt yaratish", "veb sayt yaratish", "internet do'kon yaratish",
    "landing page", "korporativ sayt", "web dizayn", "sayt yaratish narxi",
    "O'zbekiston veb studiya", "Toshkent sayt yaratish", "CRM tizim",
    "Telegram bot yaratish", "saytyaratamiz",
  ],
};

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        inLanguage: "uz",
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${SITE_CONFIG.url}/?s={search_term_string}` },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_CONFIG.url}/#business`,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        telephone: SITE_CONFIG.phone,
        email: SITE_CONFIG.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Toshkent",
          addressCountry: "UZ",
        },
        priceRange: "$$",
        openingHours: "Mo-Sa 09:00-18:00",
        sameAs: [SITE_CONFIG.telegram, SITE_CONFIG.instagram],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "120",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

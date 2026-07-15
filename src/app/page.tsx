import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedCompanies } from "@/components/sections/TrustedCompanies";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { SITE_CONFIG, SERVICES, FAQS, TESTIMONIALS } from "@/lib/constants";

const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection").then((m) => m.ProjectsSection));
const PricingSection = dynamic(() => import("@/components/sections/PricingSection").then((m) => m.PricingSection));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection").then((m) => m.TestimonialsSection));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection").then((m) => m.FAQSection));
const CTASection = dynamic(() => import("@/components/sections/CTASection").then((m) => m.CTASection));

export const metadata: Metadata = {
  title: "SaytYaratamiz.uz — Professional Sayt Yaratish Xizmati O'zbekistonda",
  description:
    "O'zbekistonda professional sayt yaratish: korporativ sayt, internet do'kon, landing page, CRM, Telegram bot. 150+ muvaffaqiyatli loyiha. Bepul konsultatsiya.",
  alternates: {
    canonical: SITE_CONFIG.url,
    types: { "application/rss+xml": `${SITE_CONFIG.url}/feed.xml` },
  },
  keywords: [
    "sayt yaratish", "veb sayt yaratish", "internet do'kon yaratish",
    "landing page", "korporativ sayt", "web dizayn", "sayt yaratish narxi",
    "O'zbekiston veb studiya", "O'zbekiston bo'ylab sayt yaratish", "CRM tizim",
    "Telegram bot yaratish", "saytyaratamiz",
  ],
  openGraph: {
    type: "website",
    title: "SaytYaratamiz.uz — Professional Sayt Yaratish Xizmati",
    description:
      "Korporativ sayt, internet do'kon, landing page, CRM, Telegram bot. 150+ loyiha. Bepul konsultatsiya.",
    url: SITE_CONFIG.url,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SaytYaratamiz.uz" }],
  },
};

function HomeJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // WebSite
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        inLanguage: "uz",
        publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${SITE_CONFIG.url}/?s={search_term_string}` },
          "query-input": "required name=search_term_string",
        },
      },
      // LocalBusiness
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${SITE_CONFIG.url}/#business`,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        telephone: SITE_CONFIG.phone,
        email: SITE_CONFIG.email,
        priceRange: "$$",
        currenciesAccepted: "UZS",
        openingHours: "Mo-Sa 09:00-18:00",
        address: {
          "@type": "PostalAddress",
          addressLocality: "O'zbekiston",
          addressRegion: "O'zbekiston bo'ylab",
          addressCountry: "UZ",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 41.2995,
          longitude: 69.2401,
        },
        sameAs: [SITE_CONFIG.telegram, SITE_CONFIG.instagram],
        hasMap: "https://maps.google.com/?q=O'zbekiston",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "120",
          bestRating: "5",
          worstRating: "1",
        },
        review: TESTIMONIALS.slice(0, 3).map((t) => ({
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
          author: { "@type": "Person", name: t.name },
          reviewBody: t.content,
        })),
      },
      // ItemList of Services
      {
        "@type": "ItemList",
        "@id": `${SITE_CONFIG.url}/#services`,
        name: "Sayt Yaratish Xizmatlari",
        itemListElement: SERVICES.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: s.title,
            description: s.description,
            url: `${SITE_CONFIG.url}/xizmatlar/${s.slug}`,
            provider: { "@id": `${SITE_CONFIG.url}/#organization` },
            ...(s.price && {
              offers: {
                "@type": "Offer",
                price: s.price.replace(/\s/g, ""),
                priceCurrency: "UZS",
                priceValidUntil: "2026-12-31",
                availability: "https://schema.org/InStock",
              },
            }),
          },
        })),
      },
      // FAQ
      {
        "@type": "FAQPage",
        "@id": `${SITE_CONFIG.url}/#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      // BreadcrumbList
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Bosh sahifa",
            item: SITE_CONFIG.url,
          },
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <HeroSection />
      <TrustedCompanies />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <ProjectsSection />
      <PricingSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

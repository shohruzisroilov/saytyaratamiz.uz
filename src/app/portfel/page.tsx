import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_CONFIG, STATS, PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfel — 150+ Muvaffaqiyatli Loyiha va Ish Namunalari",
  description:
    "SaytYaratamiz.uz yaratgan saytlar: AutoParts.uz, MedCenter Pro, EduLearn.uz va boshqa 150+ loyiha. Internet do'konlar, korporativ saytlar, veb ilovalar.",
  alternates: { canonical: `${SITE_CONFIG.url}/portfel` },
  keywords: [
    "sayt namunalari", "veb dizayn portfel", "sayt yaratish namunalar",
    "internet do'kon namunasi", "korporativ sayt namuna", "next.js loyihalar",
  ],
  openGraph: {
    title: "Portfel — 150+ Loyiha | SaytYaratamiz.uz",
    description: "Real loyihalar, haqiqiy natijalar. Internet do'konlar, korporativ saytlar, veb ilovalar.",
    url: `${SITE_CONFIG.url}/portfel`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

function PortfolioJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: SITE_CONFIG.url },
          { "@type": "ListItem", position: 2, name: "Portfel", item: `${SITE_CONFIG.url}/portfel` },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${SITE_CONFIG.url}/portfel`,
        url: `${SITE_CONFIG.url}/portfel`,
        name: "SaytYaratamiz.uz Portfel",
        description: "150+ muvaffaqiyatli loyiha",
        mainEntity: {
          "@type": "ItemList",
          name: "Yaratilgan Loyihalar",
          itemListElement: PROJECTS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "WebSite",
              name: p.title,
              description: p.description,
              applicationCategory: p.category,
            },
          })),
        },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioJsonLd />

      <section className="pt-28 pb-14 bg-background" aria-labelledby="portfolio-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
            <a href="/" className="hover:text-primary transition-colors">Bosh sahifa</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground font-medium" aria-current="page">Portfel</span>
          </nav>

          <div className="max-w-2xl mx-auto text-center space-y-5">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
              Portfel
            </span>
            <h1 id="portfolio-heading" className="text-4xl sm:text-5xl font-bold text-foreground tracking-[-0.02em]">
              Bizning{" "}
              <span className="gradient-text">Yaratgan Ishlarimiz</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              150+ muvaffaqiyatli loyiha. Har bir sayt mijozning maqsadlariga erishishga
              yordam berdi — savdo oshdi, imij yaxshilandi, mijozlar ko&apos;paydi.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto" aria-label="Statistika">
            {STATS.map((s) => (
              <div key={s.label} className="text-center p-4 rounded-[14px] bg-muted/40 border border-border">
                <p className="text-2xl font-black text-primary tracking-[-0.02em] tabular-nums">{s.value}{s.suffix}</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsSection />
      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import { TEAM_MEMBERS, STATS, SITE_CONFIG } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Biz Haqimizda — SaytYaratamiz.uz IT Kompaniya | 2019-yildan Beri",
  description:
    "SaytYaratamiz.uz haqida: 2019-yildan beri faoliyat, 5+ yillik tajriba, 150+ loyiha, 120+ mamnun mijoz. O'zbekistondagi professional IT jamoasi bilan tanishing.",
  alternates: { canonical: `${SITE_CONFIG.url}/haqimizda` },
  keywords: [
    "saytyaratamiz haqida", "IT kompaniya O'zbekiston", "professional veb dasturchi O'zbekiston",
    "sayt yaratish jamoasi", "5 yillik tajriba",
  ],
  openGraph: {
    title: "Biz Haqimizda — SaytYaratamiz.uz",
    description: "2019-yildan beri O'zbekistonda 150+ loyiha. Tajribali IT jamoasi.",
    url: `${SITE_CONFIG.url}/haqimizda`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const VALUES = [
  {
    icon: Target,
    title: "Maqsadga Yo'naltirilganlik",
    desc: "Faqat chiroyli emas — mijozning biznes maqsadiga xizmat qiladigan saytlar yaratamiz.",
  },
  {
    icon: Eye,
    title: "Shaffoflik",
    desc: "Jarayon, narx va muddat haqida doimo ochiqmiz — yashirin to'lov yo'q.",
  },
  {
    icon: Heart,
    title: "Sifatga Sadoqat",
    desc: "Har bir sayt uchun to'liq mas'uliyat olib, siz mamnun bo'lguningizcha ishlaymiz.",
  },
];

function AboutJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: SITE_CONFIG.url },
          { "@type": "ListItem", position: 2, name: "Biz haqimizda", item: `${SITE_CONFIG.url}/haqimizda` },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": `${SITE_CONFIG.url}/haqimizda`,
        url: `${SITE_CONFIG.url}/haqimizda`,
        name: "SaytYaratamiz.uz haqida",
        description: "O'zbekistondagi professional IT kompaniya. 2019-yildan beri 150+ loyiha.",
        mainEntity: {
          "@id": `${SITE_CONFIG.url}/#organization`,
        },
        breadcrumb: { "@id": `${SITE_CONFIG.url}/haqimizda#breadcrumb` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        foundingDate: "2019",
        numberOfEmployees: { "@type": "QuantitativeValue", value: 5 },
        member: TEAM_MEMBERS.map((m) => ({
          "@type": "Person",
          name: m.name,
          jobTitle: m.role,
          description: m.bio,
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function AboutPage() {
  return (
    <>
      <AboutJsonLd />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-background" aria-labelledby="about-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-10">
            <a href="/" className="hover:text-primary transition-colors">Bosh sahifa</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground font-medium" aria-current="page">Biz haqimizda</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
                Biz Haqimizda
              </span>
              <h1 id="about-heading" className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight tracking-[-0.02em]">
                O&apos;zbekistondagi{" "}
                <span className="gradient-text">Ishonchli</span>{" "}
                IT Kompaniya
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                2019-yildan beri O&apos;zbekiston bo&apos;ylab tadbirkorlar va kompaniyalar
                uchun professional sayt va ilovalar yaratamiz.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Tajribali dizayner, dasturchi va SEO mutaxassislardan iborat jamoamiz —
                faqat chiroyli emas, natija beradigan saytlar yaratadi.
              </p>
              <Link
                href="/aloqa"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-white font-semibold text-sm shadow-[0_4px_16px_rgba(37,99,235,0.28)] hover:bg-primary-dark hover:shadow-[0_6px_20px_rgba(37,99,235,0.38)] transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Biz bilan bog&apos;laning
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4" aria-label="Kompaniya statistikasi">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl bg-muted/40 border border-border text-center hover:border-primary/20 transition-colors duration-200"
                >
                  <p className="text-[2.2rem] font-black text-primary tracking-[-0.03em] tabular-nums">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-surface" aria-labelledby="values-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
              Qadriyatlarimiz
            </span>
            <h2 id="values-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-[-0.02em]">
              Nima Uchun Bizni Tanlashadi?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <article key={v.title} className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-[0_8px_28px_rgba(0,0,0,0.05)] transition-all duration-300">
                  <div className="w-10 h-10 rounded bg-primary/8 flex items-center justify-center mb-5" aria-hidden="true">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-[15px] mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_CONFIG, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfel — 150+ Muvaffaqiyatli Loyiha va Ish Namunalari",
  description:
    "SaytYaratamiz.uz yaratgan saytlar: internet do'konlar, korporativ saytlar, landing page va veb ilovalar. Real loyihalar, haqiqiy natijalar. 150+ muvaffaqiyatli ish.",
  alternates: { canonical: `${SITE_CONFIG.url}/portfel` },
  keywords: ["sayt namunalari", "veb dizayn portfel", "sayt yaratish namunalar", "internet do'kon namunasi"],
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-14 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
              Portfel
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-[-0.02em]">
              Bizning{" "}
              <span className="gradient-text">Yaratgan Ishlarimiz</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              150+ muvaffaqiyatli loyiha. Har bir sayt mijozning maqsadlariga erishishga
              yordam berdi — savdo oshdi, imij yaxshilandi, mijozlar ko'paydi.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
            {STATS.map((s) => (
              <div key={s.label} className="text-center p-4 rounded-[14px] bg-muted/40 border border-border">
                <p className="text-2xl font-black text-primary tracking-[-0.02em]">{s.value}{s.suffix}</p>
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

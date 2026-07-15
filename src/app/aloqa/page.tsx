import type { Metadata } from "next";
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aloqa — Biz bilan Bog'laning | Bepul Konsultatsiya",
  description:
    `SaytYaratamiz.uz bilan bog'laning. Tel: ${SITE_CONFIG.phone}. Telegram: @Shohruz_Isroilov. Bepul konsultatsiya oling va saytingizni rejalashtiring.`,
  alternates: { canonical: `${SITE_CONFIG.url}/aloqa` },
  keywords: [
    "saytyaratamiz aloqa", "veb studiya telefon", "sayt yaratish konsultatsiya",
    "bepul konsultatsiya sayt", "Toshkent veb studiya aloqa",
  ],
  openGraph: {
    title: "Biz bilan Bog'laning — SaytYaratamiz.uz",
    description: "Bepul konsultatsiya oling. Tel: " + SITE_CONFIG.phone,
    url: `${SITE_CONFIG.url}/aloqa`,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Telefon",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`,
    description: "Dush–Shan, 9:00 – 18:00",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@Shohruz_Isroilov",
    href: SITE_CONFIG.telegram,
    description: "30 daqiqada javob",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    description: "24 soat ichida javob",
  },
  {
    icon: MapPin,
    label: "Manzil",
    value: SITE_CONFIG.address,
    href: "https://maps.google.com/?q=Toshkent,O'zbekiston",
    description: "Online va offline uchrashuv",
    external: true,
  },
];

function ContactJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: SITE_CONFIG.url },
          { "@type": "ListItem", position: 2, name: "Aloqa", item: `${SITE_CONFIG.url}/aloqa` },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": `${SITE_CONFIG.url}/aloqa`,
        url: `${SITE_CONFIG.url}/aloqa`,
        name: "SaytYaratamiz.uz Aloqa",
        description: "SaytYaratamiz.uz bilan bog'lanish ma'lumotlari va murojaat formasi.",
        mainEntity: {
          "@type": "LocalBusiness",
          name: SITE_CONFIG.name,
          telephone: SITE_CONFIG.phone,
          email: SITE_CONFIG.email,
          url: SITE_CONFIG.url,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Toshkent",
            addressCountry: "UZ",
          },
        },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ContactPage() {
  return (
    <>
      <ContactJsonLd />

      {/* Hero */}
      <section className="pt-28 pb-14 bg-background" aria-labelledby="contact-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-2xl text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-6">
            <a href="/" className="hover:text-primary transition-colors">Bosh sahifa</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground font-medium" aria-current="page">Aloqa</span>
          </nav>

          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15 mb-5">
            Aloqa
          </span>
          <h1 id="contact-heading" className="text-4xl sm:text-5xl font-bold text-foreground tracking-[-0.02em] mb-4">
            Biz bilan{" "}
            <span className="gradient-text">Bog&apos;laning</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Loyihangiz haqida suhbatlashishga tayyor. Bepul konsultatsiya oling
            va saytingizni qachon yaratishni rejalashtiring.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="pb-20 lg:pb-28 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">

            {/* Left: contact info */}
            <aside className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-1.5">
                  Aloqa Ma&apos;lumotlari
                </h2>
                <p className="text-sm text-muted-foreground">
                  Quyidagi kanallar orqali biz bilan bog&apos;lanishingiz mumkin.
                </p>
              </div>

              <address className="not-italic space-y-3">
                {CONTACT_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-3.5 p-4 rounded-[14px] bg-muted/40 border border-border hover:border-primary/25 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 group"
                    >
                      <div className="w-9 h-9 rounded-[10px] bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-colors" aria-hidden="true">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[11px] text-muted-foreground font-medium mb-0.5 uppercase tracking-wider">{item.label}</p>
                        <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                      </div>
                    </a>
                  );
                })}
              </address>

              {/* Working hours */}
              <div className="p-4 rounded-[14px] bg-primary/5 border border-primary/15">
                <div className="flex items-center gap-2.5 mb-2">
                  <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span className="font-semibold text-foreground text-sm">Ish vaqti</span>
                </div>
                <p className="text-sm text-muted-foreground">Dushanba – Shanba: 9:00 – 18:00</p>
                <p className="text-sm text-muted-foreground">Yakshanba: Dam olish kuni</p>
              </div>

              {/* Quick response */}
              <div className="flex items-start gap-3 p-4 rounded-[14px] bg-green-500/5 border border-green-500/15">
                <MessageCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Tez javob kafolati</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Telegram orqali murojaat qilsangiz, 30 daqiqa ichida javob beramiz.
                  </p>
                </div>
              </div>
            </aside>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="rounded-[20px] border border-border bg-card p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                <h2 className="text-xl font-bold text-foreground mb-1.5">Murojaat Formasi</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Formani to&apos;ldiring — 1–2 soat ichida javob beramiz.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

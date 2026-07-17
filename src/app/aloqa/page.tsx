import type { Metadata } from "next";
import { Phone, Mail, MapPin, Send, MessageCircle, HelpCircle, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Aloqa — Biz bilan Bog'laning | Bepul Konsultatsiya",
  description:
    `SaytYaratamiz.uz bilan bog'laning. Tel: ${SITE_CONFIG.phone}. Telegram: @Shohruz_Isroilov. Bepul konsultatsiya oling va saytingizni rejalashtiring.`,
  alternates: { canonical: `${SITE_CONFIG.url}/aloqa` },
  keywords: [
    "saytyaratamiz aloqa", "veb studiya telefon", "sayt yaratish konsultatsiya",
    "bepul konsultatsiya sayt", "O'zbekiston veb studiya aloqa",
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
    href: "https://maps.google.com/?q=O'zbekiston",
    description: "Online va offline uchrashuv",
    external: true,
  },
];

const CONTACT_FAQS = [
  {
    q: "Loyiha bo'yicha konsultatsiya olish mutlaqo bepulmi?",
    a: "Ha, loyihangiz maqsadi, kerakli sahifalar soni va umumiy xarajatlarni aniqlab beruvchi dastlabki konsultatsiya va smeta hisob-kitobi mutlaqo bepul bo'lib, sizga hech qanday majburiyat yuklamaydi.",
  },
  {
    q: "Murojaat yuborilganidan so'ng qancha vaqtda javob berasiz?",
    a: "Telegram orqali bog'lansangiz, mutaxassisimiz 30 daqiqa ichida javob beradi. Veb-saytdagi murojaat formasi orqali yuborilgan so'rovlarga esa ish vaqtida 1-2 soat ichida bog'lanamiz.",
  },
  {
    q: "Sayt yaratish uchun qanday ma'lumotlar talab etiladi?",
    a: "Dastlab saytning asosiy maqsadi, raqobatchilaringiz va sizga ma'qul kelgan boshqa sayt havolalari kerak bo'ladi. Matnlar va rasmlar bo'lsa, ularni ham taqdim etishingiz mumkin.",
  },
  {
    q: "Hamkorlik qanday to'lov usullarida amalga oshiriladi?",
    a: "To'lovlarni Click, Payme ilovalari orqali, bank kartalari yordamida yoki yuridik shaxslar uchun rasmiy shartnoma asosida pul o'tkazish (yuridik to'lov) yo'li bilan amalga oshirishingiz mumkin.",
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
            addressLocality: "O'zbekiston",
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
      <section className="pt-28 pb-10 bg-background" aria-labelledby="contact-heading">
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
          <h1 id="contact-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.02em] mb-4">
            Biz bilan <span className="gradient-text">Bog&apos;laning</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Loyihangiz haqida batafsil suhbatlashish va bepul smeta hisob-kitobini olish uchun quyidagi shaklni to&apos;ldiring yoki biz bilan to&apos;g&apos;ridan-to&apos;g&apos;ri bog&apos;laning.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="pb-16 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto items-start">

            {/* Left Column: Contact details & Working Hours */}
            <aside className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-lg font-bold text-foreground tracking-tight mb-1">Aloqa ma&apos;lumotlari</h2>
                <p className="text-xs text-muted-foreground">Kompaniyamizning barcha rasmiy aloqa kanallari.</p>
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
                      className="flex items-start gap-3.5 p-4 rounded-xl bg-muted/30 border border-border/80 hover:border-primary/20 hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:bg-card transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 rounded bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-colors">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                        <p className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                        <p className="text-[11px] text-muted-foreground mt-0.5">{item.description}</p>
                      </div>
                    </a>
                  );
                })}
              </address>



              {/* Quick Response Notice */}
              <div className="flex items-start gap-3.5 p-5 rounded-xl bg-green-500/5 border border-green-500/12">
                <MessageCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-xs font-bold text-foreground">Tezkor aloqa maslahati</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed mt-1">
                    Telegram orqali yozsangiz, loyihangizni tezda ovozli qo&apos;ng&apos;iroq orqali muhokama qilishimiz mumkin.
                  </p>
                </div>
              </div>
            </aside>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>


      {/* FAQs Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-3xl">
          <div className="text-center mb-12 space-y-3">
            <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center text-primary mx-auto">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground tracking-tight">Bog&apos;lanish bo&apos;yicha tez-tez beriladigan savollar</h2>
            <p className="text-xs text-muted-foreground">Biz bilan ishlash jarayoni va aloqaga oid eng ko&apos;p beriladigan savollar.</p>
          </div>

          <div className="space-y-1">
            {CONTACT_FAQS.map((faq, i) => (
              <details key={i} className="group border-b border-border/80 py-4.5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-foreground text-sm cursor-pointer list-none focus:outline-none select-none">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform duration-300 shrink-0" />
                </summary>
                <p className="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

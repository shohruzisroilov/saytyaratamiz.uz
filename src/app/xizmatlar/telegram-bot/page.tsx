import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Bot, CreditCard, Bell, Users, MessageSquare, BarChart2, ShoppingBag, CalendarCheck, Ticket, BookOpen, Handshake } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Telegram Bot Yaratish — Savdo va Xizmat uchun Avtomatik Bot",
  description:
    "Biznesingiz uchun Telegram bot yaratish: buyurtma qabul qilish, Payme/Click to'lov, bildirishnomalar va mijozlar bazasi. O'zbekistonda Telegram bot narxi 1 800 000 so'mdan.",
  alternates: { canonical: `${SITE_CONFIG.url}/xizmatlar/telegram-bot` },
  keywords: ["Telegram bot yaratish", "savdo boti", "Telegram orqali savdo", "bot yaratish O'zbekiston", "Payme bot"],
};

const FEATURES = [
  { icon: Bot, title: "Buyurtma qabul qilish", desc: "Mijozlar to'g'ridan-to'g'ri bot orqali buyurtma berishadi." },
  { icon: CreditCard, title: "Onlayn to'lov", desc: "Payme, Click va Uzcard orqali botda to'lov qabul qilish." },
  { icon: Bell, title: "Bildirishnomalar", desc: "Yangi buyurtma va to'lovlar haqida sizga darhol xabar." },
  { icon: Users, title: "Foydalanuvchilar bazasi", desc: "Bot obunachilari statistikasi va segmentatsiyasi." },
  { icon: MessageSquare, title: "Avtomatik javoblar", desc: "Ko'p beriladigan savollarga AI yordamida javoblar." },
  { icon: BarChart2, title: "Admin panel", desc: "Buyurtmalar, to'lovlar va statistikani boshqarish." },
];

const BOT_TYPES = [
  { icon: ShoppingBag, title: "Savdo boti", desc: "Mahsulotlar katalogi, savat va to'lov bilan to'liq do'kon boti." },
  { icon: CalendarCheck, title: "Bron boti", desc: "Restoran, klinika va salonlar uchun onlayn navbat olish." },
  { icon: Ticket, title: "Tiket boti", desc: "Murojaat va shikoyatlarni qabul qiluvchi support boti." },
  { icon: BookOpen, title: "Ta'lim boti", desc: "Darslar, testlar va sertifikatlarni boshqarish." },
  { icon: BarChart2, title: "Hisobot boti", desc: "Kunlik, haftalik va oylik savdo hisobotlarini yuborish." },
  { icon: Handshake, title: "CRM boti", desc: "Mijozlar bilan muloqotni yozib boradigan CRM bot." },
];

const PROCESS = [
  { num: "01", title: "Tahlil va TZ", desc: "Biznesingizning ehtiyojlarini o'rganib, bot funksionalligini belgilaymiz." },
  { num: "02", title: "Bot yaratish", desc: "Python yoki Node.js da bot yozamiz va testdan o'tkazamiz." },
  { num: "03", title: "To'lov ulash", desc: "Payme/Click to'lov tizimlarini integratsiya qilamiz." },
  { num: "04", title: "Admin panel", desc: "Buyurtmalar va statistikani boshqarish uchun qulay panel." },
  { num: "05", title: "Topshirish", desc: "Botni sizning kanalingizga ulab, qo'llanma beramiz." },
];

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: SITE_CONFIG.url },
          { "@type": "ListItem", position: 2, name: "Xizmatlar", item: `${SITE_CONFIG.url}/xizmatlar` },
          { "@type": "ListItem", position: 3, name: "Telegram Bot", item: `${SITE_CONFIG.url}/xizmatlar/telegram-bot` },
        ],
      },
      {
        "@type": "Service",
        name: "Telegram Bot Yaratish",
        description: "Biznes uchun Telegram bot yaratish xizmati",
        provider: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        offers: { "@type": "Offer", price: "2000000", priceCurrency: "UZS" },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function TelegramBotPage() {
  return (
    <>
      <JsonLd />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-background">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
              Xizmat — Telegram Bot
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-[-0.02em]">
              Telegram Orqali{" "}
              <span className="gradient-text">24/7 Savdo</span>{" "}
              Qiling
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              O'zbekistonda 20 mln+ Telegram foydalanuvchisini botingiz orqali mijozga aylantiring —
              buyurtma, to'lov va bildirishnoma bitta joyda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#229ED9] text-white font-semibold text-sm hover:bg-[#1a8ec2] shadow-[0_4px_16px_rgba(34,158,217,0.28)] transition-all duration-200 hover:-translate-y-px"
              >
                Telegramda Yozing
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/aloqa" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-border text-foreground font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all duration-200">
                Narx so'rash
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bot types */}
      <section className="py-16 bg-surface" aria-labelledby="bottypes-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <h2 id="bottypes-heading" className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-[-0.02em] text-center mb-10">
            Qanday bot kerak?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BOT_TYPES.map((b) => (
              <div key={b.title} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors duration-200">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background" aria-labelledby="features-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <h2 id="features-heading" className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-[-0.02em] text-center mb-10">
            Botingiz imkoniyatlari
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-5 rounded-xl bg-muted/40 border border-border hover:border-primary/20 transition-colors duration-200">
                  <div className="w-10 h-10 rounded bg-primary/8 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-[15px] mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-surface" aria-labelledby="process-heading">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 max-w-2xl">
          <h2 id="process-heading" className="font-display text-2xl font-bold text-foreground tracking-[-0.02em] text-center mb-10">
            Ish jarayoni
          </h2>
          <div className="space-y-5">
            {PROCESS.map((step) => (
              <div key={step.num} className="flex gap-4 items-start p-4 rounded-lg bg-card border border-border">
                <div className="w-9 h-9 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(37,99,235,0.25)]">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import Link from "next/link";
import { Phone, Mail, MapPin, Send, Camera, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS, SERVICES } from "@/lib/constants";

const serviceLinks = SERVICES.slice(0, 5).map((s) => ({
  label: s.title,
  href: `/xizmatlar/${s.slug}`,
}));

export function Footer() {
  return (
    <footer className="bg-[#0d1526] text-white" aria-label="Sayt pastki qismi">
      {/* Main */}
      <div className="container mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand — wider column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-primary rounded-[10px] flex items-center justify-center shadow-[0_4px_14px_rgba(37,99,235,0.35)] group-hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] transition-shadow">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-semibold text-white text-sm tracking-tight">SaytYaratamiz</span>
                <span className="text-[11px] text-white/40 font-medium">.uz</span>
              </div>
            </Link>

            <p className="text-sm text-white/55 leading-relaxed max-w-[260px]">
              O&apos;zbekistonda professional veb-sayt yaratish xizmati. Sifat,
              tezlik va ishonchlilik biz bilan.
            </p>

            {/* Social */}
            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[10px] bg-white/6 hover:bg-primary flex items-center justify-center text-white/50 hover:text-white border border-white/8 hover:border-primary transition-all duration-200"
                aria-label="Telegram kanalimiz"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[10px] bg-white/6 hover:bg-primary flex items-center justify-center text-white/50 hover:text-white border border-white/8 hover:border-primary transition-all duration-200"
                aria-label="Instagram sahifamiz"
              >
                <Camera className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold text-white/35 uppercase tracking-widest">
              Sahifalar
            </h3>
            <ul className="space-y-2.5" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold text-white/35 uppercase tracking-widest">
              Xizmatlar
            </h3>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold text-white/35 uppercase tracking-widest">
              Aloqa
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors group"
                >
                  <span className="w-8 h-8 rounded-[10px] bg-white/6 group-hover:bg-white/10 border border-white/8 flex items-center justify-center shrink-0 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-white/50" />
                  </span>
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors group"
                >
                  <span className="w-8 h-8 rounded-[10px] bg-white/6 group-hover:bg-white/10 border border-white/8 flex items-center justify-center shrink-0 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-white/50" />
                  </span>
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm text-white/55">
                  <span className="w-8 h-8 rounded-[10px] bg-white/6 border border-white/8 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-white/50" />
                  </span>
                  {SITE_CONFIG.address}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} SaytYaratamiz.uz. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/maxfiylik" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Maxfiylik siyosati
            </Link>
            <Link href="/foydalanish" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Foydalanish shartlari
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Sahifa Topilmadi",
  description: "Siz qidirgan sahifa mavjud emas. Bosh sahifaga qaytib kerakli ma'lumotni toping.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-5">
      <div className="text-center max-w-lg space-y-6">
        <p
          className="text-[9rem] font-black text-primary/12 leading-none select-none"
          aria-hidden="true"
        >
          404
        </p>
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-[-0.02em]">
            Sahifa Topilmadi
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
            Siz qidirgan sahifa mavjud emas yoki ko&apos;chirilgan.
            Bosh sahifaga qaytib kerakli ma&apos;lumotni toping.
          </p>
        </div>

        <nav aria-label="Sahifaga qaytish" className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[12px] bg-primary text-white font-semibold text-sm shadow-[0_4px_16px_rgba(37,99,235,0.28)] hover:bg-primary-dark transition-all duration-200 hover:-translate-y-px"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Bosh Sahifa
          </Link>
          <Link
            href="/xizmatlar"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[12px] border border-border text-foreground font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Xizmatlar
          </Link>
        </nav>
      </div>
    </main>
  );
}

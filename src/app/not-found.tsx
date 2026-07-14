import type { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import { BackButton } from "@/components/ui/BackButton";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "404 — Sahifa Topilmadi",
  description: "Siz qidirgan sahifa mavjud emas.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-black text-primary/20 mb-4 leading-none">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Sahifa Topilmadi
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Siz qidirgan sahifa mavjud emas yoki ko&apos;chirilgan.
          Bosh sahifaga qaytib, kerakli ma&apos;lumotni toping.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className={cn(
              "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl",
              "bg-primary text-white font-semibold",
              "hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 hover:-translate-y-0.5"
            )}
          >
            <Home className="w-4 h-4" />
            Bosh Sahifa
          </Link>
          <BackButton />
        </div>
      </div>
    </div>
  );
}

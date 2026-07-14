"use client";

import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export function BackButton({ className, children }: BackButtonProps) {
  return (
    <button
      onClick={() => window.history.back()}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl",
        "border border-border text-foreground font-semibold",
        "hover:border-primary hover:text-primary transition-all",
        className
      )}
    >
      <ArrowLeft className="w-4 h-4" />
      {children ?? "Orqaga qaytish"}
    </button>
  );
}

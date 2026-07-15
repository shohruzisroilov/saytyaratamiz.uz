"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  lightText?: boolean;
  onClick?: () => void;
}

export function Logo({ className, lightText = false, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 group shrink-0", className)}
      aria-label="SaytYaratamiz.uz bosh sahifasi"
      onClick={onClick}
    >
      {/* Premium SVG Vector Icon */}
      <div className="relative w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center shrink-0">
        <svg
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(37,99,235,0.15)] group-hover:scale-105 transition-transform duration-300"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logo-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <linearGradient id="logo-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>

          {/* Rounded base square shape */}
          <rect width="36" height="36" rx="9" fill="url(#logo-grad-1)" />

          {/* Stylized white code symbol S */}
          <path
            d="M23.5 13C23.5 13 21 10.5 18 10.5C14.5 10.5 12.5 12.5 12.5 15.5C12.5 19.5 23.5 17.5 23.5 21.5C23.5 24.5 21.5 26.5 18 26.5C14.5 26.5 12.5 24 12.5 24"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Accent dynamic dot */}
          <circle cx="18" cy="18.5" r="2.2" fill="url(#logo-grad-2)" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex items-baseline leading-none">
        <span
          className={cn(
            "font-black text-sm lg:text-[15px] tracking-tight group-hover:text-primary transition-colors duration-300",
            lightText ? "text-white" : "text-foreground"
          )}
        >
          SaytYaratamiz
        </span>
        <span className="text-[11px] font-black text-primary ml-0.5">.uz</span>
      </div>
    </Link>
  );
}

"use client";

import { useState } from "react";
import { Link as LinkIcon, Check, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialShareProps {
  url: string;
  title: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Havolani nusxalashda xatolik yuz berdi:", err);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Ulashish</p>
      <div className="flex flex-row lg:flex-col gap-2">
        {/* Telegram */}
        <a
          href={shareLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-[12px] border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-white hover:bg-[#229ED9] hover:border-[#229ED9] transition-all duration-300 group"
          title="Telegram orqali ulashish"
        >
          <Send className="w-4 h-4 rotate-[-15deg] group-hover:rotate-0 transition-transform" />
        </a>

        {/* Facebook */}
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-[12px] border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300"
          title="Facebook orqali ulashish"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
          </svg>
        </a>

        {/* Twitter / X */}
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-[12px] border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-white hover:bg-black hover:border-black transition-all duration-300"
          title="Twitter (X) orqali ulashish"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          className={cn(
            "w-10 h-10 rounded-[12px] border flex items-center justify-center transition-all duration-300 relative",
            copied
              ? "border-green-500 bg-green-500 text-white"
              : "border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/30"
          )}
          title="Havolani nusxalash"
        >
          {copied ? <Check className="w-4 h-4 animate-in fade-in zoom-in-75 duration-200" /> : <LinkIcon className="w-4 h-4" />}
          {copied && (
            <span className="absolute left-1/2 lg:left-12 top-[-30px] lg:top-1/2 lg:-translate-y-1/2 -translate-x-1/2 lg:translate-x-0 px-2 py-1 rounded bg-foreground text-background text-[10px] font-bold shadow-[0_4px_12px_rgba(0,0,0,0.1)] whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-200">
              Nusxalandi!
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

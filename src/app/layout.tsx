import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
});

// ─── Global default metadata ───────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: "SaytYaratamiz.uz — Professional Sayt Yaratish Xizmati",
    template: "%s | SaytYaratamiz.uz",
  },
  description:
    "O'zbekistonda professional sayt yaratish xizmati. Korporativ sayt, internet do'kon, landing page, CRM tizim, Telegram bot. 150+ loyiha. Bepul konsultatsiya.",
  keywords: [
    "sayt yaratish",
    "veb sayt yaratish",
    "internet do'kon yaratish",
    "landing page",
    "korporativ sayt",
    "web dizayn",
    "sayt yaratish narxi",
    "sayt yaratish xizmati",
    "O'zbekiston veb studiya",
    "O'zbekiston bo'ylab sayt yaratish",
    "CRM tizim",
    "Telegram bot yaratish",
    "saytyaratamiz",
  ],

  authors: [{ name: "Shohruz Isroilov", url: SITE_CONFIG.url }],
  creator: "SaytYaratamiz.uz",
  publisher: "SaytYaratamiz.uz",

  // Canonical + RSS
  alternates: {
    canonical: SITE_CONFIG.url,
    types: {
      "application/rss+xml": `${SITE_CONFIG.url}/feed.xml`,
    },
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "SaytYaratamiz.uz — Professional Sayt Yaratish O'zbekistonda",
    description:
      "O'zbekistonda professional sayt yaratish xizmati. Korporativ sayt, internet do'kon, landing page. Tez, sifatli va arzon narxda.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SaytYaratamiz.uz — Professional Sayt Yaratish O'zbekistonda",
        type: "image/png",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    site: "@saytyaratamiz",
    creator: "@saytyaratamiz",
    title: "SaytYaratamiz.uz — Professional Sayt Yaratish",
    description:
      "O'zbekistonda professional sayt yaratish xizmati. Tez, sifatli va arzon.",
    images: [
      {
        url: "/og.png",
        alt: "SaytYaratamiz.uz",
      },
    ],
  },

  // App icons (Next.js will serve these automatically)
  icons: {
    icon: [
      { url: "/icons/icon-32.png",  sizes: "32x32",   type: "image/png" },
      { url: "/icons/icon-96.png",  sizes: "96x96",   type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/icons/safari-pinned-tab.svg", color: "#2563eb" },
    ],
  },

  // Verification (replace placeholder when you get real token)
  verification: {
    google: "google-site-verification-placeholder",
    yandex: "yandex-verification-placeholder",
  },

  // Category
  category: "technology",
};

// ─── Viewport ─────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ─── Global Organization JSON-LD ──────────────────────────────────────────────
function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.url}/icons/icon-512.png`,
      width: 512,
      height: 512,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.phone,
        contactType: "customer service",
        availableLanguage: ["Uzbek", "Russian"],
        areaServed: "UZ",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
    ],
    sameAs: [
      SITE_CONFIG.telegram,
      SITE_CONFIG.instagram,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "O'zbekiston",
      addressCountry: "UZ",
    },
    email: SITE_CONFIG.email,
    foundingDate: "2019",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="uz"
      className={`${inter.variable} ${plusJakarta.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to Google Fonts CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for common third-parties */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <OrganizationJsonLd />
        <ThemeProvider>
          {/* Skip-to-main for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
          >
            Asosiy kontentga o&apos;tish
          </a>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

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
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "SaytYaratamiz.uz — Professional Sayt Yaratish | Veb Dizayn O'zbekiston",
    template: "%s | SaytYaratamiz.uz",
  },
  description:
    "O'zbekistonda professional sayt yaratish xizmati. Korporativ sayt, internet do'kon, landing page. Tez, sifatli va arzon narxda. Google'da yuqori o'rin kafolati.",
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
    "Toshkent sayt yaratish",
    "online do'kon yaratish",
    "saytyaratamiz",
  ],
  authors: [{ name: "SaytYaratamiz.uz", url: SITE_CONFIG.url }],
  creator: "SaytYaratamiz.uz",
  publisher: "SaytYaratamiz.uz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "SaytYaratamiz.uz — Professional Sayt Yaratish",
    description:
      "O'zbekistonda professional sayt yaratish xizmati. Korporativ sayt, internet do'kon, landing page. Tez, sifatli va arzon narxda.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SaytYaratamiz.uz — Professional Sayt Yaratish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaytYaratamiz.uz — Professional Sayt Yaratish",
    description:
      "O'zbekistonda professional sayt yaratish xizmati. Tez, sifatli va arzon.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uz"
      className={`${inter.variable} ${plusJakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

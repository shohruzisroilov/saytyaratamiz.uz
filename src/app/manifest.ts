import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SaytYaratamiz.uz — Professional Sayt Yaratish",
    short_name: "SaytYaratamiz",
    description:
      "O'zbekistonda professional sayt yaratish xizmati. Korporativ sayt, internet do'kon, landing page.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    orientation: "portrait-primary",
    scope: "/",
    lang: "uz",
    categories: ["business", "productivity"],
    icons: [
      { src: "/icons/icon-72.png",  sizes: "72x72",   type: "image/png" },
      { src: "/icons/icon-96.png",  sizes: "96x96",   type: "image/png" },
      { src: "/icons/icon-128.png", sizes: "128x128", type: "image/png" },
      { src: "/icons/icon-144.png", sizes: "144x144", type: "image/png" },
      { src: "/icons/icon-152.png", sizes: "152x152", type: "image/png" },
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icons/icon-384.png", sizes: "384x384", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    screenshots: [
      {
        src: "/og.png",
        sizes: "1200x630",
        type: "image/png",
        label: "SaytYaratamiz.uz bosh sahifasi",
      },
    ],
  };
}

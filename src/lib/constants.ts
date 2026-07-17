import type { Service, Testimonial, FAQ, TeamMember, PricingPlan, NavItem } from "@/types";

export const SITE_CONFIG = {
  name: "SaytYaratamiz.uz",
  url: "https://saytyaratamiz.uz",
  description:
    "O'zbekistonda professional sayt yaratish xizmati. Korporativ sayt, internet do'kon, landing page, va boshqa web yechimlar. Tez, arzon, sifatli.",
  ogImage: "/og.png",
  phone: "+998 94 008 04 73",
  telegram: "https://t.me/Shohruz_Isroilov",
  telegramDev: "https://t.me/devshohruz",
  instagram: "https://instagram.com/saytyaratamiz",
  email: "devshohruz@gmail.com",
  address: "O'zbekiston bo'ylab",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Xizmatlar", href: "/xizmatlar" },
  { label: "Narxlar", href: "/narxlar" },
  { label: "Blog", href: "/blog" },
  { label: "Biz haqimizda", href: "/haqimizda" },
  { label: "Aloqa", href: "/aloqa" },
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Korporativ Sayt",
    description:
      "Kompaniyangiz uchun professional korporativ sayt — brend imijingizni kuchaytirib, yangi mijoz jalb qiladi.",
    icon: "Building2",
    features: [
      "Dizayn va brending",
      "SEO optimizatsiya",
      "Admin panel",
      "Mobil versiya",
      "Tez yuklash",
      "SSL sertifikat",
    ],
    price: "1 500 000",
    slug: "korporativ-sayt",
  },
  {
    id: "2",
    title: "Internet Do'kon",
    description:
      "To'liq funksional internet do'kon — to'lov, katalog va boshqaruv paneli bilan onlayn soting.",
    icon: "ShoppingCart",
    features: [
      "Mahsulot katalogi",
      "Online to'lov",
      "Buyurtma boshqaruvi",
      "Ombor hisobi",
      "CRM integratsiya",
      "Statistika panel",
    ],
    price: "3 000 000",
    popular: true,
    slug: "internet-dokon",
  },
  {
    id: "3",
    title: "Landing Page",
    description:
      "Reklama kampaniyalari uchun ideal — yuqori konversiyali bir sahifali sayt.",
    icon: "LayoutTemplate",
    features: [
      "Bir sahifali dizayn",
      "A/B testing",
      "Tez yuklash (< 1s)",
      "Forma integratsiya",
      "Analytics",
      "Chaqiruv tugmalari",
    ],
    price: "800 000",
    slug: "landing-page",
  },
  {
    id: "4",
    title: "Veb Dastur",
    description:
      "Biznes jarayonlarini avtomatlashtiradigan maxsus veb ilovalar: CRM, ERP, dashboard va boshqalar.",
    icon: "Code2",
    features: [
      "Maxsus funksionallik",
      "API integratsiya",
      "Foydalanuvchi roli",
      "Real-vaqt ma'lumot",
      "Mobile app bilan sinxronizatsiya",
      "Texnik qo'llab-quvvatlash",
    ],
    price: "5 000 000",
    slug: "veb-dastur",
  },
  {
    id: "5",
    title: "SEO Optimallashtirish",
    description:
      "Saytingizni Google'da yuqori o'ringa chiqaramiz — kalit so'z, texnik SEO va kontent optimizatsiyasi bilan.",
    icon: "TrendingUp",
    features: [
      "Kalit so'zlar tadqiqoti",
      "On-page SEO",
      "Texnik SEO audit",
      "Backlink strategiya",
      "Oylik hisobot",
      "Raqobat tahlili",
    ],
    price: "500 000",
    slug: "seo-optimizatsiya",
  },
  {
    id: "6",
    title: "Saytni Qayta Ishlash",
    description:
      "Eski saytingizni zamonaviy texnologiyada yangilaymiz — tezroq, chiroyliroq, funksionalroq.",
    icon: "RefreshCw",
    features: [
      "Dizayn yangilash",
      "Tezlik optimallashtirish",
      "Mobil moslash",
      "SEO yaxshilash",
      "Xavfsizlik audit",
      "Kontent migratsiya",
    ],
    price: "1 200 000",
    slug: "qayta-ishlash",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Jasur Toshmatov",
    position: "Direktor",
    company: "TechVision LLC",
    content:
      "Shohruz va uning jamoasi biz uchun ajoyib korporativ sayt yaratdi. Narx va sifat nisbati juda yaxshi. Loyiha belgilangan muddatda topshirildi va biz kutganimizdan ham yaxshi chiqdi.",
    rating: 5,
    avatar: "/testimonials/jasur.jpg",
  },
  {
    id: "2",
    name: "Malika Yusupova",
    position: "Marketing Menejer",
    company: "Beauty Pro",
    content:
      "Internet do'konimiz ochilganidan beri savdo 3 barobar oshdi. Professional yondashuv, tezkor texnik qo'llab-quvvatlash. Ularni barcha do'stlarimga tavsiya qilaman!",
    rating: 5,
    avatar: "/testimonials/malika.jpg",
  },
  {
    id: "3",
    name: "Bobur Rahimov",
    position: "Asoschi",
    company: "ExpressFood",
    content:
      "Landing page orqali konversiyamiz 40% oshdi. Sayt judayam tez yuklanadi va Google'da birinchi sahifaga chiqdi. A/B testing natijalari ham ajoyib.",
    rating: 5,
    avatar: "/testimonials/bobur.jpg",
  },
  {
    id: "4",
    name: "Nilufar Karimova",
    position: "CEO",
    company: "EduStar Academy",
    content:
      "Online ta'lim platformamizni yaratishda juda professional yondashuv ko'rsatildi. Murakkab funksionalliklar ham muammosiz amalga oshirildi.",
    rating: 5,
    avatar: "/testimonials/nilufar.jpg",
  },
  {
    id: "5",
    name: "Sherzod Mirzayev",
    position: "Egasi",
    company: "AutoParts Shop",
    content:
      "2 oyda Google'da birinchi sahifaga chiqdik. SEO optimallashtirish xizmatlaridan juda mamnunman. Organik trafik 5 barobar oshdi!",
    rating: 5,
    avatar: "/testimonials/sherzod.jpg",
  },
  {
    id: "6",
    name: "Zulfiya Nazarova",
    position: "PR Menejer",
    company: "GreenLife Co",
    content:
      "Korporativ saytimiz qayta ishlanganidan keyin kompaniya imijimiz sezilarli yaxshilandi. Mijozlar endi ancha ko'proq bog'lanishmoqda.",
    rating: 5,
    avatar: "/testimonials/zulfiya.jpg",
  },
];

export const FAQS: FAQ[] = [
  {
    id: "1",
    question: "Sayt yaratish qancha vaqt oladi?",
    answer:
      "Sayt turiga qarab: landing page 5-7, korporativ sayt 10-15, internet do'kon 20-30 ish kuni. Aniq muddat texnik vazifada belgilanadi.",
    category: "Jarayon",
  },
  {
    id: "2",
    question: "Saytni yaratgandan keyin qo'llab-quvvatlaysizmi?",
    answer:
      "Ha, barcha loyihalar uchun 3 oy bepul texnik yordam beramiz — keyin oylik yoki yillik shartnoma orqali davom ettirish mumkin.",
    category: "Qo'llab-quvvatlash",
  },
  {
    id: "3",
    question: "Narxga nima kiradi?",
    answer:
      "Narxga dizayn, dasturlash, test va 3 oylik yordam kiradi. Domain va hosting alohida (yiliga ~200 000 so'm).",
    category: "Narx",
  },
  {
    id: "4",
    question: "To'lovni qanday amalga oshiraman?",
    answer:
      "To'lov 2 bosqichda: boshida 50%, yakunda 50% — naqd, bank o'tkazmasi yoki Payme/Click orqali.",
    category: "To'lov",
  },
  {
    id: "5",
    question: "Saytim Google'da ko'rinadimi?",
    answer:
      "Barcha saytlar asosiy SEO bilan taqdim etiladi — yuqori o'rin uchun alohida SEO xizmatimiz bor.",
    category: "SEO",
  },
  {
    id: "6",
    question: "Saytni o'zim boshqara olamanmi?",
    answer:
      "Ha, qulay admin panel bilan kontent va narxlarni texnik bilimsiz ham o'zgartira olasiz.",
    category: "Boshqaruv",
  },
  {
    id: "7",
    question: "Dizaynni o'zim taklif qila olamanmi?",
    answer:
      "Albatta — yoqtirgan misollaringizni bering, biz asosida yoki mutlaqo yangi dizayn yaratamiz.",
    category: "Dizayn",
  },
  {
    id: "8",
    question: "Mobil versiya ham bo'ladimi?",
    answer:
      "Ha, barcha saytlar 100% mobil moslashgan — telefon, planshet va kompyuterda mukammal ko'rinadi.",
    category: "Texnik",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "landing",
    name: "Landing Page",
    price: "1 200 000",
    duration: "3-5 ish kuni",
    description: "Bir sahifali yuqori konversiyali reklama sayti",
    features: [
      "1 sahifali maxsus dizayn",
      "Mobil responsive moslashuv",
      "Telegram-bot buyurtma xabarlari",
      "Facebook Pixel & Analytics ulanishi",
      "1 oylik bepul qo'llab-quvvatlash",
    ],
    notIncluded: [
      "Admin panel",
      "Ko'p tillilik",
      "Onlayn to'lov tizimlari",
    ],
    cta: "Buyurtma berish",
  },
  {
    id: "corporate",
    name: "Korporativ sayt",
    price: "2 900 000",
    duration: "7-10 ish kuni",
    description: "Kompaniyalar va brendlar uchun mukammal sayt",
    features: [
      "10 sahifagacha individual dizayn",
      "Qulay sayt boshqaruv paneli (Admin)",
      "Ko'p tilli tizim (UZ, RU, EN)",
      "Asosiy SEO optimallashtirish",
      "3 oylik bepul qo'llab-quvvatlash",
    ],
    notIncluded: [
      "Onlayn savatcha",
      "Online to'lov integratsiyasi",
    ],
    popular: true,
    cta: "Batafsil ma'lumot",
  },
  {
    id: "ecommerce",
    name: "Internet do'kon",
    price: "4 900 000",
    duration: "10-15 ish kuni",
    description: "Mahsulotlar katalogi, savatcha va to'lov bilan e-commerce",
    features: [
      "Cheksiz mahsulotlar katalogi",
      "Online to'lov (Payme, Click, Uzcard)",
      "SMS va Telegram bildirishnomalar",
      "Mijozlar kabineti va buyurtma tarixi",
      "3 oylik bepul qo'llab-quvvatlash",
    ],
    notIncluded: [
      "CRM tizimi bilan sinxronizatsiya",
    ],
    cta: "Do'kon ochish",
  },
  {
    id: "crm",
    name: "CRM tizimi",
    price: "6 000 000",
    duration: "15-20 ish kuni",
    description: "Mijozlar va savdolar boshqaruvi avtomatizatsiyasi",
    features: [
      "Mijozlar bazasi va pipeline nazorati",
      "Savdo analitikasi va hisobotlar",
      "Xodimlar vazifalari va nazorati",
      "IP-telefoniya va bot integratsiyasi",
      "6 oylik bepul qo'llab-quvvatlash",
    ],
    notIncluded: [
      "Tashqi ERP tizimlar (1C) integratsiyasi",
    ],
    cta: "CRM buyurtma qilish",
  },
  {
    id: "bot",
    name: "Telegram Bot",
    price: "1 800 000",
    duration: "3-5 ish kuni",
    description: "Avtomatlashtirilgan xizmat va savdo botlari",
    features: [
      "Web-app integratsiyali menyu",
      "Payme / Click online to'lovlar",
      "Buyurtmalar qabul qilish va boshqaruv",
      "Foydalanuvchilarga reklama yuborish",
      "1 oylik bepul qo'llab-quvvatlash",
    ],
    notIncluded: [
      "Murakkab ma'lumotlar bazasi integratsiyasi",
    ],
    cta: "Bot yaratish",
  },
  {
    id: "seo",
    name: "SEO optimallashtirish",
    price: "1 500 000",
    duration: "Har oyda",
    description: "Google va Yandex tizimlarida eng yuqori o'rinlarga chiqish",
    features: [
      "Kalit so'zlar va raqobatchilar tahlili",
      "Texnik va on-page SEO sozlash",
      "Google Search Console integratsiyasi",
      "Backlinklar bazasini kengaytirish",
      "Har oylik batafsil o'sish hisoboti",
    ],
    notIncluded: [
      "Reklama byudjeti (Google Ads)",
    ],
    cta: "SEO xizmati",
  },
];

export const STATS = [
  { label: "Muvaffaqiyatli loyiha", value: "150+", suffix: "" },
  { label: "Mamnun mijoz", value: "120+", suffix: "" },
  { label: "Yillik tajriba", value: "5+", suffix: "" },
  { label: "O'rtacha baholash", value: "4.9", suffix: "/5" },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Asilbek Xolmatov",
    role: "Loyiha Rahbari & Full-stack Developer",
    bio: "5+ yillik tajribali dasturchi. React, Next.js va Node.js bo'yicha mutaxassis.",
    avatar: "/team/asilbek.jpg",
    social: {
      telegram: "https://t.me/asilbek_dev",
      instagram: "https://instagram.com/asilbek_dev",
    },
  },
  {
    id: "2",
    name: "Kamola Umarova",
    role: "UI/UX Dizayner",
    bio: "Figma va Adobe XD'da professional dizayner. 100+ loyiha uchun interfeys yaratgan.",
    avatar: "/team/kamola.jpg",
    social: {
      telegram: "https://t.me/kamola_design",
    },
  },
  {
    id: "3",
    name: "Sardor Qodirov",
    role: "SEO Mutaxassis",
    bio: "Google Search, Analytics va Search Console bo'yicha sertifikatlangan mutaxassis.",
    avatar: "/team/sardor.jpg",
    social: {
      telegram: "https://t.me/sardor_seo",
    },
  },
];

// ─── Blog posts ───────────────────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  icon: string;
  tags: string[];
  author: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "2025-yilda Google'da birinchi sahifaga chiqish sirlari",
    slug: "google-birinchi-sahifaga-chiqish",
    excerpt:
      "SEO optimallashtirish bo'yicha eng so'nggi tendensiyalar va amaliy maslahatlar. Google algoritmining o'zgarishlariga moslanish strategiyalari.",
    content: `Google algoritmlar har yili yuzlab marta yangilanadi. 2025-yilda eng muhim omillar: Core Web Vitals, E-E-A-T signallari va semantik qidiruv. 

**1. Core Web Vitals optimizatsiya**
LCP (Largest Contentful Paint) 2.5 soniyadan kam bo'lishi kerak. Buning uchun rasmlarni WebP formatga o'tkazing, CDN ishlating va server javob vaqtini kamaytiring.

**2. E-E-A-T: Tajriba, Ekspertlik, Avtoritet, Ishonch**
Google endi muallifning real tajribasini baholaydi. Shuning uchun "Muallif haqida" sahifasini to'ldiring, kasbiy ijtimoiy profillaringizni saytga ulang.

**3. Semantik SEO**
Faqat kalit so'zlarga emas, mavzu klasterlariga e'tibor bering. Bitta asosiy sahifa + bir nechta yordam sahifalardan iborat "pillar content" strategiyasini qo'llang.

**4. Mobil birinchi indekslash**
Barcha kontentingiz mobil versiyada ham to'liq bo'lishi shart. Google asosan mobil versiyani indekslaydi.`,
    category: "SEO",
    readTime: "7 daqiqa",
    date: "2025-06-20",
    icon: "Search",
    tags: ["SEO", "Google", "Kalit so'zlar", "Core Web Vitals"],
    author: "Sardor Qodirov",
  },
  {
    id: "2",
    title: "Internet do'kon ochoqchi? Mana kerakli bosqichlar",
    slug: "internet-dokon-ochish-qadamlar",
    excerpt:
      "O'zbekistonda muvaffaqiyatli internet do'kon ochish uchun bilishingiz kerak bo'lgan barcha narsalar: platforma tanlash, to'lov tizimlari, marketing.",
    content: `O'zbekistonda e-commerce bozori yildan-yilga o'sib bormoqda. 2024-yilda onlayn savdo 30% ga oshdi. Quyida muvaffaqiyatli internet do'kon ochish uchun bosqichma-bosqich ko'rsatma.

**1. Platforma tanlash**
Next.js + custom backend — eng moslashuvchan va tez yechim. Shopify — tez ishga tushirish uchun yaxshi, lekin cheklovlar bor. WooCommerce — kichik va o'rta biznes uchun mos.

**2. O'zbekistonda to'lov tizimlari**
Payme, Click, Uzcard va Humo — bular O'zbekistonda eng keng tarqalgan to'lov usullari. Ularni integratsiya qilish majburiy.

**3. Logistika**
Yetkazib berish narxi va vaqti mijoz uchun hal qiluvchi omil. Mahalliy kuryerlik xizmatlari bilan shartnoma tuzing.

**4. Mahsulot suratlarini optimallashtirish**
Yuqori sifatli rasmlar — savdoning 40% ini ta'minlaydi. WebP format, alt text va siqilgan fayllar ishlating.`,
    category: "E-commerce",
    readTime: "10 daqiqa",
    date: "2025-06-15",
    icon: "ShoppingCart",
    tags: ["Internet do'kon", "E-commerce", "Payme", "Click"],
    author: "Asilbek Xolmatov",
  },
  {
    id: "3",
    title: "Landing page konversiyasini oshirish: 12 ta proven usul",
    slug: "landing-page-konversiya-oshirish",
    excerpt:
      "Landing page orqali ko'proq mijoz jalb qilish uchun amaliy maslahatlar. A/B testing, CTA optimallashtirish va psixologik trigger-lar.",
    content: `Yuqori konversiyali landing page — bu san'at va fan aralashmasi. Quyida 12 ta tasdiqlangan usul:

**1. Sarlavha 5 soniyada aniq bo'lsin**
Tashrif buyuruvchi sahifaga kirganida nima taklif etayotganingizni darhol tushunishi kerak. "Bizning mahsulotimiz ajoyib" emas, "24 soatda yetkazib beruvchi do'kon" deng.

**2. Bitta CTA qoidasi**
Bir sahifada faqat bitta asosiy harakat tugmasi bo'lsin. Ko'p variant = qaror qabul qilish paralizi.

**3. Ijtimoiy dalil (Social Proof)**
Mijozlar sharhlari, kompaniya logotiplari, statistikalar. Odamlar boshqalar nima qilganini ko'rib qaror qabul qiladi.

**4. Yuklash tezligi**
Har 1 soniya kechikish = 7% konversiya yo'qotish. PageSpeed Insights da 90+ ball oling.

**5. Mobil UX**
50%+ trafik mobildan keladi. Tugmalar kamida 44px bo'lsin.`,
    category: "Landing Page",
    readTime: "8 daqiqa",
    date: "2025-06-08",
    icon: "Target",
    tags: ["Landing Page", "Konversiya", "CTA", "A/B Testing"],
    author: "Kamola Umarova",
  },
  {
    id: "4",
    title: "Next.js 15 — yangi imkoniyatlar va performance yaxshilanishlari",
    slug: "nextjs-15-yangiliklar",
    excerpt:
      "Next.js 15 versiyasining asosiy yangiliklari: App Router, React Server Components, va boshqa muhim o'zgarishlar haqida batafsil.",
    content: `Next.js 15 — React ekotizimidagi muhim yangilik. Keling, asosiy o'zgarishlarni ko'rib chiqaylik.

**React 19 qo'llab-quvvatlash**
Next.js 15 React 19 bilan birga ishlaydi. Yangi Actions API, optimistik yangilanishlar va yaxshilangan Suspense.

**Partial Prerendering (PPR)**
Sahifaning statik qismini CDN dan, dinamik qismini server dan yuklash imkonini beradi. Bu katta performance o'sishi.

**Turbopack barqarorligi**
Development server endi Turbopack bilan ancha tezroq ishga tushadi. webpack ga nisbatan 10x tezroq kompilatsiya.

**Fetch kesh o'zgarishlari**
Endi default holda fetch keshlanmaydi. Bu ko'p dasturchilarni chalg'itgan muammo — endi intuitiv.`,
    category: "Texnologiya",
    readTime: "12 daqiqa",
    date: "2025-05-30",
    icon: "Code2",
    tags: ["Next.js", "React", "JavaScript", "Performance"],
    author: "Asilbek Xolmatov",
  },
  {
    id: "5",
    title: "Sayt tezligini oshirish: Core Web Vitals bo'yicha to'liq qo'llanma",
    slug: "sayt-tezligini-oshirish",
    excerpt:
      "Google's Core Web Vitals — LCP, FID va CLS ko'rsatkichlarini yaxshilash. Sayt tezligi SEO va konversiyaga qanday ta'sir qiladi.",
    content: `Core Web Vitals — Google tomonidan joriy qilingan uchta muhim ko'rsatkich. Ular saytingizning SEO reytingini va foydalanuvchi tajribasini bevosita ta'sir qiladi.

**LCP — Largest Contentful Paint**
Sahifadagi eng katta element yuklanish vaqti. Maqsad: 2.5 soniya. Optimallashtirish: rasmlarni lazy load qiling, CDN ishlating, server javobini tezlashtiring.

**INP — Interaction to Next Paint (FID o'rniga)**
2024-yildan FID o'rniga INP ishlatilmoqda. Foydalanuvchi tugmani bosganda sahifa qanchalik tez javob berishi. Maqsad: 200ms.

**CLS — Cumulative Layout Shift**
Sahifa yuklanayotganda elementlarning siljishi. Maqsad: 0.1 dan kam. Rasmlar va reklamalarga o'lcham bering.`,
    category: "Performance",
    readTime: "9 daqiqa",
    date: "2025-05-22",
    icon: "Zap",
    tags: ["Performance", "Core Web Vitals", "SEO", "Tezlik"],
    author: "Sardor Qodirov",
  },
  {
    id: "6",
    title: "O'zbekistonda e-commerce: 2025-yildagi tendensiyalar",
    slug: "uzbekistan-ecommerce-2025",
    excerpt:
      "O'zbekiston onlayn savdo bozori tahlili. Qaysi mahsulotlar ko'proq sotiladi, eng yaxshi to'lov tizimlari va logistika yechimlar.",
    content: `O'zbekiston e-commerce bozori jadal rivojlanmoqda. Keling, 2025-yildagi asosiy tendensiyalarni ko'rib chiqaylik.

**Bozor hajmi**
2025-yilda O'zbekiston e-commerce bozori $1.2 mlrd ga yetishi kutilmoqda. O'tgan yilga nisbatan 35% o'sish.

**Eng ko'p sotiladigan kategoriyalar**
1. Kiyim-kechak va aksessuarlar (28%)
2. Elektronika va gadjetlar (22%)
3. Oziq-ovqat yetkazish (18%)
4. Go'zallik mahsulotlari (15%)

**To'lov usullari statistikasi**
Payme — 45%, Click — 30%, Naqd — 15%, Uzcard/Humo — 10%.

**2025-yil tendensiyalari**
Live commerce (jonli translyatsiyada sotish), one-click checkout, WhatsApp/Telegram orqali buyurtma — bular eng tezkor o'sayotgan sohalar.`,
    category: "E-commerce",
    readTime: "6 daqiqa",
    date: "2025-05-15",
    icon: "BarChart2",
    tags: ["E-commerce", "O'zbekiston", "Tendensiya", "Statistika"],
    author: "Asilbek Xolmatov",
  },
];

// ─── New service pages data ────────────────────────────────────────────────────
export const CRM_FEATURES = [
  { icon: "Users", title: "Mijozlar bazasi", desc: "Barcha mijozlar ma'lumotlarini bir joyda saqlang va boshqaring." },
  { icon: "BarChart2", title: "Savdo analitikasi", desc: "Real-vaqtda savdo ko'rsatkichlari, grafiklar va hisobotlar." },
  { icon: "Bell", title: "Eslatma tizimi", desc: "Avtomatik eslatmalar va vazifalar boshqarish paneli." },
  { icon: "Workflow", title: "Pipeline boshqaruvi", desc: "Savdo jarayonini bosqichlarga bo'lib kuzating." },
  { icon: "Mail", title: "Email avtomatizatsiya", desc: "Mijozlarga avtomatik email yuborish tizimi." },
  { icon: "Shield", title: "Xavfsizlik", desc: "Ma'lumotlar shifrlangan va backup'lar muntazam olinadi." },
];

export const TELEGRAM_BOT_FEATURES = [
  { icon: "Bot", title: "Buyurtma qabul qilish", desc: "Mijozlar Telegram orqali to'g'ridan-to'g'ri buyurtma berishadi." },
  { icon: "CreditCard", title: "To'lov qabul qilish", desc: "Payme, Click va Uzcard bilan to'g'ridan-to'g'ri to'lov." },
  { icon: "Bell", title: "Bildirishnomalar", desc: "Yangi buyurtmalar, to'lovlar haqida darhol xabar." },
  { icon: "Users", title: "Mijozlar bazasi", desc: "Bot orqali to'plangan barcha foydalanuvchilar statistikasi." },
  { icon: "MessageSquare", title: "Avtomatik javoblar", desc: "Ko'p beriladigan savollarga avtomatik javoblar." },
  { icon: "BarChart2", title: "Admin panel", desc: "Buyurtmalar va statistikani boshqarish uchun qulay panel." },
];

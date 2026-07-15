import type { Service, Project, Testimonial, FAQ, TeamMember, PricingPlan, NavItem } from "@/types";

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
  address: "Toshkent, O'zbekiston",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Xizmatlar", href: "/xizmatlar" },
  { label: "Portfel", href: "/portfel" },
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
      "Kompaniyangiz uchun professional korporativ veb-sayt. Brend imijingizni kuchaytiring va yangi mijozlar jalb qiling.",
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
      "Mahsulotlaringizni onlayn soting. To'liq funksional e-commerce sayt: to'lov tizimlari, mahsulot katalogi va boshqaruv paneli.",
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
      "Mahsulot yoki xizmatni taqdim etish uchun yuqori konversiyali bir sahifali sayt. Reklama kampaniyalaringiz uchun ideal.",
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
      "Murakkab biznes jarayonlarini avtomatlashtiradigan maxsus veb ilovalar. CRM, ERP, dashboard va boshqa yechimlar.",
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
      "Saytingizni Google'da yuqori o'ringa chiqaring. Kalit so'zlar tahlili, texnik SEO, kontent optimizatsiya.",
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
      "Eski saytingizni zamonaviy texnologiyalar bilan yangilang. Tezlik, dizayn va funksionallikni oshiring.",
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

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AutoParts.uz",
    description: "Avtomobil ehtiyot qismlari internet do'koni. 10,000+ mahsulot, onlayn to'lov, tezkor yetkazib berish.",
    category: "Internet Do'kon",
    image: "/projects/autoparts.jpg",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
    slug: "autoparts-uz",
  },
  {
    id: "2",
    title: "MedCenter Pro",
    description: "Tibbiy klinika uchun korporativ sayt va online qabulga yozilish tizimi.",
    category: "Korporativ Sayt",
    image: "/projects/medcenter.jpg",
    technologies: ["Next.js", "Tailwind", "Node.js", "MongoDB"],
    slug: "medcenter-pro",
  },
  {
    id: "3",
    title: "RestoPOS",
    description: "Restoran va kafeler uchun onlayn menyu va buyurtma qabul qilish tizimi.",
    category: "Veb Dastur",
    image: "/projects/restopos.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MySQL"],
    slug: "restopos",
  },
  {
    id: "4",
    title: "EduLearn.uz",
    description: "Online ta'lim platformasi. Video darslar, testlar va sertifikat berish tizimi.",
    category: "Veb Dastur",
    image: "/projects/edulearn.jpg",
    technologies: ["Next.js", "Prisma", "AWS S3", "Stripe"],
    slug: "edulearn-uz",
  },
  {
    id: "5",
    title: "BuildPro Construction",
    description: "Qurilish kompaniyasi uchun professional korporativ sayt va loyihalar portfoliosi.",
    category: "Korporativ Sayt",
    image: "/projects/buildpro.jpg",
    technologies: ["Next.js", "Framer Motion", "Sanity CMS"],
    slug: "buildpro-construction",
  },
  {
    id: "6",
    title: "FashionStore",
    description: "Kiyim-kechak internet do'koni. 5,000+ mahsulot, filtr, wishlist va to'lov tizimi.",
    category: "Internet Do'kon",
    image: "/projects/fashionstore.jpg",
    technologies: ["Next.js", "Shopify API", "Tailwind", "TypeScript"],
    slug: "fashion-store",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Jasur Toshmatov",
    position: "Direktor",
    company: "TechVision LLC",
    content:
      "SaytYaratamiz.uz jamoasi biz uchun ajoyib korporativ sayt yaratdi. Narx va sifat nisbati juda yaxshi. Loyiha belgilangan muddatda topshirildi va biz kutganimizdan ham yaxshi chiqdi.",
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
    company: "FoodDelivery.uz",
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
      "Sayt turiga qarab farq qiladi. Landing page 5-7 ish kuni, korporativ sayt 10-15 ish kuni, internet do'kon 20-30 ish kuni davom etadi. Aniq muddat texnik vazifa asosida belgilanadi.",
    category: "Jarayon",
  },
  {
    id: "2",
    question: "Saytni yaratgandan keyin qo'llab-quvvatlaysizmi?",
    answer:
      "Ha, barcha loyihalar uchun 3 oy bepul texnik qo'llab-quvvatlash beramiz. Keyin oylik yoki yillik xizmat shartnomasi orqali davom ettirishingiz mumkin.",
    category: "Qo'llab-quvvatlash",
  },
  {
    id: "3",
    question: "Narxga nima kiradi?",
    answer:
      "Narxga: dizayn, dasturlash, test qilish, saytni serverga joylashtirish va 3 oylik qo'llab-quvvatlash kiradi. Domain va hosting xarajatlari alohida hisoblanadi (yiliga ~200,000 so'm).",
    category: "Narx",
  },
  {
    id: "4",
    question: "To'lovni qanday amalga oshiraman?",
    answer:
      "To'lov 2 bosqichda amalga oshiriladi: loyiha boshlanishida 50%, tugaganda 50%. Naqd pul, bank o'tkazmasi yoki Payme/Click orqali to'lash mumkin.",
    category: "To'lov",
  },
  {
    id: "5",
    question: "Saytim Google'da ko'rinadimi?",
    answer:
      "Barcha saytlarimiz asosiy SEO optimallashtirish bilan taqdim etiladi. Yuqori o'rinlar uchun esa alohida SEO xizmatimizdan foydalanishingiz mumkin.",
    category: "SEO",
  },
  {
    id: "6",
    question: "Saytni o'zim boshqara olamanmi?",
    answer:
      "Ha, barcha saytlarga qulay admin panel o'rnatamiz. Siz texnik bilimga ega bo'lmasdan ham kontent, narxlar va boshqa ma'lumotlarni o'zgartirishingiz mumkin.",
    category: "Boshqaruv",
  },
  {
    id: "7",
    question: "Dizaynni o'zim taklif qila olamanmi?",
    answer:
      "Albatta! Siz o'zingiz yoqtirgan misollar keltira olasiz. Biz esa ularni asosida yoki mutlaqo yangi original dizayn yaratamiz.",
    category: "Dizayn",
  },
  {
    id: "8",
    question: "Mobil versiya ham bo'ladimi?",
    answer:
      "Ha, barcha saytlarimiz 100% mobil mos (responsive) bo'ladi. Telefon, planshet va kompyuterda mukammal ko'rinadi.",
    category: "Texnik",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Boshlang'ich",
    price: "800 000",
    description: "Kichik biznes va startaplar uchun ideal",
    features: [
      "Landing page (1 sahifa)",
      "Mobil responsive dizayn",
      "Aloqa formasi",
      "Asosiy SEO",
      "3 oy qo'llab-quvvatlash",
      "Hostingga joylashtirish",
    ],
    notIncluded: [
      "Admin panel",
      "Blog tizimi",
      "Ko'p tilli versiya",
    ],
    cta: "Buyurtma berish",
  },
  {
    id: "business",
    name: "Biznes",
    price: "2 500 000",
    description: "O'rta va katta bizneslar uchun optimal tanlov",
    features: [
      "Korporativ sayt (10 sahifagacha)",
      "Admin panel",
      "Blog tizimi",
      "SEO optimallashtirish",
      "Ko'p tilli versiya",
      "Forma va analytics",
      "6 oy qo'llab-quvvatlash",
      "Tezkor yuklash optimallashtirish",
    ],
    popular: true,
    cta: "Eng mashhur",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    price: "4 500 000",
    description: "Internet do'kon ochmoqchi bo'lganlar uchun",
    features: [
      "To'liq internet do'kon",
      "Mahsulot katalogi (cheksiz)",
      "Online to'lov (Payme, Click, Uzcard)",
      "Buyurtma boshqaruvi",
      "Inventar tizimi",
      "Mijozlar kabineti",
      "1 yil qo'llab-quvvatlash",
      "Marketing integratsiyalar",
    ],
    cta: "Buyurtma berish",
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
  emoji: string;
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
    emoji: "🔍",
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
    emoji: "🛒",
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
    emoji: "🎯",
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
    emoji: "💻",
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
    emoji: "⚡",
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
    emoji: "📊",
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

import { NextResponse } from "next/server";

const SERVICE_LABELS: Record<string, string> = {
  landing: "Landing Page (Reklama sayti)",
  corporate: "Korporativ sayt (Brend sayti)",
  ecommerce: "Internet do'kon (E-commerce)",
  crm: "CRM tizim (Savdo va nazorat)",
  bot: "Telegram Bot (Xizmatlar & to'lov)",
  seo: "SEO optimallashtirish",
  other: "Boshqa loyihalar",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message, honeypot } = body;

    // Check honeypot for spam bot detection
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Spam detected and discarded." });
    }

    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Ism, telefon va xabar maydonlari to'ldirilishi majburiy." },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Missing Telegram Bot config environment variables.");
      return NextResponse.json(
        { success: false, error: "Telegram bot sozlamalari topilmadi." },
        { status: 500 }
      );
    }

    const serviceLabel = SERVICE_LABELS[service] || service || "Kiritilmagan";

    // Format Message
    const text = [
      "🔔 <b>YANGI MUROJAAT</b>\n",
      `👤 <b>Mijoz:</b> ${name}`,
      `📞 <b>Tel:</b> ${phone}`,
      `📧 <b>Email:</b> ${email ? email : "<i>kiritilmagan</i>"}`,
      `💼 <b>Xizmat:</b> ${serviceLabel}`,
      "\n📝 <b>Batafsil:</b>",
      `<i>${message}</i>`
    ].join("\n");

    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram API Error Response:", errorData);
      throw new Error(`Telegram API returned status ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Handler Error:", error);
    return NextResponse.json(
      { success: false, error: "Murojaat yuborishda xatolik yuz berdi." },
      { status: 500 }
    );
  }
}

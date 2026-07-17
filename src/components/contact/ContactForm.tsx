"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, AlertCircle, X, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  honeypot: string; // Anti-spam honeypot
  captchaAnswer: string; // User answer
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  captcha?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "landing",
    message: "",
    honeypot: "",
    captchaAnswer: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Captcha state
  const [captchaNums, setCaptchaNums] = useState({ a: 0, b: 0 });

  const generateCaptcha = () => {
    setCaptchaNums({
      a: Math.floor(Math.random() * 9) + 1,
      b: Math.floor(Math.random() * 9) + 1,
    });
    setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Handle Toast Auto-Dismiss
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    const phoneRegex = /^\+?[0-9\s-]{9,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      tempErrors.name = "Ismingizni kiriting";
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Ism kamida 2 ta harfdan iborat bo'lishi kerak";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Telefon raqamingizni kiriting";
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = "Yaroqsiz telefon raqami (masalan: +998 90 123 45 67)";
    }

    if (formData.email && !emailRegex.test(formData.email)) {
      tempErrors.email = "Yaroqsiz elektron pochta manzili";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Murojaat matnini kiriting";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Murojaat matni kamida 10 ta belgidan iborat bo'lishi kerak";
    }

    const correctSum = captchaNums.a + captchaNums.b;
    if (parseInt(formData.captchaAnswer) !== correctSum) {
      tempErrors.captcha = "Kapcha javobi noto'g'ri";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check spam honeypot
    if (formData.honeypot) {
      // Reject bot silently
      setToast({
        type: "success",
        message: "Murojaatingiz qabul qilindi. Tez orada bog'lanamiz!",
      });
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Murojaat yuborishda xatolik yuz berdi.");
      }
      
      setToast({
        type: "success",
        message: "Murojaatingiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.",
      });

      // Clear Form
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "landing",
        message: "",
        honeypot: "",
        captchaAnswer: "",
      });
      generateCaptcha();
    } catch (err: any) {
      setToast({
        type: "error",
        message: err.message || "Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className={cn(
              "fixed top-6 right-6 z-50 flex items-start gap-3 p-4 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] max-w-sm border",
              toast.type === "success"
                ? "bg-[#F0FDF4] border-[#BBF7D0] text-[#166534]"
                : "bg-[#FEF2F2] border-[#FECACA] text-[#991B1B]"
            )}
          >
            {toast.type === "success" ? (
              <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            )}
            <div className="flex-1 text-xs font-semibold leading-relaxed">
              {toast.message}
            </div>
            <button type="button"
              onClick={() => setToast(null)}
              className="text-muted-foreground hover:text-foreground shrink-0"
              aria-label="Yopish"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-5 bg-card border border-border p-6 sm:p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.03)]">
        <h2 className="font-display text-xl font-bold text-foreground tracking-tight mb-2">Murojaat Formasi</h2>
        
        {/* Anti-spam honeypot (visually hidden) */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            placeholder="Do not fill this field"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Name */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-bold text-foreground/80">Ismingiz *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ismingizni kiriting"
              className={cn(
                "w-full px-4 py-3 rounded-md bg-background border text-xs focus:outline-none focus:border-primary/45 transition-colors",
                errors.name ? "border-red-500/70" : "border-border"
              )}
            />
            {errors.name && <p className="text-[10px] font-bold text-red-500">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-xs font-bold text-foreground/80">Telefon raqamingiz *</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+998 90 123 45 67"
              className={cn(
                "w-full px-4 py-3 rounded-md bg-background border text-xs focus:outline-none focus:border-primary/45 transition-colors",
                errors.phone ? "border-red-500/70" : "border-border"
              )}
            />
            {errors.phone && <p className="text-[10px] font-bold text-red-500">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-bold text-foreground/80">Elektron pochta (ixtiyoriy)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              className={cn(
                "w-full px-4 py-3 rounded-md bg-background border text-xs focus:outline-none focus:border-primary/45 transition-colors",
                errors.email ? "border-red-500/70" : "border-border"
              )}
            />
            {errors.email && <p className="text-[10px] font-bold text-red-500">{errors.email}</p>}
          </div>

          {/* Service Dropdown */}
          <div className="space-y-1.5">
            <label htmlFor="service" className="text-xs font-bold text-foreground/80">Xizmat turi</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-background border border-border text-xs focus:outline-none focus:border-primary/45 transition-colors"
            >
              <option value="landing">Landing Page (Reklama sayti)</option>
              <option value="corporate">Korporativ sayt (Brend sayti)</option>
              <option value="ecommerce">Internet do&apos;kon (E-commerce)</option>
              <option value="crm">CRM tizim (Savdo va nazorat)</option>
              <option value="bot">Telegram Bot (Xizmatlar & to&apos;lov)</option>
              <option value="seo">SEO optimallashtirish</option>
              <option value="other">Boshqa loyihalar</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs font-bold text-foreground/80">Loyiha haqida batafsil *</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Loyiha maqsadi, sahifalar soni, dizayn talablari va boshqalar..."
            className={cn(
              "w-full px-4 py-3 rounded-md bg-background border text-xs focus:outline-none focus:border-primary/45 transition-colors resize-none",
              errors.message ? "border-red-500/70" : "border-border"
            )}
          />
          {errors.message && <p className="text-[10px] font-bold text-red-500">{errors.message}</p>}
        </div>

        {/* Captcha Spam Protection */}
        <div className="p-4 rounded-lg bg-muted/50 border border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/8 flex items-center justify-center text-primary">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Xavfsizlik tekshiruvi *</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Spam botlardan himoyalanish</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-foreground tracking-wide bg-background border border-border px-3 py-2 rounded-sm select-none">
              {captchaNums.a} + {captchaNums.b} =
            </span>
            <input
              type="number"
              name="captchaAnswer"
              value={formData.captchaAnswer}
              onChange={handleChange}
              placeholder="?"
              className={cn(
                "w-16 px-3 py-2 rounded-sm bg-background border text-center text-xs font-bold focus:outline-none focus:border-primary/45 transition-colors",
                errors.captcha ? "border-red-500/70" : "border-border"
              )}
            />
          </div>
        </div>
        {errors.captcha && <p className="text-[10px] font-bold text-red-500 text-right">{errors.captcha}</p>}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-primary hover:bg-primary-dark text-white font-bold text-sm shadow-[0_4px_16px_rgba(37,99,235,0.22)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.32)] transition-all duration-300 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4.5 h-4.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              Yuborilmoqda...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Murojaatni yuborish
            </>
          )}
        </button>
      </form>
    </div>
  );
}

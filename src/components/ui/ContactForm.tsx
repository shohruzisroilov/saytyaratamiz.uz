"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/constants";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
}

const initial: FormData = { name: "", phone: "", email: "", service: "", message: "" };

const inputBase = cn(
  "w-full px-4 py-3 rounded-[12px] text-sm border bg-muted/40 text-foreground",
  "placeholder:text-muted-foreground/60",
  "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40",
  "transition-all duration-200"
);

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Ism majburiy";
    if (!form.phone.trim()) e.phone = "Telefon raqam majburiy";
    else if (!/^\+?[0-9\s\-()]{9,15}$/.test(form.phone.trim())) e.phone = "Telefon raqam noto'g'ri";
    if (!form.service) e.service = "Xizmat turini tanlang";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
    setForm(initial);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 py-14 text-center"
      >
        <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7 text-green-500" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground mb-1.5">Xabaringiz yuborildi!</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            Tez orada siz bilan bog&apos;lanamiz. Odatda 1–2 soat ichida javob beramiz.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="mt-1 px-5 py-2.5 rounded-[12px] border border-border text-sm font-medium hover:border-primary/40 hover:text-primary transition-all duration-200"
        >
          Yana yuborish
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Aloqa formasi">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
          Ism Familiya <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="text" id="name" name="name"
          value={form.name} onChange={handleChange}
          placeholder="Jasur Toshmatov" autoComplete="name"
          aria-required="true"
          className={cn(inputBase, errors.name ? "border-red-400" : "border-border hover:border-muted-foreground/40")}
        />
        {errors.name && <p role="alert" className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
          Telefon Raqam <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="tel" id="phone" name="phone"
          value={form.phone} onChange={handleChange}
          placeholder="+998 90 123 45 67" autoComplete="tel"
          aria-required="true"
          className={cn(inputBase, errors.phone ? "border-red-400" : "border-border hover:border-muted-foreground/40")}
        />
        {errors.phone && <p role="alert" className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
          Email{" "}
          <span className="text-muted-foreground text-xs font-normal">(ixtiyoriy)</span>
        </label>
        <input
          type="email" id="email" name="email"
          value={form.email} onChange={handleChange}
          placeholder="jasur@email.com" autoComplete="email"
          className={cn(inputBase, "border-border hover:border-muted-foreground/40")}
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">
          Xizmat Turi <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="service" name="service"
          value={form.service} onChange={handleChange}
          aria-required="true"
          className={cn(
            inputBase, "cursor-pointer",
            errors.service ? "border-red-400" : "border-border hover:border-muted-foreground/40",
            !form.service && "text-muted-foreground/60"
          )}
        >
          <option value="" disabled>Xizmat turini tanlang...</option>
          {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
          <option value="other">Boshqa</option>
        </select>
        {errors.service && <p role="alert" className="mt-1.5 text-xs text-red-500">{errors.service}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Xabar{" "}
          <span className="text-muted-foreground text-xs font-normal">(ixtiyoriy)</span>
        </label>
        <textarea
          id="message" name="message"
          value={form.message} onChange={handleChange}
          placeholder="Loyiha haqida qisqacha ma'lumot bering..."
          rows={4}
          className={cn(inputBase, "border-border hover:border-muted-foreground/40 resize-none")}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "w-full flex items-center justify-center gap-2 py-3.5 rounded-[12px]",
          "font-semibold text-sm text-white bg-primary hover:bg-primary-dark",
          "shadow-[0_4px_16px_rgba(37,99,235,0.28)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.38)]",
          "transition-all duration-200 hover:-translate-y-px",
          "disabled:opacity-65 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        )}
      >
        {status === "loading" ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Yuborilmoqda...</>
        ) : (
          <><Send className="w-4 h-4" /> Yuborish</>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        Ma&apos;lumotlaringiz uchinchi shaxslarga uzatilmaydi.
      </p>
    </form>
  );
}

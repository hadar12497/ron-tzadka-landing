"use client";

import { ArrowLeft, Loader2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

type SubmitState = "idle" | "sending" | "success" | "error";

type ContactFormProps = {
  source?: string;
  privacyText?: string;
  goalPlaceholder?: string;
  submitLabel?: string;
  idleMessage?: string;
};

export function ContactForm({
  source = "רון צדקה",
  privacyText = "קראתי ואני מאשר/ת שמותר לרון או לצוות לחזור אליי לגבי שיחת התאמה.",
  goalPlaceholder = "לדוגמה: ירידה במשקל, חיטוב, כוח או חזרה לשגרה.",
  submitLabel = "שליחת פרטים",
  idleMessage = "הפרטים נשלחים לבדיקה ראשונית בלבד. אין התחייבות להתחיל תהליך.",
}: ContactFormProps) {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      goal: String(form.get("goal") ?? ""),
      source,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setState("error");
        setMessage(data.message ?? "משהו השתבש בשליחה.");
        return;
      }

      setState("success");
      setMessage(data.message ?? "ההודעה נשלחה.");
      event.currentTarget.reset();
    } catch {
      setState("error");
      setMessage("לא הצלחנו לשלוח כרגע. בדוק חיבור ונסה שוב.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          שם מלא
          <input name="name" autoComplete="name" required minLength={2} placeholder="לדוגמה: דניאל כהן" />
        </label>
        <label>
          טלפון
          <input name="phone" autoComplete="tel" required minLength={7} placeholder="050-0000000" />
        </label>
      </div>
      <label>
        אימייל
        <input name="email" type="email" autoComplete="email" placeholder="name@email.com" />
      </label>
      <label>
        מה המטרה שלך?
        <textarea
          name="goal"
          rows={4}
          placeholder={goalPlaceholder}
        />
      </label>
      <label className="privacy-check">
        <input name="privacy" type="checkbox" required />
        <span>{privacyText}</span>
      </label>
      <button className="primary-button light form-submit" type="submit" disabled={state === "sending"}>
        {state === "sending" ? <Loader2 className="spin" size={18} aria-hidden="true" /> : <Send size={18} aria-hidden="true" />}
        {state === "sending" ? "שולח..." : submitLabel}
        <ArrowLeft size={18} aria-hidden="true" />
      </button>
      <p className={`form-status ${state === "success" ? "success" : state === "error" ? "error" : ""}`} aria-live="polite">
        {message || idleMessage}
      </p>
    </form>
  );
}

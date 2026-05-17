import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  goal?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "הטופס לא נשלח. נסה שוב בעוד רגע." }, { status: 400 });
  }

  const name = clean(payload.name);
  const phone = clean(payload.phone);
  const email = clean(payload.email);
  const goal = clean(payload.goal);

  if (name.length < 2) {
    return NextResponse.json({ message: "צריך שם מלא כדי לחזור אליך בצורה מסודרת." }, { status: 400 });
  }

  if (phone.length < 7) {
    return NextResponse.json({ message: "צריך מספר טלפון תקין לחזרה." }, { status: 400 });
  }

  if (email && !emailPattern.test(email)) {
    return NextResponse.json({ message: "האימייל לא נראה תקין." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Ron Tzadka <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return NextResponse.json(
      {
        message:
          "הטופס כבר מחובר לשרת, אבל חסרים RESEND_API_KEY ו-CONTACT_TO_EMAIL בקובץ הסביבה כדי לשלוח אימייל אמיתי.",
      },
      { status: 503 },
    );
  }

  const html = `
    <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.7; color: #171412;">
      <h2>ליד חדש מהאתר של רון צדקה</h2>
      <p><strong>שם:</strong> ${escapeHtml(name)}</p>
      <p><strong>טלפון:</strong> ${escapeHtml(phone)}</p>
      <p><strong>אימייל:</strong> ${email ? escapeHtml(email) : "לא הוזן"}</p>
      <p><strong>מטרה:</strong></p>
      <p>${goal ? escapeHtml(goal) : "לא הוזנה מטרה"}</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: `ליד חדש לרון צדקה מ-${name}`,
      html,
      reply_to: email || undefined,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "השרת קיבל את הטופס, אבל שירות המייל החזיר שגיאה. בדוק את הגדרות Resend." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "ההודעה נשלחה. נחזור אליך בהקדם." });
}

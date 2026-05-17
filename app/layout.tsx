import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "רון צדקה | אימוני כוח וחיטוב בלהבים",
  description:
    "דף נחיתה לרון צדקה, מאמן כושר ובעל סטודיו לאימוני כוח וחיטוב בלהבים.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

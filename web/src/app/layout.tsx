import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

// גופן עברי מ-Google Fonts, נטען בזמן build ומוגש מאותו דומיין
const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wellbeing",
  description: "תזכורת אישית בזמן שבחרת, ומקום פשוט לראות במה באמת עמדת.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // האפליקציה כולה בעברית ו-RTL. כיווניות נקבעת כאן, פעם אחת, לכל הדפים
    <html lang="he" dir="rtl" className={`${assistant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

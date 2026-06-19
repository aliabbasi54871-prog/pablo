import type { Metadata } from "next";
import { Inter, Bebas_Neue, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import FilmGrain from "@/components/layout/FilmGrain";
import StoryProgress from "@/components/layout/StoryProgress";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-quote",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Пабло Эскобар: как медиа создают историческую память",
  description:
    "Почему спустя 30 лет после смерти наркобарона миллионы людей знают его имя, но не знают имена тысяч его жертв?",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${inter.variable} ${bebas.variable} ${cormorant.variable}`}>
      <body className="font-sans">
        <StoryProgress />
        <FilmGrain />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Oswald, Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import FilmGrain from "@/components/layout/FilmGrain";
import StoryProgress from "@/components/layout/StoryProgress";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-quote",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-mono",
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
    <html lang="ru" className={`${inter.variable} ${oswald.variable} ${cormorant.variable} ${mono.variable}`}>
      <body className="font-sans text-[#F5F5F5]">
        <StoryProgress />
        <FilmGrain />
        {children}
      </body>
    </html>
  );
}

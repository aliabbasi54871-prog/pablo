import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import FilmGrain from "@/components/layout/FilmGrain";
import StoryProgress from "@/components/layout/StoryProgress";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NARCOS — История, память и миф в цифровую эпоху",
  description:
    "Storytelling-лендинг о том, как сериал Narcos конструирует историческую память о Пабло Эскобаре.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <StoryProgress />
        <FilmGrain />
        {children}
      </body>
    </html>
  );
}

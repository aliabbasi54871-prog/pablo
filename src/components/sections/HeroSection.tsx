"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { heroData } from "@/data/content";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const overlayScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.3]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToStory = () => {
    document.getElementById("city-before")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <motion.div style={{ scale: bgScale }} className="absolute inset-0">
        <Image
          src={heroData.background}
          alt="Медельин"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      <motion.div
        style={{ scale: overlayScale, opacity: overlayOpacity }}
        className="absolute inset-0"
      >
        <Image
          src={heroData.overlay}
          alt="Пабло Эскобар, 1989"
          fill
          className="object-cover object-top mix-blend-luminosity"
          priority
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      <div className="vignette absolute inset-0" />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="mb-8 text-[10px] uppercase text-muted md:text-xs"
        >
          Документальное исследование
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="font-display text-[clamp(4rem,15vw,10rem)] font-bold leading-none tracking-[0.12em] text-white"
        >
          {heroData.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 max-w-3xl font-display text-xl font-light tracking-wide text-white/90 md:text-2xl lg:text-3xl"
        >
          {heroData.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-white/55 md:text-base"
        >
          {heroData.description}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToStory}
          className="mt-14 rounded-sm bg-netflix px-12 py-4 text-xs font-medium uppercase tracking-[0.25em] text-white"
        >
          {heroData.cta}
        </motion.button>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="h-12 w-px bg-gradient-to-b from-netflix/80 to-transparent" />
      </motion.div>
    </section>
  );
}

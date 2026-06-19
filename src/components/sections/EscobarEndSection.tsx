"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { endData } from "@/data/content";

export default function EscobarEndSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0.8]);

  return (
    <section id="end" ref={ref} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src={endData.image}
          alt="Смерть Пабло Эскобара"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />

      <motion.div
        style={{ opacity: textOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-netflix">
          {endData.title}
        </span>
        <h2 className="mt-6 font-display text-4xl font-light md:text-6xl lg:text-7xl">
          {endData.subtitle}
        </h2>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          {endData.text}
        </p>
      </motion.div>
    </section>
  );
}

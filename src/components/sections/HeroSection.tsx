"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { section1, projectMeta } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id={section1.id} className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image src={section1.background} alt="Баррио Пабло Эскобар" fill className="object-cover" priority sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-black/75" />
      <div className="vignette absolute inset-0" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 py-20 text-center sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 sm:mb-16"
        >
          <p className="font-display text-xs uppercase tracking-[0.25em] text-netflix sm:text-sm sm:tracking-[0.4em]">
            {projectMeta.title}
          </p>
          <p className="mt-2 font-display text-[10px] uppercase tracking-[0.15em] text-secondary sm:text-xs sm:tracking-[0.25em]">
            {projectMeta.subtitle}
          </p>
        </motion.div>

        <ScrollReveal>
          <h1 className="heading-display text-white">{section1.title}</h1>
        </ScrollReveal>

        <div className="mt-8 max-w-2xl space-y-3 sm:mt-12 sm:space-y-4">
          {section1.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <p
                className={`text-body ${
                  i === section1.paragraphs.length - 2
                    ? "font-display text-base uppercase tracking-wider text-white sm:text-xl md:text-2xl"
                    : ""
                } ${i === section1.paragraphs.length - 1 ? "text-sm text-white sm:text-base md:text-xl" : ""}`}
              >
                {p}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-8 flex flex-col items-center"
        >
          <span className="text-xs text-secondary">↓</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

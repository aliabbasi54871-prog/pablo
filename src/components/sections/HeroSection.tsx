"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { section1, projectMeta } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id={section1.id} className="relative h-screen min-h-[700px] overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image src={section1.background} alt="" fill className="object-cover" priority sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-black/75" />
      <div className="vignette absolute inset-0" />

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-16">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-netflix md:text-base">{projectMeta.title}</p>
          <p className="mt-2 font-display text-xs uppercase tracking-[0.25em] text-secondary md:text-sm">{projectMeta.subtitle}</p>
        </motion.div>
        <ScrollReveal>
          <h1 className="heading-display text-white">{section1.title}</h1>
        </ScrollReveal>
        <div className="mt-12 max-w-2xl space-y-4">
          {section1.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <p className={`text-body ${i === section1.paragraphs.length - 2 ? "font-display text-xl uppercase tracking-wider text-white md:text-2xl" : ""} ${i === section1.paragraphs.length - 1 ? "text-white md:text-xl" : ""}`}>
                {p}
              </p>
            </ScrollReveal>
          ))}
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute bottom-12 flex flex-col items-center gap-2">
          <span className="text-xs text-secondary">↓</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

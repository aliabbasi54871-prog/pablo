"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { section8 } from "@/data/content";

export default function PriceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section id={section8.id} ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image src={section8.image} alt="Последствия нарковойны" fill className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-black/75" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 py-16 text-center sm:px-6"
      >
        <h2 className="heading-section">{section8.title}</h2>
        <div className="mt-8 max-w-xl space-y-2 sm:mt-10 sm:space-y-3">
          {section8.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className={`text-body ${
                i > 0 && i < 6
                  ? "font-display text-sm uppercase tracking-wider text-white/80 sm:text-lg"
                  : ""
              } ${i === 0 ? "text-white" : ""}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

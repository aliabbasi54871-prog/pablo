"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { section8 } from "@/data/content";

export default function PriceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section id={section8.id} ref={ref} className="relative h-screen min-h-[600px] overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image src={section8.image} alt="" fill className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-black/70" />

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h2 className="heading-section">{section8.title}</h2>
        <div className="mt-10 max-w-xl space-y-3">
          {section8.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className={`text-body ${i > 0 && i < 6 ? "font-display text-lg uppercase tracking-wider text-white/80" : ""} ${i === 0 ? "text-white" : ""}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

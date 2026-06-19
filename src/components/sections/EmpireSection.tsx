"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { section4 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function EmpireSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "-40%"]);

  return (
    <section id={section4.id} ref={ref} className="overflow-hidden bg-background py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="red-line mb-8" />
          <h2 className="heading-section">{section4.title}</h2>
        </ScrollReveal>
        <div className="mt-8 max-w-2xl space-y-5">
          {section4.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <p className="text-body">{p}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <motion.div style={{ x }} className="mt-16 flex gap-6 px-6 md:gap-10 md:px-12">
        {section4.gallery.map((src, i) => (
          <motion.div
            key={src}
            className="relative h-[60vh] w-[80vw] shrink-0 overflow-hidden md:w-[50vw]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="50vw" />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        ))}
      </motion.div>

      <div className="section-padding mx-auto max-w-7xl">
        <ScrollReveal delay={0.3}>
          <div className="mt-16 border-t border-white/10 pt-16 text-center">
            <div className="big-number">{section4.stat.value}</div>
            <p className="mt-4 font-display text-lg uppercase tracking-[0.2em] text-secondary">{section4.stat.label}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

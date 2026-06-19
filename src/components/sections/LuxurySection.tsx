"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { section6 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function LuxurySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0.2, 0.6], [1.15, 1]);

  return (
    <section id={section6.id} ref={ref} className="relative min-h-screen overflow-hidden bg-background">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image src={section6.images[0]} alt="Hacienda Nápoles" fill className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex min-h-screen items-end">
        <div className="section-padding w-full">
          <ScrollReveal>
            <div className="red-line mb-8" />
            <h2 className="heading-section">{section6.title}</h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <div className="space-y-5">
              {section6.paragraphs.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <p className="text-body">{p}</p>
                </ScrollReveal>
              ))}
            </div>
            <motion.div
              className="relative aspect-[4/3] overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image src={section6.images[1]} alt="Портик Hacienda Nápoles" fill className="object-cover" sizes="50vw" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionImage from "@/components/ui/SectionImage";
import { section6 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function LuxurySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0.2, 0.6], [1.1, 1]);

  return (
    <section id={section6.id} ref={ref} className="relative min-h-[80svh] overflow-hidden bg-background sm:min-h-screen">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image src={section6.images[0]} alt="Hacienda Nápoles" fill className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 flex min-h-[80svh] items-end sm:min-h-screen">
        <div className="section-padding w-full">
          <ScrollReveal>
            <div className="red-line mb-6 sm:mb-8" />
            <h2 className="heading-section">{section6.title}</h2>
          </ScrollReveal>
          <div className="mt-6 grid gap-8 sm:mt-8 sm:gap-12 lg:grid-cols-2">
            <div className="space-y-4 sm:space-y-5">
              {section6.paragraphs.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <p className="text-body">{p}</p>
                </ScrollReveal>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionImage
                src={section6.images[1]}
                alt="Портик Hacienda Nápoles"
                aspect="aspect-[4/3]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

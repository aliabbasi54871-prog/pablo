"use client";

import { motion } from "framer-motion";
import SectionImage from "@/components/ui/SectionImage";
import { section5 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MoneySection() {
  const labels = ["Деньги картеля", "Изъятие DEA"];

  return (
    <section id={section5.id} className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="red-line mb-6 sm:mb-8" />
          <h2 className="heading-section">{section5.title}</h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2">
          {section5.images.map((src, i) => (
            <motion.div
              key={src}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <SectionImage src={src} alt={labels[i]} aspect="aspect-[4/3]" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl space-y-4 sm:mt-12 sm:space-y-5">
          {section5.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <p className="text-body">{p}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-14 text-center sm:mt-20">
            <div className="font-display text-[clamp(1.5rem,7vw,5rem)] leading-tight text-netflix">
              <span className="block sm:inline">$30</span>
              <span className="block text-[clamp(1rem,5vw,3rem)] sm:inline sm:ml-2">000 000 000</span>
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.15em] text-secondary sm:mt-4 sm:text-sm sm:tracking-[0.2em]">
              {section5.stat.label}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

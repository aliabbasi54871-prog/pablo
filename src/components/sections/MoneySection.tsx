"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { section5 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MoneySection() {
  return (
    <section id={section5.id} className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="red-line mb-8" />
          <h2 className="heading-section">{section5.title}</h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {section5.images.map((src, i) => (
            <motion.div
              key={src}
              className="relative aspect-[4/3] overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl space-y-5">
          {section5.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <p className="text-body">{p}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-20 text-center">
            <div className="font-display text-[clamp(2rem,8vw,5rem)] leading-none text-netflix">{section5.stat.value}</div>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-secondary">{section5.stat.label}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

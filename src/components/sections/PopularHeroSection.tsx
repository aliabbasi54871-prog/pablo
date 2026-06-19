"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { section7 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PopularHeroSection() {
  return (
    <section id="popular-hero" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="red-line mb-8" />
          <h2 className="heading-section">{section7.title}</h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {section7.images.map((src, i) => (
            <motion.div key={src} className="relative aspect-[4/5] overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
              <Image src={src} alt="" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl space-y-5">
          {section7.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <p className="text-body">{p}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <blockquote className="mt-16 border-l-2 border-netflix pl-8">
            <p className="text-quote text-white/90">&ldquo;{section7.quote}&rdquo;</p>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}

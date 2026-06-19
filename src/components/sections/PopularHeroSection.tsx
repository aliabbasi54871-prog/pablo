"use client";

import { motion } from "framer-motion";
import SectionImage from "@/components/ui/SectionImage";
import { section7 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PopularHeroSection() {
  const labels = ["Пабло Эскобар, 1989", "Семейное фото"];

  return (
    <section id="popular-hero" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="red-line mb-6 sm:mb-8" />
          <h2 className="heading-section">{section7.title}</h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 sm:gap-8 md:grid-cols-2">
          {section7.images.map((src, i) => (
            <motion.div
              key={src}
              className="relative"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <SectionImage
                src={src}
                alt={labels[i]}
                aspect="aspect-[4/5]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/15" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl space-y-4 sm:mt-12 sm:space-y-5">
          {section7.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <p className="text-body">{p}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <blockquote className="mt-12 border-l-2 border-netflix pl-5 sm:mt-16 sm:pl-8">
            <p className="text-quote text-white/90">&ldquo;{section7.quote}&rdquo;</p>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}

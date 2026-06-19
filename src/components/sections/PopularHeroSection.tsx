"use client";

import { motion } from "framer-motion";
import SectionImage from "@/components/ui/SectionImage";
import { section7 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PopularHeroSection() {
  const labels = ["Пабло Эскобар, 1989", "Семейное фото"];

  return (
    <section id="popular-hero" className="section-padding bg-background">
      <div className="content-wrap">
        <ScrollReveal>
          <span className="chapter-badge">Глава 06</span>
          <h2 className="heading-section mt-4">{section7.title}</h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2">
          {section7.images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <SectionImage
                src={src}
                alt={labels[i]}
                aspect="aspect-[4/5]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <p className="mt-3 text-label">{labels[i]}</p>
            </motion.div>
          ))}
        </div>

        <div className="section-grid mt-14 sm:mt-16">
          <div className="space-y-6">
            {section7.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <p className="text-body-strong">{p}</p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.15}>
            <blockquote className="border-l-2 border-netflix pl-6 sm:pl-8">
              <p className="text-quote">&ldquo;{section7.quote}&rdquo;</p>
            </blockquote>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

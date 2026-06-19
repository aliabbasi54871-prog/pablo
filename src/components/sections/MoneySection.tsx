"use client";

import { motion } from "framer-motion";
import SectionImage from "@/components/ui/SectionImage";
import { section5 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MoneySection() {
  const labels = ["Деньги картеля", "Изъятие DEA"];

  return (
    <section id={section5.id} className="section-padding bg-surface">
      <div className="content-wrap">
        <ScrollReveal>
          <span className="chapter-badge">Глава 04</span>
          <h2 className="heading-section mt-4">{section5.title}</h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2">
          {section5.images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <SectionImage
                src={src}
                alt={labels[i]}
                aspect="aspect-[5/4]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <p className="mt-3 text-label">{labels[i]}</p>
            </motion.div>
          ))}
        </div>

        <div className="section-grid mt-14 sm:mt-16">
          <div className="space-y-5">
            {section5.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <p className="text-body">{p}</p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.1}>
            <div className="stat-block lg:pt-0 lg:text-right">
              <div className="font-display text-[clamp(2.5rem,8vw,5.5rem)] leading-none text-netflix">
                $30<span className="ml-2 text-[0.55em]">млрд</span>
              </div>
              <p className="mt-4 text-label">{section5.stat.label}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

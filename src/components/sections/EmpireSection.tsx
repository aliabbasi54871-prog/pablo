"use client";

import { motion } from "framer-motion";
import SectionImage from "@/components/ui/SectionImage";
import { section4 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function EmpireSection() {
  const labels = ["Кокаин в оборудовании", "Кирпичи кокаина", "Изъятие наркотиков"];

  return (
    <section id={section4.id} className="overflow-hidden bg-background py-16 sm:py-32">
      <div className="section-padding mx-auto max-w-7xl !pb-0 sm:!pb-0">
        <ScrollReveal>
          <div className="red-line mb-6 sm:mb-8" />
          <h2 className="heading-section">{section4.title}</h2>
        </ScrollReveal>
        <div className="mt-6 max-w-2xl space-y-4 sm:mt-8 sm:space-y-5">
          {section4.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <p className="text-body">{p}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="horizontal-scroll mt-10 md:mt-16">
        {section4.gallery.map((src, i) => (
          <motion.div
            key={src}
            className="w-[85vw] sm:w-[70vw] md:w-[45vw]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <SectionImage
              src={src}
              alt={labels[i]}
              aspect="aspect-[4/3] sm:aspect-[3/4] md:aspect-[16/10]"
              sizes="85vw"
            />
            <p className="mt-2 text-xs uppercase tracking-wider text-secondary">{labels[i]}</p>
          </motion.div>
        ))}
      </div>

      <div className="section-padding mx-auto max-w-7xl">
        <ScrollReveal delay={0.2}>
          <div className="mt-12 border-t border-white/10 pt-12 text-center sm:mt-16 sm:pt-16">
            <div className="big-number">{section4.stat.value}</div>
            <p className="mt-3 font-display text-sm uppercase tracking-[0.15em] text-secondary sm:mt-4 sm:text-lg sm:tracking-[0.2em]">
              {section4.stat.label}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

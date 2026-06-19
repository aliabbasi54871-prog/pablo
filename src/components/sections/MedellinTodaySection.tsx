"use client";

import { motion } from "framer-motion";
import SectionImage from "@/components/ui/SectionImage";
import { section10 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MedellinTodaySection() {
  const labels = ["Современный Медельин", "Граффити Коммуны 13", "Канатная дорога"];

  return (
    <section id={section10.id} className="relative overflow-hidden bg-background py-16 sm:py-32">
      <div className="section-padding mx-auto max-w-7xl !py-0 sm:!py-0">
        <ScrollReveal>
          <div className="red-line mb-6 sm:mb-8" />
          <h2 className="heading-section">{section10.title}</h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 md:grid-cols-3">
          {section10.images.map((src, i) => (
            <motion.div
              key={src}
              className={`relative overflow-hidden ${i === 0 ? "sm:col-span-2 md:col-span-2 md:row-span-2" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <SectionImage
                src={src}
                alt={labels[i]}
                aspect={i === 0 ? "aspect-[16/10]" : "aspect-[4/3] sm:aspect-square"}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/25" />
              <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-wider text-white/60 sm:text-xs">
                {labels[i]}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl space-y-3 sm:mt-16 sm:space-y-4">
          {section10.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <p
                className={`text-body ${
                  ["Граффити.", "Музеи.", "Экскурсии.", "Туристические маршруты."].includes(p)
                    ? "font-display text-base uppercase tracking-wider text-white/70 sm:text-xl"
                    : ""
                }`}
              >
                {p}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

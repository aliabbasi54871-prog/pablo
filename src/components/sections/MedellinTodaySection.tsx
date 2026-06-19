"use client";

import { motion } from "framer-motion";
import SectionImage from "@/components/ui/SectionImage";
import { section10 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MedellinTodaySection() {
  const labels = ["Современный Медельин", "Граффити Коммуны 13", "Канатная дорога"];

  return (
    <section id={section10.id} className="section-padding bg-background">
      <div className="content-wrap">
        <ScrollReveal>
          <span className="chapter-badge">Глава 09</span>
          <h2 className="heading-section mt-4">{section10.title}</h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12">
          {section10.images.map((src, i) => (
            <motion.div
              key={src}
              className={i === 0 ? "lg:col-span-7" : "lg:col-span-5"}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <SectionImage
                src={src}
                alt={labels[i]}
                aspect={i === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <p className="mt-3 text-label">{labels[i]}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 sm:mt-16 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            {section10.paragraphs.slice(0, 3).map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <p className="text-body">{p}</p>
              </ScrollReveal>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {section10.paragraphs.slice(3).map((p, i) => (
              <ScrollReveal key={p} delay={i * 0.05}>
                <p className="border-l border-border pl-4 font-display text-base uppercase tracking-wide text-white sm:text-lg">
                  {p}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

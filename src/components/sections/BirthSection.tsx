"use client";

import { motion } from "framer-motion";
import SectionImage from "@/components/ui/SectionImage";
import { section3 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BirthSection() {
  return (
    <section id={section3.id} className="section-padding bg-surface">
      <div className="content-wrap">
        <ScrollReveal>
          <span className="chapter-badge">Глава 02</span>
          <h2 className="heading-section mt-4">{section3.title}</h2>
        </ScrollReveal>

        <div className="section-grid mt-12 sm:mt-16">
          <motion.div
            className="dossier-frame mx-auto w-full max-w-sm lg:mx-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="border-b border-border px-4 py-3 text-label text-netflix">
              Полицейское досье · Архив · 1976
            </div>
            <SectionImage
              src={section3.image}
              alt="Магшот 1976"
              aspect="aspect-[3/4]"
              imageClassName="object-cover object-top"
              sizes="(max-width: 768px) 90vw, 360px"
            />
            <div className="px-4 py-3 font-mono text-xs text-muted">
              ID: ESCOBAR-PABLO-1976
            </div>
          </motion.div>

          <div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-8">
              {section3.timeline.map((year, i) => (
                <motion.span
                  key={year}
                  className="font-display text-3xl text-netflix sm:text-4xl"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  {year}
                </motion.span>
              ))}
            </div>
            <div className="mt-8 space-y-5">
              {section3.paragraphs.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <p className="text-body">{p}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

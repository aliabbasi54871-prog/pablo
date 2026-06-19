"use client";

import { motion } from "framer-motion";
import SectionImage from "@/components/ui/SectionImage";
import { section3 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BirthSection() {
  return (
    <section id={section3.id} className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="red-line mb-6 sm:mb-8" />
          <h2 className="heading-section">{section3.title}</h2>
        </ScrollReveal>

        <div className="mt-10 grid items-start gap-10 sm:mt-16 sm:gap-16 lg:grid-cols-2">
          <motion.div
            className="dossier-frame mx-auto w-full max-w-md"
            initial={{ opacity: 0, rotate: -1 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
          >
            <div className="border-b border-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-netflix sm:px-4 sm:py-3 sm:text-[10px] sm:tracking-[0.3em]">
              Полицейское досье · Архив · 1976
            </div>
            <SectionImage
              src={section3.image}
              alt="Магшот 1976"
              aspect="aspect-[3/4]"
              imageClassName="object-cover object-top grayscale"
              sizes="(max-width: 768px) 90vw, 400px"
            />
            <div className="px-3 py-2 font-mono text-[10px] text-secondary sm:px-4 sm:py-3 sm:text-xs">
              ID: ESCOBAR-PABLO-1976
            </div>
          </motion.div>

          <div>
            <div className="flex flex-wrap gap-3 border-b border-white/10 pb-6 sm:gap-4 sm:pb-8">
              {section3.timeline.map((year, i) => (
                <motion.span
                  key={year}
                  className="font-display text-2xl text-netflix sm:text-4xl md:text-5xl"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {year}
                </motion.span>
              ))}
            </div>
            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {section3.paragraphs.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
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

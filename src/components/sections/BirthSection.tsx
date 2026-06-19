"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { section3 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BirthSection() {
  return (
    <section id={section3.id} className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="red-line mb-8" />
          <h2 className="heading-section">{section3.title}</h2>
        </ScrollReveal>

        <div className="mt-16 grid items-start gap-16 lg:grid-cols-2">
          <motion.div
            className="dossier-frame relative mx-auto w-full max-w-md"
            initial={{ opacity: 0, rotate: -1 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
          >
            <div className="border-b border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-netflix">
              Полицейское досье · Архив · 1976
            </div>
            <div className="relative aspect-[3/4]">
              <Image src={section3.image} alt="Магшот 1976" fill className="object-cover object-top grayscale" sizes="400px" />
            </div>
            <div className="px-4 py-3 font-mono text-xs text-secondary">ID: ESCOBAR-PABLO-1976</div>
          </motion.div>

          <div>
            <div className="flex flex-wrap gap-4 border-b border-white/10 pb-8">
              {section3.timeline.map((year, i) => (
                <motion.span
                  key={year}
                  className="font-display text-4xl text-netflix md:text-5xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {year}
                </motion.span>
              ))}
            </div>
            <div className="mt-8 space-y-5">
              {section3.paragraphs.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
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

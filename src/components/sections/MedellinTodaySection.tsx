"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { section10 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MedellinTodaySection() {
  return (
    <section id={section10.id} className="relative overflow-hidden bg-background py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="red-line mb-8" />
          <h2 className="heading-section">{section10.title}</h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {section10.images.map((src, i) => (
            <motion.div
              key={src}
              className={`relative overflow-hidden ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-[16/10]" : "aspect-square"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <Image src={src} alt="" fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="33vw" />
              <div className="absolute inset-0 bg-black/25" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl space-y-4">
          {section10.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <p className={`text-body ${["Граффити.", "Музеи.", "Экскурсии.", "Туристические маршруты."].includes(p) ? "font-display text-xl uppercase tracking-wider text-white/70" : ""}`}>
                {p}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { section11 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function NetflixSection() {
  return (
    <section id={section11.id} className="section-padding bg-black">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden shadow-[0_0_60px_rgba(229,9,20,0.2)]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image src={section11.poster} alt="Narcos" fill className="object-cover" sizes="400px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 font-display text-4xl text-netflix">NARCOS</div>
        </motion.div>

        <div>
          <ScrollReveal>
            <div className="red-line mb-8" />
            <h2 className="heading-section">{section11.title}</h2>
          </ScrollReveal>
          <div className="mt-10 space-y-4">
            {section11.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className={`text-body ${["Не с архивов.", "Не с документов.", "Не с исследований."].includes(p) ? "text-white/50" : ""} ${p === "Она началась с сериала Narcos." ? "font-display text-xl uppercase text-netflix" : ""}`}>
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

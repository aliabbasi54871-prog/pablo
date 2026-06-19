"use client";

import { motion } from "framer-motion";
import SectionImage from "@/components/ui/SectionImage";
import { section11 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function NetflixSection() {
  return (
    <section id={section11.id} className="section-padding bg-black">
      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-16 lg:grid-cols-2">
        <motion.div
          className="relative mx-auto w-full max-w-[280px] sm:max-w-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionImage
            src={section11.poster}
            alt="Постер Narcos"
            aspect="aspect-[2/3]"
            sizes="(max-width: 768px) 280px, 400px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-4 left-4 font-display text-2xl text-netflix sm:bottom-6 sm:left-6 sm:text-4xl">
            NARCOS
          </div>
        </motion.div>

        <div>
          <ScrollReveal>
            <div className="red-line mb-6 sm:mb-8" />
            <h2 className="heading-section">{section11.title}</h2>
          </ScrollReveal>
          <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
            {section11.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <p
                  className={`text-body ${
                    ["Не с архивов.", "Не с документов.", "Не с исследований."].includes(p)
                      ? "text-white/50"
                      : ""
                  } ${
                    p === "Она началась с сериала Narcos."
                      ? "font-display text-base uppercase text-netflix sm:text-xl"
                      : ""
                  }`}
                >
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

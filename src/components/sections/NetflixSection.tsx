"use client";

import { motion } from "framer-motion";
import SectionImage from "@/components/ui/SectionImage";
import { section11 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function NetflixSection() {
  return (
    <section id={section11.id} className="section-padding bg-black">
      <div className="content-wrap section-grid items-center">
        <motion.div
          className="mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionImage
            src={section11.poster}
            alt="Постер Narcos"
            aspect="aspect-[2/3]"
            sizes="(max-width: 768px) 300px, 400px"
          />
          <p className="mt-4 text-center font-display text-3xl text-netflix sm:text-4xl lg:text-left">
            NARCOS
          </p>
        </motion.div>

        <div>
          <ScrollReveal>
            <span className="chapter-badge">Глава 10</span>
            <h2 className="heading-section mt-4">{section11.title}</h2>
          </ScrollReveal>
          <div className="mt-8 space-y-3">
            {section11.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <p
                  className={
                    ["Не с архивов.", "Не с документов.", "Не с исследований."].includes(p)
                      ? "text-body text-muted"
                      : p === "Она началась с сериала Narcos."
                        ? "font-display text-lg uppercase text-netflix sm:text-xl"
                        : "text-body"
                  }
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

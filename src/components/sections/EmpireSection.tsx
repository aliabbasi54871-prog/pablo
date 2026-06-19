"use client";

import { motion } from "framer-motion";
import SectionImage from "@/components/ui/SectionImage";
import { section4 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function EmpireSection() {
  const labels = ["Кокаин в оборудовании", "Кирпичи кокаина", "Изъятие наркотиков"];

  return (
    <section id={section4.id} className="overflow-hidden bg-background">
      <div className="section-padding !pb-10 sm:!pb-14">
        <div className="content-wrap">
          <ScrollReveal>
            <span className="chapter-badge">Глава 03</span>
            <h2 className="heading-section mt-4">{section4.title}</h2>
          </ScrollReveal>
          <div className="mt-8 max-w-prose space-y-4">
            {section4.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <p className="text-body">{p}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="horizontal-scroll px-5 sm:px-8 lg:px-16">
        {section4.gallery.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
          >
            <SectionImage
              src={src}
              alt={labels[i]}
              aspect="aspect-[4/3] lg:aspect-[3/4]"
              sizes="(max-width: 1024px) 82vw, 33vw"
            />
            <p className="mt-3 text-label">{labels[i]}</p>
          </motion.div>
        ))}
      </div>

      <div className="section-padding">
        <div className="content-wrap">
          <ScrollReveal delay={0.1}>
            <div className="stat-block text-center lg:text-left">
              <div className="big-number">{section4.stat.value}</div>
              <p className="mt-4 max-w-md font-display text-sm uppercase tracking-editorial text-secondary sm:text-base">
                {section4.stat.label}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

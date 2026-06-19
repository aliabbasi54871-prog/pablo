"use client";

import { motion } from "framer-motion";
import SectionImage from "@/components/ui/SectionImage";
import { section6 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  "Частный аэродром",
  "Зоопарк",
  "Коллекция автомобилей",
  "3 000 гектаров земли",
];

export default function LuxurySection() {
  return (
    <section id={section6.id} className="section-padding bg-surface">
      <div className="content-wrap">
        <ScrollReveal>
          <span className="chapter-badge">Глава 05</span>
          <h2 className="heading-section mt-4">{section6.title}</h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:gap-6">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <SectionImage
              src={section6.images[1]}
              alt="Портик Hacienda Nápoles"
              aspect="aspect-[4/3] lg:aspect-[16/10]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <p className="mt-3 text-label">Портик Hacienda Nápoles</p>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.45 }}
          >
            <SectionImage
              src={section6.images[0]}
              alt="Hacienda Nápoles"
              aspect="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <p className="mt-3 text-label">Hacienda Nápoles · Антиокия</p>
          </motion.div>
        </div>

        <div className="section-grid mt-14 sm:mt-16">
          <div className="space-y-6">
            {section6.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <p className="text-body-strong">{p}</p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="border border-border bg-background p-6 sm:p-8">
              <p className="text-label text-netflix">Состав поместья</p>
              <ul className="mt-6 space-y-4">
                {features.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border pb-4 font-display text-lg uppercase tracking-wide text-[#F0F0F0] last:border-0 last:pb-0 sm:text-xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

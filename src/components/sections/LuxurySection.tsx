"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionImage from "@/components/ui/SectionImage";
import { section6 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function LuxurySection() {
  return (
    <section id={section6.id} className="relative overflow-hidden bg-black">
      <div className="relative min-h-[75vh] lg:min-h-[85vh]">
        <Image
          src={section6.images[0]}
          alt="Hacienda Nápoles"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="image-scrim-heavy absolute inset-0" />
      </div>

      <div className="section-padding -mt-32 relative z-10 sm:-mt-40">
        <div className="content-wrap">
          <ScrollReveal>
            <span className="chapter-badge">Глава 05</span>
            <h2 className="heading-section mt-4">{section6.title}</h2>
          </ScrollReveal>

          <div className="section-grid mt-10 sm:mt-14">
            <div className="space-y-5">
              {section6.paragraphs.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <p className="text-body-strong">{p}</p>
                </ScrollReveal>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionImage
                src={section6.images[1]}
                alt="Портик Hacienda Nápoles"
                aspect="aspect-[4/3]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <p className="mt-3 text-label">Портик Hacienda Nápoles</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { section1, projectMeta } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HeroSection() {
  return (
    <section id={section1.id} className="relative min-h-[100svh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src={section1.background}
          alt="Баррио Пабло Эскобар"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="image-scrim-heavy absolute inset-0" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end">
        <div className="content-wrap section-padding !pb-12 sm:!pb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 max-w-3xl"
          >
            <p className="text-label text-netflix">{projectMeta.title}</p>
            <p className="mt-2 text-label">{projectMeta.subtitle}</p>
          </motion.div>

          <ScrollReveal>
            <h1 className="heading-display max-w-4xl">{section1.title}</h1>
          </ScrollReveal>

          <div className="mt-10 grid max-w-4xl gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <div className="space-y-4">
              {section1.paragraphs.slice(0, 4).map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <p className="text-body-strong">{p}</p>
                </ScrollReveal>
              ))}
            </div>
            <div className="border-l border-border pl-6 lg:pl-8">
              <ScrollReveal delay={0.15}>
                <p className="font-display text-lg uppercase leading-snug tracking-wide text-white sm:text-xl">
                  {section1.paragraphs[4]}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="mt-4 text-body-strong text-white">{section1.paragraphs[5]}</p>
              </ScrollReveal>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-label"
        >
          Прокрутите
        </motion.div>
      </div>
    </section>
  );
}

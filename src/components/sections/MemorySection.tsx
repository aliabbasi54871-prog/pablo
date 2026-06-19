"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { memoryData } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MemorySection() {
  return (
    <section id="memory" className="relative bg-background py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image
              src={memoryData.image}
              alt="Могила Пабло Эскобара"
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/40" />
          </motion.div>

          <div>
            <ScrollReveal>
              <span className="text-xs uppercase tracking-[0.3em] text-netflix">Глава V</span>
              <h2 className="heading-section mt-4">{memoryData.title}</h2>
              <p className="mt-4 font-display text-xl text-muted">{memoryData.subtitle}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-8 font-display text-2xl font-light leading-relaxed text-white/90 md:text-3xl">
                {memoryData.text}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

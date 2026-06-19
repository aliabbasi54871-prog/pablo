"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { peakData } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PeakPowerSection() {
  return (
    <section id="peak" className="relative overflow-hidden bg-background py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-netflix">Глава III</span>
          <h2 className="heading-section mt-4">{peakData.title}</h2>
          <p className="mt-2 font-display text-xl text-muted">{peakData.subtitle}</p>
          <p className="mt-8 max-w-2xl text-body">{peakData.description}</p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {peakData.images.map((src, i) => (
            <motion.div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Image src={src} alt="Пик могущества" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {peakData.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-strong rounded-2xl p-10 md:p-14"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="font-display text-[clamp(4rem,12vw,8rem)] font-light leading-none text-netflix">
                {stat.value}
                {stat.suffix && (
                  <span className="text-[clamp(1.5rem,4vw,3rem)]">{stat.suffix}</span>
                )}
              </div>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/80">
                {stat.label}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

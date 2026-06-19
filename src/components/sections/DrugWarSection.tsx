"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { drugWarData } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function DrugWarSection() {
  return (
    <section id="drug-war" className="relative bg-black py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,9,20,0.06)_0%,transparent_70%)]" />

      <div className="section-padding relative mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-netflix" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-netflix">
              Расследование · Глава IV
            </span>
          </div>
          <h2 className="heading-section mt-6 text-white">{drugWarData.title}</h2>
          <p className="mt-2 font-display text-xl text-netflix/80">{drugWarData.subtitle}</p>
          <p className="mt-8 max-w-2xl text-body">{drugWarData.description}</p>
        </ScrollReveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {drugWarData.images.map((img, i) => (
            <motion.div
              key={img.src}
              className="group relative aspect-[4/3] overflow-hidden border border-netflix/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 border border-netflix/0 transition-colors group-hover:border-netflix/40" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-netflix">
                  Документ · 0{i + 1}
                </span>
                <p className="mt-1 text-sm text-white/80">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 grid gap-4 sm:grid-cols-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {drugWarData.facts.map((fact, i) => (
            <div
              key={fact}
              className="flex items-start gap-4 border-l border-netflix/50 py-3 pl-6"
            >
              <span className="font-mono text-xs text-netflix">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm text-white/70">{fact}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

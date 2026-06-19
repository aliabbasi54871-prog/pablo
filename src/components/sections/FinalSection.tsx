"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { section12, projectMeta } from "@/data/content";

export default function FinalSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <>
      <section id={section12.id} ref={ref} className="relative min-h-screen overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image src={section12.background} alt="" fill className="object-cover" sizes="100vw" />
        </motion.div>
        <div className="absolute inset-0 bg-black/80" />
        <div className="vignette absolute inset-0" />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
          <div className="max-w-3xl space-y-5">
            {section12.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className={`text-body ${["Кино.", "Стриминговые сервисы.", "Социальные сети.", "Алгоритмы рекомендаций."].includes(p) ? "font-display text-lg uppercase tracking-wider text-secondary" : ""} ${i >= section12.paragraphs.length - 2 ? "text-white md:text-lg" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.blockquote
            className="mt-20 max-w-2xl border-t border-netflix/30 pt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <p className="text-quote text-white">
              &ldquo;Narcos не рассказывает историю.<br />
              <span className="text-netflix">Narcos создает память о ней.</span>&rdquo;
            </p>
          </motion.blockquote>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-background py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-secondary">{projectMeta.researchQuestion}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-secondary/60">Проект по дисциплине</p>
          <p className="mt-3 font-display text-lg text-white/70">«{projectMeta.footer.discipline}»</p>
          <div className="mt-6 flex items-center justify-center gap-4 text-secondary/60">
            <span>{projectMeta.footer.university}</span>
            <span className="h-1 w-1 rounded-full bg-netflix" />
            <span>{projectMeta.footer.year}</span>
          </div>
        </div>
      </footer>
    </>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { section12, projectMeta } from "@/data/content";

export default function FinalSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1]);

  return (
    <>
      <section id={section12.id} ref={ref} className="relative min-h-[100svh] overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image src={section12.background} alt="Медельин" fill className="object-cover" sizes="100vw" />
        </motion.div>
        <div className="absolute inset-0 bg-black/82" />
        <div className="vignette absolute inset-0" />

        <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 py-20 text-center sm:px-6 sm:py-32">
          <div className="max-w-3xl space-y-3 sm:space-y-5">
            {section12.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className={`text-body ${
                  ["Кино.", "Стриминговые сервисы.", "Социальные сети.", "Алгоритмы рекомендаций."].includes(p)
                    ? "font-display text-sm uppercase tracking-wider text-secondary sm:text-lg"
                    : ""
                } ${i >= section12.paragraphs.length - 2 ? "text-sm text-white sm:text-base md:text-lg" : ""}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.blockquote
            className="mt-14 max-w-2xl border-t border-netflix/30 pt-10 sm:mt-20 sm:pt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-quote text-white">
              &ldquo;Narcos не рассказывает историю.
              <br />
              <span className="text-netflix">Narcos создает память о ней.</span>&rdquo;
            </p>
          </motion.blockquote>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-background px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-secondary sm:text-sm sm:tracking-[0.3em]">
            {projectMeta.researchQuestion}
          </p>
          <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-secondary/60 sm:mt-6 sm:text-xs sm:tracking-[0.3em]">
            Проект по дисциплине
          </p>
          <p className="mt-2 font-display text-base text-white/70 sm:mt-3 sm:text-lg">
            «{projectMeta.footer.discipline}»
          </p>
          <div className="mt-5 flex items-center justify-center gap-3 text-sm text-secondary/60 sm:mt-6 sm:gap-4">
            <span>{projectMeta.footer.university}</span>
            <span className="h-1 w-1 rounded-full bg-netflix" />
            <span>{projectMeta.footer.year}</span>
          </div>
        </div>
      </footer>
    </>
  );
}

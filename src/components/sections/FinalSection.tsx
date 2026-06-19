"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { finalData, footerData } from "@/data/content";

export default function FinalSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [showSources, setShowSources] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <>
      <section
        id="final"
        ref={ref}
        className="relative min-h-screen overflow-hidden"
      >
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image
            src={finalData.background}
            alt="Медельин"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
          {finalData.lines.map((line, i) => (
            <motion.p
              key={i}
              className={`max-w-4xl font-display leading-tight ${
                i === 1
                  ? "mt-6 text-4xl font-normal text-white md:text-5xl lg:text-6xl"
                  : i === 0
                    ? "text-2xl font-light text-white/60 md:text-3xl lg:text-4xl"
                    : "mt-12 text-base font-light leading-relaxed text-muted md:text-lg lg:text-xl"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
            >
              {i === 1 ? (
                <>
                  Narcos <span className="text-netflix">создаёт память</span> о ней.
                </>
              ) : (
                line
              )}
            </motion.p>
          ))}

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowSources(!showSources)}
            className="mt-16 rounded-sm border border-white/20 bg-white/5 px-12 py-4 text-xs font-medium uppercase tracking-[0.25em] text-white backdrop-blur-xl transition-colors hover:border-netflix/50 hover:bg-netflix/10"
          >
            {finalData.cta}
          </motion.button>
        </div>
      </section>

      <AnimatePresence>
        {showSources && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/5 bg-background"
          >
            <div className="section-padding mx-auto max-w-3xl">
              <h3 className="font-display text-2xl">Источники</h3>
              <div className="mt-8 space-y-4">
                {finalData.sources.map((source, i) => (
                  <motion.div
                    key={source.title}
                    className="glass flex items-center justify-between rounded-xl px-6 py-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <span className="text-sm text-white/80">{source.title}</span>
                    <span className="text-xs uppercase tracking-wider text-netflix">
                      {source.type}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-white/5 bg-background py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Проект по дисциплине
          </p>
          <p className="mt-4 font-display text-xl text-white/80">
            «{footerData.discipline}»
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="text-white/50">{footerData.university}</span>
            <span className="h-1 w-1 rounded-full bg-netflix" />
            <span className="text-white/50">{footerData.year}</span>
          </div>
        </div>
      </footer>
    </>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { medellinTodayData } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MedellinTodaySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const splitX = useTransform(scrollYProgress, [0.2, 0.5, 0.8], ["50%", "35%", "50%"]);

  return (
    <section id="medellin-today" ref={ref} className="relative bg-background py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-netflix">Глава VI</span>
          <h2 className="heading-section mt-4">{medellinTodayData.title}</h2>
          <p className="mt-2 font-display text-xl text-muted">{medellinTodayData.subtitle}</p>
        </ScrollReveal>
      </div>

      <div className="relative mt-16 h-[80vh] min-h-[500px] overflow-hidden">
        {/* Past - left */}
        <div className="absolute inset-0 w-1/2 overflow-hidden">
          <div className="relative h-full w-[200%]">
            <Image
              src={medellinTodayData.past.images[0]}
              alt="Баррио Пабло Эскобар"
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <span className="font-display text-6xl font-light text-white/20 md:text-8xl">
              {medellinTodayData.past.era}
            </span>
            <h3 className="mt-2 font-display text-2xl md:text-3xl">
              {medellinTodayData.past.title}
            </h3>
            <p className="mt-4 max-w-sm text-sm text-white/70 md:text-base">
              {medellinTodayData.past.text}
            </p>
          </div>
        </div>

        {/* Present - right */}
        <div className="absolute inset-0 left-1/2 w-1/2 overflow-hidden">
          <Image
            src={medellinTodayData.present.images[1]}
            alt="Современный Медельин"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <span className="font-display text-6xl font-light text-netflix/30 md:text-8xl">
              {medellinTodayData.present.era}
            </span>
            <h3 className="mt-2 font-display text-2xl md:text-3xl">
              {medellinTodayData.present.title}
            </h3>
            <p className="mt-4 max-w-sm text-sm text-white/70 md:text-base">
              {medellinTodayData.present.text}
            </p>
          </div>
        </div>

        {/* Split divider */}
        <motion.div
          style={{ left: splitX }}
          className="absolute inset-y-0 z-10 w-1 -translate-x-1/2 bg-netflix shadow-[0_0_30px_rgba(229,9,20,0.8)]"
        />

        {/* VS badge */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="glass-strong flex h-16 w-16 items-center justify-center rounded-full border-netflix/30 md:h-20 md:w-20"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            viewport={{ once: true }}
          >
            <span className="font-display text-lg text-netflix md:text-xl">↔</span>
          </motion.div>
        </div>
      </div>

      {/* Secondary images row */}
      <div className="section-padding mx-auto mt-8 grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">
        {[
          medellinTodayData.past.images[1],
          medellinTodayData.present.images[0],
          medellinTodayData.present.images[1],
          medellinTodayData.past.images[0],
        ].map((src, i) => (
          <motion.div
            key={`${src}-${i}`}
            className="relative aspect-square overflow-hidden rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="25vw" />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { cityBeforeData } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CityBeforeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "-55%"]);

  return (
    <section id="city-before" ref={containerRef} className="relative overflow-hidden bg-background py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-netflix">Глава I</span>
          <h2 className="heading-section mt-4">{cityBeforeData.title}</h2>
          <p className="mt-2 font-display text-xl text-muted">{cityBeforeData.subtitle}</p>
          <p className="mt-8 max-w-2xl text-body">{cityBeforeData.intro}</p>
        </ScrollReveal>
      </div>

      <div className="relative mt-16 overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 px-6 md:gap-10 md:px-12">
          {cityBeforeData.panels.map((panel, i) => (
            <motion.div
              key={panel.title}
              className="relative w-[85vw] shrink-0 md:w-[60vw] lg:w-[45vw]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={panel.image}
                  alt={panel.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <span className="text-xs uppercase tracking-[0.2em] text-netflix">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl">{panel.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                    {panel.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}

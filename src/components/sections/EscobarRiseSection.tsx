"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { riseData } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function EscobarRiseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);

  return (
    <section id="rise" ref={containerRef} className="relative bg-background py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <ScrollReveal>
              <span className="text-xs uppercase tracking-[0.3em] text-netflix">Глава II</span>
              <h2 className="heading-section mt-4">{riseData.title}</h2>
              <p className="mt-4 text-body">{riseData.subtitle}</p>
            </ScrollReveal>

            <motion.div
              className="relative mt-12 aspect-[3/4] max-w-sm overflow-hidden rounded-2xl border border-white/10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Image
                src={riseData.mainImage}
                alt="Магшот 1976"
                fill
                className="object-cover object-top"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <p className="absolute bottom-4 left-4 text-xs uppercase tracking-wider text-muted">
                Архив · 1976
              </p>
            </motion.div>

            <motion.div
              className="mt-8 opacity-60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Image
                src={riseData.signature}
                alt="Подпись Пабло Эскобара"
                width={280}
                height={80}
                className="h-auto w-48 invert md:w-64"
              />
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 hidden h-full w-px bg-white/10 md:block">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-netflix via-netflix/50 to-transparent"
              />
            </div>

            <div className="space-y-24 md:pl-12">
              {riseData.events.map((event, i) => (
                <motion.div
                  key={event.year}
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                >
                  <div className="absolute -left-[5px] top-2 hidden h-2.5 w-2.5 rounded-full bg-netflix shadow-[0_0_16px_rgba(229,9,20,0.8)] md:-left-[5px] md:block" />

                  <span className="font-display text-5xl font-light text-netflix md:text-6xl">
                    {event.year}
                  </span>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl">{event.title}</h3>
                  <p className="mt-4 max-w-lg text-body">{event.description}</p>

                  <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

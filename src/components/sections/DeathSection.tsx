"use client";

import Image from "next/image";
import { section9 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function DeathSection() {
  return (
    <section id={section9.id} className="section-padding bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image src={section9.image} alt="Могила Эскобара" fill className="object-cover" sizes="50vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30" />
        </div>
        <div>
          <ScrollReveal>
            <div className="red-line mb-8" />
            <h2 className="heading-section">{section9.title}</h2>
          </ScrollReveal>
          <div className="mt-10 space-y-5">
            {section9.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className={`text-body ${p === "Напротив." ? "font-display text-2xl uppercase text-netflix" : ""}`}>{p}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

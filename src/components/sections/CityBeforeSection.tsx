"use client";

import Image from "next/image";
import { section2 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CityBeforeSection() {
  return (
    <section id={section2.id} className="relative min-h-screen bg-background">
      <div className="grid min-h-screen md:grid-cols-2">
        <div className="relative min-h-[50vh] md:min-h-screen">
          <Image src={section2.leftImage} alt="Старый Медельин" fill className="object-cover" sizes="50vw" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-8 left-8 font-display text-sm uppercase tracking-[0.3em] text-secondary">Медельин · 1970-е</div>
        </div>
        <div className="relative min-h-[50vh] md:min-h-screen">
          <Image src={section2.rightImage} alt="Жители Медельина" fill className="object-cover" sizes="50vw" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-8 right-8 font-display text-sm uppercase tracking-[0.3em] text-secondary">Люди города</div>
        </div>
      </div>

      <div className="section-padding mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="red-line mb-8" />
          <h2 className="heading-section">{section2.title}</h2>
        </ScrollReveal>
        <div className="mt-10 space-y-6">
          {section2.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <p className="text-body">{p}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

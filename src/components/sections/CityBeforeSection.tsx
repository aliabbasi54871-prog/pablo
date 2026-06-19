"use client";

import SectionImage from "@/components/ui/SectionImage";
import { section2 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CityBeforeSection() {
  return (
    <section id={section2.id} className="relative bg-background">
      <div className="grid md:grid-cols-2">
        <div className="relative">
          <SectionImage
            src={section2.leftImage}
            alt="Старый Медельин"
            aspect="aspect-[4/3] md:aspect-auto md:min-h-screen"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-4 left-4 font-display text-xs uppercase tracking-[0.2em] text-secondary sm:bottom-8 sm:left-8 sm:text-sm sm:tracking-[0.3em]">
            Медельин · 1970-е
          </div>
        </div>
        <div className="relative">
          <SectionImage
            src={section2.rightImage}
            alt="Жители Медельина"
            aspect="aspect-[4/3] md:aspect-auto md:min-h-screen"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-4 right-4 font-display text-xs uppercase tracking-[0.2em] text-secondary sm:bottom-8 sm:right-8 sm:text-sm sm:tracking-[0.3em]">
            Люди города
          </div>
        </div>
      </div>

      <div className="section-padding mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="red-line mb-6 sm:mb-8" />
          <h2 className="heading-section">{section2.title}</h2>
        </ScrollReveal>
        <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
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

"use client";

import SectionImage from "@/components/ui/SectionImage";
import { section2 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CityBeforeSection() {
  return (
    <section id={section2.id} className="bg-background">
      <div className="grid lg:grid-cols-2">
        <div className="relative">
          <SectionImage
            src={section2.leftImage}
            alt="Старый Медельин"
            aspect="aspect-[5/4] lg:aspect-auto lg:min-h-[70vh]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-5 sm:p-8">
            <span className="text-label">Медельин · 1970-е</span>
          </div>
        </div>
        <div className="relative border-t border-border lg:border-l lg:border-t-0">
          <SectionImage
            src={section2.rightImage}
            alt="Жители Медельина"
            aspect="aspect-[5/4] lg:aspect-auto lg:min-h-[70vh]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-5 sm:p-8 lg:text-right">
            <span className="text-label">Люди города</span>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="content-wrap section-grid">
          <ScrollReveal>
            <div>
              <span className="chapter-badge">Глава 01</span>
              <h2 className="heading-section mt-4">{section2.title}</h2>
              <div className="red-line mt-6" />
            </div>
          </ScrollReveal>
          <div className="space-y-5">
            {section2.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <p className="text-body">{p}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

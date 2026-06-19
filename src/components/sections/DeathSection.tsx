"use client";

import SectionImage from "@/components/ui/SectionImage";
import { section9 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function DeathSection() {
  return (
    <section id={section9.id} className="section-padding bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-16 lg:grid-cols-2">
        <SectionImage
          src={section9.image}
          alt="Могила Эскобара"
          aspect="aspect-[4/5] sm:aspect-[3/4]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div>
          <ScrollReveal>
            <div className="red-line mb-6 sm:mb-8" />
            <h2 className="heading-section">{section9.title}</h2>
          </ScrollReveal>
          <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
            {section9.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p
                  className={`text-body ${
                    p === "Напротив." ? "font-display text-xl uppercase text-netflix sm:text-2xl" : ""
                  }`}
                >
                  {p}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

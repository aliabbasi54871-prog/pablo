"use client";

import SectionImage from "@/components/ui/SectionImage";
import { section9 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function DeathSection() {
  return (
    <section id={section9.id} className="section-padding bg-surface">
      <div className="content-wrap section-grid items-center">
        <SectionImage
          src={section9.image}
          alt="Могила Эскобара"
          aspect="aspect-[4/5]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div>
          <ScrollReveal>
            <span className="chapter-badge">Глава 08</span>
            <h2 className="heading-section mt-4">{section9.title}</h2>
          </ScrollReveal>
          <div className="mt-8 space-y-5">
            {section9.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <p
                  className={
                    p === "Напротив."
                      ? "font-display text-2xl uppercase text-netflix sm:text-3xl"
                      : "text-body"
                  }
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

"use client";

import Image from "next/image";
import { section8 } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PriceSection() {
  return (
    <section id={section8.id} className="relative min-h-[100svh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src={section8.image}
          alt="Последствия нарковойны"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="image-scrim-heavy absolute inset-0" />

      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="content-wrap section-padding w-full">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="chapter-badge">Глава 07</span>
              <h2 className="heading-section mt-4">{section8.title}</h2>
            </ScrollReveal>

            <div className="mt-10 space-y-3 sm:mt-12">
              {section8.paragraphs.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.04}>
                  <p
                    className={
                      i === 0
                        ? "text-body-strong text-white"
                        : i > 0 && i < 6
                          ? "font-display text-base uppercase tracking-wide text-[#E5E5E5] sm:text-lg"
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
      </div>
    </section>
  );
}

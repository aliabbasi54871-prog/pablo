"use client";

import Image from "next/image";
import { section12, projectMeta } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FinalSection() {
  return (
    <>
      <section id={section12.id} className="relative min-h-[100svh] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src={section12.background}
            alt="Медельин"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="image-scrim-heavy absolute inset-0" />

        <div className="relative z-10 flex min-h-[100svh] items-center">
          <div className="content-wrap section-padding w-full">
            <div className="mx-auto max-w-3xl text-center">
              <ScrollReveal>
                <div className="flex justify-center">
                  <span className="chapter-badge">Финал</span>
                </div>
              </ScrollReveal>

              <div className="mt-10 space-y-4">
                {section12.paragraphs.map((p, i) => (
                  <ScrollReveal key={i} delay={i * 0.04}>
                    <p
                      className={
                        ["Кино.", "Стриминговые сервисы.", "Социальные сети.", "Алгоритмы рекомендаций."].includes(p)
                          ? "font-display text-base uppercase tracking-wide text-secondary sm:text-lg"
                          : i >= section12.paragraphs.length - 2
                            ? "text-body-strong text-white"
                            : "text-body"
                      }
                    >
                      {p}
                    </p>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.3}>
                <blockquote className="mt-14 border-t border-border pt-12 sm:mt-16">
                  <p className="text-quote">
                    &ldquo;Narcos не рассказывает историю.
                    <br />
                    <span className="text-netflix not-italic">Narcos создает память о ней.</span>&rdquo;
                  </p>
                </blockquote>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background px-5 py-14 sm:px-8 sm:py-20">
        <div className="content-wrap text-center">
          <p className="font-display text-base uppercase tracking-editorial text-white sm:text-lg">
            {projectMeta.researchQuestion}
          </p>
          <div className="mx-auto mt-10 max-w-md border-t border-border pt-8">
            <p className="text-label">Проект по дисциплине</p>
            <p className="mt-3 font-quote text-xl text-[#E5E5E5] sm:text-2xl">
              «{projectMeta.footer.discipline}»
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted">
              <span>{projectMeta.footer.university}</span>
              <span className="h-1 w-1 rounded-full bg-netflix" />
              <span>{projectMeta.footer.year}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

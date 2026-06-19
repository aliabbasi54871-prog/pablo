"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { mythData } from "@/data/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HistoryOrMythSection() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const active = mythData.nodes.find((n) => n.id === activeNode);

  return (
    <section id="myth" className="relative bg-background py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-netflix">Глава VII</span>
          <h2 className="heading-section mt-4">{mythData.title}</h2>
          <p className="mt-2 font-display text-xl text-muted">{mythData.subtitle}</p>
          <p className="mt-6 font-display text-2xl text-white/90 md:text-3xl">
            {mythData.question}
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Interactive network */}
          <div className="relative aspect-square w-full max-w-lg mx-auto lg:max-w-none">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              {mythData.nodes.map((node) => (
                <motion.line
                  key={`line-${node.id}`}
                  x1="50"
                  y1="50"
                  x2={node.x}
                  y2={node.y}
                  stroke={activeNode === node.id ? "#E50914" : "rgba(255,255,255,0.1)"}
                  strokeWidth="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              ))}

              <motion.circle
                cx="50"
                cy="50"
                r="6"
                fill="rgba(229,9,20,0.2)"
                stroke="#E50914"
                strokeWidth="0.5"
                animate={{ r: [6, 7, 6] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <text x="50" y="51" textAnchor="middle" fill="white" fontSize="2.5" fontFamily="var(--font-display)">
                Pablo
              </text>

              {mythData.nodes.map((node) => (
                <g
                  key={node.id}
                  className="cursor-pointer"
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                >
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={activeNode === node.id ? 5 : 4}
                    fill={activeNode === node.id ? "rgba(229,9,20,0.3)" : "rgba(255,255,255,0.05)"}
                    stroke={activeNode === node.id ? "#E50914" : "rgba(255,255,255,0.2)"}
                    strokeWidth="0.4"
                    whileHover={{ scale: 1.2 }}
                  />
                  <text
                    x={node.x}
                    y={node.y + (node.y > 50 ? 8 : -6)}
                    textAnchor="middle"
                    fill={activeNode === node.id ? "#E50914" : "rgba(255,255,255,0.6)"}
                    fontSize="2.8"
                    fontFamily="var(--font-sans)"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="flex flex-col justify-center">
            <motion.div
              key={active?.id ?? "default"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-strong rounded-2xl p-8"
            >
              {active ? (
                <>
                  <h3 className="font-display text-2xl text-netflix">{active.label}</h3>
                  <p className="mt-4 text-body">{active.description}</p>
                </>
              ) : (
                <>
                  <h3 className="font-display text-2xl">Выберите источник</h3>
                  <p className="mt-4 text-body">{mythData.text}</p>
                </>
              )}
            </motion.div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {mythData.images.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-video overflow-hidden rounded-xl border border-white/10"
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="25vw" />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

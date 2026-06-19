"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 md:p-8 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      whileHover={
        hover
          ? {
              borderColor: "rgba(229, 9, 20, 0.3)",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}

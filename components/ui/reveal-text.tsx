"use client";

import { m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/animations";

interface RevealTextProps {
  text: string;
  className?: string;
  /** Delay before the first word starts (seconds). */
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

/**
 * Masked, word-by-word rise reveal (the signature premium-agency headline
 * animation). Each word sits in an overflow-hidden line and rises from below
 * on viewport entry. Collapses to a simple fade under reduced motion.
 */
export function RevealText({
  text,
  className,
  delay = 0,
  as = "h2",
}: RevealTextProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  const Tag = m[as];

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{text}</Plain>;
  }

  return (
    <Tag
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="reveal-line mr-[0.25em]" aria-hidden>
          <m.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              visible: { y: "0%", transition: { duration: 0.8, ease: EASE } },
            }}
          >
            {word}
          </m.span>
        </span>
      ))}
    </Tag>
  );
}

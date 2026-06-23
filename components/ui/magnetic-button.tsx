"use client";

import { useRef, useState, type ReactNode } from "react";
import { m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "link";
  className?: string;
  type?: "button" | "submit";
}

/**
 * CTA that subtly tracks the cursor (magnetic) on pointer devices, with a
 * spring return. Falls back to a clean static button for touch / reduced
 * motion. Always keyboard-focusable with a visible ring.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - (r.left + r.width / 2)) * 0.3,
      y: (e.clientY - (r.top + r.height / 2)) * 0.3,
    });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const isLink = variant === "link";
  const styles = cn(
    "group relative inline-flex min-h-[48px] items-center justify-center gap-2 text-sm font-semibold tracking-wide transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
    !isLink && "rounded-full px-7",
    variant === "primary" &&
      "bg-accent text-accent-ink hover:bg-accent/90",
    variant === "ghost" &&
      "border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
    isLink &&
      "px-1 text-white underline decoration-white/40 underline-offset-[6px] hover:decoration-white",
    className,
  );

  const motionProps = {
    "data-cursor": "hover",
    animate: pos,
    transition: { type: "spring" as const, stiffness: 260, damping: 18 },
    whileTap: { scale: 0.97 },
    onMouseMove: onMove,
    onMouseLeave: reset,
  };

  if (href) {
    return (
      <m.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={styles}
        {...motionProps}
      >
        {children}
      </m.a>
    );
  }

  return (
    <m.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      className={styles}
      {...motionProps}
    >
      {children}
    </m.button>
  );
}

"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";

/**
 * Loads only the DOM animation feature set so we can use the lightweight
 * `m.*` components. `reducedMotion="user"` makes every framer animation honor
 * the OS prefers-reduced-motion setting automatically.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

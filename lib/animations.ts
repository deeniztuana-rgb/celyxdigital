import type { Variants } from "framer-motion";

/** Premium easing — close to the Stripe/Linear feel. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.25,
  normal: 0.5,
  slow: 0.8,
} as const;

/** Container that staggers children on viewport entry. */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

/** Masked line that rises into place (used inside overflow-hidden). */
export const riseLine: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: DURATION.slow, ease: EASE },
  },
};

/** Soft fade + rise for blocks. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE },
  },
};

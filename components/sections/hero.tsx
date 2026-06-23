"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { OrbitalEcosystem } from "@/components/ui/orbital-ecosystem";
import { useSmoothScroll } from "@/components/providers/smooth-scroll";

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollTo } = useSmoothScroll();

  // Headline lines drop in (fade + translateY -20 → 0) with a 0.2s stagger.
  const line = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  // Subtext + buttons arrive last (fade up).
  const up = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="top"
      className="relative grid min-h-dvh grid-cols-1 items-center gap-12 px-5 pb-20 pt-28 lg:grid-cols-[55fr_45fr] lg:gap-10 lg:overflow-hidden lg:px-[60px] lg:py-0"
    >
      {/* Faint neon ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 z-0 h-[680px] w-[680px] -translate-y-1/2 translate-x-1/4 rounded-full bg-radial-faint blur-2xl"
      />

      {/* LEFT COLUMN — headline / subtext / buttons */}
      <div className="relative z-[2]">
        <m.p
          {...up(0)}
          className="mb-7 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/55"
        >
          <span className="h-px w-9" style={{ background: "#CCFF00" }} />
          Altın Saat — Günün En Yüksek Etkileşim Zamanı
        </m.p>

        <h1 className="hero-headline font-black uppercase lg:max-w-[55vw]">
          <m.span
            {...line(0.1)}
            className="block font-playfair italic headline-outline"
          >
            We Bring
          </m.span>
          <m.span
            {...line(0.3)}
            className="block font-sans"
            style={{ color: "#CCFF00" }}
          >
            Growth.
          </m.span>
          <m.span {...line(0.5)} className="block font-sans text-white">
            To Brands.
          </m.span>
        </h1>

        <m.p
          {...up(0.8)}
          className="mt-8 max-w-md text-balance text-lg font-normal leading-relaxed text-white/60"
        >
          Sadece pazarlama yapmıyoruz — onu yeniden tanımlıyoruz. AI
          stratejileri. Lisanslı uzmanlar. Gerçek sonuçlar.
        </m.p>

        <m.div
          {...up(0.95)}
          className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          <MagneticButton onClick={() => scrollTo("#contact")}>
            <span className="uppercase tracking-wide">Projenizi Başlatın</span>
            <ArrowRight className="h-4 w-4" aria-hidden />
          </MagneticButton>
          <MagneticButton variant="link" onClick={() => scrollTo("#services")}>
            <span className="uppercase tracking-wide">Çalışmalarımız</span>
          </MagneticButton>
        </m.div>
      </div>

      {/* RIGHT COLUMN — radial orbital timeline */}
      <m.div
        id="ecosystem"
        initial={reduced ? false : { opacity: 0, scale: 0.94 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[2] flex items-center justify-center lg:h-screen"
      >
        <div className="w-full max-w-[500px]">
          <OrbitalEcosystem />
        </div>
      </m.div>
    </section>
  );
}

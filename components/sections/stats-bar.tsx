"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sub: string;
}

const STATS: Stat[] = [
  { value: 6, label: "Hizmet", sub: "Web · Reklam · SEO · Sosyal Medya · Logo · İçerik" },
  { value: 50, suffix: "+", label: "Tamamlanan Proje", sub: "Farklı sektörlerden başarıyla teslim edildi" },
  { value: 30, suffix: "+", label: "Mutlu Müşteri", sub: "Uzun vadeli iş birlikleri" },
  { value: 3, label: "Yıllık Deneyim", sub: "Dijital pazarlamada kanıtlanmış birikim" },
];

/** Counts up from 0 to `value` when scrolled into view (IntersectionObserver). */
function Counter({ value, prefix = "", suffix = "" }: Stat) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const dur = 1500;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
          setDisplay(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, reduced]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="text-ink" style={{ background: "#CCFF00" }}>
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "border-ink/15 px-5 py-12 text-center",
                i % 2 === 1 && "border-l",
                i >= 2 && "border-t lg:border-t-0",
                i > 0 && "lg:border-l",
              )}
            >
              <div className="font-sans font-black leading-none tracking-[-0.04em] text-[clamp(64px,8vw,96px)]">
                <Counter {...s} />
              </div>
              <div className="mt-3 text-sm font-bold">{s.label}</div>
              <div className="mt-1 text-xs text-ink/60">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

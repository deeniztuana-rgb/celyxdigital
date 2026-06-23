"use client";

import { m } from "framer-motion";
import { Globe, Instagram, ArrowUpRight, type LucideIcon } from "lucide-react";

interface Reference {
  name: string;
  meta: string;
  href: string;
  cta: string;
  icon: LucideIcon;
}

const REFERENCES: Reference[] = [
  {
    name: "Pehlivanna Group",
    meta: "pehlivannagroup.com",
    href: "https://pehlivannagroup.com/",
    cta: "Web Sitesini Ziyaret Et",
    icon: Globe,
  },
  {
    name: "@pehlivannagroup",
    meta: "Instagram",
    href: "https://www.instagram.com/pehlivannagroup",
    cta: "Instagram'da Görüntüle",
    icon: Instagram,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function References() {
  return (
    <section id="references" className="bg-ink px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-container">
        <p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "#CCFF00" }}
        >
          Referanslar
        </p>
        <h2 className="font-sans font-black uppercase leading-[0.95] tracking-[-0.03em] text-white text-[clamp(40px,6vw,80px)]">
          Referanslarımız
        </h2>

        <m.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {REFERENCES.map((ref) => {
            const Icon = ref.icon;
            return (
              <m.a
                key={ref.name}
                href={ref.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                data-cursor="hover"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 p-8 transition-colors hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                style={{ background: "#0D0D10" }}
              >
                {/* Neon glow on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "rgba(204,255,0,0.18)" }}
                />

                <div className="relative flex items-start justify-between">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-xl border"
                    style={{
                      background: "rgba(204,255,0,0.10)",
                      borderColor: "rgba(204,255,0,0.35)",
                      color: "#CCFF00",
                    }}
                  >
                    <Icon className="h-7 w-7" aria-hidden />
                  </span>
                  <ArrowUpRight
                    className="h-6 w-6 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    aria-hidden
                  />
                </div>

                <div className="relative mt-10">
                  <h3 className="font-sans text-2xl font-bold text-white">
                    {ref.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/45">{ref.meta}</p>
                  <span
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: "#CCFF00" }}
                  >
                    {ref.cta}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </m.a>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}

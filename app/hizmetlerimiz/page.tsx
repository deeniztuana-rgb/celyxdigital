import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICE_PAGES } from "@/components/data/service-pages";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Web tasarımdan reklama, SEO'dan sosyal medyaya kadar Celyx Digital'in sunduğu tüm dijital büyüme hizmetleri.",
};

export default function Page() {
  return (
    <main id="icerik" className="min-h-dvh bg-ink px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
      <div className="mx-auto max-w-container">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#CCFF00" }}>
          Hizmetler
        </p>
        <h1 className="font-sans font-black uppercase leading-[0.95] tracking-[-0.03em] text-white text-[clamp(48px,8vw,104px)]">
          Hizmetlerimiz<span style={{ color: "#CCFF00" }}>.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          Markanızı dijitalde büyütmek için ihtiyacınız olan her şey tek
          çatı altında. Bir hizmete tıklayarak detayları keşfedin.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_PAGES.map((s, i) => (
            <Link
              key={s.slug}
              href={`/hizmetler/${s.slug}`}
              data-cursor="hover"
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20"
              style={{ borderTop: `4px solid ${s.color}` }}
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-bold" style={{ color: s.color }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight
                  className="h-6 w-6 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  aria-hidden
                />
              </div>
              <div className="mt-10">
                <h2 className="font-sans text-2xl font-bold text-white">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {s.heroDesc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

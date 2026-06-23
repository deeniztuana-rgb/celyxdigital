"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { getServicePage } from "@/components/data/service-pages";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function ServiceDetail({ slug }: { slug: string }) {
  const data = getServicePage(slug);
  if (!data) return null;
  const { title, color, heroDesc, offerings, process, advantages } = data;

  return (
    <main id="icerik" className="overflow-x-clip bg-ink">
      {/* HERO */}
      <section className="relative px-5 pb-16 pt-36 sm:px-8 sm:pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-24 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{ background: `${color}22` }}
        />
        <div className="mx-auto max-w-container">
          <m.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white/50"
          >
            <span className="h-px w-9" style={{ background: color }} />
            Hizmet
          </m.p>
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-black uppercase leading-[0.95] tracking-[-0.03em] text-white text-[clamp(48px,8vw,104px)]"
          >
            {title}
            <span style={{ color }}>.</span>
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60"
          >
            {heroDesc}
          </m.p>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <Link
              href="/iletisim"
              data-cursor="hover"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full px-7 text-sm font-semibold uppercase tracking-wide text-ink transition-transform hover:scale-[1.03]"
              style={{ background: "#CCFF00" }}
            >
              Projenizi Başlatın
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/hizmetlerimiz"
              className="text-sm font-semibold uppercase tracking-wide text-white underline decoration-white/40 underline-offset-[6px] hover:decoration-white"
            >
              Tüm Hizmetler
            </Link>
          </m.div>
        </div>
      </section>

      {/* NE SUNUYORUZ */}
      <section className="border-t border-white/5 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-container">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color }}>
            Ne Sunuyoruz
          </p>
          <h2 className="font-sans text-3xl font-black uppercase tracking-[-0.02em] text-white sm:text-4xl">
            Kapsamımız
          </h2>
          <m.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {offerings.map((o) => {
              const Icon = o.icon;
              return (
                <m.li
                  key={o.title}
                  variants={item}
                  className="rounded-2xl border border-white/10 bg-surface p-6"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: `${color}1f`, color }}
                  >
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{o.desc}</p>
                </m.li>
              );
            })}
          </m.ul>
        </div>
      </section>

      {/* SÜREÇ */}
      <section className="border-t border-white/5 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-container">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color }}>
            Süreç
          </p>
          <h2 className="font-sans text-3xl font-black uppercase tracking-[-0.02em] text-white sm:text-4xl">
            Nasıl Çalışıyoruz
          </h2>
          <m.ol
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {process.map((step, i) => (
              <m.li
                key={step.title}
                variants={item}
                className="relative rounded-2xl border border-white/10 bg-surface p-6"
              >
                <span
                  className="font-sans text-5xl font-black tracking-tight"
                  style={{ color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{step.desc}</p>
              </m.li>
            ))}
          </m.ol>
        </div>
      </section>

      {/* NEDEN CELYX */}
      <section className="border-t border-white/5 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-container">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color }}>
            Neden Celyx
          </p>
          <h2 className="font-sans text-3xl font-black uppercase tracking-[-0.02em] text-white sm:text-4xl">
            Avantajlarınız
          </h2>
          <m.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid gap-5 sm:grid-cols-3"
          >
            {advantages.map((a) => (
              <m.li
                key={a.title}
                variants={item}
                className="rounded-2xl border border-white/10 bg-surface p-7"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: `${color}1f`, color }}
                >
                  <Check className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-bold text-white">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{a.desc}</p>
              </m.li>
            ))}
          </m.ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 px-5 py-24 text-center sm:px-8 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-sans font-black uppercase leading-[0.95] tracking-[-0.03em] text-white text-[clamp(36px,6vw,72px)]">
            {title} ile büyümeye hazır mısınız?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-white/60">
            Projenizi anlatın, 24 saat içinde size özel bir teklif hazırlayalım.
          </p>
          <div className="mt-9">
            <Link
              href="/iletisim"
              data-cursor="hover"
              className="inline-flex min-h-[52px] items-center gap-2 rounded-full px-8 text-sm font-semibold uppercase tracking-wide text-ink transition-transform hover:scale-[1.03]"
              style={{ background: "#CCFF00" }}
            >
              Projenizi Başlatın
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

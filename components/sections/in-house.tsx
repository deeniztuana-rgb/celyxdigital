"use client";

import { m } from "framer-motion";
import { PawPrint } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function InHouse() {
  return (
    <section className="bg-cream text-ink">
      <div className="mx-auto grid max-w-container gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[55fr_45fr] lg:items-center lg:py-32">
        {/* LEFT — headline */}
        <m.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <m.p
            variants={item}
            className="mb-6 text-[11px] font-medium uppercase tracking-[0.15em] text-ink/60"
          >
            Bir Ajansdan Fazlası
          </m.p>

          <h2 className="font-sans font-black uppercase leading-[0.9] tracking-[-0.03em] text-[clamp(52px,6vw,88px)]">
            <m.span variants={item} className="block text-ink">
              Sizi Geleceğe
            </m.span>
            <m.span variants={item} className="block" style={{ color: "#CCFF00" }}>
              Taşıyacak
            </m.span>
            <m.span variants={item} className="block text-stroke-black">
              Ekip
            </m.span>
            <m.span variants={item} className="block text-ink">
              Biziz!
            </m.span>
          </h2>

          <m.div variants={item} className="mt-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wide" style={{ color: "#CCFF00" }}>
              <PawPrint className="h-4 w-4" aria-hidden />
              Hav! Bizimle Çalışın
            </span>
          </m.div>
        </m.div>

        {/* RIGHT — paragraph + buttons */}
        <m.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:pl-6"
        >
          <m.p variants={item} className="max-w-md text-lg leading-relaxed text-ink/70">
            Yaratıcılığı AI ile harmanlayan ileri görüşlü bir ajansız. Web
            tasarımdan ücretli reklama, sosyal medyadan logo tasarımına kadar.
          </m.p>
          <m.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <a
              href="#services"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-ink px-7 text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              Hizmetlerimiz
            </a>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

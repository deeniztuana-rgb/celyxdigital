"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SLUG_BY_TITLE } from "@/components/data/service-pages";

interface ServiceCard {
  n: string;
  title: string;
  color: string;
  desc: string;
}

const SERVICES: ServiceCard[] = [
  {
    n: "01",
    title: "Web Tasarım",
    color: "#8B5CF6",
    desc: "Dönüşüm odaklı, şablon kullanmayan özel web siteleri tasarlıyoruz. Kullanıcı deneyimi, hız ve estetik bir arada — ziyaretçiyi müşteriye dönüştüren siteler.",
  },
  {
    n: "02",
    title: "Sosyal Medya",
    color: "#EC4899",
    desc: "Instagram ve TikTok'ta organik büyüme için viral reels, UGC içerikler ve tam kapsamlı strateji. Takipçi değil, topluluk inşa ediyoruz.",
  },
  {
    n: "03",
    title: "Meta & Google Ads",
    color: "#F97316",
    desc: "Gerçekten dönüşüm sağlayan performans reklamları. Yaratıcı strateji, A/B testleri ve ölçeklendirme ile reklam bütçenizi en verimli şekilde kullanın.",
  },
  {
    n: "04",
    title: "SEO",
    color: "#3B82F6",
    desc: "Google'da üst sıralara çıkın, rakiplerinizin önüne geçin. Teknik SEO, içerik stratejisi ve backlink çalışmalarıyla kalıcı organik trafik elde edin.",
  },
  {
    n: "05",
    title: "Reklam",
    color: "#22C55E",
    desc: "Hedef kitlenize tam doğru anda ulaşın. Marka bilinirliğinden satışa kadar her aşamada ölçülebilir sonuçlar sunan reklam kampanyaları.",
  },
  {
    n: "06",
    title: "Logo Tasarımı",
    color: "#EF4444",
    desc: "Markanızın özünü yansıtan, akılda kalıcı ve çok yönlü logo tasarımları. Kurumsal kimlik, renk paleti ve marka kılavuzuyla birlikte teslim edilir.",
  },
];

const item = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function WhatWeDo() {
  return (
    <section id="services" className="bg-ink px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#CCFF00" }}
            >
              Hizmetler
            </p>
            <h2 className="font-sans font-black uppercase leading-[0.9] tracking-[-0.03em] text-white text-[clamp(64px,8vw,110px)]">
              Ne Yapıyoruz<span style={{ color: "#CCFF00" }}>.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-white/55">
            Herhangi bir karta hover yapın — tam hizmeti görmek için tıklayın.
          </p>
        </div>

        <m.ul
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s) => (
            <m.li key={s.n} variants={item}>
              <Link
                href={`/hizmetler/${SLUG_BY_TITLE[s.title]}`}
                className="flip-card block h-80 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                aria-label={`${s.title} hizmeti hakkında detaylar`}
                data-cursor="hover"
              >
                <div className="flip-inner">
                  {/* FRONT */}
                  <div
                    className="flip-face flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6"
                    style={{ borderTop: `4px solid ${s.color}` }}
                  >
                    <span className="text-sm font-bold" style={{ color: s.color }}>
                      {s.n}
                    </span>
                    <div className="flex items-end justify-between">
                      <h3 className="font-sans text-2xl font-bold text-ink">
                        {s.title}
                      </h3>
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
                        style={{ background: s.color }}
                      >
                        <ArrowUpRight className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                  </div>
                  {/* BACK */}
                  <div
                    className="flip-face flip-back flex flex-col justify-between gap-3 rounded-2xl p-6 text-white"
                    style={{ background: "#1a1a1a" }}
                  >
                    <p className="text-[15px] leading-relaxed text-white/85">
                      {s.desc}
                    </p>
                    <span
                      className="shrink-0 text-sm font-semibold underline underline-offset-4"
                      style={{ color: s.color }}
                    >
                      Keşfet →
                    </span>
                  </div>
                </div>
              </Link>
            </m.li>
          ))}
        </m.ul>
      </div>
    </section>
  );
}

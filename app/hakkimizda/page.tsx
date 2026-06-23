import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Celyx Digital; yaratıcılığı yapay zeka ile birleştiren, sonuç odaklı bir dijital büyüme stüdyosudur.",
};

const VALUES = [
  {
    title: "AI-First Yaklaşım",
    desc: "Yapay zekayı her hizmetin merkezine koyarak daha hızlı ve daha akıllı sonuçlar üretiriz.",
  },
  {
    title: "Sonuç Odaklılık",
    desc: "Boş metrikler değil; gerçek gelir, gerçek büyüme ve ölçülebilir etki hedefleriz.",
  },
  {
    title: "Şeffaflık",
    desc: "Her adımı, her bütçeyi ve her sonucu net raporlarla paylaşırız.",
  },
];

export default function Page() {
  return (
    <main id="icerik" className="min-h-dvh bg-ink px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
      <div className="mx-auto max-w-container">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#CCFF00" }}>
          Hakkımızda
        </p>
        <h1 className="font-sans font-black uppercase leading-[0.95] tracking-[-0.03em] text-white text-[clamp(44px,7vw,96px)]">
          Sizi geleceğe<br />
          <span style={{ color: "#CCFF00" }}>taşıyan</span> ekip.
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <p className="text-lg leading-relaxed text-white/65">
            Celyx Digital, yaratıcılığı yapay zeka ile harmanlayan ileri
            görüşlü bir dijital büyüme stüdyosudur. Web tasarımdan ücretli
            reklamcılığa, sosyal medyadan logo tasarımına kadar markanızın
            dijital yolculuğunun her aşamasında yanınızdayız.
          </p>
          <p className="text-lg leading-relaxed text-white/65">
            Amacımız basit: markaları sürdürülebilir, ölçülebilir ve gerçek
            büyümeyle buluşturmak. Sertifikalı uzmanlardan oluşan ekibimiz,
            her projeye stratejik bir bakış ve titiz bir uygulama anlayışıyla
            yaklaşır.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-white/10 bg-surface p-7"
            >
              <h2 className="text-xl font-bold text-white">{v.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/iletisim"
            data-cursor="hover"
            className="inline-flex min-h-[52px] items-center gap-2 rounded-full px-8 text-sm font-semibold uppercase tracking-wide text-ink transition-transform hover:scale-[1.03]"
            style={{ background: "#CCFF00" }}
          >
            Bizimle Çalışın
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </main>
  );
}

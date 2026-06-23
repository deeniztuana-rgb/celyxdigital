import type { Metadata } from "next";
import { Mail, Instagram, Globe, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Projenizi konuşmak için Celyx Digital ile iletişime geçin. 24 saat içinde size özel teklif hazırlayalım.",
};

const CHANNELS = [
  { icon: Mail, label: "E-posta", value: "hello@celyx.digital", href: "mailto:hello@celyx.digital" },
  { icon: Instagram, label: "Instagram", value: "@pehlivannagroup", href: "https://www.instagram.com/pehlivannagroup" },
  { icon: Globe, label: "Web", value: "pehlivannagroup.com", href: "https://pehlivannagroup.com/" },
];

export default function Page() {
  return (
    <main id="icerik" className="min-h-dvh bg-ink px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
      <div className="mx-auto max-w-container">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#CCFF00" }}>
          İletişim
        </p>
        <h1 className="font-sans font-black uppercase leading-[0.95] tracking-[-0.03em] text-white text-[clamp(48px,8vw,104px)]">
          Konuşalım<span style={{ color: "#CCFF00" }}>.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          Projenizi anlatın, 24 saat içinde size özel bir teklif hazırlayalım.
          Aşağıdaki kanallardan dilediğiniz an bize ulaşabilirsiniz.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {CHANNELS.map((c) => {
            const Icon = c.icon;
            const external = c.href.startsWith("http");
            return (
              <a
                key={c.label}
                href={c.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                data-cursor="hover"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40"
              >
                <div className="flex items-start justify-between">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: "rgba(204,255,0,0.10)", color: "#CCFF00" }}
                  >
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden />
                </div>
                <div className="mt-8">
                  <p className="text-xs uppercase tracking-wider text-white/45">{c.label}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{c.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12">
          <a
            href="mailto:hello@celyx.digital"
            data-cursor="hover"
            className="inline-flex min-h-[52px] items-center gap-2 rounded-full px-8 text-sm font-semibold uppercase tracking-wide text-ink transition-transform hover:scale-[1.03]"
            style={{ background: "#CCFF00" }}
          >
            E-posta Gönder
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </main>
  );
}

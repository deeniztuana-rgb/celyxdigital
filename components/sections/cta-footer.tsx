"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useSmoothScroll } from "@/components/providers/smooth-scroll";

interface FooterLink {
  label: string;
  href: string;
}

function FooterCol({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2">
        {links.map((l) => {
          const external = /^(https?:|mailto:)/.test(l.href);
          const className =
            "text-sm text-white/50 transition-colors hover:text-white";
          return (
            <li key={l.label}>
              {external ? (
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={className}
                >
                  {l.label}
                </a>
              ) : (
                <Link href={l.href} className={className}>
                  {l.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function CtaFooter() {
  const { scrollTo } = useSmoothScroll();

  const ticker = (
    <div
      aria-hidden
      className="flex shrink-0 items-center gap-8 pr-8 text-sm font-semibold uppercase tracking-wider text-white/70"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="flex items-center gap-8 whitespace-nowrap">
          CelyxDigital.com
          <span style={{ color: "#CCFF00" }}>★</span>
          Dijital Ajans
          <span style={{ color: "#CCFF00" }}>★</span>
          <ArrowUpRight className="h-4 w-4" />
        </span>
      ))}
    </div>
  );

  return (
    <footer id="contact" className="overflow-x-clip bg-ink">
      <div className="px-5 pb-16 pt-24 text-center sm:px-8 sm:pt-32">
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 text-sm italic text-white/45"
        >
          Büyümeye hazır mısınız?
        </m.p>

        <div className="font-sans font-black uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(80px,12vw,160px)]">
          <m.span
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="block text-stroke-white-2"
          >
            Projenizi Beraber
          </m.span>
          <m.span
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="block text-white"
          >
            Tasarlayalım.
          </m.span>
        </div>

        <div className="mt-10">
          <button
            onClick={() => scrollTo("#top")}
            className="inline-flex min-h-[52px] items-center gap-2 rounded-full px-8 text-sm font-semibold uppercase tracking-wide text-ink transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            style={{ background: "#CCFF00" }}
          >
            Projenizi Başlatın
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      {/* Ticker marquee */}
      <div className="marquee-wrap overflow-hidden border-y border-white/10 py-5">
        <div className="flex w-max animate-marquee">
          {ticker}
          {ticker}
        </div>
      </div>

      {/* Footer columns */}
      <div className="mx-auto grid max-w-container gap-10 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: "#CCFF00", boxShadow: "0 0 16px 4px rgba(204,255,0,0.6)" }}
            />
            <span className="font-display text-lg font-semibold text-white">
              Celyx<span className="text-white/50">Digital</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/50">
            AI-first dijital büyüme stüdyosu.
          </p>
        </div>
        <FooterCol
          title="Hizmetler"
          links={[
            { label: "Web Tasarım", href: "/hizmetler/web-tasarim" },
            { label: "Sosyal Medya", href: "/hizmetler/sosyal-medya" },
            { label: "Meta & Google Ads", href: "/hizmetler/meta-google-ads" },
            { label: "SEO", href: "/hizmetler/seo" },
            { label: "Reklam", href: "/hizmetler/reklam" },
            { label: "Logo Tasarımı", href: "/hizmetler/logo-tasarim" },
          ]}
        />
        <FooterCol
          title="Şirket"
          links={[
            { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
            { label: "Hakkımızda", href: "/hakkimizda" },
            { label: "Referanslarımız", href: "/referanslarimiz" },
            { label: "İletişim", href: "/iletisim" },
          ]}
        />
        <FooterCol
          title="İletişim"
          links={[
            { label: "celyxdigital@gmail.com", href: "mailto:celyxdigital@gmail.com" },
            { label: "0540 100 40 62", href: "tel:+905401004062" },
            { label: "WhatsApp", href: "https://wa.me/905401004062" },
          ]}
        />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-white/40 sm:flex-row sm:px-8">
          <p>© 2025 Celyx Digital. Tüm hakları saklıdır.</p>
          <a href="#" className="transition-colors hover:text-white/70">
Gizlilik Politikası
          </a>
        </div>
      </div>
    </footer>
  );
}

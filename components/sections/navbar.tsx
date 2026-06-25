"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSmoothScroll } from "@/components/providers/smooth-scroll";

const links = [
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/referanslarimiz", label: "Referanslarımız" },
  { href: "/iletisim", label: "İletişim" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollTo } = useSmoothScroll();

  const startProject = () => {
    setOpen(false);
    // Ana sayfadaysak footer CTA'ya kaydır, değilsek iletişim sayfasına git.
    if (pathname === "/") scrollTo("#contact");
    else window.location.href = "/iletisim";
  };

  return (
    <m.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-container items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          data-cursor="hover"
          className="flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Celyx Digital — ana sayfa"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Celyx Digital" className="h-9 w-auto" />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  data-cursor="hover"
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    active ? "text-white" : "text-white/60 hover:text-white",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li>
            <button
              onClick={startProject}
              data-cursor="hover"
              className="ml-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Projenizi Başlatın
            </button>
          </li>
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-md text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-white/5 transition-[max-height] duration-300 ease-out md:hidden",
          open ? "max-h-80" : "max-h-0",
        )}
      >
        <ul className="space-y-1 px-5 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block w-full rounded-md px-3 py-3 text-left text-base font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={startProject}
              className="block w-full rounded-md px-3 py-3 text-left text-base font-medium text-accent"
            >
              Projenizi Başlatın
            </button>
          </li>
        </ul>
      </div>
    </m.header>
  );
}

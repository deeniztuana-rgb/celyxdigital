"use client";

import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ChatMessage {
  from: "maya" | "user";
  text: string;
}

const FIRST_MESSAGE =
  "Merhaba! Size özel bir fiyat teklifi hazırlamak isterim. Hangi hizmetle ilgileniyorsunuz?";
const REPLY_MESSAGE =
  "Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz. 📩";

function TypingDots() {
  return (
    <div className="inline-flex gap-1 rounded-2xl rounded-tl-sm bg-white/5 px-4 py-4">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-2 w-2 animate-bounce rounded-full bg-white/50"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

export function MeetMaya() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [phase, setPhase] = useState<"typing" | "done">("typing");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: "maya", text: FIRST_MESSAGE },
  ]);
  const [value, setValue] = useState("");
  const [sent, setSent] = useState(false);

  // Brief typing intro, then reveal Maya's first message. Driven by a mount
  // timer so the message always appears (never gated by viewport thresholds).
  useEffect(() => {
    if (reduced) {
      setPhase("done");
      return;
    }
    const t = setTimeout(() => setPhase("done"), 1300);
    return () => clearTimeout(t);
  }, [reduced]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = value.trim();
    if (!text || sent) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text },
      { from: "maya", text: REPLY_MESSAGE },
    ]);
    setValue("");
    setSent(true);
  };

  return (
    <section id="quote" className="bg-ink px-5 py-24 sm:px-8 sm:py-32">
      <div
        ref={ref}
        className="mx-auto grid max-w-container items-center gap-12 lg:grid-cols-2"
      >
        {/* LEFT — chat quote widget */}
        <div
          className="relative rounded-[20px] border border-white/10 p-6"
          style={{ background: "#0D0D10" }}
        >
          <span
            className="absolute right-6 top-6 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider"
            style={{ color: "#CCFF00" }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "#CCFF00" }}
            />
            Canlı
          </span>

          <div className="flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-bold text-white">
              M
              <span
                className="absolute -bottom-0 -right-0 h-3 w-3 rounded-full border-2"
                style={{ background: "#CCFF00", borderColor: "#0D0D10" }}
              />
            </span>
            <div>
              <div className="text-sm font-semibold text-white">Maya</div>
              <div className="text-xs text-white/50">
                Çevrimiçi · AI Pazarlama Stratejisti
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="mt-6 flex min-h-[92px] flex-col gap-3">
            {phase === "typing" ? (
              <TypingDots />
            ) : (
              messages.map((msg, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className={
                    msg.from === "maya"
                      ? "max-w-[88%] self-start rounded-2xl rounded-tl-sm bg-white/5 px-4 py-3 text-sm leading-relaxed text-white/85"
                      : "max-w-[88%] self-end rounded-2xl rounded-tr-sm px-4 py-3 text-sm leading-relaxed text-ink"
                  }
                  style={
                    msg.from === "user" ? { background: "#CCFF00" } : undefined
                  }
                >
                  {msg.text}
                </m.div>
              ))
            )}
          </div>

          {/* Input + full-width CTA */}
          <form onSubmit={handleSubmit} className="mt-4">
            <label htmlFor="quote-input" className="sr-only">
              Hizmet, bütçe veya projeniz
            </label>
            <input
              id="quote-input"
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Hizmet, bütçe veya projenizi yazın..."
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-white/25 focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
            <button
              type="submit"
              disabled={sent}
              className="mt-3 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full text-sm font-semibold uppercase tracking-wide text-ink transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D10]"
              style={{ background: "#CCFF00" }}
            >
              {sent ? "Teklifiniz Alındı" : "Fiyat Teklifi Al"}
              {!sent && <ArrowRight className="h-4 w-4" aria-hidden />}
            </button>
          </form>
        </div>

        {/* RIGHT — copy */}
        <div>
          <h2 className="font-sans font-black uppercase leading-[0.95] tracking-[-0.03em] text-[clamp(40px,5.5vw,72px)]">
            <span className="block text-white">Hazır mısınız?</span>
            <span className="block" style={{ color: "#CCFF00" }}>
              Fiyat Teklifi
            </span>
            <span className="block text-stroke-white-2">Alın.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/60">
            Projenizi anlatın, 24 saat içinde size özel teklif hazırlayalım.
          </p>
          <button
            onClick={() => inputRef.current?.focus()}
            className="mt-8 inline-flex items-center gap-2 rounded-full text-sm font-semibold uppercase tracking-wide text-ink transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            style={{ background: "#CCFF00", padding: "20px 48px" }}
          >
            Hemen Fiyat Al
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}

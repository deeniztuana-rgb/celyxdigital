# Celyx Digital

A premium digital-agency landing page — dark luxury aesthetic, masked text reveals, custom cursor, Lenis smooth scroll, magnetic buttons, and a bespoke **Growth Ecosystem** radial-orbital animation.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Original work inspired by the motion/quality language of premium agency sites (Hello Up Digital), Linear, Stripe, Vercel, and Apple — no branding or content copied.

## Sections (home)

1. **Navbar** — fixed, blurred, magnetic links, mobile drawer
2. **Hero** — oversized Space Grotesk headline with masked word-rise reveal + magnetic CTAs
3. **Growth Ecosystem** — radial orbital timeline: center `CELYX DIGITAL`, five orbiting services (Web Design, Performance Ads, Social Media Management, SEO, Logo & Brand Identity) with hover detail panel and continuous orbit (pauses on hover)
4. **What We Do** — five bento cards with colorful premium gradient backgrounds; hover = lift + glow, smooth transition, **no flip / rotation / sound**
5. **CTA Footer** — closing reveal + contact

> Per the brief: the reference's second section, "Check Out Our Work", and the Maya AI section are intentionally **not** included. Hero flows straight into the ecosystem.

## Design

- **Palette:** black `#050506`, white type, electric-blue accent `#3B6BFF`, per-service secondary colors (blue / pink / purple / emerald / amber)
- **Type:** Space Grotesk (display) + Inter (body), via `next/font` (zero CLS)

## Engineering highlights

- **Performance:** `LazyMotion` (DOM features only), transform/opacity-only animation, orbit driven by a single `useMotionValue` + `useAnimationFrame` (no per-frame React re-renders)
- **Accessibility:** semantic HTML, skip link, visible focus rings, `aria-label`/`aria-expanded`, respects `prefers-reduced-motion` everywhere (cursor, Lenis, orbit, reveals all degrade gracefully)
- **Responsive:** mobile-first, `min-h-dvh`, `ResizeObserver`-driven orbit radius, ≥44px touch targets, custom cursor disabled on touch
- **SEO:** Metadata API (OG + Twitter), semantic landmarks, server-rendered content

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/                  layout (SEO + fonts) · page · globals.css
components/
  providers/          motion-provider (LazyMotion) · smooth-scroll (Lenis + context)
  ui/                 custom-cursor · magnetic-button · reveal-text
  sections/           navbar · hero · growth-ecosystem · what-we-do · cta-footer
  data/               services.ts
lib/                  utils (cn) · animations (tokens)
```

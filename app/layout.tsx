import type { Metadata } from "next";
import { Space_Grotesk, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/providers/motion-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Navbar } from "@/components/sections/navbar";
import { CtaFooter } from "@/components/sections/cta-footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Used only for the outline "WE BRING" headline line.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "900",
  style: "italic",
  variable: "--font-playfair",
  display: "swap",
});

const SITE = "https://celyx.digital";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Celyx Digital — Premium Digital Growth Studio",
    template: "%s · Celyx Digital",
  },
  description:
    "Celyx Digital is a premium studio for web design, advertising, social media, SEO, and brand identity. We turn ambitious brands into measurable growth.",
  keywords: [
    "digital agency",
    "web design",
    "performance ads",
    "social media",
    "SEO",
    "brand identity",
    "growth studio",
  ],
  openGraph: {
    type: "website",
    siteName: "Celyx Digital",
    title: "Celyx Digital — Premium Digital Growth Studio",
    description:
      "Web design, advertising, social, SEO, and brand identity — engineered for compounding growth.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Celyx Digital — Premium Digital Growth Studio",
    description:
      "Web design, advertising, social, SEO, and brand identity — engineered for compounding growth.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${playfair.variable}`}
    >
      <body className="bg-ink font-sans text-white antialiased">
        <MotionProvider>
          <SmoothScroll>
            <a
              href="#icerik"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
            >
              İçeriğe geç
            </a>
            <CustomCursor />
            <Navbar />
            {children}
            <CtaFooter />
          </SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}

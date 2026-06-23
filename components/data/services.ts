import {
  Layout,
  TrendingUp,
  Share2,
  Search,
  PenTool,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  color: string; // hex accent for this service
  icon: LucideIcon;
}

/** A node in the hero radial orbital timeline. */
export interface OrbitalNode {
  id: string;
  title: string;
  subtitle?: string;
  energy: number; // 0–100
  status: "active";
  icon: LucideIcon;
}

/** Orbiting service nodes for the hero (Turkish labels + energy levels). */
export const ORBITAL_NODES: OrbitalNode[] = [
  { id: "web", title: "Web Tasarım", energy: 100, status: "active", icon: Layout },
  { id: "ads", title: "Reklam", subtitle: "Meta & Google Ads", energy: 85, status: "active", icon: TrendingUp },
  { id: "seo", title: "SEO", energy: 90, status: "active", icon: Search },
  { id: "social", title: "Sosyal Medya", energy: 75, status: "active", icon: Share2 },
  { id: "logo", title: "Logo Tasarımı", energy: 80, status: "active", icon: PenTool },
];

/**
 * Core Celyx services — used both by the hero orbital (Growth Ecosystem) and
 * the "What We Do" cards so labels stay in sync.
 */
export const WHAT_WE_DO: Service[] = [
  {
    id: "web-design",
    title: "Web Design",
    tagline: "Websites & product UI",
    description:
      "Premium, responsive sites and interfaces designed to convert and built to last.",
    color: "#3B6BFF",
    icon: Layout,
  },
  {
    id: "advertising",
    title: "Advertising",
    tagline: "Paid growth",
    description:
      "Performance campaigns engineered around your numbers, not vanity metrics.",
    color: "#FF5C8A",
    icon: TrendingUp,
  },
  {
    id: "social-media",
    title: "Social Media",
    tagline: "Content & community",
    description:
      "An always-on social presence that compounds attention into demand.",
    color: "#A855F7",
    icon: Share2,
  },
  {
    id: "seo",
    title: "SEO",
    tagline: "Organic visibility",
    description:
      "Technical, on-page, and content SEO that puts you ahead of the search.",
    color: "#22D3A5",
    icon: Search,
  },
  {
    id: "logo-design",
    title: "Logo Design",
    tagline: "Brand identity",
    description:
      "Identity systems and logos that make your brand instantly recognisable.",
    color: "#F5A524",
    icon: PenTool,
  },
];

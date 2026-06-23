"use client";

import { useEffect, useRef, useState } from "react";
import {
  m,
  AnimatePresence,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { ORBITAL_NODES, type OrbitalNode } from "@/components/data/services";

const NODE = 76; // node footprint in px
const DEG_PER_SEC = 12; // orbital speed (≈30s per revolution)
const NEON = "#CCFF00";

/**
 * Celyx radial orbital timeline — sits on the right of the hero in place of the
 * reference's planets. Center holds the brand; service nodes orbit and reveal a
 * compact "ACTIVE · ENERGY" readout on hover. Neon-lime accent throughout.
 */
export function OrbitalEcosystem({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(440);
  const [activeId, setActiveId] = useState<string>(ORBITAL_NODES[0].id);
  const pausedRef = useRef(false);

  const rotation = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (reduced || pausedRef.current) return;
    rotation.set((rotation.get() + (delta / 1000) * DEG_PER_SEC) % 360);
  });

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setSize(Math.min(entry.contentRect.width, entry.contentRect.height));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const radius = size / 2 - NODE / 2 - 4;
  const active = ORBITAL_NODES.find((s) => s.id === activeId) ?? ORBITAL_NODES[0];

  return (
    <div className={cn("relative", className)}>
      <div
        ref={stageRef}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        className="relative mx-auto aspect-square w-full max-w-[480px]"
      >
        {/* Decorative orbit rings */}
        <svg
          aria-hidden
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          style={{ color: "rgba(204,255,0,0.14)" }}
        >
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <circle cx="50" cy="50" r="33" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="19" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </svg>

        {/* Connection line from center to the active node */}
        <ConnectionLine
          rotation={rotation}
          activeIndex={ORBITAL_NODES.findIndex((s) => s.id === active.id)}
          count={ORBITAL_NODES.length}
        />

        {/* Center brand node */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <m.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(204,255,0,0.35)",
                "0 0 0 16px rgba(204,255,0,0)",
              ],
            }}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 2.4, repeat: Infinity, ease: "easeOut" }
            }
            className="flex h-24 w-24 flex-col items-center justify-center rounded-full border text-center backdrop-blur-sm sm:h-28 sm:w-28"
            style={{ borderColor: "rgba(204,255,0,0.45)", background: "rgba(204,255,0,0.08)" }}
          >
            <span className="font-display text-sm font-semibold leading-tight text-white">
              CELYX
            </span>
            <span
              className="text-[9px] font-medium uppercase tracking-[0.2em]"
              style={{ color: NEON }}
            >
              Digital
            </span>
          </m.div>
        </div>

        {/* Orbiting service nodes */}
        {ORBITAL_NODES.map((node, i) => (
          <OrbitNode
            key={node.id}
            node={node}
            rotation={rotation}
            offset={(360 / ORBITAL_NODES.length) * i - 90}
            radius={radius}
            active={activeId === node.id}
            onActivate={() => setActiveId(node.id)}
          />
        ))}
      </div>

      {/* Compact readout — title, status, energy bar (no large panel) */}
      <div className="mx-auto mt-5 h-16 max-w-[360px]">
        <AnimatePresence mode="wait">
          <m.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-sm font-semibold text-white">
              {active.title}
              {active.subtitle && (
                <span className="font-normal text-white/45"> · {active.subtitle}</span>
              )}
            </p>
            <div className="mt-2 flex items-center justify-center gap-3">
              <span
                className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.16em]"
                style={{ color: NEON }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: NEON }} />
                {active.status}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/40">
                Energy {active.energy}%
              </span>
            </div>
            {/* Energy bar */}
            <div className="mx-auto mt-2 h-1 w-40 overflow-hidden rounded-full bg-white/10">
              <m.div
                className="h-full rounded-full"
                style={{ background: NEON }}
                initial={{ width: 0 }}
                animate={{ width: `${active.energy}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

interface OrbitNodeProps {
  node: OrbitalNode;
  rotation: MotionValue<number>;
  offset: number;
  radius: number;
  active: boolean;
  onActivate: () => void;
}

function OrbitNode({
  node,
  rotation,
  offset,
  radius,
  active,
  onActivate,
}: OrbitNodeProps) {
  const x = useTransform(
    rotation,
    (r) => radius * Math.cos(((r + offset) * Math.PI) / 180),
  );
  const y = useTransform(
    rotation,
    (r) => radius * Math.sin(((r + offset) * Math.PI) / 180),
  );

  const Icon = node.icon;

  return (
    <m.button
      data-cursor="hover"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-label={`${node.title} — ${node.status}, energy ${node.energy}%`}
      style={{
        x,
        y,
        width: NODE,
        height: NODE,
        marginLeft: -NODE / 2,
        marginTop: -NODE / 2,
      }}
      className="absolute left-1/2 top-1/2 z-10 flex flex-col items-center justify-center rounded-full focus-visible:outline-none"
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
    >
      <span
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300",
          active ? "scale-105" : "",
        )}
        style={{
          background: active ? "rgba(204,255,0,0.18)" : "rgba(255,255,255,0.04)",
          borderColor: active ? NEON : "rgba(255,255,255,0.14)",
          boxShadow: active ? `0 0 22px 2px rgba(204,255,0,0.45)` : "none",
          color: active ? NEON : "rgba(255,255,255,0.7)",
        }}
      >
        <Icon className="h-[18px] w-[18px]" aria-hidden />
      </span>
      <span
        className={cn(
          "mt-1.5 max-w-[84px] text-center text-[10px] font-medium leading-tight transition-colors",
          active ? "text-white" : "text-white/45",
        )}
      >
        {node.title}
      </span>
    </m.button>
  );
}

/** Thin neon line linking the center node to the active service node. */
function ConnectionLine({
  rotation,
  activeIndex,
  count,
}: {
  rotation: MotionValue<number>;
  activeIndex: number;
  count: number;
}) {
  const offset = (360 / count) * activeIndex - 90;
  const angle = useTransform(rotation, (r) => r + offset);

  return (
    <m.div
      aria-hidden
      className="absolute left-1/2 top-1/2 z-0 h-px origin-left"
      style={{
        width: "44%",
        rotate: angle,
        background: "linear-gradient(90deg, rgba(204,255,0,0), rgba(204,255,0,0.5))",
      }}
    />
  );
}

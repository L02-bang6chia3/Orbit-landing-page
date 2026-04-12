import { useState } from "react";
import { motion } from "framer-motion";
import { RevealSection, RevealItem } from "./RevealSection";
import { GlowButton } from "./GlowButton";

const habits = [
  {
    title: "Hydration Cycle",
    meta: "Shared orbit · 4.2k pilots",
    accent: "cosmic",
  },
  {
    title: "Deep Space Focus",
    meta: "High-frequency pattern",
    accent: "orbit",
  },
  {
    title: "Lunar Sleep Arc",
    meta: "Community verified",
    accent: "mint",
  },
];

export function FeatureDiscover() {
  const [query, setQuery] = useState("");

  return (
    <RevealSection
      id="discover"
      className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(232,121,249,0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl">
        <RevealItem className="mb-12 text-center md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orbit/90">
            Discover new planets
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-gradient-heading">Shared orbits &amp; patterns</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Scan your quadrant for high-frequency habit patterns and community
            orbits you can adopt—then sync them to your personal trajectory.
          </p>
        </RevealItem>

        <RevealItem className="mx-auto max-w-lg" delay={0.08}>
          <div className="glass-card flex flex-col gap-3 rounded-2xl border-cosmic/30 p-4 sm:flex-row sm:items-center sm:gap-3">
            <label className="sr-only" htmlFor="scan-quadrant">
              Scan quadrant
            </label>
            <input
              id="scan-quadrant"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Scan quadrant for orbits…"
              className="min-h-[48px] flex-1 rounded-xl border border-cosmic/25 bg-space/90 px-4 text-sm text-white placeholder:text-white/35 focus:border-cosmic/60 focus:outline-none focus:ring-1 focus:ring-cosmic/50"
            />
            <GlowButton
              variant="mint"
              type="button"
              className="min-h-[48px] w-full shrink-0 px-6 sm:w-auto"
            >
              SCAN
            </GlowButton>
          </div>
        </RevealItem>

        <div className="mx-auto mt-10 max-w-lg space-y-4">
          {habits.map((h, i) => (
            <RevealItem key={h.title} delay={0.06 * i}>
              <motion.div
                className="glass-card group flex items-center justify-between gap-4 rounded-2xl border-cosmic/25 px-4 py-4 transition hover:border-cosmic/45"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              >
                <div>
                  <p className="font-semibold text-white">{h.title}</p>
                  <p className="mt-0.5 text-xs text-white/45">{h.meta}</p>
                </div>
                <span
                  className={`h-2 w-2 shrink-0 rounded-full ${
                    h.accent === "cosmic"
                      ? "bg-cosmic shadow-[0_0_10px_rgba(46,144,255,0.8)]"
                      : h.accent === "orbit"
                        ? "bg-orbit shadow-glow-orbit"
                        : "bg-mint shadow-glow-mint"
                  }`}
                  aria-hidden
                />
              </motion.div>
            </RevealItem>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

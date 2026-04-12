import { useState } from "react";
import { motion } from "framer-motion";
import { RevealSection, RevealItem } from "./RevealSection";
import { GlowButton } from "./GlowButton";
import { GlowCard } from "./GlowCard";

const orbits = [
  {
    title: "Deep Work Sync",
    meta: "Shared orbit · High retention",
    hue: "cosmic",
  },
  {
    title: "Hydration Cycle",
    meta: "Community pattern · 12k syncs",
    hue: "orbit",
  },
  {
    title: "Morning Burn Stack",
    meta: "Rising frequency band",
    hue: "mint",
  },
];

export function FeatureDiscover() {
  const [query, setQuery] = useState("");

  return (
    <RevealSection
      id="discover"
      className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_100%,rgba(232,121,249,0.07),transparent)]" />

      <div className="relative mx-auto max-w-2xl">
        <RevealItem className="mb-10 text-center md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orbit/90">
            Library &amp; discover
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-gradient-heading">Synchronize Your Frequency.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Scan the quadrant for Shared Orbits—proven, high-frequency patterns
            pilots already run. Adopt, adapt, and align them to your trajectory.
          </p>
        </RevealItem>

        <RevealItem>
          <GlowCard className="p-5 sm:p-6">
            <label className="sr-only" htmlFor="orbit-search">
              Search shared orbits
            </label>
            <input
              id="orbit-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search frequency, orbit name, or tag…"
              className="min-h-[52px] w-full rounded-xl border border-cosmic/30 bg-space/90 px-4 text-sm text-white placeholder:text-white/35 shadow-[0_0_24px_rgba(46,144,255,0.08)] backdrop-blur-md focus:border-cosmic/55 focus:outline-none focus:ring-1 focus:ring-cosmic/40"
            />

            <div className="mt-6 space-y-3">
              {orbits.map((o, i) => (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.06 * i, duration: 0.5 }}
                >
                  <GlowCard className="flex items-center justify-between gap-4 border-white/10 px-4 py-4">
                    <div>
                      <p className="font-semibold text-white">{o.title}</p>
                      <p className="mt-0.5 text-xs text-white/45">{o.meta}</p>
                    </div>
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                        o.hue === "cosmic"
                          ? "bg-cosmic shadow-[0_0_14px_rgba(46,144,255,0.85)]"
                          : o.hue === "orbit"
                            ? "bg-orbit shadow-glow-orbit"
                            : "bg-mint shadow-glow-mint"
                      }`}
                      aria-hidden
                    />
                  </GlowCard>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <GlowButton variant="mint" type="button" className="w-full min-h-[52px]">
                SCAN
              </GlowButton>
            </div>
          </GlowCard>
        </RevealItem>
      </div>
    </RevealSection>
  );
}

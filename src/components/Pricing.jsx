import { motion } from "framer-motion";
import { RevealSection, RevealItem } from "./RevealSection";
import { GlowButton } from "./GlowButton";
import { GlowCard } from "./GlowCard";

const features = [
  "Advanced AI Gravity Sync",
  "Unlimited Habit Constellations", 
  "Unlimited Community Scans",
  "Deep Orbit Analytics",
];

export function Pricing() {
  return (
    <RevealSection
      id="pricing"
      className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <RevealItem className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orbit/90">
            Orbit plus
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-gradient-heading">Upgrade Your Orbit.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Unlock the full telemetry stack. Pick the billing cycle that matches
            how you burn through missions.
          </p>
        </RevealItem>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <RevealItem>
            <GlowCard
              className="flex h-full flex-col p-8"
              style={{ backgroundColor: "rgba(13, 13, 18, 0.75)" }}
            >
              <h3 className="text-lg font-semibold text-white">Monthly Orbit</h3>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$ 1.86</span>
                <span className="text-white/45">/mo</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-white/55">
                {features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-cosmic">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.button
                type="button"
                className="mt-8 w-full rounded-xl border border-white/12 bg-space/40 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-md"
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(46, 144, 255, 0.45)",
                  boxShadow:
                    "0 0 32px rgba(46, 144, 255, 0.25), 0 0 48px rgba(0, 255, 163, 0.1)",
                  backdropFilter: "blur(22px)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 380, damping: 26 }}
              >
                Select monthly
              </motion.button>
            </GlowCard>
          </RevealItem>

          <RevealItem delay={0.1}>
            <div
              className="relative flex h-full flex-col rounded-2xl p-[1px] shadow-[0_0_50px_rgba(46,144,255,0.35),0_0_90px_rgba(232,121,249,0.2)]"
              style={{
                background: "linear-gradient(135deg, #2E90FF, #E879F9)",
              }}
            >
              <GlowCard
                className="flex h-full flex-col rounded-2xl border-0 p-8 shadow-none ring-0"
                style={{ backgroundColor: "#0D0D12" }}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    Annual Orbit
                  </h3>
                  <span className="rounded-full border border-orbit/55 bg-orbit/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orbit shadow-glow-orbit">
                    Recommended Path
                  </span>
                </div>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gradient-heading">
                    $ 15.15
                  </span>
                  <span className="text-white/45">/yr</span>
                </p>
                <ul className="mt-8 flex-1 space-y-3 text-sm text-white/55">
                  {features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-mint">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <GlowButton variant="mint" pulse className="mt-8 w-full">
                  UPGRADE
                </GlowButton>
              </GlowCard>
            </div>
          </RevealItem>
        </div>
      </div>
    </RevealSection>
  );
}

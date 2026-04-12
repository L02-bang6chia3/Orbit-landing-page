import { motion } from "framer-motion";
import { RevealSection, RevealItem } from "./RevealSection";
import { GlowCard } from "./GlowCard";

export function AnalyticsTeaser() {
  return (
    <RevealSection
      id="analytics"
      className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <RevealItem className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orbit/90">
            Premium telemetry
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-gradient-heading">Deep Orbit Analytics</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Forecast drift before it happens. ORBIT overlays AI prediction
            curves with your lived cadence so stability is visible—not guessed.
          </p>
        </RevealItem>

        <RevealItem delay={0.08}>
          <GlowCard className="overflow-hidden p-6 sm:p-10">
            <div className="relative aspect-[16/9] w-full max-h-[340px] rounded-xl border border-cosmic/20 bg-gradient-to-br from-space via-[#0f111a] to-space shadow-[inset_0_0_80px_rgba(46,144,255,0.06)]">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 800 360"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
              >
                <defs>
                  <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2E90FF" />
                    <stop offset="100%" stopColor="#E879F9" />
                  </linearGradient>
                  <filter id="sg" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <motion.path
                  d="M40 280 C 180 120, 320 300, 480 160 S 700 80, 760 200"
                  fill="none"
                  stroke="url(#lg)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#sg)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                />
                {[
                  [120, 200],
                  [280, 220],
                  [440, 165],
                  [600, 120],
                  [720, 195],
                ].map(([x, y], i) => (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="6"
                    fill="#00FFA3"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.95 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.35 }}
                    style={{
                      filter: "drop-shadow(0 0 10px rgba(0,255,163,0.7))",
                    }}
                  />
                ))}
              </svg>
              <div className="absolute left-4 top-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
                AI Prediction
              </div>
              <div className="absolute right-4 top-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-mint/35">
                Stability Rating
              </div>
              <div className="absolute bottom-4 left-4 rounded-lg border border-cosmic/25 bg-space/80 px-3 py-2 text-xs text-white/50 backdrop-blur-md">
                Trajectory confidence · 0.91
              </div>
            </div>
          </GlowCard>
        </RevealItem>
      </div>
    </RevealSection>
  );
}

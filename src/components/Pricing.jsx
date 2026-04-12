import { RevealSection, RevealItem } from "./RevealSection";
import { GlowButton } from "./GlowButton";

const features = [
  "Advanced AI Gravity Sync",
  "Deep Orbit Analytics",
  "Unlimited Habit Constellations",
];

export function Pricing() {
  return (
    <RevealSection
      id="pricing"
      className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <RevealItem className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orbit/90">
            Orbit plus
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-gradient-heading">Unlock deeper telemetry</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Choose the billing cycle that matches your mission cadence. Both
            paths include the full premium constellation.
          </p>
        </RevealItem>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <RevealItem>
            <div
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-space p-8 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
              style={{ backgroundColor: "#0D0D12" }}
            >
              <h3 className="text-lg font-semibold text-white">
                Monthly Orbit
              </h3>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$9.99</span>
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
              <button
                type="button"
                className="mt-8 w-full rounded-xl border border-white/15 py-3.5 text-sm font-semibold text-white/80 transition hover:border-cosmic/40 hover:text-white"
              >
                Select monthly
              </button>
            </div>
          </RevealItem>

          <RevealItem delay={0.1}>
            <div
              className="relative flex h-full flex-col rounded-2xl p-[1px] shadow-[0_0_40px_rgba(46,144,255,0.2)]"
              style={{
                background: "linear-gradient(135deg, #2E90FF, #E879F9)",
              }}
            >
              <div
                className="flex h-full flex-col rounded-2xl p-8"
                style={{ backgroundColor: "#0D0D12" }}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    Annual Trajectory
                  </h3>
                  <span className="rounded-full border border-orbit/50 bg-orbit/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orbit">
                    Recommended Path
                  </span>
                </div>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gradient-heading">
                    $79.99
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
                <GlowButton variant="gradient" className="mt-8 w-full">
                  UPGRADE
                </GlowButton>
              </div>
            </div>
          </RevealItem>
        </div>
      </div>
    </RevealSection>
  );
}

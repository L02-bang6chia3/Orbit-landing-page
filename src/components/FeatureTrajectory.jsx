import { RevealSection, RevealItem } from "./RevealSection";
import { GlowCard } from "./GlowCard";
import { ScreenshotSlot } from "./ScreenshotSlot";

const EDIT_SRC = "/Orbit-landing-page/screenshots/edit-habit.png";
const TASK_SRC = "/Orbit-landing-page/screenshots/task-detail.png";

export function FeatureTrajectory() {
  return (
    <RevealSection
      id="trajectory"
      className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <RevealItem className="mb-14 text-center md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orbit/90">
            Status overview
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-gradient-heading">Navigate Your Cycles.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Lock recurring windows, choreograph T-Minus signals, and tune haptic
            resonance so every mission lands with precision.
          </p>
        </RevealItem>

        <div className="flex flex-col gap-12 lg:gap-16">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:gap-12">
            <RevealItem className="w-full lg:w-1/2">
              <GlowCard className="h-full p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cosmic/90">
                  Define weekly cycle
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                  Define Weekly Cycle
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  Set up your recurring habits with a clean 7-day arc and signal setup.
                </p>
                <div className="mt-6 flex items-center justify-center">
                  <div className="relative">
                    <div className="flex h-32 w-48 items-center justify-center rounded-xl border border-cosmic/30 bg-space/50">
                      <div className="flex gap-1">
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                          <div
                            key={i}
                            className={`h-8 w-8 flex items-center justify-center rounded text-xs font-semibold ${
                              i < 5 ? 'bg-cosmic/20 text-cosmic border border-cosmic/40' : 'bg-space/30 text-white/40 border border-white/10'
                            }`}
                          >
                            {day}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-mint/20 border border-mint/40">
                        <div className="h-2 w-2 rounded-full bg-mint animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </RevealItem>
            <RevealItem className="w-full lg:w-1/2" delay={0.08}>
              <GlowCard className="h-full p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orbit/90">
                  Define haptic resonance
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                  Define Haptic Resonance
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  Configure your duration toggle and glowing "Duration Active" signal.
                </p>
                <div className="mt-6 flex items-center justify-center">
                  <div className="relative">
                    <div className="flex h-20 w-40 items-center justify-center rounded-xl border border-orbit/30 bg-space/50">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-mint">90 Minutes</div>
                        <div className="text-xs text-mint/80 animate-pulse">Duration Active</div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-mint animate-ping"></div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </RevealItem>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

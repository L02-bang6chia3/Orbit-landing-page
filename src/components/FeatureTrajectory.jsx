import { RevealSection, RevealItem } from "./RevealSection";

function TaskDetailMockup() {
  return (
    <div className="glass-card relative overflow-hidden rounded-2xl p-5 shadow-[0_0_0_1px_rgba(46,144,255,0.2),0_8px_40px_rgba(0,0,0,0.45)] sm:p-6">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cosmic/15 blur-2xl" />
      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orbit/90">
              Task detail
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              Orbital Deep Work
            </h3>
          </div>
          <span className="rounded-lg border border-cosmic/40 bg-cosmic/10 px-2.5 py-1 text-xs font-medium text-cosmic">
            90 Minutes
          </span>
        </div>

        <div className="mt-6 space-y-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
            Timeline
          </p>
          <div className="relative h-2 overflow-hidden rounded-full bg-white/5">
            <div
              className="absolute left-0 top-0 h-full w-[68%] rounded-full"
              style={{
                background: "linear-gradient(90deg, #2E90FF, #E879F9)",
                boxShadow: "0 0 12px rgba(46, 144, 255, 0.6)",
              }}
            />
          </div>
          <div className="flex justify-between text-[11px] text-white/40">
            <span>T-Minus signal</span>
            <span className="text-mint/90">Stable arc</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between rounded-xl border border-cosmic/25 bg-space/60 px-4 py-3">
          <div>
            <p className="text-sm font-medium text-white">Haptic Resonance</p>
            <p className="text-xs text-white/45">Tactile cues on phase shift</p>
          </div>
          <button
            type="button"
            className="relative h-7 w-12 rounded-full bg-cosmic/30 transition hover:bg-cosmic/45"
            aria-pressed="true"
          >
            <span
              className="absolute right-1 top-1 h-5 w-5 rounded-full bg-cosmic shadow-[0_0_12px_rgba(46,144,255,0.8)]"
              aria-hidden
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export function FeatureTrajectory() {
  return (
    <RevealSection
      id="trajectory"
      className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <RevealItem className="mb-14 text-center md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orbit/90">
            Status overview
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-gradient-heading">Trajectory roadmap</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Plot habits like orbital paths: add and edit missions, lock in your
            weekly cycle, and configure T-Minus delay signals before each burn.
          </p>
        </RevealItem>

        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
            <RevealItem className="w-full lg:w-1/2">
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Habit constellations you control
              </h3>
              <p className="mt-3 text-white/60">
                Create missions with clear duration, recurring windows, and
                intelligent reminders that feel calibrated—not chaotic.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/55">
                <li className="flex gap-2">
                  <span className="text-cosmic">◆</span>
                  Add / edit habits with live trajectory previews
                </li>
                <li className="flex gap-2">
                  <span className="text-orbit">◆</span>
                  Weekly cycle templates for repeatable orbits
                </li>
                <li className="flex gap-2">
                  <span className="text-mint">◆</span>
                  T-Minus delay signals before high-focus burns
                </li>
              </ul>
            </RevealItem>
            <RevealItem className="w-full lg:w-1/2" delay={0.1}>
              <TaskDetailMockup />
            </RevealItem>
          </div>

          <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
            <RevealItem className="w-full lg:w-1/2">
              <div className="glass-card rounded-2xl border-cosmic/35 p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orbit/90">
                  Roadmap pulse
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Weekly cycle", v: "Locked" },
                    { label: "T-Minus", v: "12m" },
                    { label: "Arc stability", v: "94%" },
                  ].map((c) => (
                    <div
                      key={c.label}
                      className="rounded-xl border border-cosmic/20 bg-space/80 px-3 py-3 text-center"
                    >
                      <p className="text-[10px] uppercase tracking-wider text-white/40">
                        {c.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-cosmic">
                        {c.v}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-5 h-24 rounded-xl border border-cosmic/25 bg-gradient-to-br from-cosmic/5 to-orbit/5 p-3"
                  role="img"
                  aria-label="Abstract trajectory visualization"
                >
                  <div className="flex h-full items-end justify-between gap-1 px-1">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <div
                        key={i}
                        className="w-full rounded-t-sm bg-gradient-to-t from-cosmic to-orbit/80 opacity-90"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </RevealItem>
            <RevealItem className="w-full lg:w-1/2" delay={0.1}>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                One overview. Every burn accounted for.
              </h3>
              <p className="mt-3 text-white/60">
                Status panels surface drift, momentum, and completion arcs so
                you always know whether you are on-course—or due for a
                correction maneuver.
              </p>
            </RevealItem>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

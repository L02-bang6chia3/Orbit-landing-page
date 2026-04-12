import { RevealSection, RevealItem } from "./RevealSection";
import { GlowCard } from "./GlowCard";

function IconConstellation() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
      <defs>
        <filter id="gm" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {[
        [12, 44],
        [32, 14],
        [52, 38],
        [28, 52],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="4"
          fill="#00FFA3"
          filter="url(#gm)"
          opacity="0.95"
        />
      ))}
      <path
        d="M12 44L32 14L52 38L28 52Z"
        stroke="#00FFA3"
        strokeWidth="1.5"
        fill="none"
        opacity="0.65"
      />
    </svg>
  );
}

function IconCompass() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
      <circle
        cx="32"
        cy="32"
        r="22"
        stroke="#00FFA3"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
        style={{ filter: "drop-shadow(0 0 8px rgba(0,255,163,0.6))" }}
      />
      <path
        d="M32 14L38 32L32 50L26 32Z"
        fill="#00FFA3"
        opacity="0.9"
        style={{ filter: "drop-shadow(0 0 10px rgba(0,255,163,0.55))" }}
      />
      <circle cx="32" cy="32" r="3" fill="#0D0D12" />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
      <path
        d="M32 8L40 36H24L32 8Z"
        fill="#00FFA3"
        style={{ filter: "drop-shadow(0 0 10px rgba(0,255,163,0.55))" }}
      />
      <path
        d="M24 36h16l-4 20-4-8-4 8-4-20Z"
        fill="#00FFA3"
        opacity="0.75"
      />
      <path
        d="M20 44c-6 4-8 12-8 12s8-2 12-8"
        stroke="#00FFA3"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

const steps = [
  {
    title: "Define Your Constellation",
    body: "Choose your core habits to build a personal network.",
    Icon: IconConstellation,
  },
  {
    title: "Calibrate Your Trajectory",
    body: "Set AI-powered weekly cycles and T-minus delay signals.",
    Icon: IconCompass,
  },
  {
    title: "Launch & Monitor Resonance",
    body: "Cất cánh and watch your stability rating grow.",
    Icon: IconRocket,
  },
];

export function ProcessSteps() {
  return (
    <RevealSection
      id="process"
      className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <RevealItem className="mb-12 text-center md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orbit/90">
            Flight protocol
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-gradient-heading">Three ignition steps</span>
          </h2>
        </RevealItem>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => {
            const StepIcon = s.Icon;
            return (
            <RevealItem key={s.title} delay={0.08 * i}>
              <GlowCard className="flex h-full flex-col items-center p-8 text-center">
                <StepIcon />
                <h3 className="mt-6 text-lg font-bold text-white sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {s.body}
                </p>
              </GlowCard>
            </RevealItem>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}

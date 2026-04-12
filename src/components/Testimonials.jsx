import { RevealSection, RevealItem } from "./RevealSection";
import { GlowCard } from "./GlowCard";

function AviatorAvatar({ variant }) {
  const stroke = variant === "a" ? "#2E90FF" : variant === "b" ? "#E879F9" : "#00FFA3";
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-12 w-12 shrink-0"
      aria-hidden
    >
      <circle cx="24" cy="24" r="22" fill="#0D0D12" stroke={stroke} strokeWidth="1.5" />
      <ellipse cx="24" cy="22" rx="14" ry="10" fill="none" stroke={stroke} strokeWidth="1.2" opacity="0.7" />
      <path
        d="M10 26c4 8 24 8 28 0"
        fill="none"
        stroke={stroke}
        strokeWidth="1.2"
        opacity="0.55"
      />
      <circle cx="24" cy="20" r="5" fill={stroke} opacity="0.35" />
    </svg>
  );
}

const items = [
  {
    quote:
      "Quỹ đạo Hydration Cycle giúp tôi không bị bốc hơi.",
    name: "Commander Huyền",
    v: "a",
  },
  {
    quote: "AI chính xác tuyệt đối. My stability rating is up!",
    name: "Cường Void-Walker",
    v: "b",
  },
  {
    quote: "Best haptic resonance I've felt.",
    name: "Star-Navigator An",
    v: "c",
  },
];

export function Testimonials() {
  return (
    <RevealSection
      id="testimonials"
      className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <RevealItem className="mb-12 text-center md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orbit/90">
            Pilot logs
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Signals from Across the Void.
          </h2>
        </RevealItem>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {items.map((t, i) => (
            <RevealItem key={t.name} delay={0.08 * i}>
              <GlowCard className="flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <AviatorAvatar variant={t.v} />
                  <p className="text-sm italic leading-relaxed text-white/70">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-cosmic/90">
                  {t.name}
                </p>
              </GlowCard>
            </RevealItem>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

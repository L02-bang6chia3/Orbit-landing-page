import { Starfield } from "./Starfield";
import { FloatingPlanet } from "./FloatingPlanet";
import { GlowButton } from "./GlowButton";
import { RevealItem } from "./RevealSection";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(46,144,255,0.18),transparent),radial-gradient(ellipse_60%_50%_at_100%_50%,rgba(232,121,249,0.08),transparent)]" />
      <Starfield count={56} />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-24 pt-8 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-12 md:pb-32 md:pt-12 lg:px-8">
        <div className="w-full max-w-xl text-center md:max-w-none md:flex-1 md:text-left">
          <RevealItem>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-orbit/90 sm:text-sm">
              Deep space habit engine
            </p>
          </RevealItem>
          <RevealItem delay={0.08}>
            <h1
              id="hero-heading"
              className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="text-gradient-heading">Visualize Your Trajectory</span>
            </h1>
          </RevealItem>
          <RevealItem delay={0.14}>
            <p className="mt-6 text-base leading-relaxed text-white/65 sm:text-lg">
              Your long-term habits form a deep space path across the stars. Let
              the AI calculate the most stable route for your human potential.
            </p>
          </RevealItem>
          <RevealItem delay={0.2} className="mt-10 flex justify-center md:justify-start">
            <span id="hero-cta">
              <GlowButton variant="primary" className="w-full min-w-[220px] sm:w-auto">
                Launch Trajectory
              </GlowButton>
            </span>
          </RevealItem>
        </div>

        <RevealItem className="flex w-full justify-center md:flex-1" delay={0.12}>
          <FloatingPlanet />
        </RevealItem>
      </div>
    </section>
  );
}

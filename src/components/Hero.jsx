import { motion } from "framer-motion";
import { GravityWellOrb } from "./GravityWellOrb";
import { GlowButton } from "./GlowButton";
import { PhoneMockup } from "./PhoneMockup";
import { AppScreenImage } from "./AppScreenImage";
import { RevealItem } from "./RevealSection";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-16 sm:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-[28%] z-0 -translate-x-1/2 -translate-y-1/2 sm:top-[30%]">
        <GravityWellOrb />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <RevealItem>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-orbit/95 sm:text-sm">
            Intelligent Habit Ecosystem
          </p>
        </RevealItem>
        <RevealItem delay={0.06}>
          <h1
            id="hero-heading"
            className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient-heading">You are the Center. Let Habits Orbit You.</span>
          </h1>
        </RevealItem>
        <RevealItem delay={0.12}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Want to build habits but your schedule is too chaotic? ORBIT is an intelligent habit ecosystem. You pick the habits, our Gravity Engine finds the empty slots in your calendar and schedules them automatically.
          </p>
        </RevealItem>
        <RevealItem
          delay={0.18}
          className="mt-10 flex justify-center"
        >
          <span id="hero-cta">
            <GlowButton
              variant="primary"
              pulse
              className="w-full min-w-[240px] sm:w-auto"
            >
              Start Your Orbit
            </GlowButton>
          </span>
        </RevealItem>
      </div>

      <RevealItem
        delay={0.14}
        className="relative z-10 mx-auto mt-14 flex max-w-6xl justify-center px-4 sm:mt-20 sm:px-6 lg:px-8"
      >
        <motion.div
          className="w-full max-w-[300px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhoneMockup>
            <AppScreenImage />
          </PhoneMockup>
        </motion.div>
      </RevealItem>
    </section>
  );
}

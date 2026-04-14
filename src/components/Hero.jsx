import { motion } from 'framer-motion';
import { GlowButton } from './GlowButton';
import { PhoneMockup } from './PhoneMockup';
import { AppScreenImage } from './AppScreenImage';
import { RevealItem } from './RevealSection';

const heroPoints = [
  'Adaptive scheduling around your real calendar',
  'Lightweight reminders that stay out of the way',
  'Shared templates to launch habits faster',
];

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v10" />
      <path d="m8 10 4 4 4-4" />
      <path d="M4 17.5h16" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8 lg:pt-10"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-x-0 top-0 z-0 mx-auto h-[250px] max-w-6xl bg-[radial-gradient(circle_at_72%_34%,rgba(46,144,255,0.12),transparent_30%),radial-gradient(circle_at_35%_40%,rgba(232,121,249,0.10),transparent_26%)] blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="max-w-[520px] text-left">
          <RevealItem>
            <p className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62 sm:text-xs">
              Intelligent Habit Ecosystem
            </p>
          </RevealItem>

          <RevealItem delay={0.06}>
            <h1
              id="hero-heading"
              className="mt-4 max-w-[11ch] text-4xl font-bold leading-[1.04] tracking-[-0.03em] sm:text-[3.1rem] lg:text-[3.45rem]"
            >
              <span className="bg-gradient-to-r from-white via-cosmic to-orbit bg-clip-text text-transparent">
                You are the center. Let habits orbit you.
              </span>
            </h1>
          </RevealItem>

          <RevealItem delay={0.12}>
            <p className="mt-4 max-w-[35rem] text-[15px] leading-7 text-white/72 sm:text-base">
              Want to build habits automatically without fighting your schedule? ORBIT helps you
              choose the habits, then places them into the right moments with calm, clear structure.
            </p>
          </RevealItem>

          <RevealItem delay={0.18}>
            <div id="download" className="mt-6 flex flex-wrap items-center gap-3">
              <GlowButton variant="primary" size="md" className="min-w-[154px]">
                <DownloadIcon />
                Download App
              </GlowButton>
              <a
                href="#alignment"
                className="inline-flex items-center rounded-full border border-white/12 px-4 py-2.5 text-sm font-medium text-white/72 transition-colors hover:border-white/20 hover:text-white"
              >
                See how it works
              </a>
            </div>
          </RevealItem>

          <RevealItem delay={0.24}>
            <ul className="mt-7 max-w-[31rem] space-y-3">
              {heroPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-white/66 sm:text-[15px]"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cosmic" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </RevealItem>
        </div>

        <RevealItem
          delay={0.14}
          className="relative flex min-h-[430px] items-center justify-center lg:min-h-[560px] lg:justify-end"
        >
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cosmic/7 blur-[96px] sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px]" />

          <div className="relative z-10 flex w-full max-w-[640px] items-center justify-center lg:justify-end">
            <motion.div
              className="absolute bottom-[10%] left-[10%] z-20 w-[38%] sm:bottom-[12%] sm:left-[14%] sm:w-[32%] lg:bottom-[10%] lg:left-[10%] lg:w-[29%]"
              initial={{ opacity: 0, x: -18, y: 22 }}
              whileInView={{ opacity: 0.88, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.68, delay: 0.1 }}
            >
              <PhoneMockup className="origin-bottom -rotate-[9deg] scale-[1.05] shadow-[0_22px_56px_rgba(0,0,0,0.3)]">
                <AppScreenImage
                  src="/Orbit-landing-page/idea2-my habit detai.png"
                  alt="ORBIT habit detail screen"
                />
              </PhoneMockup>
            </motion.div>

            <motion.div
              className="relative z-10 w-[82%] sm:w-[72%] lg:w-[64%]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.06 }}
            >
              <PhoneMockup className="origin-bottom rotate-[4deg] scale-[1.28] shadow-[0_30px_84px_rgba(0,0,0,0.32)]">
                <AppScreenImage src="/Orbit-landing-page/idea2-home.png" alt="ORBIT home screen" />
              </PhoneMockup>
            </motion.div>
          </div>
        </RevealItem>
      </div>
    </section>
  );
}

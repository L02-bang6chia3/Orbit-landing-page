import { motion } from 'framer-motion';
import { GlowButton } from './GlowButton';
import { PhoneMockup } from './PhoneMockup';
import { AppScreenImage } from './AppScreenImage';
import { RevealItem } from './RevealSection';

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
      <div className="absolute inset-x-0 top-0 z-0 mx-auto h-[250px] max-w-6xl bg-[radial-gradient(circle_at_72%_34%,rgba(46,144,255,0.10),transparent_30%),radial-gradient(circle_at_35%_40%,rgba(232,121,249,0.08),transparent_26%)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <RevealItem>
            <p className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62 sm:text-xs">
              Intelligent Habit Ecosystem
            </p>
          </RevealItem>

          <RevealItem delay={0.06}>
            <h1
              id="hero-heading"
              className="mx-auto mt-4 max-w text-4xl font-bold leading-[1.04] tracking-[-0.03em] sm:text-[3.1rem] lg:text-[3.8rem]"
            >
              <span className="bg-gradient-to-r from-[#2E90FF] to-[#EAA6ED] bg-clip-text text-transparent">
                Find your center <br />
                Keep your habits in orbit
              </span>
            </h1>
          </RevealItem>

          <RevealItem delay={0.12}>
            <p className="mx-auto mt-4 max-w-xl text-[20px] leading-7 text-white/72 sm:text-base">
              Want to build habits automatically without fighting your schedule? <br />
              ORBIT helps you choose the habits, then places them into the right moments with calm,
              clear structure.
            </p>
          </RevealItem>

          <RevealItem delay={0.18}>
            <div id="download" className="mt-6 flex flex-wrap items-center justify-center gap-3">
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
        </div>

        <RevealItem
          delay={0.2}
          className="relative mt-12 flex min-h-[500px] items-end justify-center sm:mt-14 lg:mt-16 lg:min-h-[680px]"
        >
          <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cosmic/6 blur-[96px] sm:h-[460px] sm:w-[460px] lg:h-[560px] lg:w-[560px]" />

          <div className="relative z-10 flex w-full max-w-[1100px] items-end justify-center gap-4 sm:gap-6 lg:gap-10">
            <motion.div
              className="w-[26%] max-w-[180px] translate-y-10 sm:max-w-[210px] sm:translate-y-12 lg:w-[22%] lg:max-w-[240px]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <PhoneMockup className="origin-bottom -rotate-[8deg] scale-[1.04] shadow-[0_22px_56px_rgba(0,0,0,0.28)]">
                <AppScreenImage
                  src="/Orbit-landing-page/habit-library.png"
                  alt="ORBIT library screen"
                />
              </PhoneMockup>
            </motion.div>

            <motion.div
              className="relative z-20 w-[40%] max-w-[250px] sm:max-w-[290px] lg:w-[34%] lg:max-w-[340px]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0 }}
            >
              <PhoneMockup className="origin-bottom scale-[1.16] shadow-[0_30px_84px_rgba(0,0,0,0.34)]">
                <AppScreenImage src="/Orbit-landing-page/home.png" alt="ORBIT home screen" />
              </PhoneMockup>
            </motion.div>

            <motion.div
              className="w-[26%] max-w-[180px] translate-y-10 sm:max-w-[210px] sm:translate-y-12 lg:w-[22%] lg:max-w-[240px]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <PhoneMockup className="origin-bottom rotate-[8deg] scale-[1.04] shadow-[0_22px_56px_rgba(0,0,0,0.28)]">
                <AppScreenImage
                  src="/Orbit-landing-page/my-habits.png"
                  alt="ORBIT habit detail screen"
                />
              </PhoneMockup>
            </motion.div>
          </div>
        </RevealItem>
      </div>
    </section>
  );
}

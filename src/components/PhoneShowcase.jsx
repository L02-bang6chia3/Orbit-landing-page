import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Sub-component to create professional phone with floating effect
const PhoneMockup = ({ src, delay = 0, floatingDelay = 0, className = '' }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    }}
    className={`relative group ${className}`}
  >
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: floatingDelay,
      }}
      className="relative aspect-[9/19] rounded-[2.8rem] border-[8px] border-[#1A1F2E] bg-[#0A0F1A] overflow-hidden shadow-[0_0_50px_-12px_rgba(46,144,255,0.3)]"
    >
      {/* Dynamic Island Look */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0A0F1A] rounded-full z-30 flex items-center justify-end px-2">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20" />
      </div>

      {/* Screen Content */}
      <div className="absolute inset-0 z-0">
        <img src={src} alt="App Screenshot" className="w-full h-full object-cover" />
      </div>

      {/* Glass Reflection & Inner Shadow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] z-20" />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] z-10" />
    </motion.div>
  </motion.div>
);

export function PhoneShowcase() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      ref={sectionRef}
      className="relative pt-20 pb-8 md:pt-32 md:pb-12 px-6 overflow-hidden z-10"
    >
      {/* Enhanced Parallax Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-95"
          style={{
            backgroundImage: "url('/Orbit-landing-page/bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2E90FF]/8 to-transparent" />
      </motion.div>

      {/* Title Section - Moved to top */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-gradient-heading">Experience ORBIT in Action</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            See how our intelligent habit ecosystem transforms your daily routine into structured,
            achievable goals.
          </p>
        </motion.div>
      </div>

      {/* Phone Mockups Container */}
      <div className="relative z-10 max-w-6xl mx-auto mt-60">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-12 lg:gap-24">
          {/* Mockup 1: Left (Habit Library) */}
          <div className="w-full max-w-[160px] md:max-w-[200px] order-2 md:order-1 transition-all">
            <PhoneMockup
              src="/Orbit-landing-page/habit-library.png"
              delay={0.2}
              floatingDelay={0.5}
              className="md:translate-y-12"
            />
          </div>

          {/* Mockup 2: Center (Home Screen - Featured) */}
          <div className="w-full max-w-[200px] md:max-w-[240px] order-1 md:order-2 z-20 scale-105 md:scale-110">
            <PhoneMockup src="/Orbit-landing-page/home.png" delay={0} floatingDelay={0} />
          </div>

          {/* Mockup 3: Right (My Habits) */}
          <div className="w-full max-w-[160px] md:max-w-[200px] order-3 transition-all">
            <PhoneMockup
              src="/Orbit-landing-page/my-habits.png"
              delay={0.4}
              floatingDelay={1}
              className="md:translate-y-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

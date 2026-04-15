import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0 flex items-start justify-center"
      >
        <img 
          src="public/backgroud_LE_upscale_prime_x4 3.png" 
          alt="Hero Background" 
          className="w-full h-auto min-h-full object-cover object-top opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-6 max-w-4xl pt-32"
      >
        <h1 className="font-display text-3xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-[#2E90FF] to-[#EAA6ED]">
          Find your center <br />
          Keep your habits in orbit
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Turn chaotic days into stable trajectories <br className="hidden md:block" />
          Pick your habits and let our engine pull them into perfect alignment.
        </p>
        
      </motion.div>

      
      {/* Scroll Indicator
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div> */}
    </section>
  );
}

import { useMemo } from "react";
import { motion } from "framer-motion";

function mulberry32(seed) {
  return function next() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildStars(count, seed = 0x0d0d12) {
  const rnd = mulberry32(seed);
  return Array.from({ length: count }, (_, i) => {
    const size = rnd() * 2 + 0.5;
    return {
      id: i,
      style: {
        width: size,
        height: size,
        left: `${rnd() * 100}%`,
        top: `${rnd() * 100}%`,
        boxShadow:
          rnd() > 0.7
            ? "0 0 6px rgba(46, 144, 255, 0.8)"
            : "0 0 4px rgba(232, 121, 249, 0.35)",
      },
      duration: 2 + rnd() * 4,
      delay: rnd() * 4,
    };
  });
}

function Star({ style, duration, delay }) {
  return (
    <motion.span
      className="pointer-events-none absolute rounded-full bg-white"
      style={style}
      animate={{ opacity: [0.15, 0.85, 0.15] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function Starfield({ count = 48 }) {
  const stars = useMemo(() => buildStars(count), [count]);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {stars.map((s) => (
        <Star key={s.id} style={s.style} duration={s.duration} delay={s.delay} />
      ))}
    </div>
  );
}

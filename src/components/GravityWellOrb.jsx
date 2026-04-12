import { motion } from "framer-motion";

export function GravityWellOrb({ className = "" }) {
  return (
    <motion.div
      className={`relative flex h-[min(72vw,420px)] w-[min(72vw,420px)] items-center justify-center sm:h-[min(56vw,480px)] sm:w-[min(56vw,480px)] ${className}`}
      animate={{ 
        y: [0, -12, 0],
        rotate: [0, 360]
      }}
      transition={{ 
        y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 60, repeat: Infinity, ease: "linear" }
      }}
      aria-hidden
    >
      <motion.div
        className="absolute h-[130%] w-[130%] rounded-full opacity-50 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(46,144,255,0.5) 0%, rgba(46,144,255,0.08) 45%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="relative h-[45%] w-[45%] rounded-full sm:h-[42%] sm:w-[42%]"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, #6bb6ff 0%, #2E90FF 42%, #1560c4 100%)",
          boxShadow:
            "0 0 60px rgba(46, 144, 255, 0.9), 0 0 120px rgba(46, 144, 255, 0.45), inset -16px -20px 40px rgba(0,0,0,0.45)",
        }}
        animate={{
          scale: [1, 1.04, 1],
          boxShadow: [
            "0 0 60px rgba(46, 144, 255, 0.9), 0 0 120px rgba(46, 144, 255, 0.45), inset -16px -20px 40px rgba(0,0,0,0.45)",
            "0 0 80px rgba(46, 144, 255, 1), 0 0 140px rgba(46, 144, 255, 0.55), inset -16px -20px 40px rgba(0,0,0,0.45)",
            "0 0 60px rgba(46, 144, 255, 0.9), 0 0 120px rgba(46, 144, 255, 0.45), inset -16px -20px 40px rgba(0,0,0,0.45)",
          ],
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-[12%] rounded-full opacity-35"
          style={{
            background:
              "radial-gradient(circle at 70% 65%, rgba(255,255,255,0.55), transparent 55%)",
          }}
        />
      </motion.div>
      <motion.div
        className="absolute h-[22%] w-[125%] rounded-[100%] border border-orbit/45"
        style={{
          transform: "rotateX(72deg) rotateZ(-10deg)",
          boxShadow:
            "0 0 28px rgba(232, 121, 249, 0.35), inset 0 0 20px rgba(46, 144, 255, 0.15)",
        }}
        animate={{
          rotateZ: [-10, -10, 350],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute h-[16%] w-[108%] rounded-[100%] border border-cosmic/35 opacity-90"
        style={{ transform: "rotateX(78deg) rotateZ(6deg)" }}
        animate={{
          rotateZ: [6, 6, 366],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}

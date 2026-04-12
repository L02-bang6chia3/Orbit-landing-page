import { motion } from "framer-motion";

export function FloatingPlanet() {
  return (
    <motion.div
      className="relative mx-auto flex h-64 w-64 shrink-0 items-center justify-center sm:h-72 sm:w-72 md:h-80 md:w-80"
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <div
        className="absolute h-[120%] w-[120%] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(46,144,255,0.45) 0%, transparent 65%)",
        }}
      />
      <div
        className="relative h-36 w-36 rounded-full sm:h-40 sm:w-40"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #5eb0ff 0%, #2E90FF 45%, #1a5cb5 100%)",
          boxShadow:
            "0 0 40px rgba(46, 144, 255, 0.75), 0 0 80px rgba(46, 144, 255, 0.35), inset -12px -12px 24px rgba(0,0,0,0.35)",
        }}
      >
        <div
          className="absolute inset-2 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.5), transparent 55%)",
          }}
        />
      </div>
      <div
        className="absolute h-14 w-[115%] rounded-[100%] border border-orbit/50 sm:h-16"
        style={{
          transform: "rotateX(72deg) rotateZ(-12deg)",
          boxShadow:
            "0 0 20px rgba(232, 121, 249, 0.35), inset 0 0 12px rgba(46, 144, 255, 0.2)",
        }}
      />
      <div
        className="absolute h-10 w-[95%] rounded-[100%] border border-cosmic/40 sm:h-12"
        style={{
          transform: "rotateX(78deg) rotateZ(8deg)",
          opacity: 0.85,
        }}
      />
    </motion.div>
  );
}

import { motion } from "framer-motion";

export function PhoneMockup({ children, className = "" }) {
  return (
    <motion.div
      className={`relative mx-auto w-full max-w-[280px] sm:max-w-[300px] ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="rounded-[2.35rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent p-[10px] shadow-[0_0_0_1px_rgba(46,144,255,0.12),0_24px_80px_rgba(0,0,0,0.55),0_0_60px_rgba(46,144,255,0.12)] backdrop-blur-[2px]"
        style={{ backgroundColor: "rgba(13, 13, 18, 0.35)" }}
      >
        <div className="overflow-hidden rounded-[1.85rem] ring-1 ring-white/[0.06]">
          <div className="aspect-[9/19] w-full bg-space">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";

export function PhoneMockup({ children, className = "" }) {
  return (
    <motion.div
      className={`relative mx-auto w-full max-w-[220px] ${className}`}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-[8px] shadow-[0_18px_44px_rgba(0,0,0,0.36)]"
        style={{ backgroundColor: "rgba(13, 13, 18, 0.52)" }}
      >
        <div className="overflow-hidden rounded-[1.5rem] ring-1 ring-white/[0.06]">
          <div className="aspect-[9/19] w-full bg-space">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}

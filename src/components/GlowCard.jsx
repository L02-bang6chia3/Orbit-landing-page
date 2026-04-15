import { motion } from 'framer-motion';

const base =
  'rounded-2xl border border-cosmic/25 bg-space/55 shadow-[0_0_0_1px_rgba(46,144,255,0.12),0_12px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl';

export function GlowCard({ children, className = '', ...rest }) {
  return (
    <motion.div
      className={`${base} ${className}`}
      whileHover={{
        scale: 1.015,
        borderGlow: 'rgba(46, 144, 255, 0.45)',
        boxShadow: `
          0 0 0 1px rgba(96, 165, 250, 0.2), 
          0 0 40px rgba(59, 130, 246, 0.35), 
          0 0 72px rgba(96, 165, 250, 0.12), 
          0 0 120px rgba(147, 197, 253, 0.08),
          0 20px 56px rgba(0, 0, 0, 0.5)
        `,
        backdropFilter: 'blur(28px)',
        background:
          'linear-gradient(135deg, rgba(13, 13, 18, 0.8), rgba(46, 144, 255, 0.1), rgba(0, 255, 163, 0.05))',
      }}
      transition={{ type: 'spring', stiffness: 380, damping: 26 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

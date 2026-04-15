import { motion } from 'framer-motion';
import { GlowCard } from './GlowCard';

export function HapticHoverCard({ children, className = '', hoverColor = 'cosmic', ...rest }) {
  const colorMap = {
    mint: {
      borderGlow: 'rgba(0, 255, 163, 0.45)',
      boxShadow: `
        0 0 0 1px rgba(96, 165, 250, 0.2), 
        0 0 40px rgba(59, 130, 246, 0.35), 
        0 0 72px rgba(96, 165, 250, 0.12), 
        0 0 120px rgba(147, 197, 253, 0.08),
        0 20px 56px rgba(0, 0, 0, 0.5)
      `,
      background:
        'linear-gradient(135deg, rgba(13, 13, 18, 0.8), rgba(46, 144, 255, 0.1), rgba(0, 255, 163, 0.05))',
    },
    cosmic: {
      borderGlow: 'rgba(46, 144, 255, 0.45)',
      boxShadow: `
        0 0 0 1px rgba(96, 165, 250, 0.2), 
        0 0 40px rgba(59, 130, 246, 0.35), 
        0 0 72px rgba(96, 165, 250, 0.12), 
        0 0 120px rgba(147, 197, 253, 0.08),
        0 20px 56px rgba(0, 0, 0, 0.5)
      `,
      background:
        'linear-gradient(135deg, rgba(13, 13, 18, 0.8), rgba(46, 144, 255, 0.1), rgba(147, 197, 253, 0.05))',
    },
    orbit: {
      borderGlow: 'rgba(232, 121, 249, 0.45)',
      boxShadow: `
        0 0 0 1px rgba(96, 165, 250, 0.2), 
        0 0 40px rgba(59, 130, 246, 0.35), 
        0 0 72px rgba(96, 165, 250, 0.12), 
        0 0 120px rgba(147, 197, 253, 0.08),
        0 20px 56px rgba(0, 0, 0, 0.5)
      `,
      background:
        'linear-gradient(135deg, rgba(13, 13, 18, 0.8), rgba(232, 121, 249, 0.1), rgba(168, 85, 247, 0.05))',
    },
    white: {
      borderGlow: 'rgba(255, 255, 255, 0.12)',
      boxShadow: `
    0 0 0 1px rgba(255, 255, 255, 0.06),
    0 0 18px rgba(255, 255, 255, 0.04),
    0 16px 40px rgba(0, 0, 0, 0.42)
  `,
      background:
        'linear-gradient(135deg, rgba(13, 13, 18, 0.82), rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.01))',
    },
  };

  const hoverStyle = colorMap[hoverColor] || colorMap.cosmic;

  return (
    <motion.div
      className={`rounded-2xl border border-cosmic/25 bg-space/55 shadow-[0_0_0_1px_rgba(46,144,255,0.12),0_12px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl ${className}`}
      whileHover={{
        scale: 1.02,
        borderColor: hoverStyle.borderGlow,
        boxShadow: hoverStyle.boxShadow,
        backdropFilter: 'blur(28px)',
        background: hoverStyle.background,
      }}
      transition={{ type: 'spring', stiffness: 380, damping: 26 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

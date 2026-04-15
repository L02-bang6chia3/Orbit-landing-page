import { motion } from "framer-motion";

const sizeClasses = {
  sm: "rounded-full px-4 py-2 text-xs font-medium",
  md: "rounded-full px-6 py-3 text-sm font-medium",
  lg: "rounded-full px-8 py-4 text-base font-semibold",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-[0.02em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const glowRest = {
  primary: "0 4px 16px rgba(46, 144, 255, 0.12)",
  primaryHover: "0 6px 20px rgba(46, 144, 255, 0.18)",
  mint: "0 4px 14px rgba(255, 255, 255, 0.06)",
  mintHover: "0 6px 18px rgba(255, 255, 255, 0.09)",
  gradient: "0 4px 16px rgba(46, 144, 255, 0.12)",
  gradientHover: "0 6px 20px rgba(232, 121, 249, 0.15)",
  pulseHi: "0 6px 20px rgba(46, 144, 255, 0.16)",
};

export function GlowButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  pulse = false,
  ...props
}) {
  const variants = {
    primary: `${baseClass} bg-cosmic text-white focus-visible:outline-cosmic`,
    mint: `${baseClass} bg-white/[0.08] text-white/90 focus-visible:outline-white`,
    gradient: `${baseClass} text-white focus-visible:outline-orbit`,
  };

  const restShadow = glowRest[variant];
  const hoverShadow = glowRest[`${variant}Hover`];

  const style =
    variant === "gradient"
      ? {
          background:
            "linear-gradient(135deg, rgba(46,144,255,0.88) 0%, rgba(232,121,249,0.72) 100%)",
          boxShadow: restShadow,
        }
      : { boxShadow: restShadow };

  const pulseAnimate =
    pulse && (variant === "primary" || variant === "gradient")
      ? {
          boxShadow: [restShadow, glowRest.pulseHi, restShadow],
          y: [0, -1, 0],
        }
      : undefined;

  return (
    <motion.button
      type={type}
      className={`${variants[variant]} ${sizeClasses[size]} ${className}`}
      style={style}
      animate={pulseAnimate}
      transition={
        pulseAnimate
          ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
      whileHover={{
        y: -1,
        boxShadow: hoverShadow,
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

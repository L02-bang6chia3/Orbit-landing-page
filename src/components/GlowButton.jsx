import { motion } from "framer-motion";

const sizeClasses = {
  sm: "rounded-full px-3.5 py-2 text-xs",
  md: "rounded-full px-5 py-2.5 text-sm",
  lg: "rounded-full px-6 py-3 text-sm",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-[0.02em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const glowRest = {
  primary: "0 10px 24px rgba(46, 144, 255, 0.16)",
  primaryHover: "0 14px 28px rgba(46, 144, 255, 0.22)",
  mint: "0 10px 22px rgba(255, 255, 255, 0.08)",
  mintHover: "0 14px 26px rgba(255, 255, 255, 0.12)",
  gradient: "0 12px 26px rgba(46, 144, 255, 0.16)",
  gradientHover: "0 14px 30px rgba(232, 121, 249, 0.18)",
  pulseHi: "0 14px 30px rgba(46, 144, 255, 0.2)",
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
    mint: `${baseClass} border border-white/12 bg-white/[0.04] text-white focus-visible:outline-white`,
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
        transition: { type: "spring", stiffness: 360, damping: 24 },
      }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

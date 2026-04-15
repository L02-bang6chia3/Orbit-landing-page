import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

function MeshGradientBlob({ color, size, position, duration, delay }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);

  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-5"
      style={{
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
        left: `${position.x}%`,
        top: `${position.y}%`,
        filter: `blur(${size / 3}px)`,
        y,
        scale,
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -20, 30, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function ShootingStar({ delay }) {
  const angle = Math.random() * 360;
  const distance = window.innerWidth + 200;
  
  return (
    <motion.div
      className="absolute h-px w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      style={{
        top: `${Math.random() * 100}%`,
        left: '-80px',
        transform: `rotate(${angle}deg)`,
      }}
      animate={{
        x: [0, distance * Math.cos(angle * Math.PI / 180)],
        y: [0, distance * Math.sin(angle * Math.PI / 180)],
        opacity: [0, 0.4, 0],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 8 + Math.random() * 12,
        ease: "easeOut",
      }}
    />
  );
}

export function LushSpaceBackground() {
  const meshBlobs = useMemo(() => [
    { color: "#2E90FF", size: 600, position: { x: 20, y: 30 }, duration: 20, delay: 0 },
    // { color: "#E879F9", size: 500, position: { x: 70, y: 60 }, duration: 25, delay: 2 },
    { color: "#00FFA3", size: 700, position: { x: 45, y: 80 }, duration: 30, delay: 4 },
    { color: "#2E90FF", size: 400, position: { x: 85, y: 20 }, duration: 22, delay: 1 },
    // { color: "#E879F9", size: 550, position: { x: 10, y: 70 }, duration: 28, delay: 3 },
  ], []);

  const shootingStars = useMemo(() => 
    Array.from({ length: 3 }, (_, i) => ({ id: i, delay: i * 5 }))
  , []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Base deep space background */}
      <div className="absolute inset-0 bg-[#0D0D12]" />
      
      {/* Animated mesh gradient blobs
      {meshBlobs.map((blob, i) => (
        <MeshGradientBlob key={i} {...blob} />
      ))} */}
      
      {/* Multi-layered starfield */}
      <div className="absolute inset-0">
        {/* Layer 1: Tiny static stars */}
        {Array.from({ length: 80 }, (_, i) => (
          <div
            key={`star1-${i}`}
            className="absolute h-px w-px bg-white/15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Layer 2: Larger twinkling stars */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={`star2-${i}`}
            className="absolute h-0.5 w-0.5 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 2px rgba(255, 255, 255, 0.4)",
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Layer 3: Shooting stars at random angles */}
        {shootingStars.map((star) => (
          <ShootingStar key={star.id} delay={star.delay} />
        ))}
      </div>
      
      {/* Subtle vignette for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0D0D12]/40" />
    </div>
  );
}

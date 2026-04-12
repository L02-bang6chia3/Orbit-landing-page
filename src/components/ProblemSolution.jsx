import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { RevealSection, RevealItem } from "./RevealSection";
import { GlowCard } from "./GlowCard";

const chaosParticles = [
  { id: 1, x: "15%", y: "20%", icon: "🔔", color: "rgba(59, 130, 246, 0.3)" },
  { id: 2, x: "85%", y: "15%", icon: "📅", color: "rgba(239, 68, 68, 0.3)" },
  { id: 3, x: "25%", y: "75%", icon: "✓", color: "rgba(168, 85, 247, 0.3)" },
  { id: 4, x: "80%", y: "70%", icon: "📧", color: "rgba(34, 197, 94, 0.3)" },
  { id: 5, x: "10%", y: "50%", icon: "📝", color: "rgba(251, 146, 60, 0.3)" },
  { id: 6, x: "90%", y: "45%", icon: "⏰", color: "rgba(236, 72, 153, 0.3)" },
  { id: 7, x: "45%", y: "10%", icon: "🎯", color: "rgba(14, 165, 233, 0.3)" },
  { id: 8, x: "55%", y: "85%", icon: "💡", color: "rgba(168, 85, 247, 0.3)" },
];

function GravityWellVisualization() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  return (
    <motion.div
      className="relative min-h-[400px] sm:min-h-[500px]"
      onHoverStart={() => {
        setIsHovered(true);
        controls.start("hover");
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        controls.start("normal");
      }}
    >
      {/* Layer 1: Scattered Chaos Particles */}
      {chaosParticles.map((particle, i) => (
        <motion.div
          key={particle.id}
          className="absolute flex h-8 w-8 items-center justify-center rounded-lg text-xs backdrop-blur-sm"
          style={{ 
            left: particle.x, 
            top: particle.y,
            backgroundColor: particle.color,
            border: `1px solid ${particle.color.replace('0.3', '0.5')}`
          }}
          animate={{
            x: isHovered ? [0, -50, -100] : [0, Math.random() * 20 - 10, 0],
            y: isHovered ? [0, -30, -60] : [0, Math.random() * 20 - 10, 0],
            rotate: isHovered ? [0, -180, -360] : [0, Math.random() * 10 - 5, 0],
            scale: isHovered ? [1, 0.8, 0.3] : [1, 1.1, 1],
            opacity: isHovered ? [1, 0.8, 0] : [0.7, 1, 0.7]
          }}
          transition={{
            duration: isHovered ? 2 : 4 + i * 0.5,
            repeat: isHovered ? 1 : Infinity,
            ease: isHovered ? "easeIn" : "easeInOut",
            delay: i * 0.1
          }}
          aria-hidden
        >
          {particle.icon}
        </motion.div>
      ))}

      {/* Layer 2: Central Gravity Well Planet */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={controls}
        variants={{
          normal: { scale: 1 },
          hover: { scale: 1.1 }
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="relative h-32 w-32 sm:h-40 sm:w-40"
          animate={{
            rotate: [0, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* Planet Core */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at 30% 30%, #6bb6ff 0%, #2E90FF 40%, #1560c4 100%)",
              boxShadow: "0 0 40px rgba(46, 144, 255, 0.8), 0 0 80px rgba(46, 144, 255, 0.4), inset -8px -12px 20px rgba(0,0,0,0.4)"
            }}
            animate={{
              boxShadow: isHovered 
                ? ["0 0 40px rgba(46, 144, 255, 0.8), 0 0 80px rgba(46, 144, 255, 0.4), inset -8px -12px 20px rgba(0,0,0,0.4)", 
                  "0 0 60px rgba(46, 144, 255, 1), 0 0 120px rgba(46, 144, 255, 0.6), inset -8px -12px 20px rgba(0,0,0,0.4)",
                  "0 0 40px rgba(46, 144, 255, 0.8), 0 0 80px rgba(46, 144, 255, 0.4), inset -8px -12px 20px rgba(0,0,0,0.4)"]
                : ["0 0 40px rgba(46, 144, 255, 0.8), 0 0 80px rgba(46, 144, 255, 0.4), inset -8px -12px 20px rgba(0,0,0,0.4)"]
            }}
            transition={{ duration: isHovered ? 1.5 : 3, repeat: isHovered ? Infinity : 0 }}
          >
            <div
              className="absolute inset-[15%] rounded-full opacity-40"
              style={{
                background: "radial-gradient(circle at 70% 65%, rgba(255,255,255,0.6), transparent 55%)"
              }}
            />
          </motion.div>

          {/* Ring System */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotate: [0, -360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="absolute h-[60%] w-[140%] rounded-full border-2"
              style={{
                borderColor: "rgba(232, 121, 249, 0.6)",
                boxShadow: "0 0 20px rgba(232, 121, 249, 0.4), inset 0 0 15px rgba(46, 144, 255, 0.2)",
                transform: "rotateX(75deg)"
              }}
            />
            <div
              className="absolute h-[45%] w-[120%] rounded-full border"
              style={{
                borderColor: "rgba(46, 144, 255, 0.5)",
                transform: "rotateX(78deg) rotateZ(15deg)"
              }}
            />
          </motion.div>

          {/* Layer 4: Phone Mockup in Orbit */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotate: [0, 360],
              y: [0, -5, 0]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="relative h-16 w-8 sm:h-20 sm:w-10">
              <div
                className="absolute inset-0 rounded-lg border border-cosmic/30"
                style={{
                  background: "linear-gradient(135deg, rgba(46, 144, 255, 0.1), rgba(232, 121, 249, 0.1))",
                  backdropFilter: "blur(10px)"
                }}
              >
                {/* Phone UI Screen */}
                <div className="absolute inset-1 rounded bg-space/90 p-1">
                  <div className="space-y-1">
                    <div className="h-1 w-full bg-cosmic/30 rounded"></div>
                    <div className="h-1 w-3/4 bg-mint/30 rounded"></div>
                    <div className="h-1 w-1/2 bg-orbit/30 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Layer 3: Spiral Trails */}
      {chaosParticles.map((particle, i) => (
        <motion.svg
          key={`trail-${particle.id}`}
          className="absolute inset-0 pointer-events-none"
          style={{ width: '100%', height: '100%' }}
          aria-hidden
        >
          <motion.path
            d={`M ${particle.x === "15%" ? "15" : particle.x === "85%" ? "85" : particle.x === "25%" ? "25" : particle.x === "80%" ? "80" : particle.x === "10%" ? "10" : particle.x === "90%" ? "90" : "45"} ${particle.y === "20%" ? "20" : particle.y === "15%" ? "15" : particle.y === "75%" ? "75" : particle.y === "70%" ? "70" : particle.y === "50%" ? "50" : particle.y === "45%" ? "45" : particle.y === "10%" ? "10" : "85"} Q 50 50 50 50`}
            stroke={i % 2 === 0 ? "#2E90FF" : "#E879F9"}
            strokeWidth="2"
            fill="none"
            opacity={isHovered ? 0.8 : 0.3}
            animate={{
              pathLength: isHovered ? [0, 1] : [0, 0.3, 0],
              opacity: isHovered ? [0, 0.8] : [0, 0.3, 0]
            }}
            transition={{
              duration: isHovered ? 2 : 3,
              delay: i * 0.2,
              repeat: isHovered ? 0 : Infinity,
              ease: "easeInOut"
            }}
            style={{
              filter: `drop-shadow(0 0 ${isHovered ? "8px" : "4px"} ${i % 2 === 0 ? "rgba(46, 144, 255, 0.6)" : "rgba(232, 121, 249, 0.6)"})`
            }}
          />
        </motion.svg>
      ))}
    </motion.div>
  );
}

export function ProblemSolution() {
  return (
    <RevealSection
      id="problem"
      className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <RevealItem className="mb-14 text-center md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orbit/90">
            The Gravity of the Void
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-gradient-heading">Escape the Gravity of Chaos.</span>
          </h2>
        </RevealItem>

        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <RevealItem>
            <GlowCard className="relative min-h-[400px] sm:min-h-[500px] overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(46,144,255,0.08),transparent_60%)]" />
              <GravityWellVisualization />
              <p className="relative text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mt-4">
                Chaos → Order → Lift
              </p>
            </GlowCard>
          </RevealItem>
          
          <RevealItem delay={0.1}>
            <GlowCard className="flex h-full flex-col justify-center p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cosmic/90">
                The Chaos of Choice
              </p>
              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                The Gravity of Chaos
              </h3>
              <p className="mt-5 text-base leading-relaxed text-white/60">
                Modern life is a fragmented, endless stream of tasks without a central force. You are drifting, pulled by a thousand tiny gravity wells—emails, notifications, fleeting goals. This fragmentation is the 'Gravity of Chaos', preventing you from forming a stable, long-term trajectory. It's the feeling of constant motion with no true movement.
              </p>
              
              <div className="mt-8 border-t border-white/10 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mint/90">
                  The ORBIT Anchor
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                  Personal Gravity Well
                </h3>
                <p className="mt-5 text-base leading-relaxed text-white/60">
                  ORBIT is your Personal Gravity Well. We are not just another list manager. Our AI calculates a central, stable path (your 'Trajectory'), and pulls your chaotic tasks and habits into a meaningful, predictable rotation around it. This creates 'Lift'—a sustainable force that propels you forward, synchronized with your unique human potential.
                </p>
              </div>
            </GlowCard>
          </RevealItem>
        </div>
      </div>
    </RevealSection>
  );
}

import { motion } from 'framer-motion';
import { RevealSection, RevealItem } from './RevealSection';
import { GlowCard } from './GlowCard';
import { GlowButton } from './GlowButton';

function SignalIcon() {
  return (
    <motion.div
      className="relative h-16 w-16 mx-auto mb-4"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className="absolute inset-0 rounded-full bg-mint/20 border-2 border-mint/40"></div>
      <div className="absolute inset-2 rounded-full bg-mint/40 border border-mint/60"></div>
      <div className="absolute inset-4 rounded-full bg-mint"></div>
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-mint"
        animate={{
          scale: [1, 1.5, 2],
          opacity: [0.6, 0.3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
    </motion.div>
  );
}

function NetworkIcon() {
  return (
    <motion.div
      className="relative h-16 w-16 mx-auto mb-4"
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {/* Central node */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-orbit"></div>
      </div>

      {/* Orbiting nodes */}
      {[0, 120, 240].map((rotation, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-orbit/80"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      ))}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64">
        {[0, 120, 240].map((rotation, i) => (
          <line
            key={i}
            x1="32"
            y1="32"
            x2="32"
            y2="8"
            stroke="#E879F9"
            strokeWidth="0.5"
            opacity="0.4"
            transform={`rotate(${rotation} 32 32)`}
          />
        ))}
      </svg>
    </motion.div>
  );
}

export function SignalSharing() {
  return (
    <RevealSection
      id="signals"
      className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 items-stretch">
          {/* Signal Reminders Card */}
          <RevealItem>
            <GlowCard className="p-8 sm:p-10 h-full flex flex-col">
              <SignalIcon />
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Signal Reminders</h3>
              <p className="text-white/60 text-center mb-6">
                Never miss a rotation. Get smart notifications 5, 10, or 30 minutes before a Habit
                Planet enters your active orbit.
              </p>

              <div className="space-y-4">
                {[
                  { time: '5 min before', label: 'Quick prep', active: true },
                  { time: '10 min before', label: 'Standard alert', active: true },
                  { time: '30 min before', label: 'Early planning', active: false },
                  { time: '30 min before', label: 'Early planning', active: false },
                  { time: '5 min before', label: 'Quick prep', active: false },
                ].map((setting, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center justify-between p-3 rounded-lg border ${
                      setting.active ? 'border-mint/30 bg-mint/5' : 'border-white/10 bg-space/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          setting.active ? 'bg-mint' : 'bg-white/30'
                        }`}
                      ></div>
                      <div>
                        <div className="text-sm font-medium text-white">{setting.time}</div>
                        <div className="text-xs text-white/60">{setting.label}</div>
                      </div>
                    </div>
                    <div
                      className={`h-6 w-11 rounded-full border transition-colors ${
                        setting.active ? 'bg-mint/20 border-mint/40' : 'bg-white/10 border-white/20'
                      }`}
                    >
                      <div
                        className={`h-5 w-5 rounded-full bg-white transition-transform ${
                          setting.active ? 'translate-x-5' : 'translate-x-0.5'
                        }`}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlowCard>
          </RevealItem>

          {/* Orbit Sharing Card */}
          <RevealItem delay={0.1}>
            <GlowCard className="p-8 sm:p-10 h-full flex flex-col">
              <NetworkIcon />
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Orbit Sharing</h3>
              <p className="text-white/60 text-center mb-6">
                Discover successful trajectories. Share your habit plans with the community or
                1-click copy proven templates from others directly into your ecosystem.
              </p>

              <div className="space-y-4">
                {[
                  { name: 'Productivity Master', users: '2.3k', rating: 4.8 },
                  { name: 'Wellness Journey', users: '1.8k', rating: 4.9 },
                  { name: 'Learning Accelerator', users: '956', rating: 4.7 },
                ].map((template, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="p-4 rounded-lg border border-orbit/30 bg-orbit/5 hover:bg-orbit/10 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{template.name}</h4>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-mint">★</span>
                        <span className="text-xs text-white/60">{template.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/60">{template.users} users</span>
                      <GlowButton variant="primary" size="sm" className="text-xs px-3 py-1">
                        Copy
                      </GlowButton>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlowCard>
          </RevealItem>
        </div>
      </div>
    </RevealSection>
  );
}

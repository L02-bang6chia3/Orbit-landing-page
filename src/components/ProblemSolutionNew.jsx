import { motion } from "framer-motion";
import { RevealSection, RevealItem } from "./RevealSection";
import { GlowCard } from "./GlowCard";

function MessyCalendar() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg">
      {/* Calendar Grid */}
      <div className="absolute inset-0 grid grid-cols-7 gap-0.5 p-2 bg-space/30">
        {Array.from({ length: 35 }, (_, i) => {
          const dayNumber = (i % 31) + 1;
          const hasEvents = Math.random() > 0.4;
          const eventCount = hasEvents ? Math.floor(Math.random() * 3) + 1 : 0;
          
          return (
            <div
              key={i}
              className={`relative border ${
                hasEvents
                  ? 'border-cosmic/30 bg-cosmic/10'
                  : 'border-white/10 bg-space/50'
              } p-1`}
            >
              <div className="text-xs text-white/60 font-medium">{dayNumber}</div>
              {hasEvents && (
                <div className="mt-1 space-y-0.5">
                  {Array.from({ length: eventCount }, (_, j) => (
                    <div
                      key={j}
                      className={`h-1 w-full rounded ${
                        j === 0 ? 'bg-cosmic/40' : j === 1 ? 'bg-orbit/40' : 'bg-mint/40'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Overlapping Events Header */}
      <div className="absolute top-0 left-0 right-0 bg-space/80 backdrop-blur-sm border-b border-white/10 p-2">
        <div className="text-xs font-semibold text-white/80">Overbooked Schedule</div>
      </div>
      
      {/* Conflicting Events */}
      <div className="absolute top-8 left-2 right-2">
        <div className="space-y-1">
          <div className="h-6 bg-red-500/20 border border-red-500/40 rounded px-2 text-xs text-red-300 flex items-center">
            <span className="w-1 h-1 bg-red-400 rounded-full mr-1"></span>
            Team Meeting
          </div>
          <div className="h-6 bg-blue-500/20 border border-blue-500/40 rounded px-2 text-xs text-blue-300 flex items-center -mt-1">
            <span className="w-1 h-1 bg-blue-400 rounded-full mr-1"></span>
            Project Review
          </div>
          <div className="h-6 bg-purple-500/20 border border-purple-500/40 rounded px-2 text-xs text-purple-300 flex items-center -mt-1">
            <span className="w-1 h-1 bg-purple-400 rounded-full mr-1"></span>
            Client Call
          </div>
        </div>
      </div>
    </div>
  );
}

function CleanTimeline() {
  return (
    <div className="relative h-64 w-full">
      {/* Timeline Header */}
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="text-xs font-semibold text-cosmic">Connected Calendar</div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 bg-mint rounded-full animate-pulse"></div>
          <div className="text-xs text-mint">Orbit Sync Active</div>
        </div>
      </div>
      
      {/* Clean Timeline */}
      <div className="space-y-2 px-2">
        {[
          { time: "9:00 AM", title: "Deep Work", habit: true, color: "cosmic" },
          { time: "10:30 AM", title: "English Practice", habit: true, color: "mint" },
          { time: "12:00 PM", title: "Lunch Break", habit: false },
          { time: "2:00 PM", title: "Team Meeting", habit: false },
          { time: "4:00 PM", title: "Meditation", habit: true, color: "orbit" },
          { time: "6:00 PM", title: "Workout", habit: true, color: "cosmic" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`flex items-center gap-3 p-3 rounded-lg border ${
              item.habit
                ? `border-${item.color}/30 bg-${item.color}/5`
                : 'border-white/10 bg-space/50'
            }`}
          >
            <div className="text-xs text-white/60 w-16">{item.time}</div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">{item.title}</div>
              {item.habit && (
                <div className="text-xs text-mint/80">Auto-scheduled habit</div>
              )}
            </div>
            {item.habit && (
              <div className={`h-2 w-2 bg-${item.color} rounded-full`}></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ProblemSolutionNew() {
  return (
    <RevealSection
      id="alignment"
      className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <RevealItem className="mb-14 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Stop Manual Planning. Start Orbiting.
          </h2>
        </RevealItem>

        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <RevealItem>
            <GlowCard className="p-6 sm:p-8 h-full flex flex-col">
              <h3 className="text-xl font-bold text-white mb-4">The Problem: Chaotic Schedule</h3>
              <p className="text-white/60 mb-6">
                Building habits is hard when you don't know <em>when</em> to do them. Without a central gravity, your tasks just drift away.
              </p>
              <div className="flex-1 relative overflow-hidden rounded-lg border border-white/10">
                <MessyCalendar />
              </div>
            </GlowCard>
          </RevealItem>

          <RevealItem delay={0.1}>
            <GlowCard className="p-6 sm:p-8 h-full flex flex-col">
              <h3 className="text-xl font-bold text-white mb-4">
                <span className="text-gradient-heading">Orbit Alignment</span>
              </h3>
              <p className="text-white/60 mb-6">
                Connect your Google Calendar. Our <strong>Orbit Alignment</strong> feature automatically reads your busy/free data, calculates the perfect time slots, and syncs your habits seamlessly.
              </p>
              <div className="flex-1 relative overflow-hidden rounded-lg border border-cosmic/20">
                <CleanTimeline />
              </div>
            </GlowCard>
          </RevealItem>
        </div>
      </div>
    </RevealSection>
  );
}

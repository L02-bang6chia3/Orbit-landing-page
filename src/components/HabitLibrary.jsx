import { motion } from "framer-motion";
import { RevealSection, RevealItem } from "./RevealSection";
import { HapticHoverCard } from "./HapticHoverCard";
import { GlowButton } from "./GlowButton";

const habitCards = [
  {
    id: 1,
    title: "Language Learning",
    duration: "20 mins/day",
    description: "Build vocabulary and grammar through daily practice",
    color: "orbit",
    features: ["Daily lessons", "Progress tracking", "Native pronunciation"]
  },
  {
    id: 2,
    title: "Mindfulness Practice",
    duration: "15 mins/day",
    description: "Find your inner peace among the stars",
    color: "orbit",
    features: ["Guided sessions", "Breathing exercises", "Sleep enhancement"]
  },
  {
    id: 3,
    title: "Strength Training",
    duration: "45 mins, 3x/week",
    description: "Build strength that defies gravity",
    color: "orbit",
    features: ["Progressive overload", "Form guidance", "Recovery tracking"]
  },
  {
    id: 4,
    title: "Daily Reading",
    duration: "30 mins/day",
    description: "Explore new worlds through literature",
    color: "orbit",
    features: ["Book recommendations", "Reading goals", "Note taking"]
  }
];

export function HabitLibrary() {
  return (
    <RevealSection
      id="library"
      className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <RevealItem className="mb-14 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-gradient-heading">Habit Library: Pick Your Planets.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Don't know where to start? Choose from our curated ecosystem of proven habit templates.
          </p>
        </RevealItem>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {habitCards.map((habit, i) => (
            <RevealItem key={habit.id} delay={i * 0.1}>
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <HapticHoverCard className="h-full p-6 text-center" hoverColor={habit.color}>
                  <h3 className="text-lg font-bold text-white mb-2">{habit.title}</h3>
                  <div className="inline-block mb-4 px-3 py-1 rounded-full border border-blue-300/30 bg-blue-300/10">
                    <span className="text-xs font-semibold text-blue-300">{habit.duration}</span>
                  </div>
                  <p className="text-sm text-white/60 mb-6">{habit.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {habit.features.map((feature, j) => (
                      <div key={j} className="flex items-center justify-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                        <span className="text-xs text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <GlowButton 
                    variant={habit.color === 'mint' ? 'mint' : 'primary'} 
                    className="w-full text-xs"
                  >
                    Add to Orbit
                  </GlowButton>
                </HapticHoverCard>
              </motion.div>
            </RevealItem>
          ))}
        </div>

        <RevealItem className="mt-12 text-center">
          <GlowButton variant="gradient" className="px-8">
            Browse Full Library
          </GlowButton>
        </RevealItem>
      </div>
    </RevealSection>
  );
}

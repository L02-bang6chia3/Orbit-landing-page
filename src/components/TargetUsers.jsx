import { motion } from 'framer-motion';
import { RevealSection, RevealItem } from './RevealSection';

// Icon components
function GlobeIcon() {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M12 2v20" />
      <circle cx="12" cy="12" r="3" className="opacity-60" />
    </svg>
  );
}

function RoadmapIcon() {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
      <path d="M12 2v6" />
      <circle cx="12" cy="12" r="1" className="opacity-60" />
    </svg>
  );
}

function ClockCapIcon() {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
      <path d="M8 21h8a2 2 0 0 0 2-2v-1" />
      <path d="M6 8l-2 2 2 2" />
    </svg>
  );
}

const targetUsers = [
  {
    id: 1,
    title: 'Language Learners',
    icon: GlobeIcon,
    iconColor: 'text-[#00FFA3]',
    problem:
      'Consistency is key in language learning. Finding 30 minutes daily in a changing schedule is exhausting.',
    solution:
      'ORBIT transforms your language journey into automatic daily events, perfectly aligned with your available time slots for sustainable immersion.',
  },
  {
    id: 2,
    title: 'Self-Study Experts',
    icon: RoadmapIcon,
    iconColor: 'text-[#E879F9]',
    problem:
      'Mastering new skills takes months. Clear milestones exist, but manual planning often leads to burnout and missed targets.',
    solution:
      'Gravity Engine analyzes your schedule and builds frictionless long-term study plans, ensuring steady progress without management energy.',
  },
  {
    id: 3,
    title: 'Busy University Students',
    icon: ClockCapIcon,
    iconColor: 'text-[#2E90FF]',
    problem:
      'Between classes, exams, research, and internships, finding time for self-study is a puzzle. You know what to do, but not when.',
    solution:
      'ORBIT reads your busy calendar and intelligently schedules focus sessions, ensuring continuous growth without disrupting academic commitments.',
  },
];

export function TargetUsers() {
  return (
    <RevealSection
      id="target-users"
      className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8 bg-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="absolute left-1/4 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2E90FF]/5 blur-[100px]" />
      <div className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#E879F9]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <RevealItem className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2E90FF] to-[#E879F9]">
            Built for intensive learning journeys.
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Stop forcing study time into busy schedules. Let ORBIT plan automatically.
          </p>
        </RevealItem>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targetUsers.map((user, index) => {
            const IconComponent = user.icon;
            return (
              <RevealItem key={user.id} delay={index * 0.1}>
                <motion.div
                  className="group relative h-full"
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }}
                >
                  {/* Glass morphism card */}
                  <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_20px_56px_rgba(46,144,255,0.15),0_0_120px_rgba(46,144,255,0.05)]">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div
                        className={`rounded-full border border-white/20 bg-white/[0.05] p-3 backdrop-blur-sm ${user.iconColor} shadow-[0_0_20px_currentColor]`}
                      >
                        <IconComponent />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white text-center mb-6">{user.title}</h3>

                    {/* Problem */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white/80 mb-2">Challenge</h4>
                      <p className="text-sm text-white/60 leading-relaxed">{user.problem}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-sm font-semibold text-white/80 mb-2">ORBIT Solution</h4>
                      <p className="text-sm text-white/60 leading-relaxed">{user.solution}</p>
                    </div>

                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              </RevealItem>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}

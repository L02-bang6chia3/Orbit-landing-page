import { Header } from './components/Header';
import { LushSpaceBackground } from './components/LushSpaceBackground';
import { Hero } from './components/Hero';
import { ProblemSolutionNew } from './components/ProblemSolutionNew';
import { HabitLibrary } from './components/HabitLibrary';
import { SignalSharing } from './components/SignalSharing';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0D0D12] text-white">
      <div className="fixed inset-0 z-0">
        <LushSpaceBackground />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <ProblemSolutionNew />
          <HabitLibrary />
          <SignalSharing />
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
}

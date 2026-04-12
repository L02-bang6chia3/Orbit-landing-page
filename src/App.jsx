import { Header } from './components/Header';
import { ImmersiveBackdrop } from './components/ImmersiveBackdrop';
import { Hero } from './components/Hero';
import { ProblemSolutionNew } from './components/ProblemSolutionNew';
import { HabitLibrary } from './components/HabitLibrary';
import { SignalSharing } from './components/SignalSharing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-space text-white">
      <div className="fixed inset-0 z-0">
        <ImmersiveBackdrop />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <ProblemSolutionNew />
          <HabitLibrary />
          <SignalSharing />
          <pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
}

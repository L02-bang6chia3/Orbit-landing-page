import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeatureTrajectory } from "./components/FeatureTrajectory";
import { FeatureDiscover } from "./components/FeatureDiscover";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-space">
      <Header />
      <main>
        <Hero />
        <FeatureTrajectory />
        <FeatureDiscover />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

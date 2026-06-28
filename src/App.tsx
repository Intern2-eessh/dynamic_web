import { Header } from './components/Header';
import { ScrollMorphHero } from './components/ScrollMorphHero';
import { Interactive3D } from './components/Interactive3D';
import { RoboticsSystems } from './components/RoboticsSystems';
import { LogoCloud } from './components/LogoCloud';
import { Metrics } from './components/Metrics';
import { SmartphoneShowcase } from './components/SmartphoneShowcase';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary/30">
      <Header />
      <main>
        <ScrollMorphHero />
        <Interactive3D />
        <RoboticsSystems />
        <LogoCloud />
        <Metrics />
        <SmartphoneShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;

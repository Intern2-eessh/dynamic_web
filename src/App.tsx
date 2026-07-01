import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/Header';
import { ScrollMorphHero } from './components/ScrollMorphHero';
import { AboutSection } from './components/AboutSection';
import { Interactive3D } from './components/Interactive3D';
import { VisionMission } from './components/VisionMission';
import { Achievements } from './components/Achievements';
import { FounderDesk } from './components/FounderDesk';
import { OurSolutions } from './components/OurSolutions';
import { StudyingOn } from './components/StudyingOn';
import { WhyElamani } from './components/WhyElamani';
import { Metrics } from './components/Metrics';
import { SmartphoneShowcase } from './components/SmartphoneShowcase';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Force scroll to top on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Show the loading screen for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Wait a tiny bit for the loader to start fading out before triggering entrance animations
      setTimeout(() => setShowContent(true), 300);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        className="bg-background min-h-screen text-foreground font-sans selection:bg-primary/30"
        style={{ opacity: showContent ? 1 : 0, transition: 'opacity 0.4s ease-out' }}
      >
        <Header />
        <main>
          <ScrollMorphHero showContent={showContent} />
          <AboutSection />
          <Interactive3D />
          <VisionMission />
          <Achievements />
          <FounderDesk />
          <OurSolutions />
          <StudyingOn />
          <WhyElamani />
          <Metrics />
          <SmartphoneShowcase />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
import card5 from '../assets/card5.jpg';
import card6 from '../assets/card6.jpg';

const cardImages = [card1, card2, card3, card4, card5, card6];

// Mock data for the telemetry blocks
const telemetryItems = Array.from({ length: 20 }, (_, i) => ({
  id: `hero-${i}`,
  title: `Node ${i + 1}`,
  detail: `Coord: ${(Math.random() * 100).toFixed(2)}`,
  delay: Math.random() * 0.5,
}));

export function ScrollMorphHero({ showContent = true }: { showContent?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // ==========================================
  // STAGE 1 -> STAGE 2: Scattered to Circular
  // ==========================================
  // Primary Headline fading out
  const headlineOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const headlineScale = useTransform(smoothProgress, [0, 0.5], [1, 0.9]);
  const videoOpacity = useTransform(smoothProgress, [0, 0.8], [0.6, 0.1]);

  // ==========================================
  // STAGE 3: Circular to Rainbow Arc / Text Reveal
  // ==========================================
  // We'll morph the elements' positions. 
  // Let's create a custom function to calculate transforms for each item based on scroll.
  
  return (
    <div ref={containerRef} className="relative h-[150vh] w-full bg-background">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-[1000px]">
        
        {/* Immersive Video Background (Stage 1) */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ opacity: videoOpacity }}
        >
           {/* Placeholder for Elamani_Robotics_Hero_60fps */}
           <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent mix-blend-screen" />
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />
           <div className="absolute inset-0 bg-background/60" />
        </motion.div>

        {/* Bottom Fade Gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-30 pointer-events-none" />

        {/* Stage 1: Initial Text */}
        <motion.div 
          className="absolute z-20 text-center px-6 flex flex-col items-center"
          style={{ opacity: headlineOpacity, scale: headlineScale }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={showContent ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-none mt-8">
              Built for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-primary/50">
                Autonomous Hyperscale.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center">
              ElamaniTech develops and deploys industrial-scale autonomous systems engineered for next-generation manufacturing.
            </p>
          </motion.div>
        </motion.div>





        {/* The 20 Floating Elements (Telemetry Blocks) */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center translate-y-12" style={{ transformStyle: 'preserve-3d' }}>
          {telemetryItems.map((item, i) => {
            // Stage 1: Scattered (Random positions around viewport edges)
            const angle = (i / telemetryItems.length) * Math.PI * 2;
            const radius = 600 + Math.random() * 400; // Far away
            const scatteredX = Math.cos(angle) * radius;
            const scatteredY = Math.sin(angle) * radius;
            const scatteredZ = (Math.random() - 0.5) * 500;
            const scatteredRotate = Math.random() * 360;

            // Stage 2: Circular Vortex (Tight ring)
            const ringRadius = 220;
            const ringX = Math.cos(angle) * ringRadius;
            const ringY = Math.sin(angle) * ringRadius;
            const ringZ = 0;
            const ringRotate = angle * (180 / Math.PI) + 90;

            // Stage 3: Rainbow Arc (Curved track spanning the screen)
            // Arc goes from left to right, curved like a smile
            const arcProgress = i / (telemetryItems.length - 1); // 0 to 1
            const arcX = (arcProgress - 0.5) * 1200; // -600 to 600
            const arcY = Math.sin(arcProgress * Math.PI) * 300 - 150; // Curve up/down
            const arcZ = Math.cos(arcProgress * Math.PI) * 200 - 100;
            const arcRotate = (arcProgress - 0.5) * 90;

            // Use framer motion transforms to interpolate these values
            const x = useTransform(
              smoothProgress,
              [0, 0.3, 0.5, 0.8, 1],
              [ringX, scatteredX, scatteredX, arcX, arcX * 1.5]
            );
            const y = useTransform(
              smoothProgress,
              [0, 0.3, 0.5, 0.8, 1],
              [ringY, scatteredY, scatteredY, arcY, arcY - 200]
            );
            const z = useTransform(
              smoothProgress,
              [0, 0.3, 0.5, 0.8, 1],
              [ringZ, scatteredZ, scatteredZ, arcZ, arcZ + 200]
            );
            const rotateZ = useTransform(
              smoothProgress,
              [0, 0.3, 0.5, 0.8, 1],
              [ringRotate, scatteredRotate, scatteredRotate, arcRotate, arcRotate]
            );

            // Scale down when turning into an arc
            const scale = useTransform(
              smoothProgress,
              [0, 0.3, 0.5, 0.8],
              [1, 1, 1, 0.6]
            );

            // Colors shift during arc phase
            const borderColor = useTransform(
              smoothProgress,
              [0, 0.6, 0.8],
              ["rgba(255,255,255,0.1)", "rgba(14,165,233,0.5)", `hsla(${arcProgress * 360}, 80%, 60%, 0.6)`]
            );

            // Fade out the cards right before the section ends
            const opacity = useTransform(
              smoothProgress,
              [0.3, 0.7, 0.9],
              [1, 1, 0]
            );

            return (
              <motion.div
                key={item.id}
                className="absolute"
                style={{
                  x,
                  y,
                  z,
                  rotateZ,
                  scale,
                  opacity,
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center'
                }}
              >
                <motion.div
                  className="w-32 h-24 rounded-xl border overflow-hidden shadow-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={showContent ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.8 + i * 0.05, duration: 0.8, type: "spring" }}
                  style={{ borderColor }}
                >
                  <img 
                    src={cardImages[i % cardImages.length]} 
                    alt={`Telemetry visual ${i + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

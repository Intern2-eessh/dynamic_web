import { useState, useEffect } from 'react';
import { User, Trophy } from 'lucide-react';
import './Achievements.css';

const achievements = [
  "Recognised by StartupTN for our innovative work in robotics and automation.",
  "Collaborated with TANCAM on advanced manufacturing and automation initiatives.",
  "Funded by the Department of Science and Technology (DST) for our research-driven projects.",
  "Incubated at PSG STEP and Sona Incubation Foundation — two of Tamil Nadu’s premier incubation centers.",
  "DPIIT Certified Startup, recognized by the Government of India.",
  "Incorporated in 2024 with a clear vision to engineer intelligent solutions for tomorrow’s challenges."
];

export function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Automatically shift cards every 2 seconds, but pause if hovered
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isHovered]);

  // Helper to determine position relative to center
  const getOffset = (index: number) => {
    const length = achievements.length;
    let offset = index - currentIndex;
    // Circular wrapping logic
    if (offset < -Math.floor(length / 2)) offset += length;
    if (offset > Math.floor(length / 2)) offset -= length;
    return offset;
  };

  return (
    <section id="achievements-section" className="achievements-section">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2cb5a0] via-gray-300 to-white text-transparent bg-clip-text tracking-tight mb-6">
          Our Achievements
        </h2>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          Though young, our journey has been marked by strong recognition and meaningful collaborations:
        </p>
      </div>

      <div 
        className="carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {achievements.map((text, index) => {
          const offset = getOffset(index);
          // Only show left (-1), center (0), and right (1) cards
          const isVisible = Math.abs(offset) <= 1;
          const offsetAttr = isVisible ? offset.toString() : "hidden";

          return (
            <div 
              key={index} 
              className={`carousel-card ${!isVisible ? 'hidden-card' : ''}`}
              data-offset={offsetAttr}
              onClick={() => {
                if (isVisible && offset !== 0) {
                   setCurrentIndex(index);
                }
              }}
            >
              {offset === 0 ? (
                <>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 border border-white/40 shrink-0">
                    <User className="text-white w-8 h-8" />
                  </div>
                  <p className="text-white font-bold text-lg leading-snug line-clamp-6">
                    {text}
                  </p>
                </>
              ) : (
                <>
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-3 shrink-0">
                    <User className="text-white/40 w-6 h-6" />
                  </div>
                  <p className="text-white/60 font-medium text-sm leading-tight line-clamp-5">
                    {text}
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-lg text-teal-400 font-medium max-w-3xl mx-auto">
          These milestones reflect the trust and belief in our capabilities and ideas.
        </p>
      </div>
    </section>
  );
}

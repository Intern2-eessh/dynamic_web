import logoImg from '../assets/logo.jpeg';
import './FounderDesk.css';
import founderImg from '../assets/founder.png';

export function FounderDesk() {
  return (
    <section id="founder-desk" className="founder-section">
      <div className="founder-grid">
        
        {/* Left Side: The Massive Quote */}
        <div className="founder-quote">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2cb5a0] via-gray-300 to-white text-transparent bg-clip-text tracking-tight mb-10">
            Founder's Desk
          </h2>
          <div className="relative">
            <span className="absolute -top-10 -left-6 text-7xl text-teal-500/20 font-serif select-none pointer-events-none">"</span>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6 font-medium relative z-10">
              We didn’t start Elamani Tech just to build robots. We started it because we saw a gap — between what machines can do and what they should do for humanity.
            </p>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6 relative z-10">
              When I looked at dangerous tasks that still put human lives at risk, or repetitive work that drains human potential, I saw an opportunity. An opportunity to build machines that don’t just work — but think, sense, and protect.
            </p>
            <p className="text-lg md:text-xl text-teal-100/90 leading-relaxed mb-8 font-semibold relative z-10">
              At Elamani Tech, we are not just creating products. We are building solutions that carry purpose — solutions that reduce risk, increase efficiency, and bring dignity to work. This is more than a company for me. It’s a commitment to engineering with conscience.
            </p>
            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="w-12 h-1 bg-primary"></div>
              <span className="text-white font-bold tracking-widest uppercase text-sm">Founder, Elamani Tech</span>
            </div>
          </div>
        </div>

        {/* Right Side: The Interactive Profile Card */}
        <div className="flex justify-center items-center">
          <div className="founder-card">
            
            {/* The Image inside the card, blending dynamically */}
            <img 
              src={founderImg} 
              alt="Founder" 
              className="founder-image-layer"
            />
            
            <div className="logo-wrapper">
              <div className="light-trail"></div>
              <div className="logo-icon">
                {/* Main Icon (50px) */}
                <img src={logoImg} alt="Logo" className="w-[80%] h-[80%] object-contain mix-blend-screen opacity-90" />
              </div>
              <div className="logo-text">
                ELAMANI
              </div>
            </div>

            <div className="subtext-logo">
              FOUNDER & CEO
            </div>


            
          </div>
        </div>

      </div>
    </section>
  );
}

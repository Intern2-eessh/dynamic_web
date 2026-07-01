import { Check } from 'lucide-react';
import './WhyElamani.css';

export function WhyElamani() {
  return (
    <section id="why-elamani" className="why-section">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2cb5a0] via-gray-300 to-white text-transparent bg-clip-text tracking-tight">
          Why Elamani Tech?
        </h2>
      </div>

      <div className="why-card">
        {/* Animated Glowing Border Layer */}
        <div className="why-card-border"></div>
        {/* Solid Background Mask */}
        <div className="why-card-inner"></div>

        <div className="why-header">
          <span className="why-title">Our Commitment</span>
          <p className="why-desc">Building technology that serves humanity with integrity.</p>
        </div>

        <hr className="why-divider" />

        <ul className="why-features">
          <li className="why-feature-item">
            <div className="why-check">
              <Check />
            </div>
            <span className="why-feature-text">We combine deep engineering expertise with practical innovation.</span>
          </li>
          <li className="why-feature-item">
            <div className="why-check">
              <Check />
            </div>
            <span className="why-feature-text">We focus on building solutions that create real impact — not just products.</span>
          </li>
          <li className="why-feature-item">
            <div className="why-check">
              <Check />
            </div>
            <span className="why-feature-text">We believe in nurturing young talent and creating meaningful learning opportunities.</span>
          </li>
          <li className="why-feature-item">
            <div className="why-check">
              <Check />
            </div>
            <span className="why-feature-text">We work with integrity, responsibility, and a long-term vision.</span>
          </li>
          <li className="why-feature-item">
            <div className="why-check">
              <Check />
            </div>
            <span className="why-feature-text">We are committed to building technology that serves humanity.</span>
          </li>
        </ul>

        <button className="why-button">Partner With Us</button>
      </div>
    </section>
  );
}

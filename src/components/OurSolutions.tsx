import { motion } from 'framer-motion';
import './OurSolutions.css';

import actiiImg from '../assets/actii.jpeg';
import delrobotImg from '../assets/delrobot.png';
import carLupaImg from '../assets/car_lupa.jpeg';
import bagessImg from '../assets/bagess.jpeg';
import fcuImg from '../assets/fcu.png';

export function OurSolutions() {
  return (
    <section id="our-solutions" className="solutions-section">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2cb5a0] via-gray-300 to-white text-transparent bg-clip-text tracking-tight mb-4">
          Our Solutions
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Pioneering advanced robotic and automation systems to solve real-world challenges.
        </p>
      </div>

      <div className="solutions-container">
        
        {/* Card 1: Core Research & Development */}
        <motion.div 
          className="solution-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">Core Research & Development</h3>
          <p className="text-lg text-white/70 mb-8 border-l-4 border-[#2cb5a0] pl-4">
            We are actively working on next-generation robotic and intelligent systems:
          </p>

          <div className="sub-solution-grid">
            
            <div className="sub-solution-item">
              <h4 className="text-2xl font-bold text-[#2cb5a0] mb-3">1. Actuators</h4>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                A compact, high-performance 2-DOF Dual-Axis Actuator with integrated AI-Adaptive Control — designed and developed entirely in India. It offers superior efficiency, local customization support, and significant cost advantages. Patent filing for the novel dual-stator/dual-rotor design is currently in process.
              </p>
              <img src={actiiImg} alt="Actuator" className="solution-image" />
            </div>

            <div className="sub-solution-item">
              <h4 className="text-2xl font-bold text-[#2cb5a0] mb-3">Delivery Robots – Zevo</h4>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                Designed for India’s hospitality, healthcare, and retail sectors, Zevo delivers with precision and greets with warmth. It protects every item it carries while making every customer feel valued. Affordable, locally supported, and built for real-world use.
              </p>
              <img src={delrobotImg} alt="Zevo Delivery Robot" className="solution-image" />
            </div>

            <div className="sub-solution-item">
              <h4 className="text-2xl font-bold text-[#2cb5a0] mb-3">2. Car Lupa</h4>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                An indigenously developed, professional-grade vehicle searchlight engineered for demanding field operations. It serves as a reliable Indian alternative to imported systems for security, defence support, emergency response, and off-road applications.
              </p>
              <img src={carLupaImg} alt="Car Lupa" className="solution-image" />
            </div>

            <div className="sub-solution-item">
              <h4 className="text-2xl font-bold text-[#2cb5a0] mb-3">3. Fire Control Unit (FCS)</h4>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                A lightweight, clip-on device that transforms a conventional sniper rifle into a smart precision weapon. Using real-time sensor fusion and a Modified Point Mass ballistic engine, it calculates and displays the exact aiming point — improving first-round hit probability while reducing engagement time and cognitive load.
              </p>
              <img src={fcuImg} alt="Fire Control Unit" className="solution-image" />
            </div>

          </div>
        </motion.div>


        {/* Card 2: Innovative Ideas Under Development */}
        <motion.div 
          className="solution-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">Innovative Ideas Under Development</h3>
          <p className="text-lg text-white/70 mb-8 border-l-4 border-[#2cb5a0] pl-4">
            We are exploring bold ideas that push the boundaries of automation:
          </p>

          <div className="sub-solution-grid">
            <div className="sub-solution-item border-l-2 border-[#2cb5a0]/50">
              <h4 className="text-2xl font-bold text-white mb-3">1. Fire Suppression Unit</h4>
              <p className="text-white/80 leading-relaxed">
                An intelligent solution designed to detect and control sudden fire outbreaks in large bore machines and excavators — enhancing safety in high-risk industrial environments.
              </p>
            </div>

            <div className="sub-solution-item border-l-2 border-[#2cb5a0]/50">
              <h4 className="text-2xl font-bold text-white mb-3">2. Unmanned Ground Vehicle (UGV)</h4>
              <p className="text-white/80 leading-relaxed">
                We have proposed an advanced automation solution for the T-72 Tank and Ashok Leyland Stallion (ALS) under the IDEX challenge. The system aims to enhance situational awareness, remote operation capability, and mission effectiveness while reducing human risk in hazardous and combat environments.
              </p>
            </div>
          </div>
        </motion.div>


        {/* Card 3: Custom Automation Solutions */}
        <motion.div 
          className="solution-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">Custom Automation Solutions</h3>
          <p className="text-lg text-white/70 mb-8 border-l-4 border-[#2cb5a0] pl-4">
            We specialize in designing tailor-made automation solutions that address unique industrial challenges.
          </p>

          <div className="sub-solution-item flex flex-col lg:flex-row gap-8 items-center bg-black/40">
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-[#2cb5a0] mb-3">Bagasse Automation</h4>
              <p className="text-white/80 leading-relaxed text-lg">
                We have developed an intelligent automation solution to clear the stagnation of bagasse in the juice flow path. By preventing blockages, this system eliminates juice overflow, improves process efficiency, reduces manual intervention, and ensures smoother operations in sugar and bio-energy plants.
              </p>
            </div>
            <div className="flex-1 w-full">
              <img src={bagessImg} alt="Bagasse Automation" className="w-full h-64 object-cover rounded-xl border border-white/10 mix-blend-screen" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

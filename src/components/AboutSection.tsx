import { motion } from 'framer-motion';
import { Card } from "./ui/card";
import logoImg from '../assets/logo.jpeg';

export function AboutSection() {
  return (
    <section id="about-section" className="relative z-10 w-full px-6 pt-24 pb-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2cb5a0] via-gray-300 to-white text-transparent bg-clip-text tracking-tight">
          Who We Are
        </h2>
      </div>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <Card className="w-full bg-[#141618] border-white/10 border relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/5 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 transition-all duration-300 hover:border-[#2cb5a0] hover:ring-2 hover:ring-[#2cb5a0]">
            
            <div className="flex flex-col items-center shrink-0">
              <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center p-2 mb-6 overflow-hidden shadow-[0_0_40px_rgba(44,181,160,0.3)]">
                 <img 
                    src={logoImg} 
                    alt="ElamaniTech Logo" 
                    className="w-full h-full object-contain rounded-full" 
                 />
              </div>
              <h3 className="text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#2cb5a0] to-gray-400">
                ElamaniTech
              </h3>
            </div>

            <div className="text-left text-white/80 space-y-5 text-lg leading-relaxed flex-1">
              <p>
                <strong className="text-white text-xl">At Elamani Tech,</strong> we believe that technology should not just function — it should think, adapt, and protect.
              </p>
              <p>
                Founded in 2024, Elamani Tech Private Limited is a technology-driven company focused on designing and developing advanced solutions in Dynamic Robotics, Embedded Systems, and Industrial Automation. We create intelligent machines that reduce human risk, improve operational efficiency, and deliver real impact across industries.
              </p>
              <p>
                From defense and security applications to industrial automation and smart logistics, our solutions are built with deep engineering expertise and a strong sense of responsibility. We combine innovation with practicality to deliver systems that perform reliably in the most demanding environments.
              </p>
              <p className="font-bold text-[#2cb5a0] text-xl border-l-4 border-[#2cb5a0] pl-4 uppercase tracking-wide">
                Developing indigenous solutions
              </p>
              <p className="pt-3 font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#2cb5a0] to-white">
                At our core, we are not just building products — we are engineering the future with intelligence and integrity.
              </p>
            </div>

          </Card>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Card } from "./ui/card";
import visionBg from '../assets/vision_cover.png';
import missionBg from '../assets/mission_cover.png';

export function VisionMission() {
  return (
    <section id="vision-mission" className="relative z-10 bg-background pt-20 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2cb5a0] via-gray-300 to-white text-transparent bg-clip-text tracking-tight mb-4">
          Our Core
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Our vision and mission for the future of intelligent robotics.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Card 1: Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <Card className="w-full h-full bg-[#141618] border-white/10 relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/5 flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:border-[#2cb5a0]/40 hover:shadow-[#2cb5a0]/10 hover:shadow-2xl">
            <div className="h-56 w-full relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal"
                style={{ backgroundImage: `url(${visionBg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141618] via-[#141618]/50 to-transparent" />
              <h3 className="absolute bottom-6 left-8 text-3xl font-black text-white tracking-widest uppercase">
                Vision
              </h3>
            </div>
            <div className="p-8 pt-2 flex-1">
              <p className="text-white/80 font-medium text-lg leading-relaxed border-l-4 border-[#2cb5a0] pl-4">
                "To become a trusted leader in intelligent robotics and automation by creating technology that makes industries safer, smarter, and more efficient."
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Card 2: Mission */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
        >
          <Card className="w-full h-full bg-[#141618] border-white/10 relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/5 flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:border-[#2cb5a0]/40 hover:shadow-[#2cb5a0]/10 hover:shadow-2xl">
            <div className="h-56 w-full relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal"
                style={{ backgroundImage: `url(${missionBg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141618] via-[#141618]/50 to-transparent" />
              <h3 className="absolute bottom-6 left-8 text-3xl font-black text-white tracking-widest uppercase">
                Mission
              </h3>
            </div>
            <div className="p-8 pt-2 flex-1">
              <p className="text-white/80 font-medium text-lg leading-relaxed border-l-4 border-gray-400 pl-4">
                "To design and deliver high-performance robotic and automation solutions that solve complex real-world problems. We are committed to pushing the boundaries of engineering while creating meaningful opportunities for young talent and building technology that creates lasting positive impact."
              </p>
            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}

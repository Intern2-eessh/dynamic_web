import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function SmartphoneShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // We use placeholder gradients/patterns that look like UI mockups for robotics telemetry
  const mockups = [
    {
      id: 1,
      title: "Kinematic Charts",
      bg: "bg-gradient-to-br from-slate-900 to-black",
      content: (
        <div className="w-full h-full flex flex-col p-4 relative overflow-hidden">
          <div className="h-12 w-full flex items-center justify-between border-b border-white/10 pb-2">
            <div className="w-1/3 h-2 bg-primary/40 rounded-full" />
            <div className="w-6 h-6 rounded-full border-2 border-primary/50" />
          </div>
          <div className="flex-1 mt-6 relative">
            {/* Chart lines simulation */}
            <svg viewBox="0 0 100 100" className="w-full h-full preserve-3d" style={{ overflow: 'visible' }}>
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                d="M 0 80 Q 25 20 50 60 T 100 30" fill="none" stroke="#0ea5e9" strokeWidth="2" 
              />
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                d="M 0 90 Q 20 50 60 70 T 100 40" fill="none" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4 2" 
              />
            </svg>
            <div className="absolute bottom-4 left-0 right-0 flex justify-between px-2">
              <div className="w-1/4 h-1 bg-white/20 rounded" />
              <div className="w-1/4 h-1 bg-white/20 rounded" />
              <div className="w-1/4 h-1 bg-white/20 rounded" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "LiDAR Terrain Mapping",
      bg: "bg-[#0d0e10]",
      content: (
        <div className="w-full h-full flex flex-col p-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" 
               style={{ backgroundImage: 'radial-gradient(circle at center, #0ea5e9 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
          <div className="relative z-10 flex-1 flex items-center justify-center">
            <motion.div 
              animate={{ rotateX: [60, 60, 60], rotateZ: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-40 h-40 border border-primary/40 rounded-full flex items-center justify-center relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-24 h-24 border border-primary/60 rounded-full" />
              <div className="w-10 h-10 border border-primary rounded-full absolute bg-primary/20" />
              {/* Radar sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full origin-center" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)' }} />
            </motion.div>
          </div>
          <div className="relative z-10 h-16 bg-white/5 backdrop-blur-md rounded-xl mt-auto border border-white/10 flex items-center px-4 gap-3">
             <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-sm" />
             </div>
             <div className="flex flex-col gap-1 flex-1">
               <div className="h-2 w-1/2 bg-white/40 rounded" />
               <div className="h-1.5 w-3/4 bg-white/20 rounded" />
             </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Fleet Health Vitals",
      bg: "bg-slate-950",
      content: (
        <div className="w-full h-full flex flex-col p-5">
           <div className="flex justify-between items-center mb-6">
             <div className="h-3 w-16 bg-white/40 rounded-full" />
             <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
             </div>
           </div>
           
           <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                 <div className="h-8 w-8 rounded-full border-[3px] border-primary mb-2 flex items-center justify-center text-[10px] font-bold text-white">98%</div>
                 <div className="h-1.5 w-full bg-white/20 rounded" />
              </div>
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                 <div className="h-8 w-8 rounded-full border-[3px] border-amber-500 mb-2 flex items-center justify-center text-[10px] font-bold text-white">42v</div>
                 <div className="h-1.5 w-full bg-white/20 rounded" />
              </div>
           </div>

           <div className="flex-1 bg-white/5 rounded-xl border border-white/10 p-4 relative overflow-hidden">
             <div className="h-2 w-1/3 bg-white/40 rounded mb-4" />
             <div className="flex flex-col gap-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                   <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.random() * 60 + 30}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-primary rounded-full" 
                      />
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockups.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="max-w-xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Edge Computing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Mobile Fleet Control & <br/>
            <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">Telemetry Analytics</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Monitor real-time kinematic charts, analyze LiDAR terrain maps, and manage battery/fleet health vitals directly from the enterprise mobile app. Ensure operational uptime of 99.98% from anywhere.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black hover:bg-white/90 px-6 py-3 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2">
               Download App <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.79 2.45 0 4.36 1.17 5.61 3.14-2.11 1.25-1.74 4.35.7 5.42-1.04 2.58-3.05 2.65-4.98 4.4zM12.03 7.25C11.97 3.32 15.46 0 19.34 0c.26 3.96-3.83 7.27-7.31 7.25z"/></svg>
            </button>
            <button className="bg-white/5 text-white border border-white/10 hover:bg-white/10 px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2">
               Play Store <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3.5 2C3.12 2 2.8 2.22 2.62 2.5L13.5 13.38L18.42 8.46L3.5 2ZM2.5 3.32V20.68L12.75 14.12L2.5 3.32ZM19.25 8.82L14.28 12.98L19.25 17.15C19.78 16.92 20.5 16.32 20.5 15C20.5 13.68 19.78 13.08 19.25 8.82ZM13.38 13.8L3.25 21.68C3.52 21.88 3.82 22 4.12 22C4.55 22 4.98 21.82 5.35 21.62L13.38 13.8Z"/></svg>
            </button>
          </div>
        </div>

        {/* Smartphone Carousel Mockup */}
        <div className="relative flex justify-center perspective-[1200px]">
          {/* Glowing pedestal effect */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-20 bg-primary/30 blur-[50px] rounded-[100%]" />
          
          <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-slate-800 p-2 shadow-2xl transform-gpu rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out z-10">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-30" />
            
            {/* Screen */}
            <div className="w-full h-full bg-slate-950 rounded-[2.25rem] overflow-hidden relative">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={currentIndex}
                   initial={{ opacity: 0, x: 20, scale: 0.95 }}
                   animate={{ opacity: 1, x: 0, scale: 1 }}
                   exit={{ opacity: 0, x: -20, scale: 0.95 }}
                   transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                   className={`absolute inset-0 ${mockups[currentIndex].bg}`}
                 >
                    {mockups[currentIndex].content}
                    
                    {/* Overlay Label */}
                    <div className="absolute top-10 left-0 right-0 flex justify-center z-20 pointer-events-none">
                       <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
                          <span className="text-white text-xs font-semibold tracking-wide uppercase">
                            {mockups[currentIndex].title}
                          </span>
                       </div>
                    </div>
                 </motion.div>
               </AnimatePresence>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

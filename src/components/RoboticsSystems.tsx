import { ScrollStack, ScrollStackItem } from './ScrollStack';

export function RoboticsSystems() {
  const cards = [
    {
      title: "Kinematic Motion Engines",
      description: "Precision-engineered actuators delivering sub-millimeter accuracy and industrial-grade payload capacities for complex assembly operations.",
      icon: "⚙️"
    },
    {
      title: "AI Spatial Navigation",
      description: "Real-time LiDAR and optical sensor fusion enabling autonomous fleets to navigate dense, dynamic factory floors without predefined tracks.",
      icon: "🌐"
    },
    {
      title: "Heavy-Duty Chassis",
      description: "Forged from aerospace-grade alloys, designed to withstand continuous 24/7 hyperscale manufacturing environments with zero structural degradation.",
      icon: "🛡️"
    },
    {
      title: "Fleet Synchronization",
      description: "Edge-computed swarm intelligence that perfectly coordinates hundreds of robotic units, maximizing operational uptime and efficiency.",
      icon: "⚡"
    }
  ];

  return (
    <section id="robotics-systems" className="bg-background relative z-20">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Robotics & <span className="text-primary">Systems</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The structural foundation of autonomous hyperscale.
        </p>
      </div>
      
      <ScrollStack 
        useWindowScroll={true} 
        fadeEffect={true} 
        directionMode="staggered"
        itemDistance={120}
        entryOffset={2000}
      >
        {cards.map((card, idx) => (
          <ScrollStackItem key={idx}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 h-full">
              <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl shrink-0">
                {card.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}

import { ScrollStack, ScrollStackItem } from './ScrollStack';
import motionEnginesImg from '../assets/motion_engines.png';
import spatialNavigationImg from '../assets/spatial_navigation.png';
import heavyChassisImg from '../assets/heavy_chassis.png';
import fleetSyncImg from '../assets/fleet_sync.png';

export function RoboticsSystems() {
  const cards = [
    {
      title: "Kinematic Motion Engines",
      description: "Precision-engineered actuators delivering sub-millimeter accuracy and industrial-grade payload capacities for complex assembly operations.",
      image: motionEnginesImg
    },
    {
      title: "AI Spatial Navigation",
      description: "Real-time LiDAR and optical sensor fusion enabling autonomous fleets to navigate dense, dynamic factory floors without predefined tracks.",
      image: spatialNavigationImg
    },
    {
      title: "Heavy-Duty Chassis",
      description: "Forged from aerospace-grade alloys, designed to withstand continuous 24/7 hyperscale manufacturing environments with zero structural degradation.",
      image: heavyChassisImg
    },
    {
      title: "Fleet Synchronization",
      description: "Edge-computed swarm intelligence that perfectly coordinates hundreds of robotic units, maximizing operational uptime and efficiency.",
      image: fleetSyncImg
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
          <ScrollStackItem key={idx} itemClassName="!p-0 overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch h-full min-h-[24rem]">
              <div className="md:w-1/2 w-full h-64 md:h-auto relative">
                <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              </div>
              <div className="md:w-1/2 w-full p-10 md:p-14 flex flex-col justify-center">
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

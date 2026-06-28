import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card";
import { Spotlight } from "./ui/spotlight";
import { motion } from "framer-motion";
export function Interactive3D() {
  return (
    <section className="relative z-10 bg-gradient-to-b from-background via-background/80 to-background pt-12 pb-12 px-6 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Card className="w-full h-[500px] md:h-[600px] bg-[#141618] border-white/10 relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/5">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="rgba(14,165,233,0.35)"
          />
          
          <div className="flex h-full flex-col-reverse md:flex-row">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6">
                Interactive Robotics <br/><span className="text-primary">Simulation</span>
              </h2>
              <p className="mt-4 text-white/70 max-w-lg text-lg leading-relaxed">
                Bring our industrial fleets to life in full 3D space. Manipulate viewports, orbit around the chassis, and explore the kinematic engineering right from your browser.
              </p>
            </div>

            {/* Right content */}
            <div className="flex-1 relative min-h-[300px] md:min-h-full">
              <div className="absolute inset-0">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}

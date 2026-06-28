export function Metrics() {
  const metrics = [
    {
      value: "7,500+",
      label: "Active Fleets Deployed",
      description: "Autonomous units operating globally."
    },
    {
      value: "35+",
      label: "Enterprise Systems",
      description: "In the development pipeline."
    },
    {
      value: "99.98%",
      label: "Operational Uptime",
      description: "Maximum efficiency workloads."
    }
  ];

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Our Fleet Capabilities
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Proven industrial-scale autonomous infrastructure performing at the highest standards of innovation and reliability.
            </p>
          </div>
          <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full text-sm font-medium transition-all backdrop-blur-md">
            View Case Studies
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="bg-white/[0.02] border border-white/10 p-8 rounded-2xl hover:bg-white/[0.04] transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 mb-4 tracking-tighter">
                {metric.value}
              </h3>
              <p className="text-xl text-white font-medium mb-2">{metric.label}</p>
              <p className="text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

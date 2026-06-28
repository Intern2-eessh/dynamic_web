export function LogoCloud() {
  const logos = [
    { name: "Boston Dynamics", class: "text-xl font-bold tracking-tighter uppercase" },
    { name: "Fanuc", class: "text-2xl font-black italic tracking-widest uppercase text-[#FFCC00]" }, // A nod to Fanuc's yellow
    { name: "Kuka", class: "text-2xl font-black uppercase text-[#FF6600]" }, // Kuka orange-ish representation
    { name: "NVIDIA", class: "text-xl font-bold tracking-widest uppercase text-[#76B900]" } // Nvidia green
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[120vmin] h-[120vmin] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.05),transparent_50%)] blur-[40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Top Divider */}
        <div className="w-full max-w-sm mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg tracking-tight mb-1">
            Trusted by experts.
          </p>
          <h2 className="text-foreground text-2xl md:text-3xl font-semibold tracking-tight">
            Used by the leaders.
          </h2>
        </div>

        {/* Logo Marquee */}
        <div className="w-full overflow-hidden relative transition-all duration-700 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-16 md:gap-24 pr-16 md:pr-24">
            {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center p-4 transition-transform hover:scale-110 duration-300 cursor-default">
                 <span className={logo.class}>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-20" />
      </div>
    </section>
  );
}

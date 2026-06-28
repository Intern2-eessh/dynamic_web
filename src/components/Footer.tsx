import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const links = [
    {
      title: "Solutions",
      items: ["Systems & Fleet", "Enterprise Integration", "Custom Workloads"],
    },
    {
      title: "Resources",
      items: ["Research & Insights", "Whitepapers", "Documentation"],
    },
    {
      title: "Company",
      items: ["About Us", "Careers", "Contact", "Investors"],
    },
  ];

  return (
    <footer className="w-full bg-background text-foreground relative pt-32 pb-10 overflow-hidden">
      {/* Ambient background blobs */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-50 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Newsletter Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[60px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
          
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Building the future of autonomous progress.
            </h3>
            <p className="text-muted-foreground mb-8 text-lg max-w-md">
              Subscribe to get the latest insights on intelligent automation and industrial robotics.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-background/50 border border-white/10 rounded-xl px-4 py-3 flex-1 text-white focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(14,165,233,0.2)] flex items-center justify-center gap-2">
                Subscribe <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex w-[300px] h-[200px] relative animate-wave">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-white/10 rounded-2xl rotate-6 transform-gpu border border-white/20 shadow-2xl backdrop-blur-sm" />
             <div className="absolute inset-0 bg-background rounded-2xl transform-gpu border border-white/10 shadow-xl overflow-hidden flex items-center justify-center">
                <div className="w-full h-full scale-110 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50" />
             </div>
          </div>
        </div>

        {/* Main Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Logo className="w-9 h-9" />
              <span className="text-xl font-bold tracking-tight text-white">ElamaniTech</span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-sm">
              Rapidly scaling the intelligent robotics capabilities of today, to power the automated potential of tomorrow.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>

          {links.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold mb-6">{col.title}</h4>
              <ul className="flex flex-col gap-4">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 ElamaniTech Inc. All rights reserved. Site by ONBOX.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

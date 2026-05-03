export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 to-tavardt-dark">
      <div className="glass-panel p-12 rounded-3xl max-w-4xl w-full text-center shadow-2xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-tavardt-cyan opacity-20 blur-[100px] pointer-events-none"></div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          TAVARDT <span className="text-tavardt-cyan">Elite</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          The ultimate boilerplate for high-ticket digital engineering. 
          <br className="hidden md:block"/> 
          Engineered for 100/100 Core Web Vitals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left border-t border-white/10 pt-10">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-tavardt-gold/50 transition-colors">
            <h2 className="text-tavardt-gold font-semibold text-xl mb-3 flex items-center gap-2">
              <span>🇺🇸</span> Performance First
            </h2>
            <p className="text-zinc-400 text-sm">
              Zero-hydration overhead options, isolated Framer Motion components, and optimized CSS delivery for pristine PageSpeed scores.
            </p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-tavardt-cyan/50 transition-colors">
            <h2 className="text-tavardt-cyan font-semibold text-xl mb-3 flex items-center gap-2">
              <span>🇧🇷</span> Engenharia de Ponta
            </h2>
            <p className="text-zinc-400 text-sm">
              Arquitetura voltada para clientes B2B high-ticket. Padrões de segurança embutidos e design system Glassmorphism nativo.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a href="https://github.com/TAVARDT" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-tavardt-cyan hover:text-black transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            Explore TAVARDT GitHub
          </a>
        </div>
      </div>
    </main>
  );
}

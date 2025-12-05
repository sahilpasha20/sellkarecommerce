import React from 'react';

const HolographicPhone: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[600px] perspective-1000 group">
      {/* Container for rotation */}
      <div className="relative w-full h-full transform-style-3d animate-float">
         {/* The spinning wrapper */}
         <div className="relative w-full h-full transform-style-3d animate-[spin_20s_linear_infinite]">
            
            {/* Phone Body */}
            <div className="absolute inset-0 bg-slate-900 rounded-[3rem] border border-slate-700 shadow-2xl transform-style-3d">
                {/* Screen Glow */}
                <div className="absolute inset-[4px] rounded-[2.8rem] bg-gradient-to-br from-slate-800 via-black to-slate-900 border border-slate-800 overflow-hidden">
                    {/* Simulated Screen Content */}
                    <div className="absolute inset-0 bg-[url('https://picsum.photos/600/1200')] opacity-50 mix-blend-overlay bg-cover bg-center"></div>
                    <div className="absolute top-20 left-10 right-10 bottom-20 flex flex-col justify-between">
                        <div className="text-center">
                            <h3 className="text-4xl font-display font-bold text-white tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">12:45</h3>
                            <p className="text-electric-blue text-xs uppercase tracking-widest mt-2 drop-shadow-[0_0_5px_#06b6d4]">Premium OS</p>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-white/20 mx-auto flex items-center justify-center animate-pulse">
                            <div className="w-8 h-8 rounded-full bg-electric-blue/20 blur-md"></div>
                        </div>
                    </div>
                </div>

                {/* Camera Island */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-full z-20 border border-slate-700 flex items-center justify-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-slate-800 shadow-inner"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-800 shadow-inner"></div>
                </div>
            </div>

            {/* Back Panel (Simulated) - Wireframe cages adapted for LIGHT mode visibility (darker blues) */}
            
            {/* Cage 1: Vertical Ring */}
            <div className="absolute -inset-8 border border-electric-blue/60 rounded-[4rem] transform-style-3d rotate-y-90 animate-[spin_10s_linear_infinite_reverse]" style={{ transform: 'rotateY(90deg)' }}></div>

            {/* Cage 2: Horizontal Ring */}
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 border border-cyan-600/40 rounded-full transform-style-3d rotate-x-90 animate-[spin_15s_linear_infinite]" style={{ transform: 'rotateX(90deg)' }}></div>

            {/* Cage 3: Angled Ring */}
            <div className="absolute -inset-12 border border-slate-400/30 rounded-[5rem] transform-style-3d animate-[spin_25s_linear_infinite]" style={{ transform: 'rotateZ(45deg)' }}></div>
         </div>
      </div>
      
      {/* Floor Reflection/Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-64 h-12 bg-electric-blue/20 blur-[60px] rounded-full animate-pulse-fast"></div>
      
      <style>{`
        .perspective-1000 {
            perspective: 1000px;
        }
        .transform-style-3d {
            transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default HolographicPhone;
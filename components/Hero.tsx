import React, { useState, useEffect } from 'react';
import HolographicPhone from './HolographicPhone';
import { ParallaxProps } from '../types';

const ParallaxLayer: React.FC<ParallaxProps> = ({ mousePos, factor, children, className }) => {
  const x = (mousePos.x - window.innerWidth / 2) * factor;
  const y = (mousePos.y - window.innerHeight / 2) * factor;

  return (
    <div
      className={`transition-transform duration-100 ease-out ${className}`}
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      {children}
    </div>
  );
};

interface HeroProps {
  onShopClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 bg-obsidian text-ink">
      
      {/* Background Grids & Ambience */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(8,145,178,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
         {/* Subtle Vignette */}
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-obsidian"></div>
      </div>

      {/* Background Rotating Phone */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60 blur-[1px] scale-125 lg:scale-150">
           <ParallaxLayer mousePos={mousePos} factor={0.02}>
               <HolographicPhone />
           </ParallaxLayer>
           
           {/* Motion Streaks behind phone */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
              <div className="absolute inset-0 border border-electric-blue/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute inset-20 border border-dashed border-electric-blue/20 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
           </div>
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-6 mt-[-5vh]">
          <ParallaxLayer mousePos={mousePos} factor={-0.01}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-full bg-white/40 backdrop-blur-md shadow-sm">
               <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse box-shadow-[0_0_10px_rgba(8,145,178,0.8)]"></span>
               <span className="text-electric-blue text-xs font-bold tracking-[0.2em] uppercase">The Flagship Collection</span>
            </div>
          </ParallaxLayer>

          <ParallaxLayer mousePos={mousePos} factor={-0.02}>
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-9xl leading-[0.9] text-slate-900 uppercase tracking-tighter drop-shadow-sm">
              Experience <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700">Tomorrow's</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan-500">Technology</span>
            </h1>
          </ParallaxLayer>

          <ParallaxLayer mousePos={mousePos} factor={-0.01}>
             <p className="font-sans text-slate-500 text-lg md:text-2xl max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
               The world's most advanced devices in one place. Apple, Samsung, Google. Designed for those who demand the impossible.
             </p>
          </ParallaxLayer>

          <ParallaxLayer mousePos={mousePos} factor={0}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
               <button 
                  onClick={onShopClick}
                  className="group relative px-10 py-5 bg-transparent text-slate-900 overflow-hidden rounded-sm border border-slate-900 font-bold tracking-widest uppercase text-sm hover:shadow-lg transition-all duration-300"
               >
                  <div className="absolute inset-0 w-0 bg-slate-900 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative flex items-center gap-3 z-10 transition-colors group-hover:text-white">
                    Shop Premium Phones 
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
               </button>
            </div>
          </ParallaxLayer>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce z-20">
         <span className="text-[10px] tracking-[0.3em] uppercase text-slate-400">Scroll</span>
         <div className="w-[1px] h-8 bg-gradient-to-b from-electric-blue to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
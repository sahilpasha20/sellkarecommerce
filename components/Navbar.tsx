import React, { useState, useEffect } from 'react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-full border border-electric-blue flex items-center justify-center relative overflow-hidden bg-white">
             <div className="absolute inset-0 bg-electric-blue opacity-10 group-hover:opacity-20 transition-opacity"></div>
             <span className="font-display font-bold text-electric-blue text-lg">P</span>
          </div>
          <span className="font-display font-bold text-xl tracking-widest text-slate-900 uppercase">
            Premium<span className="text-electric-blue">Gadgets</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Shop All', 'Brands', 'New Arrivals', 'Support'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="font-sans text-sm tracking-wide text-slate-600 hover:text-slate-900 transition-colors uppercase relative group font-medium"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenCart}
            className="relative p-2 text-slate-600 hover:text-electric-blue transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-electric-blue text-white text-[10px] font-bold flex items-center justify-center rounded-full animate-bounce shadow-[0_0_10px_rgba(8,145,178,0.4)]">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
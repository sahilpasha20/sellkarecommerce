import React from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-opacity duration-300"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-paper w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row pointer-events-auto transform transition-all duration-300 animate-float border border-white/50">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white shadow-sm transition-all"
          >
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
          </button>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-100 relative p-8 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(rgba(8,145,178,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
             <img 
               src={product.image} 
               alt={product.name} 
               className="relative z-10 max-h-[80%] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
             />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[80vh] md:max-h-auto bg-paper">
             <div className="mb-6">
                <span className="text-electric-blue font-bold tracking-wider uppercase text-xs mb-2 block">Flagship Series</span>
                <h2 className="text-4xl font-display font-bold text-slate-900 mb-2">{product.name}</h2>
                <p className="text-slate-500 text-lg font-light">{product.tagline}</p>
             </div>

             <div className="flex items-end gap-4 mb-8">
                <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded mb-1 border border-green-100">In Stock</span>
             </div>

             <p className="text-slate-600 leading-relaxed mb-8 border-l-2 border-electric-blue pl-4">
               {product.description}
             </p>

             {/* Specs Grid */}
             <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                   <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Display</p>
                   <p className="font-semibold text-slate-900">{product.specs.display}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                   <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Processor</p>
                   <p className="font-semibold text-slate-900">{product.specs.processor}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                   <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Camera</p>
                   <p className="font-semibold text-slate-900">{product.specs.camera}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                   <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Battery</p>
                   <p className="font-semibold text-slate-900">{product.specs.battery}</p>
                </div>
             </div>

             <div className="flex gap-4">
                <button 
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="flex-1 py-4 bg-electric-blue text-white font-bold uppercase tracking-widest hover:bg-cyan-500 transition-all duration-300 rounded-sm shadow-lg shadow-cyan-500/20"
                >
                  Add to Cart
                </button>
                <button className="px-6 py-4 border border-slate-200 hover:border-slate-900 transition-colors rounded-sm text-slate-900">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                   </svg>
                </button>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
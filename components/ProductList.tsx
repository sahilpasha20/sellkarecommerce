import React from 'react';
import { Product } from '../types';

export const dummyProducts: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    tagline: "Titanium. So strong. So light. So Pro.",
    price: 1199,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop",
    features: ["A17 Pro Chip", "Titanium Design", "48MP Main Camera"],
    description: "The first iPhone to feature an aerospace-grade titanium design, using the same alloy that spacecraft use for missions to Mars. The A17 Pro chip brings a new era of gaming performance.",
    specs: {
        display: "6.7\" Super Retina XDR",
        processor: "A17 Pro chip",
        camera: "48MP Main | Ultra Wide | Telephoto",
        battery: "Up to 29 hrs video"
    }
  },
  {
    id: 2,
    name: "Galaxy S24 Ultra",
    tagline: "Galaxy AI is here.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1706606992224-b154eb537b83?q=80&w=800&auto=format&fit=crop",
    features: ["Snapdragon 8 Gen 3", "200MP Camera", "Titanium Frame"],
    description: "Unleash new ways to create, connect, and accomplish more. The new era of mobile AI is here. With a built-in S Pen and the most powerful processor on a Galaxy yet.",
    specs: {
        display: "6.8\" QHD+ Dynamic AMOLED 2X",
        processor: "Snapdragon 8 Gen 3",
        camera: "200MP Wide-angle",
        battery: "5000mAh"
    }
  },
  {
    id: 3,
    name: "Pixel 8 Pro",
    tagline: "The only phone engineered by Google.",
    price: 999,
    image: "https://images.unsplash.com/photo-1698656627885-2e65492419a4?q=80&w=800&auto=format&fit=crop",
    features: ["Google Tensor G3", "Super Actua Display", "Pro Controls"],
    description: "Pixel 8 Pro is the all-pro phone engineered by Google. It's fast, secure, and has the best Pixel camera yet, with pro-level editing features and Google AI.",
    specs: {
        display: "6.7\" Super Actua LTPO OLED",
        processor: "Google Tensor G3",
        camera: "50MP Octa PD wide",
        battery: "5050mAh"
    }
  },
  {
    id: 4,
    name: "Galaxy Z Fold 5",
    tagline: "Unfold your world.",
    price: 1799,
    image: "https://images.unsplash.com/photo-1697554900762-23c3488251e7?q=80&w=800&auto=format&fit=crop",
    features: ["7.6\" Main Screen", "Multitasking Powerhouse", "Flex Hinge"],
    description: "The ultimate 7.6\" Main Screen unblocks a massive immersive screen so you can do more. It's basically a movie theater, workspace, and game console in your pocket.",
    specs: {
        display: "7.6\" QXGA+ Dynamic AMOLED 2X",
        processor: "Snapdragon 8 Gen 2",
        camera: "50MP Wide",
        battery: "4400mAh"
    }
  },
  {
    id: 5,
    name: "iPhone 15",
    tagline: "New camera. New design. Newphoria.",
    price: 799,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop",
    features: ["Dynamic Island", "48MP Main Camera", "A16 Bionic"],
    description: "Dynamic Island bubbles up alerts and Live Activities so you don't miss them while you're doing something else. The new 48MP Main camera shoots in super-high resolution.",
    specs: {
        display: "6.1\" Super Retina XDR",
        processor: "A16 Bionic chip",
        camera: "48MP Main",
        battery: "Up to 20 hrs video"
    }
  },
  {
    id: 6,
    name: "Nothing Phone (2)",
    tagline: "Come to the bright side.",
    price: 699,
    image: "https://images.unsplash.com/photo-1691435272367-9c6d32832049?q=80&w=800&auto=format&fit=crop",
    features: ["Glyph Interface", "Nothing OS 2.0", "Dual 50MP Camera"],
    description: "A new Glyph Interface. Nothing OS 2.0. New dual 50 MP camera sensor. It's the phone that encourages you to be more present in your everyday life.",
    specs: {
        display: "6.7\" LTPO OLED",
        processor: "Snapdragon 8+ Gen 1",
        camera: "50MP Main + 50MP Ultra Wide",
        battery: "4700mAh"
    }
  }
];

interface ProductListProps {
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onAddToCart, onProductClick }) => {
  return (
    <section id="products" className="py-24 relative bg-obsidian text-ink">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-widest text-slate-900 mb-4 drop-shadow-sm">
                Shop <span className="text-electric-blue">Premium</span>
            </h2>
            <p className="text-slate-500 font-light max-w-xl mx-auto">
                Curated flagships from the world's leading tech brands.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {dummyProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="group relative bg-white border border-slate-100 p-6 rounded-2xl hover:border-electric-blue/30 transition-all duration-300 hover:shadow-xl flex flex-col cursor-pointer overflow-hidden"
                  onClick={() => onProductClick(product)}
                >
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Image Area */}
                    <div className="relative h-64 mb-8 overflow-hidden rounded-xl bg-slate-50 p-4">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1 relative z-10">
                        <h3 className="text-2xl font-display font-bold text-slate-900 mb-1 group-hover:text-electric-blue transition-colors">{product.name}</h3>
                        <p className="text-slate-500 text-xs uppercase tracking-widest mb-4 font-semibold">{product.tagline}</p>
                        
                        <div className="space-y-2 mb-6">
                            {product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center text-slate-600 text-sm">
                                    <span className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-2"></span>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer / Action */}
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-100 relative z-10">
                        <span className="text-xl font-display font-bold text-slate-900">${product.price}</span>
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                onAddToCart(product);
                            }}
                            className="px-6 py-2 bg-slate-900 hover:bg-electric-blue text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-sm shadow hover:shadow-lg"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
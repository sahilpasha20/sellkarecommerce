import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MouseHighlight from './components/MouseHighlight';
import ProductList from './components/ProductList';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import { Product, CartItem } from './types';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-obsidian min-h-screen text-ink selection:bg-electric-blue selection:text-white">
      <MouseHighlight />
      
      <Navbar 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemove={removeFromCart}
        onCheckoutComplete={clearCart}
      />

      <ProductModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      <main>
        <Hero onShopClick={scrollToProducts} />
        
        <ProductList 
          onAddToCart={addToCart} 
          onProductClick={setSelectedProduct}
        />
        
        {/* Features / Benefits Section */}
        <section id="brands" className="py-32 bg-paper relative overflow-hidden border-t border-slate-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-display font-bold uppercase tracking-widest mb-6 text-slate-500">
                    Why Choose <span className="text-slate-900">Premium Gadgets</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
                   {['Global Warranty', 'Express Delivery', 'Authentic Products', '24/7 Support'].map((spec) => (
                      <div key={spec} className="p-6 border border-slate-100 bg-slate-50 rounded-lg group hover:border-electric-blue/50 transition-colors shadow-sm">
                          <p className="text-slate-600 font-bold tracking-wider group-hover:text-electric-blue transition-colors">{spec}</p>
                      </div>
                   ))}
                </div>
            </div>
        </section>
      </main>
      
      <footer className="py-12 border-t border-slate-200 bg-white text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Premium Gadgets. Authorized Retailer.</p>
      </footer>
    </div>
  );
}

export default App;
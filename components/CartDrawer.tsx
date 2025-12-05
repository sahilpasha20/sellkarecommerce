import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (id: number) => void;
  onCheckoutComplete: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, onRemove, onCheckoutComplete }) => {
  const [view, setView] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [formData, setFormData] = useState({ name: '', email: '', card: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
        setIsProcessing(false);
        setView('success');
        onCheckoutComplete();
    }, 2000);
  };

  const reset = () => {
      setView('cart');
      onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-paper border-l border-slate-200 z-[70] transform transition-transform duration-500 ease-in-out flex flex-col shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-paper">
            <h2 className="text-xl font-display font-bold uppercase tracking-widest text-slate-900">
                {view === 'cart' && 'Your Cart'}
                {view === 'checkout' && 'Checkout'}
                {view === 'success' && 'Order Confirmed'}
            </h2>
            <button onClick={reset} className="text-slate-400 hover:text-slate-900 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-paper">
            
            {/* VIEW: CART */}
            {view === 'cart' && (
                <>
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                            <svg className="w-12 h-12 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <p>Your cart is empty.</p>
                            <button onClick={onClose} className="text-electric-blue text-sm hover:underline font-bold">Continue Shopping</button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex gap-4 items-center bg-slate-50 p-3 rounded-xl border border-slate-100">
                                    <div className="w-16 h-16 bg-white rounded-lg border border-slate-100 overflow-hidden flex-shrink-0 p-2">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-slate-900 truncate">{item.name}</h4>
                                        <p className="text-electric-blue text-sm font-semibold">${item.price}</p>
                                    </div>
                                    <button 
                                        onClick={() => onRemove(item.id)}
                                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}

            {/* VIEW: CHECKOUT */}
            {view === 'checkout' && (
                <form id="checkout-form" onSubmit={handleCheckout} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Full Name</label>
                        <input 
                            required
                            type="text" 
                            className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-slate-900 focus:border-electric-blue outline-none transition-colors"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Email Address</label>
                        <input 
                            required
                            type="email" 
                            className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-slate-900 focus:border-electric-blue outline-none transition-colors"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Card Number (Dummy)</label>
                        <input 
                            required
                            type="text" 
                            className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-slate-900 focus:border-electric-blue outline-none transition-colors"
                            placeholder="0000 0000 0000 0000"
                            value={formData.card}
                            onChange={(e) => setFormData({...formData, card: e.target.value})}
                        />
                    </div>
                    <div className="p-4 bg-electric-blue/10 border border-electric-blue/20 rounded text-sm text-electric-blue">
                        <p className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            This is a secure demo checkout.
                        </p>
                    </div>
                </form>
            )}

            {/* VIEW: SUCCESS */}
            {view === 'success' && (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-pulse-fast">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 border border-green-200">
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Payment Successful!</h3>
                        <p className="text-slate-500">Your premium device is being prepared for shipment.</p>
                    </div>
                </div>
            )}
        </div>

        {/* Footer */}
        {view !== 'success' && (
            <div className="p-6 border-t border-slate-100 bg-paper">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-slate-500 text-sm">Total</span>
                    <span className="text-2xl font-display font-bold text-slate-900">${total.toLocaleString()}</span>
                </div>
                
                {view === 'cart' ? (
                     <button 
                        onClick={() => setView('checkout')}
                        disabled={cartItems.length === 0}
                        className="w-full py-4 bg-slate-900 text-white hover:bg-electric-blue font-bold uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg"
                     >
                        Proceed to Checkout
                     </button>
                ) : (
                    <button 
                        type="submit"
                        form="checkout-form"
                        disabled={isProcessing}
                        className="w-full py-4 bg-electric-blue hover:bg-cyan-500 text-white font-bold uppercase tracking-widest disabled:opacity-50 transition-colors flex justify-center items-center gap-2 shadow-md"
                    >
                        {isProcessing ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing
                            </>
                        ) : 'Pay Now'}
                    </button>
                )}
            </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
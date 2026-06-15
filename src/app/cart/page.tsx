'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { CartItem } from '../store/cartSlice';
import Link from 'next/link';

export default function Cart() {
  const cartItems = useSelector((state: any) => state.cart.items as CartItem[]);
  
  const totalPrice = cartItems.reduce((total: number, item: CartItem) => total + (item.price * item.quantity), 0);

  const handleOrderWhatsApp = () => {
    let message = "Hi, I want to order the following items:\n\n";
    cartItems.forEach((item: CartItem) => {
      message += `- ${item.quantity}x ${item.name} (₹${item.price * item.quantity})\n`;
    });
    message += `\nTotal Estimate: ₹${totalPrice}`;
    
    const whatsappUrl = `http://api.whatsapp.com/send?phone=919911296615&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-12 pb-12 px-4 sm:px-6">
      <main className="max-w-screen-md mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
            <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm hover:shadow-md">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <ul className="divide-y divide-gray-100">
              {cartItems.map((item: CartItem, index: number) => (
                <li key={`${item.id}-${index}`} className="p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:bg-gray-50 transition-colors">
                  {/* Item Image */}
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="h-full w-full object-contain object-center p-2 mix-blend-multiply" />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-gray-300">
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  {/* Item Details */}
                  <div className="flex flex-1 flex-col justify-between items-center sm:items-start text-center sm:text-left w-full h-full">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">{item.table}</p>
                    </div>
                    <div className="mt-auto pt-4 flex items-center justify-between w-full">
                      <p className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Qty: {item.quantity}</p>
                      <p className="text-lg font-extrabold text-gray-900">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            
            {/* Cart Footer */}
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <div className="flex justify-between items-center text-xl font-extrabold text-gray-900 mb-6">
                <p>Total Estimate</p>
                <p className="text-2xl text-red-600">₹{totalPrice}</p>
              </div>
              
              <button
                onClick={handleOrderWhatsApp}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-transparent bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-sm hover:bg-[#1ebd5b] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 transition-all duration-300 hover:shadow-md"
              >
                <img src="/WhatsApp.svg.webp" alt="whatsapp" className="h-6 w-6" />
                Order on WhatsApp
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
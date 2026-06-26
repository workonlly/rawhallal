import React from 'react';
import Link from 'next/link';

export default function Direct() {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-10">
      <div className="relative overflow-hidden bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        
        {/* Decorative Background Elements */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-red-200 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

        {/* Text Content */}
        <div className="relative z-10 flex-1 text-center md:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
            Directly Sourced
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            From the Farm, <br className="hidden md:block" />
            <span className="text-red-600">Direct to your Door.</span>
          </h2>
          <p className="text-gray-600 md:text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Skip the middleman. We bring 100% halal-certified, chemical-free, and fresh meat straight to your kitchen with lightning-fast delivery.
          </p>

          {/* Quick Feature Ticks */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
            {['100% Halal', 'Antibiotic Free', 'Fast Delivery'].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-red-600 text-white shrink-0">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <Link 
            href="/chicken" 
            className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg shadow-red-600/20 hover:bg-red-700 hover:shadow-red-600/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            Order Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Image/Visual Content */}
        <div className="relative z-10 flex-1 w-full max-w-sm md:max-w-md mx-auto">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Replace with your actual delivery or fresh meat image */}
            <img 
              src="/lfg.png" 
              alt="Direct delivery of fresh meat" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
            <div className="bg-green-100 p-2 rounded-lg">
              <span className="text-2xl">🚚</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Delivery</p>
              <p className="text-sm font-bold text-gray-900">Under 90 Mins</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
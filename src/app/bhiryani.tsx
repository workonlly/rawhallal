'use client';
import React from 'react';
import Footer from './components/footer';

function Bhiryani() {
  return (
    <div className="h-[91%] w-full overflow-auto rounded-sm scrollbar-custom bg-gradient-to-b from-gray-50 via-white to-gray-100">
      
      {/* Hero / Header Section for SEO */}
      <div className="w-full flex justify-center pt-16 pb-12 px-4">
        <div className="text-center max-w-4xl space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight leading-tight">
            Premium Farm-to-Home
          </h1>
          <h2 className="text-lg md:text-2xl font-medium text-black">
            Fresh Raw Meat & Seafood Delivery Across Noida
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mt-6 opacity-80"></div>
        </div>
      </div>

      {/* SEO / Description Content in Cards */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="group bg-white hover:bg-gray-50 shadow-sm p-8 rounded-3xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)] hover:border-orange-500/40 flex flex-col">
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-4 tracking-wide group-hover:text-orange-600 transition-colors duration-300">Fast & Fresh Delivery</h3>
            <p className="text-black text-sm leading-loose">
              Welcome to the best chicken delivery app in India, your one-stop online meat shop for fresh raw chicken, mutton meat online. We are committed to providing 100% hygienic chicken delivery and fresh fish home delivery straight from the farm to home meat delivery network. Whether you are looking for a chicken shop near me open now, a meat delivery near me, or the best meat shop near me, your search ends here. We provide fresh chicken ghar pe delivery, so now you can easily buy chicken online or buy mutton online with absolute peace of mind. Ab ghar baithe mutton online order karo!
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white hover:bg-gray-50 shadow-sm p-8 rounded-3xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(239,68,68,0.15)] hover:border-red-500/40 flex flex-col">
            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 group-hover:bg-red-200 transition-all duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-4 tracking-wide group-hover:text-red-600 transition-colors duration-300">Wide Coverage</h3>
            <p className="text-black text-sm leading-loose">
              We specialize in raw chicken, fish, seafood and mutton home delivery in Noida, Greater Noida and Ghaziabad. No matter where you live, we ensure fast delivery meat (1 hour delivery), including fresh chicken delivery Noida in 1 hour and chicken delivery Noida. Our inventory features a premium range of chemical free chicken, antibiotic free chicken online, organic chicken online India, and organic chicken online Noida, NCR.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white hover:bg-gray-50 shadow-sm p-8 rounded-3xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(234,179,8,0.15)] hover:border-yellow-500/40 flex flex-col md:col-span-1 sm:col-span-2 col-span-1">
            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-6 text-yellow-600 group-hover:scale-110 group-hover:bg-yellow-200 transition-all duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-4 tracking-wide group-hover:text-yellow-600 transition-colors duration-300">100% Halal & Clean</h3>
            <p className="text-black text-sm leading-loose">
              If you love traditional tastes, try our raw desi chicken home delivery or place a desi chicken online order. For seafood lovers, we offer chicken and fish home delivery in Noida featuring fresh rohu fish and fresh cut chicken delivery. All our meat is processed in a 100% clean environment, guaranteeing halal chicken delivery and halal mutton delivery Noida COD. If you want a trusted raw chicken and mutton home delivery or goat meat delivery near me from the best chicken supplier near me, we are just a click away. Simply search for fresh meat delivery in Noida or chicken home delivery near me, check the product quality at your doorstep, and pay only after you are fully satisfied with our cheapest chicken delivery near me!
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Bhiryani;

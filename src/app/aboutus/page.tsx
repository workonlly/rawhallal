"use client";

import React from 'react';
import Footer from '../footer';
import MobileMenu from '../components/MobileMenu';


const AboutUs = () => {
  return (
    <>
      <MobileMenu />
      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
        
        {/* Header */}
        <header className="text-center mb-12 pb-6 border-b border-gray-200">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 italic">
            Small Scale, Big Promises. Always Fresh, Tender, and Juicy.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="mb-10 text-gray-800 leading-relaxed">
          <p className="mb-4">
            At <strong>Raw Halal Chicken</strong>, we take pride in being a small-scale business dedicated to providing fresh, tender, and juicy products. For the past four years, we have been bringing fresh raw chicken, mutton, and fish to your table. Our online store allows you to conveniently purchase 100% fresh, never-frozen meat and seafood.
          </p>
          <p>
            As a leading online company, we are committed to offering the finest quality. Our products are sourced from fresh slaughter and processed just a few hours before being delivered to your doorstep, ensuring hygiene and quality at every step.
          </p>
        </section>

        {/* How It Works Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-black pb-2 inline-block">
            How Your Order Reaches You
          </h2>
          <p className="text-gray-800 leading-relaxed">
            When you place an order with us, we guarantee a <strong>one-hour delivery</strong>. Our team ensures that the products are fresh and hygienically processed shortly before being handed over to our delivery executive.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-black pb-2 inline-block">
            The Benefits of Ordering From Us
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-100 border-l-4 border-black p-6 rounded-r-lg">
              <h3 className="font-bold text-black text-xl mb-2">Cash on Delivery (COD)</h3>
              <p className="text-gray-800">We offer COD to give you the freedom to inspect the quality and freshness of our products before you pay.</p>
            </div>
            <div className="bg-gray-100 border-l-4 border-black p-6 rounded-r-lg">
              <h3 className="font-bold text-black text-xl mb-2">Freshness Guarantee</h3>
              <p className="text-gray-800">If you ever receive a frozen product, complain to us immediately and return it. We prioritize delivering only fresh products and take prompt action to rectify any issues.</p>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="mb-10 md:flex md:gap-10 space-y-8 md:space-y-0">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-black pb-2 inline-block">Our Vision</h2>
            <p className="text-gray-800 leading-relaxed">To provide ever-fresh, high-quality, and healthier options of chicken, mutton, and fish through sustainable practices. We aim to become a trusted brand known for quality and safety.</p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-black pb-2 inline-block">Our Mission</h2>
            <p className="text-gray-800 leading-relaxed">To expand our product range and delivery zones to ensure quick delivery and superior customer service, helping our customers live a healthier lifestyle.</p>
          </div>
        </section>

        {/* Footer / Final Promise */}
        <footer className="text-center mt-12 pt-8 pb-6 bg-black text-white rounded-lg">
          <h2 className="text-3xl font-bold tracking-wider uppercase text-white mb-4">
            Delivering Our Promises
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            For over four years, we have been dedicated to bringing quality food to your table. If you are looking for the best online meat and fish experience, Raw Halal Chicken is the right choice for you.
          </p>
        </footer>
         
      </div>
     
    </div>
     <Footer></Footer></>
  );
};

export default AboutUs;
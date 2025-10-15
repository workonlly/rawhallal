"use client";
import React from 'react';
import Footer from '../footer';
import MobileMenu from '../components/MobileMenu';

const PrivacyPolicy = () => {
  return (
    <>
      <MobileMenu />
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
        
        <header className="text-center mb-10 pb-6 border-b border-gray-200">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
            Privacy Policy
          </h1>
          <p className="text-md text-gray-500">
            Last Updated: July 19, 2025
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            We at <strong>Raw Halal Chicken</strong> ("we," "us," "our") are committed to protecting the privacy of everyone who visits our website. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">1. Information We Collect</h2>
          <p>
            To fulfill your orders and provide our services, we may collect the following personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Identification Information:</strong> Name, phone number, and email address.</li>
            <li><strong>Delivery Information:</strong> Physical address for order delivery.</li>
            <li><strong>Order Details:</strong> Information about the products you purchase from us.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">2. How We Use Your Information</h2>
          <p>
            Your personal information is used exclusively for internal purposes to ensure a smooth customer experience. These purposes include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Processing and delivering your orders.</li>
            <li>Communicating with you about your order status.</li>
            <li>Providing customer support.</li>
            <li>Improving our products and services.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">3. Information Sharing and Confidentiality</h2>
          <p>
            We take your privacy very seriously. We guarantee that your personal information will be kept completely confidential. We <strong>do not sell, trade, or share</strong> your personal information with any outside parties, third parties, or unaffiliated companies for any reason whatsoever.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">4. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your information from unauthorized access, alteration, or disclosure.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">5. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy, please do not hesitate to contact us.
          </p>
        </div>
       
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default PrivacyPolicy;
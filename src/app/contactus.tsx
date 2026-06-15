'use client';
import React from 'react';

function Contactus() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <div className="relative w-full bg-gray-50 py-16 md:py-24 overflow-hidden">
      
      {/* Decorative Background Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-100 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        
        {/* Header section */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Franchise <span className="text-red-600">Opportunities</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto md:text-lg">
            Join the Raw Halal Chicken family and start a profitable business with a trusted, rapidly growing brand.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* Form Section */}
          <div className="flex-1 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send an Inquiry</h3>
            <p className="text-gray-500 text-sm mb-8">Fill out the form below and our team will reach out to you shortly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-red-600 transition-colors">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe" 
                    className="w-full border border-gray-200 px-4 py-3.5 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:bg-white transition-all duration-300" 
                  />
                </div>
                
                {/* Email */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-red-600 transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com" 
                    className="w-full border border-gray-200 px-4 py-3.5 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:bg-white transition-all duration-300" 
                  />
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-red-600 transition-colors">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 98765 43210" 
                    className="w-full border border-gray-200 px-4 py-3.5 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:bg-white transition-all duration-300" 
                  />
                </div>

                {/* Location */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-red-600 transition-colors">City / Location</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Delhi NCR" 
                    className="w-full border border-gray-200 px-4 py-3.5 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:bg-white transition-all duration-300" 
                  />
                </div>
              </div>
              
              {/* Textarea */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-red-600 transition-colors">Tell us about your interest</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder="I am interested in opening a franchise because..." 
                  className="w-full border border-gray-200 px-4 py-3.5 rounded-xl bg-gray-50 text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:bg-white transition-all duration-300"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-red-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-red-600/20 hover:bg-red-700 hover:shadow-red-600/40 hover:-translate-y-0.5 transition-all duration-300 flex justify-center items-center gap-2"
              >
                Submit Inquiry
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Side Info Section */}
          <div className="w-full lg:w-[380px] flex flex-col gap-6">
            
            {/* Franchise Info Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="bg-red-100 p-2 rounded-lg text-red-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                Why Partner With Us?
              </h3>
              <ul className="space-y-4">
                {[
                  'Low Investment Opportunity',
                  'Proven Business Model',
                  'Training & Support provided',
                  'Extensive Marketing Assistance',
                  '100% Halal & Premium Quality'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-600">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Details</h3>
              <ul className="space-y-5 text-sm font-medium text-gray-600">
                <li className="flex items-center gap-4 group">
                  <div className="p-2.5 bg-gray-50 rounded-xl group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <a href="tel:+919911296615" className="hover:text-red-600 transition-colors">+91 99112 96615</a>
                </li>
                
                <li className="flex items-center gap-4 group">
                  <div className="p-2.5 bg-gray-50 rounded-xl group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <a href="mailto:rawhalalchicken@gmail.com" className="hover:text-red-600 transition-colors break-all">rawhalalchicken@gmail.com</a>
                </li>
                
                <li className="flex items-start gap-4 group">
                  <div className="p-2.5 bg-gray-50 rounded-xl group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div className="mt-1">
                    <span className="block text-gray-900">Delhi NCR, India</span>
                    <span className="text-xs text-gray-400 font-normal mt-1 block">Mon-Sat: 9:00 AM - 8:00 PM</span>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="http://api.whatsapp.com/send?phone=919911296615&text=Hi%20I%20am%20interested%20in%20franchise%20opportunity"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-4 py-3.5 rounded-xl hover:bg-[#1ebd5b] transition-all duration-300 text-sm font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src="/WhatsApp.svg.webp" alt="WhatsApp" className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
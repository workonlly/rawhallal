import React from 'react';

function Contactus() {
  return (
    <div className="h-[88%] bg-white/20 w-full  text-center overflow-auto rounded-sm scrollbar-custom">
      <div className="m-[20px] relative">
        <div className="p-[3px] backdrop-blur-md w-full rounded-xl shadow-xl flex flex-row justify-between relative gap-1 animated-bg">
          <div className="bg-black p-[10px] backdrop-blur-md w-full rounded-xl shadow-xl flex flex-row justify-between relative gap-1">
            <div className="w-[100%] bg-white/10 p-[10px] backdrop-blur-md rounded-sm p-[30px]"> 
              <section className="bg-black/20 backdrop-blur-md py-12 px-6 mt-3">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl text-white font-bold mb-2">Franchise Opportunities</h2>
                    <p className="text-gray-300 text-lg">Join the Raw Halal Chicken family</p>
                  </div>

                  <form className="flex flex-col md:flex-row gap-6 mb-8">
                    {/* Left Inputs */}
                    <div className="flex-1 space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border text-white border-white px-4 py-3 rounded bg-black/50 placeholder-gray-400 focus:outline-none focus:border-green-400"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border text-white border-white px-4 py-3 rounded bg-black/50 placeholder-gray-400 focus:outline-none focus:border-green-400"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full border text-white border-white px-4 py-3 rounded bg-black/50 placeholder-gray-400 focus:outline-none focus:border-green-400"
                      />
                      <input
                        type="text"
                        placeholder="City/Location"
                        className="w-full border text-white border-white px-4 py-3 rounded bg-black/50 placeholder-gray-400 focus:outline-none focus:border-green-400"
                      />
                    </div>

                    {/* Right Description */}
                    <div className="flex-1 space-y-4">
                      <textarea
                        placeholder="Tell us about your interest in franchising..."
                        rows={8}
                        className="w-full border border-white text-white px-4 py-3 rounded resize-none bg-black/50 placeholder-gray-400 focus:outline-none focus:border-green-400"
                      />
                      <button
                        type="submit"
                        className="w-full  text-white ring-2 ring-white px-6 py-3 rounded cursor-pointer hover:bg-white hover:text-black transition duration-300 font-semibold"
                      >
                        Send Franchise Inquiry
                      </button>
                    </div>
                  </form>
                </div>
              </section>

              {/* Contact Information Section */}
              <div className="flex flex-row justify-center text-white gap-4 p-4">
                {/* Franchise Info */}
                <div className="w-[100%] bg-white/10 p-[20px] backdrop-blur-md rounded-sm flex flex-col justify-center">
                  <div className="flex flex-col justify-center items-center gap-4">
                    <h3 className="text-2xl font-bold text-center">Franchise Information</h3>
                    <div className="flex flex-col items-start gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Low Investment Opportunity</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Proven Business Model</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Training & Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Marketing Assistance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Quality Products</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="w-[100%] bg-white/10 p-[20px] backdrop-blur-md rounded-sm flex flex-col justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                    <div className="flex flex-col gap-3 text-sm">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-green-400">📞</span>
                        <a href="tel:+919911296615" className="hover:text-green-400 transition">+91 99112 96615</a>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-green-400">📧</span>
                        <a href="mailto:rawhalalchicken@gmail.com" className="hover:text-green-400 transition">rawhalalchicken@gmail.com</a>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-green-400">📍</span>
                        <span>Delhi NCR, India</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 mt-4">
                        <span className="text-green-400">🕒</span>
                        <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2">
                <span className="text-white">fssai license Number:12723055001472</span>
              </div>
                    </div>
                    
                    {/* WhatsApp Button */}
                    <a
                      href="http://api.whatsapp.com/send?phone=919911296615&text=Hi%20I%20am%20interested%20in%20franchise%20opportunity"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-700 transition duration-300"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/WhatsApp.svg.webp"
                        alt="WhatsApp"
                        className="w-5 h-5"
                      />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;

'use client';
import React from 'react';

function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-black/50 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-gray-700">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400 tracking-wider">Contact Us</h1>
          <p className="text-lg text-gray-300 mt-2">We're here to help. Reach out to us anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-green-300 border-b-2 border-green-400 pb-2">Get in Touch</h2>
            
            <div className="flex items-center gap-4">
              <span className="text-green-400 text-2xl">📞</span>
              <div>
                <h3 className="font-bold">Phone</h3>
                <a href="tel:+919911296615" className="hover:text-green-400 transition">+91 99112 96615</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-green-400 text-2xl">📧</span>
              <div>
                <h3 className="font-bold">Email</h3>
                <a href="mailto:rawhalalchicken@gmail.com" className="hover:text-green-400 transition">rawhalalchicken@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-green-400 text-2xl">📍</span>
              <div>
                <h3 className="font-bold">Address</h3>
                <p>Delhi NCR, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-green-400 text-2xl">🕒</span>
              <div>
                <h3 className="font-bold">Hours</h3>
                <p>Mon-Sat: 9:00 AM - 8:00 PM</p>
              </div>
            </div>
             <div className="flex items-center gap-4">
                <span className="text-white">fssai license Number:12723055001472</span>
              </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-gray-800/60 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-300 mb-4">Send a Message</h2>
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Your Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mt-10 pt-6 border-t border-gray-700">
          <p className="text-xl text-white mb-4 font-semibold">Follow Us</p>
          <div className="flex flex-row justify-center items-center gap-6">
            <a href="https://www.instagram.com/rawhalalchicken.comm/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform duration-200">
              <img src="/images (1).jpeg" alt="Instagram" className="w-12 h-12 rounded-full object-cover shadow-lg" />
            </a>
            <a href="https://www.facebook.com/Rawhalalchicken.com0/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 transition-transform duration-200">
              <img src="/images (3).png" alt="Facebook" className="w-12 h-12 rounded-full object-cover shadow-lg" />
            </a>
            <a href="https://www.youtube.com/@rawhalalchicken" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:scale-110 transition-transform duration-200">
              <img src="/Youtube_logo.png" alt="YouTube" className="w-12 h-12 rounded-full object-cover shadow-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

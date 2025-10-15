'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', label: ' Home', icon: '🏠' },
    { href: '/chicken', label: ' Chicken', icon: '🍗' },
    { href: '/fish', label: ' Fish', icon: '🐟' },
    { href: '/mutton', label: ' Mutton', icon: '🐐' },
    { href: '/contact', label: ' Contact Us', icon: '🤝' },
    { href: '/bhiryani', label: ' Bhiryani', icon: '🍛' },
    { href: '/aboutus', label: 'ℹ About Us', icon: 'ℹ️' },
    { href: '/privacypolicy', label: ' Privacy Policy', icon: '🔒' },
    { href: '/termsandconditions', label: ' Terms & Conditions', icon: '📜' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gradient-to-r from-[#fb5607] to-[#ff006e] text-white p-3 rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-black border-r-2 border-[#14213d] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto p-4">
          {/* Logo */}
          <div className="animated-bg h-20 flex items-center justify-center font-bold rounded-xl text-white mb-4">
            <img src="/fdrd-removebg-preview-modified.png" alt="Logo" className="h-12 w-12 mr-2" />
            <span>Raw Chicken</span>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:bg-gradient-to-r from-[#fb5607] to-[#ff006e] text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

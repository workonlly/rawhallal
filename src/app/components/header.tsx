'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a slight shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm' 
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:px-8">
        
        {/* Logo Section */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
          <div className="relative overflow-hidden rounded-tl-xl rounded-br-xl border-2 border-red-600 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
            <img 
              src="/logo/logo.png" 
              alt="Raw Halal Chicken Logo" 
              className="h-10 object-contain p-0.5" 
            />
          </div>
        </a>

        {/* Right side interactions (Bag, User Profile, Mobile Menu Toggle) */}
        <div className="flex items-center md:order-2 space-x-2 md:space-x-4 rtl:space-x-reverse relative">
          
          {/* Shopping Bag Button */}
          <button 
            type="button" 
            className="text-gray-600 hover:text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-100 relative"
            aria-label="Shopping bag"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            {/* Notification badge */}
            <span className="absolute top-1 right-1 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-600 border-2 border-white rounded-full">
              2
            </span>
          </button>

          {/* User Profile Button */}
          <div className="relative">
            <button
              type="button"
              className="flex text-sm bg-gray-100 rounded-full focus:ring-4 focus:ring-red-100 transition-shadow duration-200 hover:shadow-md"
              id="user-menu-button"
              aria-expanded={isUserDropdownOpen}
              onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-9 h-9 rounded-full object-cover border-2 border-white" src="/docs/images/people/profile-picture-5.jpg" alt="user photo" />
            </button>

            {/* User Dropdown Menu */}
            {isUserDropdownOpen && (
              <div className="absolute top-12 right-0 z-50 bg-white border border-gray-100 rounded-xl shadow-xl w-56 mt-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <span className="block text-sm font-semibold text-gray-900">Joseph McFall</span>
                  <span className="block text-sm text-gray-500 truncate">name@flowbite.com</span>
                </div>
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="user-menu-button">
                  <li><a href="#" className="flex px-4 py-2 hover:bg-red-50 hover:text-red-600 transition-colors">Dashboard</a></li>
                  <li><a href="#" className="flex px-4 py-2 hover:bg-red-50 hover:text-red-600 transition-colors">Settings</a></li>
                  <li><a href="#" className="flex px-4 py-2 hover:bg-red-50 hover:text-red-600 transition-colors">Your Orders</a></li>
                  <li className="border-t border-gray-100 mt-1 pt-1">
                    <a href="#" className="flex px-4 py-2 hover:bg-red-50 hover:text-red-600 transition-colors font-medium">Sign out</a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
            aria-controls="navbar-user"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
              </svg>
            )}
          </button>
        </div>

        {/* Center Nav Links */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-user">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-2xl bg-gray-50 md:flex-row md:space-x-6 lg:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent shadow-sm md:shadow-none">
            
            {/* Nav Item Function to keep code clean */}
            {[
              { label: 'Home', href: '/' },
              { label: 'Chicken', href: '/chicken' },
              { label: 'Raw Fresh Fish', href: '/fish' },
              { label: 'Raw Fresh Mutton', href: '/mutton' },
              { label: 'Contact Us', href: '/contact' },
            ].map((item, idx) => {
              const isActive = pathname === item.href;
              return (
              <li key={idx}>
                <Link 
                  href={item.href} 
                  className={`block py-2 px-3 md:p-0 rounded-lg md:bg-transparent relative group transition-colors duration-200 ${
                    isActive 
                      ? 'text-red-600 bg-red-50 md:bg-transparent md:text-red-600' 
                      : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent hover:text-red-600'
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {/* Underline Hover Effect for Desktop */}
                  <span className={`hidden md:block absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`}></span>
                </Link>
              </li>
              );
            })}
            
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
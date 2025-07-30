import Link from 'next/link';
import { useActivePage } from '../store/ActivePageContext';

function scrollToSection(id: string) {
  if (typeof window !== 'undefined') {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

function MobileFooter() {
  let setActivePage: ((page: string) => void) | undefined;
  try {
    setActivePage = useActivePage().setActivePage;
  } catch {
    setActivePage = undefined;
  }

  return (
    <footer className="w-full bg-black py-6 shadow-inner">
      <div className="max-w-full mx-auto px-3">
        {/* Main Navigation Links */}
        <div className="flex flex-wrap justify-center gap-2 items-center mb-6">
          {setActivePage ? (
            <>
              <button
                className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800"
                onClick={() => setActivePage && setActivePage('home')}
              >
                🏠Home
              </button>
              
              <a
                href="#chick"
                className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800 cursor-pointer"
              >
                🍗Chicken
              </a>
              <a
                href="#fish"
                className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800 cursor-pointer"
              >
                🐟Fish
              </a>
              <a
                href="#mutton"
                className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800 cursor-pointer"
              >
                🐐Mutton
              </a>
              <button
                className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800"
                onClick={() => setActivePage && setActivePage('contact')}
              >
                🤝Contact us
              </button>
              <button
                className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800"
                onClick={() => setActivePage && setActivePage('bhiryani')}
              >
                🍚Bhiryani
              </button>
            </>
          ) : (
            <>
              <Link href="/rawfreshchickenandmutton" className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800">
                🏠Home
              </Link>
              <Link href="/rawfreshchickenandmutton/chicken" className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800">
                🍗Chicken
              </Link>
              <Link href="/rawfreshchickenandmutton/fish" className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800">
                🐟Fish
              </Link>
              <Link href="/rawfreshchickenandmutton/mutton" className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800">
                🐐Mutton
              </Link>
              <Link href="/rawfreshchickenandmutton/bhiryani" className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800">
                🍚Bhiryani
              </Link>
            </>
          )}
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-2 items-center mb-6">
          <Link href="/aboutus" className="bg-black text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition shadow hover:bg-gray-800">
            ABOUT US
          </Link>
          <Link href="/privacypolicy" className="bg-black text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition shadow hover:bg-gray-800">
            PRIVACY
          </Link>
          <Link href="/termsandconditions" className="bg-black text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition shadow hover:bg-gray-800">
            TERMS
          </Link>
        </div>

        {/* Contact Section */}
        <div className="w-full bg-white/10 p-4 backdrop-blur-md rounded-lg flex flex-row justify-center items-center mb-6">
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-green-400">📞</span>
                <a href="tel:+919911296615" className="hover:text-green-400 text-white transition">+91 99112 96615</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">📧</span>
                <a href="mailto:rawhalalchicken@gmail.com" className="hover:text-green-400 text-white transition">rawhalalchicken@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">📍</span>
                <span className="text-white">Delhi NCR, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">🕒</span>
                <span className="text-white">Mon-Sat: 9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white">fssai license Number:12723055001472</span>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <a
              href="http://api.whatsapp.com/send?phone=919911296615&text=Hi%20I%20am%20interested%20in%20franchise%20opportunity"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition duration-300 text-xs"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src="/WhatsApp.svg.webp"
                alt="WhatsApp"
                className="w-4 h-4"
              />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <p className="text-xl text-white mb-4 font-semibold">Social Media</p>
          <div className="flex flex-row justify-center items-center gap-4">
            <a 
              href="https://www.instagram.com/rawhalalchicken.comm/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img
                src="/images (1).jpeg"
                alt="Instagram"
                className="w-10 h-10 rounded-full object-cover shadow-lg"
              />
            </a>
            <a 
              href="https://www.facebook.com/Rawhalalchicken.com0/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img
                src="/images (3).png"
                alt="Facebook"
                className="w-10 h-10 rounded-full object-cover shadow-lg"
              />
            </a>
            <a 
              href="https://www.youtube.com/@rawhalalchicken" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img
                src="/Youtube_logo.png"
                alt="YouTube"
                className="w-10 h-10 rounded-full object-cover shadow-lg"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 pt-4 border-t border-gray-700">
          <p className="text-gray-400 text-xs">
            © LaCleo Corporate Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default MobileFooter; 
import Link from 'next/link';
import { useActivePage } from './store/ActivePageContext';

function scrollToSection(id: string) {
  if (typeof window !== 'undefined') {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

function Footer() {
  let setActivePage: ((page: string) => void) | undefined;
  try {
    setActivePage = useActivePage().setActivePage;
  } catch {
    setActivePage = undefined;
  }

  return (
    <footer className="w-full bg-black py-6 md:py-8 shadow-inner">
      <div className="max-w-6xl mx-auto px-3 md:px-4">
        {/* Main Navigation Links */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 items-center mb-6 md:mb-8">
          {setActivePage ? (
            <>
              <button
                className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-xl font-semibold transition shadow hover:bg-gray-800"
                onClick={() => setActivePage && setActivePage('home')}
              >
                Home
              </button>
              
              <a
                href="#chick"
                className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-xl font-semibold transition shadow hover:bg-gray-800 cursor-pointer"
              >
                → Chicken
              </a>
              <a
                href="#fish"
                className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-xl font-semibold transition shadow hover:bg-gray-800 cursor-pointer"
              >
                → Raw Fresh Fish
              </a>
              <a
                href="#mutton"
                className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-xl font-semibold transition shadow hover:bg-gray-800 cursor-pointer"
              >
                → Raw Fresh Mutton
              </a>
              <button
                className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-xl font-semibold transition shadow hover:bg-gray-800"
                onClick={() => setActivePage && setActivePage('contact')}
              >
                Contact us
              </button>
              <button
                className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-xl font-semibold transition shadow hover:bg-gray-800"
                onClick={() => setActivePage && setActivePage('bhiryani')}
              >
                Bhiryani
              </button>
            </>
          ) : (
            <>
              <Link href="/" className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-xl font-semibold transition shadow hover:bg-gray-800">
              🏠Home
              </Link>
              <a
                href="/chicken"
                className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-xl font-semibold transition shadow hover:bg-gray-800 cursor-pointer"
              >
                🍗Chicken
              </a>
              <a
                href="/fish"
                className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-xl font-semibold transition shadow hover:bg-gray-800 cursor-pointer"
              >
                🐟 Raw Fresh Fish
              </a>
              <a
                href="/mutton"
                className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-xl font-semibold transition shadow hover:bg-gray-800 cursor-pointer"
              >
                 🐐 Raw Fresh Mutton
              </a>
              <Link href="/contact" className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-xl font-semibold transition shadow hover:bg-gray-800">
              🤝Contact us
              </Link>
              <Link href="/bhiryani" className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-xl font-semibold transition shadow hover:bg-gray-800">
              🤝Bhiryani
              </Link>
            </>
          )}
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 items-center mb-6 md:mb-8">
          <Link href="/aboutus" className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-base rounded-xl font-semibold transition shadow hover:bg-gray-800">
            ABOUT US
          </Link>
          <Link href="/privacypolicy" className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-base rounded-xl font-semibold transition shadow hover:bg-gray-800">
            PRIVACY POLICY
          </Link>
          <Link href="/termsandconditions" className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-base rounded-xl font-semibold transition shadow hover:bg-gray-800">
            TERMS & CONDITIONS
          </Link>
        </div>

        {/* Contact Section */}
        <div className="w-full bg-white/10 p-4 md:p-6 backdrop-blur-md rounded-lg mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex flex-col md:flex-row gap-2 md:gap-3 text-xs md:text-sm w-full md:w-auto">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-green-400">📞</span>
                <a href="tel:+919911296615" className="hover:text-green-400 text-white transition">+91 99112 96615</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-green-400">📧</span>
                <a href="mailto:rawhalalchicken@gmail.com" className="hover:text-green-400 text-white transition break-all">rawhalalchicken@gmail.com</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-green-400">📍</span>
                <span className="text-white">Delhi NCR, India</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-green-400">🕒</span>
                <span className="text-white">Mon-Sat: 9-8 PM</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-white text-xs">FSSAI: 12723055001472</span>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <a
              href="http://api.whatsapp.com/send?phone=919911296615&text=Hi%20I%20am%20interested%20in%20franchise%20opportunity"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm w-full md:w-auto"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src="/WhatsApp.svg.webp"
                alt="WhatsApp"
                className="w-4 h-4 md:w-5 md:h-5"
              />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl text-white mb-4 md:mb-6 font-semibold">Social Media</p>
          <div className="flex flex-row justify-center items-center gap-4 md:gap-6">
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
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-lg"
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
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-lg"
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
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-lg"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-xs md:text-sm">
            © LaCleo Corporate Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

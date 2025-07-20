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
                🤝Franchise
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
              <Link href="/mobile" className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800">
                🏠Home
              </Link>
              <Link href="/mobile/chicken" className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800">
                🍗Chicken
              </Link>
              <Link href="/mobile/fish" className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800">
                🐟Fish
              </Link>
              <Link href="/mobile/mutton" className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800">
                🐐Mutton
              </Link>
              <Link href="/mobile/contact" className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800">
                🤝Franchise
              </Link>
              <Link href="/mobile/bhiryani" className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition shadow hover:bg-gray-800">
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
          <Link href="/terms&conditions" className="bg-black text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition shadow hover:bg-gray-800">
            TERMS
          </Link>
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
            © 2024 Raw Halal Chicken. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default MobileFooter; 
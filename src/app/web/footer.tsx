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

function Footer() {
  let setActivePage: ((page: string) => void) | undefined;
  try {
    setActivePage = useActivePage().setActivePage;
  } catch {
    setActivePage = undefined;
  }

  return (
    <footer className="w-full bg-black py-8 shadow-inner">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 items-center mb-8">
          {setActivePage ? (
            <>
              <button
                className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800"
                onClick={() => setActivePage && setActivePage('home')}
              >
                Home
              </button>
              
              <a
                href="#chick"
                className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800 cursor-pointer"
              >
                → Chicken
              </a>
              <a
                href="#fish"
                className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800 cursor-pointer"
              >
                → Raw Fresh Fish
              </a>
              <a
                href="#mutton"
                className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800 cursor-pointer"
              >
                → Raw Fresh Mutton
              </a>
              <button
                className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800"
                onClick={() => setActivePage && setActivePage('contact')}
              >
                Franchise Options
              </button>
              <button
                className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800"
                onClick={() => setActivePage && setActivePage('bhiryani')}
              >
                Bhiryani
              </button>
            </>
          ) : (
            <>
              <Link href="/web" className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800">
              🏠Home
              </Link>
              <a
                href="/web/chicken"
                className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800 cursor-pointer"
              >
                🍗Chicken
              </a>
              <a
                href="/web/fish"
                className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800 cursor-pointer"
              >
                🐟 Raw Fresh Fish
              </a>
              <a
                href="/web/mutton"
                className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800 cursor-pointer"
              >
                 🐐 Raw Fresh Mutton
              </a>
              <Link href="/web/contact" className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800">
              🤝Franchise Options
              </Link>
              <Link href="/web/bhiryani" className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800">
              🤝Bhiryani
              </Link>
            </>
          )}
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-4 items-center mb-8">
          <Link href="/aboutus" className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800">
            ABOUT US
          </Link>
          <Link href="/privacypolicy" className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800">
            PRIVACY POLICY
          </Link>
          <Link href="/terms&conditions" className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800">
            TERMS & CONDITIONS
          </Link>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <p className="text-3xl text-white mb-6 font-semibold">Social Media</p>
          <div className="flex flex-row justify-center items-center gap-6">
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
                className="w-12 h-12 rounded-full object-cover shadow-lg"
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
                className="w-12 h-12 rounded-full object-cover shadow-lg"
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
                className="w-12 h-12 rounded-full object-cover shadow-lg"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            © 2024 Raw Halal Chicken. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

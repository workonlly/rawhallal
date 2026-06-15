import Link from 'next/link';
import { useActivePage } from '../store/ActivePageContext';

function Footer() {
  let setActivePage: ((page: string) => void) | undefined;
  try {
    setActivePage = useActivePage().setActivePage;
  } catch {
    setActivePage = undefined;
  }

  const navLinks = [
    { label: 'Home', action: 'home', path: '/' },
    { label: 'Chicken', action: 'chick', path: '/chicken', hash: '#chick' },
    { label: 'Raw Fresh Fish', action: 'fish', path: '/fish', hash: '#fish' },
    { label: 'Raw Fresh Mutton', action: 'mutton', path: '/mutton', hash: '#mutton' },
    { label: 'Bhiryani', action: 'bhiryani', path: '/bhiryani' },
    { label: 'Contact Us', action: 'contact', path: '/contact' },
  ];

  return (
    <footer className="w-full bg-white text-gray-600 py-12 lg:py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                Raw Halal <span className="text-red-600">Chicken</span>
              </h2>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
                Delivering premium, fresh, and 100% halal certified meat right to your doorstep. Quality you can trust.
              </p>
            </div>
            
            <div className="flex gap-3 items-center">
              <a href="https://www.instagram.com/rawhalalchicken.comm/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 hover:bg-red-50 rounded-xl transition-all duration-300 group border border-gray-100">
                <img src="/images (1).jpeg" alt="Instagram" className="w-5 h-5 rounded object-cover group-hover:scale-105 transition-transform" />
              </a>
              <a href="https://www.facebook.com/Rawhalalchicken.com0/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 hover:bg-red-50 rounded-xl transition-all duration-300 group border border-gray-100">
                <img src="/images (3).png" alt="Facebook" className="w-5 h-5 rounded object-cover group-hover:scale-105 transition-transform" />
              </a>
              <a href="https://www.youtube.com/@rawhalalchicken" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 hover:bg-red-50 rounded-xl transition-all duration-300 group border border-gray-100">
                <img src="/Youtube_logo.png" alt="YouTube" className="w-5 h-5 rounded object-cover group-hover:scale-105 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-gray-900 text-xs font-bold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm flex flex-col items-start font-medium">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  {setActivePage ? (
                    link.hash ? (
                      <a href={link.hash} className="text-gray-600 hover:text-red-600 hover:translate-x-1 inline-block transition-all duration-200">
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => setActivePage && setActivePage(link.action)}
                        className="text-gray-600 hover:text-red-600 hover:translate-x-1 inline-block transition-all duration-200 text-left"
                      >
                        {link.label}
                      </button>
                    )
                  ) : (
                    <Link href={link.path} className="text-gray-600 hover:text-red-600 hover:translate-x-1 inline-block transition-all duration-200">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-gray-900 text-xs font-bold uppercase tracking-wider">Support</h3>
            <div className="flex flex-col space-y-3 text-sm font-medium">
              <Link href="/aboutus" className="text-gray-600 hover:text-red-600 hover:translate-x-1 inline-block transition-all duration-200">About Us</Link>
              <Link href="/privacypolicy" className="text-gray-600 hover:text-red-600 hover:translate-x-1 inline-block transition-all duration-200">Privacy Policy</Link>
              <Link href="/termsandconditions" className="text-gray-600 hover:text-red-600 hover:translate-x-1 inline-block transition-all duration-200">Terms & Conditions</Link>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-gray-900 text-xs font-bold uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+919911296615" className="text-gray-600 hover:text-gray-900 transition-colors">+91 99112 96615</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:rawhalalchicken@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors break-all">rawhalalchicken@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-gray-600">Delhi NCR, India</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-gray-100">
              <a
                href="http://api.whatsapp.com/send?phone=919911296615&text=Hi%20I%20am%20interested%20in%20franchise%20opportunity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-4 py-2.5 rounded-xl hover:bg-[#1ebd5b] transition-all duration-300 text-sm font-semibold shadow-sm hover:shadow-md"
              >
                <img src="/WhatsApp.svg.webp" alt="WhatsApp" className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-gray-400">
            © {new Date().getFullYear()} LaCleo Corporate Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs md:text-sm text-gray-400">
            <span>FSSAI: 12723055001472</span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span>Designed for Raw Halal Chicken</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
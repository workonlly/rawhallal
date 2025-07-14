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
    <footer className="w-full bg-black py-4 shadow-inner">
      <div className="flex flex-wrap justify-center gap-4 items-center">
        {setActivePage ? (
          <>
            <button
              className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800"
              onClick={() => setActivePage && setActivePage('home')}
            >
              Home
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800"
              onClick={() => setActivePage && setActivePage('fresh')}
            >
              Fresh Zone
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800"
              onClick={() => scrollToSection('chick')}
            >
              → Chicken
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800"
              onClick={() => scrollToSection('fish')}
            >
              → Raw Fresh Fish
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800"
              onClick={() => scrollToSection('mutton')}
            >
              → Raw Fresh Mutton
            </button>
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
              Home
            </Link>
            <Link href="/web/fresh" className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800">
              Fresh Zone
            </Link>
            <button
              className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800"
              onClick={() => scrollToSection('chick')}
            >
              → Chicken
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800"
              onClick={() => scrollToSection('fish')}
            >
              → Raw Fresh Fish
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800"
              onClick={() => scrollToSection('mutton')}
            >
              → Raw Fresh Mutton
            </button>
            <Link href="/web/contact" className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800">
              Franchise Options
            </Link>
            <Link href="/web/bhiryani" className="bg-black text-white px-4 py-2 rounded-xl font-semibold transition shadow hover:bg-gray-800">
              Bhiryani
            </Link>
          </>
        )}
      </div>
      <div>
        <p className='text-3xl text-center text-white'>social media</p>
      </div>
    </footer>
  );
}

export default Footer;

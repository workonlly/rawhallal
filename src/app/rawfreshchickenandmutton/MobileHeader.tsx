'use client';

import { useState } from 'react';

interface MobileHeaderProps {
  pageHeading: string;
}

export default function MobileHeader({ pageHeading }: MobileHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto sticky top-0 z-[100]">
      <div className="p-1 backdrop-blur-md w-full rounded-xl shadow-xl bg-black">
        <div className="bg-black p-3 backdrop-blur-md w-full rounded-xl shadow-xl flex flex-col md:flex-row justify-start gap-4 relative z-10">
          {/* Sidebar Menu */}
          <div className="w-full md:w-[20%] bg-red-700 p-2 backdrop-blur-md rounded-sm text-white z-30 relative flex flex-row p-3 justify-between items-center">
            <button
              className="text-3xl font-bold text-white p-2"
              onClick={() => setOpen(!open)}
            >
              {open ? '×' : '≡'}
            </button>
            {open && (
              <div className="absolute top-14 left-2 bg-black text-white p-4 rounded-lg shadow-lg z-80 w-[200px]">
                <ul className="flex flex-col gap-2 text-xl">
                  <li><a href="/rawfreshchickenandmutton/">🏠 Home</a></li>
                  <li><a href="/rawfreshchickenandmutton/chicken">🍗 Chicken</a></li>
                  <li><a href="/rawfreshchickenandmutton/fish">🐟 Fish</a></li>
                  <li><a href="/rawfreshchickenandmutton/mutton">🐐 Mutton</a></li>
                  <li><a href="/rawfreshchickenandmutton/bhiryani">🤝 Biryani</a></li>
                  <li><a href="/rawfreshchickenandmutton/contact">📞 Contact</a></li>
                </ul>
              </div>
            )}
            <div className=' text-xl font-bold text-white mr-auto'> {pageHeading}</div>
            <div className="w-[50px] h-[50px] bg-white rounded-tl-lg rounded-br-lg overflow-hidden box">
              <img src="/fdrd-removebg-preview-modified.png" alt="Logo" className="w-full h-full object-cover " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
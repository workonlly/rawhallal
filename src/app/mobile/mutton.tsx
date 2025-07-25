'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../store/productSlice';
import { useRouter } from 'next/navigation';
import supabase from '../../../supabase';
import { mutton } from '../data/api';

interface Product {
  id: number;
  maintext: string;
  sectext: string;
  price: number;
}

export default function Mutton() {
  const [muttonProducts, setMuttonProducts] = useState<Product[]>([]);
  const [muttonImages, setMuttonImages] = useState<Record<string, string[]>>({});
  const dispatch = useDispatch();
  const router = useRouter();

  // Function to create a URL-safe slug from items.maintext with reversible icons
  function toSlug(text: string) {
    return text
      .replace(/\s+/g, '_SPACE_') // Replace spaces with _SPACE_
      .replace(/[\/\\]/g, '_SLASH_') // Replace slashes with _SLASH_
      .replace(/[()]/g, '_PAREN_') // Replace parentheses with _PAREN_
      .replace(/[&]/g, '_AND_') // Replace & with _AND_
      .replace(/[#]/g, '_HASH_') // Replace # with _HASH_
      .replace(/[@]/g, '_AT_') // Replace @ with _AT_
      .replace(/[%]/g, '_PERCENT_') // Replace % with _PERCENT_
      .replace(/[+]/g, '_PLUS_') // Replace + with _PLUS_
      .replace(/[=]/g, '_EQUALS_') // Replace = with _EQUALS_
      .replace(/[?]/g, '_QUESTION_') // Replace ? with _QUESTION_
      .replace(/[!]/g, '_EXCLAMATION_') // Replace ! with _EXCLAMATION_
      .replace(/[$]/g, '_DOLLAR_') // Replace $ with _DOLLAR_
      .replace(/[*]/g, '_STAR_') // Replace * with _STAR_
      .replace(/[,]/g, '_COMMA_') // Replace , with _COMMA_
      .replace(/[.]/g, '_DOT_') // Replace . with _DOT_
      .replace(/[:]/g, '_COLON_') // Replace : with _COLON_
      .replace(/[;]/g, '_SEMICOLON_'); // Replace ; with _SEMICOLON_
  }

  // Fetch mutton products and images
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('mutton').select('*');
      if (error) console.error('Error:', error);
      else setMuttonProducts(data as Product[]);
    };
    fetchProducts();
    mutton().then(setMuttonImages);
  }, []);

  return (
    <div className="w-full">
      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-4">
        {muttonProducts.map((items) => {
          const folderName = String(items.id);
          const urls = muttonImages[folderName] || [];
          return (
            <div 
              key={items.id}
              className="bg-white p-3 rounded-xl shadow flex flex-col items-center border border-green-100 min-h-[300px] max-h-[450px] mx-2"
              onClick={() => {
                dispatch(setSelectedProduct({
                  id: items.id,
                  table: 'mutton',
                  maintext: items.maintext,
                  sectext: items.sectext,
                  price: items.price,
                  image: urls,
                }));
                const slug = toSlug(items.maintext);
                router.push(`/open/${slug}`); // Use custom slug
              }}
            >
              <div className="w-full flex justify-center items-center mb-2">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  modules={[Autoplay]}
                  style={{ width: '100%', maxWidth: 220, minHeight: 100, maxHeight: 140 }}
                >
                  {urls.length > 0 ? (
                    urls.map((url) => (
                      <SwiperSlide key={url}>
                        <img
                          src={url}
                          alt={folderName}
                          className="w-full h-[100px] object-contain rounded border border-green-100 bg-white shadow"
                        />
                      </SwiperSlide>
                    ))
                  ) : (
                    <SwiperSlide>
                      <div className="flex items-center justify-center h-[100px] text-gray-400">No images</div>
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
              <div className="w-full text-base font-bold text-black text-center mb-1 truncate">{items.maintext}</div>
              <div className="text-xs text-gray-700 text-center px-2 mb-2 line-clamp-2 w-full">{items.sectext}</div>
              <div className="w-full flex flex-col items-center">
                <div className="text-base font-bold text-green-700 mb-2">₹{items.price}</div>
                <a
                  href="http://api.whatsapp.com/send?phone=919911296615&text=Hi%20I%20Want%20To%20Order"
                  className="w-full h-[40px] rounded-lg bg-green-500 text-white font-bold flex justify-center items-center hover:bg-green-600 transition-all duration-200 shadow"
                  target="_blank" rel="noopener noreferrer"
                >
                  Order via WhatsApp
                  <img
                    src="/WhatsApp.svg.webp"
                    alt="whatsapp"
                    className="h-[18px] ml-2"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 
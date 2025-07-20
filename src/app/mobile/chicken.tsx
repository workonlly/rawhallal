'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../store/productSlice';
import { useRouter } from 'next/navigation';
import supabase from '../../../supabase';
import { chicken } from '../data/api';

interface Product {
  id: number;
  maintext: string;
  sectext: string;
  price: number;
}

export default function Chicken() {
  const [chickenProducts, setChickenProducts] = useState<Product[]>([]);
  const [chickenImages, setChickenImages] = useState<Record<string, string[]>>({});
  const dispatch = useDispatch();
  const router = useRouter();

  // Fetch chicken products and images
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('chicken').select('*');
      if (error) console.error('Error:', error);
      else setChickenProducts(data as Product[]);
    };
    fetchProducts();
    chicken().then(setChickenImages);
  }, []);

  return (
    <div className="w-full">
      {/* Video Section */}
      <div className="mb-8">
        <div className="text-2xl font-bold text-white mb-4 text-center">Watch Our Video</div>
        <div className="w-full max-w-md mx-auto aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-green-200 bg-black">
          <iframe
            src="https://www.youtube.com/embed/9F4W-m0gwVw"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            style={{ minHeight: '180px', border: 'none' }}
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-4">
        {chickenProducts.map((items) => {
          const folderName = String(items.id);
          const urls = chickenImages[folderName] || [];
          return (
            <div 
              key={items.id}
              className="bg-white p-3 rounded-xl shadow flex flex-col items-center border border-green-100 min-h-[300px] max-h-[450px] mx-2"
              onClick={() => {
                dispatch(setSelectedProduct({
                  id: items.id,
                  table: 'chicken',
                  maintext: items.maintext,
                  sectext: items.sectext,
                  price: items.price,
                  image: urls,
                }));
                router.push('/open');
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
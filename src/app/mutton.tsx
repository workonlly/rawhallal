'use client';
import React, { use } from 'react'
import { useEffect, useState } from 'react'
import supabase from '../../supabase'
import { fish, chicken, mutton } from './data/api'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from './store/productSlice';
import { useRouter } from 'next/navigation';
import Footer from './components/footer';

interface Product {
  id: number;
  maintext: string;
  sectext: string;
  price: number;
}

// Function to create a URL-safe slug from items.maintext with reversible icons
function toSlug(text: string) {
  return text
    .replace(/\s+/g, '_SPACE_') // Replace spaces with _SPACE_
    .replace(/[\/\\]/g, '_SLASH_') // Replace slashes with _SLASH_
    .replace(/\(/g, '_LPAREN_') // Replace ( with _LPAREN_
    .replace(/\)/g, '_RPAREN_') // Replace ) with _RPAREN_
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


function Mutton() {
  const [muttonProducts, setMuttonProducts] = useState<Product[]>([]);
  const [muttonImages, setMuttonImages] = useState<Record<string, string[]>>({});
  const dispatch = useDispatch();
  const router = useRouter();


  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('mutton').select('*')
      if (error) console.error('Error:', error)
      else {
        setMuttonProducts(data as Product[])
      }
    }
    fetchProducts()
    mutton().then(setMuttonImages)
  }, [])


  return (
    <div className="h-[88%] bg-white/20 w-full text-center overflow-auto rounded-sm scrollbar-custom">
      <main id="mutton">
        <div className="text-2xl md:text-3xl font-bold text-white m-3 md:m-5">Fresh Mutton</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-3 md:m-10 mb-16">
          {
            muttonProducts.map((items) => {
              const folderName = String(items.id);
              const urls = muttonImages[folderName] || [];
              return (
                <div
                  key={items.id}
                  className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer relative"
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
                    router.push(`/${encodeURIComponent(slug)}`); // Navigate to [slug] page
                  }}
                >
                  {/* Product Image Carousel */}
                  <div className="w-full h-[220px] bg-gray-50 relative overflow-hidden border-b border-gray-50">
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      loop={urls.length > 1}
                      autoplay={{ delay: 2500, disableOnInteraction: false }}
                      modules={[Autoplay]}
                      className="w-full h-full"
                    >
                      {urls.length > 0 ? (
                        urls.map((url) => (
                          <SwiperSlide key={url}>
                            <img
                              src={url}
                              alt={items.maintext}
                              className="w-full h-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                            />
                          </SwiperSlide>
                        ))
                      ) : (
                        <SwiperSlide>
                          <div className="flex flex-col items-center justify-center h-full text-gray-400">
                            <svg className="w-10 h-10 mb-2 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm font-medium">No image available</span>
                          </div>
                        </SwiperSlide>
                      )}
                    </Swiper>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-red-600 transition-colors">
                      {items.maintext}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2 flex-1 min-h-[40px]">
                      {items.sectext}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider block mb-0.5">Price</span>
                        <span className="text-xl font-extrabold text-gray-900">₹{items.price}</span>
                      </div>
                    </div>

                    {/* WhatsApp Button */}
                    <div className="mt-4">
                      <a
                        href={`http://api.whatsapp.com/send?phone=919911296615&text=Hi%20I%20Want%20To%20Order%20${encodeURIComponent(items.maintext)}`}
                        onClick={(e) => e.stopPropagation()} 
                        className="w-full py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-bold flex justify-center items-center gap-2 hover:bg-[#1ebd5b] transition-all duration-300 shadow-sm hover:shadow-md"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <img src="/WhatsApp.svg.webp" alt="whatsapp" className="h-5 w-5" />
                        Order on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

      </main>
      <Footer />
    </div>
  )
}

export default Mutton;

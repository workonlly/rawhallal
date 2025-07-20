'use client';
import React, { use } from 'react'
import { useEffect, useState } from 'react'
import supabase  from '../../../supabase'
import{fish,chicken,mutton} from '../data/api'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../store/productSlice';
import { useRouter } from 'next/navigation';
import Footer from './footer';

interface Product {
  id: number;
  maintext: string;
  sectext: string;
  price:number;
  }

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
 
<div className="  h-[88%] bg-white/20 w-full   text-center overflow-auto rounded-sm scrollbar-custom  ">
                    <main id="mutton">
                        <div className="text-3xl font-bold text-white m-5 ">fresh mutton</div>
                       
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
                          {
                            muttonProducts.map((items) => {
                              const folderName = String(items.id);
                              const urls = muttonImages[folderName] || [];
                              return (
                                <div
                                  className="bg-white/80 backdrop-blur-md p-6 h-[85vh] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col justify-between hover:scale-105 transition-transform duration-300 hover:shadow-[0_12px_40px_rgba(34,197,94,0.3)] border border-green-100 cursor-pointer"
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
                                  <div className="space-y-4">
                                    <Swiper
                                      spaceBetween={10}
                                      slidesPerView={1}
                                      loop={true}
                                      autoplay={{ delay: 2500, disableOnInteraction: false }}
                                      modules={[Autoplay]}
                                      style={{ width: '100%', maxWidth: 260, minHeight: 140, maxHeight: 180 }}
                                    >
                                      {urls.length > 0 ? (
                                        urls.map((url) => (
                                          <SwiperSlide key={url}>
                                            <img
                                              src={url}
                                              alt={folderName}
                                              className="w-full h-[140px] object-contain rounded border border-green-100 bg-white shadow"
                                            />
                                          </SwiperSlide>
                                        ))
                                      ) : (
                                        <SwiperSlide>
                                          <div className="flex items-center justify-center h-[140px] text-gray-400">No images</div>
                                        </SwiperSlide>
                                      )}
                                    </Swiper>
                                    <div className="text-2xl font-bold text-black text-center">{items.maintext}</div>
                                    <div className="text-sm text-gray-700 text-center px-2 line-clamp-2">{items.sectext}</div>
                                  </div>
                                  <div className='mt-4'>
                                    <div className="text-xl font-bold text-center text-green-700 mt-2">₹{items.price}</div>
                                    <a
                                      href="http://api.whatsapp.com/send?phone=919911296615&text=Hi%20I%20Want%20To%20Order"
                                      className="mt-4 w-full h-[8vh] rounded-lg bg-green-500 text-white font-bold flex justify-center items-center hover:bg-green-600 transition-all duration-300 shadow-md"
                                      target="_blank" rel="noopener noreferrer"
                                    >
                                      Order via WhatsApp
                                                            <img
                        src="/WhatsApp.svg.webp"
                        alt="whatsapp"
                        className="h-[3vh] ml-2"
                      />
                                    </a>
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

import React, { use } from 'react'
import { useEffect, useState } from 'react'
import supabase  from '../../../supabase'
import{fish,chicken,mutton} from '../data/page'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface Product {
  id: number;
  maintext: string;
  sectext: string;
  price:number;
  }



function Fresh() {
  const [chickenProducts, setChickenProducts] = useState<Product[]>([]);
  const [fishProducts, setFishProducts] = useState<Product[]>([]);
  const [muttonProducts, setMuttonProducts] = useState<Product[]>([]);
  const [chickenImages, setChickenImages] = useState<Record<string, string[]>>({});
  const [fishImages, setFishImages] = useState<Record<string, string[]>>({});
  const [muttonImages, setMuttonImages] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('chicken').select('*')
      if (error) console.error('Error:', error)
      else {
        setChickenProducts(data as Product[])
      }
    }
    fetchProducts()
    chicken().then(setChickenImages)
  }, [])
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('fish').select('*')
      if (error) console.error('Error:', error)
      else {
        setFishProducts(data as Product[])
      }
    }
    fetchProducts()
    fish().then(setFishImages)
  }, [])
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
    <div className="  h-[88%] bg-white/20 w-full mt-11  text-center overflow-auto rounded-sm scrollbar-custom  ">
                    <main id="chick">
                        <div className="text-3xl font-bold text-white m-5 ">CHICKEN </div>
                        <div className="rounded-md   flex items-center justify-center"> <iframe src="https://youtu.be/9F4W-m0gwVw?si=JDZkceGUFTWhJLvK"  width="560" height="315" ></iframe></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
                          {
                            chickenProducts.map((items) => {
                              const folderName = String(items.id);
                              const urls = chickenImages[folderName] || [];
                              return (
                                <div className="bg-white/80 backdrop-blur-md p-6 h-[80vh] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col justify-between hover:scale-105 transition-transform duration-300 hover:shadow-[0_12px_40px_rgba(34,197,94,0.3)] border border-green-100">
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
                                      href="#"
                                      className="mt-6 w-full h-[7vh] rounded-lg bg-green-500 text-white font-bold flex justify-center items-center hover:bg-green-600 transition-all duration-300 shadow-md"
                                    >
                                      Order via WhatsApp
                                      <img
                                        src="./WhatsApp.svg.webp"
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


                    <main id="fish">
                        <div className="text-3xl font-bold text-white m-5 ">Fresh fish </div>
                        <div className="rounded-md   flex items-center justify-center"> <iframe src="https://youtu.be/9F4W-m0gwVw?si=JDZkceGUFTWhJLvK"  width="560" height="315" ></iframe></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
                          {
                            fishProducts.map((items) => {
                              const folderName = String(items.id);
                              const urls = fishImages[folderName] || [];
                              return (
                                <div className="bg-white/80 backdrop-blur-md p-6 h-[80vh] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col justify-between hover:scale-105 transition-transform duration-300 hover:shadow-[0_12px_40px_rgba(34,197,94,0.3)] border border-green-100">
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
                                      href="#"
                                      className="mt-6 w-full h-[7vh] rounded-lg bg-green-500 text-white font-bold flex justify-center items-center hover:bg-green-600 transition-all duration-300 shadow-md"
                                    >
                                      Order via WhatsApp
                                      <img
                                        src="./WhatsApp.svg.webp"
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


                    <main id="mutton">
                        <div className="text-3xl font-bold text-white m-5 ">fresh mutton</div>
                        <div className="rounded-md   flex items-center justify-center"> <iframe src="https://youtu.be/9F4W-m0gwVw?si=JDZkceGUFTWhJLvK"  width="560" height="315" ></iframe></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
                          {
                            muttonProducts.map((items) => {
                              const folderName = String(items.id);
                              const urls = muttonImages[folderName] || [];
                              return (
                                <div className="bg-white/80 backdrop-blur-md p-6 h-[80vh] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col justify-between hover:scale-105 transition-transform duration-300 hover:shadow-[0_12px_40px_rgba(34,197,94,0.3)] border border-green-100">
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
                                      href="#"
                                      className="mt-6 w-full h-[7vh] rounded-lg bg-green-500 text-white font-bold flex justify-center items-center hover:bg-green-600 transition-all duration-300 shadow-md"
                                    >
                                      Order via WhatsApp
                                      <img
                                        src="./WhatsApp.svg.webp"
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
    </div>   
  )
}

export default Fresh;

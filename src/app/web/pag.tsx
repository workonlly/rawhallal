'use client';
import { useEffect, useState } from 'react'
import supabase  from '../../../supabase'
import { fresh } from '../data/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../store/productSlice'; // Corrected path
import { useRouter } from 'next/navigation';
import { SelectedProduct } from '../store/types';

interface Product {
  id: number;
  maintext: string;
  sectext: string;
  price:number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [folderMap, setFolderMap] = useState<Record<string, string[]>>({});
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('fresh1').select('*')
      if (error) console.error('Error:', error)
      else setProducts(data as Product[])
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchFolders = async () => {
      const data = await fresh();
      setFolderMap(data);
    };
    fetchFolders();
  }, []);


  

  return (
    <div className="  h-[88%] bg-white/20 w-full mt-11  text-center overflow-auto rounded-sm scrollbar-custom  ">
      <main className="">
      
        <div className="swiper mt-5">
          {/* Swiper for all images from all folders */}
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            modules={[Autoplay]}
            style={{ width: '100%', height: '320px', maxWidth: 900, margin: '0 auto' }}
          >
            {Object.values(folderMap).flat().map((url, idx) => (
              <SwiperSlide key={url + idx}>
                <img
                  src={url}
                  alt="All images"
                  style={{
                    width: '100%',
                    height: '320px',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    background: '#f3f3f3',
                    display: 'block',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text-3xl font-bold text-white m-5 ">Features</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-5">
          {products.map((product) => {
            const folderName = String(product.id);
            const urls = folderMap[folderName] || [];
            return (
              <div
                key={product.id}
                className="bg-white/90 p-4 rounded-2xl shadow-lg flex flex-col items-center justify-between border border-green-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl min-h-[480px] max-h-[540px] h-full cursor-pointer"
                style={{ boxSizing: 'border-box' }}
                onClick={() => {
                  dispatch(setSelectedProduct({
                    id: product.id,
                    table: 'chicken', // Change as needed for other product types
                    maintext: product.maintext,
                    sectext: product.sectext,
                    price: product.price,
                    image: urls,
                  } as SelectedProduct));
                  router.push('/open');
                }}
              >
                <div className="w-full flex justify-center items-center mb-3">
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
                </div>
                <div className="flex-1 flex flex-col justify-center w-full">
                  <div className="text-xl font-bold text-black text-center mb-1 truncate w-full">{product.maintext}</div>
                  <div className="text-sm text-gray-700 text-center px-2 mb-2 line-clamp-2 w-full">{product.sectext}</div>
                </div>
                <div className="w-full mt-2 flex flex-col items-center">
                  <div className="text-lg font-bold text-green-700 mb-2">₹{product.price}</div>
                  <a
                    href="http://api.whatsapp.com/send?phone=919911296615&text=Hi%20I%20Want%20To%20Order"
                    className="w-full h-[44px] rounded-lg bg-green-500 text-white font-bold flex justify-center items-center hover:bg-green-600 transition-all duration-300 shadow-md"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Order via WhatsApp
                    <img
                      src="./WhatsApp.svg.webp"
                      alt="whatsapp"
                      className="h-[22px] ml-2"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}


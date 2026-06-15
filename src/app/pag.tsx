'use client';
import { useEffect, useState } from 'react';
import supabase from '../../supabase';
import { fresh } from './data/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from './store/productSlice';
import { addItem } from './store/cartSlice';
import { useRouter } from 'next/navigation';
import { SelectedProduct } from './store/types';
import Direct from './components/direct';
import Categories from './components/categories';

interface Product {
  id: number;
  maintext: string;
  sectext: string;
  price: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [folderMap, setFolderMap] = useState<Record<string, string[]>>({});
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('fresh1').select('*');
      if (error) console.error('Error:', error);
      else setProducts(data as Product[]);
    };
    fetchProducts();
    fresh().then(setFolderMap);
  }, []);

  // Function to create a URL-safe slug
  function toSlug(text: string) {
    return text
      .replace(/\s+/g, '_SPACE_')
      .replace(/[\/\\]/g, '_SLASH_')
      .replace(/[()]/g, '_PAREN_')
      .replace(/[&]/g, '_AND_')
      .replace(/[#]/g, '_HASH_')
      .replace(/[@]/g, '_AT_')
      .replace(/[%]/g, '_PERCENT_')
      .replace(/[+]/g, '_PLUS_')
      .replace(/[=]/g, '_EQUALS_')
      .replace(/[?]/g, '_QUESTION_')
      .replace(/[!]/g, '_EXCLAMATION_')
      .replace(/[$]/g, '_DOLLAR_')
      .replace(/[*]/g, '_STAR_')
      .replace(/[,]/g, '_COMMA_')
      .replace(/[.]/g, '_DOT_')
      .replace(/[:]/g, '_COLON_')
      .replace(/[;]/g, '_SEMICOLON_');
  }

  // Get all images for the top banner
  const allImages = Object.values(folderMap).flat();

  return (
    <div className="bg-gray-50 min-h-screen w-full pb-12 pt-20">
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6">
        
        {/* Top Hero Banner */}
        {allImages.length > 0 && (
          <div className=" mb-12 rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-white relative group">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="w-full h-[250px] md:h-[400px]"
            >
              {allImages.map((url, idx) => (
                <SwiperSlide key={url + idx}>
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                    <img
                      src={url}
                      alt="Featured product"
                      className="w-full h-full object-cover md:object-contain"
                    />
                    {/* Subtle gradient overlay to make it look premium */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Categories Section */}
        <Categories />

        {/* Features Header */}
        <div className="mt-16 mb-8 text-center md:text-left flex items-center gap-4">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Featured <span className="text-red-600">Products</span>
          </h2>
          <div className="hidden md:block h-px bg-gray-200 flex-1"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {products.map((product) => {
            const folderName = String(product.id);
            const urls = folderMap[folderName] || [];
            
            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer relative"
                onClick={() => {
                  dispatch(setSelectedProduct({
                    id: product.id,
                    table: 'fresh',
                    maintext: product.maintext,
                    sectext: product.sectext,
                    price: product.price,
                    image: urls,
                  } as SelectedProduct));
                  const slug = toSlug(product.maintext);
                  router.push(`/${encodeURIComponent(slug)}`);
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
                            alt={product.maintext}
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
                    {product.maintext}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2 flex-1 min-h-[40px]">
                    {product.sectext}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider block mb-0.5">Price</span>
                      <span className="text-xl font-extrabold text-gray-900">₹{product.price}</span>
                    </div>
                  </div>

                  {/* Action Buttons (Stops propagation so it doesn't trigger the card click route) */}
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(addItem({
                          id: String(product.id),
                          name: product.maintext,
                          price: product.price,
                          quantity: 1,
                          table: 'fresh',
                          image: urls.length > 0 ? urls[0] : undefined
                        }));
                      }}
                      className="flex-1 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-bold flex justify-center items-center gap-2 hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add to Cart
                    </button>
                    <a
                      href={`http://api.whatsapp.com/send?phone=919911296615&text=Hi%20I%20Want%20To%20Order%20${encodeURIComponent(product.maintext)}`}
                      onClick={(e) => e.stopPropagation()} 
                      className="flex-1 py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-bold flex justify-center items-center gap-2 hover:bg-[#1ebd5b] transition-all duration-300 shadow-sm hover:shadow-md"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <img src="/WhatsApp.svg.webp" alt="whatsapp" className="h-5 w-5" />
                      WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Direct CTA Component */}
        <Direct />
        
      </main>
    </div>
  );
}
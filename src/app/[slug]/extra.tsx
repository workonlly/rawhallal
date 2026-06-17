'use client';
import { useSelector } from 'react-redux';
import { selectSelectedProduct } from '../store/productSlice';
import { SelectedProduct } from '../store/types';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
type ProductData = SelectedProduct & {
  heading?: string;
  metadata?: string;
  metakeywords?: string[];
  image?: string[];
};

type OpenPageProps = {
  productFromServer?: ProductData;
  slug?: string;
};

export default function OpenPage({ productFromServer }: OpenPageProps) {
  const productFromStore = useSelector(selectSelectedProduct) as ProductData | null;
  const product = productFromStore ?? productFromServer ?? null;
  const router = useRouter();
  const[more,setmore]=useState(false)

  if (!product) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center max-w-md w-full">
        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
        <p className="text-gray-500 mb-8">The item you are looking for does not exist or has been removed.</p>
        <button
          className="w-full py-3.5 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-300"
          onClick={() => router.back()}
        >
          Go Back to Menu
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 pt-20 md:pt-24 pb-4 md:pb-16 px-2 sm:px-6 relative overflow-hidden">
      
      {/* Decorative Background Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96  bg-red-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Back Button */}
        <button
          className="group flex items-center gap-2 text-gray-500 hover:text-red-600 font-medium mb-4 md:mb-8 text-sm md:text-base transition-colors duration-200"
          onClick={() => router.back()}
          aria-label="Go Back"
        >
          <div className="bg-white p-1.5 md:p-2 rounded-full shadow-sm border border-gray-100 group-hover:border-red-100 transition-colors">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          Back to Menu
        </button>

        {/* Product Container */}
        <div className="bg-white rounded-2xl md:rounded-[2rem] shadow-sm border border-gray-100 p-4 md:p-10 lg:p-12">
          <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-16">
            
            {/* Left Column: Images */}
            <div className="flex flex-col gap-2 md:gap-4">
              {product?.image && product.image.length > 0 ? (
                <>
                  {/* Main Large Image Slider */}
                  <div className="w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-gray-50 rounded-xl md:rounded-3xl border border-gray-100 overflow-hidden relative group">
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      loop={product.image.length > 1}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      pagination={{ clickable: true }}
                      modules={[Autoplay, Pagination]}
                      className="w-full h-full"
                    >
                      {product.image.map((url: string, idx: number) => (
                        <SwiperSlide key={idx}>
                          <div className="w-full h-full flex items-center justify-center p-3 md:p-6">
                            <img
                              src={url}
                              alt={`${product.maintext} - image ${idx + 1}`}
                              className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none z-10"></div>
                  </div>
                </>
              ) : (
                <div className="w-full aspect-square bg-gray-50 rounded-xl md:rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-gray-400">
                  <svg className="w-8 h-8 md:w-16 md:h-16 mb-2 md:mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium text-xs md:text-base">No Image</span>
                </div>
              )}
            </div>

            {/* Right Column: Product Details */}
            <div className="flex flex-col justify-center">
              
              {/* Category Badge */}
              <div className="mb-2 md:mb-4">
                <span className="inline-flex items-center  px-2 py-1 md:px-3.5 md:py-1.5 rounded-full bg-red-50 text-red-600 text-[10px] md:text-xs font-bold uppercase tracking-wider border border-red-100">
                  {product.table}
                </span>
              </div>
              
              {/* Title & Description */}
              <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-2 md:mb-4">
                {product.maintext}
              </h1>
              <div className="mb-4 md:mb-8">
                <p className={`text-xs sm:text-sm md:text-lg text-gray-500 leading-snug md:leading-relaxed ${more ? 'line-clamp-none' : 'line-clamp-4'} md:line-clamp-none`}>
                  {product.sectext} 
                </p>
                <button 
                  onClick={() => setmore(!more)} 
                  className="md:hidden text-red-500 font-bold text-xs mt-1"
                >
                  {more ? 'Show Less' : 'Show More'}
                </button>
              </div>

              {/* Price Tag */}
              <div className="flex items-end gap-2 md:gap-3 mb-4 md:mb-10 pb-4 md:pb-10 border-b border-gray-100">
                <span className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                  ₹{product.price}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 md:gap-4">
                <a
                  href={`http://api.whatsapp.com/send?phone=919911296615&text=Hi%20I%20Want%20To%20Order%20${encodeURIComponent(product.maintext)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 md:gap-3 w-full bg-[#25D366] text-white px-3 py-2.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl hover:bg-[#1ebd5b] transition-all duration-300 text-sm md:text-lg font-bold shadow-md shadow-green-900/20 hover:-translate-y-1"
                >
                  <img src="/WhatsApp.svg.webp" alt="WhatsApp" className="w-4 h-4 md:w-6 md:h-6" />
                  <span className="hidden sm:inline">Order via WhatsApp</span>
                  <span className="sm:hidden">Order</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-4 md:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4">
                {[
                  { title: '100% Halal', icon: 'M5 13l4 4L19 7' },
                  { title: 'Freshly Cut', icon: 'M14 5l7 7m0 0l-7 7m7-7H3' },
                  { title: 'Fast Delivery', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 md:gap-2">
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                      <svg className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                      </svg>
                    </div>
                    <span className="text-[10px] md:text-sm font-semibold text-gray-700 leading-tight">{feature.title}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
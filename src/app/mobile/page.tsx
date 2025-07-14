'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";

import '../globals.css';
import supabase from '../../../supabase';
import { fresh, chicken, fish, mutton } from '../data/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../store/productSlice'; // Corrected path
import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  maintext: string;
  sectext: string;
  price: number;
}

export default function MobileHome() {
  const [open, setOpen] = useState(false);
  const [features, setFeatures] = useState<Product[]>([]);
  const [folderMap, setFolderMap] = useState<Record<string, string[]>>({});
  const [chickenProducts, setChickenProducts] = useState<Product[]>([]);
  const [fishProducts, setFishProducts] = useState<Product[]>([]);
  const [muttonProducts, setMuttonProducts] = useState<Product[]>([]);
  const [chickenImages, setChickenImages] = useState<Record<string, string[]>>({});
  const [fishImages, setFishImages] = useState<Record<string, string[]>>({});
  const [muttonImages, setMuttonImages] = useState<Record<string, string[]>>({});

  const dispatch = useDispatch();
  const router = useRouter();

  // Fetch features (fresh1 table)
  useEffect(() => {
    const fetchFeatures = async () => {
      const { data, error } = await supabase.from('fresh1').select('*');
      if (error) console.error('Error:', error);
      else setFeatures(data as Product[]);
    };
    fetchFeatures();
    fresh().then(setFolderMap);
  }, []);

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

  // Fetch fish products and images
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('fish').select('*');
      if (error) console.error('Error:', error);
      else setFishProducts(data as Product[]);
    };
    fetchProducts();
    fish().then(setFishImages);
  }, []);

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
    <div className="animated-bg p-1 min-h-screen w-full relative">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/90 z-0 p-2" />
      {/* Centered black content wrapper */}
      <div className="relative z-50 flex flex-col items-center min-h-screen w-full">
        {/* Top Section: Home Navbar */}
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
                      <li><a href="/">🏠 Home</a></li>
                      <li><a href="#chicken">🍗 Chicken</a></li>
                      <li><a href="#fish">🐟 Fish</a></li>
                      <li><a href="#mutton">🐐 Mutton</a></li>
                      <li><a href="#contact">🤝 Franchise</a></li>
                      <li><a href="/bhryani">🤝 bhiryani</a></li>
                    </ul>
                  </div>
                )}
                <div className=' text-xl font-bold text-white mr-auto'> Home</div>
                <div className="w-[50px] h-[50px] bg-white rounded-tl-lg rounded-br-lg overflow-hidden box">
                  <img src="./fdrd-removebg-preview-modified.png" alt="Logo" className="w-full h-full object-cover " />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="w-full max-w-2xl mx-auto mt-4">
          {/* Features Section (pag.tsx) */}
          <div className="mb-8">
            <div className="text-2xl font-bold text-white mb-4 text-center">Features</div>
            <div className="w-full flex justify-center mb-4">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Autoplay]}
                style={{ width: '100%', height: '220px', maxWidth: 400, margin: '0 auto' }}
              >
                {Object.values(folderMap).flat().map((url, idx) => (
                  <SwiperSlide key={url + idx}>
                    <img
                      src={url}
                      alt="All images"
                      style={{
                        width: '100%',
                        height: '220px',
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
            <div className="grid grid-cols-1 gap-4">
              {features.map((product) => {
                const folderName = String(product.id);
                const urls = folderMap[folderName] || [];
                return (
                  <div
                    key={product.id}
                    className="bg-white p-3 rounded-xl shadow flex flex-col items-center border border-green-100 min-h-[270px] max-h-[420px] mx-2"
                    onClick={() => {
                      dispatch(setSelectedProduct({
                        id: product.id,
                        table: 'chicken', // Change as needed for other product types
                        maintext: product.maintext,
                        sectext: product.sectext,
                        price: product.price,
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
                    <div className="w-full text-base font-bold text-black text-center mb-1 truncate">{product.maintext}</div>
                    <div className="text-xs text-gray-700 text-center px-2 mb-2 line-clamp-2 w-full">{product.sectext}</div>
                    <div className="w-full flex flex-col items-center">
                      <div className="text-base font-bold text-green-700 mb-2">₹{product.price}</div>
                      <a
                        href="http://api.whatsapp.com/send?phone=919911296615&text=Hi%20I%20Want%20To%20Order"
                        className="w-full h-[36px] rounded-lg bg-green-500 text-white font-bold flex justify-center items-center hover:bg-green-600 transition-all duration-200 shadow"
                        target="_blank" rel="noopener noreferrer"
                      >
                        Order via WhatsApp
                        <img
                          src="./WhatsApp.svg.webp"
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

          {/* Chicken Section */}
          <div className="mb-8">
            <div id='chicken' className="text-2xl font-bold text-white mb-4 text-center">Chicken</div>
            <div className="w-full flex flex-col items-center mb-4">
              <div className="text-lg font-semibold text-white mb-2">Watch Our Video</div>
              <div className="w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-green-200 bg-black">
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
            <div className="grid grid-cols-1 gap-4">
              {chickenProducts.map((items) => {
                const folderName = String(items.id);
                const urls = chickenImages[folderName] || [];
                return (
                  <div className="bg-white p-3 rounded-xl shadow flex flex-col items-center border border-green-100 min-h-[270px] max-h-[420px] mx-2"
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
                        className="w-full h-[36px] rounded-lg bg-green-500 text-white font-bold flex justify-center items-center hover:bg-green-600 transition-all duration-200 shadow"
                        target="_blank" rel="noopener noreferrer"
                      >
                        Order via WhatsApp
                        <img
                          src="./WhatsApp.svg.webp"
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

          {/* Fish Section */}
          <div id='fish' className="mb-8">
            <div className="text-2xl font-bold text-white mb-4 text-center">Fish</div>
            <div className="w-full flex flex-col items-center mb-4">
              <div className="text-lg font-semibold text-white mb-2">Watch Our Video</div>
              <div className="w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-green-200 bg-black">
                <iframe
                  src="https://www.youtube.com/embed/UhhBfux2JDM?si=uhYTV1J04PTi9o6s"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ minHeight: '180px', border: 'none' }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {fishProducts.map((items) => {
                const folderName = String(items.id);
                const urls = fishImages[folderName] || [];
                return (
                  <div className="bg-white p-3 rounded-xl shadow flex flex-col items-center border border-green-100 min-h-[270px] max-h-[420px] mx-2"
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
                        className="w-full h-[36px] rounded-lg bg-green-500 text-white font-bold flex justify-center items-center hover:bg-green-600 transition-all duration-200 shadow"
                        target="_blank" rel="noopener noreferrer"
                      >
                        Order via WhatsApp
                        <img
                          src="./WhatsApp.svg.webp"
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

          {/* Mutton Section */}
          <div id='mutton' className="mb-8">
            <div className="text-2xl font-bold text-white mb-4 text-center">Mutton</div>
            <div className="w-full flex flex-col items-center mb-4">
              
            </div>
            <div className="grid grid-cols-1 gap-4">
              {muttonProducts.map((items) => {
                const folderName = String(items.id);
                const urls = muttonImages[folderName] || [];
                return (
                  <div className="bg-white p-3 rounded-xl shadow flex flex-col items-center border border-green-100 min-h-[270px] max-h-[420px] mx-2"
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
                        className="w-full h-[36px] rounded-lg bg-green-500 text-white font-bold flex justify-center items-center hover:bg-green-600 transition-all duration-200 shadow"
                        target="_blank" rel="noopener noreferrer"
                      >
                        Order via WhatsApp
                        <img
                          src="./WhatsApp.svg.webp"
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
        </div>
      </div>
      {/* Contact Us Section */}
      <div id="contact" className="w-full max-w-2xl mx-auto mb-8">
        <div className="bg-black/80 backdrop-blur-md rounded-xl shadow-xl p-4 text-white">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">Send Us A Message</h2>
            <p className="text-gray-300 text-base">Quick Contact</p>
          </div>
          <form className="flex flex-col gap-4 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-white bg-transparent text-white px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-white bg-transparent text-white px-4 py-2 rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-white bg-transparent text-white px-4 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-white bg-transparent text-white px-4 py-2 rounded"
            />
            <textarea
              placeholder="Description"
              rows={4}
              className="w-full border border-white bg-transparent text-white px-4 py-2 rounded resize-none"
            />
            <input
              type="submit"
              value="Send Message"
              className="bg-white text-black px-6 py-2 rounded cursor-pointer hover:bg-black hover:text-white transition"
            />
          </form>
          <div className="flex flex-col gap-4 items-center">
            <div className="w-full bg-white/10 p-3 rounded-sm flex flex-col items-center">
              <p className='text-center text-xl font-bold mb-2'>Info</p>
              <div className='flex flex-col items-center gap-1 text-sm'>
                <a href="">FRANCHISEE OPPORTUNITY</a>
                <a href="">ABOUT US</a>
                <a href="">PRIVACY POLICY & TERM & CONDITIONS</a>
              </div>
            </div>
            <div className="w-full bg-white/10 p-3 rounded-sm flex flex-col items-center">
              <div className="text-xl text-center font-bold mb-2">Contact Us</div>
              {/* Add more contact details or links here if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

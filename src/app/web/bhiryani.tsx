'use client';
import React from 'react'
import { useEffect, useState } from 'react'

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



function Bhiryani() {
 


  return (
    <div className="h-[91%] bg-white/20 w-full text-center overflow-auto rounded-sm scrollbar-custom">
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        {/* Coming Soon Header */}
        <div className="text-6xl md:text-8xl mb-8">🍛</div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide">
          BIRYANI
        </h1>
        
        {/* Coming Soon Text */}
        <div className="text-2xl md:text-3xl font-semibold text-orange-300 mb-6">
          Coming Soon
        </div>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl text-center mb-8 leading-relaxed">
          Get ready for the most aromatic and flavorful biryani experience! 
          We're preparing something special for you with authentic spices and premium ingredients.
        </p>
        
        {/* Animated Loading Dots */}
        <div className="flex space-x-2 mb-8">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
        
        {/* Notify Button */}
        <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
          Notify Me When Available
        </button>
        
        {/* Features Preview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <div className="text-3xl mb-3">🌶️</div>
            <h3 className="text-white font-semibold mb-2">Authentic Spices</h3>
            <p className="text-white/70 text-sm">Traditional blend of aromatic spices</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <div className="text-3xl mb-3">🍚</div>
            <h3 className="text-white font-semibold mb-2">Premium Rice</h3>
            <p className="text-white/70 text-sm">Long grain basmati rice perfection</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <div className="text-3xl mb-3">🥘</div>
            <h3 className="text-white font-semibold mb-2">Fresh Ingredients</h3>
            <p className="text-white/70 text-sm">Farm fresh vegetables and tender meat</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>   
  )
 }

export default Bhiryani;

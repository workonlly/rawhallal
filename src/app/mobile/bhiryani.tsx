'use client';

import { useState, useEffect } from 'react';

export default function Biryani() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Mobile Coming Soon Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-orange-600 flex items-center justify-center overflow-hidden px-4">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-10 w-16 h-16 bg-yellow-300/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-10 w-24 h-24 bg-orange-300/15 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-red-300/25 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-orange-200/10 rounded-full animate-bounce"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center w-full max-w-sm mx-auto">
          {/* Large Biryani Emoji */}
          <div className="text-6xl mb-6 animate-bounce drop-shadow-2xl">🍚</div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-2xl">
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              BIRYANI
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-white">Coming Soon</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
            Experience the authentic taste of traditional biryani, crafted with love and premium ingredients
          </p>

          {/* Countdown Timer */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/30">
            <h2 className="text-2xl font-bold text-white mb-4">Launch Countdown</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-orange-500/50 to-red-600/50 rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
                <div className="text-white/80 text-sm">Days</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/50 to-red-600/50 rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-white/80 text-sm">Hours</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/50 to-red-600/50 rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-white/80 text-sm">Minutes</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/50 to-red-600/50 rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-white/80 text-sm">Seconds</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gradient-to-br from-orange-500/30 to-red-600/30 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:scale-105 transition-all duration-300 group">
              <div className="text-4xl mb-3 text-center group-hover:rotate-12 transition-transform duration-300">🌶️</div>
              <h3 className="text-sm font-bold text-white mb-2 text-center">Premium Spices</h3>
              <p className="text-white/80 text-xs text-center">Hand-picked spices</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/30 to-red-600/30 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:scale-105 transition-all duration-300 group">
              <div className="text-4xl mb-3 text-center group-hover:rotate-12 transition-transform duration-300">🍗</div>
              <h3 className="text-sm font-bold text-white mb-2 text-center">Fresh Meat</h3>
              <p className="text-white/80 text-xs text-center">Daily sourced halal meat</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/30 to-red-600/30 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:scale-105 transition-all duration-300 group">
              <div className="text-4xl mb-3 text-center group-hover:rotate-12 transition-transform duration-300">👨‍🍳</div>
              <h3 className="text-sm font-bold text-white mb-2 text-center">Expert Chefs</h3>
              <p className="text-white/80 text-xs text-center">Traditional recipes</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/30 to-red-600/30 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:scale-105 transition-all duration-300 group">
              <div className="text-4xl mb-3 text-center group-hover:rotate-12 transition-transform duration-300">🔥</div>
              <h3 className="text-sm font-bold text-white mb-2 text-center">Slow Cooked</h3>
              <p className="text-white/80 text-xs text-center">Authentic methods</p>
            </div>
          </div>

          {/* Progress Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 mb-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Development Progress</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-white text-sm">
                <span>Recipe Testing</span>
                <span className="font-bold text-green-300">✓ Complete</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div className="bg-green-400 h-3 rounded-full" style={{ width: '100%' }}></div>
              </div>
              
              <div className="flex justify-between text-white text-sm">
                <span>Kitchen Setup</span>
                <span className="font-bold text-yellow-300">85%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '85%' }}></div>
              </div>
              
              <div className="flex justify-between text-white text-sm">
                <span>Menu Finalization</span>
                <span className="font-bold text-orange-300">60%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div className="bg-orange-400 h-3 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 shadow-2xl">
            <div className="text-center">
              <div className="text-5xl mb-4 animate-bounce">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-3">Get Early Access!</h3>
              <p className="text-white/90 mb-6 text-sm">Be the first to taste our authentic biryani when we launch</p>
              <div className="flex flex-col gap-3">
                <a
                  href="http://api.whatsapp.com/send?phone=919911296615&text=Hi%20I%20want%20to%20be%20notified%20when%20biryani%20is%20available!"
                  className="w-full bg-white text-green-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 text-base text-center shadow-lg"
                  target="_blank" rel="noopener noreferrer"
                >
                  📱 WhatsApp Alert
                </a>
                <a
                  href="tel:919911296615"
                  className="w-full bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-green-600 transition-all duration-300 text-base text-center"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
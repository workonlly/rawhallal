import React from 'react';
import Link from 'next/link';

const Categories = () => {
  const categories = [
    {
      id: 'chicken',
      title: 'Premium Chicken',
      description: 'Farm-fresh, tender, and 100% halal certified chicken cuts.',
      image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=600', // Placeholder - replace with your actual image
      link: '/chicken',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      id: 'fish',
      title: 'Fresh Catch Fish',
      description: 'Daily caught, cleaned, and expertly cut to your preference.',
      image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80&w=600', // Placeholder - replace with your actual image
      link: '/fish',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'goat',
      title: 'Tender Mutton',
      description: 'Juicy, perfectly aged, and carefully selected goat cuts.',
     image: 'https://godavaricuts.com/cdn/shop/files/Godavari-Cuts-Day-1-_36-of-65_1.jpg?v=1682936866', // Placeholder - replace with your actual image
      link: '/mutton',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    }
  ];

  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Shop by <span className="text-red-600">Category</span>
        </h2>
        <p className="mt-2 text-gray-500">Select from our freshly sourced, halal-certified meats.</p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Image Wrapper */}
            <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              {/* Subtle gradient overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="p-5 md:p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  {category.title}
                </h3>
                {/* Decorative Pill */}
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${category.bgColor} ${category.color}`}>
                  Fresh
                </span>
              </div>
              
              <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                {category.description}
              </p>

              {/* Action Button */}
              <Link 
                href={category.link}
                className="w-full flex items-center justify-center gap-2 bg-gray-50 text-gray-900 font-semibold py-3 px-4 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300"
              >
                <span>Explore {category.title.split(' ')[1] || category.title}</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
          </div>
        ))}

      </div>
    </section>
  );
};

export default Categories;
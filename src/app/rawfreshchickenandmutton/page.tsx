import supabase from '../../../supabase';
import MobileHeader from './MobileHeader';
import MobileFooter from './MobileFooter';

export async function generateMetadata() {
  const { data, error } = await supabase
    .from('title')
    .select('*')
    .eq('id', 109) 
    .eq('table','mobile')
    .single();

  const product = {
    id: data?.id || 'title',
    name: data?.title || 'Mobile Home',
    description: data?.metadata || 'Raw Halal Chicken mobile experience.',
    keywords: Array.isArray(data?.metakeywords) ? data.metakeywords : ['raw', 'halal', 'chicken', 'mobile'],
    authorName: 'Raw Halal Chicken',
    imageUrl: '/fdrd-removebg-preview-modified.png',
    altImageUrl: '/fdrd-removebg-preview-modified.png',
  };

  return {
    title: product.name,
    description: product.description,
    keywords: product.keywords,
    publisher: 'Raw Halal Chicken',
    
    alternates: {
      canonical: `https://www.rawhalalchicken.com/rawfreshchickenandmutton`,
    },

    openGraph: {
      title: `${product.name} | Raw Halal Chicken`,
      description: product.description,
      url: `https://www.rawhalalchicken.com/rawfreshchickenandmutton`,
      siteName: 'Raw Halal Chicken',
      images: [
        {
          url: product.imageUrl,
          width: 1200,
          height: 630,
          alt: `An image of ${product.name}`,
        },
        {
          url: product.altImageUrl,
          width: 800,
          height: 600,
          alt: `A different view of ${product.name}`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Raw Halal Chicken`,
      description: product.description,
      creator: '@YourTwitterHandle',
      images: [product.imageUrl],
    },
    
    icons: {
      icon: '/fdrd-removebg-preview-modified.png',
      shortcut: '/fdrd-removebg-preview-modified.png',
      apple: '/fdrd-removebg-preview-modified.png',
    },
    manifest: '/site.webmanifest',
  };
}

import MobilePag from './pag';

export default async function MobileHome() {
  // Get the specific row by ID only
  const { data, error } = await supabase
    .from('title')
    .select('*')
    .eq('id', 111) 
    .single();

  const pageHeading = data?.heading || 'Fresh and halal chicken products';
  
  return (
    <div className="animated-bg p-1 min-h-screen w-full relative">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/90 z-0 p-2" />
      {/* Centered black content wrapper */}
      <div className="relative z-50 flex flex-col items-center min-h-screen w-full">
        {/* Top Section: Home Navbar */}
        <MobileHeader pageHeading={pageHeading} />
        
        {/* Main Content */}
        <div className="w-full max-w-2xl mx-auto mt-4 flex-1">
          <div className="h-full bg-white/20 w-full text-center overflow-auto rounded-sm scrollbar-custom">
            <MobilePag />
          </div>
        </div>
        
        {/* Footer */}
        <MobileFooter />
      </div>
    </div>
  );
}

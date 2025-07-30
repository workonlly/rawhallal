import supabase from "../../../../supabase";

export async function generateMetadata() {
  const { data, error } = await supabase
    .from('title')
    .select('*')
    .eq('id', 115) 
    .eq('table','bhiryani')
    .single();

  const product = {
    id: data?.id || 'title',
    name: data?.title || 'Biryani',
    description: data?.metadata || 'Authentic biryani coming soon from Raw Halal Chicken.',
    keywords: Array.isArray(data?.metakeywords) ? data.metakeywords : ['biryani', 'authentic', 'coming soon', 'halal'],
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
      canonical: `https://www.rawhalalchicken.com/rawfreshchickenandmutton/bhiryani`,
    },

    openGraph: {
      title: `${product.name} | Raw Halal Chicken`,
      description: product.description,
      url: `https://www.rawfreshchicken.com/rawfreshchickenandmutton/bhiryani`,
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

import Biryani from "../bhiryani";
import MobileHeader from "../MobileHeader";
export default async function PageContent() {
  const { data, error } = await supabase
    .from('title')
    .select('*')
    .eq('id', 115) 
    .single();

  const pageHeading = data?.heading || 'Authentic Biryani Coming Soon';

  return (
    <div className="animated-bg p-1  min-h-screen w-full relative">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/90 z-0 p-2" />
      {/* Centered black content wrapper */}
      <div className="relative z-50 flex flex-col items-center min-h-screen w-full">
        {/* Top Section: Home Navbar */}
        <MobileHeader pageHeading={pageHeading} />
        
        {/* Main Content */}
        <div className="w-full  max-w-2xl mx-auto mt-4">
          <Biryani />
        </div>
      </div>
    </div>
  );
} 
import supabase from "../../../../supabase";

export async function generateMetadata() {
  const { data, error } = await supabase
    .from('title')
    .select('*')
    .eq('id', 114) 
    .eq('table','fish')
    .single();

  const product = {
    id: data?.id || 'title',
    name: data?.title || 'Fresh Fish Products',
    description: data?.metadata || 'Fresh and halal fish products from Raw Halal Chicken.',
    keywords: Array.isArray(data?.metakeywords) ? data.metakeywords : ['fish', 'fresh', 'halal', 'products'],
    authorName: 'Raw Halal Chicken',
    imageUrl: '/fdrd-removebg-preview-modified.png',
    altImageUrl: '/fdrd-removebg-preview-modified.png',
  };

  return {
    // --- Basic SEO Metadata ---
    title: product.name,
    description: product.description,
    keywords: product.keywords,
    publisher: 'Raw Halal Chicken',
    
    // --- Canonical URL and Alternates ---
    alternates: {
      canonical: `https://www.rawhalalchicken.com/rawfreshchickenandmutton/fish`,
    },

    // --- Open Graph (for Facebook, LinkedIn, etc.) ---
    openGraph: {
      title: `${product.name} | Raw Halal Chicken`,
      description: product.description,
      url: `https://www.rawhalalchicken.com/rawfreshchickenandmutton/fish`,
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

    // --- Twitter Card ---
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Raw Halal Chicken`,
      description: product.description,
      creator: '@YourTwitterHandle',
      images: [product.imageUrl],
    },
    
    // --- Icons and Manifest ---
    icons: {
      icon: '/fdrd-removebg-preview-modified.png',
      shortcut: '/fdrd-removebg-preview-modified.png',
      apple: '/fdrd-removebg-preview-modified.png',
    },
    manifest: '/site.webmanifest',
  };
}

import Fish from "../fish";
import MobileHeader from "../MobileHeader";
import MobileRedirect from "../MobileRedirect";

export default async function PageContent() {
  // Get the specific row by ID only
  const { data, error } = await supabase
    .from('title')
    .select('*')
    .eq('id', 114) 
    .single();

  const pageHeading = data?.heading || 'Fresh Fish Products';

  return (
    <>
      <MobileRedirect />
      <div className="animated-bg p-1 min-h-screen w-full relative">
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/90 z-0 p-2" />
        {/* Centered black content wrapper */}
        <div className="relative z-50 flex flex-col items-center min-h-screen w-full">
          {/* Top Section: Home Navbar */}
          <MobileHeader pageHeading={pageHeading} />
          
          {/* Main Content */}
          <div className="w-full max-w-2xl mx-auto mt-4">
            <Fish />
          </div>
        </div>
      </div>
    </>
  );
} 
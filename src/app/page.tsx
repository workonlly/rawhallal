import supabase from "../../supabase";
import Heading from "./components/heading";

export async function generateMetadata() {


  const { data, error } = await supabase
    .from('title')
    .select('*')
    .eq('id', 111) 
    .eq('table','home')
    .single();


  const product = {
    id: data?.id || 'title',
    name: data?.title || 'Raw Halal Chicken - Fresh & Halal Products',
    description: data?.metadata || 'Fresh chicken and products from Raw Halal Chicken.',
    keywords: Array.isArray(data?.metakeywords) ? data.metakeywords : ['raw', 'chicken', 'fresh', 'halal'],
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
      canonical: `https://www.rawhalalchicken.com/products/${product.id}`,
    },

    // --- Open Graph (for Facebook, LinkedIn, etc.) ---
    openGraph: {
      title: `${product.name} | Raw Halal Chicken`,
      description: product.description,
      url: `https://www.rawhalalchicken.com/products/${product.id}`,
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

import Home from "./pag";
import MobileMenu from "./components/MobileMenu";

export default async function PageContent() {
  // Get the specific row by ID only
  const { data, error } = await supabase
    .from('title')
    .select('*')
    .eq('id', 111) 
    .single();

  const pageHeading = data?.heading || 'Fresh and halal chicken products';

  return (
    <div className=' h-full w-full'>
      <Heading int={111}></Heading>
             <div className="relative flex-1 min-h-0 overflow-auto">
              <Home />
             </div>
          
         
          </div>
  );
} 
import supabase from "../../../supabase";
import MobileMenu from "../components/MobileMenu";
import Heading from "../components/heading";

export async function generateMetadata() {


  const { data, error } = await supabase
    .from('title')
    .select('*')
    .eq('id', 112) 
    .eq('table','mutton')
    .single();


  const product = {
    id: data?.id || 'title',
    name: data?.title || 'Chicken',
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

import Mutton from "../mutton";
export default async function PageContent() {
  return (
    <div className='relative h-screen w-full'>
      <Heading int={112}></Heading>
      <Mutton></Mutton>
    </div>
  );
} 
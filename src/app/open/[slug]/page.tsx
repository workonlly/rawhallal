import React from 'react'
import OpenPage from './extra'
import supabase from "../../../../supabase";

// Function to reconstruct original text from slug
function fromSlug(slug: string) {
  let result = slug
    .replace(/_SPACE_/g, ' ') // Reconstruct spaces
    .replace(/_SLASH_/g, '/') // Reconstruct slashes
    .replace(/_AND_/g, '&') // Reconstruct &
    .replace(/_HASH_/g, '#') // Reconstruct #
    .replace(/_AT_/g, '@') // Reconstruct @
    .replace(/_PERCENT_/g, '%') // Reconstruct %
    .replace(/_PLUS_/g, '+') // Reconstruct +
    .replace(/_EQUALS_/g, '=') // Reconstruct =
    .replace(/_QUESTION_/g, '?') // Reconstruct ?
    .replace(/_EXCLAMATION_/g, '!') // Reconstruct !
    .replace(/_DOLLAR_/g, '$') // Reconstruct $
    .replace(/_STAR_/g, '*') // Reconstruct *
    .replace(/_COMMA_/g, ',') // Reconstruct ,
    .replace(/_DOT_/g, '.') // Reconstruct .
    .replace(/_COLON_/g, ':') // Reconstruct :
    .replace(/_SEMICOLON_/g, ';'); // Reconstruct ;
  
  // Handle parentheses - replace first _PAREN_ with ( and second with )
  let parenCount = 0;
  result = result.replace(/_PAREN_/g, () => {
    parenCount++;
    return parenCount === 1 ? '(' : ')';
  });
  
  return result;
}

// Function to search for product across all tables
async function searchProductBySlug(searchSlug: string) {
  const tables = ['fresh1', 'chicken', 'fish', 'mutton'];
  const originalText = fromSlug(searchSlug);
  
  for (const table of tables) {
    try {
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .eq('maintext', originalText)
        .single();
      
      if (error) {
        continue;
      }
      
      if (data) {
        return {
          ...data,
          table
        };
      }
    } catch (err) {
      // Silent error handling
    }
  }
  
  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  
  // Search for product by slug
  const product = await searchProductBySlug(slug);
  
  // Default metadata if product not found
  const defaultProduct = {
    id: 'product',
    name: decodedSlug || 'Product',
    description: 'Fresh products from Raw Halal Chicken.',
    keywords: ['raw', 'halal', 'chicken', 'fresh', 'products'],
    authorName: 'Raw Halal Chicken',
    imageUrl: '/fdrd-removebg-preview-modified.png',
    altImageUrl: '/fdrd-removebg-preview-modified.png',
  };

  // Use found product data or default
  const productData = product ? {
    id: product.id,
    name: product.title || product.maintext,
    description: product.metadata || 'Fresh products from Raw Halal Chicken.',
    keywords: Array.isArray(product.metakeywords) ? product.metakeywords : ['raw', 'halal', 'chicken', 'fresh', product.table || 'products'],
    authorName: 'Raw Halal Chicken',
    imageUrl: '/fdrd-removebg-preview-modified.png',
    altImageUrl: '/fdrd-removebg-preview-modified.png',
  } : defaultProduct;

  return {
    title: productData.name,
    description: productData.description,
    keywords: productData.keywords,
    publisher: 'Raw Halal Chicken',
    
    alternates: {
      canonical: `https://www.rawhalalchicken.com/open/${slug}`,
    },

    openGraph: {
      title: `${productData.name} | Raw Halal Chicken`,
      description: productData.description,
      url: `https://www.rawhalalchicken.com/open/${slug}`,
      siteName: 'Raw Halal Chicken',
      images: [
        {
          url: productData.imageUrl,
          width: 1200,
          height: 630,
          alt: `An image of ${productData.name}`,
        },
        {
          url: productData.altImageUrl,
          width: 800,
          height: 600,
          alt: `A different view of ${productData.name}`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: `${productData.name} | Raw Halal Chicken`,
      description: productData.description,
      creator: '@YourTwitterHandle',
      images: [productData.imageUrl],
    },
    
    icons: {
      icon: '/fdrd-removebg-preview-modified.png',
      shortcut: '/fdrd-removebg-preview-modified.png',
      apple: '/fdrd-removebg-preview-modified.png',
    },
    manifest: '/site.webmanifest',
  };
}

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Search for product by slug to get the heading
  const product = await searchProductBySlug(slug);
  const heading = product?.heading || product?.maintext || 'Product Details';

  return (
    <div>
      <div className="text-center bg-white py-4 text-2xl font-bold text-gray-800">
        {heading}
      </div>
      <OpenPage/>
    </div>
  )
}

export default page

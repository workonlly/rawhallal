import supabase from "../../../../supabase";

export async function generateMetadata() {
  const { data, error } = await supabase
    .from('title')
    .select('*')
    .eq('id', 116) 
    .eq('table','contact')
    .single();

  const product = {
    id: data?.id || 'title',
    name: data?.title || 'Contact Us',
    description: data?.metadata || 'Get in touch with Raw Halal Chicken for fresh and halal products.',
    keywords: Array.isArray(data?.metakeywords) ? data.metakeywords : ['contact', 'get in touch', 'halal', 'chicken'],
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
      canonical: `https://www.rawhalalchicken.com/rawfreshchickenandmutton/contact`,
    },

    // --- Open Graph (for Facebook, LinkedIn, etc.) ---
    openGraph: {
      title: `${product.name} | Raw Halal Chicken`,
      description: product.description,
      url: `https://www.rawhalalchicken.com/rawfreshchickenandmutton/contact`,
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

import React from 'react';
import ContactUs from '../contactus';
import MobileHeader from '../MobileHeader';
import MobileFooter from '../MobileFooter';
import MobileRedirect from '../MobileRedirect';
import { ActivePageProvider } from '../../store/ActivePageContext';

export default async function ContactPage() {
  return (
    <>
      <MobileRedirect />
      <ActivePageProvider>
        <main className="bg-black min-h-screen">
          <MobileHeader pageHeading="Contact Us" />
          <ContactUs />
          <MobileFooter />
        </main>
      </ActivePageProvider>
    </>
  );
}

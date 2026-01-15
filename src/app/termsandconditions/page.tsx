import React from 'react';
import Footer from '../footer';
import MobileMenu from '../components/MobileMenu';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Terms & Conditions - Raw Halal Chicken',
    description: 'Read the terms and conditions for using Raw Halal Chicken’s website and ordering fresh country/desi chicken, mutton, and fish for home delivery in Noida. Learn about your rights, responsibilities, and our policies.',
    keywords: [
      'terms and conditions',
      'terms of service',
      'Noida meat delivery',
      'country chicken terms',
      'mutton terms',
      'raw halal chicken',
      'online meat terms',
      'product offer terms',
    ],
    publisher: 'Raw Halal Chicken',
    alternates: {
      canonical: `https://rawhalal.com/termsandconditions`,
    },
    openGraph: {
      title: 'Terms & Conditions - Raw Halal Chicken',
      description: 'Review the terms and conditions for using Raw Halal Chicken’s website and ordering fresh meat in Noida.',
      url: `https://rawhalal.com/termsandconditions`,
      siteName: 'Raw Halal Chicken',
      images: [
        {
          url: '/fdrd-removebg-preview-modified.png',
          width: 1200,
          height: 630,
          alt: 'Terms & Conditions - Raw Halal Chicken',
        },
        {
          url: '/fdrd-removebg-preview-modified.png',
          width: 800,
          height: 600,
          alt: 'Terms & Conditions - Raw Halal Chicken',
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Terms & Conditions - Raw Halal Chicken',
      description: 'Read the terms and conditions for Raw Halal Chicken’s online meat delivery in Noida.',
      creator: '@YourTwitterHandle',
      images: ['/fdrd-removebg-preview-modified.png'],
    },
    icons: {
      icon: '/fdrd-removebg-preview-modified.png',
      shortcut: '/fdrd-removebg-preview-modified.png',
      apple: '/fdrd-removebg-preview-modified.png',
    },
    manifest: '/site.webmanifest',
  };
}

const TermsAndConditions = () => {
  return (
    <>
      <MobileMenu />
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
        
        <header className="text-center mb-10 pb-6 border-b border-gray-200">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
            Terms & Conditions
          </h1>
          <p className="text-md text-gray-500">
            Last Revised: July 18, 2025
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            This Terms of Service Agreement (the "<strong>Agreement</strong>") governs your use of this website, <strong>www.rawhalalchicken.com</strong> (the "<strong>Website</strong>"), and the offer of products for purchase on this Website by Raw Halal Chicken ("<strong>Business Name</strong>").
          </p>
          <p>
            If you do not agree to this Agreement (including any referenced policies or guidelines), please immediately terminate your use of the Website. This Agreement does not alter in any way the terms or conditions of any other written agreement you may have with Raw Halal Chicken for other products or services.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-10">I. TERMS OF AGREEMENT</h2>
          <p>
            Raw Halal Chicken reserves the right to change or revise the terms and conditions of this Agreement at any time by posting any changes or a revised Agreement on this Website. We will alert you that changes or revisions have been made by indicating the date it was last revised at the top of this Agreement. The changed or revised Agreement will be effective immediately after it is posted.
          </p>
          <p>
            Your use of the Website following the posting of any such changes will constitute your acceptance of those changes. We encourage you to review this Agreement whenever you visit the Website to ensure you understand the terms and conditions governing its use.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10">II. PRODUCTS</h2>
          <p>
            <strong>Terms of Offer.</strong> This Website offers for sale certain products (the "<strong>Products</strong>"). By placing an order for Products through this Website, you agree to the terms set forth in this Agreement.
          </p>
         
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default TermsAndConditions;
import React from 'react';
import Footer from '../footer';
import MobileMenu from '../components/MobileMenu';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Privacy Policy - Raw Halal Chicken',
    description: 'Read the privacy policy of Raw Halal Chicken. Learn how we collect, use, and protect your personal information when you order fresh country/desi chicken, mutton, and fish for home delivery in Noida.',
    keywords: [
      'privacy policy',
      'data protection',
      'personal information',
      'Noida meat delivery',
      'country chicken privacy',
      'mutton privacy',
      'raw halal chicken',
      'online meat privacy',
    ],
    publisher: 'Raw Halal Chicken',
    alternates: {
      canonical: `https://rawhalal.com/privacypolicy`,
    },
    openGraph: {
      title: 'Privacy Policy - Raw Halal Chicken',
      description: 'How Raw Halal Chicken collects, uses, and safeguards your personal information for home delivery of fresh meat in Noida.',
      url: `https://rawhalal.com/privacypolicy`,
      siteName: 'Raw Halal Chicken',
      images: [
        {
          url: '/fdrd-removebg-preview-modified.png',
          width: 1200,
          height: 630,
          alt: 'Privacy Policy - Raw Halal Chicken',
        },
        {
          url: '/fdrd-removebg-preview-modified.png',
          width: 800,
          height: 600,
          alt: 'Privacy Policy - Raw Halal Chicken',
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Privacy Policy - Raw Halal Chicken',
      description: 'Read how Raw Halal Chicken protects your privacy and personal data for online meat delivery in Noida.',
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

const PrivacyPolicy = () => {
  return (
    <>
      <MobileMenu />
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
        
        <header className="text-center mb-10 pb-6 border-b border-gray-200">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
            Privacy Policy
          </h1>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            At Raw Chicken, your privacy is important to us. Here's a quick look at how we handle your personal information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">1. What We Gather</h2>
          <p>
            When you place an order, we ask for some personal details: your name, phone number, email address, and where you'd like your order delivered. We also keep records of your purchases to ensure we can offer you the best possible service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">2. What We Do With Your Information</h2>
          <p>
            All your personal information is used exclusively for management and delivery of your order, its tracking, assistance with any inquiries and development of our service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">3. Privacy Policy</h2>
          <p>
            We do not share any private data or sell or otherwise transfer it to third parties.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">4. Data Security</h2>
          <p>
            Your information remains protected from any unauthorized uses and leaks.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">5. Contact Us</h2>
          <p>
            Feel free to contact us should you have any questions regarding our privacy policy.
          </p>
        </div>
       
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default PrivacyPolicy;
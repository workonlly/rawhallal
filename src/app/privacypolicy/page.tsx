import React from 'react';
import Footer from '../footer';
import MobileMenu from '../components/MobileMenu';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Privacy Policy - Raw Halal Chicken',
    description: 'Read how Raw Chicken collects, uses, protects, and handles your personal information when you place an order.',
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
      description: 'How Raw Chicken collects, uses, protects, and handles your personal information when you place an order.',
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
      description: 'Read how Raw Chicken collects, uses, and protects your personal information when you place an order.',
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
              Raw Chicken values your privacy.
            </p>

            <p>
              Here is a short consideration of information that we collect and how it is processed.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">What We Gather</h2>
            <p>
              When you place an order, we ask for some information about you: name, telephone number, e-mail address, as well as the address for your order. Also, there is information tracking concerning your acquisitions to ensure we can deliver to you the finest possible care.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">What We Do With Your Information</h2>
            <p>
              All the personal information you give is used exclusively for management and delivery of your order, its tracking, assistance with any questions and development of our service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">Privacy Policy</h2>
            <p>
              We do not share any private data or sell or otherwise transfer it to third parties.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">Data Security</h2>
            <p>
              All your information remains protected against any unauthorized uses and leaks.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">Contact Us</h2>
            <p>
              Should you have any questions about our privacy policy, please feel free to contact us.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
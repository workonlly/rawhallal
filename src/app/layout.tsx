import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from './store/Provider'; 
import Script from "next/script";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const schemaData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "FoodEstablishment"],
  "@id": "https://rawhalalchicken.com/#localbusiness",
  "name": "Raw Halal Chicken & Meat Home Delivery",
  "description": "Fresh halal chicken, mutton and fish home delivery in Noida, Greater Noida, Noida Extension, Gaur City and Delhi NCR.",
  "servesCuisine": "Halal",
  "image": "https://rawhalalchicken.com/images/logo.webp",
  "logo": {
    "@type": "ImageObject",
    "url": "https://rawhalalchicken.com/images/logo.webp"
  },
  "url": "https://rawhalalchicken.com",
  "telephone": "+919911296615",
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Credit Card, UPI",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "27, Shop Number 3, F Block, Fatehpur, Sector 50",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201303",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.5700",
    "longitude": "77.3662"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "10:00",
      "closes": "22:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Noida" },
    { "@type": "City", "name": "Greater Noida" },
    { "@type": "City", "name": "Greater Noida West" },
    { "@type": "City", "name": "Noida Extension" },
    { "@type": "City", "name": "Delhi" },
    { "@type": "City", "name": "Ghaziabad" },
    { "@type": "City", "name": "Gaur City" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Fresh Halal Meat Delivery",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Fresh Halal Chicken",
          "description": "Fresh never-frozen halal chicken home delivery in Noida and Delhi NCR."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Desi Chicken",
          "description": "Fresh desi chicken home delivery in Noida and Delhi NCR."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Fresh Halal Mutton",
          "description": "Fresh never-frozen halal mutton home delivery in Noida and Delhi NCR."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Fresh Fish",
          "description": "Fresh fish home delivery in Noida, Greater Noida and Delhi NCR."
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/rawhalalchicken",
    "https://www.instagram.com/rawhalalchicken",
    "https://g.page/YOUR_GOOGLE_BUSINESS_ID"
  ]
};

// 2. शुद्ध डोमेन वेरिफिकेशन मेटाडेटा
export const metadata: Metadata = {
  title: "Raw Halal Chicken & Meat Home Delivery",
  description: "Buy 100% Fresh Raw Halal Chicken, Mutton & Fish Online in Noida.",
  other: {
    "facebook-domain-verification": "ohquze0krklooq0r5eufurw4oky3b8",
    "p:domain_verify": "7402d4a3b47fbed3cfbdb0b8674cc9d3",
    "yandex-verification": "b1aec977ba6a26bf",
    "msvalidate.01": "9ADFE7C80958C9A5FC9EB422DAF1E1A7",
    "google-site-verification": "gMej0a7XTL3IsRLC_6OXtm9sP8Rl8TykZrkyxlxqOls",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://googletagmanager.com"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-36H4F1S7Y9');
          `}
        </Script>
        
        {/* 3. Next.js के लिए 100% परफेक्ट स्कीमा इंजेक्शन तरीका */}
        <Script
          id="structured-data-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://clarity.ms"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xb3o8h8rt7");
          `}
        </Script>

        <ReduxProvider>
           <Header />
           {children}
           <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
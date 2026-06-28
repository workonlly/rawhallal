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

// 1. एआई सर्च के लिए स्कीमा डेटा ऑब्जेक्ट
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'ButcherShop',
  'name': 'Raw Halal Chicken & Meat Home Delivery',
  'image': 'https://rawhalalchicken.com', 
  'url': 'https://rawhalalchicken.com',
  'telephone': '+919911296615',
  'priceRange': '₹₹',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '27, Shop Number 3, F Block, Fatehpur, Sector 50',
    'addressLocality': 'Noida',
    'addressRegion': 'Uttar Pradesh',
    'postalCode': '201303',
    'addressCountry': 'IN'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': '28.5700',  
    'longitude': '77.3662'  
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ],
    'opens': '10:00',
    'closes': '22:00'
  },
  'areaServed': [
    { '@type': 'AdministrativeArea', 'name': 'Noida' },
    { '@type': 'AdministrativeArea', 'name': 'Greater Noida' },
    { '@type': 'AdministrativeArea', 'name': 'Delhi NCR' }
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
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
  "@context": "https://schema.org",
  "@type": "ButcherShop",
  "name": "Raw Halal Chicken & Meat Home Delivery",
  "image": "https://rawhalalchicken.com",
  "logo": "https://rawhalalchicken.com",
  "url": "https://www.rawhalalchicken.com",
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
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "10:00",
    "closes": "22:00"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Noida" },
    { "@type": "AdministrativeArea", "name": "Greater Noida" },
    { "@type": "AdministrativeArea", "name": "Greater Noida West" },
    { "@type": "AdministrativeArea", "name": "Noida Extension" },
    { "@type": "AdministrativeArea", "name": "Delhi NCR" },
    { "@type": "AdministrativeArea", "name": "Gaur City" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 1" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 2" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 3" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 4" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 5" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 6" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 7" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 8" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 9" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 10" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 11" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 12" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 14" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 15" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 15A" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 16" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 16A" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 17" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 18" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 19" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 20" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 21" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 22" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 23" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 24" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 25" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 26" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 27" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 28" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 29" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 30" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 31" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 32" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 33" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 34" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 35" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 36" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 37" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 38" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 39" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 40" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 41" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 42" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 43" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 44" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 45" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 46" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 47" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 48" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 49" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 50" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 51" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 52" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 53" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 54" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 55" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 56" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 57" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 58" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 59" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 60" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 61" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 62" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 63" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 64" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 65" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 66" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 67" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 68" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 69" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 70" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 71" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 72" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 73" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 74" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 75" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 76" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 77" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 78" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 79" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 80" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 81" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 82" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 83" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 84" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 85" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 86" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 87" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 88" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 89" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 90" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 91" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 92" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 93" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 94" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 95" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 96" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 97" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 98" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 99" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 100" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 101" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 102" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 103" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 104" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 105" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 106" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 107" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 108" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 110" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 111" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 112" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 113" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 114" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 115" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 116" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 117" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 118" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 119" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 120" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 121" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 122" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 123" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 124" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 125" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 126" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 127" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 128" },
    { "@type": "AdministrativeArea", "name": "Noida Sector 129" },

{ "@type": "AdministrativeArea", "name": "Noida Sector 130" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 131" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 132" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 133" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 134" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 135" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 136" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 137" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 140" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 141" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 142" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 143" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 144" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 145" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 146" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 147" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 148" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 149" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 150" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 151" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 152" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 153" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 154" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 155" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 156" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 157" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 158" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 162" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 163" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 164" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 165" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 166" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 167" },
{ "@type": "AdministrativeArea", "name": "Noida Sector 168" },
{ "@type": "AdministrativeArea", "name": "Noida Extension Sector 1" },
{ "@type": "AdministrativeArea", "name": "Noida Extension Sector 2" },
{ "@type": "AdministrativeArea", "name": "Noida Extension Sector 3" },
{ "@type": "AdministrativeArea", "name": "Noida Extension Sector 4" },
{ "@type": "AdministrativeArea", "name": "Noida Extension Sector 10" },
{ "@type": "AdministrativeArea", "name": "Noida Extension Sector 12" },
{ "@type": "AdministrativeArea", "name": "Noida Extension Sector 16" },
{ "@type": "AdministrativeArea", "name": "Noida Extension Tech Zone 4" },
{ "@type": "AdministrativeArea", "name": "Noida Extension Tech Zone" }
],
"sameAs": [
"https://www.facebook.com/Rawhalalchicken.com0/",
"justdial.com"
],
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "4.9",
"reviewCount": "84"
}
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
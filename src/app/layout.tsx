import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from './store/Provider'; // Adjust path if needed
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




export const metadata: Metadata = {

  other: {
    "facebook-domain-verification": "ohquze0krklooq0r5eufurw4oky3b8",
    "p:domain_verify": "7402d4a3b47fbed3cfbdb0b8674cc9d3",
    "yandex-verification": "b1aec977ba6a26bf",
    "msvalidate.01":"9ADFE7C80958C9A5FC9EB422DAF1E1A7",
    "google-site-verification":"gMej0a7XTL3IsRLC_6OXtm9sP8Rl8TykZrkyxlxqOls",
  },
};

const ChickenStoreSchema = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ButcherShop',
    'name': 'Raw Halal Chicken & Meat Home Delivery',
    'image': 'https://rawhalalchicken.com', // अपने बैनर का सही पाथ डालें
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
      'latitude': '28.5700',  // नोएडा सेक्टर 50 की सही अक्षांश
      'longitude': '77.3662'  // नोएडा सेक्टर 50 की सही देशांतर
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '10:00',
      'closes': '22:00'
    },
    'areaServed': [
      {
        '@type': 'AdministrativeArea',
        'name': 'Noida'
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Greater Noida'
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Delhi NCR'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
             <body
         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
       >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-36H4F1S7Y9"
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
        
        {/* Next.js Optimized Schema Injection */}
        <ChickenStoreSchema />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xb3o8h8rt7");
          `}
        </Script>

        <ReduxProvider>
           <Header></Header>
           {children}
           <Footer></Footer>
        </ReduxProvider>
      </body>
    </html>
  );
}

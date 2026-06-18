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

export const revalidate = 30; // Revalidate metadata and pages every 30 seconds


export const metadata: Metadata = {

  other: {
    "facebook-domain-verification": "ohquze0krklooq0r5eufurw4oky3b8",
    "p:domain_verify": "7402d4a3b47fbed3cfbdb0b8674cc9d3",
    "yandex-verification": "b1aec977ba6a26bf",
    "msvalidate.01":"9ADFE7C80958C9A5FC9EB422DAF1E1A7",
    "google-site-verification":"gMej0a7XTL3IsRLC_6OXtm9sP8Rl8TykZrkyxlxqOls",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ButcherShop",
    "@id": "https://rawhalalchicken.com",
    "name": "Raw Halal Chicken",
    "url": "https://rawhalalchicken.com",
    "telephone": "+91-9911296615",
    "description": "Premium farm-fresh raw chicken and halal mutton home delivery service in Noida.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "27 shop number 3, F, 4, Fatehpur, F Block, Sector 50",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201303",
      "addressCountry": "IN"
    }
  };
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
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(localBusinessSchema)}
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

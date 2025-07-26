import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from './store/Provider'; // Adjust path if needed
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "order online raw chicken & Mutton home delivery in noida, fish home delivery, Chicken and fish home delivery in Noida, Raw desi chicken home delivery, rohu fish",
  other: {
    "facebook-domain-verification": "ohquze0krklooq0r5eufurw4oky3b8",
    "p:domain_verify": "7402d4a3b47fbed3cfbdb0b8674cc9d3",
    "yandex-verification": "b1aec977ba6a26bf",
  },
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
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ContactUs from '../contactus';
import MobileHeader from '../MobileHeader';
import MobileFooter from '../MobileFooter';
import { ActivePageProvider } from '../../store/ActivePageContext';

export default function ContactPage() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleRedirect = () => {
      try {
        if (typeof window === 'undefined') {
          return;
        }

        // Check if screen is large enough for web version
        const isLargeScreen = () => {
          return window.innerWidth >= 1024; // 1024px and above for web version
        };

        // Check if it's a tablet (medium screen)
        const isTablet = () => {
          return window.innerWidth >= 768 && window.innerWidth < 1024;
        };

        // Determine the appropriate route based on screen size
        let targetRoute = '/rawfreshchickenandmutton/contact'; // Default for mobile

        if (isLargeScreen()) {
          targetRoute = '/web/contact'; // Redirect to web version for large screens
        } else if (isTablet()) {
          targetRoute = '/web/contact'; // Redirect to web version for tablets
        }

        // Only redirect if we're not already on the target route
        if (window.location.pathname !== targetRoute) {
          // Add a small delay to ensure proper hydration
          const redirectTimer = setTimeout(() => {
            router.replace(targetRoute);
          }, 100);

          // Fallback redirect after 2 seconds if the first one fails
          const fallbackTimer = setTimeout(() => {
            if (window.location.pathname === '/rawfreshchickenandmutton/contact') {
              router.replace(targetRoute);
            }
          }, 2000);

          // Cleanup timers if component unmounts
          return () => {
            clearTimeout(redirectTimer);
            clearTimeout(fallbackTimer);
          };
        } else {
          setIsRedirecting(false);
        }

      } catch (err) {
        console.error('Redirect error:', err);
        setError('Failed to redirect. Please refresh the page.');
        setIsRedirecting(false);
      }
    };

    // Handle window resize events for responsive redirects
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname;
        const isLargeScreen = window.innerWidth >= 1024;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        
        if ((isLargeScreen || isTablet) && currentPath === '/rawfreshchickenandmutton/contact') {
          router.replace('/web/contact');
        } else if (window.innerWidth < 768 && currentPath === '/web/contact') {
          router.replace('/rawfreshchickenandmutton/contact');
        }
      }
    };

    // Initial redirect
    handleRedirect();

    // Add resize listener for responsive behavior
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [router]);

  // Set redirecting to false after a reasonable timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRedirecting(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Show loading state while redirecting
  if (isRedirecting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Show error state if redirect failed
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-white text-black px-4 py-2 rounded"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  // Only show mobile content if screen is small enough
  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
    return null; // Don't render mobile content for larger screens
  }

  return (
    <ActivePageProvider>
        <main className="bg-black min-h-screen">
            <MobileHeader pageHeading="Contact Us" />
            <ContactUs />
            <MobileFooter />
        </main>
    </ActivePageProvider>
  );
}

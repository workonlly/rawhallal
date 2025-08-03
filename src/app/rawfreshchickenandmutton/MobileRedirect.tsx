'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MobileRedirect() {
  const router = useRouter();

  useEffect(() => {
    const handleRedirect = () => {
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
      let targetRoute = '/rawfreshchickenandmutton'; // Default for mobile

      if (isLargeScreen()) {
        targetRoute = '/web'; // Redirect to web version for large screens
      } else if (isTablet()) {
        targetRoute = '/web'; // Redirect to web version for tablets
      }

      // Only redirect if we're not already on the target route
      if (window.location.pathname !== targetRoute) {
        // Add a small delay to ensure proper hydration
        const redirectTimer = setTimeout(() => {
          router.replace(targetRoute);
        }, 100);

        // Fallback redirect after 2 seconds if the first one fails
        const fallbackTimer = setTimeout(() => {
          if (window.location.pathname === '/rawfreshchickenandmutton') {
            router.replace(targetRoute);
          }
        }, 2000);

        // Cleanup timers if component unmounts
        return () => {
          clearTimeout(redirectTimer);
          clearTimeout(fallbackTimer);
        };
      }
    };

    // Handle window resize events for responsive redirects
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname;
        const isLargeScreen = window.innerWidth >= 1024;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        
        if ((isLargeScreen || isTablet) && currentPath === '/rawfreshchickenandmutton') {
          router.replace('/web');
        } else if (window.innerWidth < 768 && currentPath === '/web') {
          router.replace('/rawfreshchickenandmutton');
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

  // This component doesn't render anything visible
  return null;
} 
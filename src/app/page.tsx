'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleRedirect = () => {
      try {
        if (typeof window === 'undefined') {
          // Server-side rendering - wait for client hydration
          return;
        }

        // More robust device detection
        const isMobile = () => {
          // Check multiple indicators for mobile devices
          const userAgent = navigator.userAgent.toLowerCase();
          const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
          const isSmallScreen = window.innerWidth < 640;
          const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
          
          return isMobileUA || (isSmallScreen && isTouchDevice);
        };

        const isTablet = () => {
          const userAgent = navigator.userAgent.toLowerCase();
          const isTabletUA = /ipad|android(?=.*\b(?!mobile)\w)/i.test(userAgent);
          const isMediumScreen = window.innerWidth >= 640 && window.innerWidth < 1024;
          
          return isTabletUA || isMediumScreen;
        };

        // Determine the appropriate route based on device type
        let targetRoute = '/web'; // Default for desktop

        if (isMobile()) {
          targetRoute = '/rawfreshchickenandmutton';
        } else if (isTablet()) {
          // You can customize tablet behavior here
          targetRoute = '/web';
        }

        // Add a small delay to ensure proper hydration and state management
        const redirectTimer = setTimeout(() => {
          router.replace(targetRoute);
        }, 100);

        // Fallback redirect after 3 seconds if the first one fails
        const fallbackTimer = setTimeout(() => {
          if (window.location.pathname === '/') {
            router.replace(targetRoute);
          }
        }, 3000);

        // Cleanup timers if component unmounts
        return () => {
          clearTimeout(redirectTimer);
          clearTimeout(fallbackTimer);
        };

      } catch (err) {
        console.error('Redirect error:', err);
        setError('Failed to redirect. Please refresh the page.');
        setIsRedirecting(false);
      }
    };

    // Handle window resize events for responsive redirects
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        // Only redirect if the device type actually changed
        const currentPath = window.location.pathname;
        const isMobile = window.innerWidth < 640;
        
        if (isMobile && currentPath === '/web') {
          router.replace('/rawfreshchickenandmutton');
        } else if (!isMobile && currentPath === '/rawfreshchickenandmutton') {
          router.replace('/web');
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
    const timeout = setTimeout(() => {
      setIsRedirecting(false);
    }, 2000); // 2 seconds timeout

    return () => clearTimeout(timeout);
  }, []);

  // Show error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <div className="text-red-400 text-xl mb-4">⚠️ {error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          Refresh Page
        </button>
      </div>
    );
  }

  // Show loading state
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
      <div className="text-xl font-semibold mb-2">
        {isRedirecting ? 'Redirecting...' : 'Loading...'}
      </div>
      <div className="text-gray-400 text-sm text-center max-w-md">
        Detecting your device and redirecting to the best experience...
      </div>
    </div>
  );
}

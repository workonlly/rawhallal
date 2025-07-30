'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // You can adjust the breakpoint as needed (e.g., 768 for tablets)
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) {
        // Mobile: route to /mobile
        router.replace('/rawfreshchcikenandmutton');
      } else {
        // Desktop/tablet: route to /web/pag
        router.replace('/web');
      }
    }
  }, [router]);

  // Optionally, show a loading spinner or message while redirecting
  return (
    <div className="flex items-center justify-center min-h-screen text-xl text-white">
      Redirecting...
    </div>
  );
}

'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isMobileDevice } from '../utils/deviceDetection';

export default function MobileRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (isMobileDevice()) {
      // Mobile: route to mobile version
      router.replace('/rawfreshchickenandmutton');
    }
  }, [router]);

  return null; // This component doesn't render anything
} 
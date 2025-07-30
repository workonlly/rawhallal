export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') {
    return false; // Server-side rendering
  }

  // Check multiple indicators for mobile devices
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  const isSmallScreen = window.innerWidth < 640;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  return isMobileUA || (isSmallScreen && isTouchDevice);
};

export const isTabletDevice = (): boolean => {
  if (typeof window === 'undefined') {
    return false; // Server-side rendering
  }

  const userAgent = navigator.userAgent.toLowerCase();
  const isTabletUA = /ipad|android(?=.*\b(?!mobile)\w)/i.test(userAgent);
  const isMediumScreen = window.innerWidth >= 640 && window.innerWidth < 1024;
  
  return isTabletUA || isMediumScreen;
};

export const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  if (isMobileDevice()) {
    return 'mobile';
  } else if (isTabletDevice()) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}; 
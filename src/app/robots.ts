import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.rawhalalchicken.com';

  return {
    rules: [
      // Allow all bots to crawl everything
      {
        userAgent: '*',
        allow: '/',
      },
      
      // Main pages - Allow crawling
      {
        userAgent: '*',
        allow: '/web/',
      },
      {
        userAgent: '*',
        allow: '/mobile/',
      },
      {
        userAgent: '*',
        allow: '/open/',
      },
      {
        userAgent: '*',
        allow: '/aboutus',
      },
      {
        userAgent: '*',
        allow: '/privacypolicy',
      },
      {
        userAgent: '*',
        allow: '/termsandconditions',
      },
      
      // Product pages - Allow crawling
      {
        userAgent: '*',
        allow: '/web/chicken',
      },
      {
        userAgent: '*',
        allow: '/web/fish',
      },
      {
        userAgent: '*',
        allow: '/web/mutton',
      },
      {
        userAgent: '*',
        allow: '/web/bhiryani',
      },
      {
        userAgent: '*',
        allow: '/mobile/chicken',
      },
      {
        userAgent: '*',
        allow: '/mobile/fish',
      },
      {
        userAgent: '*',
        allow: '/mobile/mutton',
      },
      {
        userAgent: '*',
        allow: '/mobile/bhiryani',
      },
      
      // Mapped URLs from vercel.json - Allow crawling
      {
        userAgent: '*',
        allow: '/contactus',
      },
      {
        userAgent: '*',
        allow: '/about',
      },
      {
        userAgent: '*',
        allow: '/contact',
      },
      
      // Allow important static assets
      {
        userAgent: '*',
        allow: '/public/',
      },
      {
        userAgent: '*',
        allow: '/images/',
      },
      {
        userAgent: '*',
        allow: '/assets/',
      },
      {
        userAgent: '*',
        allow: '/favicon.ico',
      },
      {
        userAgent: '*',
        allow: '/sitemap.xml',
      },
      {
        userAgent: '*',
        allow: '/robots.txt',
      },
      
      // Allow all dynamic product pages
      {
        userAgent: '*',
        allow: '/open/',
      },
      
      // Allow admin pages (if you want them indexed)
      {
        userAgent: '*',
        allow: '/admin/',
      },
      
      // Allow API pages (if you want them indexed)
      {
        userAgent: '*',
        allow: '/api/',
      },
      
      // Allow all Next.js generated content
      {
        userAgent: '*',
        allow: '/_next/',
      },
      {
        userAgent: '*',
        allow: '/.next/',
      },
      
      // Allow all configuration files (if needed)
      {
        userAgent: '*',
        allow: '/package.json',
      },
      {
        userAgent: '*',
        allow: '/tsconfig.json',
      },
      {
        userAgent: '*',
        allow: '/next.config.ts',
      },
      
      // Allow all environment files (if needed)
      {
        userAgent: '*',
        allow: '/.env',
      },
      {
        userAgent: '*',
        allow: '/.env.local',
      },
      {
        userAgent: '*',
        allow: '/.env.production',
      },
      
      // Allow all documentation
      {
        userAgent: '*',
        allow: '/README.md',
      },
      {
        userAgent: '*',
        allow: '/docs/',
      },
      
      // Allow all temporary and cache files
      {
        userAgent: '*',
        allow: '/temp/',
      },
      {
        userAgent: '*',
        allow: '/cache/',
      },
      {
        userAgent: '*',
        allow: '/tmp/',
      },
      {
        userAgent: '*',
        allow: '*.log',
      },
      {
        userAgent: '*',
        allow: '*.tmp',
      },
      {
        userAgent: '*',
        allow: '*.cache',
      },
      
      // Allow image optimization paths
      {
        userAgent: '*',
        allow: '/_next/image',
      },
      {
        userAgent: '*',
        allow: '/_next/static',
      },
      
      // Allow all dynamic routes
      {
        userAgent: '*',
        allow: '/open/*',
      },
      {
        userAgent: '*',
        allow: '/web/*',
      },
      {
        userAgent: '*',
        allow: '/mobile/*',
      },
      {
        userAgent: '*',
        allow: '/api/*',
      },
      
      // Allow all static files
      {
        userAgent: '*',
        allow: '/*.jpg',
      },
      {
        userAgent: '*',
        allow: '/*.jpeg',
      },
      {
        userAgent: '*',
        allow: '/*.png',
      },
      {
        userAgent: '*',
        allow: '/*.gif',
      },
      {
        userAgent: '*',
        allow: '/*.webp',
      },
      {
        userAgent: '*',
        allow: '/*.svg',
      },
      {
        userAgent: '*',
        allow: '/*.ico',
      },
      {
        userAgent: '*',
        allow: '/*.css',
      },
      {
        userAgent: '*',
        allow: '/*.js',
      },
      {
        userAgent: '*',
        allow: '/*.json',
      },
      {
        userAgent: '*',
        allow: '/*.xml',
      },
      {
        userAgent: '*',
        allow: '/*.txt',
      },
      
      // Specific rules for major search engines
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Slurp',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        crawlDelay: 1,
      },
      
      // Allow all SEO and analytics bots
      {
        userAgent: 'AhrefsBot',
        allow: '/',
      },
      {
        userAgent: 'SemrushBot',
        allow: '/',
      },
      {
        userAgent: 'MJ12bot',
        allow: '/',
      },
      {
        userAgent: 'DotBot',
        allow: '/',
      },
      {
        userAgent: 'BLEXBot',
        allow: '/',
      },
      {
        userAgent: 'Screaming Frog SEO Spider',
        allow: '/',
      },
      
      // Allow social media bots
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      
      // Allow archive services
      {
        userAgent: 'ia_archiver',
        allow: '/',
      },
      
      // Allow all other bots
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

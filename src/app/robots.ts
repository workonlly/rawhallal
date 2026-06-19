import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.rawhalalchicken.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/'],
      },
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
      { userAgent: 'AhrefsBot', allow: '/' },
      { userAgent: 'SemrushBot', allow: '/' },
      { userAgent: 'MJ12bot', allow: '/' },
      { userAgent: 'DotBot', allow: '/' },
      { userAgent: 'BLEXBot', allow: '/' },
      { userAgent: 'Screaming Frog SEO Spider', allow: '/' },
      // Allow social media bots
      { userAgent: 'facebookexternalhit', allow: '/' },
      { userAgent: 'Twitterbot', allow: '/' },
      { userAgent: 'LinkedInBot', allow: '/' },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

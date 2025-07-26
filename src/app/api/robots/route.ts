import { NextResponse } from 'next/server';

export async function GET() {
  const robotsContent = `# Robots.txt for RawHalal.com
# This file tells search engines which parts of the website they can crawl

User-agent: *
Allow: /

# Main pages - Allow crawling
Allow: /web/
Allow: /mobile/
Allow: /open/
Allow: /aboutus
Allow: /privacypolicy
Allow: /terms&conditions

# Product pages - Allow crawling
Allow: /web/chicken
Allow: /web/fish
Allow: /web/mutton
Allow: /web/bhiryani
Allow: /mobile/chicken
Allow: /mobile/fish
Allow: /mobile/mutton
Allow: /mobile/bhiryani

# Disallow sensitive areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /.next/
Disallow: /node_modules/
Disallow: /src/
Disallow: /package.json
Disallow: /package-lock.json
Disallow: /tsconfig.json
Disallow: /next.config.ts
Disallow: /postcss.config.mjs
Disallow: /.env
Disallow: /.env.local
Disallow: /.env.production
Disallow: /.git/
Disallow: /README.md
Disallow: /generate-product-urls.js
Disallow: /slug-generator.js
Disallow: /COMPLETE_SITEMAP_TEMPLATE.xml
Disallow: /PRODUCT_MAPPING.md
Disallow: /SITE_STRUCTURE.md

# Disallow temporary and cache files
Disallow: /temp/
Disallow: /cache/
Disallow: /tmp/
Disallow: *.log
Disallow: *.tmp
Disallow: *.cache

# Disallow image optimization paths (if using Next.js Image optimization)
Disallow: /_next/image
Disallow: /_next/static

# Allow important static assets
Allow: /public/
Allow: /images/
Allow: /assets/
Allow: /favicon.ico
Allow: /sitemap.xml

# Crawl delay (optional - tells bots to wait between requests)
Crawl-delay: 1

# Sitemap location
Sitemap: https://www.rawhalalchicken.com/sitemap.xml

# Additional sitemaps (if you have multiple)
# Sitemap: https://www.rawhalalchicken.com/sitemap-products.xml
# Sitemap: https://www.rawhalalchicken.com/sitemap-categories.xml

# Specific rules for major search engines
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 1

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1

# Block bad bots and scrapers
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: BLEXBot
Disallow: /

User-agent: Screaming Frog SEO Spider
Disallow: /

# Block social media bots from crawling everything
User-agent: facebookexternalhit
Allow: /
Disallow: /admin/
Disallow: /api/

User-agent: Twitterbot
Allow: /
Disallow: /admin/
Disallow: /api/

User-agent: LinkedInBot
Allow: /
Disallow: /admin/
Disallow: /api/

# Block archive.org (optional - remove if you want your site archived)
User-agent: ia_archiver
Disallow: /

# Block all other bots from sensitive areas
User-agent: *
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /.next/
Disallow: /node_modules/
Disallow: /src/
Disallow: /.env*
Disallow: /.git/
Disallow: /generate-product-urls.js
Disallow: /slug-generator.js
Disallow: /COMPLETE_SITEMAP_TEMPLATE.xml
Disallow: /PRODUCT_MAPPING.md
Disallow: /SITE_STRUCTURE.md`;

  return new NextResponse(robotsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
    },
  });
} 
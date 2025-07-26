import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the robots.txt file from the public folder
    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');

    return new NextResponse(robotsContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error reading robots.txt:', error);
    
    // Fallback robots.txt content
    const fallbackRobots = `# Robots.txt for RawHalal.com
User-agent: *
Allow: /

# Main pages - Allow crawling
Allow: /web/
Allow: /mobile/
Allow: /open/
Allow: /aboutus
Allow: /privacypolicy
Allow: /terms&conditions

# Disallow sensitive areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /.next/
Disallow: /node_modules/
Disallow: /src/

# Sitemap location
Sitemap: https://rawhalal.com/sitemap.xml`;

    return new NextResponse(fallbackRobots, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }
} 
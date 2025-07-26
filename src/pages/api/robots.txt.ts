import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Read the robots.txt file from the public folder
    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).send(robotsContent);
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

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).send(fallbackRobots);
  }
} 
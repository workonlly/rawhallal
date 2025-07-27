import { MetadataRoute } from 'next';
import supabase from '../../supabase.js';

// Function to create a URL-safe slug from product.maintext (same as web folder)
function toSlug(text: string) {
  return text
    .replace(/\s+/g, '_SPACE_') // Replace spaces with _SPACE_
    .replace(/[\/\\]/g, '_SLASH_') // Replace slashes with _SLASH_
    .replace(/[()]/g, '_PAREN_') // Replace parentheses with _PAREN_
    .replace(/[&]/g, '_AND_') // Replace & with _AND_
    .replace(/[#]/g, '_HASH_') // Replace # with _HASH_
    .replace(/[@]/g, '_AT_') // Replace @ with _AT_
    .replace(/[%]/g, '_PERCENT_') // Replace % with _PERCENT_
    .replace(/[+]/g, '_PLUS_') // Replace + with _PLUS_
    .replace(/[=]/g, '_EQUALS_') // Replace = with _EQUALS_
    .replace(/[?]/g, '_QUESTION_') // Replace ? with _QUESTION_
    .replace(/[!]/g, '_EXCLAMATION_') // Replace ! with _EXCLAMATION_
    .replace(/[$]/g, '_DOLLAR_') // Replace $ with _DOLLAR_
    .replace(/[*]/g, '_STAR_') // Replace * with _STAR_
    .replace(/[,]/g, '_COMMA_') // Replace , with _COMMA_
    .replace(/[.]/g, '_DOT_') // Replace . with _DOT_
    .replace(/[:]/g, '_COLON_') // Replace : with _COLON_
    .replace(/[;]/g, '_SEMICOLON_'); // Replace ; with _SEMICOLON_
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.rawhalalchicken.com';

  // Fetch all products from all tables
  let productUrls: MetadataRoute.Sitemap = [];
  
  try {
    // Define all product tables
    const tables = ['fresh1', 'chicken', 'fish', 'mutton'];
    
    // Fetch products from each table
    for (const table of tables) {
      const { data: products, error } = await supabase
        .from(table)
        .select('*');

      if (error) {
        console.error(`Error fetching products from ${table}:`, error);
        continue;
      }

      if (products && products.length > 0) {
        // Generate product URLs from database using maintext field
        const tableProductUrls = products.map((product: any) => ({
          url: `${baseUrl}/open/${toSlug(product.maintext)}`,
          lastModified: new Date(product.updated_at || product.created_at || Date.now()),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        }));
        
        productUrls = [...productUrls, ...tableProductUrls];
      }
    }
  } catch (error) {
    console.error('Error in sitemap generation:', error);
  }

  // Static URLs
  const staticUrls: MetadataRoute.Sitemap = [
    // Main Pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    
    // Web Version Pages
    {
      url: `${baseUrl}/web`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/web/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Web Product Categories
    {
      url: `${baseUrl}/web/chicken`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/web/fish`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/web/mutton`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/web/bhiryani`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    
    // Mobile Version Pages
    {
      url: `${baseUrl}/mobile`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    
    // Mobile Product Categories
    {
      url: `${baseUrl}/mobile/chicken`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mobile/fish`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mobile/mutton`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mobile/bhiryani`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    
    // Legal Pages
    {
      url: `${baseUrl}/aboutus`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacypolicy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/termsandconditions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    
    // Admin Pages
    {
      url: `${baseUrl}/admin`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    
    // Mapped URLs from vercel.json redirects and rewrites
    {
      url: `${baseUrl}/contactus`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // API Routes (if you want them indexed)
    {
      url: `${baseUrl}/api`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },

    // Static Assets
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/robots.txt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1,
    },
  ];

  // Combine static URLs with dynamic product URLs
  return [...staticUrls, ...productUrls];
}

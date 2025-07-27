import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rawhalalchicken.com';

  // Product slugs for dynamic pages
  const chickenProducts = [
    'Fresh_SPACE_Chicken_SPACE_Curry',
    'Chicken_SPACE_Biryani',
    'Chicken_SPACE_Kebab',
    'Chicken_SPACE_Tikka',
    'Chicken_SPACE_Masala',
    'Chicken_SPACE_Korma',
    'Chicken_SPACE_Butter_SPACE_Masala',
    'Chicken_SPACE_Tandoori',
    'Chicken_SPACE_65',
    'Chicken_SPACE_Popcorn'
  ];

  const fishProducts = [
    'Fresh_SPACE_Fish_SPACE_Curry',
    'Fish_SPACE_Biryani',
    'Fish_SPACE_Fry',
    'Fish_SPACE_Masala',
    'Fish_SPACE_Pakora',
    'Fish_SPACE_Kebab',
    'Fish_SPACE_Tikka',
    'Fish_SPACE_Curry_SPACE_Special'
  ];

  const muttonProducts = [
    'Fresh_SPACE_Mutton_SPACE_Curry',
    'Mutton_SPACE_Biryani',
    'Mutton_SPACE_Kebab',
    'Mutton_SPACE_Masala',
    'Mutton_SPACE_Korma',
    'Mutton_SPACE_Rogan_SPACE_Josh',
    'Mutton_SPACE_Keema',
    'Mutton_SPACE_Curry_SPACE_Special'
  ];

  const biryaniProducts = [
    'Chicken_SPACE_Biryani_SPACE_Special',
    'Fish_SPACE_Biryani_SPACE_Special',
    'Mutton_SPACE_Biryani_SPACE_Special',
    'Veg_SPACE_Biryani',
    'Hyderabadi_SPACE_Biryani',
    'Lucknowi_SPACE_Biryani',
    'Dum_SPACE_Biryani',
    'Thalassery_SPACE_Biryani'
  ];

  // Generate product URLs
  const productUrls = [
    ...chickenProducts.map(slug => ({
      url: `${baseUrl}/open/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...fishProducts.map(slug => ({
      url: `${baseUrl}/open/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...muttonProducts.map(slug => ({
      url: `${baseUrl}/open/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...biryaniProducts.map(slug => ({
      url: `${baseUrl}/open/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  ];

  return [
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

    // Add all product URLs
    ...productUrls,
  ];
}

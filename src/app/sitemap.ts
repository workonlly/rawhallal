import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  // TODO: Add dynamic routes for /open/[slug] by fetching data
  // const products = await fetch('...').then((res) => res.json());
  // const productEntries: MetadataRoute.Sitemap = products.map(({ id }) => ({
  //   url: `${baseUrl}/open/${id}`,
  //   lastModified: new Date(),
  // }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/aboutus`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacypolicy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms&conditions`,
      lastModified: new Date(),
    },
    {
        url: `${baseUrl}/web/contactus`,
        lastModified: new Date(),
    },
    // ...productEntries,
  ];
}

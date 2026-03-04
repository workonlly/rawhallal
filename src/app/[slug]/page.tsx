import React from 'react'
import OpenPage from './extra'
import supabase from '../../../supabase';

const SUPABASE_URL = 'https://akqmahrvurcswatrffln.supabase.co';

function safeDecode(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function fromSlug(slug: string) {
  let result = safeDecode(slug)
    .replace(/\+/g, ' ')
    .replace(/_SPACE_/gi, ' ')
    .replace(/_SLASH_/g, '/')
    .replace(/_AND_/g, '&')
    .replace(/_HASH_/g, '#')
    .replace(/_AT_/g, '@')
    .replace(/_PERCENT_/g, '%')
    .replace(/_PLUS_/g, '+')
    .replace(/_EQUALS_/g, '=')
    .replace(/_QUESTION_/g, '?')
    .replace(/_EXCLAMATION_/g, '!')
    .replace(/_DOLLAR_/g, '$')
    .replace(/_STAR_/g, '*')
    .replace(/_COMMA_/g, ',')
    .replace(/_DOT_/g, '.')
    .replace(/_COLON_/g, ':')
    .replace(/_SEMICOLON_/g, ';')
    .replace(/_LPAREN_/g, '(')
    .replace(/_RPAREN_/g, ')')
    .trim()
    .replace(/\s+/g, ' ');
  let parenCount = 0;
  result = result.replace(/_PAREN_/g, () => {
    parenCount++;
    return parenCount === 1 ? '(' : ')';
  });
  return result;
}

function normalizeForMatch(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function searchProductBySlug(searchSlug: string) {
  const tables = ['fresh1', 'chicken', 'fish', 'mutton'];
  const originalText = fromSlug(searchSlug);
  const normalizedWithoutRaw = originalText.replace(/^raw\s+/i, '').trim();
  const normalizedWithoutPrefixWords = originalText
    .replace(/^(raw|fresh|halal)\s+/gi, '')
    .replace(/^(raw|fresh|halal)\s+/gi, '')
    .trim();
  const candidates = Array.from(new Set([
    originalText,
    normalizedWithoutRaw,
    normalizedWithoutPrefixWords,
  ].filter(Boolean)));
  const normalizedCandidates = candidates.map(normalizeForMatch);

  for (const table of tables) {
    for (const candidate of candidates) {
      try {
        const { data, error } = await supabase
          .from(table)
          .select('*')
          .ilike('maintext', candidate)
          .maybeSingle();

        if (error) continue;
        if (data) return { ...data, table };
      } catch {
        // ignore
      }
    }

    try {
      const { data, error } = await supabase
        .from(table)
        .select('*');

      if (error || !data) continue;

      const normalizedMatch = data.find((item) => {
        const maintext = typeof item?.maintext === 'string' ? item.maintext : '';
        const normalizedMaintext = normalizeForMatch(maintext);
        return normalizedCandidates.includes(normalizedMaintext);
      });

      if (normalizedMatch) return { ...normalizedMatch, table };
    } catch {
      // ignore
    }
  }
  return null;
}

// Fetch product images from the corresponding bucket and folder (folder = product id)
async function fetchImages(table: string, productId: number) {
  const bucketMap: Record<string, string> = {
    fresh1: 'fresh',
    chicken: 'chicken',
    fish: 'fish',
    mutton: 'mutton',
  };
  const bucket = bucketMap[table];
  if (!bucket) return [];

  const folderName = String(productId);
  const { data: files, error } = await supabase
    .storage
    .from(bucket)
    .list(folderName);

  if (error || !files) return [];

  return files
    .filter((file) =>
      file.name &&
      !file.name.startsWith('.') &&
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)
    )
    .map((file) =>
      `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${folderName}/${file.name}`
    );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decodedSlug = fromSlug(slug);
  const product = await searchProductBySlug(slug);
  const images = product ? await fetchImages(product.table, product.id) : [];

  const defaultProduct = {
    id: 'product',
    name: decodedSlug || 'Product',
    description: 'Fresh products from Raw Halal Chicken.',
    keywords: ['raw', 'halal', 'chicken', 'fresh', 'products'],
    authorName: 'Raw Halal Chicken',
    imageUrl: '/fdrd-removebg-preview-modified.png',
    altImageUrl: '/fdrd-removebg-preview-modified.png',
  };

  const productData = product ? {
    id: product.id,
    name: product.title || product.maintext,
    description: product.metadata || 'Fresh products from Raw Halal Chicken.',
    keywords: Array.isArray(product.metakeywords) ? product.metakeywords : ['raw', 'halal', 'chicken', 'fresh', product.table || 'products'],
    authorName: 'Raw Halal Chicken',
    imageUrl: images[0] || '/fdrd-removebg-preview-modified.png',
    altImageUrl: images[1] || images[0] || '/fdrd-removebg-preview-modified.png',
  } : defaultProduct;

  return {
    title: productData.name,
    description: productData.description,
    keywords: productData.keywords,
    publisher: 'Raw Halal Chicken',
    alternates: {
      canonical: `https://www.rawhalalchicken.com/${slug}`,
    },
    openGraph: {
      title: `${productData.name} | Raw Halal Chicken`,
      description: productData.description,
      url: `https://www.rawhalalchicken.com/${slug}`,
      siteName: 'Raw Halal Chicken',
      images: [
        { url: productData.imageUrl, width: 1200, height: 630, alt: `An image of ${productData.name}` },
        { url: productData.altImageUrl, width: 800, height: 600, alt: `A different view of ${productData.name}` },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${productData.name} | Raw Halal Chicken`,
      description: productData.description,
      creator: '@YourTwitterHandle',
      images: [productData.imageUrl],
    },
    icons: {
      icon: '/fdrd-removebg-preview-modified.png',
      shortcut: '/fdrd-removebg-preview-modified.png',
      apple: '/fdrd-removebg-preview-modified.png',
    },
    manifest: '/site.webmanifest',
  };
}

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await searchProductBySlug(slug);
  const images = product ? await fetchImages(product.table, product.id) : [];
  const heading = product?.heading || product?.maintext || 'Product Details';

  return (
    <div>
      <div className="flex items-center justify-center bg-white py-4 text-2xl font-bold text-gray-800 gap-3">
        <img src="/fdrd-removebg-preview-modified.png" alt="Raw Halal Chicken Logo" className="w-[50px] h-[50px] rounded-tl-lg rounded-br-lg bg-white box" />
        <span>{heading}</span>
      </div>
      <OpenPage productFromServer={product ? { ...product, image: images } : undefined} slug={slug} />
    </div>
  );
}

export default page

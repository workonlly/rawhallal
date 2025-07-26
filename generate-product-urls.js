// Script to generate individual product URLs for sitemap
const { createClient } = require('@supabase/supabase-js');

// Supabase configuration
const supabaseUrl = 'https://akqmahrvurcswatrffln.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || process.env.SUPABASE_ANON_KEY || 'your-supabase-anon-key';

const supabase = createClient(supabaseUrl, supabaseKey);

// Function to create URL-safe slug from product text
function toSlug(text) {
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

// Function to fetch products from a table
async function fetchProducts(tableName) {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select('*');
    
    if (error) {
      console.error(`Error fetching ${tableName}:`, error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error(`Error fetching ${tableName}:`, error);
    return [];
  }
}

// Function to generate product URLs
async function generateProductUrls() {
  const tables = ['chicken', 'fish', 'mutton', 'bhiryani'];
  const allProducts = [];
  
  for (const table of tables) {
    console.log(`Fetching products from ${table} table...`);
    const products = await fetchProducts(table);
    
    products.forEach(product => {
      const slug = toSlug(product.maintext);
      allProducts.push({
        url: `https://rawhalal.com/open/${slug}`,
        name: product.maintext,
        category: table,
        lastmod: new Date().toISOString().split('T')[0],
        priority: '0.7',
        changefreq: 'weekly'
      });
    });
    
    console.log(`Found ${products.length} products in ${table} table`);
  }
  
  return allProducts;
}

// Function to generate XML sitemap entries
function generateSitemapEntries(products) {
  return products.map(product => `
  <url>
    <loc>${product.url}</loc>
    <lastmod>${product.lastmod}</lastmod>
    <changefreq>${product.changefreq}</changefreq>
    <priority>${product.priority}</priority>
  </url>`.trim()).join('\n');
}

// Main execution
async function main() {
  console.log('Generating product URLs for sitemap...');
  
  try {
    const products = await generateProductUrls();
    
    if (products.length === 0) {
      console.log('No products found. Please check your Supabase configuration.');
      return;
    }
    
    console.log(`\nGenerated ${products.length} product URLs:`);
    products.forEach(product => {
      console.log(`- ${product.name} (${product.category}): ${product.url}`);
    });
    
    // Generate XML entries
    const xmlEntries = generateSitemapEntries(products);
    
    // Save to file
    const fs = require('fs');
    fs.writeFileSync('product-urls.xml', xmlEntries);
    
    console.log('\nProduct URLs saved to product-urls.xml');
    console.log('\nYou can now add these entries to your sitemap.xml file.');
    
  } catch (error) {
    console.error('Error generating product URLs:', error);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { generateProductUrls, toSlug }; 
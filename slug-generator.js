// Slug Generator for Product URLs
// This script helps you convert product names to URL-safe slugs

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

// Example product names - REPLACE THESE WITH YOUR ACTUAL PRODUCTS
const exampleProducts = [
  // Chicken Products
  "Fresh Chicken Curry",
  "Chicken Biryani",
  "Chicken Kebab",
  "Chicken Tikka",
  "Chicken Masala",
  "Chicken Korma",
  "Chicken Butter Masala",
  "Chicken Tandoori",
  "Chicken 65",
  "Chicken Popcorn",
  
  // Fish Products
  "Fresh Fish Curry",
  "Fish Biryani",
  "Fish Fry",
  "Fish Masala",
  "Fish Pakora",
  "Fish Kebab",
  "Fish Tikka",
  "Fish Curry Special",
  
  // Mutton Products
  "Fresh Mutton Curry",
  "Mutton Biryani",
  "Mutton Kebab",
  "Mutton Masala",
  "Mutton Korma",
  "Mutton Rogan Josh",
  "Mutton Keema",
  "Mutton Curry Special",
  
  // Biryani Products
  "Chicken Biryani Special",
  "Fish Biryani Special",
  "Mutton Biryani Special",
  "Veg Biryani",
  "Hyderabadi Biryani",
  "Lucknowi Biryani",
  "Dum Biryani",
  "Thalassery Biryani"
];

console.log('=== PRODUCT SLUG GENERATOR ===\n');

console.log('Example products with their slugs:');
console.log('=====================================');

exampleProducts.forEach(product => {
  const slug = toSlug(product);
  console.log(`Product: "${product}"`);
  console.log(`Slug: ${slug}`);
  console.log(`URL: https://rawhalal.com/open/${slug}`);
  console.log('---');
});

console.log('\n=== HOW TO USE ===');
console.log('1. Replace the example products above with your actual product names');
console.log('2. Run this script: node slug-generator.js');
console.log('3. Copy the generated URLs to your sitemap.xml file');
console.log('4. Make sure to update the domain from "rawhalal.com" to your actual domain');

console.log('\n=== XML TEMPLATE ===');
console.log('Use this template for each product in your sitemap:');
console.log(`
  <url>
    <loc>https://rawhalal.com/open/PRODUCT_SLUG_HERE</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`);

// Function to generate XML entries
function generateXMLEntries(products) {
  return products.map(product => {
    const slug = toSlug(product);
    return `  <url>
    <loc>https://rawhalal.com/open/${slug}</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }).join('\n\n');
}

console.log('\n=== COMPLETE XML ENTRIES ===');
console.log(generateXMLEntries(exampleProducts)); 
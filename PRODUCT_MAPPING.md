# Rawhalal Product URL Mapping

## 🍗 Product Categories and Individual Products

This document maps all individual products to their corresponding URLs in the `/open/[slug]` format.

---

## 🐔 Chicken Products

### Individual Chicken Products:
1. **Fresh Chicken Curry**
   - **URL**: `/open/Fresh_SPACE_Chicken_SPACE_Curry`
   - **Category**: Chicken
   - **Description**: Fresh chicken curry made with authentic spices

2. **Chicken Biryani**
   - **URL**: `/open/Chicken_SPACE_Biryani`
   - **Category**: Chicken
   - **Description**: Traditional chicken biryani with aromatic rice

3. **Chicken Kebab**
   - **URL**: `/open/Chicken_SPACE_Kebab`
   - **Category**: Chicken
   - **Description**: Grilled chicken kebab with special marinade

4. **Chicken Tikka**
   - **URL**: `/open/Chicken_SPACE_Tikka`
   - **Category**: Chicken
   - **Description**: Tandoori chicken tikka with yogurt marinade

---

## 🐟 Fish Products

### Individual Fish Products:
1. **Fresh Fish Curry**
   - **URL**: `/open/Fresh_SPACE_Fish_SPACE_Curry`
   - **Category**: Fish
   - **Description**: Fresh fish curry with traditional spices

2. **Fish Biryani**
   - **URL**: `/open/Fish_SPACE_Biryani`
   - **Category**: Fish
   - **Description**: Fish biryani with aromatic basmati rice

3. **Fish Fry**
   - **URL**: `/open/Fish_SPACE_Fry`
   - **Category**: Fish
   - **Description**: Crispy fried fish with spices

---

## 🐑 Mutton Products

### Individual Mutton Products:
1. **Fresh Mutton Curry**
   - **URL**: `/open/Fresh_SPACE_Mutton_SPACE_Curry`
   - **Category**: Mutton
   - **Description**: Fresh mutton curry with rich gravy

2. **Mutton Biryani**
   - **URL**: `/open/Mutton_SPACE_Biryani`
   - **Category**: Mutton
   - **Description**: Traditional mutton biryani with tender meat

3. **Mutton Kebab**
   - **URL**: `/open/Mutton_SPACE_Kebab`
   - **Category**: Mutton
   - **Description**: Grilled mutton kebab with herbs

---

## 🍚 Biryani Products

### Individual Biryani Products:
1. **Chicken Biryani Special**
   - **URL**: `/open/Chicken_SPACE_Biryani_SPACE_Special`
   - **Category**: Biryani
   - **Description**: Special chicken biryani with extra spices

2. **Fish Biryani Special**
   - **URL**: `/open/Fish_SPACE_Biryani_SPACE_Special`
   - **Category**: Biryani
   - **Description**: Special fish biryani with premium ingredients

3. **Mutton Biryani Special**
   - **URL**: `/open/Mutton_SPACE_Biryani_SPACE_Special`
   - **Category**: Biryani
   - **Description**: Special mutton biryani with tender meat

4. **Veg Biryani**
   - **URL**: `/open/Veg_SPACE_Biryani`
   - **Category**: Biryani
   - **Description**: Vegetarian biryani with fresh vegetables

---

## 🔗 URL Structure Explanation

### Slug Generation Pattern:
The `toSlug()` function converts product names to URL-safe slugs:

```javascript
function toSlug(text) {
  return text
    .replace(/\s+/g, '_SPACE_')        // Spaces → _SPACE_
    .replace(/[\/\\]/g, '_SLASH_')     // Slashes → _SLASH_
    .replace(/[()]/g, '_PAREN_')       // Parentheses → _PAREN_
    .replace(/[&]/g, '_AND_')          // & → _AND_
    .replace(/[#]/g, '_HASH_')         // # → _HASH_
    .replace(/[@]/g, '_AT_')           // @ → _AT_
    .replace(/[%]/g, '_PERCENT_')      // % → _PERCENT_
    .replace(/[+]/g, '_PLUS_')         // + → _PLUS_
    .replace(/[=]/g, '_EQUALS_')       // = → _EQUALS_
    .replace(/[?]/g, '_QUESTION_')     // ? → _QUESTION_
    .replace(/[!]/g, '_EXCLAMATION_')  // ! → _EXCLAMATION_
    .replace(/[$]/g, '_DOLLAR_')       // $ → _DOLLAR_
    .replace(/[*]/g, '_STAR_')         // * → _STAR_
    .replace(/[,]/g, '_COMMA_')        // , → _COMMA_
    .replace(/[.]/g, '_DOT_')          // . → _DOT_
    .replace(/[:]/g, '_COLON_')        // : → _COLON_
    .replace(/[;]/g, '_SEMICOLON_');   // ; → _SEMICOLON_
}
```

### Examples:
- `"Fresh Chicken Curry"` → `"Fresh_SPACE_Chicken_SPACE_Curry"`
- `"Chicken & Fish Combo"` → `"Chicken_SPACE_AND_SPACE_Fish_SPACE_Combo"`
- `"Special (Premium)"` → `"Special_SPACE_PAREN_Premium_PAREN_"`

---

## 📊 SEO Information

### Priority Levels:
- **0.7**: Individual product pages
- **0.8**: Product category pages
- **0.9**: Main version pages
- **1.0**: Homepage

### Update Frequencies:
- **Weekly**: Individual product pages
- **Weekly**: Product category pages
- **Weekly**: Main pages

### Meta Information:
Each product page includes:
- Product name as title
- Product description
- Product images
- Price information
- Category tags
- Related products

---

## 🚀 Dynamic Generation

### For Real-Time Product Mapping:
Use the provided `generate-product-urls.js` script:

```bash
# Install dependencies
npm install @supabase/supabase-js

# Set your Supabase key
export SUPABASE_ANON_KEY="your-supabase-anon-key"

# Run the script
node generate-product-urls.js
```

This will:
1. Fetch all products from Supabase tables
2. Generate proper slugs for each product
3. Create XML sitemap entries
4. Save to `product-urls.xml`

### Database Tables:
- `chicken` - Chicken products
- `fish` - Fish products  
- `mutton` - Mutton products
- `bhiryani` - Biryani products

---

## 📝 Notes

- All product URLs follow the pattern: `https://rawhalal.com/open/[slug]`
- Slugs are generated automatically from product names
- Special characters are converted to URL-safe equivalents
- Each product has its own dedicated page with full details
- Products are categorized by type (chicken, fish, mutton, biryani)
- SEO optimized with proper meta tags and structured data 
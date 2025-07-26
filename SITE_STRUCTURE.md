# Rawhalal Website Sitemap Structure

## 🌐 Main Domain: https://rawhalal.com

### 📱 Homepage
- **URL**: `/`
- **Description**: Main landing page with navigation to web/mobile versions
- **Priority**: High

---

## 🖥️ Web Version (`/web`)

### 🏠 Web Homepage
- **URL**: `/web`
- **Description**: Desktop-optimized main page
- **Priority**: High

### 📞 Contact Page
- **URL**: `/web/contact`
- **Description**: Contact information and form
- **Priority**: High

### 🍗 Product Categories

#### 🐔 Chicken Products
- **URL**: `/web/chicken`
- **Description**: Chicken product listings
- **Priority**: High

#### 🐟 Fish Products
- **URL**: `/web/fish`
- **Description**: Fish product listings
- **Priority**: High

#### 🐑 Mutton Products
- **URL**: `/web/mutton`
- **Description**: Mutton product listings
- **Priority**: High

#### 🍚 Biryani Products
- **URL**: `/web/bhiryani`
- **Description**: Biryani product listings
- **Priority**: High

---

## 📱 Mobile Version (`/mobile`)

### 🏠 Mobile Homepage
- **URL**: `/mobile`
- **Description**: Mobile-optimized main page
- **Priority**: High

### 🍗 Mobile Product Categories

#### 🐔 Chicken Products
- **URL**: `/mobile/chicken`
- **Description**: Mobile chicken product listings
- **Priority**: High

#### 🐟 Fish Products
- **URL**: `/mobile/fish`
- **Description**: Mobile fish product listings
- **Priority**: High

#### 🐑 Mutton Products
- **URL**: `/mobile/mutton`
- **Description**: Mobile mutton product listings
- **Priority**: High

#### 🍚 Biryani Products
- **URL**: `/mobile/bhiryani`
- **Description**: Mobile biryani product listings
- **Priority**: High

---

## 🔗 Dynamic Product Pages

### 📦 Individual Product Pages
- **URL Pattern**: `/open/[slug]`
- **Description**: Dynamic product detail pages
- **Examples**:
  - `/open/Fresh_SPACE_Chicken_SPACE_Curry`
  - `/open/Chicken_SPACE_Biryani`
  - `/open/Chicken_SPACE_Kebab`
  - `/open/Chicken_SPACE_Tikka`
  - `/open/Fresh_SPACE_Fish_SPACE_Curry`
  - `/open/Fish_SPACE_Biryani`
  - `/open/Fish_SPACE_Fry`
  - `/open/Fresh_SPACE_Mutton_SPACE_Curry`
  - `/open/Mutton_SPACE_Biryani`
  - `/open/Mutton_SPACE_Kebab`
  - `/open/Chicken_SPACE_Biryani_SPACE_Special`
  - `/open/Fish_SPACE_Biryani_SPACE_Special`
  - `/open/Mutton_SPACE_Biryani_SPACE_Special`
  - `/open/Veg_SPACE_Biryani`
- **Priority**: Medium

---

## 📄 Legal & Information Pages

### ℹ️ About Us
- **URL**: `/aboutus`
- **Description**: Company information and story
- **Priority**: Medium

### 🔒 Privacy Policy
- **URL**: `/privacypolicy`
- **Description**: Privacy policy and data handling
- **Priority**: Low

### 📋 Terms & Conditions
- **URL**: `/terms&conditions`
- **Description**: Terms of service and conditions
- **Priority**: Low

---

## ⚙️ Admin & System Pages

### 🔧 Admin Panel
- **URL**: `/admin`
- **Description**: Administrative interface
- **Priority**: Low (Admin only)

---

## 📊 SEO & Technical Information

### 🔍 Sitemap Priority Levels:
- **1.0**: Homepage (highest priority)
- **0.9**: Main version pages (web/mobile)
- **0.8**: Product category pages
- **0.7**: Dynamic product pages
- **0.6**: About us page
- **0.5**: Legal pages
- **0.3**: Admin pages (lowest priority)

### 📅 Update Frequencies:
- **Daily**: Dynamic product pages
- **Weekly**: Main pages and product categories
- **Monthly**: Contact, legal, and admin pages

### 🏗️ Architecture Notes:
- **Dual Version**: Separate web and mobile experiences
- **Dynamic Routing**: Product pages use slug-based URLs
- **Responsive Design**: Mobile-optimized layouts
- **SEO Optimized**: Proper meta tags and structured data

---

## 🚀 Next Steps for SEO:
1. Submit sitemap.xml to Google Search Console
2. Add meta descriptions to all pages
3. Implement structured data (JSON-LD)
4. Optimize images with alt tags
5. Set up canonical URLs
6. Monitor Core Web Vitals 
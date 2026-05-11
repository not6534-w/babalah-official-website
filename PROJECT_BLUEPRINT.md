# Babalah Grand Reveal Website — Project Blueprint

> Official luxury brand website for **Babalah / บาบาร่า** focused on brand image, product discovery, social proof, and purchase-channel redirection.  
> This project is positioned as a **premium cosmetic brand experience website**, not a direct e-commerce checkout website.

---

## 1. Project Overview

### Project Name
**Babalah Grand Reveal Website**

### Brand
**Babalah / บาบาร่า**

### Main Objective
Create an official brand website that:

- Builds a premium, trustworthy image for Babalah.
- Presents current product collections beautifully.
- Lets users explore product details.
- Guides users to buy through modern trade, distributors, and online platforms.
- Supports future product expansion and brand storytelling.

### Website Role
This website is designed to function as a:

- Brand showcase
- Product catalog
- Product education hub
- Social/contact gateway
- Retailer/channel redirection page

It is **not intended to be a direct checkout store** at this stage.

---

## 2. Brand Direction

### Core Brand Feeling
Babalah should feel like:

- Luxury cosmetic brand
- Feminine but powerful
- Magical glow
- Premium yet approachable
- K-beauty / beauty counter inspired
- High-end but still friendly for Thai and Asian consumers

### Brand Keywords

- Magic Skin
- Smooth Finish
- Soft Matte
- Glow Confidence
- Everyday Luxury
- Beauty Ritual
- Tropical Confidence
- Asian Skin Friendly

### Target Visual Mood

- Dark luxury background
- Purple-pink glow
- Rose-gold accents
- Floating product visuals
- Glassmorphism cards
- Soft cinematic movement
- Spacious editorial layout

---

## 3. Design System

### Color Palette

| Token | Color | Usage |
|---|---:|---|
| Deep Purple | `#2B0D3A` | Primary luxury tone |
| Royal Purple | `#5B2A86` | Main gradient and accent |
| Glow Pink | `#FF4DA6` | CTA / highlights |
| Soft Pink | `#FFC1E3` | Gentle accents |
| Soft Gold | `#E6C78B` | Premium detail |
| Dark Background | `#0F0A14` | Main background |

### Visual Rules

- Use dark background as the base.
- Use glow as a controlled focal point, not everywhere.
- Use wide spacing to create a premium feeling.
- Avoid clutter and heavy ecommerce-style selling.
- Product images should be the visual hero.
- Text should be short, emotional, and premium.

### UI Style

- Glassmorphism product cards
- Rounded corners
- Soft borders
- Subtle glow hover
- Fade-up motion
- Slow floating particles
- Elegant buttons

---

## 4. Current Tech Stack

### Frontend

- Vite
- React
- TypeScript
- React Router
- Tailwind CSS
- Framer Motion
- shadcn/ui components
- Lucide Icons

### Current Project Type
Static frontend brand website with routed pages.

### Current Backend
None.

### Future Backend Options

- Supabase
- Firebase
- Headless CMS
- JSON-based mini CMS as first step

---

## 5. Current Main Routes

| Route | Purpose |
|---|---|
| `/` | Homepage / main brand landing page |
| `/collection` | Product collection overview |
| `/product/:id` | Product detail page |
| `/about` | Brand story / philosophy |
| `/coming-soon` | Future product teaser |
| `/reviews` | Social proof / testimonials |
| `/contact` | Contact and social channels |
| `*` | Not found page |

---

## 6. Current Website Flow

### Homepage Flow

1. Hero Section
2. Signature Collection
3. Brand Authority / Trust Layer
4. Testimonials
5. Where to Buy
6. Footer

### Funnel Purpose

The website does not close sales through checkout.  
It converts users through:

1. Brand trust
2. Product desire
3. Product exploration
4. Purchase-channel redirection

---

## 7. Product Lineup

### Current Products

1. Magic Powder – Classic 14g  
   Original legendary Babalah powder.

2. Magic Powder – Oil Control 14g  
   Focused on oil control and long wear.

3. Magic Powder – Beeswax Glow 14g  
   Beeswax-inspired glow and hydration concept.

4. Magic Powder – BECCA Edition 14g  
   Premium upgraded formula direction.

5. Travel Size – Classic 7g  
   Compact travel-friendly version.

6. Travel Size – BECCA Edition 7g  
   Small version of BECCA formula.

7. Refill – Classic 14g  
   Refill powder tray and puff concept.

### Future Products

- Coming Soon products
- New powder formulas
- New cosmetic categories
- Seasonal or limited editions

---

## 8. Product Detail Page Requirements

Each product detail page should be visually strong and should include:

### Product Hero

- Large product image
- Premium glow lighting
- Product name
- Short emotional description
- Product size / formula tag

### Key Benefits

Examples:

- Oil Control
- Blur Pores
- Lightweight Feel
- Long Lasting
- HD Finish
- Smooth Skin
- Soft Matte
- Natural Glow

### Texture / Finish

Each product should describe:

- Skin finish
- Texture
- Wear feeling
- Best use case

### Who Is It For

Examples:

- Oily skin
- Combination skin
- Everyday makeup
- Tropical climate
- On-the-go touch-up

### How To Use

Simple steps:

1. Apply after skincare or base makeup.
2. Use puff to press gently onto skin.
3. Reapply lightly during the day as needed.

### Available At

- Shopee
- Lazada
- TikTok Shop
- LINE Official
- Selected retailers / distributors

No direct checkout button is required.

---

## 9. Data Architecture Recommendation

The next development phase should reduce hardcoded content.

### Recommended File Structure

```bash
src/
  data/
    products.ts
    site.ts
    retailers.ts
  components/
    product/
      ProductCard.tsx
      ProductDetailHero.tsx
      ProductBenefits.tsx
      ProductAvailability.tsx
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      Hero.tsx
      ProductGrid.tsx
      BrandAuthority.tsx
      Testimonials.tsx
      WhereToBuy.tsx
```

### Product Data Example

```ts
export const products = [
  {
    id: "classic-14g",
    name: "Magic Powder – Classic",
    size: "14g",
    tag: "Signature",
    shortDescription: "Legendary smooth skin finish for everyday confidence.",
    description: "A lightweight powder designed to smooth, blur, and keep skin looking fresh in tropical weather.",
    image: "/products/classic-14g.png",
    benefits: [
      "Smooth HD Finish",
      "Oil Control",
      "Pore Blurring",
      "Lightweight Feel"
    ],
    finish: "Soft Matte",
    skinTypes: ["Oily", "Combination", "Normal"],
    featured: true,
    availableAt: ["Shopee", "Lazada", "TikTok Shop", "LINE Official"]
  }
]
```

### Site Config Example

```ts
export const siteConfig = {
  brandName: "Babalah",
  tagline: "Unlock Your Magic Skin",
  social: {
    line: "#",
    tiktok: "#",
    facebook: "#",
    instagram: "#"
  },
  contact: {
    email: "hello@babalah.com",
    phone: "",
    address: ""
  }
}
```

---

## 10. Admin / CMS Direction

### Phase 1 — Simple Config Editing
Use local TypeScript data files:

- `products.ts`
- `site.ts`
- `retailers.ts`

This is easiest and safest for the current stage.

### Phase 2 — Mini Admin Panel
Create a hidden/admin route later:

- `/admin`

Admin can edit:

- Product name
- Description
- Benefits
- Image URL
- Retailer links
- Social links
- Contact info

### Phase 3 — Database CMS
Recommended backend:

- Supabase

Suggested tables:

- `products`
- `product_images`
- `retailers`
- `site_settings`
- `social_links`
- `contact_settings`

---

## 11. Content Management Priorities

### Must Be Editable Later

- Product names
- Product descriptions
- Product benefits
- Product images
- Product sizes
- Product availability links
- Social links
- Contact info
- Company address
- Google Map link
- Coming soon product teaser

### Can Stay Static For Now

- Visual layout
- Design system
- Brand background effects
- Motion style
- Section structure

---

## 12. SEO Requirements

Each page should eventually include proper metadata.

### Homepage

```html
<title>Babalah | Unlock Your Magic Skin</title>
<meta name="description" content="Official Babalah cosmetic brand website. Discover premium powder formulas for smooth, confident, long-lasting beauty." />
```

### Product Detail

```html
<title>Magic Powder – Classic | Babalah</title>
<meta name="description" content="Discover Babalah Magic Powder – Classic, a lightweight powder for smooth HD skin finish and everyday confidence." />
```

### SEO Priorities

- Page title
- Meta description
- Open Graph image
- Product-specific URLs
- Alt text for product images
- Fast image loading

---

## 13. Performance Notes

### Current Risks

- Many unused shadcn/ui components may increase project noise.
- Product images may need compression.
- Motion effects should remain subtle and optimized.

### Optimization Tasks

- Remove unused UI components later.
- Convert large images to WebP if possible.
- Add lazy loading for non-hero images.
- Keep animations GPU-friendly.
- Test mobile performance.

---

## 14. Deployment Plan

### Recommended Hosting

- Vercel
- Netlify
- Cloudflare Pages

### Build Command

```bash
npm run build
```

### Local Development

```bash
npm install --legacy-peer-deps
npm run dev
```

---

## 15. GitHub Repository Plan

### Recommended Repository Name

```bash
babalah-grand-reveal-web
```

### Recommended Initial Branch

```bash
main
```

### Recommended Commit Flow

```bash
git init
git add .
git commit -m "Initial Babalah brand website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/babalah-grand-reveal-web.git
git push -u origin main
```

---

## 16. Next Development Priorities

### Priority 1 — Product Data System

- Create `src/data/products.ts`
- Make Homepage, Collection, and Product Detail use the same product data.
- Remove duplicated product content from components.

### Priority 2 — Product Detail Polish

- Make each product detail page visually unique.
- Add better benefit sections.
- Add available channel links.

### Priority 3 — Site Config System

- Create `src/data/site.ts`
- Move social/contact/retailer links into config.

### Priority 4 — Admin / CMS

- Decide whether to use local JSON/TS config, Supabase, or another CMS.

### Priority 5 — Production Polish

- SEO
- Image optimization
- Unused component cleanup
- Accessibility
- Final deploy

---

## 17. Project Status

### Completed

- Luxury visual direction
- Homepage design
- Product grid
- Brand authority section
- Testimonials
- Where to buy section
- Footer
- Multi-page routing
- Product detail route `/product/:id`
- Basic page navigation

### In Progress

- Product detail UX refinement
- Dynamic data structure
- Editable content architecture

### Not Started Yet

- Admin panel
- Supabase backend
- Real CMS
- SEO metadata implementation
- Production deployment
- Analytics

---

## 18. Final Product Vision

The final website should feel like:

> A premium official Babalah brand website that makes customers trust the brand, desire the products, and know exactly where to buy — without making the site feel like a discount marketplace.

The website should support Babalah's long-term growth into:

- More product lines
- More retailers
- More brand storytelling
- Social campaigns
- Distributor support
- Future CMS/admin management

---

## 19. Development Principle

Do not overbuild too early.

Recommended approach:

1. Make the frontend beautiful and consistent.
2. Centralize data.
3. Add editable configuration.
4. Add backend only when the brand content becomes too much to manage manually.

This keeps the project clean, fast, and easy to scale.

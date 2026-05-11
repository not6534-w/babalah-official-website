import formula1_14g from "@/assets/product-formula1-14g.png";
import formula2_14g from "@/assets/product-formula2-14g.png";
import beeswax_14g from "@/assets/product-beeswax-14g.png";
import becca_14g from "@/assets/product-becca-14g.png";
import formula1_7g from "@/assets/product-formula1-7g.png";
import becca_7g from "@/assets/product-becca-7g.png";
import refill_14g from "@/assets/product-refill-14g.png";

export type Product = {
  id: string;
  name: string;
  shortName: string;
  size: string;
  edition: string;
  finish: string;
  highlight: string;
  description: string;
  image: string;
  tag?: string;
  glow: string;
  benefits: string[];
  texture: string;
  bestFor: string[];
  howToUse: string[];
};

export const defaultProducts: Product[] = [
  {
    id: "classic",
    name: "Magic Powder — Classic",
    shortName: "Classic",
    size: "14g",
    edition: "Signature Edition",
    finish: "Soft Matte Finish",
    highlight: "Legendary smooth, weightless finish",
    description:
      "A weightless veil of luminous matte. Crafted to blur, balance and beautify — Magic Powder Classic delivers a refined second-skin finish for everyday confidence.",
    image: formula1_14g,
    tag: "Signature",
    glow: "var(--accent)",
    benefits: [
      "Smooth HD skin finish",
      "Pore blurring effect",
      "Comfortable oil control",
      "Lightweight everyday wear",
      "Soft-focus matte look",
    ],
    texture: "Velvet-soft powder with a refined, breathable soft-matte finish.",
    bestFor: [
      "Everyday makeup routines",
      "Combination to oily skin",
      "People who love smooth, natural-looking coverage",
    ],
    howToUse: [
      "Press gently with the puff onto areas that need smoothing.",
      "Tap lightly across the T-zone to control shine.",
      "Reapply during the day for a refreshed, polished finish.",
    ],
  },
  {
    id: "oil-control",
    name: "Magic Powder — Oil Control",
    shortName: "Oil Control",
    size: "14g",
    edition: "Best Seller Edition",
    finish: "Long-Wear Matte Finish",
    highlight: "Extreme oil control, all-day matte",
    description:
      "A shine-control powder designed for humid days and long wear. It helps skin look smoother, fresher and more balanced without feeling heavy.",
    image: formula2_14g,
    tag: "Best Seller",
    glow: "var(--secondary)",
    benefits: [
      "Stronger oil-control feel",
      "Fresh matte appearance",
      "Helps reduce visible shine",
      "Comfortable for tropical climates",
      "Smooth, non-heavy finish",
    ],
    texture: "Light, smooth powder made for a cleaner matte look and longer fresh-face comfort.",
    bestFor: [
      "Oily skin and combination skin",
      "Hot or humid weather",
      "Long days, live selling, workdays and events",
    ],
    howToUse: [
      "Apply after base makeup or sunscreen.",
      "Focus on forehead, nose and chin.",
      "Use a light touch to refresh shine-prone areas during the day.",
    ],
  },
  {
    id: "beeswax",
    name: "Magic Powder — Beeswax Glow",
    shortName: "Beeswax Glow",
    size: "14g",
    edition: "Glow Edition",
    finish: "Radiant Soft Finish",
    highlight: "Glow hydration with natural radiance",
    description:
      "A softer glow expression for skin that wants refinement with radiance. Designed to leave the complexion looking smooth, fresh and naturally luminous.",
    image: beeswax_14g,
    tag: "Limited",
    glow: "var(--gold)",
    benefits: [
      "Radiant, healthy-looking finish",
      "Soft-focus skin effect",
      "Comfortable powder texture",
      "Helps skin look fresh, not flat",
      "Elegant glow for daily wear",
    ],
    texture: "Silky powder with a gentle luminous touch, made for skin that looks polished but alive.",
    bestFor: [
      "Normal to combination skin",
      "Glow-finish makeup lovers",
      "Soft glam and everyday radiant looks",
    ],
    howToUse: [
      "Apply lightly on the center of the face.",
      "Layer softly where you want a more refined finish.",
      "Pair with minimal base makeup for natural radiance.",
    ],
  },
  {
    id: "becca",
    name: "Magic Powder — BECCA Edition",
    shortName: "BECCA Edition",
    size: "14g",
    edition: "Premium Edition",
    finish: "Premium Skin Finish",
    highlight: "Premium luminous skin finish",
    description:
      "A more elevated interpretation of Babalah powder — refined, luminous and graceful. Designed for moments when skin needs to look especially polished.",
    image: becca_14g,
    tag: "Limited",
    glow: "var(--soft-pink)",
    benefits: [
      "More premium polished finish",
      "Soft luminosity without heaviness",
      "Smooth skin appearance",
      "Comfortable refined texture",
      "Elegant finish for special moments",
    ],
    texture: "A refined powder texture that softens the look of skin while keeping a graceful luminous finish.",
    bestFor: [
      "Special occasions",
      "Luxury everyday makeup",
      "People who prefer a polished glow finish",
    ],
    howToUse: [
      "Use after foundation or cushion to set the complexion.",
      "Apply in thin layers for the most refined result.",
      "Touch up lightly before photos or events.",
    ],
  },
  {
    id: "travel-classic",
    name: "Travel Size — Classic",
    shortName: "Travel Classic",
    size: "7g",
    edition: "Travel Edition",
    finish: "Soft Matte Finish",
    highlight: "Everyday confidence, anywhere",
    description:
      "The classic Babalah finish in a smaller, more portable size — perfect for handbags, travel and quick touch-ups throughout the day.",
    image: formula1_7g,
    glow: "var(--accent)",
    benefits: ["Portable compact size", "Easy touch-up", "Smooth soft-matte finish", "Lightweight feel"],
    texture: "The familiar Classic soft-matte finish in a convenient travel-friendly format.",
    bestFor: ["Daily carry", "Travel", "First-time Babalah users"],
    howToUse: ["Carry in your bag for shine touch-ups.", "Press lightly onto T-zone.", "Use anytime skin needs a smoother look."],
  },
  {
    id: "travel-becca",
    name: "Travel Size — BECCA Edition",
    shortName: "Travel BECCA",
    size: "7g",
    edition: "Travel Edition",
    finish: "Premium Skin Finish",
    highlight: "Pocket luxury, flawless on the go",
    description:
      "A compact travel version of the BECCA Edition for elegant touch-ups and polished skin anywhere.",
    image: becca_7g,
    tag: "Limited",
    glow: "var(--soft-pink)",
    benefits: ["Portable premium finish", "Soft luminous effect", "Easy touch-up", "Refined compact size"],
    texture: "A refined luminous powder texture in a pocket-friendly size.",
    bestFor: ["Handbag touch-ups", "Special events", "Travel beauty kits"],
    howToUse: ["Apply in thin layers.", "Focus on areas needing a polished look.", "Touch up before photos or events."],
  },
  {
    id: "refill",
    name: "Refill — Classic",
    shortName: "Classic Refill",
    size: "14g",
    edition: "Refill Edition",
    finish: "Soft Matte Finish",
    highlight: "Refill your magic, effortlessly",
    description:
      "A thoughtful refill option for the Classic formula — designed for customers who already love the signature Babalah ritual.",
    image: refill_14g,
    tag: "Refill",
    glow: "var(--gold)",
    benefits: ["Refill format", "Signature Classic finish", "Practical everyday option", "Easy to replace"],
    texture: "The same Classic soft-matte powder in refill format.",
    bestFor: ["Existing Babalah users", "Daily powder lovers", "Customers who want a practical refill option"],
    howToUse: ["Replace the powder tray carefully.", "Use with the original compact and puff.", "Store away from heat and moisture."],
  },
];

export const featuredProductIds = ["classic", "oil-control", "beeswax", "refill"];

const PRODUCTS_STORAGE_KEY = "babalah_products";

export const getAllProducts = (): Product[] => {
  if (typeof window === "undefined") return defaultProducts;

  try {
    const stored = window.localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (!stored) return defaultProducts;
    const parsed = JSON.parse(stored) as Product[];
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultProducts;
  } catch {
    return defaultProducts;
  }
};

export const getProductById = (id?: string) => getAllProducts().find((p) => p.id === id);

export const getFeaturedProducts = () =>
  getAllProducts().filter((p) => featuredProductIds.includes(p.id));

export const saveProducts = (nextProducts: Product[]) => {
  window.localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(nextProducts));
};

export const resetProducts = () => {
  window.localStorage.removeItem(PRODUCTS_STORAGE_KEY);
};

export const products = defaultProducts;

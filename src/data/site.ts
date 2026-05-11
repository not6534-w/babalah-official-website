export type RetailerLink = {
  name: string;
  href: string;
  glow?: string;
};

export type SocialLink = {
  name: "Instagram" | "Facebook" | "TikTok" | "LINE";
  href: string;
};

export type SiteConfig = {
  brandName: string;
  heroBadge: string;
  heroTitleTop: string;
  heroTitleAccent: string;
  heroDescription: string;
  brandStatement: string;
  email: string;
  phone: string;
  address: string;
  mapUrl: string;
  retailers: RetailerLink[];
  socials: SocialLink[];
};

export const defaultSiteConfig: SiteConfig = {
  brandName: "BABALAH",
  heroBadge: "Babalah · Magic Powder",
  heroTitleTop: "Unlock Your",
  heroTitleAccent: "Magic Skin",
  heroDescription:
    "Flawless, smooth, and radiant skin with Babalah powder. Designed for everyday confidence.",
  brandStatement:
    "Effortless luxury for everyday beauty — crafted to let your skin glow with quiet confidence.",
  email: "hello@babalah.com",
  phone: "",
  address: "Bangkok, Thailand",
  mapUrl: "",
  retailers: [
    { name: "Shopee", href: "#", glow: "var(--accent)" },
    { name: "Lazada", href: "#", glow: "var(--secondary)" },
    { name: "TikTok Shop", href: "#", glow: "var(--soft-pink)" },
    { name: "LINE Official", href: "#", glow: "var(--gold)" },
  ],
  socials: [
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "TikTok", href: "#" },
    { name: "LINE", href: "#" },
  ],
};

const SITE_STORAGE_KEY = "babalah_site_config";

export const getSiteConfig = (): SiteConfig => {
  if (typeof window === "undefined") return defaultSiteConfig;

  try {
    const stored = window.localStorage.getItem(SITE_STORAGE_KEY);
    if (!stored) return defaultSiteConfig;
    return { ...defaultSiteConfig, ...JSON.parse(stored) } as SiteConfig;
  } catch {
    return defaultSiteConfig;
  }
};

export const saveSiteConfig = (config: SiteConfig) => {
  window.localStorage.setItem(SITE_STORAGE_KEY, JSON.stringify(config));
};

export const resetSiteConfig = () => {
  window.localStorage.removeItem(SITE_STORAGE_KEY);
};

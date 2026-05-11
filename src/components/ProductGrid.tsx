import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import formula1_14g from "@/assets/product-formula1-14g.png";
import formula2_14g from "@/assets/product-formula2-14g.png";
import beeswax_14g from "@/assets/product-beeswax-14g.png";
import becca_14g from "@/assets/product-becca-14g.png";
import formula1_7g from "@/assets/product-formula1-7g.png";
import becca_7g from "@/assets/product-becca-7g.png";
import refill_14g from "@/assets/product-refill-14g.png";

const ease = [0.22, 1, 0.36, 1] as const;

type Product = {
  id: string;
  name: string;
  size: string;
  highlight: string;
  image: string;
  tag?: string;
  cta?: string;
  glow: string;
};

const products: Product[] = [
  {
    id: "classic",
    name: "Magic Powder — Classic",
    size: "14g",
    highlight: "Legendary smooth, weightless finish",
    image: formula1_14g,
    tag: "Signature",
    cta: "Explore Formula",
    glow: "var(--accent)",
  },
  {
    id: "oil-control",
    name: "Magic Powder — Oil Control",
    size: "14g",
    highlight: "Extreme oil control, all-day matte",
    image: formula2_14g,
    tag: "Best Seller",
    cta: "Explore Formula",
    glow: "var(--secondary)",
  },
  {
    id: "beeswax",
    name: "Magic Powder — Beeswax Glow",
    size: "14g",
    highlight: "Glow hydration with natural radiance",
    image: beeswax_14g,
    tag: "Limited",
    cta: "Explore Formula",
    glow: "var(--gold)",
  },
  {
    id: "becca",
    name: "Magic Powder — BECCA Edition",
    size: "14g",
    highlight: "Premium luminous skin finish",
    image: becca_14g,
    tag: "Limited",
    cta: "Explore Formula",
    glow: "var(--soft-pink)",
  },
  {
    id: "travel-classic",
    name: "Travel Size — Classic",
    size: "7g",
    highlight: "Everyday confidence, anywhere",
    image: formula1_7g,
    cta: "Discover More",
    glow: "var(--accent)",
  },
  {
    id: "travel-becca",
    name: "Travel Size — BECCA Edition",
    size: "7g",
    highlight: "Pocket luxury, flawless on the go",
    image: becca_7g,
    cta: "Discover More",
    glow: "var(--soft-pink)",
  },
  {
    id: "refill",
    name: "Refill — Classic",
    size: "14g",
    highlight: "Refill your magic, effortlessly",
    image: refill_14g,
    cta: "Discover More",
    glow: "var(--gold)",
  },
];

const categoryHints = ["Daily", "Oil Control", "Glow", "Premium"];

const FEATURED_IDS = ["classic", "oil-control", "beeswax", "refill"];

type ProductGridProps = { featured?: boolean };

const ProductGrid = ({ featured = false }: ProductGridProps) => {
  const visibleProducts = featured
    ? products.filter((p) => FEATURED_IDS.includes(p.id))
    : products;

  return (
    <section id="collection" className="relative py-40 md:py-40 overflow-hidden grain">
      {/* Atmospheric backdrop — consistent with hero */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(270 35% 5%) 0%, hsl(270 32% 7%) 50%, hsl(270 38% 4%) 100%)",
          }}
        />
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, hsl(var(--accent) / 0.12) 0%, hsl(var(--secondary) / 0.08) 35%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[-15%] right-[10%] w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--soft-pink) / 0.10) 0%, transparent 65%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-7">
            <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--gold))]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-foreground/70">
              The Collection
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-foreground">
            Our <span className="italic text-gradient-gold">Signature</span>
            <br />
            Collection
          </h2>

          <p className="mt-7 text-base md:text-lg text-foreground/60 font-light leading-relaxed max-w-xl mx-auto">
            Discover the magic behind flawless skin — seven formulas, one ritual of effortless luxury.
          </p>

          <div className="mt-10 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.6)] to-transparent" />
        </motion.div>

        {/* Brand story layer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="text-center max-w-2xl mx-auto mb-20 md:mb-24"
        >
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-foreground/95">
            A Formula for <span className="italic text-gradient-gold">Every</span> Skin Moment
          </h3>
          <p className="mt-6 text-sm md:text-base text-foreground/55 font-light leading-relaxed max-w-lg mx-auto">
            Each Babalah powder is crafted to enhance your natural beauty — from soft matte perfection to radiant glow.
          </p>

          {/* Category hints */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {categoryHints.map((hint, i) => (
              <div key={hint} className="flex items-center gap-8">
                <span className="text-[11px] tracking-[0.32em] uppercase text-foreground/45 font-light">
                  {hint}
                </span>
                {i < categoryHints.length - 1 && (
                  <span className="hidden sm:block w-1 h-1 rounded-full bg-[hsl(var(--gold)/0.4)]" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Grid — center incomplete last row */}
        <div className="flex flex-wrap justify-center gap-12 sm:gap-9 md:gap-9">
          {visibleProducts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.06 }}
              className="group relative block w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <Link to={`/product/${p.id}`} className="block h-full">
              {/* Outer glow halo on hover */}
              <div
                className="absolute -inset-1 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, hsl(${p.glow} / 0.45), transparent 70%)`,
                }}
              />

              <article className="relative h-full glass-strong rounded-[1.75rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-3 group-hover:border-white/25 group-hover:shadow-[0_40px_90px_-20px_hsl(var(--accent)/0.4)]">
                {/* Image stage */}
                <div className="relative aspect-square overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 65%, hsl(270 38% 12%) 0%, hsl(270 38% 6%) 75%)",
                    }}
                  />

                  <div
                    className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at 50% 60%, hsl(${p.glow} / 0.32) 0%, transparent 55%)`,
                      filter: "blur(20px)",
                    }}
                  />

                  {/* Luxury tag */}
                  {p.tag && (
                    <div className="absolute top-5 left-5 z-10">
                      <span className="text-[9px] tracking-[0.32em] uppercase px-2.5 py-1 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 text-foreground/70 font-light">
                        {p.tag}
                      </span>
                    </div>
                  )}

                  {/* Subtle size whisper */}
                  <div className="absolute top-5 right-5 z-10">
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[hsl(var(--gold))]/55 font-light">
                      {p.size}
                    </span>
                  </div>

                  <img
                    src={p.image}
                    alt={`${p.name} ${p.size}`}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="relative z-[2] w-full h-full object-contain p-10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    style={{
                      filter:
                        "drop-shadow(0 25px 35px hsl(270 60% 2% / 0.7)) drop-shadow(0 8px 18px hsl(var(--accent) / 0.18))",
                    }}
                  />

                  <div
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[55%] h-5 rounded-full opacity-60 blur-xl"
                    style={{ background: "hsl(270 60% 2% / 0.8)" }}
                  />

                  <div
                    className="absolute inset-x-0 top-0 h-24 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, hsl(0 0% 100% / 0.05) 0%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative px-7 pt-7 pb-8 border-t border-white/[0.06]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-2xl md:text-[1.6rem] leading-tight tracking-tight text-foreground">
                        {p.name}
                      </h3>
                      <p className="mt-2.5 text-sm text-foreground/55 font-light leading-relaxed line-clamp-1">
                        {p.highlight}
                      </p>
                    </div>

                    <div className="shrink-0 mt-1">
                      <div className="w-11 h-11 rounded-full glass flex items-center justify-center transition-all duration-500 group-hover:bg-gradient-brand group-hover:border-transparent group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)]">
                        <ArrowUpRight className="w-4 h-4 text-foreground/80 transition-transform duration-500 group-hover:rotate-12 group-hover:text-white" />
                      </div>
                    </div>
                  </div>

                  {/* CTA with luxury underline animation */}
                  <div className="mt-5 flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-[hsl(var(--gold))]/75 group-hover:text-[hsl(var(--gold))] transition-colors duration-500">
                    <span className="relative inline-block">
                      {p.cta ?? "Discover More"}
                      <span className="absolute left-0 -bottom-1 h-px w-full bg-[hsl(var(--gold))] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-[hsl(var(--gold)/0.4)] to-transparent" />
                  </div>
                </div>
              </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Brand availability footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="mt-20 md:mt-24 text-center"
        >
          <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.5)] to-transparent mb-6" />
          <p className="text-[11px] tracking-[0.32em] uppercase text-foreground/45 font-light">
            Available at leading retailers and online platforms
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;

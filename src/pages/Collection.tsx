import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import WhereToBuy from "@/components/WhereToBuy";
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
  glow: string;
};

type Category = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
};

const categories: Category[] = [
  {
    id: "daily",
    eyebrow: "01 — Everyday",
    title: "Daily Perfection",
    description:
      "Weightless formulas crafted for an effortless, second-skin finish — your everyday ritual of quiet luxury.",
    products: [
      {
        id: "classic",
        name: "Magic Powder — Classic",
        size: "14g",
        highlight: "Legendary smooth, weightless finish",
        image: formula1_14g,
        tag: "Signature",
        glow: "var(--accent)",
      },
      {
        id: "travel-classic",
        name: "Travel Size — Classic",
        size: "7g",
        highlight: "Everyday confidence, anywhere",
        image: formula1_7g,
        glow: "var(--accent)",
      },
      {
        id: "refill",
        name: "Refill — Classic",
        size: "14g",
        highlight: "Refill your magic, effortlessly",
        image: refill_14g,
        tag: "Refill",
        glow: "var(--gold)",
      },
    ],
  },
  {
    id: "oil-control",
    eyebrow: "02 — Matte",
    title: "Oil Control",
    description:
      "Engineered for tropical climates and luminous skin — extreme shine control with breathable comfort.",
    products: [
      {
        id: "oil-control",
        name: "Magic Powder — Oil Control",
        size: "14g",
        highlight: "Extreme oil control, all-day matte",
        image: formula2_14g,
        tag: "Best Seller",
        glow: "var(--secondary)",
      },
    ],
  },
  {
    id: "glow",
    eyebrow: "03 — Radiance",
    title: "Glow Finish",
    description:
      "Soft-focus radiance infused with golden hydration — the natural luminosity of well-loved skin.",
    products: [
      {
        id: "beeswax",
        name: "Magic Powder — Beeswax Glow",
        size: "14g",
        highlight: "Glow hydration with natural radiance",
        image: beeswax_14g,
        tag: "Limited",
        glow: "var(--gold)",
      },
    ],
  },
  {
    id: "premium",
    eyebrow: "04 — Maison",
    title: "Premium Collection",
    description:
      "Our most coveted editions — refined formulas reserved for the moments that ask for something exceptional.",
    products: [
      {
        id: "becca",
        name: "Magic Powder — BECCA Edition",
        size: "14g",
        highlight: "Premium luminous skin finish",
        image: becca_14g,
        tag: "Limited",
        glow: "var(--soft-pink)",
      },
      {
        id: "travel-becca",
        name: "Travel Size — BECCA Edition",
        size: "7g",
        highlight: "Pocket luxury, flawless on the go",
        image: becca_7g,
        tag: "Limited",
        glow: "var(--soft-pink)",
      },
    ],
  },
];

const ProductCard = ({ p, i }: { p: Product; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, ease, delay: i * 0.08 }}
    className="group relative block w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
  >
    <Link to={`/product/${p.id}`} className="block h-full">
    <div
      className="absolute -inset-1 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"
      style={{ background: `radial-gradient(circle at 50% 50%, hsl(${p.glow} / 0.45), transparent 70%)` }}
    />
    <article className="relative h-full glass-strong rounded-[1.75rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-3 group-hover:border-white/25 group-hover:shadow-[0_40px_90px_-20px_hsl(var(--accent)/0.4)]">
      <div className="relative aspect-square overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 65%, hsl(270 38% 12%) 0%, hsl(270 38% 6%) 75%)" }}
        />
        <div
          className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at 50% 60%, hsl(${p.glow} / 0.32) 0%, transparent 55%)`,
            filter: "blur(20px)",
          }}
        />
        {p.tag && (
          <div className="absolute top-5 left-5 z-10">
            <span className="text-[9px] tracking-[0.32em] uppercase px-2.5 py-1 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 text-foreground/70 font-light">
              {p.tag}
            </span>
          </div>
        )}
        <div className="absolute top-5 right-5 z-10">
          <span className="text-[9px] tracking-[0.3em] uppercase text-[hsl(var(--gold))]/55 font-light">
            {p.size}
          </span>
        </div>
        <img
          src={p.image}
          alt={`${p.name} ${p.size}`}
          loading="lazy"
          className="relative z-[2] w-full h-full object-contain p-10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          style={{ filter: "drop-shadow(0 25px 35px hsl(270 60% 2% / 0.7)) drop-shadow(0 8px 18px hsl(var(--accent) / 0.18))" }}
        />
      </div>
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
        <div className="mt-5 flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-[hsl(var(--gold))]/75 group-hover:text-[hsl(var(--gold))] transition-colors duration-500">
          <span className="relative inline-block">
            Explore Formula
            <span className="absolute left-0 -bottom-1 h-px w-full bg-[hsl(var(--gold))] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-[hsl(var(--gold)/0.4)] to-transparent" />
        </div>
      </div>
    </article>
    </Link>
  </motion.div>
);

const Collection = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden grain">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, hsl(270 35% 5%) 0%, hsl(270 32% 7%) 100%)" }}
          />
          <div
            className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, hsl(var(--accent) / 0.14) 0%, hsl(var(--secondary) / 0.08) 35%, transparent 70%)",
              filter: "blur(90px)",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="container max-w-5xl mx-auto px-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-7">
            <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--gold))]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-foreground/70">
              The Maison Collection
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground">
            A <span className="italic text-gradient-gold">Curated</span>
            <br />
            Beauty Ritual
          </h1>
          <p className="mt-8 text-base md:text-lg text-foreground/60 font-light leading-relaxed max-w-2xl mx-auto">
            Four chapters. One philosophy of effortless luxury — discover the formula written for your skin.
          </p>
          <div className="mt-10 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.6)] to-transparent" />
        </motion.div>
      </section>

      {/* Categories */}
      {categories.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className="relative py-24 md:py-32 overflow-hidden grain"
        >
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute inset-0"
              style={{
                background:
                  idx % 2 === 0
                    ? "linear-gradient(180deg, hsl(270 32% 7%) 0%, hsl(270 38% 4%) 100%)"
                    : "linear-gradient(180deg, hsl(270 38% 4%) 0%, hsl(270 32% 7%) 100%)",
              }}
            />
            <div
              className="absolute top-1/3 left-[-10%] w-[600px] h-[500px] rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle, hsl(var(--${idx % 2 === 0 ? "accent" : "soft-pink"}) / 0.1) 0%, transparent 65%)`,
                filter: "blur(100px)",
              }}
            />
          </div>

          <div className="container max-w-7xl mx-auto px-6">
            {/* Category header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease }}
              className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
            >
              <p className="text-[11px] tracking-[0.4em] uppercase text-[hsl(var(--gold))]/70 font-light mb-5">
                {cat.eyebrow}
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-foreground">
                {cat.title.split(" ").map((w, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="italic text-gradient-gold"> {w}</span>
                  ) : (
                    <span key={i}>{i > 0 ? " " : ""}{w}</span>
                  )
                )}
              </h2>
              <p className="mt-6 text-base md:text-lg text-foreground/55 font-light leading-relaxed max-w-xl mx-auto">
                {cat.description}
              </p>
              <div className="mt-8 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.5)] to-transparent" />
            </motion.div>

            {/* Products */}
            <div className="flex flex-wrap justify-center gap-7 md:gap-9">
              {cat.products.map((p, i) => (
                <ProductCard key={p.id} p={p} i={i} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Closing line */}
      <section className="relative py-20 text-center">
        <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.5)] to-transparent mb-6" />
        <p className="text-[11px] tracking-[0.32em] uppercase text-foreground/45 font-light">
          Available at leading retailers and online platforms
        </p>
      </section>

      <WhereToBuy />
    </main>
  );
};

export default Collection;

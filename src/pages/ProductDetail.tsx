import { motion } from "framer-motion";
import { ArrowLeft, Feather, Sparkles, Sun, Wind, ArrowUpRight, MapPin } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import WhereToBuy from "@/components/WhereToBuy";
import Footer from "@/components/Footer";
import { getAllProducts, getProductById } from "@/lib/products";
import { getSiteConfig } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

const iconCycle = [Sparkles, Sun, Feather, Wind];

const ProductDetail = () => {
  const { productId } = useParams();
  const product = getProductById(productId);
  const site = getSiteConfig();

  if (!product) return <Navigate to="/collection" replace />;

  const related = getAllProducts().filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden grain">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(270 35% 5%) 0%, hsl(270 32% 7%) 60%, hsl(270 38% 4%) 100%)",
            }}
          />
          <div
            className="absolute top-[10%] right-[-5%] w-[800px] h-[700px] rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, hsl(${product.glow} / 0.22) 0%, hsl(var(--soft-pink) / 0.08) 40%, transparent 70%)`,
              filter: "blur(85px)",
            }}
          />
        </div>

        <div className="container max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="mb-12 md:mb-16"
          >
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase text-foreground/55 hover:text-[hsl(var(--gold))] transition-colors duration-500"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Collection</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-square rounded-[2rem] overflow-hidden glass-strong">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 60%, hsl(270 38% 14%) 0%, hsl(270 38% 5%) 80%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 50% 55%, hsl(${product.glow} / 0.38) 0%, hsl(var(--soft-pink) / 0.13) 30%, transparent 60%)`,
                    filter: "blur(30px)",
                  }}
                />
                <div
                  className="absolute inset-x-0 top-0 h-32 pointer-events-none"
                  style={{ background: "linear-gradient(180deg, hsl(0 0% 100% / 0.06) 0%, transparent 100%)" }}
                />

                <img
                  src={product.image}
                  alt={`${product.name} ${product.size}`}
                  className="relative z-[2] w-full h-full object-contain p-12 md:p-16"
                  style={{
                    filter:
                      "drop-shadow(0 35px 50px hsl(270 60% 2% / 0.8)) drop-shadow(0 12px 24px hsl(var(--accent) / 0.25))",
                  }}
                />
                <div
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[60%] h-6 rounded-full opacity-70 blur-2xl"
                  style={{ background: "hsl(270 60% 2% / 0.85)" }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-7">
                <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--gold))]" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-foreground/70">{product.edition}</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-foreground">
                Magic Powder
                <br />
                <span className="italic text-gradient-gold">— {product.shortName}</span>
              </h1>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-[11px] tracking-[0.32em] uppercase text-foreground/50">
                <span>{product.size}</span>
                <span className="w-1 h-1 rounded-full bg-[hsl(var(--gold)/0.5)]" />
                <span>{product.finish}</span>
              </div>

              <p className="mt-8 text-base md:text-lg text-foreground/65 font-light leading-relaxed max-w-xl">
                {product.description}
              </p>

              <div className="mt-10 h-px w-24 bg-gradient-to-r from-[hsl(var(--gold)/0.6)] via-[hsl(var(--gold)/0.3)] to-transparent" />

              <div className="mt-10">
                <h3 className="text-[11px] tracking-[0.32em] uppercase text-foreground/50 mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {product.benefits.map((benefit, i) => {
                    const Icon = iconCycle[i % iconCycle.length];
                    return (
                      <motion.li
                        key={benefit}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease, delay: 0.4 + i * 0.08 }}
                        className="flex items-center gap-4 group"
                      >
                        <span className="shrink-0 w-9 h-9 rounded-full glass flex items-center justify-center transition-all duration-500 group-hover:border-[hsl(var(--gold)/0.45)]">
                          <Icon className="w-4 h-4 text-[hsl(var(--gold))]" strokeWidth={1.25} />
                        </span>
                        <span className="text-sm md:text-base text-foreground/70 font-light">{benefit}</span>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-[hsl(var(--gold))]/75 font-light">
                  <MapPin className="h-3.5 w-3.5" />
                  Available at leading retailers
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {site.retailers.map((retailer) => (
                    <a
                      key={retailer.name}
                      href={retailer.href}
                      target={retailer.href === "#" ? undefined : "_blank"}
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-foreground/70 transition-all duration-500 hover:border-[hsl(var(--gold)/0.55)] hover:text-[hsl(var(--gold))] hover:shadow-[0_0_28px_hsl(var(--accent)/0.22)]"
                    >
                      {retailer.name}
                      <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:rotate-12" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease }}
              className="glass-strong rounded-[1.75rem] p-8 md:p-10 md:col-span-1"
            >
              <p className="text-[11px] tracking-[0.32em] uppercase text-[hsl(var(--gold))]/70">Texture</p>
              <h2 className="mt-5 font-display text-3xl md:text-4xl leading-tight text-foreground">{product.finish}</h2>
              <p className="mt-6 text-sm md:text-base text-foreground/60 font-light leading-relaxed">{product.texture}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="glass-strong rounded-[1.75rem] p-8 md:p-10"
            >
              <p className="text-[11px] tracking-[0.32em] uppercase text-[hsl(var(--gold))]/70">Best For</p>
              <ul className="mt-6 space-y-4">
                {product.bestFor.map((item) => (
                  <li key={item} className="text-sm md:text-base text-foreground/65 font-light leading-relaxed">• {item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="glass-strong rounded-[1.75rem] p-8 md:p-10"
            >
              <p className="text-[11px] tracking-[0.32em] uppercase text-[hsl(var(--gold))]/70">How to Use</p>
              <ol className="mt-6 space-y-4">
                {product.howToUse.map((item, i) => (
                  <li key={item} className="flex gap-4 text-sm md:text-base text-foreground/65 font-light leading-relaxed">
                    <span className="text-[hsl(var(--gold))]/70">0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden grain">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between gap-8 mb-12">
            <div>
              <p className="text-[11px] tracking-[0.32em] uppercase text-foreground/45">Explore More</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-foreground">
                More from <span className="italic text-gradient-gold">Babalah</span>
              </h2>
            </div>
            <Link to="/collection" className="hidden md:inline-flex text-[11px] tracking-[0.28em] uppercase text-[hsl(var(--gold))]/80 hover:text-[hsl(var(--gold))] transition-colors">
              View Collection
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {related.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease, delay: i * 0.08 }}
              >
                <Link to={`/product/${item.id}`} className="group block glass-strong rounded-[1.75rem] overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-white/25">
                  <div className="relative aspect-square">
                    <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 55%, hsl(${item.glow} / 0.28), transparent 60%)`, filter: "blur(18px)" }} />
                    <img src={item.image} alt={item.name} className="relative z-[1] h-full w-full object-contain p-10 transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="border-t border-white/[0.06] p-7">
                    <h3 className="font-display text-2xl text-foreground">{item.name}</h3>
                    <p className="mt-2 text-sm text-foreground/55 font-light">{item.highlight}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhereToBuy />
      <Footer />
    </main>
  );
};

export default ProductDetail;

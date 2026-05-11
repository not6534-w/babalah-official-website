import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Save, RotateCcw, Database, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { defaultProducts, getAllProducts, resetProducts, saveProducts, type Product } from "@/lib/products";
import { defaultSiteConfig, getSiteConfig, resetSiteConfig, saveSiteConfig, type SiteConfig } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;
const splitLines = (value: string) => value.split("\n").map((v) => v.trim()).filter(Boolean);
const joinLines = (value: string[]) => value.join("\n");

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-foreground/45">{label}</span>
    {children}
  </label>
);

const inputClass = "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground/80 outline-none transition focus:border-[hsl(var(--gold)/0.55)] focus:bg-white/[0.06]";
const textareaClass = `${inputClass} min-h-28 resize-y leading-relaxed`;

const Admin = () => {
  const [products, setProducts] = useState<Product[]>(() => getAllProducts());
  const [selectedId, setSelectedId] = useState(() => getAllProducts()[0]?.id ?? "classic");
  const [site, setSite] = useState<SiteConfig>(() => getSiteConfig());
  const [saved, setSaved] = useState(false);

  const selectedProduct = useMemo(
    () => products.find((p) => p.id === selectedId) ?? products[0],
    [products, selectedId]
  );

  const updateProduct = (patch: Partial<Product>) => {
    if (!selectedProduct) return;
    setProducts((current) => current.map((p) => (p.id === selectedProduct.id ? { ...p, ...patch } : p)));
  };

  const persist = () => {
    saveProducts(products);
    saveSiteConfig(site);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };

  const resetAll = () => {
    resetProducts();
    resetSiteConfig();
    setProducts(defaultProducts);
    setSite(defaultSiteConfig);
    setSelectedId(defaultProducts[0]?.id ?? "classic");
    setSaved(false);
  };

  if (!selectedProduct) return null;

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="relative pt-36 md:pt-44 pb-20 grain">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(270 35% 5%) 0%, hsl(270 38% 4%) 100%)" }} />
          <div className="absolute top-0 right-0 h-[600px] w-[700px] rounded-full bg-[hsl(var(--accent)/0.12)] blur-[120px]" />
        </div>

        <div className="container max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-7">
              <Database className="w-3.5 h-3.5 text-[hsl(var(--gold))]" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-foreground/70">Content Manager</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-foreground">
              Babalah <span className="italic text-gradient-gold">Studio</span>
            </h1>
            <p className="mt-7 max-w-2xl text-foreground/60 font-light leading-relaxed">
              แก้ข้อความสินค้า รูปสินค้า ลิงก์ช่องทางจำหน่าย และข้อมูลติดต่อแบบ local CMS ก่อนต่อยอดไป Supabase/Firebase ในอนาคต
            </p>
          </motion.div>

          <div className="mt-12 flex flex-wrap gap-4">
            <button onClick={persist} className="inline-flex items-center gap-3 rounded-full bg-gradient-brand px-6 py-3 text-xs uppercase tracking-[0.24em] text-white shadow-[0_0_35px_hsl(var(--accent)/0.35)] transition hover:-translate-y-0.5">
              <Save className="h-4 w-4" /> Save Changes
            </button>
            <button onClick={resetAll} className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-xs uppercase tracking-[0.24em] text-foreground/70 transition hover:border-[hsl(var(--gold)/0.45)] hover:text-[hsl(var(--gold))]">
              <RotateCcw className="h-4 w-4" /> Reset Defaults
            </button>
            {saved && <span className="self-center text-sm text-[hsl(var(--gold))]">Saved. Refresh หน้าเว็บเพื่อดูข้อมูลล่าสุด</span>}
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container max-w-7xl mx-auto px-6 grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="glass-strong rounded-[1.75rem] p-5 h-fit sticky top-28">
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--gold))]/70">Products</p>
            <div className="space-y-2">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedId(product.id)}
                  className={`w-full rounded-2xl px-4 py-3 text-left transition ${selectedId === product.id ? "bg-white/[0.10] text-[hsl(var(--gold))]" : "bg-white/[0.03] text-foreground/65 hover:bg-white/[0.06]"}`}
                >
                  <span className="block text-sm font-light">{product.name}</span>
                  <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-foreground/35">{product.size}</span>
                </button>
              ))}
            </div>
          </aside>

          <div className="space-y-8">
            <div className="glass-strong rounded-[1.75rem] p-6 md:p-8">
              <div className="mb-8 flex items-center justify-between gap-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--gold))]/70">Product Detail</p>
                  <h2 className="mt-3 font-display text-3xl text-foreground">{selectedProduct.name}</h2>
                </div>
                <a href={`/product/${selectedProduct.id}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground/55 hover:text-[hsl(var(--gold))]">
                  Preview <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name"><input className={inputClass} value={selectedProduct.name} onChange={(e) => updateProduct({ name: e.target.value })} /></Field>
                <Field label="Short Name"><input className={inputClass} value={selectedProduct.shortName} onChange={(e) => updateProduct({ shortName: e.target.value })} /></Field>
                <Field label="Size"><input className={inputClass} value={selectedProduct.size} onChange={(e) => updateProduct({ size: e.target.value })} /></Field>
                <Field label="Edition"><input className={inputClass} value={selectedProduct.edition} onChange={(e) => updateProduct({ edition: e.target.value })} /></Field>
                <Field label="Finish"><input className={inputClass} value={selectedProduct.finish} onChange={(e) => updateProduct({ finish: e.target.value })} /></Field>
                <Field label="Tag"><input className={inputClass} value={selectedProduct.tag ?? ""} onChange={(e) => updateProduct({ tag: e.target.value })} /></Field>
                <Field label="Highlight"><input className={inputClass} value={selectedProduct.highlight} onChange={(e) => updateProduct({ highlight: e.target.value })} /></Field>
                <Field label="Image Path"><input className={inputClass} value={selectedProduct.image} onChange={(e) => updateProduct({ image: e.target.value })} /></Field>
              </div>

              <div className="mt-5 grid gap-5">
                <Field label="Description"><textarea className={textareaClass} value={selectedProduct.description} onChange={(e) => updateProduct({ description: e.target.value })} /></Field>
                <Field label="Texture"><textarea className={textareaClass} value={selectedProduct.texture} onChange={(e) => updateProduct({ texture: e.target.value })} /></Field>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-3">
                <Field label="Benefits — one per line"><textarea className={textareaClass} value={joinLines(selectedProduct.benefits)} onChange={(e) => updateProduct({ benefits: splitLines(e.target.value) })} /></Field>
                <Field label="Best For — one per line"><textarea className={textareaClass} value={joinLines(selectedProduct.bestFor)} onChange={(e) => updateProduct({ bestFor: splitLines(e.target.value) })} /></Field>
                <Field label="How to Use — one per line"><textarea className={textareaClass} value={joinLines(selectedProduct.howToUse)} onChange={(e) => updateProduct({ howToUse: splitLines(e.target.value) })} /></Field>
              </div>
            </div>

            <div className="glass-strong rounded-[1.75rem] p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--gold))]/70">Site / Contact / Selling Channels</p>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <Field label="Email"><input className={inputClass} value={site.email} onChange={(e) => setSite({ ...site, email: e.target.value })} /></Field>
                <Field label="Phone"><input className={inputClass} value={site.phone} onChange={(e) => setSite({ ...site, phone: e.target.value })} /></Field>
                <Field label="Address"><input className={inputClass} value={site.address} onChange={(e) => setSite({ ...site, address: e.target.value })} /></Field>
                <Field label="Google Map URL"><input className={inputClass} value={site.mapUrl} onChange={(e) => setSite({ ...site, mapUrl: e.target.value })} /></Field>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {site.retailers.map((retailer, index) => (
                  <Field key={retailer.name} label={`${retailer.name} link`}>
                    <input
                      className={inputClass}
                      value={retailer.href}
                      onChange={(e) => {
                        const next = [...site.retailers];
                        next[index] = { ...retailer, href: e.target.value };
                        setSite({ ...site, retailers: next });
                      }}
                    />
                  </Field>
                ))}
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {site.socials.map((social, index) => (
                  <Field key={social.name} label={`${social.name} link`}>
                    <input
                      className={inputClass}
                      value={social.href}
                      onChange={(e) => {
                        const next = [...site.socials];
                        next[index] = { ...social, href: e.target.value };
                        setSite({ ...site, socials: next });
                      }}
                    />
                  </Field>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Admin;

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { getSiteConfig } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;


const WhereToBuy = () => {
  const { retailers } = getSiteConfig();

  return (
    <section id="where-to-buy" className="relative py-40 md:py-40 overflow-hidden grain">
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(270 38% 4%) 0%, hsl(270 32% 6%) 50%, hsl(270 40% 3%) 100%)",
          }}
        />
        <div
          className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, hsl(var(--accent) / 0.10) 0%, hsl(var(--soft-pink) / 0.06) 40%, transparent 75%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="container max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-7">
            <MapPin className="w-3.5 h-3.5 text-[hsl(var(--gold))]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-foreground/70">
              Where to Buy
            </span>
          </div>

          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground"
            style={{
              textShadow:
                "0 0 40px hsl(var(--soft-pink) / 0.18), 0 0 80px hsl(var(--accent) / 0.10)",
            }}
          >
            Find <span className="italic text-gradient-gold">Babalah</span> Near You
          </h2>

          <p className="mt-7 text-base md:text-lg text-foreground/60 font-light leading-relaxed max-w-lg mx-auto">
            Available at leading retailers and online platforms.
          </p>

          <div className="mt-10 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.6)] to-transparent" />
        </motion.div>

        {/* Retailer buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="mt-16 md:mt-20 flex flex-wrap items-center justify-center gap-4 md:gap-5"
        >
          {retailers.map((r, i) => (
            <motion.a
              key={r.name}
              href={r.href}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className="group relative"
            >
              {/* Soft outer glow */}
              <div
                className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, hsl(${r.glow} / 0.45), transparent 70%)`,
                }}
              />

              <div className="relative inline-flex items-center gap-3 px-7 py-4 rounded-full glass-strong transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:border-white/25 group-hover:shadow-[0_15px_40px_-10px_hsl(var(--accent)/0.35)]">
                {/* Inner top sheen */}
                <div
                  className="absolute inset-x-0 top-0 h-1/2 rounded-t-full pointer-events-none opacity-60"
                  style={{
                    background:
                      "linear-gradient(180deg, hsl(0 0% 100% / 0.08) 0%, transparent 100%)",
                  }}
                />

                <span className="relative text-[12px] tracking-[0.28em] uppercase text-foreground/85 group-hover:text-foreground transition-colors duration-500 font-light">
                  {r.name}
                </span>
                <ArrowUpRight className="relative w-3.5 h-3.5 text-foreground/55 transition-all duration-500 group-hover:text-[hsl(var(--gold))] group-hover:rotate-12 group-hover:translate-x-0.5" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer whisper */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease, delay: 0.3 }}
          className="mt-20 md:mt-24 text-center"
        >
          <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.5)] to-transparent mb-6" />
          <p className="text-[11px] tracking-[0.32em] uppercase text-foreground/45 font-light">
            Authorized Retailers · Worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhereToBuy;

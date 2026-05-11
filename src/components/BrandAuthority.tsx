import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const statements = [
  "Over 100,000+ customers love Babalah",
  "Top-selling powder in multiple marketplaces",
  "Designed for Asian skin tones & climate",
  "Lightweight. Long-lasting. Skin-friendly.",
];

const badges = ["Oil Control", "Long Lasting", "Lightweight", "Skin Friendly"];

const BrandAuthority = () => {
  return (
    <section className="relative py-40 md:py-40 overflow-hidden grain">
      {/* Atmospheric backdrop — consistent with rest of site */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(270 38% 4%) 0%, hsl(270 35% 6%) 50%, hsl(270 38% 4%) 100%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, hsl(var(--soft-pink) / 0.07) 0%, hsl(var(--accent) / 0.05) 40%, transparent 75%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="container max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-7">
            <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--gold))]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-foreground/70">
              Brand Authority
            </span>
          </div>

          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground"
            style={{
              textShadow:
                "0 0 40px hsl(var(--soft-pink) / 0.18), 0 0 80px hsl(var(--accent) / 0.10)",
            }}
          >
            Trusted by <span className="italic text-gradient-gold">Beauty Experts</span>
          </h2>

          <div className="mt-10 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.6)] to-transparent" />
        </motion.div>

        {/* Statements */}
        <div className="mt-20 md:mt-24 max-w-3xl mx-auto">
          {statements.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              className="relative"
            >
              <div className="py-8 md:py-10 text-center">
                <p
                  className="font-display text-2xl md:text-3xl lg:text-[2.1rem] leading-snug tracking-tight text-foreground/90 font-light"
                  style={{
                    textShadow:
                      "0 0 30px hsl(var(--soft-pink) / 0.15), 0 0 60px hsl(var(--accent) / 0.08)",
                  }}
                >
                  {s}
                </p>
              </div>
              {i < statements.length - 1 && (
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="mt-20 md:mt-24"
        >
          <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.5)] to-transparent mb-10" />
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {badges.map((b) => (
              <span
                key={b}
                className="text-[10px] tracking-[0.32em] uppercase px-4 py-2 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 text-foreground/65 font-light transition-colors duration-500 hover:text-[hsl(var(--gold))] hover:border-[hsl(var(--gold)/0.3)]"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandAuthority;

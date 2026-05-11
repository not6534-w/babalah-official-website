import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useMemo } from "react";
import Navbar from "@/components/Navbar";
import productImg from "@/assets/product-becca-14g.png";

const ease = [0.22, 1, 0.36, 1] as const;

const Particles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.2,
        duration: Math.random() * 10 + 12,
        delay: Math.random() * 8,
        drift: Math.random() * 60 - 30,
        color: i % 3 === 0 ? "var(--gold)" : i % 3 === 1 ? "var(--soft-pink)" : "var(--accent)",
      })),
    []
  );

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `hsl(${p.color})`,
            boxShadow: `0 0 ${p.size * 6}px hsl(${p.color} / 0.8)`,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.9, 0],
            y: [0, -120 - Math.random() * 80],
            x: [0, p.drift],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const ComingSoon = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center grain pt-32 pb-24 px-6">
        {/* Atmospheric backdrop */}
        <div className="absolute inset-0 -z-20">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, hsl(270 38% 10%) 0%, hsl(270 35% 5%) 60%, hsl(270 40% 3%) 100%)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[800px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, hsl(var(--accent) / 0.18) 0%, hsl(var(--secondary) / 0.10) 35%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />
          <div
            className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--gold) / 0.10) 0%, transparent 65%)",
              filter: "blur(90px)",
            }}
          />
        </div>

        <Particles />

        <div className="container max-w-5xl mx-auto text-center relative">
          {/* Blurred product silhouette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[640px] md:h-[640px] pointer-events-none -z-10"
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, hsl(var(--soft-pink) / 0.25) 0%, hsl(var(--accent) / 0.15) 40%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            <motion.img
              src={productImg}
              alt=""
              aria-hidden
              className="relative w-full h-full object-contain"
              style={{
                filter: "blur(28px) brightness(0.9) saturate(1.2)",
                opacity: 0.55,
              }}
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
            />
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-9"
          >
            <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--gold))]" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-foreground/70">
              Coming Soon
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.45 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground"
            style={{ textShadow: "0 0 60px hsl(var(--accent) / 0.25)" }}
          >
            Something <span className="italic text-gradient-gold">Magical</span>
            <br />
            is Coming
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.7 }}
            className="mt-9 text-base md:text-lg text-foreground/60 font-light tracking-wide max-w-xl mx-auto"
          >
            A new level of beauty is on the way.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.9 }}
            className="mt-12 mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.7)] to-transparent origin-center"
          />

          {/* Whisper */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease, delay: 1.1 }}
            className="mt-10 text-[11px] tracking-[0.4em] uppercase text-foreground/40 font-light"
          >
            The House of Babalah
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default ComingSoon;

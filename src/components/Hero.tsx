import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import powderOpen from "@/assets/product-powder-open.png";
import powderClosed from "@/assets/product-powder-closed.png";
import powderPuff from "@/assets/product-powder-puff.png";

const ease = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden grain pt-32 pb-32 md:pb-20">
      {/* Refined atmospheric layers — dark, controlled, cinematic */}
      <div className="absolute inset-0 -z-10">
        {/* Deep base gradient — predominantly dark with subtle lift toward bottom-right */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(120deg, hsl(270 38% 3%) 0%, hsl(270 32% 5%) 55%, hsl(275 35% 7%) 100%)" }}
        />

        {/* Strong vignette to deepen edges and frame the right side */}
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 65% at 72% 58%, transparent 0%, transparent 30%, hsl(270 45% 2% / 0.92) 100%)" }}
        />

        {/* Directional key light — coming from bottom-right toward product */}
        <div className="absolute bottom-[5%] right-[6%] w-[640px] h-[640px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(var(--soft-pink) / 0.32) 0%, hsl(var(--accent) / 0.18) 30%, transparent 60%)",
            filter: "blur(50px)",
          }}
        />

        {/* Tight bottom-right hot core — origin of the light */}
        <div className="absolute bottom-[12%] right-[10%] w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(var(--soft-pink) / 0.42) 0%, hsl(var(--gold) / 0.18) 40%, transparent 75%)",
            filter: "blur(30px)",
          }}
        />

        {/* Top & bottom fade for cinematic framing */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Magical sparkle particles — concentrated bottom-right near product */}
      <div className="absolute inset-0 -z-10 opacity-80">
        {[...Array(45)].map((_, i) => {
          const size = Math.random() * 2.5 + 0.5;
          // Bias particles toward bottom-right quadrant
          const top = 35 + Math.random() * 60;
          const left = 45 + Math.random() * 55;
          return (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: i % 4 === 0 ? "hsl(var(--gold))" : "hsl(var(--soft-pink))",
                opacity: Math.random() * 0.7 + 0.25,
                boxShadow: `0 0 ${size * 5}px hsl(var(--soft-pink) / 0.85)`,
                animation: `pulse-glow ${2.5 + Math.random() * 4}s ease-in-out ${Math.random() * 4}s infinite, float-slow ${6 + Math.random() * 6}s ease-in-out ${Math.random() * 3}s infinite`,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* LEFT — copy */}
          <div className="relative z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass mb-10"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/80 font-medium">
                Babalah · Magic Powder
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease, delay: 0.25 }}
              className="font-display text-6xl md:text-[5rem] lg:text-[8.3rem] leading-[0.92] mb-10 tracking-[-0.03em]"
            >
              Unlock Your
              <br />
              <span className="italic font-light text-gradient-gold">Magic Skin</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.5 }}
              className="text-base md:text-lg text-foreground/65 max-w-md mx-auto lg:mx-0 mb-12 leading-[1.8] font-light tracking-wide"
            >
              Flawless, smooth, and radiant skin with Babalah powder.
              <br className="hidden md:block" />
              Designed for everyday confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center"
            >
              {/* Primary — Shop Now */}
              <a
                href="#where-to-buy"
                className="group relative inline-flex items-center justify-center gap-3 px-11 py-[1.35rem] rounded-full text-foreground font-medium text-xs tracking-[0.32em] uppercase overflow-hidden transition-all duration-700 hover:scale-[1.04]"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--soft-pink) / 0.95) 0%, hsl(var(--accent)) 48%, hsl(var(--secondary)) 100%)",
                  boxShadow:
                    "0 0 0 1px hsl(var(--soft-pink) / 0.45), inset 0 1px 0 hsl(var(--soft-pink) / 0.5), inset 0 -1px 0 hsl(var(--accent) / 0.6), 0 18px 50px -12px hsl(var(--accent) / 0.65), 0 0 28px -6px hsl(var(--soft-pink) / 0.55)",
                }}
              >
                {/* Persistent soft outer glow — intensifies on hover */}
                <span
                  className="absolute -inset-1 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-lg -z-10"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--soft-pink) / 0.55), hsl(var(--accent) / 0.7))",
                  }}
                />
                {/* Inner top sheen */}
                <span
                  className="absolute inset-x-2 top-0 h-1/2 rounded-full pointer-events-none opacity-70"
                  style={{
                    background:
                      "linear-gradient(180deg, hsl(0 0% 100% / 0.28), transparent)",
                  }}
                />
                {/* Shimmer sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-out bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                <span className="relative z-10">Shop Now</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-500 group-hover:translate-x-1.5" />
              </a>

              {/* Secondary — Explore */}
              <Link
                to="/collection"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full glass-strong text-foreground/85 font-medium text-xs tracking-[0.3em] uppercase transition-all duration-700 hover:text-gold hover:border-gold/50"
                style={{ boxShadow: "inset 0 1px 0 hsl(var(--soft-pink) / 0.1)" }}
              >
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ boxShadow: "0 0 40px -5px hsl(var(--gold) / 0.4)" }}
                />
                <span className="relative">Explore Products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Hallmarks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="mt-20 flex items-center justify-center lg:justify-start gap-8 text-[10px] uppercase tracking-[0.35em] text-foreground/45"
            >
              <span>Glow Finish</span>
              <span className="w-1 h-1 rounded-full bg-gold/60" />
              <span>K-Beauty</span>
              <span className="w-1 h-1 rounded-full bg-gold/60" />
              <span>Skin Loving</span>
            </motion.div>
          </div>

          {/* RIGHT — floating powder products */}
          <div className="relative h-[600px] lg:h-[720px]">
            {/* Directional spotlight — anchored bottom-right, behind product */}
            <div className="absolute inset-0 pointer-events-none -z-0">
              {/* Soft directional wash from bottom-right */}
              <div
                className="absolute bottom-[8%] right-[8%] w-[460px] h-[460px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--soft-pink) / 0.32) 0%, hsl(var(--accent) / 0.18) 35%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              {/* Tight focal halo behind the compact */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--soft-pink) / 0.45) 0%, hsl(var(--gold) / 0.12) 50%, transparent 78%)",
                  filter: "blur(28px)",
                }}
              />
            </div>

            {/* Crisp directional light beam from bottom-right (key light) */}
            <div
              className="absolute -bottom-10 -right-10 w-[380px] h-[640px] opacity-55 pointer-events-none -rotate-[28deg] origin-bottom-right"
              style={{
                background:
                  "linear-gradient(0deg, hsl(var(--soft-pink) / 0.4) 0%, hsl(var(--accent) / 0.12) 45%, transparent 80%)",
                filter: "blur(55px)",
              }}
            />

            {/* Hero product — open powder compact (dominant focal point) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.6, ease, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] lg:w-[560px] z-20"
            >
              {/* Tight luminous halo directly behind product */}
              <div
                className="absolute inset-0 rounded-full scale-[0.78]"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--soft-pink) / 0.45) 0%, hsl(var(--accent) / 0.22) 40%, transparent 72%)",
                  filter: "blur(50px)",
                }}
              />

              <div className="animate-float-slow relative">
                <img
                  src={powderOpen}
                  alt="Babalah magic compact powder open with mirror"
                  width={1024}
                  height={1024}
                  className="w-full h-auto"
                  style={{
                    filter:
                      "drop-shadow(0 35px 70px hsl(330 100% 50% / 0.5)) drop-shadow(0 14px 28px hsl(280 60% 22% / 0.6)) drop-shadow(0 0 50px hsl(325 100% 88% / 0.4)) brightness(1.12) contrast(1.1) saturate(1.05)",
                  }}
                />
                {/* Top-light specular sheen */}
                <div
                  className="absolute top-[6%] left-[18%] w-[55%] h-[20%] rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse, hsl(var(--soft-pink) / 0.45) 0%, transparent 70%)",
                    filter: "blur(22px)",
                    mixBlendMode: "screen",
                  }}
                />
                {/* Right edge rim highlight (bottom-right key light) */}
                <div
                  className="absolute top-[20%] right-[8%] w-[6%] h-[55%] rounded-full pointer-events-none opacity-80"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, hsl(var(--soft-pink) / 0.7), hsl(var(--gold) / 0.4))",
                    filter: "blur(6px)",
                    mixBlendMode: "screen",
                  }}
                />
                {/* Bottom-right edge highlight */}
                <div
                  className="absolute bottom-[18%] right-[14%] w-[18%] h-[8%] rounded-full pointer-events-none opacity-70"
                  style={{
                    background:
                      "radial-gradient(ellipse, hsl(var(--soft-pink) / 0.6), transparent 70%)",
                    filter: "blur(10px)",
                    mixBlendMode: "screen",
                  }}
                />
              </div>

              {/* Soft cast shadow / pedestal */}
              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[55%] h-7 rounded-full"
                style={{
                  background:
                    "radial-gradient(ellipse, hsl(270 50% 4% / 0.7), transparent 70%)",
                  filter: "blur(24px)",
                }}
              />
            </motion.div>

            {/* Closed compact — top right (subdued to reduce competition) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -20 }}
              animate={{ opacity: 0.75, x: 0, y: 0 }}
              transition={{ duration: 1.4, ease, delay: 0.85 }}
              className="absolute top-2 right-0 lg:right-4 w-[130px] lg:w-[170px] z-10"
            >
              <div className="absolute inset-0 bg-soft-pink/25 blur-3xl rounded-full" />
              <div className="animate-float-medium relative">
                <img
                  src={powderClosed}
                  alt="Babalah closed compact powder case"
                  width={1024}
                  height={1024}
                  className="w-full h-auto"
                  style={{
                    filter:
                      "drop-shadow(0 30px 40px hsl(270 50% 4% / 0.55)) drop-shadow(0 0 20px hsl(var(--soft-pink) / 0.25)) brightness(0.92)",
                  }}
                />
              </div>
              {/* Soft floor shadow */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[70%] h-3 rounded-full"
                style={{ background: "radial-gradient(ellipse, hsl(270 50% 4% / 0.5), transparent 70%)", filter: "blur(14px)" }}
              />
            </motion.div>

            {/* Powder puff — bottom left (subdued) */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 20 }}
              animate={{ opacity: 0.78, x: 0, y: 0 }}
              transition={{ duration: 1.4, ease, delay: 1 }}
              className="absolute bottom-4 left-0 lg:left-2 w-[125px] lg:w-[160px] z-10"
            >
              <div className="absolute inset-0 bg-soft-pink/30 blur-3xl rounded-full" />
              <div className="animate-float-fast relative">
                <img
                  src={powderPuff}
                  alt="Babalah luxury pink powder puff with ribbon"
                  width={1024}
                  height={1024}
                  className="w-full h-auto"
                  style={{
                    filter:
                      "drop-shadow(0 28px 38px hsl(270 50% 4% / 0.5)) drop-shadow(0 0 22px hsl(var(--soft-pink) / 0.3)) brightness(0.94)",
                  }}
                />
              </div>
              {/* Soft floor shadow */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[65%] h-3 rounded-full"
                style={{ background: "radial-gradient(ellipse, hsl(270 50% 4% / 0.5), transparent 70%)", filter: "blur(14px)" }}
              />
            </motion.div>

            {/* Floating sparkles */}
            <Sparkles className="absolute top-20 left-10 w-4 h-4 text-gold/80 animate-pulse-glow" />
            <Sparkles className="absolute bottom-32 right-12 w-3 h-3 text-soft-pink/90 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
            <Sparkles className="absolute top-40 right-24 w-3 h-3 text-gold/70 animate-pulse-glow" style={{ animationDelay: "3s" }} />
            <Sparkles className="absolute top-1/2 left-4 w-3 h-3 text-accent/80 animate-pulse-glow" style={{ animationDelay: "2.2s" }} />
            <Sparkles className="absolute bottom-10 left-1/3 w-3 h-3 text-soft-pink/80 animate-pulse-glow" style={{ animationDelay: "0.8s" }} />
            <Sparkles className="absolute top-1/3 right-8 w-2.5 h-2.5 text-gold/60 animate-pulse-glow" style={{ animationDelay: "4s" }} />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-foreground/40"
        >
          <span>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/70 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

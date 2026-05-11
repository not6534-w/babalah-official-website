import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import WhereToBuy from "@/components/WhereToBuy";

const ease = [0.22, 1, 0.36, 1] as const;

const storyBlocks = [
  {
    label: "Origin",
    title: "Inspired by confidence",
    text: "Born from the belief that every woman carries her own quiet magic, Babalah was created to celebrate the femininity that needs no permission.",
  },
  {
    label: "Crafted For",
    title: "Designed for Asian skin",
    text: "Each formula is meticulously balanced for Asian skin tones and climates — breathable in heat, luminous in light, faithful all day.",
  },
  {
    label: "Balance",
    title: "Beauty meets performance",
    text: "Where ritual meets results. Where lightness meets longevity. Babalah lives in the intersection of indulgence and intelligence.",
  },
];

const philosophy = [
  { word: "Effortless", caption: "Beauty that flows, never forced." },
  { word: "Confident", caption: "Designed for the everyday woman." },
  { word: "Accessible", caption: "Premium quality, lived-in luxury." },
];

const About = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* HERO STATEMENT */}
      <section className="relative pt-40 md:pt-52 pb-32 md:pb-40 overflow-hidden grain">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(270 35% 5%) 0%, hsl(270 32% 7%) 60%, hsl(270 38% 4%) 100%)",
            }}
          />
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, hsl(var(--accent) / 0.18) 0%, hsl(var(--soft-pink) / 0.10) 35%, transparent 70%)",
              filter: "blur(110px)",
            }}
          />
          <div
            className="absolute bottom-[-10%] right-[5%] w-[600px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--gold) / 0.10) 0%, transparent 65%)",
              filter: "blur(90px)",
            }}
          />
        </div>

        <div className="container max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--gold))]" />
            <span className="text-[11px] tracking-[0.32em] uppercase text-foreground/70">
              The House of Babalah
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.1 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground"
          >
            Beauty is
            <br />
            your <span className="italic text-gradient-gold">magic</span>.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.5 }}
            className="mt-12 mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.7)] to-transparent origin-center"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.6 }}
            className="mt-10 text-base md:text-lg text-foreground/60 font-light leading-relaxed max-w-xl mx-auto italic"
          >
            A house of cosmetics built upon a single belief —
            that every woman is born with her own light.
          </motion.p>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(270 38% 4%) 0%, hsl(270 35% 6%) 100%)",
            }}
          />
          <div
            className="absolute top-1/2 left-[-5%] -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--secondary) / 0.18) 0%, transparent 65%)",
              filter: "blur(100px)",
            }}
          />
        </div>

        <div className="container max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease }}
            className="text-center max-w-2xl mx-auto mb-20 md:mb-24"
          >
            <span className="text-[11px] tracking-[0.32em] uppercase text-foreground/50">
              Our Story
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
              A house built on <span className="italic text-gradient-gold">belief</span>
            </h2>
          </motion.div>

          <div className="space-y-20 md:space-y-28 max-w-4xl mx-auto">
            {storyBlocks.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease, delay: i * 0.1 }}
                className={`grid md:grid-cols-12 gap-8 md:gap-12 items-start ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="md:col-span-4 [direction:ltr]">
                  <p className="text-[11px] tracking-[0.32em] uppercase text-[hsl(var(--gold))]/70">
                    {b.label}
                  </p>
                  <div className="mt-4 h-px w-16 bg-gradient-to-r from-[hsl(var(--gold)/0.6)] to-transparent" />
                </div>
                <div className="md:col-span-8 [direction:ltr]">
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-6 text-base md:text-lg text-foreground/65 font-light leading-relaxed max-w-xl">
                    {b.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND PHILOSOPHY */}
      <section className="relative py-28 md:py-36 overflow-hidden grain">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(270 35% 6%) 0%, hsl(270 38% 5%) 100%)",
            }}
          />
          <div
            className="absolute top-0 right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, transparent 65%)",
              filter: "blur(90px)",
            }}
          />
          <div
            className="absolute bottom-0 left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--soft-pink) / 0.10) 0%, transparent 65%)",
              filter: "blur(90px)",
            }}
          />
        </div>

        <div className="container max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease }}
            className="text-center mb-20 md:mb-24"
          >
            <span className="text-[11px] tracking-[0.32em] uppercase text-foreground/50">
              Our Philosophy
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
              Three words. <span className="italic text-gradient-gold">One ritual.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {philosophy.map((p, i) => (
              <motion.div
                key={p.word}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease, delay: i * 0.12 }}
                className="relative glass-strong rounded-[1.75rem] p-10 md:p-12 text-center transition-all duration-700 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_30px_70px_-20px_hsl(var(--accent)/0.35)]"
              >
                <div
                  className="absolute -inset-1 rounded-[2rem] opacity-0 hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none -z-10"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, hsl(var(--gold) / 0.25), transparent 70%)",
                  }}
                />
                <h3
                  className="font-display text-4xl md:text-5xl text-gradient-gold tracking-tight"
                  style={{ textShadow: "0 0 40px hsl(var(--gold) / 0.3)" }}
                >
                  {p.word}
                </h3>
                <div className="mt-5 mx-auto h-px w-12 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.6)] to-transparent" />
                <p className="mt-6 text-sm md:text-base text-foreground/60 font-light italic leading-relaxed">
                  {p.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL EDITORIAL — soft glow text moments */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(270 38% 5%) 0%, hsl(270 32% 7%) 50%, hsl(270 38% 4%) 100%)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, hsl(var(--accent) / 0.14) 0%, hsl(var(--soft-pink) / 0.08) 40%, transparent 70%)",
              filter: "blur(120px)",
            }}
          />
        </div>

        <div className="container max-w-4xl mx-auto px-6 text-center space-y-24 md:space-y-32">
          {[
            "Light is not worn — it is awakened.",
            "Skin is the first canvas of confidence.",
            "Magic lives in the smallest gestures.",
          ].map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease, delay: i * 0.1 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.2] tracking-tight text-foreground/90 italic"
              style={{ textShadow: "0 0 60px hsl(var(--accent) / 0.25)" }}
            >
              “{line}”
            </motion.p>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative py-32 md:py-44 overflow-hidden grain">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(270 38% 4%) 0%, hsl(270 30% 6%) 100%)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, hsl(var(--gold) / 0.18) 0%, hsl(var(--accent) / 0.10) 40%, transparent 70%)",
              filter: "blur(110px)",
            }}
          />
        </div>

        <div className="container max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease }}
            className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.7)] to-transparent mb-12"
          />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground"
            style={{ textShadow: "0 0 50px hsl(var(--gold) / 0.25)" }}
          >
            Babalah is more than makeup —
            <br />
            <span className="italic text-gradient-gold">it’s your everyday magic.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease, delay: 0.4 }}
            className="mt-12 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.7)] to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="mt-10 text-[11px] tracking-[0.4em] uppercase text-foreground/50 font-light"
          >
            — The House of Babalah
          </motion.p>
        </div>
      </section>

      <WhereToBuy />
    </main>
  );
};

export default About;

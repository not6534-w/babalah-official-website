import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

type Testimonial = {
  quote: string;
  name: string;
  initials: string;
  title: string;
  glow: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I used to retouch my makeup three times a day. Now I forget I'm wearing any — and people keep asking what changed.",
    name: "Sirinya P.",
    initials: "SP",
    title: "Beauty Editor, Bangkok",
    glow: "var(--accent)",
  },
  {
    quote:
      "It's the first thing I reach for every morning. A small ritual that makes me feel completely myself before the day begins.",
    name: "Anika R.",
    initials: "AR",
    title: "Devoted since 2023",
    glow: "var(--soft-pink)",
  },
  {
    quote:
      "Twelve-hour shoots, studio lights, no touch-ups. My skin still catches the light the way it did at 7 a.m.",
    name: "Mei L.",
    initials: "ML",
    title: "Editorial Makeup Artist",
    glow: "var(--gold)",
  },
  {
    quote:
      "I've never received so many compliments on my skin. People assume I had a facial — it's just my powder.",
    name: "Praewa T.",
    initials: "PT",
    title: "Loyal Customer",
    glow: "var(--secondary)",
  },
  {
    quote:
      "There's a quiet confidence it gives me. I look in the mirror at the end of the day and still feel beautiful — that's rare.",
    name: "Hana K.",
    initials: "HK",
    title: "Skincare Devotee",
    glow: "var(--accent)",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-36 md:py-36 overflow-hidden grain">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, hsl(270 38% 4%) 0%, hsl(270 32% 7%) 100%)" }}
        />
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, hsl(var(--soft-pink) / 0.10) 0%, hsl(var(--accent) / 0.06) 40%, transparent 70%)",
            filter: "blur(110px)",
          }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="max-w-3xl mx-auto text-center mb-20 md:mb-24"
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-[hsl(var(--gold))]/70 font-light mb-5">
            Voices of Babalah
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-foreground">
            Loved by those who
            <span className="italic text-gradient-gold"> wear light</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-foreground/55 font-light leading-relaxed max-w-xl mx-auto">
            Whispers from beauty editors, artists, and devotees who made Babalah part of their everyday ritual.
          </p>
          <div className="mt-8 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.5)] to-transparent" />
        </motion.div>

        {/* Cards */}
        <div className="grid gap-12 sm:gap-8 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.08 }}
              className={`group relative ${i === 4 ? "lg:col-start-2" : ""}`}
            >
              <div
                className="absolute -inset-1 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 50%, hsl(${t.glow} / 0.35), transparent 70%)` }}
              />
              <div className="relative h-full glass-strong rounded-[1.75rem] p-8 md:p-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:border-white/25 group-hover:shadow-[0_30px_70px_-20px_hsl(var(--accent)/0.35)]">
                <Quote
                  className="w-7 h-7 text-[hsl(var(--gold))]/60"
                  strokeWidth={1.25}
                />
                <blockquote className="mt-6 font-display text-xl md:text-[1.4rem] leading-[1.4] tracking-tight text-foreground/90 italic">
                  "{t.quote}"
                </blockquote>

                <div className="mt-8 h-px w-12 bg-gradient-to-r from-[hsl(var(--gold)/0.5)] to-transparent" />

                <figcaption className="mt-6 flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-md"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, hsl(${t.glow} / 0.35), hsl(270 40% 8%) 75%)`,
                    }}
                  >
                    <span className="text-[11px] tracking-[0.18em] text-foreground/85 font-light">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/85 font-light tracking-wide">{t.name}</p>
                    <p className="text-[10px] tracking-[0.28em] uppercase text-foreground/45 mt-1">
                      {t.title}
                    </p>
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-20 text-center">
          <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.5)] to-transparent mb-6" />
          <p className="text-[11px] tracking-[0.32em] uppercase text-foreground/45 font-light">
            Join thousands who chose effortless luxury
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

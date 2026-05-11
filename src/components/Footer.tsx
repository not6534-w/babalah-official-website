import { motion } from "framer-motion";
import { Instagram, Facebook, Mail } from "lucide-react";
import { getSiteConfig } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

const socialIcons = {
  Instagram,
  Facebook,
  TikTok: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  ),
  LINE: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 11c0-4.4 4-8 9-8s9 3.6 9 8-4 8-9 8c-.9 0-1.7-.1-2.5-.3L5 21l1.3-3.8C4.3 15.7 3 13.5 3 11z" />
      <path d="M8 10v4M8 10l3 4v-4M14 10v4h2.5M14 12h2M18 10v4" />
    </svg>
  ),
} as const;

const Footer = () => {
  const site = getSiteConfig();

  return (
    <footer className="relative overflow-hidden grain border-t border-white/5">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, hsl(270 32% 6%) 0%, hsl(270 38% 4%) 100%)" }}
        />
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, hsl(var(--accent) / 0.10) 0%, hsl(var(--soft-pink) / 0.05) 40%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-6 pt-28 md:pt-32 pb-14 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="grid gap-20 md:gap-24 md:grid-cols-12"
        >
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="/" className="inline-block font-display text-3xl tracking-[0.3em] text-gradient-gold">
              BABALAH
            </a>
            <p className="mt-6 text-sm md:text-base text-foreground/55 font-light leading-relaxed max-w-sm">
              {site.brandStatement}
            </p>
            <div className="mt-8 h-px w-16 bg-gradient-to-r from-[hsl(var(--gold)/0.5)] to-transparent" />
            <p className="mt-6 text-[11px] tracking-[0.32em] uppercase text-foreground/45 font-light">
              Beauty is your magic
            </p>
          </div>

          {/* Connect */}
          <div className="md:col-span-4 md:col-start-7">
            <p className="text-[11px] tracking-[0.4em] uppercase text-[hsl(var(--gold))]/70 font-light mb-6">
              Connect
            </p>
            <ul className="space-y-4">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.name] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
                return (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      className="group inline-flex items-center gap-4 text-sm text-foreground/70 hover:text-[hsl(var(--gold))] transition-colors duration-500"
                    >
                      <span className="w-9 h-9 rounded-full glass flex items-center justify-center group-hover:border-white/25 transition-colors">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="tracking-[0.18em] uppercase text-xs font-light">{s.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 md:col-start-11 md:hidden lg:hidden" />
        </motion.div>

        {/* Contact line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          className="mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-3 text-sm text-foreground/70 hover:text-[hsl(var(--gold))] transition-colors duration-500"
          >
            <Mail className="w-4 h-4" strokeWidth={1.25} />
            <span className="tracking-[0.18em] font-light">{site.email}</span>
          </a>
          <p className="text-[11px] tracking-[0.32em] uppercase text-foreground/45 font-light">
            Available at leading retailers and online platforms
          </p>
        </motion.div>

        {/* Divider */}
        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11px] tracking-[0.28em] uppercase text-foreground/40 font-light">
          <p>© 2026 Babalah. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-[hsl(var(--gold))] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[hsl(var(--gold))] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Collection", to: "/collection" },
  { label: "About", to: "/about" },
  { label: "Coming Soon", to: "/coming-soon" },
];

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="glass border-b border-white/5">
        <nav className="container mx-auto flex items-center justify-between py-5 px-6">
          <Link to="/" className="font-display text-2xl tracking-[0.3em] text-gradient-gold">
            BABALAH
          </Link>

          <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-foreground/70">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `transition-colors duration-500 ${isActive ? "text-[hsl(var(--gold))]" : "hover:text-[hsl(var(--gold))]"}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/collection"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-foreground/75 transition-all duration-500 hover:border-[hsl(var(--gold)/0.55)] hover:text-[hsl(var(--gold))] hover:shadow-[0_0_28px_hsl(var(--accent)/0.25)]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Explore
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;

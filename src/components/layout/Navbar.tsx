import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { m } from "framer-motion";
import logo from "@/assets/logo.webp";

// Preload logo for faster LCP
const logoPreload = new Image();
logoPreload.src = logo;

const navItems = [
  { label: "Programs", path: "/programs" },
  { label: "Method", path: "/method" },
  { label: "INK", path: "/ink" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      scrolled
        ? "bg-background/95 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.03)] border-b border-border/60"
        : "bg-background/80 backdrop-blur-xl border-b border-transparent"
    }`}>
      <div className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ease-out ${
        scrolled ? "h-14 md:h-14" : "h-16 md:h-20"
      }`}>
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="The Unlearning School" width="239" height="84" fetchPriority="high" decoding="async" className={`w-auto transition-all duration-500 ease-out group-hover:scale-105 ${scrolled ? "h-10 md:h-11" : "h-12 md:h-14"}`} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative rounded-lg px-3.5 py-2 text-[0.8125rem] font-medium tracking-wide transition-all duration-200 hover:text-foreground hover:bg-muted/60 after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-[1.5px] after:rounded-full after:origin-left after:transition-transform after:duration-300 ${
                item.label === "INK"
                  ? `text-[hsl(210,60%,50%)] font-bold after:bg-[hsl(210,60%,50%)] ${location.pathname === item.path ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`
                  : `after:bg-destructive ${location.pathname === item.path ? "text-foreground after:scale-x-100" : "text-muted-foreground after:scale-x-0 hover:after:scale-x-100"}`
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://meet.brevo.com/razvan-valceanu"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center justify-center rounded-lg bg-destructive px-5 py-2 text-[0.8125rem] font-semibold tracking-wide text-white hover:bg-destructive/90 transition-all duration-200 hover:shadow-lg hover:shadow-destructive/20 hover:-translate-y-px active:translate-y-0"
          >
            Book a call
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <m.span
            animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute w-5 h-[2px] bg-foreground rounded-full"
          />
          <m.span
            animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute w-5 h-[2px] bg-foreground rounded-full"
          />
          <m.span
            animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute w-5 h-[2px] bg-foreground rounded-full"
          />
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-3 py-3 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://meet.brevo.com/razvan-valceanu"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-destructive px-4 py-2 text-sm font-medium text-white hover:bg-destructive/90 transition-colors"
            >
              Book a call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { Lock, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Competenze", href: "#competenze" },
  { label: "Lavori", href: "#lavori" },
  { label: "Certificazioni", href: "#certificazioni" },
  { label: "Contatti", href: "#contatti" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav border-b border-border/50 shadow-soft" : "bg-transparent"
      }`}
      style={scrolled ? { boxShadow: "0 1px 3px rgb(0 0 0 / 0.05)" } : undefined}
    >
      <div className="section-container flex items-center justify-between h-[72px]">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">CM</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-[15px] text-foreground tracking-tight">
              Consorzio del Mediterraneo
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigazione principale">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contatti" className="hidden md:inline-flex btn-primary text-[13px] items-center gap-2">
            <Lock className="h-3.5 w-3.5" />
            Area Riservata
          </a>

          <button
            className="lg:hidden p-2 text-foreground rounded-lg hover:bg-secondary/50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden glass-nav border-t border-border/30" aria-label="Menu mobile">
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href="#contatti" className="btn-primary text-center text-[13px] mt-3 flex items-center justify-center gap-2">
              <Lock className="h-3.5 w-3.5" />
              Area Riservata
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

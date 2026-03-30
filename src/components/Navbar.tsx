import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Lock, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Il Consorzio", href: "#consorzio" },
  { label: "Aree di Intervento", href: "#aree" },
  { label: "ESG & Certificazioni", href: "#esg" },
  { label: "Contatti", href: "#contatti" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 bg-accent flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="font-extrabold text-sm text-accent-foreground tracking-tight">CM</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className={`font-extrabold text-sm tracking-wider uppercase transition-colors ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              Consorzio
            </span>
            <span className={`text-[10px] tracking-[0.3em] uppercase transition-colors ${scrolled ? 'text-muted-foreground' : 'text-primary-foreground/60'}`}>
              del Mediterraneo
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0" aria-label="Navigazione principale">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-4 py-2 text-[13px] font-semibold uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button
            className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-gold-light font-bold uppercase text-xs tracking-wider px-6"
            size="sm"
          >
            <Lock className="mr-2 h-3.5 w-3.5" />
            Area Riservata
          </Button>

          <button
            className={`lg:hidden p-2 focus-visible:outline-2 focus-visible:outline-ring transition-colors ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-background border-t border-border shadow-xl" aria-label="Menu mobile">
          <div className="container py-6 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Button className="mt-4 bg-accent text-accent-foreground hover:bg-gold-light font-bold uppercase text-xs tracking-wider">
              <Lock className="mr-2 h-3.5 w-3.5" />
              Area Riservata
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

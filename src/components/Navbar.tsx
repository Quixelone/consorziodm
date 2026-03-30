import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 bg-card border-b-2 border-foreground/10 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 font-display">
          <div className="w-8 h-8 bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-extrabold text-sm">CM</span>
          </div>
          <span className="font-extrabold text-lg tracking-tight text-foreground hidden sm:inline">
            Consorzio del Mediterraneo
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigazione principale">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button className="hidden md:inline-flex shadow-hard-sm font-bold" size="sm">
            <Lock className="mr-2 h-4 w-4" />
            Area Riservata
          </Button>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground focus-visible:outline-2 focus-visible:outline-ring"
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
        <nav className="lg:hidden border-t border-border bg-card" aria-label="Menu mobile">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Button className="mt-2 shadow-hard-sm font-bold" size="sm">
              <Lock className="mr-2 h-4 w-4" />
              Area Riservata
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

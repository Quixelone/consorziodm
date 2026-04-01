import { useState, useEffect } from "react"; // v2
import { useLocation, useNavigate } from "react-router-dom";
import { Lock, Menu, X } from "lucide-react";
import logoSymbol from "@/assets/logo-cdm-symbol-clean.png";

const navLinks = [
  { label: "Home", hash: "home" },
  { label: "Chi Siamo", hash: "chi-siamo" },
  { label: "Competenze", hash: "competenze" },
  { label: "Lavori", hash: "lavori" },
  { label: "Certificazioni", hash: "certificazioni" },
  { label: "Legalità", hash: "legalita" },
  
  { label: "Contatti", hash: "contatti" },
] as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    setOpen(false);
    if (location.pathname === "/") {
      // Already on homepage, just scroll
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage with hash
      navigate("/#" + hash);
    }
  };

  // After navigating to /#hash, scroll to the element
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav border-b border-border/50 shadow-soft" : "bg-transparent"
      }`}
      style={scrolled ? { boxShadow: "0 1px 3px rgb(0 0 0 / 0.05)" } : undefined}
    >
      <div className="section-container flex items-center justify-between h-[72px]">
        <button onClick={() => handleNavClick("home")} className="flex items-center group min-w-0 cursor-pointer bg-transparent border-none p-0">
          <img
            src={logoSymbol}
            alt="Consorzio Stabile del Mediterraneo"
            className="h-10 w-auto object-contain shrink-0"
            loading="eager"
          />
        </button>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigazione principale">
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNavClick(l.hash)}
              className="px-3.5 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50 bg-transparent border-none cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={() => handleNavClick("contatti")} className="hidden md:inline-flex btn-primary text-[13px] items-center gap-2 cursor-pointer border-none">
            <Lock className="h-3.5 w-3.5" />
            Area Riservata
          </button>

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
            {navLinks.map((l) =>
              "external" in l && l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl transition-colors"
                >
                  {l.label}
                </a>
              ) : (
                <button
                  key={l.label}
                  onClick={() => handleNavClick((l as { hash: string }).hash)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl transition-colors bg-transparent border-none cursor-pointer text-left"
                >
                  {l.label}
                </button>
              )
            )}
            <button onClick={() => handleNavClick("contatti")} className="btn-primary text-center text-[13px] mt-3 flex items-center justify-center gap-2 cursor-pointer border-none">
              <Lock className="h-3.5 w-3.5" />
              Area Riservata
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

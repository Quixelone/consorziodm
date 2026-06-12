
import { useState, useEffect } from "react"; // v2
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoFull from "@/assets/new-logo.png";

const navLinks = [
  { label: "Home", hash: "home" },
  { label: "Chi Siamo", hash: "chi-siamo" },
  { label: "Competenze", hash: "competenze" },
  { label: "Lavori", hash: "lavori" },
  { label: "Certificazioni", hash: "certificazioni" },
  { label: "Legalità", hash: "legalita" },
  { label: "Whistleblowing", hash: "whistleblowing" },
] as const;

const Navbar = ({ onShowWhistleblowing }: { onShowWhistleblowing?: () => void }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToHash = (hash: string) => {
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (hash: string) => {
    setOpen(false);
    if (hash === "whistleblowing") {
      onShowWhistleblowing?.();
      return;
    }
    if (location.pathname === "/") {
      scrollToHash(hash);
    } else {
      navigate("/", { replace: false });
      setTimeout(() => scrollToHash(hash), 300);
    }
  };

  // After navigating to /#hash, scroll to the element
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToHash(id), 300);
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
            src={logoFull}
            alt="Consorzio Stabile del Mediterraneo"
            className="h-[43px] w-auto object-contain shrink-0"
            loading="eager"
          />
        </button>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigazione principale">
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNavClick(l.hash)}
              className={`px-3.5 py-2 text-[13px] font-medium transition-colors rounded-lg bg-transparent border-none cursor-pointer ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={() => handleNavClick("contatti")} className="hidden md:inline-flex btn-primary text-[13px] items-center gap-2 cursor-pointer border-none">
            Contatti
          </button>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-foreground hover:bg-secondary/50" : "text-white hover:bg-white/10"
            }`}
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
              <button
                key={l.label}
                onClick={() => handleNavClick(l.hash)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl transition-colors bg-transparent border-none cursor-pointer text-left"
              >
                {l.label}
              </button>
            ))}
            <button onClick={() => handleNavClick("contatti")} className="btn-primary text-center text-[13px] mt-3 flex items-center justify-center gap-2 cursor-pointer border-none">
              Contatti
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

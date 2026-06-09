import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Printer } from "lucide-react";
import logoFull from "@/assets/new-logo.png";

const scrollToHash = (hash: string) => {
  const el = document.getElementById(hash);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Footer = ({ onShowWhistleblowing }: { onShowWhistleblowing?: () => void }) => (
  <footer className="bg-foreground text-background">
    <div className="section-container py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-3 mb-5">
            <img
              src={logoFull}
              alt="Consorzio Stabile del Mediterraneo"
              className="h-[43px] w-auto object-contain shrink-0"
              loading="lazy"
            />
          </div>
          <p className="text-sm text-background/40 max-w-sm leading-relaxed mb-6">
            Consorzio Stabile del Mediterraneo S.c.a.r.l. — costituito nel 2013.
            Aggregazione strategica di imprese leader nel settore delle costruzioni civili e industriali,
            restauro, infrastrutture e impiantistica tecnologica.
          </p>
          <div className="space-y-3">
            <a href="mailto:info@consorziodelmediterraneo.it" className="flex items-center gap-3 text-sm text-background/50 hover:text-background transition-colors">
              <Mail className="h-4 w-4 text-background/30" />
              info@consorziodelmediterraneo.it
            </a>
            <a href="tel:+39081400051" className="flex items-center gap-3 text-sm text-background/50 hover:text-background transition-colors">
              <Phone className="h-4 w-4 text-background/30" />
              +39 081 400051
            </a>
            <span className="flex items-center gap-3 text-sm text-background/30">
              <Printer className="h-4 w-4 text-background/20" />
              Fax 081 2520128
            </span>
            <div className="flex items-start gap-3 text-sm text-background/50">
              <MapPin className="h-4 w-4 text-background/30 mt-0.5 shrink-0" />
              <span>Via Dei Mille, 40 — 80121 Napoli (NA)</span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-background/30 mb-5">
            Navigazione
          </h4>
          <nav aria-label="Footer" className="flex flex-col gap-2.5">
            {[
              { l: "Home", h: "home" },
              { l: "Chi Siamo", h: "chi-siamo" },
              { l: "Competenze", h: "competenze" },
              { l: "Lavori", h: "lavori" },
              { l: "Certificazioni", h: "certificazioni" },
              { l: "Legalità", h: "legalita" },
              { l: "Contatti", h: "contatti" },
            ].map((link) => (
              <a
                href={`/#${link.h}`}
                key={link.l}
                className="text-sm text-background/50 hover:text-background transition-colors"
              >
                {link.l}
              </a>
            ))}
          </nav>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-background/30 mb-5">
            Legal
          </h4>
          <nav aria-label="Legal" className="flex flex-col gap-2.5">
            <Link to="/privacy" className="text-sm text-background/50 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="text-sm text-background/50 hover:text-background transition-colors">
              Cookie Policy
            </Link>
            <span className="text-sm text-background/30 cursor-not-allowed" aria-disabled="true">
              Modello 231
            </span>
            <button
              onClick={() => {
                onShowWhistleblowing?.();
                setTimeout(() => scrollToHash("whistleblowing"), 150);
              }}
              className="text-sm text-background/50 hover:text-background transition-colors bg-transparent border-none cursor-pointer text-left"
            >
              Whistleblowing
            </button>
            <span className="text-sm text-background/30 cursor-not-allowed" aria-disabled="true">
              Amm. Trasparente
            </span>
          </nav>
        </div>
      </div>
    </div>

    <div className="border-t border-background/5">
      <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-background/30">
          © 2026 Consorzio Stabile del Mediterraneo S.c.a r.l. — Tutti i diritti riservati.
        </p>
        <p className="text-xs text-background/30">
          P.IVA 07445901213 | REA NA-884629
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

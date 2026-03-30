import { ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-deep text-primary-foreground">
    {/* Top bar */}
    <div className="border-b border-primary-foreground/5">
      <div className="container flex items-center justify-between py-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent flex items-center justify-center">
            <span className="font-extrabold text-[10px] text-accent-foreground">CM</span>
          </div>
          <span className="font-extrabold text-sm tracking-wider uppercase text-primary-foreground/80">
            Consorzio del Mediterraneo
          </span>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 border border-primary-foreground/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
          aria-label="Torna su"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </div>

    {/* Main */}
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl font-black leading-tight mb-4">
            Costruiamo la solidità
            <br />
            <span className="text-accent">del domani.</span>
          </p>
          <p className="text-sm text-primary-foreground/40 max-w-sm leading-relaxed">
            Consorzio Stabile ai sensi dell'art. 65, comma 2, lett. d) del D.Lgs. 36/2023.
            Aggregazione strategica di imprese leader nel settore delle costruzioni e infrastrutture.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] mb-6 text-primary-foreground/30">
            Navigazione
          </h4>
          <nav aria-label="Link footer" className="flex flex-col gap-3">
            {[
              { label: "Home", href: "#home" },
              { label: "Il Consorzio", href: "#consorzio" },
              { label: "Aree di Intervento", href: "#aree" },
              { label: "ESG & Certificazioni", href: "#esg" },
              { label: "Contatti", href: "#contatti" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] mb-6 text-primary-foreground/30">
            Legal
          </h4>
          <nav aria-label="Link legali" className="flex flex-col gap-3">
            {["Privacy Policy", "Cookie Policy", "Whistleblowing", "Amm. Trasparente"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-primary-foreground/5">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-[11px] text-primary-foreground/30 uppercase tracking-wider">
          © 2026 Consorzio del Mediterraneo — Tutti i diritti riservati
        </p>
        <p className="text-[11px] text-primary-foreground/30 uppercase tracking-wider">
          P.IVA 01234567890 | REA NA-000000
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

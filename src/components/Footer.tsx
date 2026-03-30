const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-accent flex items-center justify-center">
              <span className="font-extrabold text-sm text-accent-foreground">CM</span>
            </div>
            <span className="font-extrabold text-lg tracking-tight">Consorzio del Mediterraneo</span>
          </div>
          <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
            Consorzio Stabile ai sensi dell'art. 65, comma 2, lett. d) del D.Lgs. 36/2023.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-4 text-primary-foreground/60">
            Navigazione
          </h4>
          <nav aria-label="Link footer" className="flex flex-col gap-2">
            {["Home", "Il Consorzio", "Aree di Intervento", "ESG & Certificazioni", "Contatti"].map(
              (l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "e")}`}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {l}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-4 text-primary-foreground/60">
            Legal
          </h4>
          <nav aria-label="Link legali" className="flex flex-col gap-2">
            <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Whistleblowing
            </a>
            <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Amministrazione Trasparente
            </a>
          </nav>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-primary-foreground/50">
          © 2026 Consorzio del Mediterraneo — Tutti i diritti riservati.
        </p>
        <p className="text-xs text-primary-foreground/50">
          P.IVA 01234567890 | REA NA-000000
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

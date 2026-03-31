import logoFull from "@/assets/logo-cdm-full.jpeg";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="section-container py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center mb-5">
            <img
              src={logoFull}
              alt="Consorzio Stabile del Mediterraneo"
              className="h-14 w-auto object-contain shrink-0 brightness-0 invert opacity-80"
              loading="lazy"
            />
          </div>
          <p className="text-sm text-background/40 max-w-sm leading-relaxed">
            Consorzio Stabile ai sensi dell'art. 65, comma 2, lett. d) del D.Lgs. 36/2023.
            Aggregazione strategica di imprese leader nel settore delle costruzioni e delle infrastrutture.
          </p>
        </div>

        {/* Nav */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-background/30 mb-5">
            Navigazione
          </h4>
          <nav aria-label="Footer" className="flex flex-col gap-2.5">
            {[
              { l: "Home", h: "#home" },
              { l: "Chi Siamo", h: "#chi-siamo" },
              { l: "Competenze", h: "#competenze" },
              { l: "Lavori", h: "#lavori" },
              { l: "Certificazioni", h: "#certificazioni" },
              { l: "Legalità", h: "#legalita" },
              { l: "Contatti", h: "#contatti" },
            ].map((link) => (
              <a key={link.l} href={link.h} className="text-sm text-background/50 hover:text-background transition-colors">
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
            {["Privacy Policy", "Cookie Policy", "Modello 231", "Whistleblowing", "Amm. Trasparente"].map((l) => (
              <a key={l} href="#" className="text-sm text-background/50 hover:text-background transition-colors">
                {l}
              </a>
            ))}
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

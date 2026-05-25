import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import certSoa from "@/assets/cert-soa.webp";
import cert9001 from "@/assets/cert-9001.webp";
import cert14001 from "@/assets/cert-14001.webp";
import cert45001 from "@/assets/cert-45001.webp";
import certUniPdr from "@/assets/cert-uni-pdr.webp";

const certifications = [
  {
    name: "Attestazione SOA",
    desc: "Cat. OG1, OG3, OG11 — Classificazione VIII",
    img: certSoa,
    pdfUrl: "https://www.consorziodelmediterraneo.it/wp-content/uploads/2026/03/Attestato-SOA-62365_17_00_CDM.pdf",
  },
  {
    name: "ISO 9001:2015",
    desc: "Sistema di gestione per la qualità",
    img: cert9001,
    pdfUrl: "https://www.consorziodelmediterraneo.it/wp-content/uploads/2026/03/9001_CDM.pdf",
  },
  {
    name: "ISO 14001:2015",
    desc: "Sistema di gestione ambientale",
    img: cert14001,
    pdfUrl: "https://www.consorziodelmediterraneo.it/wp-content/uploads/2026/03/14001_CDM.pdf",
  },
  {
    name: "ISO 45001:2018",
    desc: "Salute e sicurezza sul lavoro",
    img: cert45001,
    pdfUrl: "https://www.consorziodelmediterraneo.it/wp-content/uploads/2026/03/45001_CDM.pdf",
  },
  {
    name: "UNI/PdR 125:2022",
    desc: "Parità di genere",
    img: certUniPdr,
    pdfUrl: "https://www.consorziodelmediterraneo.it/wp-content/uploads/2026/03/Certificato-UNI-PdR-125.pdf",
  },
];

const CertificationsSection = () => {
  const [openImg, setOpenImg] = useState<string | null>(null);

  return (
    <section id="certificazioni" className="section-spacing">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="heading-section mb-4">Trust & Compliance</p>
            <h2 className="heading-lg mb-6">
              Sicurezza. Qualità. Sostenibilità.
            </h2>
            <p className="body-lg max-w-md">
              Un Sistema di Gestione Integrato garantisce conformità, trasparenza e impegno
              costante verso la sostenibilità ambientale e sociale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-premium p-5 flex items-start gap-4 cursor-pointer group"
                onClick={() => setOpenImg(cert.img)}
              >
                <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground text-[15px]">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{cert.desc}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:underline">
                      Visualizza Certificato
                    </span>
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Scarica PDF
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Image viewer dialog */}
      <Dialog open={!!openImg} onOpenChange={() => setOpenImg(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto p-2">
          <DialogTitle className="sr-only">Certificazione</DialogTitle>
          {openImg && (
            <img
              src={openImg}
              alt="Certificazione"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificationsSection;

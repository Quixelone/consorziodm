import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const certifications = [
  {
    name: "Attestazione SOA",
    desc: "Cat. OG1, OG3, OG11 — Classificazione VIII",
    docUrl: null as string | null,
    docLabel: "Visualizza Attestato",
  },
  {
    name: "ISO 9001:2015",
    desc: "Sistema di gestione per la qualità",
    docUrl: null as string | null,
    docLabel: "Visualizza Certificato",
  },
  {
    name: "ISO 14001:2015",
    desc: "Sistema di gestione ambientale",
    docUrl: null as string | null,
    docLabel: "Visualizza Certificato",
  },
  {
    name: "ISO 45001:2018",
    desc: "Salute e sicurezza sul lavoro",
    docUrl: null as string | null,
    docLabel: "Visualizza Certificato",
  },
  {
    name: "SA 8000",
    desc: "Standard etico e responsabilità sociale",
    docUrl: null as string | null,
    docLabel: "Visualizza Certificato",
  },
];

const CertificationsSection = () => {
  const [openDoc, setOpenDoc] = useState<string | null>(null);

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
                onClick={() => {
                  if (cert.docUrl) setOpenDoc(cert.docUrl);
                }}
              >
                <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground text-[15px]">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{cert.desc}</p>
                  {cert.docUrl ? (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-2 group-hover:underline">
                      <ExternalLink className="h-3 w-3" />
                      {cert.docLabel}
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground/50 mt-2 block">
                      Documento in aggiornamento
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Document viewer dialog */}
      <Dialog open={!!openDoc} onOpenChange={() => setOpenDoc(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto p-0">
          <DialogTitle className="sr-only">Certificazione</DialogTitle>
          {openDoc && (
            <img
              src={openDoc}
              alt="Certificazione"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificationsSection;

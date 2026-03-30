import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const certifications = [
  { name: "Attestazione SOA", desc: "Cat. OG1, OG3, OG11 — Classificazione VIII" },
  { name: "ISO 9001:2015", desc: "Sistema di gestione per la qualità" },
  { name: "ISO 14001:2015", desc: "Sistema di gestione ambientale" },
  { name: "ISO 45001:2018", desc: "Salute e sicurezza sul lavoro" },
  { name: "SA 8000", desc: "Standard etico e responsabilità sociale" },
];

const CertificationsSection = () => (
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
              className="card-premium p-5 flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-[15px]">{cert.name}</h4>
                <p className="text-sm text-muted-foreground mt-0.5">{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default CertificationsSection;

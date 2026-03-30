import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Download, CheckCircle2, Award } from "lucide-react";

const certifications = [
  { name: "Attestazione SOA", category: "Qualificazione", scope: "Cat. OG1, OG3, OG11 — Class. VIII" },
  { name: "ISO 9001:2015", category: "Qualità", scope: "Sistema di gestione per la qualità" },
  { name: "ISO 14001:2015", category: "Ambiente", scope: "Sistema di gestione ambientale" },
  { name: "ISO 45001:2018", category: "Sicurezza", scope: "Salute e sicurezza sul lavoro" },
  { name: "SA 8000", category: "Responsabilità Sociale", scope: "Standard etico-sociale" },
];

const EsgSection = () => (
  <section id="esg" className="section-padding bg-warm relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="gold-line" />
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
            Compliance
          </span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl font-black text-foreground leading-[1.05] mb-6">
          ESG &
          <span className="text-accent italic"> Certificazioni.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Trasparenza, conformità normativa e impegno verso la sostenibilità ambientale e sociale.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card border border-border p-6 group hover:border-accent transition-colors duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  {c.category}
                </span>
              </div>
              <Award className="h-4 w-4 text-muted-foreground/30" aria-hidden="true" />
            </div>
            <h4 className="font-extrabold text-foreground mb-2">{c.name}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{c.scope}</p>
          </motion.div>
        ))}

        {/* Download card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-primary p-6 flex flex-col justify-between"
        >
          <div>
            <h4 className="font-extrabold text-primary-foreground mb-2">Documentazione</h4>
            <p className="text-xs text-primary-foreground/60 leading-relaxed mb-6">
              Scarica le policy ESG e il Codice Etico del Consorzio.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Button variant="secondary" size="sm" className="justify-start font-bold text-xs">
              <FileText className="mr-2 h-3.5 w-3.5" />
              Policy ESG
            </Button>
            <Button variant="secondary" size="sm" className="justify-start font-bold text-xs">
              <Download className="mr-2 h-3.5 w-3.5" />
              Codice Etico
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EsgSection;

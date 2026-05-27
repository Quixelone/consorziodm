import { motion } from "framer-motion";
import { Network, Shield, Award, Zap } from "lucide-react";

const pillars = [
  {
    icon: Network,
    title: "Rete integrata",
    description: "37 imprese consorziate con competenze complementari: costruzioni civili e industriali, restauro, infrastrutture, impiantistica tecnologica.",
  },
  {
    icon: Shield,
    title: "Qualità e sicurezza",
    description: "Certificazioni ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 e Modello 231/01 dal 2022 per trasparenza e legalità.",
  },
  {
    icon: Award,
    title: "SOA classifica VIII",
    description: "Attestazione SOA nelle categorie OG1, OG3, OG11 — il livello più alto per partecipare ad appalti di importo illimitato.",
  },
  {
    icon: Zap,
    title: "Ecobonus e Sismabonus",
    description: "Dal 2019 soluzioni integrate per riduzione del rischio sismico ed efficienza energetica, dalla fattibilità all'esecuzione.",
  },
];

const PillarsSection = () => (
  <section className="section-spacing bg-surface">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="heading-section mb-4">Perché il Consorzio</p>
        <h2 className="heading-lg max-w-xl mx-auto">
          I pilastri della nostra forza.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-premium p-8 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default PillarsSection;

import { motion } from "framer-motion";
import { Shield, Award, Map, Zap } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    kpi: "€100M+",
    title: "Solidità Patrimoniale",
    description: "Importo complessivo dei lavori eseguiti su scala nazionale, garanzia di capacità economica e finanziaria.",
  },
  {
    icon: Award,
    kpi: "Cl. VIII",
    title: "Classificazione SOA",
    description: "Qualificazione per importo illimitato — il massimo livello riconosciuto per i lavori pubblici in Italia.",
  },
  {
    icon: Map,
    kpi: "37",
    title: "Rete Nazionale",
    description: "Imprese consorziate su tutto il territorio nazionale, copertura capillare per ogni tipo di commessa.",
  },
  {
    icon: Zap,
    kpi: "50+",
    title: "Efficienza Operativa",
    description: "Cantieri completati con successo, rispettando cronoprogrammi e budget definiti dalle stazioni appaltanti.",
  },
];

const PillarsSection = () => (
  <section className="section-spacing">
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
                  <p className="font-mono-kpi text-3xl font-bold text-primary tracking-tight mb-2">{p.kpi}</p>
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

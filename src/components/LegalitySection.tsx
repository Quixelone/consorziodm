import { motion } from "framer-motion";
import { Scale, AlertTriangle, FileText, ArrowDown } from "lucide-react";

const legalItems = [
  {
    icon: Scale,
    title: "Modello 231/01",
    description:
      "Dal 2022 il Consorzio ha adottato il Modello di Prevenzione, Gestione e Controllo (M.P.G.C.) ex D.lgs. 231/01, volto a prevenire reati e illeciti amministrativi nello svolgimento delle attività aziendali.",
  },
  {
    icon: AlertTriangle,
    title: "Whistleblowing",
    description:
      "Canale di segnalazione dedicato ai sensi del D.Lgs. 24/2023. Segnala condotte illecite in modo riservato e protetto, con la massima tutela del segnalante.",
    link: true,
  },
  {
    icon: FileText,
    title: "Codice Etico",
    description:
      "Il nostro Codice Etico definisce i principi e le regole di comportamento che guidano tutte le attività del Consorzio, delle imprese consorziate e dei collaboratori.",
  },
];

const LegalitySection = () => (
  <section id="legalita" className="section-spacing">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="heading-section mb-4">Compliance</p>
        <h2 className="heading-lg max-w-lg mx-auto">
          Legalità e Responsabilità.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {legalItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`card-premium p-8 lg:p-10 group ${item.link ? "cursor-pointer hover:border-primary/30" : ""}`}
              {...(item.link
                ? {
                    onClick: () => {
                      document.getElementById("whistleblowing")?.scrollIntoView({ behavior: "smooth" });
                    },
                    role: "button",
                    tabIndex: 0,
                    onKeyDown: (e: React.KeyboardEvent) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        document.getElementById("whistleblowing")?.scrollIntoView({ behavior: "smooth" });
                      }
                    },
                  }
                : {})}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-8 group-hover:bg-primary/5 transition-colors duration-300">
                <Icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {item.link && (
                <div className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Vai al canale di segnalazione
                  <ArrowDown className="h-3.5 w-3.5" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default LegalitySection;

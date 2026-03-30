import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tabConstruction from "@/assets/tab-construction.jpg";
import tabProjects from "@/assets/tab-projects.jpg";
import tabContracts from "@/assets/tab-contracts.jpg";
import tabMaintenance from "@/assets/tab-maintenance.jpg";

const tabs = [
  {
    id: "soluzioni",
    label: "Soluzioni Aziendali",
    title: "Soluzioni su misura per ogni esigenza",
    description:
      "Il Consorzio offre servizi integrati di progettazione, direzione lavori, sicurezza e gestione commesse. Un unico interlocutore per garantire efficienza, qualità e rispetto delle tempistiche in ogni fase del processo costruttivo.",
    img: tabConstruction,
  },
  {
    id: "progetti",
    label: "Progetti",
    title: "Dalla progettazione alla realizzazione",
    description:
      "Gestiamo l'intero ciclo di vita del progetto: dall'analisi di fattibilità alla consegna dell'opera. Il nostro team multidisciplinare garantisce soluzioni innovative e conformi alle normative vigenti per appalti pubblici e privati.",
    img: tabProjects,
  },
  {
    id: "esecuzione",
    label: "Esecuzione",
    title: "Esecuzione impeccabile, risultati concreti",
    description:
      "Le nostre imprese consorziate operano con i più alti standard qualitativi e di sicurezza. Ogni cantiere è gestito con metodologie avanzate di project management, garantendo il rispetto di budget e cronoprogramma.",
    img: tabContracts,
  },
  {
    id: "manutenzione",
    label: "Manutenzione",
    title: "Manutenzione programmata e straordinaria",
    description:
      "Offriamo servizi di manutenzione ordinaria e straordinaria per edifici pubblici e privati, impianti tecnologici e infrastrutture. Un approccio proattivo per preservare il valore degli investimenti nel tempo.",
    img: tabMaintenance,
  },
];

const TabsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-spacing">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="heading-section mb-4">Servizi</p>
          <h2 className="heading-lg max-w-lg mx-auto">
            Il nostro approccio integrato.
          </h2>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tabs[active].id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight mb-5">
                {tabs[active].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {tabs[active].description}
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-card-soft">
              <img
                src={tabs[active].img}
                alt={tabs[active].title}
                loading="lazy"
                className="w-full aspect-[3/2] object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TabsSection;

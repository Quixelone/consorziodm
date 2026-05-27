import { motion } from "framer-motion";
import { Building, Landmark, Cpu, ArrowUpRight } from "lucide-react";

const areas = [
  {
    icon: Landmark,
    title: "Infrastrutture e opere d'arte",
    description:
      "Manutenzione straordinaria e risanamento strutturale di opere d'arte su tutto il territorio nazionale. Accordi quadro con Anas Spa per importi fino a €50M.",
  },
  {
    icon: Building,
    title: "Edilizia pubblica e sanitaria",
    description:
      "Scuole, ospedali, edilizia residenziale pubblica e strutture sportive. Interventi chiavi in mano con attenzione alla sostenibilità e al PNRR.",
  },
  {
    icon: Cpu,
    title: "Impiantistica e reti idriche",
    description:
      "Impianti elettrici, meccanici, idrici e fognari. Distrettualizzazione reti, ricerca perdite e modelli idraulici per gestori come Acea e Acque Veronesi.",
  },
];

const AreasSection = () => (
  <section id="competenze" className="section-spacing">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 lg:mb-20"
      >
        <p className="heading-section mb-4">Aree di intervento</p>
        <h2 className="heading-lg max-w-lg mx-auto">
          Competenze Strategiche.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {areas.map((area, i) => {
          const Icon = area.icon;
          return (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-premium p-8 lg:p-10 group cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-8 group-hover:bg-primary/5 transition-colors duration-300">
                <Icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                {area.title}
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AreasSection;

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const MissionVisionSection = () => (
  <section className="section-spacing">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="heading-section mb-4">Chi siamo davvero</p>
        <h2 className="heading-lg max-w-2xl mx-auto">
          Una direzione chiara. Un impegno concreto.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-premium p-8 lg:p-10"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-4">La nostra Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            Aggregare competenze e risorse per realizzare opere pubbliche e private di eccellenza, 
            garantendo affidabilità, qualità e rispetto dei tempi. Operiamo come partner strategico 
            delle stazioni appaltanti, offrendo capacità tecnica, solidità patrimoniale e un modello 
            organizzativo orientato alla massima efficienza.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-premium p-8 lg:p-10"
        >
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
            <Eye className="h-6 w-6 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-4">La nostra Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            Diventare il partner di riferimento per le stazioni appaltanti e le grandi imprese 
            nella realizzazione di infrastrutture strategiche nel Mezzogiorno e in Italia. 
            Puntiamo a un modello di crescita sostenibile, fondato su innovazione, legalità 
            e responsabilità sociale d'impresa.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MissionVisionSection;

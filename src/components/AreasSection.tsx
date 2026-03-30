import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import infraImg from "@/assets/sector-infrastrutture.jpg";
import edilImg from "@/assets/sector-edilizia.jpg";
import impImg from "@/assets/sector-impiantistica.jpg";

const sectors = [
  {
    id: "infrastrutture",
    label: "Grandi Infrastrutture",
    img: infraImg,
    alt: "Cantiere di grandi infrastrutture",
    description:
      "Autostrade, viadotti, gallerie, ponti e opere marittime. Il Consorzio gestisce progetti infrastrutturali di rilevanza nazionale, garantendo conformità normativa e rispetto dei tempi.",
  },
  {
    id: "edilizia",
    label: "Edilizia Pubblica",
    img: edilImg,
    alt: "Cantiere di edilizia pubblica",
    description:
      "Scuole, ospedali, edilizia residenziale pubblica e strutture sportive. Interventi chiavi in mano con elevati standard qualitativi e attenzione alla sostenibilità ambientale.",
  },
  {
    id: "impiantistica",
    label: "Impiantistica Complessa",
    img: impImg,
    alt: "Impianti complessi in costruzione",
    description:
      "Impianti meccanici, elettrici, idraulici e speciali per il settore industriale e civile. Soluzioni integrate progettate per l'efficienza energetica e la sicurezza operativa.",
  },
];

const AreasSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="aree" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
            Settori
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight max-w-xl">
            Aree di Intervento.
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Settori di intervento">
          {sectors.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={active === i}
              aria-controls={`panel-${s.id}`}
              onClick={() => setActive(i)}
              className={`px-5 py-3 text-sm font-bold uppercase tracking-wider border-2 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ring ${
                active === i
                  ? "bg-primary text-primary-foreground border-primary shadow-hard-sm"
                  : "bg-card text-muted-foreground border-foreground/10 hover:border-foreground/30"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={sectors[active].id}
            id={`panel-${sectors[active].id}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-foreground/10 shadow-hard overflow-hidden"
          >
            <div className="relative aspect-[4/3] md:aspect-auto">
              <img
                src={sectors[active].img}
                alt={sectors[active].alt}
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-accent/20 mix-blend-multiply" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center bg-card">
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                {sectors[active].label}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {sectors[active].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AreasSection;

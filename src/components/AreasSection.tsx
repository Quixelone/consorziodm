import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import infraImg from "@/assets/sector-infrastrutture.jpg";
import edilImg from "@/assets/sector-edilizia.jpg";
import impImg from "@/assets/sector-impiantistica.jpg";

const sectors = [
  {
    id: "infrastrutture",
    label: "Grandi Infrastrutture",
    shortLabel: "Infrastrutture",
    img: infraImg,
    alt: "Cantiere di grandi infrastrutture",
    description:
      "Autostrade, viadotti, gallerie, ponti e opere marittime. Il Consorzio gestisce progetti infrastrutturali di rilevanza nazionale, garantendo conformità normativa e rispetto dei tempi.",
    stats: [
      { label: "Progetti completati", value: "32" },
      { label: "Anni di esperienza", value: "18+" },
    ],
  },
  {
    id: "edilizia",
    label: "Edilizia Pubblica",
    shortLabel: "Edilizia",
    img: edilImg,
    alt: "Cantiere di edilizia pubblica",
    description:
      "Scuole, ospedali, edilizia residenziale pubblica e strutture sportive. Interventi chiavi in mano con elevati standard qualitativi e attenzione alla sostenibilità ambientale.",
    stats: [
      { label: "Immobili realizzati", value: "85+" },
      { label: "MQ costruiti", value: "250K" },
    ],
  },
  {
    id: "impiantistica",
    label: "Impiantistica Complessa",
    shortLabel: "Impiantistica",
    img: impImg,
    alt: "Impianti complessi in costruzione",
    description:
      "Impianti meccanici, elettrici, idraulici e speciali per il settore industriale e civile. Soluzioni integrate progettate per l'efficienza energetica e la sicurezza operativa.",
    stats: [
      { label: "Impianti installati", value: "120+" },
      { label: "Efficienza media", value: "94%" },
    ],
  },
];

const AreasSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="aree" className="section-padding bg-navy-deep relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--gold)) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              Settori
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-black text-primary-foreground leading-[1.05]">
            Aree di
            <span className="text-accent italic"> Intervento.</span>
          </h2>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-3 mb-12" role="tablist" aria-label="Settori di intervento">
          {sectors.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={active === i}
              aria-controls={`panel-${s.id}`}
              onClick={() => setActive(i)}
              className={`relative px-6 py-3 text-[13px] font-bold uppercase tracking-wider transition-all duration-300 focus-visible:outline-2 focus-visible:outline-ring ${
                active === i
                  ? "bg-accent text-accent-foreground"
                  : "bg-transparent text-primary-foreground/40 border border-primary-foreground/10 hover:text-primary-foreground/70 hover:border-primary-foreground/20"
              }`}
            >
              <span className="hidden sm:inline">{s.label}</span>
              <span className="sm:hidden">{s.shortLabel}</span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={sectors[active].id}
            id={`panel-${sectors[active].id}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden"
          >
            {/* Image - 3 cols */}
            <div className="lg:col-span-3 relative aspect-[16/10] lg:aspect-auto">
              <img
                src={sectors[active].img}
                alt={sectors[active].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/30 to-transparent" />
              <div className="absolute inset-0 bg-accent/10 mix-blend-color" />
            </div>

            {/* Content - 2 cols */}
            <div className="lg:col-span-2 bg-card p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-serif text-3xl md:text-4xl font-black text-foreground mb-6">
                {sectors[active].label}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {sectors[active].description}
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                {sectors[active].stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="font-mono-kpi text-3xl font-bold text-accent-foreground">
                      {stat.value}
                    </span>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AreasSection;

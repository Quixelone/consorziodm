import { motion } from "framer-motion";

const services = [
  {
    id: "soluzioni",
    label: "Soluzioni",
    title: "Soluzioni su misura",
    description: "Servizi integrati di progettazione, direzione lavori, sicurezza e gestione commesse.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "progetti",
    label: "Progetti",
    title: "Dalla progettazione alla realizzazione",
    description: "Gestiamo l'intero ciclo di vita del progetto: dall'analisi di fattibilità alla consegna dell'opera.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "esecuzione",
    label: "Esecuzione",
    title: "Esecuzione impeccabile",
    description: "Cantieri gestiti con metodologie avanzate di project management, rispetto di budget e cronoprogramma.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "manutenzione",
    label: "Manutenzione",
    title: "Manutenzione programmata",
    description: "Manutenzione ordinaria e straordinaria per edifici pubblici e privati, impianti e infrastrutture.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
];

const TabsSection = () => (
  <section className="section-spacing bg-surface">
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

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`group relative rounded-3xl overflow-hidden shadow-card ${
              i === 0 || i === 3 ? "md:col-span-2" : ""
            }`}
          >
            {/* Image */}
            <div className={`relative ${i === 0 || i === 3 ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {s.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TabsSection;

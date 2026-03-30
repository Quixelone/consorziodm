import { motion } from "framer-motion";
import { Shield, Zap, PiggyBank, ArrowRight } from "lucide-react";

const advantages = [
  {
    icon: PiggyBank,
    title: "Capacità Economica",
    number: "01",
    description:
      "L'aggregazione delle risorse finanziarie delle imprese consorziate garantisce la capacità di affrontare commesse di grande scala, offrendo garanzie patrimoniali solide alle stazioni appaltanti.",
  },
  {
    icon: Zap,
    title: "Esecuzione Rapida",
    number: "02",
    description:
      "Un network integrato di competenze specialistiche consente di mobilitare risorse umane e tecniche in tempi record, rispettando cronoprogrammi anche nei progetti più complessi.",
  },
  {
    icon: Shield,
    title: "Gestione del Rischio",
    number: "03",
    description:
      "La struttura consortile distribuisce il rischio tra più soggetti qualificati, assicurando continuità operativa e resilienza anche di fronte a imprevisti di cantiere.",
  },
];

const ConsortiumModel = () => (
  <section id="consorzio" className="section-padding bg-background relative overflow-hidden">
    {/* Decorative */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-warm -skew-x-12 translate-x-1/4 hidden lg:block" />

    <div className="container relative">
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
            Il Modello
          </span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl font-black text-foreground leading-[1.05] mb-6">
          La forza dell'aggregazione
          <span className="text-accent"> strategica.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Un modello che unisce competenze, risorse e certificazioni per vincere
          le sfide delle grandi opere infrastrutturali.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
        {advantages.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative border border-border bg-card p-8 md:p-10 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono-kpi text-5xl font-bold text-muted/80 group-hover:text-primary-foreground/10 transition-colors duration-500">
                  {item.number}
                </span>
                <div className="w-12 h-12 border border-border group-hover:border-accent flex items-center justify-center transition-colors duration-500">
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors duration-500" aria-hidden="true" />
                </div>
              </div>

              <h3 className="text-xl font-extrabold mb-4 group-hover:text-primary-foreground transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/70 transition-colors duration-500">
                {item.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span>Scopri di più</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ConsortiumModel;

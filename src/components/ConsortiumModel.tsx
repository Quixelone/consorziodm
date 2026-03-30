import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Shield, Zap, PiggyBank } from "lucide-react";

const advantages = [
  {
    icon: PiggyBank,
    title: "Capacità Economica",
    description:
      "L'aggregazione delle risorse finanziarie delle imprese consorziate garantisce la capacità di affrontare commesse di grande scala, offrendo garanzie patrimoniali solide alle stazioni appaltanti.",
  },
  {
    icon: Zap,
    title: "Esecuzione Rapida",
    description:
      "Un network integrato di competenze specialistiche consente di mobilitare risorse umane e tecniche in tempi record, rispettando cronoprogrammi anche nei progetti più complessi.",
  },
  {
    icon: Shield,
    title: "Gestione del Rischio",
    description:
      "La struttura consortile distribuisce il rischio tra più soggetti qualificati, assicurando continuità operativa e resilienza anche di fronte a imprevisti di cantiere.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const ConsortiumModel = () => (
  <section id="consorzio" className="py-20 md:py-28 bg-concrete">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
          Il Modello
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight max-w-xl">
          La forza dell'aggregazione strategica.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {advantages.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <Card className="border-2 border-foreground/10 shadow-hard rounded-sm h-full hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_hsl(var(--ocean))] transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl font-extrabold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ConsortiumModel;

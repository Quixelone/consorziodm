import { motion } from "framer-motion";
import { Shield, Zap, Handshake } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Affidabilità",
    description: "Garanzie patrimoniali solide e struttura giuridica trasparente a tutela delle stazioni appaltanti.",
  },
  {
    icon: Zap,
    title: "Efficienza",
    description: "Un network integrato di competenze consente di mobilitare risorse in tempi record rispettando ogni cronoprogramma.",
  },
  {
    icon: Handshake,
    title: "Collaborazione",
    description: "Autonomia e cooperazione si incontrano: ogni impresa porta esperienza e competenze, il Consorzio coordina.",
  },
];

const AboutSection = () => (
  <section id="chi-siamo" className="section-spacing">
    <div className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="heading-section mb-4">Chi siamo</p>
          <h2 className="heading-lg mb-6">
            Costruiamo il futuro, insieme al territorio.
          </h2>
          <p className="body-lg mb-6">
            Ogni progetto è molto più di un'opera: è un gesto che dura nel tempo.
            Ogni impresa è parte di una comunità che mette in rete competenze, passione
            e visione, trasformando ogni spazio in un luogo da vivere.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            La nostra forza non risiede solo nei numeri, ma nel modello organizzativo:
            il Consorzio centralizza la gestione amministrativa e strategica delle commesse,
            supporta la partecipazione ad appalti pubblici e privati e coordina le attività operative.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5"
        >
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5 p-5 rounded-2xl hover:bg-secondary/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;

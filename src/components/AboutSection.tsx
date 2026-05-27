import { motion } from "framer-motion";
import { Shield, Zap, Handshake } from "lucide-react";
import aboutImg from "@/assets/hero-architecture.webp";

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
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elevated">
            <img
              src={aboutImg}
              alt="Cantiere e infrastrutture"
              className="w-full aspect-[4/3] object-cover"
              width={800}
              height={600}
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Text + Values */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
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

          {/* Numbers inline */}
          <div className="grid grid-cols-2 gap-4 mb-8 p-5 rounded-2xl bg-secondary/50 border border-border/50">
            <div>
              <p className="text-2xl font-bold text-foreground tracking-tight" style={{ fontFamily: "var(--font-mono)" }}>€100M+</p>
              <p className="text-xs text-muted-foreground mt-1">Lavori eseguiti</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground tracking-tight" style={{ fontFamily: "var(--font-mono)" }}>37</p>
              <p className="text-xs text-muted-foreground mt-1">Imprese consorziate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground tracking-tight" style={{ fontFamily: "var(--font-mono)" }}>50+</p>
              <p className="text-xs text-muted-foreground mt-1">Cantieri completati</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground tracking-tight" style={{ fontFamily: "var(--font-mono)" }}>VIII</p>
              <p className="text-xs text-muted-foreground mt-1">Classificazione SOA</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-10">
            La nostra forza non risiede solo nei numeri, ma nel modello organizzativo:
            il Consorzio centralizza la gestione amministrativa e strategica delle commesse,
            supporta la partecipazione ad appalti pubblici e privati e coordina le attività operative.
          </p>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center p-5 rounded-2xl hover:bg-secondary/50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{v.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;

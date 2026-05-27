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
            Il nostro percorso inizia nel 2013, quando un gruppo di imprese ha scelto di non essere
            semplicemente imprese che costruiscono, ma di diventare una comunità che costruisce insieme.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Il Consorzio Stabile del Mediterraneo S.c.a.r.l. nasce con l'obiettivo di creare una struttura
            capace di coordinare competenze tecniche, capacità operative e organizzazione, per affrontare
            in modo solido e strutturato il mercato delle costruzioni civili e industriali, del restauro,
            delle infrastrutture e dell'impiantistica tecnologica.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            La nostra forza non risiede solo nei numeri, ma nel modello organizzativo: il Consorzio
            centralizza la gestione amministrativa e strategica delle commesse, supporta la partecipazione
            ad appalti pubblici e privati e coordina le attività operative, lasciando alle imprese
            associate ciò che sanno fare meglio: costruire.
          </p>

          {/* Numbers inline */}
          <div className="grid grid-cols-2 gap-4 mb-10 p-5 rounded-2xl bg-secondary/50 border border-border/50">
            <div>
              <p className="text-2xl font-bold text-foreground tracking-tight" style={{ fontFamily: "var(--font-mono)" }}>€200M+</p>
              <p className="text-xs text-muted-foreground mt-1">Importo lavori realizzati</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground tracking-tight" style={{ fontFamily: "var(--font-mono)" }}>37</p>
              <p className="text-xs text-muted-foreground mt-1">Imprese consorziate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground tracking-tight" style={{ fontFamily: "var(--font-mono)" }}>30+</p>
              <p className="text-xs text-muted-foreground mt-1">Progetti completati</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground tracking-tight" style={{ fontFamily: "var(--font-mono)" }}>VIII</p>
              <p className="text-xs text-muted-foreground mt-1">Classificazione SOA</p>
            </div>
          </div>

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

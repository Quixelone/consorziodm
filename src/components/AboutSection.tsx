import { motion } from "framer-motion";
import aboutImg from "@/assets/hero-architecture.webp";

const milestones = [
  { year: "2013", label: "Fondazione del Consorzio" },
  { year: "2019", label: "Servizi Ecobonus e Sismabonus" },
  { year: "2022", label: "Adozione Modello 231/01" },
  { year: "2023", label: "SOA Classifica VIII — OG1, OG3, OG11" },
];

const stats = [
  { value: "€120M+", label: "Valore lavori realizzati" },
  { value: "40", label: "Imprese consorziate" },
  { value: "50+", label: "Progetti completati" },
  { value: "12+", label: "Anni di attività" },
];

const AboutSection = () => (
  <section id="chi-siamo" className="relative py-24 md:py-32 lg:py-40 bg-white overflow-hidden">
    {/* Subtle top accent line */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="section-container">
      {/* Section label + headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mb-20 md:mb-28"
      >
        <p className="text-sm font-semibold tracking-widest uppercase text-primary/70 mb-6">
          Chi siamo
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-8" style={{ fontFamily: "var(--font-heading)" }}>
          Non siamo solo imprese che costruiscono.
          <br />
          <span className="text-primary">Siamo una comunità.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            Nel <span className="text-foreground font-medium">2013</span>, un gruppo di imprese ha scelto di unire le proprie forze. Il Consorzio Stabile del Mediterraneo S.c.a.r.l. coordina competenze tecniche, capacità operative e organizzazione per affrontare il mercato delle costruzioni civili e industriali, del restauro, delle infrastrutture e dell'impiantistica tecnologica.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            Il Consorzio centralizza la gestione, coordina le attività operative, lasciando alle imprese associate ciò che sanno fare meglio: <span className="text-foreground font-medium">La realizzazione dell'opera</span>. Attestazione SOA ad ampia copertura, con classifiche elevate nelle principali categorie OG e OS e qualificazione massima <span className="text-foreground font-medium">VIII</span> in più categorie strategiche dei lavori pubblici.
          </p>
        </div>
      </motion.div>

      {/* Image + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-24 md:mb-32">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 relative"
        >
          <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-muted">
            <img
              src={aboutImg}
              alt="Infrastrutture e cantieri CDM"
              className="w-full h-full object-cover"
              width={1200}
              height={750}
            />
          </div>
          {/* Caption */}
          <p className="text-xs text-muted-foreground mt-4 font-medium tracking-wide">
            CONSorzio stabile del mediterraneo — dal 2013
          </p>
        </motion.div>

        {/* Stats column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <div className="grid grid-cols-2 gap-px bg-border/50 rounded-2xl overflow-hidden">
            {stats.map((stat, i) => (
              <div key={stat.label} className="bg-white p-6 md:p-8 group hover:bg-muted/50 transition-colors">
                <p
                  className="text-3xl md:text-4xl font-bold tracking-tight mb-1 text-foreground"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-10">
          Tappe fondamentali
        </p>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex items-baseline gap-6 pl-10"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <span
                  className="text-sm font-bold text-primary shrink-0"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {m.year}
                </span>
                <span className="text-muted-foreground">{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;

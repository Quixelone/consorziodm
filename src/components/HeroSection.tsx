import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-architecture.webp";

const HeroSection = () => (
  <section id="home" className="relative min-h-[95dvh] flex items-end overflow-hidden">
    {/* Full-bleed image */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Architettura moderna e infrastrutture"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Dark overlay - più scuro in basso per leggibilità */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
    </div>

    {/* Content */}
    <div className="section-container relative pb-16 md:pb-24 lg:pb-32">
      <div className="max-w-3xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
            <ShieldCheck className="h-4 w-4 text-white/90" />
            <span className="text-xs font-medium text-white/90">Consorzio Stabile — D.Lgs. 36/2023</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6"
          style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.04em", lineHeight: "1.0" }}
        >
          Partner strategico per
          <br />
          Appalti Pubblici.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 max-w-xl mb-8 leading-relaxed font-light"
        >
          Capacità operativa, solidità patrimoniale e classificazione SOA VIII:
          il Consorzio Stabile che le stazioni appaltanti scelgono per le grandi opere.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#contatti" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-7 py-3 text-sm font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg">
            Richiedi Qualificazione
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#lavori" className="inline-flex items-center gap-2 border-2 border-white/30 text-white rounded-full px-7 py-3 text-sm font-semibold hover:bg-white/10 transition-all duration-200">
            Scopri le Referenze
          </a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-white/10"
      >
        {[
          { value: "€100M+", label: "Lavori eseguiti" },
          { value: "37", label: "Imprese partner" },
          { value: "50+", label: "Cantieri completati" },
          { value: "VIII", label: "Classificazione SOA" },
        ].map((stat) => (
          <div key={stat.label}>
            <p
              className="text-2xl md:text-3xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {stat.value}
            </p>
            <p className="text-sm text-white/50 mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

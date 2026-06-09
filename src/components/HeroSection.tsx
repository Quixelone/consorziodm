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
      {/* Dark overlay */}
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
            <span className="text-xs font-medium text-white/90">Dal 2013 — Consorzio Stabile S.c.a.r.l.</span>
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
          Un soggetto consortile qualificato per la gestione di appalti pubblici, accordi quadro e commesse
          complesse nei settori dell’edilizia,
          del restauro, delle infrastrutture e dell’impiantistica.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#contatti" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-7 py-3 text-sm font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg">
            Contattaci
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#lavori" className="inline-flex items-center gap-2 border-2 border-white/30 text-white rounded-full px-7 py-3 text-sm font-semibold hover:bg-white/10 transition-all duration-200">
            Scopri di più
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;

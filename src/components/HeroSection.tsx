import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-architecture.webp";

function useCountUp(target: number, duration = 2200) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

const HeroSection = () => (
  <section id="home" className="relative min-h-[90dvh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
    {/* Background texture */}
    <div className="absolute inset-0 bg-dot-pattern opacity-40" />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

    <div className="section-container relative">
      <div className="max-w-4xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 border border-primary/10">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-primary">Consorzio Stabile — D.Lgs. 36/2023</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-xl mb-8"
        >
          Partner strategico per
          <br />
          <span className="text-primary">Appalti Pubblici.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-lg max-w-2xl mb-10 text-balance"
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
          <a href="#contatti" className="btn-primary inline-flex items-center gap-2">
            Richiedi Qualificazione
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#lavori" className="btn-secondary inline-flex items-center gap-2">
            Scopri le Referenze
          </a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-border/50"
      >
        {[
          { value: "€100M+", label: "Lavori eseguiti" },
          { value: "37", label: "Imprese partner" },
          { value: "50+", label: "Cantieri completati" },
          { value: "VIII", label: "Classificazione SOA" },
        ].map((stat, i) => (
          <div key={stat.label}>
            <p className="font-mono-kpi text-2xl md:text-3xl font-bold text-foreground tracking-tight">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

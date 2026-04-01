import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-architecture.jpg";

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
  <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 overflow-hidden">
    {/* Subtle gradient bg */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/40" />
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/30 to-transparent" />

    <div className="section-container relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border/60 mb-8">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold text-muted-foreground">Consorzio Stabile — D.Lgs. 36/2023</span>
          </div>

          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Consorzio Stabile del Mediterraneo
          </p>

          <h1 className="heading-xl mb-6">
            Partner strategico per
            <br />
            <span className="bg-gradient-to-r from-primary to-navy-soft bg-clip-text text-transparent">
              Appalti Pubblici.
            </span>
          </h1>

          <p className="body-lg max-w-lg mb-10">
            Capacità operativa, solidità patrimoniale e classificazione SOA VIII:
            il Consorzio Stabile che le stazioni appaltanti scelgono per le grandi opere.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contatti" className="btn-primary inline-flex items-center gap-2">
              Richiedi Qualificazione
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#lavori" className="btn-secondary inline-flex items-center gap-2">
              Scopri le Referenze
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elevated">
            <img
              src={heroImg}
              alt="Architettura moderna e infrastrutture"
              className="w-full aspect-[4/3] object-cover"
              width={1024}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
          </div>
          {/* Floating stats card */}
          <div className="absolute -bottom-6 -left-6 md:-left-10 card-premium p-5 max-w-[200px]">
            <p className="font-mono-kpi text-3xl font-bold text-foreground">18+</p>
            <p className="text-xs text-muted-foreground mt-1">Anni di esperienza nel settore</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;

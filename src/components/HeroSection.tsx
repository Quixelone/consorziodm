import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HardHat, Building2, TrendingUp, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

const kpis = [
  { value: 50, suffix: "+", label: "Cantieri Attivi", icon: HardHat },
  { value: 15, suffix: "", label: "Imprese Consorziate", icon: Building2 },
  { value: 500, suffix: "M+", prefix: "€", label: "Valore Commesse", icon: TrendingUp },
];

function useCountUp(target: number, duration = 2000) {
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
            const eased = 1 - Math.pow(1 - progress, 3);
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

const KpiCard = ({ kpi, index }: { kpi: (typeof kpis)[0]; index: number }) => {
  const { count, ref } = useCountUp(kpi.value);
  const Icon = kpi.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
      className="relative group"
    >
      <div className="border-l-2 border-accent pl-6 py-2">
        <div className="flex items-center gap-2 mb-1">
          <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
            {kpi.label}
          </span>
        </div>
        <span className="font-mono-kpi text-5xl md:text-6xl font-bold text-primary-foreground tracking-tighter">
          {kpi.prefix}
          {count}
          <span className="text-accent">{kpi.suffix}</span>
        </span>
      </div>
    </motion.div>
  );
};

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
    {/* BG */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Grande cantiere infrastrutturale" className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/95 via-navy/90 to-navy-light/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
    </div>

    {/* Decorative grid lines */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)',
      backgroundSize: '80px 80px'
    }} />

    <div className="relative container pb-20 pt-40 md:pb-28 md:pt-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-line" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
                Consorzio Stabile
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.95] mb-8">
              Costruiamo
              <br />
              la solidità
              <br />
              <span className="text-accent italic">del domani.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/60 max-w-lg leading-relaxed font-light">
              L'aggregazione strategica di imprese leader per la realizzazione di grandi opere
              pubbliche e private in totale sicurezza e affidabilità.
            </p>
          </motion.div>
        </div>

        {/* Right: KPIs */}
        <div className="flex flex-col gap-8">
          {kpis.map((kpi, i) => (
            <KpiCard key={kpi.label} kpi={kpi} index={i} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/30 font-semibold">Scopri</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="h-4 w-4 text-accent/60" />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

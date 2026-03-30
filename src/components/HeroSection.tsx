import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Building2, HardHat, TrendingUp } from "lucide-react";
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
            setCount(Math.floor(progress * target));
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

const KpiCard = ({ kpi }: { kpi: (typeof kpis)[0] }) => {
  const { count, ref } = useCountUp(kpi.value);
  const Icon = kpi.icon;

  return (
    <div
      ref={ref}
      className="bg-card border-2 border-foreground/10 p-6 shadow-hard flex flex-col items-start gap-2"
    >
      <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
      <span className="font-mono-kpi text-4xl md:text-5xl font-bold text-foreground tracking-tight">
        {kpi.prefix}
        {count}
        {kpi.suffix}
      </span>
      <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        {kpi.label}
      </span>
    </div>
  );
};

const HeroSection = () => (
  <section id="home" className="relative overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Grande cantiere di infrastrutture"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/85" />
    </div>

    <div className="relative container py-24 md:py-36 lg:py-44">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.05] mb-6">
          Costruiamo la solidità
          <br />
          del domani.
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-4 leading-relaxed">
          L'aggregazione strategica di imprese leader per la realizzazione di grandi opere
          pubbliche e private in totale sicurezza e affidabilità.
        </p>
      </motion.div>

      {/* KPI Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-3xl"
      >
        {kpis.map((kpi) => (
          <KpiCard key={kpi.label} kpi={kpi} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

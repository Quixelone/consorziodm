import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, HardHat, Users, Award } from "lucide-react";

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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

const NumbersSection = () => {
  const kpi1 = useCountUp(120);
  const kpi2 = useCountUp(40);
  const kpi3 = useCountUp(50);

  return (
    <section className="section-spacing bg-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="heading-section mb-4">I nostri numeri</p>
          <h2 className="heading-lg max-w-md mx-auto">
            Risultati che parlano.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {/* Card 1 - Large */}
          <motion.div
            ref={kpi1.ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-premium p-8 md:p-10 md:row-span-2 flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-mono-kpi text-5xl md:text-6xl font-bold text-foreground tracking-tight">
                €{kpi1.count}M+
              </p>
              <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                Importo complessivo dei lavori eseguiti su scala nazionale
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            ref={kpi2.ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-premium p-8 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-mono-kpi text-4xl font-bold text-foreground tracking-tight">
                {kpi2.count}
              </p>
              <p className="text-sm text-muted-foreground mt-2">Imprese Partner consorziate</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            ref={kpi3.ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-premium p-8 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
              <HardHat className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-mono-kpi text-4xl font-bold text-foreground tracking-tight">
                {kpi3.count}+
              </p>
              <p className="text-sm text-muted-foreground mt-2">Cantieri completati su scala nazionale</p>
            </div>
          </motion.div>

          {/* Card 4 - SOA Classification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="card-premium p-8 md:col-span-2 bg-primary text-primary-foreground hover:bg-primary"
            style={{ boxShadow: "0 4px 24px -4px hsl(217 55% 18% / 0.3)" }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-primary-foreground/60 mb-3">Classificazione SOA</p>
                <p className="font-mono-kpi text-5xl md:text-6xl font-bold tracking-tight mb-3">
                  Classifica VIII
                </p>
                <p className="text-base leading-relaxed max-w-md text-primary-foreground/80">
                  Qualificazione per importo illimitato — il massimo livello riconosciuto
                  per i lavori pubblici in Italia.
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0 ml-4">
                <Award className="h-5 w-5 text-primary-foreground/80" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;

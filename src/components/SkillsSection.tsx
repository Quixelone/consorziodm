import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { label: "Impianti Termoidraulici", value: 67 },
  { label: "Impianti Elettrici", value: 80 },
  { label: "Lavori Edili e Infrastrutturali", value: 100 },
];

function useAnimatedValue(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
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
            setValue(Math.floor(eased * target));
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

  return { value, ref };
}

const SkillBar = ({ label, target, delay }: { label: string; target: number; delay: number }) => {
  const { value, ref } = useAnimatedValue(target);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        <span className="text-sm font-mono text-primary font-bold">{value}%</span>
      </div>
      <div className="h-3 w-full rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-100 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => (
  <section className="section-spacing bg-surface">
    <div className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="heading-section mb-4">Expertise</p>
          <h2 className="heading-lg mb-6">
            Competenze certificate e misurabili.
          </h2>
          <p className="body-lg max-w-md">
            Le nostre categorie SOA e le qualificazioni dimostrano la capacità operativa
            del Consorzio in ogni ambito di intervento.
          </p>
        </motion.div>

        <div className="space-y-8">
          {skills.map((skill, i) => (
            <SkillBar key={skill.label} label={skill.label} target={skill.value} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;

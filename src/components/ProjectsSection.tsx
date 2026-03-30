import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import projectNapoli from "@/assets/project-napoli.jpg";
import projectImperia from "@/assets/project-imperia.jpg";
import projectBologna from "@/assets/project-bologna.jpg";

const projects = [
  {
    img: projectNapoli,
    city: "Napoli (NA)",
    title: "Palazzina Russo Ermolli",
    category: "Edilizia Pubblica",
  },
  {
    img: projectImperia,
    city: "Imperia (IM)",
    title: "Ex Caserma Crespi — Palazzina Comando",
    category: "Restauro Istituzionale",
  },
  {
    img: projectBologna,
    city: "Bologna (BO)",
    title: "Nuova Caserma Carabinieri — Pilastro",
    category: "Edilizia Istituzionale",
  },
];

const ProjectsSection = () => (
  <section id="lavori" className="section-spacing bg-surface">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
      >
        <div>
          <p className="heading-section mb-4">Portfolio</p>
          <h2 className="heading-lg">Alcuni dei nostri lavori.</h2>
        </div>
        <a href="#" className="btn-secondary inline-flex items-center gap-2 mt-6 md:mt-0 self-start">
          Tutti i progetti
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="rounded-2xl overflow-hidden mb-5 shadow-card-soft">
              <img
                src={project.img}
                alt={`Progetto ${project.title} — ${project.city}`}
                loading="lazy"
                width={1200}
                height={800}
                className="w-full aspect-[3/2] object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {project.category} — {project.city}
            </span>
            <h3 className="text-lg font-bold text-foreground mt-1.5 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

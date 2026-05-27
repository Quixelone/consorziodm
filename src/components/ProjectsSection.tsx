import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectsSection = () => (
  <section id="lavori" className="section-spacing">
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
        <Link to="/progetti" className="btn-secondary inline-flex items-center gap-2 mt-6 md:mt-0 self-start">
          Tutti i progetti
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group"
          >
            <Link to={`/progetti/${project.slug}`} className="block">
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
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3">
                Scopri di più <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

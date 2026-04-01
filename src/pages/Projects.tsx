import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["Tutti", ...Array.from(new Set(projects.map((p) => p.category)))];

const Projects = () => {
  const [active, setActive] = useState("Tutti");
  const filtered = active === "Tutti" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="heading-section mb-4">Portfolio</p>
            <h1 className="heading-xl mb-6">I nostri progetti.</h1>
            <p className="body-lg max-w-xl">
              Una selezione di opere pubbliche e private realizzate dal Consorzio su tutto il territorio nazionale.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link to={`/progetti/${project.slug}`} className="group block">
                  <div className="rounded-2xl overflow-hidden mb-5 shadow-card-soft">
                    <img
                      src={project.img}
                      alt={`${project.title} — ${project.city}`}
                      loading="lazy"
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
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;

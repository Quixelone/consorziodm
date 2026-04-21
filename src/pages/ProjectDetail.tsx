import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Euro, Award, Building2 } from "lucide-react";
import { projects } from "@/data/projects";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProjectGallery from "@/components/ProjectGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="section-container text-center">
            <h1 className="heading-lg mb-4">Progetto non trovato</h1>
            <Link to="/" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Torna alla Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-0">
          <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
              <div className="section-container">
                <Link
                  to="/#lavori"
                  className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors mb-4"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Tutti i progetti
                </Link>
                <span className="block text-xs font-semibold text-background/60 uppercase tracking-wider mb-2">
                  {project.category} — {project.city}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-background tracking-tight">
                  {project.title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Info cards */}
        <section className="section-container -mt-8 relative z-10 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Building2, label: "Committente", value: project.committente },
              { icon: Euro, label: "Importo", value: project.importo },
              { icon: Calendar, label: "Durata", value: project.durata },
              { icon: Award, label: "Categoria SOA", value: project.soaCategory },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="card-premium p-5"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center mb-3">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm font-bold text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Content */}
        <section className="section-container pb-24">
          <div className="max-w-3xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg mb-6">Descrizione del progetto</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
              {project.documentUrl && (
                <div className="mt-6">
                  <a
                    href={project.documentUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    {project.documentLabel ?? "Apri documento (PDF)"}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-premium p-8 bg-destructive/5 border-destructive/20"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">🔴 La sfida</h3>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-premium p-8 bg-primary/5 border-primary/20"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">✅ La nostra soluzione</h3>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </motion.div>

            {/* Before & After */}
            {project.beforeAfter.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="heading-lg mb-3">Prima & Dopo</h2>
                <p className="text-muted-foreground mb-8">Trascina lo slider per confrontare lo stato dell'opera.</p>
                <div className="space-y-8">
                  {project.beforeAfter.map((ba, i) => (
                    <div key={i}>
                      <BeforeAfterSlider
                        beforeImg={ba.before}
                        afterImg={ba.after}
                      />
                      <p className="text-sm text-muted-foreground mt-3 text-center">{ba.caption}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Gallery — full width for maximum visual impact */}
          {project.gallery.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-20 max-w-5xl mx-auto"
            >
              <ProjectGallery
                images={project.gallery}
                projectTitle={project.title}
              />
            </motion.div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;

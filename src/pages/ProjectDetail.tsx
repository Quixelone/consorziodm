import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
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

        {/* Content */}
        <section className="section-container pb-24">
          <div className="max-w-3xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="pt-10"
            >
              <span className="heading-section block mb-4">Il progetto</span>
              <p className="body-lg">{project.description}</p>
            </motion.div>

            {/* Before & After */}
            {project.beforeAfter.filter(ba => ba.before !== ba.after).length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="heading-lg mb-3">Prima & Dopo</h2>
                <p className="text-muted-foreground mb-8">Trascina lo slider per confrontare lo stato dell'opera.</p>
                <div className="space-y-8">
                  {project.beforeAfter.filter(ba => ba.before !== ba.after).map((ba, i) => (
                    <div key={i}>
                      <BeforeAfterSlider
                        beforeImg={ba.before}
                        afterImg={ba.after}
                      />
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

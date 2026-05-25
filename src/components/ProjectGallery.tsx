import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid3X3 } from "lucide-react";

interface GalleryImage {
  src: string;
  caption?: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
  projectTitle: string;
}

const ProjectGallery = ({ images, projectTitle }: ProjectGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setIsZoomed(false);
    document.body.style.overflow = "";
  };

  const goNext = useCallback(() => {
    setIsZoomed(false);
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setIsZoomed(false);
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, goNext, goPrev]);

  if (images.length === 0) return null;

  // Masonry layout pattern — assigns span classes for visual variety
  const getGridClass = (index: number, total: number) => {
    if (total <= 2) return "col-span-1";
    // First image: large hero
    if (index === 0) return "md:col-span-2 md:row-span-2";
    // Every 5th image after the first: wide
    if (index % 5 === 3) return "md:col-span-2";
    return "col-span-1";
  };

  return (
    <>
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
          <Grid3X3 className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Galleria lavori</h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            {images.length} foto del cantiere e dell'opera completata
          </p>
        </div>
      </div>

      {/* Masonry grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
        {images.map((image, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`relative group cursor-pointer overflow-hidden rounded-2xl ${getGridClass(i, images.length)}`}
            onClick={() => openLightbox(i)}
          >
            <img
              src={image.src}
              alt={`${projectTitle} — foto ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Zoom icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <ZoomIn className="h-5 w-5 text-white" />
              </div>
            </div>
            {/* Image counter badge (first image only) */}
            {i === 0 && images.length > 1 && (
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-semibold border border-white/10">
                1 / {images.length}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex flex-col"
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />

            {/* Top bar */}
            <div className="relative z-10 flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="text-white/50 text-sm font-medium">
                  {projectTitle}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-white font-semibold text-sm">
                  {activeIndex + 1} / {images.length}
                </span>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Chiudi galleria"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Main image area */}
            <div
              className="relative z-10 flex-1 flex items-center justify-center px-4 md:px-20 min-h-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev button */}
              {images.length > 1 && (
                <button
                  onClick={goPrev}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 z-20 backdrop-blur-sm border border-white/10"
                  aria-label="Foto precedente"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
              )}

              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={images[activeIndex].src}
                    alt={`${projectTitle} — foto ${activeIndex + 1}`}
                    className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-300 ${
                      isZoomed ? "cursor-zoom-out scale-150" : "cursor-zoom-in"
                    }`}
                    onClick={() => setIsZoomed(!isZoomed)}
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Next button */}
              {images.length > 1 && (
                <button
                  onClick={goNext}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 z-20 backdrop-blur-sm border border-white/10"
                  aria-label="Foto successiva"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              )}
            </div>

            {/* Thumbnail strip */}
            {images.length > 1 && (
              <div className="relative z-10 px-6 pb-6 pt-2">
                <div className="flex gap-2 justify-center overflow-x-auto py-2 scrollbar-hide">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIndex(i);
                        setIsZoomed(false);
                      }}
                      className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                        i === activeIndex
                          ? "ring-2 ring-white ring-offset-2 ring-offset-black/90 opacity-100 scale-105"
                          : "opacity-40 hover:opacity-70"
                      }`}
                      aria-label={`Vai alla foto ${i + 1}`}
                    >
                      <img
                        src={img.src}
                        alt=""
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectGallery;

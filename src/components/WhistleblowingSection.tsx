import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Send, AlertTriangle, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Riservatezza",
    description: "L'identità del segnalante è protetta con il massimo livello di riservatezza, ai sensi del D.Lgs. 24/2023.",
  },
  {
    icon: Shield,
    title: "Tutela",
    description: "Il segnalante è tutelato da qualsiasi forma di ritorsione, diretta o indiretta, nel contesto lavorativo.",
  },
  {
    icon: Eye,
    title: "Tracciabilità",
    description: "Ogni segnalazione viene gestita attraverso un canale dedicato con tracciamento controllato.",
  },
];

const WhistleblowingSection = () => {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    name: "",
    email: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="whistleblowing" className="section-spacing bg-surface">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center card-premium p-12 md:p-16"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="heading-lg mb-4">Segnalazione inviata</h3>
            <p className="body-lg max-w-md mx-auto">
              La tua segnalazione è stata ricevuta e sarà gestita con la massima riservatezza
              dal Responsabile Whistleblowing del Consorzio.
            </p>
            <p className="text-sm text-muted-foreground mt-6">
              Riferimento: WB-{Date.now().toString(36).toUpperCase()}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="whistleblowing" className="section-spacing bg-surface">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="heading-section mb-4">Canale di segnalazione</p>
          <h2 className="heading-lg max-w-xl mx-auto">
            Whistleblowing.
          </h2>
          <p className="body-lg max-w-2xl mx-auto mt-6">
            Il Consorzio Stabile del Mediterraneo mette a disposizione un canale riservato
            per segnalare condotte illecite o violazioni del Modello 231, garantendo la massima
            tutela del segnalante.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-premium p-8 md:p-10">
            {/* Anonymous toggle */}
            <div className="flex items-center justify-between mb-8 p-4 rounded-xl bg-secondary/50 border border-border/50">
              <div className="flex items-center gap-3">
                {isAnonymous ? (
                  <Shield className="h-5 w-5 text-primary" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                )}
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {isAnonymous ? "Segnalazione anonima" : "Segnalazione identificata"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {isAnonymous
                      ? "La tua identità non sarà registrata"
                      : "I tuoi dati saranno trattati con riservatezza"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsAnonymous(!isAnonymous)}
                className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                  isAnonymous ? "bg-primary" : "bg-border"
                }`}
                aria-label="Toggle anonymous mode"
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
                    isAnonymous ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                  Categoria della segnalazione *
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="flex h-11 w-full rounded-xl border border-border/80 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <option value="">Seleziona categoria...</option>
                  <option value="corruzione">Corruzione o concussione</option>
                  <option value="frode">Frode o appropriazione indebita</option>
                  <option value="sicurezza">Violazioni sicurezza sul lavoro</option>
                  <option value="ambiente">Violazioni ambientali</option>
                  <option value="discriminazione">Discriminazione o molestie</option>
                  <option value="modello231">Violazioni Modello 231</option>
                  <option value="altro">Altro</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                  Descrizione della segnalazione *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Descrivere i fatti oggetto della segnalazione con il maggior dettaglio possibile..."
                  className="flex w-full rounded-xl border border-border/80 bg-background px-3 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 resize-none"
                />
              </div>

              {!isAnonymous && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                        Nome e Cognome
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="flex h-11 w-full rounded-xl border border-border/80 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="flex h-11 w-full rounded-xl border border-border/80 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                {isAnonymous ? "Invia segnalazione anonima" : "Invia segnalazione"}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Le segnalazioni sono gestite dal Responsabile Whistleblowing ai sensi del D.Lgs. 24/2023.
                I dati saranno trattati nel rispetto della normativa sulla privacy.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhistleblowingSection;

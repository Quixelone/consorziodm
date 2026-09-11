import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Send, AlertTriangle, CheckCircle2, Loader2, Copy, Check } from "lucide-react";
import { WHISTLEBLOWING_API_URL } from "@/lib/api";

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

const WhistleblowingSection = ({ show }: { show: boolean }) => {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [ticket, setTicket] = useState("");
  const [copied, setCopied] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    name: "",
    email: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSubmitError(null);

    try {
      const res = await fetch(WHISTLEBLOWING_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "whistleblowing",
          isAnonymous,
          category: formData.category,
          description: formData.description,
          name: isAnonymous ? "" : formData.name,
          email: isAnonymous ? "" : formData.email,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setTicket(data.ticket ?? "");
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitError(data.error || "Invio non riuscito. Riprova.");
      }
    } catch (error) {
      console.error("Whistleblowing send error:", error);
      setSubmitError("Impossibile contattare il server. Verifica la connessione e riprova.");
    } finally {
      setSending(false);
    }
  };

  const copyTicket = async () => {
    try {
      await navigator.clipboard.writeText(ticket);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard non disponibile */
    }
  };

  if (!show) return null;

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

            {ticket && (
              <div className="mt-8 p-6 rounded-2xl border border-primary/20 bg-primary/5 text-left max-w-md mx-auto">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Codice di tracciabilità
                </p>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-2xl font-mono font-bold tracking-widest text-foreground">
                    {ticket}
                  </span>
                  <button
                    type="button"
                    onClick={copyTicket}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors shrink-0"
                    aria-label="Copia codice"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copiato" : "Copia"}
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  {isAnonymous
                    ? "Conserva questo codice: è l'unico modo per verificare lo stato della segnalazione e non potrà essere recuperato in nessun modo."
                    : "Hai ricevuto anche una email di conferma con il link riservato per il monitoraggio."}
                </p>
                <Link
                  to={`/verifica-segnalazione?ticket=${ticket}`}
                  className="btn-primary mt-5 w-full flex items-center justify-center gap-2 !h-11 text-sm"
                >
                  <Eye className="h-4 w-4" />
                  Verifica lo stato della segnalazione
                </Link>
              </div>
            )}
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
                        required={!isAnonymous}
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
                        required={!isAnonymous}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="flex h-11 w-full rounded-xl border border-border/80 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {submitError && (
                <div className="flex items-start gap-3 rounded-xl border border-red-300/60 bg-red-50 p-4">
                  <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">
                    {submitError}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {sending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Invio in corso...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {isAnonymous ? "Invia segnalazione anonima" : "Invia segnalazione"}
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Le segnalazioni sono gestite dal Responsabile Whistleblowing ai sensi del D.Lgs. 24/2023.
                I dati saranno trattati nel rispetto della normativa sulla privacy.
              </p>
            </form>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Hai già un codice di tracciabilità?{" "}
            <Link to="/verifica-segnalazione" className="font-semibold text-primary hover:underline">
              Verifica lo stato della tua segnalazione
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhistleblowingSection;

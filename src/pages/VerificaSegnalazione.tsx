import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ShieldCheck, AlertTriangle, Loader2, CheckCircle2, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  WB_STATUSES,
  WB_STATUS_ORDER,
  fetchWbStatus,
  formatWbDate,
  isValidTicket,
  normalizeTicket,
  type WbStatusResult,
} from "@/lib/whistleblowing";

const VerificaSegnalazione = () => {
  const [searchParams] = useSearchParams();
  const [ticket, setTicket] = useState("");
  const [result, setResult] = useState<WbStatusResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const autoChecked = useRef(false);

  const check = useCallback(async (code: string) => {
    if (!isValidTicket(code)) {
      setError("Il codice non ha un formato valido (es. WB-A1B2C3D4).");
      setResult(null);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWbStatus(code);
      if (!data) {
        setError("Nessuna segnalazione trovata per questo codice. Verifica di aver inserito il codice corretto.");
        setResult(null);
      } else {
        setResult(data);
      }
    } catch {
      setError("Impossibile contattare il server. Riprova tra qualche istante.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (autoChecked.current) return;
    const fromLink = normalizeTicket(searchParams.get("ticket") ?? "");
    if (fromLink) {
      autoChecked.current = true;
      setTicket(fromLink);
      check(fromLink);
    }
  }, [searchParams, check]);

  const currentStep = result ? WB_STATUS_ORDER.indexOf(result.status) : -1;
  const isClosed = result?.status === "archiviata";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-28 pb-24">
        <div className="section-container max-w-3xl">
          <div className="mb-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              Torna alla Home
            </Link>

            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Canale di segnalazione
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Verifica una segnalazione
            </h1>
            <p className="text-muted-foreground">
              Inserisci il codice di tracciabilità ricevuto al momento dell'invio
              (formato <span className="font-semibold text-foreground">WB-XXXXXXXX</span>) per
              consultare lo stato di lavorazione della tua segnalazione.
            </p>
          </div>

          {/* Lookup box */}
          <div className="card-premium p-6 md:p-8 mb-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const code = normalizeTicket(ticket);
                setTicket(code);
                check(code);
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  value={ticket}
                  onChange={(e) => setTicket(e.target.value.toUpperCase())}
                  placeholder="WB-XXXXXXXX"
                  autoComplete="off"
                  spellCheck={false}
                  maxLength={12}
                  className="flex h-12 w-full rounded-xl border border-border/80 bg-background pl-12 pr-3 py-2 text-sm font-mono uppercase tracking-widest ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                />
              </div>
              <button
                type="submit"
                disabled={loading || !ticket.trim()}
                className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60 sm:w-auto w-full h-12 px-6"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Verifica...
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4" />
                    Verifica stato
                  </>
                )}
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              Il codice è riservato: conserva chi lo utilizza può solo vedere lo stato di
              avanzamento, mai il contenuto della segnalazione né l'identità del segnalante.
            </p>
          </div>

          {error && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-3 rounded-xl border border-amber-300/60 bg-amber-50 p-4 mb-8"
            >
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">{error}</p>
            </motion.div>
          )}

          {result && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Current status */}
              <div className="card-premium p-6 md:p-8">
                {(() => {
                  const info = WB_STATUSES[result.status];
                  const Icon = info.icon;
                  return (
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${info.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                          Stato attuale · {ticket}
                        </p>
                        <h2 className="text-xl font-bold text-foreground mb-1">{info.label}</h2>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            Inviata il {formatWbDate(result.createdAt)}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Ultimo aggiornamento {formatWbDate(result.updatedAt)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Stepper */}
                <ol className="mt-8 flex flex-col gap-0">
                  {WB_STATUS_ORDER.map((key, i) => {
                    const step = WB_STATUSES[key];
                    const StepIcon = step.icon;
                    const done = i < currentStep;
                    const active = i === currentStep;
                    const isLast = i === WB_STATUS_ORDER.length - 1;
                    return (
                      <li key={key} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-colors ${
                              active
                                ? "border-primary bg-primary text-white"
                                : done
                                  ? "border-primary/40 bg-primary/10 text-primary"
                                  : "border-border bg-background text-muted-foreground/50"
                            }`}
                          >
                            {done ? <CheckCircle2 className="h-4 w-4" /> : <StepIcon className="h-4 w-4" />}
                          </div>
                          {!isLast && (
                            <div className={`w-0.5 flex-1 min-h-6 ${done || active ? "bg-primary/30" : "bg-border"}`} />
                          )}
                        </div>
                        <div className={`pb-6 ${isLast ? "pb-0" : ""}`}>
                          <p
                            className={`text-sm font-semibold ${
                              active ? "text-primary" : done ? "text-foreground" : "text-muted-foreground/60"
                            }`}
                          >
                            {step.label}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">{step.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>

              {/* Updates timeline */}
              {result.updates.length > 0 && (
                <div className="card-premium p-6 md:p-8">
                  <h3 className="text-lg font-bold text-foreground mb-6">Aggiornamenti</h3>
                  <ol className="flex flex-col gap-6">
                    {[...result.updates].reverse().map((u, idx) => {
                      const info = WB_STATUSES[u.status];
                      return (
                        <li key={idx} className="flex gap-4">
                          <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${info.dot}`} />
                          <div>
                            <p className="text-sm font-semibold text-foreground">{u.message}</p>
                            <p className="text-xs text-muted-foreground mt-1">{formatWbDate(u.created_at)}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              )}

              {isClosed && (
                <p className="text-xs text-muted-foreground text-center">
                  La procedura può essere riaperta dal Responsabile Whistleblowing in caso di
                  nuove informazioni: questo codice resta valido per sempre.
                </p>
              )}
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VerificaSegnalazione;

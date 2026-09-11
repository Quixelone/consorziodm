import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Lock,
  LogOut,
  Loader2,
  AlertTriangle,
  ArrowLeft,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { WHISTLEBLOWING_API_URL } from "@/lib/api";
import {
  WB_STATUSES,
  WB_STATUS_ORDER,
  formatWbDate,
  type WbStatus,
} from "@/lib/whistleblowing";

const TOKEN_KEY = "odv_token";
const TOKEN_EXP_KEY = "odv_token_exp";

interface ReportRow {
  ticket_code: string;
  status: WbStatus;
  category: string;
  is_anonymous: boolean;
  reporter_name: string | null;
  created_at: string;
  updated_at: string;
}

interface ReportDetail extends ReportRow {
  description: string;
  reporter_email: string | null;
}

interface UpdateRow {
  status: WbStatus;
  message: string;
  created_at: string;
}

const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const exp = Number(localStorage.getItem(TOKEN_EXP_KEY) ?? 0);
  if (!token || exp * 1000 < Date.now()) {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_EXP_KEY);
    return null;
  }
  return token;
};

const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXP_KEY);
};

const CATEGORY_LABELS: Record<string, string> = {
  corruzione: "Corruzione o concussione",
  frode: "Frode o appropriazione indebita",
  sicurezza: "Violazioni sicurezza sul lavoro",
  ambiente: "Violazioni ambientali",
  discriminazione: "Discriminazione o molestie",
  modello231: "Violazioni Modello 231",
  altro: "Altro",
};

const StatusBadge = ({ status }: { status: WbStatus }) => {
  const info = WB_STATUSES[status];
  const Icon = info.icon;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${info.color}`}>
      <Icon className="h-3.5 w-3.5" />
      {info.label}
    </span>
  );
};

const Riservata = () => {
  const [token, setToken] = useState<string | null>(getToken());
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loggingIn, setLoggingIn] = useState(false);

  const [reports, setReports] = useState<ReportRow[]>([]);
  const [listLoading, setListLoading] = useState(false);
  const [listError, setListError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<"tutte" | WbStatus>("tutte");

  const [detail, setDetail] = useState<{ report: ReportDetail; updates: UpdateRow[] } | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  const [newStatus, setNewStatus] = useState<WbStatus>("ricevuta");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveResult, setSaveResult] = useState<string | null>(null);

  const api = useCallback(
    async (path: string, init?: RequestInit) => {
      const res = await fetch(`${WHISTLEBLOWING_API_URL}/${path}`, {
        ...init,
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          ...(init?.headers ?? {}),
        },
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 401 && path !== "odv-login") {
        clearToken();
        setToken(null);
      }
      return { res, data };
    },
    [token],
  );

  const loadReports = useCallback(async () => {
    if (!token) return;
    setListLoading(true);
    setListError(null);
    const { res, data } = await api("odv-reports");
    if (res.ok) setReports(data.reports ?? []);
    else setListError(data.error ?? "Errore di caricamento");
    setListLoading(false);
  }, [token, api]);

  useEffect(() => {
    if (token) loadReports();
  }, [token, loadReports]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError(null);
    try {
      const res = await fetch(`${WHISTLEBLOWING_API_URL}/odv-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.token) {
        localStorage.setItem(TOKEN_KEY, data.token);
        localStorage.setItem(TOKEN_EXP_KEY, String(Math.floor(Date.now() / 1000) + (data.expiresIn ?? 28800)));
        setToken(data.token);
        setPassword("");
      } else {
        setLoginError(data.error ?? "Accesso non riuscito");
      }
    } catch {
      setLoginError("Impossibile contattare il server");
    } finally {
      setLoggingIn(false);
    }
  };

  const openDetail = async (ticket: string, keepResult = false) => {
    setDetailLoading(true);
    if (!keepResult) setSaveResult(null);
    const { res, data } = await api(`odv-report?ticket=${encodeURIComponent(ticket)}`);
    if (res.ok) {
      setDetail({ report: data.report, updates: data.updates ?? [] });
      setNewStatus(data.report.status);
      setMessage("");
    } else {
      setListError(data.error ?? "Errore di caricamento");
    }
    setDetailLoading(false);
  };

  const saveUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!detail) return;
    setSaving(true);
    setSaveResult(null);
    const { res, data } = await api("odv-update", {
      method: "POST",
      body: JSON.stringify({
        ticket: detail.report.ticket_code,
        status: newStatus,
        message,
      }),
    });
    if (res.ok) {
      setSaveResult("Aggiornamento registrato: visibile al segnalante.");
      await openDetail(detail.report.ticket_code, true);
      loadReports();
    } else {
      setSaveResult(data.error ?? "Errore di salvataggio");
    }
    setSaving(false);
  };

  const logout = () => {
    clearToken();
    setToken(null);
    setDetail(null);
    setReports([]);
  };

  const filtered = statusFilter === "tutte" ? reports : reports.filter((r) => r.status === statusFilter);

  // ---- Login screen ----
  if (!token) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <main className="flex-1 flex items-center justify-center px-4 pt-28 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md"
          >
            <div className="card-premium p-8 md:p-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-foreground text-center mb-2">Area riservata ODV</h1>
              <p className="text-sm text-muted-foreground text-center mb-8">
                Accesso riservato al Responsabile Whistleblowing ai sensi del D.Lgs. 24/2023.
              </p>
              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  autoComplete="current-password"
                  className="flex h-12 w-full rounded-xl border border-border/80 bg-background px-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                />
                {loginError && (
                  <p className="text-sm text-red-600 text-center">{loginError}</p>
                )}
                <button
                  type="submit"
                  disabled={loggingIn || !password}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loggingIn ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Accesso...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="h-4 w-4" />
                      Accedi
                    </>
                  )}
                </button>
              </form>
            </div>
            <p className="text-center mt-6">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Torna al sito
              </Link>
            </p>
          </motion.div>
        </main>
      </div>
    );
  }

  // ---- Detail screen ----
  if (detail) {
    const r = detail.report;
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <main className="flex-1 pt-28 pb-24">
          <div className="section-container max-w-4xl">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setDetail(null)}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Elenco segnalazioni
              </button>
              <button
                onClick={logout}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Esci
              </button>
            </div>

            <div className="card-premium p-6 md:p-8 mb-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Codice di tracciabilità
                  </p>
                  <p className="text-2xl font-mono font-bold text-foreground tracking-widest">
                    {r.ticket_code}
                  </p>
                </div>
                <StatusBadge status={r.status} />
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm mb-6">
                <div>
                  <dt className="text-muted-foreground">Inviata il</dt>
                  <dd className="font-semibold text-foreground">{formatWbDate(r.created_at)}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Ultimo aggiornamento</dt>
                  <dd className="font-semibold text-foreground">{formatWbDate(r.updated_at)}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Categoria</dt>
                  <dd className="font-semibold text-foreground">{CATEGORY_LABELS[r.category] ?? r.category}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Segnalante</dt>
                  <dd className="font-semibold text-foreground">
                    {r.is_anonymous ? "Anonimo" : `${r.reporter_name ?? "-"} · ${r.reporter_email ?? "-"}`}
                  </dd>
                </div>
              </dl>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Descrizione della segnalazione
                </p>
                <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap p-4 rounded-xl bg-secondary/40 border border-border/50">
                  {r.description}
                </p>
              </div>
            </div>

            {/* Update status form */}
            <div className="card-premium p-6 md:p-8 mb-8">
              <h2 className="text-lg font-bold text-foreground mb-6">Aggiorna stato</h2>
              <form onSubmit={saveUpdate} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                      Nuovo stato
                    </label>
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value as WbStatus)}
                      className="flex h-11 w-full rounded-xl border border-border/80 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      {WB_STATUS_ORDER.map((s) => (
                        <option key={s} value={s}>{WB_STATUSES[s].label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                      Messaggio per il segnalante *
                    </label>
                    <input
                      type="text"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Es. Segnalazione presa in carico dal Responsabile"
                      className="flex h-11 w-full rounded-xl border border-border/80 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Il messaggio comparirà nella timeline visibile al segnalante inserendo il codice {r.ticket_code}.
                </p>
                {saveResult && (
                  <p className={`text-sm font-semibold ${saveResult.startsWith("Aggiornamento") ? "text-green-700" : "text-red-600"}`}>
                    {saveResult}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={saving}
                  className="btn-primary flex items-center gap-2 disabled:opacity-60"
                >
                  {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShieldCheck className="h-4 w-4" />}
                  Registra aggiornamento
                </button>
              </form>
            </div>

            {/* Timeline */}
            <div className="card-premium p-6 md:p-8">
              <h2 className="text-lg font-bold text-foreground mb-6">Storico aggiornamenti</h2>
              <ol className="flex flex-col gap-5">
                {detail.updates.map((u, i) => (
                  <li key={i} className="flex gap-4">
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${WB_STATUSES[u.status].dot}`} />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{u.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {WB_STATUSES[u.status].label} · {formatWbDate(u.created_at)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ---- List screen ----
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 pt-28 pb-24">
        <div className="section-container max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Area riservata ODV
              </p>
              <h1 className="text-3xl font-bold text-foreground tracking-tight">
                Segnalazioni whistleblower
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={loadReports}
                disabled={listLoading}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-60"
              >
                <RefreshCw className={`h-4 w-4 ${listLoading ? "animate-spin" : ""}`} />
                Aggiorna
              </button>
              <button
                onClick={logout}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Esci
              </button>
            </div>
          </div>

          {listError && (
            <div className="flex items-start gap-3 rounded-xl border border-amber-300/60 bg-amber-50 p-4 mb-6">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">{listError}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setStatusFilter("tutte")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                statusFilter === "tutte" ? "bg-primary text-white" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              Tutte ({reports.length})
            </button>
            {WB_STATUS_ORDER.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  statusFilter === s ? "bg-primary text-white" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {WB_STATUSES[s].label} ({reports.filter((r) => r.status === s).length})
              </button>
            ))}
          </div>

          <div className="card-premium overflow-hidden">
            {reports.length === 0 && !listLoading ? (
              <p className="p-10 text-center text-sm text-muted-foreground">
                Nessuna segnalazione registrata.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border/60">
                      <th className="px-5 py-4">Ticket</th>
                      <th className="px-5 py-4">Data</th>
                      <th className="px-5 py-4">Categoria</th>
                      <th className="px-5 py-4">Segnalante</th>
                      <th className="px-5 py-4">Stato</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((r) => (
                      <tr
                        key={r.ticket_code}
                        onClick={() => openDetail(r.ticket_code)}
                        className="border-b border-border/40 last:border-0 hover:bg-primary/5 cursor-pointer transition-colors"
                      >
                        <td className="px-5 py-4 font-mono font-semibold text-foreground">{r.ticket_code}</td>
                        <td className="px-5 py-4 text-muted-foreground whitespace-nowrap">
                          {new Date(r.created_at).toLocaleDateString("it-IT")}
                        </td>
                        <td className="px-5 py-4 text-muted-foreground">{CATEGORY_LABELS[r.category] ?? r.category}</td>
                        <td className="px-5 py-4 text-muted-foreground">
                          {r.is_anonymous ? "Anonimo" : r.reporter_name ?? "-"}
                        </td>
                        <td className="px-5 py-4"><StatusBadge status={r.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Riservata;

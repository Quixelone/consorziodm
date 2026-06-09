import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Cosa sono i Cookie",
    content: `I cookie sono piccoli file di testo che i siti web visitati dall'utente memorizzano sul dispositivo (computer, smartphone, tablet) per raccogliere informazioni relative alla navigazione. I cookie possono essere inviati dal sito stesso (cookie di prima parte) o da siti diversi (cookie di terze parti).`,
  },
  {
    title: "2. Tipologie di Cookie Utilizzati",
    content: `Il presente sito utilizza esclusivamente le seguenti categorie di cookie:

a) Cookie Tecnici (Necessari)
Questi cookie sono strettamente necessari al funzionamento del sito e alla navigazione da parte dell'utente. Senza questi cookie, alcune o tutte le funzionalità del sito potrebbero non essere disponibili. Non richiedono il consenso dell'utente ai sensi dell'art. 122, comma 1, del D.Lgs. 196/2003 e delle Linee Guida del Garante per la protezione dei dati personali.

I cookie tecnici utilizzati includono:
• Cookie di sessione: necessari per la corretta visualizzazione delle pagine e per consentire la navigazione all'interno del sito. Vengono eliminati automaticamente alla chiusura del browser.
• Cookie di preferenze: memorizzano le impostazioni di navigazione dell'utente (es. lingua, risoluzione dello schermo) per migliorare l'esperienza di utilizzo nelle visite successive.
• Cookie di sicurezza: utilizzati per identificare e prevenire attività fraudolente o accessi non autorizzati.

b) Cookie Analitici (di Prima Parte)
Il sito può utilizzare cookie analitici di prima parte per raccogliere informazioni in forma aggregata sul numero degli utenti e su come questi visitano il sito. Tali dati sono utilizzati esclusivamente per finalità statistiche e non permettono l'identificazione diretta dell'interessato.`,
  },
  {
    title: "3. Cookie di Terze Parti",
    content: `Il sito potrebbe incorporare contenuti o servizi forniti da terze parti (es. video, mappe interattive, pulsanti di condivisione social). Questi servizi possono installare cookie propri, sul cui utilizzo il Titolare non ha alcun controllo.

Al momento, il sito non utilizza cookie di profilazione di terze parti. Qualora in futuro vengano integrati servizi di terze parti che utilizzano cookie di profilazione, il Titolare provvederà a richiedere il consenso esplicito dell'utente prima dell'attivazione.

Per informazioni sui cookie di terze parti, si rimanda alle relative informative privacy disponibili sui siti dei rispettivi fornitori.`,
  },
  {
    title: "4. Durata dei Cookie",
    content: `I cookie utilizzati dal sito possono essere classificati in base alla loro durata:

• Cookie di sessione: vengono memorizzati temporaneamente nella memoria del dispositivo durante la navigazione e vengono eliminati automaticamente alla chiusura del browser.
• Cookie persistenti: rimangono memorizzati nel dispositivo fino alla loro scadenza o fino alla loro cancellazione manuale da parte dell'utente. La durata massima dei cookie persistenti utilizzati dal sito è di 12 mesi.`,
  },
  {
    title: "5. Come Gestire i Cookie",
    content: `L'utente può gestire le proprie preferenze relative ai cookie in diversi modi:

a) Tramite le impostazioni del browser:
La maggior parte dei browser consente di visualizzare, gestire e/o eliminare i cookie. Di seguito i link alle guide per i browser più diffusi:
• Google Chrome: https://support.google.com/chrome/answer/95647
• Mozilla Firefox: https://support.mozilla.org/it/kb/gestione-cookie-sito-web-firefox
• Apple Safari: https://support.apple.com/it-it/guide/safari/sfri11471/mac
• Microsoft Edge: https://support.microsoft.com/it-it/microsoft-edge

b) Tramite il banner informativo:
Alla prima visita del sito, l'utente viene informato sull'utilizzo dei cookie tramite un banner. La prosecuzione della navigazione o il clic su un elemento della pagina costituisce accettazione dell'utilizzo dei cookie tecnici.

Si precisa che la disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito e alcune funzionalità potrebbero non essere disponibili.`,
  },
  {
    title: "6. Base Giuridica del Trattamento",
    content: `Il trattamento dei dati personali effettuato tramite cookie tecnici trova la sua base giuridica nell'art. 6, par. 1, lett. f) del Regolamento (UE) 2016/679 (GDPR), ossia nel legittimo interesse del Titolare a garantire il corretto funzionamento del sito e un'esperienza di navigazione ottimale.

Per i cookie analitici, il trattamento è basato sul legittimo interesse del Titolare, in quanto i dati sono raccolti in forma aggregata e non permettono l'identificazione dell'interessato.

Per i cookie di profilazione (qualora introdotti in futuro), il trattamento sarà basato sul consenso espresso dell'utente ai sensi dell'art. 6, par. 1, lett. a) del GDPR.`,
  },
  {
    title: "7. Diritti dell'Interessato",
    content: `L'interessato ha il diritto di esercitare i propri diritti ai sensi degli artt. 15-22 del Regolamento (UE) 2016/679, tra cui il diritto di accesso, rettifica, cancellazione, limitazione del trattamento e portabilità dei dati.

Per esercitare i propri diritti, l'interessato può contattare il Titolare all'indirizzo e-mail: info@consorziodelmediterraneo.it

L'interessato ha altresì il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).`,
  },
  {
    title: "8. Titolare del Trattamento",
    content: `Il Titolare del trattamento dei dati personali mediante cookie è:

Consorzio Stabile del Mediterraneo S.c.a r.l.
P.IVA 07445901213 | REA NA-884629
Via Dei Mille, 40 — 80121 Napoli (NA)
E-mail: info@consorziodelmediterraneo.it`,
  },
  {
    title: "9. Modifiche alla Presente Policy",
    content: `Il Titolare si riserva il diritto di modificare la presente Cookie Policy in qualsiasi momento, dandone adeguata pubblicità sul sito. Si invita pertanto l'utente a consultare periodicamente questa pagina.

La presente Cookie Policy è aggiornata al 9 aprile 2026.`,
  },
];

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-28 pb-24">
        <div className="section-container max-w-3xl">
          {/* Header */}
          <div className="mb-12">
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
              Documento legale
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground text-sm">
              Informativa sull'utilizzo dei cookie e delle tecnologie di tracciamento ai sensi del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003.
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-lg font-semibold text-foreground mb-3">{s.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {s.content}
                </p>
              </section>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border mt-14 pt-8">
            <p className="text-xs text-muted-foreground">
              Consorzio Stabile del Mediterraneo S.c.a r.l. — P.IVA 07445901213 | REA NA-884629
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;

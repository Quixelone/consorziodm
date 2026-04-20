import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Titolare del Trattamento",
    content: `Il Titolare del trattamento dei dati personali è:

Consorzio Stabile del Mediterraneo S.c.a r.l.
P.IVA 07445901213 | REA NA-884629

Per esercitare i propri diritti o per qualsiasi informazione relativa al trattamento dei dati personali, è possibile contattare il Titolare all'indirizzo e-mail: info@consorziodm.it`,
  },
  {
    title: "2. Tipologie di Dati Raccolti",
    content: `Il Titolare raccoglie le seguenti categorie di dati personali:

• Dati di navigazione: indirizzo IP, tipo di browser, sistema operativo, pagine visitate, durata della visita. Questi dati sono raccolti automaticamente dai sistemi informatici del sito.

• Dati forniti volontariamente dall'utente: nome, cognome, indirizzo e-mail, numero di telefono e qualsiasi altro dato comunicato compilando il modulo di contatto o inviando comunicazioni al Titolare.

Il conferimento dei dati è facoltativo, tuttavia il mancato conferimento potrebbe rendere impossibile evadere le richieste dell'utente.`,
  },
  {
    title: "3. Finalità e Base Giuridica del Trattamento",
    content: `I dati personali sono trattati per le seguenti finalità:

a) Gestione delle richieste di contatto e informazioni (base giuridica: esecuzione di misure precontrattuali adottate su richiesta dell'interessato – art. 6, par. 1, lett. b) GDPR).

b) Adempimento di obblighi legali e contrattuali (base giuridica: obbligo legale – art. 6, par. 1, lett. c) GDPR).

c) Finalità di sicurezza informatica e prevenzione degli abusi (base giuridica: legittimo interesse del Titolare – art. 6, par. 1, lett. f) GDPR).

d) Invio di comunicazioni commerciali e newsletter, solo previo consenso espresso dell'interessato (base giuridica: consenso – art. 6, par. 1, lett. a) GDPR).`,
  },
  {
    title: "4. Modalità di Trattamento e Conservazione",
    content: `I dati personali sono trattati con strumenti automatizzati per il tempo strettamente necessario a conseguire le finalità per cui sono stati raccolti.

I dati di navigazione sono conservati per un periodo non superiore a 30 giorni. I dati forniti tramite modulo di contatto sono conservati per il tempo necessario a gestire la richiesta e, successivamente, per un periodo massimo di 10 anni in conformità agli obblighi di legge applicabili.

Il trattamento avviene nel rispetto delle misure di sicurezza tecniche e organizzative adeguate a garantire un livello di sicurezza appropriato ai rischi, ai sensi dell'art. 32 del Regolamento (UE) 2016/679.`,
  },
  {
    title: "5. Comunicazione e Diffusione dei Dati",
    content: `I dati personali non sono diffusi. Possono essere comunicati a:

• Soggetti che forniscono servizi strumentali all'attività del Titolare (es. fornitori di hosting, servizi e-mail, piattaforme CRM), che agiscono in qualità di Responsabili del trattamento ai sensi dell'art. 28 GDPR.

• Autorità competenti, in adempimento di obblighi di legge o per ordine dell'autorità giudiziaria.

Nessun dato è trasferito verso paesi terzi al di fuori dello Spazio Economico Europeo, salvo che il trasferimento avvenga verso paesi che garantiscono un livello adeguato di protezione ai sensi della normativa vigente.`,
  },
  {
    title: "6. Diritti dell'Interessato",
    content: `Ai sensi degli artt. 15-22 del Regolamento (UE) 2016/679, l'interessato ha il diritto di:

• Accesso: ottenere la conferma che sia in corso un trattamento dei propri dati e accedere alle informazioni relative.
• Rettifica: ottenere la correzione di dati inesatti o incompleti.
• Cancellazione ("diritto all'oblio"): ottenere la cancellazione dei propri dati al ricorrere delle condizioni previste.
• Limitazione: ottenere la limitazione del trattamento in determinati casi.
• Portabilità: ricevere i propri dati in formato strutturato e di uso comune.
• Opposizione: opporsi al trattamento in qualsiasi momento, ove il trattamento sia basato sul legittimo interesse o sul consenso.
• Revoca del consenso: revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento precedente.

Per esercitare i propri diritti, l'interessato può inviare richiesta a: info@consorziodm.it

L'interessato ha altresì il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).`,
  },
  {
    title: "7. Cookie e Tecnologie di Tracciamento",
    content: `Il sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento delle pagine. Non vengono utilizzati cookie di profilazione o di tracciamento di terze parti senza il preventivo consenso dell'utente.

Per informazioni dettagliate sulle tipologie di cookie utilizzate e sulle relative modalità di gestione, si rimanda alla Cookie Policy del sito.`,
  },
  {
    title: "8. Modifiche alla Presente Informativa",
    content: `Il Titolare si riserva il diritto di modificare la presente informativa in qualsiasi momento, dandone adeguata pubblicità sul sito. Si invita pertanto l'utente a consultare periodicamente questa pagina.

La presente informativa è aggiornata al 9 aprile 2026.`,
  },
];

const Privacy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-sm">
              Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
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

export default Privacy;

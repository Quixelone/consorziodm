import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Definizione della Politica",
    content: `La Politica Integrata per l'Ambiente e la Salute e Sicurezza sul Lavoro definisce l'impegno che il Consorzio Stabile del Mediterraneo intende impostare verso il miglioramento dell'organizzazione e delle sue attività nei confronti della sicurezza e salute dei lavoratori e nei confronti dell'ambiente.`,
  },
  {
    title: "2. Impegno della Direzione",
    content: `La Direzione, consapevole della fondamentale importanza rivestita dalla tutela dell'ambiente e della salute e sicurezza dei lavoratori, si impegna a effettuare le proprie attività garantendo il massimo grado di sicurezza possibile, conformemente alle leggi in vigore in materia di sicurezza sul lavoro, ed a migliorare continuamente le condizioni di lavoro con particolare riguardo alla prevenzione e all'ambiente.`,
  },
  {
    title: "3. Principio di Sviluppo Sostenibile",
    content: `La Direzione aziendale dichiara il suo fermo convincimento nel principio dello sviluppo sostenibile, secondo il quale lo sviluppo economico e l'evoluzione della tecnologia deve realizzarsi a condizione della salvaguardia dell'ambiente.`,
  },
  {
    title: "4. Missione",
    content: `Realizzare la nostra attività nel pieno rispetto dell'ambiente e garantendo il massimo grado di sicurezza possibile, offrendo al cliente servizi realizzati in ottica di miglioramento continuo della qualità e delle prestazioni ambientali, ottimizzando l'utilizzo di risorse e di energia e riducendo gli incidenti per i lavoratori e gli impatti ambientali che la nostra attività produce.`,
  },
  {
    title: "5. Principi Guida",
    content: `I seguenti principi guidano l'impegno di tutti i dipendenti, ciascuno con le competenze e le specificità del proprio ruolo:`,
  },
  {
    title: "6. Obiettivi e Attuazione",
    content: `Verificare periodicamente che la Politica sia aggiornata e coerente con la legislazione vigente, nonché alla natura, alla dimensione e agli impatti ambientali delle attività, prodotti e servizi aziendali.

Agire responsabilmente, nel rispetto della legislazione sulla salute e sicurezza sul lavoro.

Prevenire e ridurre l'inquinamento derivante dai nostri processi aziendali attraverso il miglioramento continuo delle attività ed attuare programmi di miglioramento delle prestazioni ambientali.

Assicurarsi che tutte le consorziate rispettino i principi su cui si basa la politica integrata di CDM SCARL.

Coinvolgere tutte le consorziate ad ogni livello per promuovere la responsabilità di ciascuno riguardo la salute e sicurezza sul lavoro e le tematiche ambientali.

Ridurre l'inquinamento derivante dai rifiuti prodotti (raccolta differenziata), attraverso l'incremento dell'aliquota recuperabile degli stessi e la piena attuazione della raccolta differenziata.

Rispettare pienamente le prescrizioni legislative e le regolamentazioni ambientali applicabili.

Identificare e valutare periodicamente i rischi ambientali e per la salute e sicurezza dei lavoratori per apportare le modifiche necessarie al Sistema di Gestione.

Definire ed aggiornare il quadro di riferimento per stabilire e riesaminare gli obiettivi e i traguardi ambientali e quelli relativi alla salute e sicurezza.

Stabilire annualmente un programma di miglioramento, divulgarlo all'interno dell'azienda e raggiungere gli obiettivi per salvaguardare la salute e sicurezza dei lavoratori in esso stabiliti.

Impegnarsi al miglioramento continuo, alla prevenzione degli infortuni e delle malattie professionali.

Analizzare le malattie professionali e gli incidenti sul lavoro che si dovessero presentare, con identificazione delle cause e delle misure da attuare per evitarne la ripetizione.

Progettare ed attuare i programmi d'informazione e di addestramento per i lavoratori in materia di sicurezza e salute sul lavoro.

Incrementare la conoscenza e la coscienza ambientale di tutte le persone che lavorano per la nostra organizzazione o per conto di essa.

Verificare la conformità dei processi effettuati con la legge, le regolamentazioni e qualsiasi norma in materia ambientale e di sicurezza sul lavoro applicabile al settore in cui l'azienda opera.`,
  },
  {
    title: "7. Risorse e Sistema di Gestione",
    content: `La Direzione si impegna a rendere disponibili tutte le risorse (umane, tecniche e finanziarie) necessarie all'attivazione del Sistema di Gestione Ambientale e del sistema di gestione per la salute e sicurezza dei lavoratori. La Direzione si impegna inoltre a documentare, attuare e mantenere pienamente operativa la politica.`,
  },
  {
    title: "8. Diffusione e Revisione",
    content: `La Direzione si impegna a riesaminare periodicamente e diffondere la Politica aziendale a tutti i livelli, illustrando la nuova filosofia a tutte le consorziate. La Politica per l'ambiente e la sicurezza è evidenza dell'impegno e dei risultati conseguiti dall'organizzazione ed è messa a disposizione delle parti esterne interessate alla salvaguardia ambientale e alla sicurezza sui luoghi di lavoro. La direzione aziendale si impegna a rendere disponibile al pubblico (parti interessate e consorziate) la politica con idonei strumenti di diffusione.`,
  },
];

const EnvironmentSafetyPolicy = () => {
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
              Politica Ambientale e di Salute e Sicurezza sul Lavoro
            </h1>
            <p className="text-muted-foreground text-sm">
              Politica Integrata per l'Ambiente e la Salute e Sicurezza sul Lavoro del Consorzio Stabile del Mediterraneo S.c.a r.l.
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

export default EnvironmentSafetyPolicy;

// Palazzina Russo Ermolli
import russoErmolliCover from "@/assets/russo-ermolli-cover.webp";
import russoErmolliPortale from "@/assets/russo-ermolli-portale.webp";
import russoErmolliCornicione from "@/assets/russo-ermolli-cornicione.webp";
import russoErmolliTorretta from "@/assets/russo-ermolli-torretta.webp";
import russoErmolliIngresso from "@/assets/russo-ermolli-ingresso.webp";
import russoErmolliDettaglio from "@/assets/russo-ermolli-dettaglio.webp";
import russoErmolliCantiere from "@/assets/russo-ermolli-cantiere.webp";

// Santuario Giugliano
import giuglianocover from "@/assets/giugliano-cover.webp";
import giuglianoStruttura from "@/assets/giugliano-struttura.webp";
import giuglianoOro from "@/assets/giugliano-oro.webp";
import giuglianoDecorazione from "@/assets/giugliano-decorazione.webp";
import giuglianoCapriate from "@/assets/giugliano-capriate.webp";
import giuglianoTettoSmontato from "@/assets/giugliano-tetto-smontato.webp";
import giuglianoTeloProtezione from "@/assets/giugliano-telo-protezione.webp";

// Chiesa San Nicola a Pistaso
import chiesaNicolaBefore1 from "@/assets/chiesa-nicola-before-1.webp";
import chiesaNicolaBefore2 from "@/assets/chiesa-nicola-before-2.webp";
import chiesaNicolaAfter1 from "@/assets/chiesa-nicola-after-1.webp";
import chiesaNicolaAfter2 from "@/assets/chiesa-nicola-after-2.webp";
import chiesaNicolaAfter3 from "@/assets/chiesa-nicola-after-3.webp";
import chiesaNicolaAfterDetail1 from "@/assets/chiesa-nicola-after-detail-1.webp";
import chiesaNicolaAfterDetail2 from "@/assets/chiesa-nicola-after-detail-2.webp";
import chiesaNicolaWork1 from "@/assets/chiesa-nicola-work-1.webp";

export interface BeforeAfter {
  before: string;
  after: string;
  caption: string;
}

export interface GalleryImage {
  src: string;
  caption?: string;
}

export interface Project {
  slug: string;
  img: string;
  gallery: GalleryImage[];
  beforeAfter: BeforeAfter[];
  city: string;
  title: string;
  category: string;
  soaCategory: string;
  committente: string;
  importo: string;
  durata: string;
  description: string;
  challenge: string;
  solution: string;
  documentUrl?: string;
  documentLabel?: string;
}

export const projects: Project[] = [
  {
    slug: "chiesa-san-nicola-a-pistaso",
    img: chiesaNicolaAfter1,
    gallery: [
      { src: chiesaNicolaAfter1, caption: "Vista d’insieme — Piazzetta Divino Amore dopo il restauro" },
      { src: chiesaNicolaAfter2, caption: "Angolo principale della chiesa restaurata" },
      { src: chiesaNicolaAfter3, caption: "Facciata superiore con finestrone decorato" },
      { src: chiesaNicolaAfterDetail1, caption: "Cherubino barocco restaurato — Portale principale" },
      { src: chiesaNicolaAfterDetail2, caption: "Dettaglio cornici e stucchi restaurati" },
      { src: chiesaNicolaWork1, caption: "Fase di restauro — Consolidamento cornicione" },
    ],
    beforeAfter: [
      {
        before: chiesaNicolaBefore1,
        after: chiesaNicolaAfter2,
        caption: "Facciata principale — Da degrado urbano a restauro conservativo",
      },
      {
        before: chiesaNicolaBefore2,
        after: chiesaNicolaAfter1,
        caption: "Lato della chiesa — Risanamento facciate e recupero materici",
      },
    ],
    city: "Napoli (NA)",
    title: "Chiesa di S. Nicola a Pistaso — Restauro e risanamento conservativo",
    category: "Restauro Conservativo",
    soaCategory: "OG2 — Restauro e manutenzione beni tutelati",
    committente: "Associazione Culturale Miracolo dei Borbone",
    importo: "€ 313.343,67",
    durata: "—",
    description:
      "Intervento di restauro e risanamento conservativo — Chiesa di S. Nicola a Pistaso, Via S. Biagio dei Librai, Napoli.",
    challenge: "",
    solution: "",
  },
  {
    slug: "palazzina-russo-ermolli",
    img: russoErmolliCover,
    gallery: [
      { src: russoErmolliCover, caption: "Vista d’insieme — Palazzina Russo Ermolli, Via Palizzi 50" },
      { src: russoErmolliPortale, caption: "Portale d’ingresso — Decorazioni liberty restaurate" },
      { src: russoErmolliCornicione, caption: "Cornicione superiore — Stucchi e decorazioni floreali" },
      { src: russoErmolliTorretta, caption: "Torretta liberty — Recupero apparati decorativi in stucco" },
      { src: russoErmolliIngresso, caption: "Ingresso principale — Decorazione ad albero in stucco bianco" },
      { src: russoErmolliDettaglio, caption: "Dettaglio decorativo — Motivi floreali liberty su fondo rosso" },
      { src: russoErmolliCantiere, caption: "Fase di cantiere — Ponteggi e allestimento CDM/RCS" },
    ],
    beforeAfter: [],
    city: "Napoli (NA)",
    title: "Palazzina Russo Ermolli — Restauro e risanamento conservativo",
    category: "Restauro Conservativo",
    soaCategory: "OG2 — Restauro e manutenzione beni tutelati",
    committente: "Condominio Via Palizzi, 50 — «Palazzina Russo Ermolli»",
    importo: "€ 2.059.000",
    durata: "—",
    description:
      "Intervento di restauro e risanamento conservativo — Palazzina Russo Ermolli, Via Palizzi 50, Napoli.",
    challenge: "",
    solution: "",
  },
  {
    slug: "ex-caserma-crespi",
    img: "/02 Demanio/01.webp",
    gallery: [
      { src: "/02 Demanio/01.webp", caption: "Ex Caserma Crespi — Vista generale" },
      { src: "/02 Demanio/02.webp", caption: "Facciata principale — Lavori di miglioramento sismico" },
      { src: "/02 Demanio/03.webp", caption: "Dettaglio strutturale — Interventi di consolidamento" },
      { src: "/02 Demanio/04.webp", caption: "Prospetto laterale — Rifunzionalizzazione degli spazi" },
      { src: "/02 Demanio/05.webp", caption: "Stato di avanzamento lavori" },
      { src: "/02 Demanio/06.webp", caption: "Cantiere — Fase esecutiva" },
      { src: "/02 Demanio/07.webp", caption: "Dettaglio — Lavorazioni in corso" },
      { src: "/02 Demanio/08.webp", caption: "Vista d’insieme del cantiere" },
    ],
    beforeAfter: [],
    city: "Imperia (IM)",
    title: "Ex Caserma Crespi — Miglioramento sismico e rifunzionalizzazione",
    category: "Restauro Istituzionale",
    soaCategory: "OG2 — Restauro e manutenzione beni tutelati",
    committente: "Ministero della Difesa",
    importo: "€ 6.800.000",
    durata: "30 mesi",
    description:
      "Lavori di miglioramento sismico, statico e parziale rifunzionalizzazione dell’immobile denominato Ex Caserma Crespi — Imperia.",
    challenge: "",
    solution: "",
  },
  {
    slug: "caserma-carabinieri-pilastro",
    img: "/01 pilastro/01.webp",
    gallery: [
      { src: "/01 pilastro/01.webp", caption: "Nuova Caserma Carabinieri — Vista esterna" },
      { src: "/01 pilastro/02.webp", caption: "Facciate — Completamento opere esterne" },
      { src: "/01 pilastro/03.webp", caption: "Struttura in costruzione" },
      { src: "/01 pilastro/04.webp", caption: "Avanzamento lavori — Corpo principale" },
      { src: "/01 pilastro/05.webp", caption: "Dettaglio costruttivo" },
    ],
    beforeAfter: [],
    city: "Bologna (BO)",
    title: "Nuova Caserma Carabinieri — Pilastro",
    category: "Edilizia Istituzionale",
    soaCategory: "OG1 — Edifici civili e industriali",
    committente: "Ministero della Difesa — Arma dei Carabinieri",
    importo: "€ 8.500.000",
    durata: "36 mesi",
    description:
      "Lavori per la realizzazione della nuova caserma carabinieri «Pilastro» — Comune di Bologna.",
    challenge: "",
    solution: "",
  },
  {
    slug: "santuario-annunziata-giugliano",
    img: giuglianocover,
    gallery: [
      { src: giuglianocover, caption: "Montaggio ponteggi sulla copertura — Vista esterna del Santuario" },
      { src: giuglianoCapriate, caption: "Capriate lignee storiche — Ispezione e consolidamento strutturale" },
      { src: giuglianoStruttura, caption: "Struttura lignea della copertura — Intervento di messa in sicurezza" },
      { src: giuglianoTettoSmontato, caption: "Smontaggio manto di copertura — Rimozione tegole e tavolato" },
      { src: giuglianoTeloProtezione, caption: "Telo di protezione — Copertura provvisionale del tetto" },
      { src: giuglianoOro, caption: "Dettaglio dorato interno — Elementi decorativi in oro zecchino" },
      { src: giuglianoDecorazione, caption: "Decorazione dorata — Cornice e cartiglio dell’altare maggiore" },
    ],
    beforeAfter: [],
    city: "Giugliano in Campania (NA)",
    title: "Santuario di Maria SS. Annunziata — Messa in sicurezza sismica",
    category: "Restauro Istituzionale",
    soaCategory: "OG2 — Restauro e manutenzione beni tutelati",
    committente: "Ministero della Cultura — Soprintendenza ABAP Area Metropolitana di Napoli",
    importo: "€ 1.000.000",
    durata: "—",
    description:
      "Intervento di restauro e messa in sicurezza sismica nei luoghi di culto, torri e campanili — Santuario di Maria SS. Annunziata, Giugliano in Campania (NA).",
    challenge: "",
    solution: "",
  },
  {
    slug: "asilo-nido-piani-imperia",
    img: "/03 piani/entrata.webp",
    gallery: [
      { src: "/03 piani/entrata.webp", caption: "Ingresso del complesso — Asilo nido in Frazione Piani" },
      { src: "/03 piani/01.webp", caption: "Vista esterna — Edificio completato" },
      { src: "/03 piani/02.webp", caption: "Spazi interni — Aule per la prima infanzia" },
      { src: "/03 piani/03.webp", caption: "Dettaglio costruttivo — Finiture interne" },
      { src: "/03 piani/04.webp", caption: "Area esterna — Spazi di gioco e pertinenze" },
      { src: "/03 piani/05.webp", caption: "Fase di cantiere — Avanzamento lavori" },
    ],
    beforeAfter: [],
    city: "Imperia (IM)",
    title: "Asilo nido in Frazione Piani — Servizi per la prima infanzia",
    category: "Edilizia Pubblica",
    soaCategory: "OG1 — Edifici civili e industriali",
    committente: "—",
    importo: "—",
    durata: "—",
    description:
      "Realizzazione di un asilo nido e servizi di educazione e cura per la prima infanzia in Frazione Piani — Imperia.",
    challenge: "",
    solution: "",
  },
  {
    slug: "impianto-natatorio-torre-del-greco",
    img: "/08 natatorio/01.webp",
    gallery: [
      { src: "/08 natatorio/01.webp", caption: "Impianto natatorio — Vista cantiere" },
      { src: "/08 natatorio/02.webp", caption: "Struttura in costruzione — Corpo principale" },
      { src: "/08 natatorio/03.webp", caption: "Avanzamento lavori — Strutture portanti" },
      { src: "/08 natatorio/04.webp", caption: "Fase esecutiva — Dettaglio costruttivo" },
      { src: "/08 natatorio/05.webp", caption: "Cantiere — Opere strutturali" },
      { src: "/08 natatorio/06.webp", caption: "Impianto natatorio — Stato avanzamento" },
      { src: "/08 natatorio/07.webp", caption: "Dettaglio — Lavorazioni in corso" },
      { src: "/08 natatorio/08.webp", caption: "Vista d'insieme del cantiere" },
      { src: "/08 natatorio/09.webp", caption: "Progresso lavori — Opere civili" },
      { src: "/08 natatorio/10.webp", caption: "Fase finale — Completamento strutture" },
    ],
    beforeAfter: [],
    city: "Torre del Greco (NA)",
    title: "Nuovo Impianto Sportivo Natatorio Comunale",
    category: "Edilizia Sportiva",
    soaCategory: "OG1 — Edifici civili e industriali",
    committente: "Comune di Torre del Greco",
    importo: "€ 1.921.461,59",
    durata: "—",
    description:
      "Appalto integrato relativo alla progettazione definitiva, esecutiva ed ai lavori per la realizzazione di un nuovo impianto sportivo natatorio comunale — Torre del Greco (NA).",
    challenge: "",
    solution: "",
  },
  {
    slug: "cittadella-dello-sport-torre-del-greco",
    img: "/09 cittadella/01.webp",
    gallery: [
      { src: "/09 cittadella/01.webp", caption: "Cittadella dello Sport — Vista generale" },
      { src: "/09 cittadella/02.webp", caption: "Strutture portanti — Avanzamento lavori" },
      { src: "/09 cittadella/03.webp", caption: "Cantiere — Opere in cemento armato" },
      { src: "/09 cittadella/04.webp", caption: "Fase esecutiva — Corpo principale" },
      { src: "/09 cittadella/05.webp", caption: "Dettaglio costruttivo — Strutture" },
      { src: "/09 cittadella/06.webp", caption: "Vista d'insieme del cantiere" },
      { src: "/09 cittadella/07.webp", caption: "Avanzamento lavori — Lotto 1" },
      { src: "/09 cittadella/08.webp", caption: "Opere civili — Stato avanzamento" },
      { src: "/09 cittadella/09.webp", caption: "Completamento strutture portanti" },
      { src: "/09 cittadella/10.webp", caption: "Cittadella dello Sport — Fase cantiere" },
      { src: "/09 cittadella/11.webp", caption: "Dettaglio — Lavorazioni in corso" },
      { src: "/09 cittadella/12.webp", caption: "Progresso lavori — Vista esterna" },
    ],
    beforeAfter: [],
    city: "Torre del Greco (NA)",
    title: "Cittadella dello Sport — Viale Europa, Lotto 1",
    category: "Edilizia Sportiva",
    soaCategory: "OG1 — Edifici civili e industriali",
    committente: "Comune di Torre del Greco",
    importo: "€ 6.974.624,92",
    durata: "—",
    description:
      "Progettazione esecutiva ed esecuzione lavori per la realizzazione della Cittadella dello Sport presso Viale Europa — Lotto 1 — Torre del Greco (NA).",
    challenge: "",
    solution: "",
  },
  {
    slug: "ponte-gambelonghe-rovere-veronese",
    img: "/10 gambelonghe/01.webp",
    gallery: [
      { src: "/10 gambelonghe/01.webp", caption: "Ponte delle Gambelonghe — Vista del manufatto" },
      { src: "/10 gambelonghe/02.webp", caption: "Consolidamento strutturale — Lavori in corso" },
      { src: "/10 gambelonghe/03.webp", caption: "Dettaglio strutturale — Interventi di adeguamento sismico" },
      { src: "/10 gambelonghe/04.webp", caption: "Fase esecutiva — Opere sul ponte" },
      { src: "/10 gambelonghe/05.webp", caption: "Fotoinserimento paesaggistico — Progetto completato" },
    ],
    beforeAfter: [],
    city: "Roverè Veronese (VR)",
    title: "Ponte delle Gambelonghe — Consolidamento e adeguamento sismico",
    category: "Infrastrutture",
    soaCategory: "OG3 — Strade, autostrade, ponti e opere simili",
    committente: "Provincia di Verona",
    importo: "€ 2.873.118,64",
    durata: "—",
    description:
      "Consolidamento strutturale e adeguamento sismico dell'intero manufatto in calcestruzzo armato del Ponte delle Gambelonghe sul Vajo della Pissarota — Roverè Veronese (VR).",
    challenge: "",
    solution: "",
  },
  {
    slug: "rio-sguazzatorio-scafati",
    img: "/07 Rio Sguazzatorio/1.webp",
    gallery: [
      { src: "/07 Rio Sguazzatorio/1.webp", caption: "Rio Sguazzatorio — Intervento di ripristino idraulico" },
      { src: "/07 Rio Sguazzatorio/2.webp", caption: "Canale — Lavori di pulizia e regimazione" },
      { src: "/07 Rio Sguazzatorio/3.webp", caption: "Sezione idraulica — Stato di avanzamento" },
      { src: "/07 Rio Sguazzatorio/4.webp", caption: "Vista d’insieme — Opere di ripristino completate" },
    ],
    beforeAfter: [],
    city: "Scafati (SA)",
    title: "Ripristino funzionalità idraulica — Rio Sguazzatorio",
    category: "Opere Idrauliche",
    soaCategory: "OG6 — Acquedotti, gasdotti e opere idrauliche",
    committente: "—",
    importo: "—",
    durata: "—",
    description:
      "Ripristino della funzionalità idraulica del Rio Sguazzatorio — Scafati (NA).",
    challenge: "",
    solution: "",
  },
  {
    slug: "abbattimento-vele-scampia",
    img: "/11 Vele Scampia/01.webp",
    gallery: [
      { src: "/11 Vele Scampia/01.webp", caption: "Vela H — Fase di abbattimento controllato" },
      { src: "/11 Vele Scampia/02.webp", caption: "Demolizione — Lavori in corso con mezzi meccanici" },
      { src: "/11 Vele Scampia/03.webp", caption: "Vista d’insieme — Avanzamento della demolizione" },
      { src: "/11 Vele Scampia/04.webp", caption: "Area cantiere — Gestione materiali di risulta" },
    ],
    beforeAfter: [],
    city: "Napoli (NA)",
    title: "Abbattimento Vele di Scampia — Demolizione controllata e bonifica",
    category: "Demolizione",
    soaCategory: "OG1 — Edifici civili e industriali",
    committente: "Comune di Napoli",
    importo: "—",
    durata: "—",
    description:
      "Lavori di demolizione controllata delle Vele di Scampia — complesso di edilizia residenziale pubblica nel quartiere Scampia di Napoli. Intervento di abbattimento, bonifica e smaltimento dei materiali di risulta.",
    challenge: "",
    solution: "",
  },
];

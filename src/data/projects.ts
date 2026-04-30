
// Palazzina Russo Ermolli
import russoErmolliCover from "@/assets/russo-ermolli-cover.jpg";
import russoErmolliPortale from "@/assets/russo-ermolli-portale.jpg";
import russoErmolliCornicione from "@/assets/russo-ermolli-cornicione.jpg";
import russoErmolliTorretta from "@/assets/russo-ermolli-torretta.jpg";
import russoErmolliIngresso from "@/assets/russo-ermolli-ingresso.jpg";
import russoErmolliDettaglio from "@/assets/russo-ermolli-dettaglio.jpg";
import russoErmolliCantiere from "@/assets/russo-ermolli-cantiere.jpg";

// Santuario Giugliano
import giuglianocover from "@/assets/giugliano-cover.jpg";
import giuglianoStruttura from "@/assets/giugliano-struttura.jpg";
import giuglianoOro from "@/assets/giugliano-oro.jpg";
import giuglianoDecorazione from "@/assets/giugliano-decorazione.jpg";
import giuglianoCapriate from "@/assets/giugliano-capriate.jpg";
import giuglianoTettoSmontato from "@/assets/giugliano-tetto-smontato.jpg";
import giuglianoTeloProtezione from "@/assets/giugliano-telo-protezione.jpg";

// Chiesa San Nicola a Pistaso
import chiesaNicolaBefore1 from "@/assets/chiesa-nicola-before-1.png";
import chiesaNicolaBefore2 from "@/assets/chiesa-nicola-before-2.png";
import chiesaNicolaAfter1 from "@/assets/chiesa-nicola-after-1.png";
import chiesaNicolaAfter2 from "@/assets/chiesa-nicola-after-2.png";
import chiesaNicolaAfter3 from "@/assets/chiesa-nicola-after-3.png";
import chiesaNicolaAfterDetail1 from "@/assets/chiesa-nicola-after-detail-1.png";
import chiesaNicolaAfterDetail2 from "@/assets/chiesa-nicola-after-detail-2.png";
import chiesaNicolaWork1 from "@/assets/chiesa-nicola-work-1.png";

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
    img: "/02 Demanio/01.jpeg",
    gallery: [
      { src: "/02 Demanio/01.jpeg", caption: "Ex Caserma Crespi — Vista generale" },
      { src: "/02 Demanio/02.jpeg", caption: "Facciata principale — Lavori di miglioramento sismico" },
      { src: "/02 Demanio/03.jpeg", caption: "Dettaglio strutturale — Interventi di consolidamento" },
      { src: "/02 Demanio/04.jpeg", caption: "Prospetto laterale — Rifunzionalizzazione degli spazi" },
      { src: "/02 Demanio/05.jpeg", caption: "Stato di avanzamento lavori" },
      { src: "/02 Demanio/06.jpeg", caption: "Cantiere — Fase esecutiva" },
      { src: "/02 Demanio/07.jpeg", caption: "Dettaglio — Lavorazioni in corso" },
      { src: "/02 Demanio/08.jpeg", caption: "Vista d’insieme del cantiere" },
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
    img: "/01 pilastro/01.jpeg",
    gallery: [
      { src: "/01 pilastro/01.jpeg", caption: "Nuova Caserma Carabinieri — Vista esterna" },
      { src: "/01 pilastro/02.jpeg", caption: "Facciate — Completamento opere esterne" },
      { src: "/01 pilastro/03.jpeg", caption: "Struttura in costruzione" },
      { src: "/01 pilastro/04.jpeg", caption: "Avanzamento lavori — Corpo principale" },
      { src: "/01 pilastro/05.jpeg", caption: "Dettaglio costruttivo" },
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
    img: "/03 piani/entrata.jpg",
    gallery: [
      { src: "/03 piani/entrata.jpg", caption: "Ingresso del complesso — Asilo nido in Frazione Piani" },
      { src: "/03 piani/01.jpeg", caption: "Vista esterna — Edificio completato" },
      { src: "/03 piani/02.jpeg", caption: "Spazi interni — Aule per la prima infanzia" },
      { src: "/03 piani/03.jpeg", caption: "Dettaglio costruttivo — Finiture interne" },
      { src: "/03 piani/04.jpg", caption: "Area esterna — Spazi di gioco e pertinenze" },
      { src: "/03 piani/05.jpeg", caption: "Fase di cantiere — Avanzamento lavori" },
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
    slug: "rio-sguazzatorio-scafati",
    img: "/07 Rio Sguazzatorio/1.jpeg",
    gallery: [
      { src: "/07 Rio Sguazzatorio/1.jpeg", caption: "Rio Sguazzatorio — Intervento di ripristino idraulico" },
      { src: "/07 Rio Sguazzatorio/2.jpeg", caption: "Canale — Lavori di pulizia e regimazione" },
      { src: "/07 Rio Sguazzatorio/3.jpeg", caption: "Sezione idraulica — Stato di avanzamento" },
      { src: "/07 Rio Sguazzatorio/4.jpeg", caption: "Vista d’insieme — Opere di ripristino completate" },
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
];

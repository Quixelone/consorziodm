import projectNapoli from "@/assets/project-napoli.jpg";
import projectImperia from "@/assets/project-imperia.jpg";
import projectBologna from "@/assets/project-bologna.jpg";
import galleryNapoli1 from "@/assets/gallery-napoli-1.png";
import galleryNapoli2 from "@/assets/gallery-napoli-2.png";
import galleryImperia1 from "@/assets/gallery-imperia-1.png";
import galleryImperia2 from "@/assets/gallery-imperia-2.png";
import galleryBologna1 from "@/assets/gallery-bologna-1.png";
import galleryBologna2 from "@/assets/gallery-bologna-2.png";

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
      { src: chiesaNicolaAfter1, caption: "Vista d'insieme — Piazzetta Divino Amore dopo il restauro" },
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
      "Intervento di restauro e risanamento conservativo rientrante nell'ambito di applicazione del Bonus Facciate (L. 160/2019) presso la Chiesa di S. Nicola a Pistaso, Via S. Biagio dei Librai, angolo Vico dei Maiorani e Piazzetta Divino Amore, 84, Napoli.",
    challenge:
      "Intervento su bene storico in contesto urbano complesso, con vincoli e necessità di coordinamento tra progettazione, esecuzione e gestione documentale delle lavorazioni. Le facciate presentavano gravi degradi superficiali, graffiti, perdita di intonaco e danni agli stucchi decorativi barocchi.",
    solution:
      "General Contractor e impresa affidataria: Consorzio Stabile del Mediterraneo S.c.a r.l. Impresa esecutrice: RCS Costruzioni Srl. Progettazione ed esecuzione dei lavori con focus su conservazione materica e ripristino delle facciate, recupero degli apparati decorativi in stucco (cherubini, cornici, timpani) e trattamento anti-graffiti delle superfici lapidee.",
  },
  {
    slug: "palazzina-russo-ermolli",
    img: projectNapoli,
    gallery: [
      { src: projectNapoli, caption: "Vista d'insieme — Palazzina Russo Ermolli" },
      { src: galleryNapoli1, caption: "Consolidamento strutturale della facciata" },
      { src: galleryNapoli2, caption: "Restauro degli interni — soffitti a volta" },
    ],
    beforeAfter: [
      { before: projectNapoli, after: projectNapoli, caption: "Facciata principale — Consolidamento strutturale e restauro" },
    ],
    city: "Napoli (NA)",
    title: "Palazzina Russo Ermolli",
    category: "Edilizia Pubblica",
    soaCategory: "OG1 — Edifici civili e industriali",
    committente: "Comune di Napoli",
    importo: "€ 4.200.000",
    durata: "24 mesi",
    description:
      "Intervento di ristrutturazione integrale della Palazzina Russo Ermolli, un edificio storico nel cuore di Napoli destinato ad edilizia residenziale pubblica. Il progetto ha previsto il consolidamento strutturale, il rifacimento degli impianti e il restauro delle facciate nel rispetto dei vincoli della Soprintendenza.",
    challenge:
      "L'edificio presentava gravi criticità strutturali dovute a decenni di incuria e al sisma del 1980. La presenza di famiglie residenti ha richiesto una pianificazione a fasi per garantire la continuità abitativa durante i lavori.",
    solution:
      "Abbiamo implementato un cronoprogramma a fasi alternate, completando il consolidamento strutturale con tecniche di micro-pali e iniezioni di resina, seguiti dal rifacimento impiantistico e dal restauro conservativo delle facciate in tufo. L'intero intervento è stato consegnato con 2 mesi di anticipo.",
  },
  {
    slug: "ex-caserma-crespi",
    img: projectImperia,
    gallery: [
      { src: projectImperia, caption: "Ex Caserma Crespi — Palazzina Comando" },
      { src: galleryImperia1, caption: "Restauro conservativo della facciata" },
      { src: galleryImperia2, caption: "Dettaglio — Lavorazione cornici in pietra" },
    ],
    beforeAfter: [
      { before: projectImperia, after: projectImperia, caption: "Palazzina Comando — Restauro conservativo" },
    ],
    city: "Imperia (IM)",
    title: "Ex Caserma Crespi — Palazzina Comando",
    category: "Restauro Istituzionale",
    soaCategory: "OG2 — Restauro e manutenzione beni tutelati",
    committente: "Ministero della Difesa",
    importo: "€ 6.800.000",
    durata: "30 mesi",
    description:
      "Restauro e riqualificazione funzionale dell'Ex Caserma Crespi — Palazzina Comando, immobile sottoposto a vincolo monumentale. Il progetto ha trasformato la struttura militare in un polo istituzionale moderno, preservando integralmente il valore storico-architettonico dell'edificio.",
    challenge:
      "Il vincolo monumentale imponeva tecniche di intervento non invasive e materiali compatibili con l'edilizia storica. La complessità burocratica ha richiesto un dialogo costante con la Soprintendenza e il Genio Militare.",
    solution:
      "Abbiamo utilizzato tecniche di restauro conservativo con malte a base di calce naturale e consolidamenti strutturali con fibre di carbonio. Gli impianti tecnologici sono stati integrati con soluzioni a scomparsa per non alterare la lettura architettonica dell'immobile.",
  },
  {
    slug: "caserma-carabinieri-pilastro",
    img: projectBologna,
    gallery: [
      { src: projectBologna, caption: "Nuova Caserma Carabinieri — Vista esterna" },
      { src: galleryBologna1, caption: "Struttura in costruzione — Facciate vetrate" },
      { src: galleryBologna2, caption: "Installazione impianto fotovoltaico 45 kW" },
    ],
    beforeAfter: [
      { before: projectBologna, after: projectBologna, caption: "Nuova Caserma — Costruzione ex novo" },
    ],
    city: "Bologna (BO)",
    title: "Nuova Caserma Carabinieri — Pilastro",
    category: "Edilizia Istituzionale",
    soaCategory: "OG1 — Edifici civili e industriali",
    committente: "Ministero della Difesa — Arma dei Carabinieri",
    importo: "€ 8.500.000",
    durata: "36 mesi",
    description:
      "Costruzione ex novo della Nuova Caserma dei Carabinieri nel quartiere Pilastro di Bologna. Un edificio a consumo quasi zero (nZEB) progettato per ospitare uffici, alloggi e servizi operativi, con standard di sicurezza e sostenibilità di ultima generazione.",
    challenge:
      "La realizzazione in un quartiere densamente abitato ha richiesto una gestione attenta della logistica di cantiere e del rapporto con la comunità locale. Gli standard NZEB hanno imposto soluzioni impiantistiche avanzate.",
    solution:
      "Il cantiere è stato organizzato con logistica just-in-time per minimizzare l'impatto sul quartiere. L'edificio integra un impianto fotovoltaico da 45 kW, pompe di calore geotermiche e un sistema di ventilazione meccanica controllata, raggiungendo la classe energetica A4.",
  },
];

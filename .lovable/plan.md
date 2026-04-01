

# Piano di Evoluzione — Consorzio del Mediterraneo

## Obiettivo
Trasformare il sito da landing page statica a piattaforma istituzionale orientata a **grandi imprese e PA**, con sezioni Mission/Vision, certificazioni interattive, gallery progetti con pagine dedicate, e comunicazione B2G/B2B professionale.

---

## 1. Sezione Mission & Vision (nuova)

Creare `MissionVisionSection.tsx` da posizionare dopo "Chi Siamo":
- **Mission**: "Aggregare competenze e risorse per realizzare opere pubbliche e private di eccellenza, garantendo affidabilità, qualità e rispetto dei tempi."
- **Vision**: "Diventare il partner di riferimento per le stazioni appaltanti nella realizzazione di infrastrutture strategiche nel Mezzogiorno e in Italia."
- Layout a 2 colonne con icone (Target per Mission, Eye per Vision), design premium coerente con il resto del sito
- Tono istituzionale orientato al target PA/grandi imprese

## 2. Certificazioni interattive con link ai documenti

Rielaborare `CertificationsSection.tsx`:
- Ogni certificazione diventa cliccabile (apre un dialog/modal o link esterno al PDF del certificato reale)
- Aggiungere immagine dell'attestato SOA (scaricata dal sito originale: `Attestato-uai-1355x1355.png`)
- Usare un `Dialog` shadcn per mostrare l'immagine del certificato a schermo pieno quando si clicca
- Prevedere un array con URL ai PDF reali delle certificazioni (da popolare quando disponibili)

## 3. Gallery Progetti con pagine dedicate

### 3a. Trasformare `ProjectsSection.tsx` in gallery
- Ogni card progetto diventa un `<Link>` a `/progetti/:slug`
- Aggiungere breve descrizione sotto il titolo
- Bottone "Scopri di più" su ogni card

### 3b. Creare pagina progetto `/progetti/:slug`
- Nuovo file `src/pages/ProjectDetail.tsx`
- Contenuto: hero image grande, gallery foto (carousel), descrizione lavori, problemi risolti, dati tecnici (committente, importo, durata, categoria SOA)
- Dati statici in un file `src/data/projects.ts` con array di progetti completi
- Aggiungere route in `App.tsx`: `/progetti/:slug`

### 3c. Creare pagina archivio `/progetti`
- `src/pages/Projects.tsx` — griglia di tutti i progetti con filtro per categoria
- Link "Tutti i progetti" nella sezione homepage porta qui

## 4. Comunicazione B2G / Istituzionale

Interventi trasversali per adeguare il tono al target (stazioni appaltanti, PA, grandi imprese):
- **Hero**: riformulare headline e copy con linguaggio più istituzionale — enfasi su capacità operativa, garanzie patrimoniali, track record
- **CTA principali**: "Richiedi Qualificazione" o "Scopri le Nostre Referenze" invece di generici
- **Sezione Numeri**: aggiungere "Importo lavori eseguiti" e "Classificazione SOA" come KPI
- **Contact Section**: aggiungere campo "Tipologia Ente" (PA, Impresa Privata, Professionista) nel form

## 5. Routing e Navbar

- Aggiungere `Whistleblowing` come link nella navbar (link esterno o anchor)
- Aggiungere route `/progetti` e `/progetti/:slug` in `App.tsx`
- Layout condiviso: Navbar + Footer wrappano tutte le pagine

---

### File da creare
- `src/components/MissionVisionSection.tsx`
- `src/data/projects.ts` — dati completi dei progetti
- `src/pages/ProjectDetail.tsx` — pagina singolo progetto
- `src/pages/Projects.tsx` — archivio progetti

### File da modificare
- `src/pages/Index.tsx` — aggiungere MissionVisionSection
- `src/components/CertificationsSection.tsx` — certificazioni cliccabili con modal
- `src/components/ProjectsSection.tsx` — link a pagine progetto
- `src/components/HeroSection.tsx` — copy istituzionale
- `src/components/Navbar.tsx` — link Whistleblowing
- `src/components/NumbersSection.tsx` — KPI aggiuntivi
- `src/components/ContactSection.tsx` — campo tipologia ente
- `src/App.tsx` — nuove route


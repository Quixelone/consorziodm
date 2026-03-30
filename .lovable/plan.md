

## Analisi dei Problemi

Dopo aver confrontato il sito attuale con l'originale (consorziodelmediterraneo.it), ecco i problemi individuati:

1. **Logo orribile**: i file PNG generati artificialmente sono di pessima qualità. Vanno sostituiti con il logo reale dal sito originale
2. **Immagini dei lavori**: placeholder generici invece delle foto reali dei cantieri
3. **Sezioni mancanti** rispetto all'originale:
   - Sezione Tabs (Soluzioni Aziendali / Progetti / Esecuzione / Manutenzione) con immagini
   - Barre di progresso competenze (Impianti Termoidraulici 65%, Impianti Elettrici 80%, Lavori 100%)
   - Link "Legalità e responsabilità" e "Whistleblowing" nella navigazione
   - Immagine certificazioni (illustrazione AI presente sul sito originale)

---

## Piano di Implementazione

### 1. Sostituire il logo con quello reale
- Scaricare il logo originale: `https://www.consorziodelmediterraneo.it/wp-content/uploads/2026/02/cropped-logopulito-2.png`
- Salvarlo come asset e aggiornare Navbar e Footer

### 2. Usare le foto reali dei lavori
- Scaricare le 3 immagini dei progetti dal sito originale (Napoli, Imperia, Bologna) e usarle in `ProjectsSection.tsx`
- Scaricare le immagini della sezione tabs (cantieri, architettura, pulizia vetri, contratti)

### 3. Aggiungere sezione Tabs mancante
- Creare una nuova sezione con 4 tab (Soluzioni Aziendali, Progetti, Esecuzione, Manutenzione)
- Ogni tab ha un testo descrittivo + immagine reale dal sito originale
- Posizionarla dopo la sezione Certificazioni

### 4. Aggiungere barre di progresso competenze
- Nella sezione Certificazioni o in una nuova sotto-sezione, aggiungere progress bars animate:
  - Impianti Termoidraulici: 65%
  - Impianti Elettrici: 80%
  - Lavori: 100%

### 5. Aggiornare navigazione
- Aggiungere link "Legalità" e "Whistleblowing" nella Navbar e nel Footer
- Mantenere la struttura esistente

### 6. Hero image
- Sostituire il placeholder hero con un'immagine reale dal sito (architettura/cantiere)

---

### File da modificare/creare
- `src/assets/` — nuovi asset reali (logo, foto progetti, foto tabs)
- `src/components/Navbar.tsx` — logo reale + link aggiuntivi
- `src/components/Footer.tsx` — logo reale
- `src/components/ProjectsSection.tsx` — foto reali
- `src/components/HeroSection.tsx` — hero image reale
- `src/components/CertificationsSection.tsx` — aggiungere progress bars
- `src/components/TabsSection.tsx` — **nuovo** componente tabs
- `src/pages/Index.tsx` — includere TabsSection


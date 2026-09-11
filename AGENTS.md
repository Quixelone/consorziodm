<!-- headroom:rtk-instructions -->
# RTK (Rust Token Killer) - Token-Optimized Commands

When running shell commands, **always prefix with `rtk`**. This reduces context
usage by 60-90% with zero behavior change. If rtk has no filter for a command,
it passes through unchanged — so it is always safe to use.

## Key Commands
```bash
# Git (59-80% savings)
rtk git status          rtk git diff            rtk git log

# Files & Search (60-75% savings)
rtk ls <path>           rtk read <file>         rtk grep <pattern>
rtk find <pattern>      rtk diff <file>

# Test (90-99% savings) — shows failures only
rtk pytest tests/       rtk cargo test          rtk test <cmd>

# Build & Lint (80-90% savings) — shows errors only
rtk tsc                 rtk lint                rtk cargo build
rtk prettier --check    rtk mypy                rtk ruff check

# Analysis (70-90% savings)
rtk err <cmd>           rtk log <file>          rtk json <file>
rtk summary <cmd>       rtk deps                rtk env

# GitHub (26-87% savings)
rtk gh pr view <n>      rtk gh run list         rtk gh issue list

# Infrastructure (85% savings)
rtk docker ps           rtk kubectl get         rtk docker logs <c>

# Package managers (70-90% savings)
rtk pip list            rtk pnpm install        rtk npm run <script>
```

## Rules
- In command chains, prefix each segment: `rtk git add . && rtk git commit -m "msg"`
- For debugging, use raw command without rtk prefix
- `rtk proxy <cmd>` runs command without filtering but tracks usage
<!-- /headroom:rtk-instructions -->

# Progetto: Consorzio del Mediterraneo — sito istituzionale

Stack: Vite + React + TypeScript + Tailwind, deploy su Lovable (repo GitHub `Quixelone/consorziodm`, branch `main`). Backend: Supabase project `whentxncctoetdafyesy` (già linkato via CLI, credenziali in Windows Credential Manager `Supabase CLI:supabase`).

## Sistema Whistleblowing (D.Lgs. 24/2023) — implementato l'11/09/2026

**Flusso segnalante:**
- Form in `src/components/WhistleblowingSection.tsx` → POST alla edge function → crea record + ticket `WB-XXXXXXXX` (8 char casuali, alfabeto non ambiguo) → email al Responsabile (odvcdmscarl@gmail.com via Resend) → se identificato, email di conferma col magic link `/verifica-segnalazione?ticket=...`
- Pagina pubblica `src/pages/VerificaSegnalazione.tsx` (`/verifica-segnalazione`): box inserimento ticket → stepper 5 stati (ricevuta → presa_in_carico → verifica → provvedimenti → archiviata) + timeline aggiornamenti. Mai espone contenuto/identità.
- Definizioni stati condivise in `src/lib/whistleblowing.ts` (label, icone, colori — attenzione: classi Tailwind dinamiche non funzionano, i colori sono hardcoded per stato).

**Area riservata ODV** (`src/pages/Riservata.tsx`, route `/riservata`, NON linkata nel menu):
- Login con password (sha256 in secret Supabase `ODV_PASSWORD_HASH`, confronto constant-time) → token HMAC-SHA256 8h firmato con secret `ODV_TOKEN_SECRET`, salvato in localStorage
- Rate-limit login: 5 tentativi/15min per IP (tabella `odv_login_attempts`)
- Lista pratiche con filtri stato → dettaglio completo → aggiornamento stato + messaggio (visibile subito al segnalante)
- La password ODV non è nel repo: è stata comunicata in chat (settembre 2026). Se persa, rigenerarla: `npx supabase secrets set ODV_PASSWORD_HASH=<sha256-hex della nuova password>`

**Edge function** `supabase/functions/whistleblowing/index.ts` (deploy: `npx supabase functions deploy whistleblowing --no-verify-jwt`):
- `POST /whistleblowing` → crea segnalazione (body: category, description, isAnonymous, name, email)
- `GET /whistleblowing?ticket=WB-XXXX` → stato + timeline (senza contenuto)
- `POST /whistleblowing/odv-login` | `GET .../odv-reports` | `GET .../odv-report?ticket=` | `POST .../odv-update` (header `Authorization: Bearer <token>`)
- Bug noto già corretto due volte: nelle select del dettaglio serve SEMPRE includere `id`, altrimenti la query updates con `report_id` undefined ritorna timeline vuota

**DB** (migrazioni in `supabase/migrations/`, push: `npx supabase db push`; query remote: `npx supabase db query --linked "<sql>"`):
- `whistleblowing_reports` (ticket_code unique, status check 5 valori, category, description, is_anonymous, reporter_name/email, created/updated_at)
- `whistleblowing_updates` (report_id FK cascade, status, message, created_at)
- `odv_login_attempts` (ip, attempted_at)
- RLS enabled + revoke ad anon/authenticated su tutte: accesso SOLO via service role nella edge function

**Cambio stato pratica (manuale):** da `/riservata` con login ODV, oppure via SQL: update reports + insert in updates.

**Altro:** form contatti usa `EMAIL_API_URL` (edge function `send`) da `src/lib/api.ts`. Secret Resend già configurati nel progetto Supabase. Test E2E fatti con Playwright (script temporanei, rimossi dopo l'uso).

# Consorzio DM — Design System

## 1. Visual Theme & Atmosphere

Clean, authoritative, and trustworthy. A professional construction/engineering firm with a modern Italian identity. The palette is cool and institutional — deep steel blues and teal accents on a near-white background. Typography is precise and confident. Whitespace is generous. The overall tone is "premium contractor": serious competence with polished presentation.

---

## 2. Colour Palette & Roles

| Role | Name | HSL | Usage |
|------|------|-----|-------|
| Background | Pure White | `hsl(0 0% 100%)` | Page background |
| Surface | Off-White | `hsl(210 20% 98%)` | Section fills, subtle areas |
| Foreground | Dark Navy | `hsl(215 28% 17%)` | Primary text, headings |
| Primary | Steel Blue | `hsl(200 70% 35%)` | Buttons, links, brand accents |
| Accent | Teal | `hsl(174 50% 42%)` | Secondary highlights, badges |
| Muted Foreground | Slate | `hsl(215 13% 50%)` | Body text, captions, labels |
| Border | Light Gray | `hsl(214 20% 92%)` | Dividers, card borders |
| Card | White | `hsl(0 0% 100%)` | Card backgrounds |

---

## 3. Typography

| Token | Value |
|-------|-------|
| Sans font | Inter (300–900) |
| Mono font | JetBrains Mono (500, 700) — KPI numbers only |
| Heading XL | 4xl–[3.5rem], extrabold, tracking-tight, leading 1.1 |
| Heading LG | 3xl–4xl, extrabold, tracking-tight, leading 1.15 |
| Section label | 0.75rem, semibold, tracking-widest, uppercase, muted |
| Body LG | text-lg–xl, leading-relaxed, font-light, muted-foreground |
| Body default | text-base, leading-relaxed, muted-foreground |

---

## 4. Component Styles

### Buttons
- **Primary**: `bg-primary text-white rounded-full px-7 py-3 text-sm font-semibold` + subtle shadow, hover lifts -1px
- **Secondary**: `border border-border text-foreground rounded-full px-7 py-3 text-sm font-semibold bg-transparent`, hover fills bg-secondary

### Cards
- `.card-premium`: `bg-card rounded-2xl border border-border/60` + `shadow-card`
- Hover: lifts -2px + `shadow-elevated`
- Padding: `p-5` (compact info), `p-8` (content cards)

### Navigation
- Glass effect: `rgba(255,255,255,0.85)` + `backdrop-filter: blur(20px) saturate(180%)`
- Sticky top, border-bottom on scroll

### Sections
- Max width: `max-w-7xl mx-auto px-6 md:px-8 lg:px-12` via `.section-container`
- Vertical padding: `py-24 md:py-32 lg:py-40` via `.section-spacing`

### Shadows
- Soft: `0 1px 3px rgb(0 0 0/0.04)` — base elements
- Card: `0 4px 24px -4px rgb(0 0 0/0.06)` — cards
- Elevated: `0 12px 40px -8px rgb(0 0 0/0.08)` — hover/modals

---

## 5. Layout Principles

- **Max content width**: 80rem (max-w-7xl) for containers, max-w-3xl for prose
- **Whitespace**: generous — sections breathe, text doesn't crowd
- **Grid**: 1–2–4 columns depending on content type
- **Border radius**: 0.75rem base (`--radius`), `rounded-2xl` for cards, `rounded-full` for pills/buttons
- **Animation**: framer-motion, `opacity 0→1 + y 20→0`, duration 0.4–0.5s, viewport once

---

## 6. Design System Notes for Generation

```
Stack: React + TypeScript + Tailwind CSS v3 + shadcn/ui + framer-motion
Fonts: Inter (primary), JetBrains Mono (KPI only) — loaded via Google Fonts
Primary brand color: Steel Blue hsl(200 70% 35%)
Accent: Teal hsl(174 50% 42%)

Key utility classes:
  .section-container  → max-w-7xl mx-auto px-6 md:px-8 lg:px-12
  .section-spacing    → py-24 md:py-32 lg:py-40
  .heading-xl         → text-4xl…[3.5rem] font-extrabold tracking-tight
  .heading-lg         → text-3xl…4xl font-extrabold tracking-tight
  .heading-section    → text-sm font-semibold tracking-widest uppercase text-muted-foreground
  .body-lg            → text-lg…xl leading-relaxed font-light text-muted-foreground
  .card-premium       → bg-card rounded-2xl border border-border/60 + shadow-card
  .btn-primary        → bg-primary text-white rounded-full px-7 py-3 text-sm font-semibold
  .btn-secondary      → border border-border rounded-full px-7 py-3 text-sm font-semibold

Prose max-width: max-w-3xl mx-auto
Card content padding: p-6 or p-8
Animation default: initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}
```

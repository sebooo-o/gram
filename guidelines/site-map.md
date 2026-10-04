# GRAM: Site Map & Information Architecture

> **Status:** Draft v0.1. Pages and sections are proposals based on `prd.md`, `user-personas.md` and the patterns in `competitor.md`. Domain is [TBD], so URLs are shown as paths.
> **Priority:** P0 = launch, P1 = launch if ready, P2 = later.

---

## 1. Structure at a glance

```
/                       Home (SK, default)            P0
├── /menu               Menu                          P0
├── /udalosti           Events                        P1
│   └── /udalosti/{slug}  Event detail (Phase 2)      P2
├── /kontakt            Contact & hours               P0
├── /o-nas              About (Phase 2)               P2
├── /ochrana-udajov     Privacy                       P0
└── /404                Not found                     P0

/en/                    Home (EN)                     P0
├── /en/menu            Menu                          P0
├── /en/events          Events                        P1
├── /en/contact         Contact & hours               P0
├── /en/about           About (Phase 2)               P2
├── /en/privacy         Privacy                       P0
└── (404 handled by the site-wide 404 page)
```

- Slovak is the default language and lives at the root; English lives under `/en/`.
- Every page links to its counterpart in the other language and declares `hreflang`.
- Slugs are lowercase, ASCII, hyphen-separated; no diacritics in URLs.

## 2. Page inventory
| Page | SK URL | EN URL | Purpose | Primary CTA | Priority |
|---|---|---|---|---|---|
| Home | `/` | `/en/` | Say what GRAM is; give hours/location; route to menu | Menu, Find us | P0 |
| Menu | `/menu` | `/en/menu` | Full drink and food list | Navigate | P0 |
| Events | `/udalosti` | `/en/events` | Upcoming and past events, collabs | Share / Instagram | P1 |
| Contact | `/kontakt` | `/en/contact` | Hours, address, map link, phone, email, social | Call, Navigate | P0 |
| About | `/o-nas` | `/en/about` | Story, team, suppliers (needs owner input) | Menu | P2 |
| Privacy | `/ochrana-udajov` | `/en/privacy` | Data processing info | n/a | P0 |
| 404 | `/404` | n/a | Recover lost visitors | Home, Menu | P0 |

## 3. Navigation

### Header (all pages)
`[GRAM logo]` · Menu · Udalosti/Events · Kontakt/Contact · `SK | EN`
- Logo links to the home page of the current language.
- Active page indicated by underline and `aria-current="page"`.
- Mobile: hamburger; plus **bottom action bar** (Menu · Navigovať/Directions · Zavolať/Call) [P1].

### Footer (all pages)
- Logo, address, hours table, phone, email
- Instagram (and Facebook if it exists) [TBD]
- Language switch
- Privacy link; legal entity line [TBD]

### Optional announcement bar [P2]
Top strip for temporary hours or a upcoming event, linking to `/udalosti`.

## 4. Home page sections (top to bottom)
| # | Section | Content | Source/notes |
|---|---|---|---|
| 1 | **Hero** | Logo, descriptor ("Espresso bar v Trnave"), **open/closed status**, buttons: Menu, Navigovať | Burgundy block; one strong photo (drink on oak stool) |
| 2 | **Hours and address strip** | Today's hours, address, Navigate | Mobile first screen must include this |
| 3 | **What we serve** | 3–4 highlight drinks with photos and one-line descriptions, link to full menu | Based on observed drinks (layered iced latte, espresso, matcha, latte art); confirm final names |
| 4 | **Short intro** | 2–3 sentences about GRAM | Copy [TBD] from owners |
| 5 | **Events teaser** | Next event card, or latest past event | Collab: Punková Kuchyňa × GRAM Dough |
| 6 | **Photo strip** | 6–8 self-hosted images linking to Instagram | Natural-light, oak/steel imagery |
| 7 | **Partners / suppliers** | Roaster, matcha supplier etc. | Only if owners agree; [TBD] |
| 8 | **Find us** | Address, hours table, map link, phone, email | Same data as Contact |
| 9 | **Footer** | See section 3 | |

## 5. Other pages: sections

### Menu (`/menu`)
1. Intro line + "Last updated" date
2. Category anchors (sticky chips): e.g. Espresso · Milk drinks · Matcha · Iced · Food [TBD final categories]
3. Item list (name, description, price, optional tags)
4. Notes (allergens link, price disclaimer)
5. PDF download link (optional)
6. CTA: Navigate

### Events (`/udalosti`)
1. Intro line
2. **Coming up:** event cards (date, time, partner, description, link)
3. **Past events:** archive cards with photo
4. Empty state: "Zatiaľ nič nechystáme. Pozri Instagram."
5. Link to Instagram

### Contact (`/kontakt`)
1. Hours table with today highlighted + special-hours notice
2. Address + "Navigovať" (Google Maps link; no embedded map in MVP)
3. Phone (tap to call), email, Instagram
4. Practical info strip (payment, seating, Wi-Fi, pets, plant milks) **only once confirmed**
5. Short "how to find us" note [TBD]

### About (`/o-nas`) [P2]
Story, team, suppliers, values. Requires owner-supplied content; see `prd.md` section 7.

### Privacy (`/ochrana-udajov`)
Operator identity, what data is processed (analytics only, server logs), rights, contact. Must match the real setup.

### 404
Short wry message, buttons to Home and Menu.

## 6. Data model (content files)
| File | Contains | Used by |
|---|---|---|
| `info.json` | Name, address, phone, email, social URLs, weekly hours, special-hours overrides, Google Maps URL | Header, footer, status, Contact, JSON-LD |
| `menu.json` | Categories → items (id, name SK/EN, description SK/EN, price, tags, available) | Menu page, home highlights |
| `events.json` | Events (id, slug, title SK/EN, start, end, partner, description, image, links) | Events page, home teaser, Event JSON-LD |
| `i18n/sk.json`, `i18n/en.json` | UI strings from `voice-and-tone.md` | All pages |

Hours are defined **once** in `info.json`; never retype them in page text or schema.

## 7. Cross-linking rules
- Home → Menu and Contact from hero and footer.
- Menu → Contact (Navigate).
- Events → partner links and Instagram.
- Language switch goes to the equivalent page, not the home page.
- Every page ≤ 3 clicks from home.

## 8. URL and redirect rules
- Trailing slash policy: choose one (no trailing slash recommended) and 301 the other.
- Redirect `www` ↔ apex (single canonical host) [domain TBD].
- If a page is renamed, add a 301 from the old path.

## 9. Content checklist before build
- [ ] Final menu (SK/EN) with prices
- [ ] Hours confirmed + holiday overrides
- [ ] Address, phone, email, Maps link
- [ ] 8–12 owned photos with alt texts
- [ ] Event details (past and upcoming)
- [ ] Owner-approved intro copy (SK/EN)
- [ ] Legal entity details for footer and privacy

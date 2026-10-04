# GRAM Website: Product Requirements Document (PRD)

- **Status:** Draft v0.1, 4 Oct 2026
- **Inputs:** `brand.md`, `competitor.md`
- **Related:** `user-personas.md` · `design-system.md` · `voice-and-tone.md` · `site-map.md` · `tech-stack.md` · `seo-and-meta.md`
- **Tags:** **[ASSUMPTION]** = proposed, needs owner confirmation. **[TBD]** = information missing, do not invent.

---

## 1. Summary
Build a fast, bilingual (SK/EN), mobile-first website for **GRAM**, a newly opened espresso bar at Štefánikova 42, Trnava. The site's job is to turn "I saw GRAM on Instagram / Google Maps" into "I know when it's open, where it is, what they serve, and I'm walking in."

## 2. Problem
- GRAM currently has **no website** (none found in search, none linked in the Instagram bio). All practical info lives on Instagram, which is hard to search, scroll and trust for hours and menu.
- Local competitors (Kavino, Red Fawn, Ripit) all have sites with hours, maps and story. None offers English and only one publishes a menu (as a PDF). See `competitor.md`.
- Searches like "espresso bar Trnava" can't surface GRAM without a crawlable site and a Google Business Profile.
- The name "GRAM" is generic. Other cafés called GRAM exist elsewhere in Czechia, so GRAM needs its own clearly branded, indexable presence.

## 3. Goals
| # | Goal | How the site serves it |
|---|---|---|
| G1 | Be findable locally | SEO + LocalBusiness data + Google Business Profile link (`seo-and-meta.md`) |
| G2 | Answer practical questions in <10 seconds | Open/closed status, hours, address, map, menu above the fold on mobile |
| G3 | Express the GRAM brand | Burgundy/grey system, logo, photography rules (`design-system.md`, `brand.md`) |
| G4 | Promote events and collabs | Events page and home teaser (e.g. Punková Kuchyňa × GRAM Dough) |
| G5 | Stay easy for owners to maintain | Content in simple data files; no backend; hours defined once |

### Success metrics (proposed targets, set baselines after launch) [ASSUMPTION]
| Metric | Target |
|---|---|
| Lighthouse (mobile): Performance / Accessibility / Best Practices / SEO | ≥ 90 each |
| Largest Contentful Paint on mid-range mobile, 4G | ≤ 2.5 s |
| Branded search ("GRAM Trnava") ranks the site in the top 3 | within 4–8 weeks of launch + Business Profile set up |
| Tracked actions: "Directions", "Menu view", "Call" clicks | tracked from day 1 (needs an analytics tool with custom events) |
| Time to find opening hours on a phone | ≤ 1 tap / visible without scrolling |

## 4. Users
Hypotheses, not research. Full profiles in `user-personas.md`:
1. **Morning Regular**: quick weekday espresso, needs hours and speed.
2. **Aesthetic Explorer**: Instagram-driven, wants the menu and vibe (matcha, iced and layered drinks).
3. **Visiting Coffee Seeker**: out-of-town, searches in English.
4. **Event Follower**: wants dates and details of collabs and pop-ups.
5. **Owner-Operator** (admin): must update hours, menu and events without a developer.

## 5. MVP scope

### Functional requirements
| ID | Feature | Priority | Acceptance criteria |
|---|---|---|---|
| F1 | **Home page** | P0 | Hero with logo, one-line descriptor, today's status, and two CTAs ("Menu", "Find us"). Sections per `site-map.md`. |
| F2 | **Open/closed status** | P0 | Shows "Open until HH:MM" or "Closed, opens …" computed in the Europe/Bratislava time zone from the single hours source; falls back to the static hours table if JS is off. Respects special-hours overrides. |
| F3 | **Hours and location** | P0 | Weekly hours table (Mon–Fri 7:30–17:00, Sat 7:30–18:00, Sun 10:00–18:00; verify before launch), address, "Navigate" button to Google Maps. Today's row highlighted. |
| F4 | **Menu page (HTML)** | P0 | Categories, item names, short descriptions, prices if provided. Dietary tags only if confirmed. "Last updated" date. Optional PDF download. |
| F5 | **Events page** | P1 | Upcoming and past events with date, time, partner, short description. Event schema markup. Past events archived, not deleted. |
| F6 | **Gallery / social strip** | P1 | Self-hosted, optimized photo grid linking to Instagram. No third-party embed. |
| F7 | **Contact** | P0 | Phone (click-to-call), email, Instagram link, address. No form in MVP. |
| F8 | **Language switch SK/EN** | P0 | Slovak default at `/`, English at `/en/`. Switcher on every page, `hreflang` set. |
| F9 | **SEO and metadata** | P0 | Per `seo-and-meta.md`: titles, descriptions, OG image, JSON-LD, sitemap, robots. |
| F10 | **Analytics** | P1 | Privacy-friendly, cookie-free tool; events for directions, call, menu. |
| F11 | **Accessibility** | P0 | WCAG 2.2 AA: contrast, keyboard use, focus states, alt text, `lang` attributes, 44 px tap targets. |
| F12 | **404 and privacy pages** | P0 | Branded 404 with links home/menu; privacy page matching real data processing. |
| F13 | **Mobile sticky action bar** | P1 | Bottom bar with Menu / Directions / Call (pattern from Kavino). |
| F14 | **Announcement bar** | P2 | Optional top strip for events or temporary hours (pattern from Ripit). |

### Content in scope
Static: home, menu, events, contact, privacy, 404, in two languages.

## 6. Non-goals (explicitly NOT in MVP)
- Online shop, beans or merchandise sales, payments, delivery integrations
- Table reservations or a booking engine (click-to-call only)
- User accounts, loyalty, discount codes
- Blog or news feed
- Headless CMS or admin dashboard (content edited in files; revisit in Phase 2)
- Wholesale / B2B pages
- Embedded Instagram feed or third-party widgets that set cookies
- More than two languages

## 7. Content and asset dependencies (from the owners)
| Item | Needed for | Status |
|---|---|---|
| Domain name | Hosting, SEO, JSON-LD | [TBD] |
| Phone number and email | Contact, JSON-LD | [TBD] |
| Final menu, prices, dietary info | F4 | [TBD] |
| Coffee roaster / matcha supplier names (if they want to name them) | Partner mention, trust | [TBD] |
| Logo files (SVG), exact brand hex codes, fonts | Design | [TBD], current values are approximations |
| High-resolution photos with usage rights and credits | Hero, gallery, OG image | [TBD] |
| Opening hours confirmation + holiday schedule | F2, F3 | Hours seen on Instagram 4 Oct 2026; confirm |
| Legal entity details (name, address, company ID) | Footer, privacy | [TBD] |
| Wi-Fi, seating, card payments, pet policy, plant milks, food/pastries | FAQ/info strip | [TBD], do not state until confirmed |
| Google Business Profile access | Local SEO | [TBD] |

## 8. Non-functional requirements
- **Performance:** static site; ≤ 100 KB gzipped HTML+CSS+JS per page (excluding images); responsive AVIF/WebP images; fonts self-hosted.
- **Accessibility:** WCAG 2.2 AA.
- **Browser support:** last 2 versions of Chrome, Safari, Firefox, Edge; iOS Safari 16+.
- **Privacy:** no non-essential cookies in MVP; no third-party trackers. Not legal advice, confirm GDPR/ePrivacy obligations with the owners' advisor.
- **Reliability:** static hosting, no server; deploy through Git.
- **Maintainability:** hours, menu and events live in data files, one source of truth each.

## 9. Constraints and assumptions
- Static-site architecture and free/low-cost hosting (GitHub Pages + Cloudflare) per `tech-stack.md` [ASSUMPTION].
- Visual tokens are provisional until the owners supply brand files.
- Slovak copy needs review by a native speaker before launch.
- Hours and address taken from the Instagram profile as of 4 Oct 2026.

## 10. Risks
| Risk | Mitigation |
|---|---|
| Menu/prices change often and the site goes stale | Single `menu` data file, "last updated" date, simple edit workflow |
| Owners don't have time to update | Keep MVP small; ship hours/menu/events only |
| Brand assets approximate | Get logo SVG + brand colors before final design |
| Name collisions ("GRAM" is generic) | Always pair with "Trnava"/"espresso bar" in titles, schema, Business Profile |
| Photos without rights | Confirm ownership/credits before use |
| Wrong hours shown on holidays | Special-hours override in data file |

## 11. Open questions
1. What domain should the site use?
2. Which public phone number and email should appear?
3. Is English required at launch or a fast follow?
4. Are pizza/cocktails (GRAM Dough event) a one-off or recurring?
5. Do the owners want to edit content themselves, and how (Git, CMS, or send changes to a developer)?
6. Is a Google Business Profile already claimed?
7. Which analytics events matter to the owners?

## 12. Phasing
| Phase | Scope |
|---|---|
| 0: Prerequisites | Collect items in section 7; claim Google Business Profile |
| 1: MVP | F1–F4, F7–F9, F11, F12 (P0), then F5, F6, F10, F13 |
| 2: Growth | About/story page, newsletter signup, simple CMS, event detail pages, optional contact form |
| 3: Optional | Retail (beans/gift boxes) only if the owners decide; see `competitor.md` section 4 |

## 13. Definition of done (MVP)
- All P0 requirements pass acceptance criteria on mobile and desktop, in SK and EN.
- Lighthouse targets met; axe/accessibility checks clean.
- Hours, address, phone verified against reality by an owner.
- Sitemap submitted to Google Search Console; Business Profile links to the site.
- Owner has a one-page guide to edit hours, menu and events.

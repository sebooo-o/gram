# GRAM: SEO & Meta (Search and Discovery)

> **Status:** Draft v0.1. Keywords are **hypotheses**; no search-volume data was available. Validate with Google Search Console and Keyword Planner after launch.
> Domain, phone, email, geo-coordinates and menu URL are [TBD]. Never invent them.
> Address and hours: from the Instagram profile, 4 Oct 2026. Verify before publishing.

---

## 1. Strategy in brief
1. **Win branded and hyper-local searches first** ("GRAM Trnava", "espresso bar Trnava").
2. **"GRAM" is a generic word** and other cafés share it (e.g. GRAM Restaurant in Prague, Gram kafe in Trest). Always pair it with **"Trnava"** and **"espresso bar"** in titles, schema and listings.
3. **Google Business Profile matters as much as the website.** Most "café near me" traffic goes through Maps.
4. **Bilingual SEO:** Slovak is primary; English captures visitors. Each language has its own URLs, titles and `hreflang`.
5. Keep structured data and visible content consistent (hours, address, phone).

## 2. Keywords (hypotheses)
| Intent | Slovak | English | Target page |
|---|---|---|---|
| Brand | GRAM Trnava, gram.trnava, GRAM espresso bar | GRAM Trnava, GRAM espresso bar | Home |
| Core local | espresso bar Trnava, kaviareň Trnava, káva Trnava | espresso bar Trnava, coffee Trnava, café Trnava | Home |
| Quality | výberová káva Trnava | specialty coffee Trnava | Home, Menu |
| Product | matcha Trnava, ľadová káva Trnava | matcha Trnava, iced coffee Trnava | Menu |
| Street | kaviareň Štefánikova Trnava | café Štefánikova street Trnava | Contact |
| Practical | otváracie hodiny, káva v nedeľu Trnava | opening hours, coffee Sunday Trnava | Contact |
| Events | udalosti kaviareň Trnava, pizza a káva Trnava | events Trnava coffee | Events |
Avoid claiming "best"/"najlepšia" in copy.

## 3. Page titles and descriptions
Limits: title ≤ 60 characters, description ≤ 155. **Replace menu wording once the menu is final.**

### Slovak
| Page | `<title>` | Meta description |
|---|---|---|
| Home | GRAM – espresso bar v Trnave \| Štefánikova 42 | Espresso bar na Štefánikovej 42 v Trnave. Výberová káva, matcha a ľadové drinky. Po–So od 7:30, v nedeľu od 10:00. |
| Menu | Menu \| GRAM espresso bar Trnava | Pozri si menu GRAM espresso baru v Trnave: espresso, mliečne drinky, matcha a ľadové nápoje. |
| Events | Udalosti \| GRAM Trnava | Spolupráce, pop-upy a špeciálne dni v GRAM espresso bare v Trnave. |
| Contact | Kontakt a otváracie hodiny \| GRAM Trnava | Štefánikova 42, Trnava. Po–Pia 7:30–17:00, So 7:30–18:00, Ne 10:00–18:00. |
| 404 | Stránka sa nenašla \| GRAM | (noindex) |

### English
| Page | `<title>` | Meta description |
|---|---|---|
| Home | GRAM – Espresso Bar in Trnava \| Štefánikova 42 | Espresso bar at Štefánikova 42, Trnava. Specialty coffee, matcha and iced drinks. Open Mon–Sat from 7:30, Sun from 10:00. |
| Menu | Menu \| GRAM Espresso Bar Trnava | See the GRAM espresso bar menu in Trnava: espresso, milk drinks, matcha and iced drinks. |
| Events | Events \| GRAM Trnava | Collabs, pop-ups and special days at GRAM espresso bar in Trnava. |
| Contact | Contact & Opening Hours \| GRAM Trnava | Štefánikova 42, Trnava. Mon–Fri 7:30–17:00, Sat 7:30–18:00, Sun 10:00–18:00. |

(Descriptions state hours; keep them in sync with `info.json`, or leave hours out and rely on schema.)

## 4. Technical SEO checklist
| Item | Rule |
|---|---|
| Canonical | Each page has `<link rel="canonical">` to its own absolute URL |
| `hreflang` | `sk`, `en` and `x-default` (→ Slovak) on every page pair |
| `<html lang>` | `sk` or `en` per page |
| Headings | One `<h1>` per page; logical `<h2>`/`<h3>`; the H1 includes "espresso bar" + "Trnava" on Home |
| Sitemap | `/sitemap-index.xml` (Astro sitemap plugin), submitted to Google Search Console and Bing Webmaster Tools |
| robots.txt | Allow all; point to the sitemap; no `Disallow` for CSS/JS |
| 404 | Returns a real 404 status and `noindex` |
| URLs | Lowercase, ASCII, no trailing slash, one canonical host (www vs apex) |
| Images | Descriptive file names, `alt` per language, `width`/`height`, AVIF/WebP |
| Performance | Core Web Vitals in the green (see `tech-stack.md`) |
| Mobile | Fully responsive, tap-to-call links `tel:` |
| Content | Menu and hours as real text, not images or PDF only |
| Internal links | Home ↔ Menu ↔ Contact; language switch links to the equivalent page |

## 5. Open Graph and social previews
```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="GRAM espresso bar">
<meta property="og:title" content="{page title}">
<meta property="og:description" content="{page description}">
<meta property="og:url" content="{canonical URL}">
<meta property="og:image" content="https://<DOMAIN-TBD>/og/home.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="GRAM espresso bar, Trnava">
<meta property="og:locale" content="sk_SK">
<meta property="og:locale:alternate" content="en_US">
<meta name="twitter:card" content="summary_large_image">
```
| Spec | Value |
|---|---|
| Size | 1200 × 630 px, JPG/PNG, < 300 KB |
| Default design | Burgundy `#5A1A27` background, white GRAM wordmark (SVG), small line "Espresso bar · Trnava" |
| Variants | Home, Menu (drink photo), Events (event poster, as in the collab style) |
| Safe area | Keep key content within the central 1000 × 500 px |
| Language | Separate image/text per language if text appears in the image |
Also provide: `favicon.svg`, `favicon.ico`, 180×180 `apple-touch-icon.png`, `theme-color` = burgundy.

## 6. Structured data (JSON-LD)

### 6.1 LocalBusiness (every page; generated from `info.json`)
Template; replace the `TBD` values and verify the postal code before publishing.
```json
{
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "GRAM",
  "alternateName": "GRAM espresso bar",
  "url": "https://<DOMAIN-TBD>/",
  "image": "https://<DOMAIN-TBD>/og/home.jpg",
  "logo": "https://<DOMAIN-TBD>/logo.png",
  "description": "Espresso bar in Trnava.",
  "telephone": "TBD",
  "email": "TBD",
  "priceRange": "TBD",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Štefánikova 42",
    "addressLocality": "Trnava",
    "postalCode": "917 01",
    "addressCountry": "SK"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "TBD", "longitude": "TBD" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "07:30", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday", "opens": "07:30", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday", "opens": "10:00", "closes": "18:00" }
  ],
  "hasMenu": "https://<DOMAIN-TBD>/menu",
  "sameAs": ["https://www.instagram.com/gram.trnava/"]
}
```
Notes: the postal code `917 01` is typical for central Trnava but **not verified for this address**. Add Facebook/Google Maps to `sameAs` if they exist. Remove any property whose value is still `TBD`; don't ship placeholders.

### 6.2 Event (each event on `/udalosti`)
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Punková Kuchyňa × GRAM Dough",
  "startDate": "{YYYY}-09-19T14:00+02:00",
  "endDate": "{YYYY}-09-19T20:00+02:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": { "@type": "Place", "name": "GRAM",
    "address": { "@type": "PostalAddress", "streetAddress": "Štefánikova 42",
                 "addressLocality": "Trnava", "addressCountry": "SK" } },
  "description": "Pizza, specialty coffee and signature cocktails.",
  "image": ["https://<DOMAIN-TBD>/og/events.jpg"]
}
```
The poster shows "19.9." with no year and times 14:00–20:00 [from `brand.md`]; the year must be confirmed, and the event location is assumed to be GRAM, to be confirmed.

### 6.3 Others
- `BreadcrumbList` on inner pages.
- `WebSite` with `inLanguage`.
- Optional `Menu`/`MenuItem` once the final menu exists.
Validate with the Google Rich Results Test and the Schema.org validator.

## 7. Local SEO
| Action | Detail |
|---|---|
| **Google Business Profile** | Claim/verify; primary category "Coffee shop" (or "Espresso bar" if offered); exact hours incl. special days; address; phone; website link (with UTM e.g. `?utm_source=google&utm_medium=gbp`); menu link; 10+ own photos; attributes only if true |
| **NAP consistency** | Name "GRAM", Address "Štefánikova 42, Trnava", Phone identical on the website, Instagram bio, Facebook, Google, and directories |
| **Directories to check** | Tripadvisor, Foursquare, Restaurantguru, Slovak business directories (e.g. Azet, Zlaté stránky/Firmy.sk), coffee-guide sites; these sites already list Trnava cafés |
| **Reviews** | Encourage Google reviews (QR code at the counter linking to the review form); respond to every review in the language used |
| **Instagram** | Put the website URL in the bio; add the Google Maps location tag to posts |
| **Local links** | Collab partners (e.g. Punková Kuchyňa), city event listings, local blogs/guides |

## 8. Content ideas (post-MVP)
- FAQ block on Contact (payment, seating, plant milk) once facts are confirmed.
- Event pages per collab with photo recap (fresh, indexable content).
- A short "about" page with owner story, partners and suppliers (helps trust and links).

## 9. Measurement
| Tool | Track |
|---|---|
| Google Search Console | Queries, impressions, clicks, indexing, hreflang errors |
| Google Business Profile Insights | Searches, direction requests, calls, website clicks |
| Site analytics (cookie-free) | Page views, language split, events: Directions / Call / Menu |
| Bing Webmaster Tools | Index coverage |
Review monthly for the first 3 months; refine titles and keywords from real queries.

## 10. Pre-launch checklist
- [ ] Domain live over HTTPS, single canonical host
- [ ] Titles/descriptions set for every page in SK and EN
- [ ] `hreflang`, canonical, sitemap, robots.txt verified
- [ ] OG images present and previewed (Facebook Sharing Debugger, LinkedIn Inspector, messaging apps)
- [ ] JSON-LD valid; no `TBD` values left; hours match the Business Profile
- [ ] Alt texts in both languages
- [ ] Lighthouse SEO ≥ 90 on mobile
- [ ] Search Console and Bing verified; sitemap submitted
- [ ] Google Business Profile linked to the live site
- [ ] Website URL added to Instagram bio

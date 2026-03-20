# CLAUDE.md — Shaadi Abroad

> Complete project reference. Updated as changes are made.

---

## What Is This

**Shaadi Abroad** is a premium Indian destination wedding company website targeting Canadian couples. Full-stack Next.js web app with marketing site, inquiry system, admin CRM, client dashboard, blog, gallery, quiz, and comprehensive content strategy.

**Owner:** Lucky (Pavc1996)
**GitHub:** https://github.com/pavc1996/shaadi-abroad
**Brand:** Shaadi Abroad — *"Your Dream Indian Wedding, Beyond Borders."*
**Local dev:** `npm run dev` → http://localhost:3000
**Build status:** ✅ Clean (22 pages, zero errors)

---

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS (custom brand palette)
- **Animation:** Framer Motion
- **Components:** shadcn/ui + Radix UI
- **Database:** SQLite (better-sqlite3), auto-seeds on first run
- **Auth:** Cookie-based admin (password: `shaadi2026`)

---

## Brand System

| Color | Hex | Usage |
|-------|-----|-------|
| Ivory | #FDFAF6 | Page background |
| Champagne | #F5E6C8 | Borders, dividers |
| Deep Maroon | #6B1A2A | Primary brand, CTAs |
| Muted Gold | #C9A84C | Accent, highlights |
| Charcoal | #1C1C1E | Text, dark sections |
| Soft Beige | #F0EAE0 | Section backgrounds |

**Fonts:** Playfair Display (headings) + Inter (body)

---

## All Pages (22)

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Homepage — 11 sections (hero carousel, services, destinations, packages, testimonials, gallery, FAQ, CTA) |
| `/about` | Static | Company story, team (4 members), values, stats |
| `/destinations` | Static | 6 destination cards grid |
| `/destinations/[slug]` | SSG | Individual destination pages (6 total) with venues, budget, travel notes, itinerary |
| `/packages` | Static | 4 tiers (Signature/Luxe/Royal/Bespoke) + comparison table |
| `/process` | Static | 5-phase planning process with timeline |
| `/faq` | Static | 15 FAQs across 5 categories |
| `/contact` | Client | Contact info + quick form |
| `/inquire` | Client | Multi-step inquiry form → saves to DB |
| `/admin` | Client | Admin CRM pipeline dashboard (password protected) |
| `/dashboard` | Client | Client wedding dashboard (demo mode) |
| `/blog` | Dynamic | Blog listing from DB, lead magnet download section |
| `/blog/[slug]` | Dynamic | Individual blog posts from DB |
| `/gallery` | Static | Photo gallery by destination + masonry grid |
| `/real-weddings` | Static | 3 full case studies with stories, photos, details |
| `/quiz` | Client | 8-question interactive destination matcher |
| `/venues` | Client | Wedding Venues & Resorts — worldwide directory of 30+ curated venues across 12 countries and 4 regions with Indian wedding details |
| `/vendors` | Client | Vendor partnership info + application form |
| `/careers` | Static | 3 open positions + company culture |
| `/privacy` | Static | Privacy policy (PIPEDA/CASL compliant) |
| `/terms` | Static | Terms of service |

---

## Destinations

| Destination | Slug | Budget | Season | Guests |
|-------------|------|--------|--------|--------|
| Cancun & Riviera Maya 🇲🇽 | cancun-riviera-maya | $80K–$250K | Nov–Apr | 100–250 |
| Punta Cana 🇩🇴 | punta-cana | $70K–$200K | Dec–May | 75–175 |
| Jamaica 🇯🇲 | jamaica | $60K–$150K | Dec–Apr | 50–120 |
| Italy 🇮🇹 | italy | $150K–$500K | May–Oct | 50–150 |
| Dubai 🇦🇪 | dubai | $100K–$400K | Oct–Mar | 100–300 |
| Thailand 🇹🇭 | thailand | $60K–$200K | Nov–Apr | 75–200 |

---

## Packages

| Package | Price | Guests |
|---------|-------|--------|
| Signature | From $8K CAD | 50–100 |
| Luxe | From $18K CAD | 100–175 |
| Royal | From $35K CAD | 150–300+ |
| Bespoke | Custom | Any |

---

## Database (SQLite — shaadi-abroad.db)

Auto-creates and seeds on first run.

**Tables:** inquiries, testimonials, blog_posts, newsletter_subscribers

**Seed data:** 5 inquiries, 3 testimonials, 3 blog posts (full articles)

**Pipeline stages:** New → Qualified → Consultation Booked → Proposal Sent → Won → Lost → Active Client

---

## API Routes

| Method | Route | Purpose |
|--------|-------|---------|
| POST | /api/inquiries | Submit inquiry |
| GET | /api/inquiries | Fetch all (admin auth) |
| POST | /api/admin | Login + status updates |
| POST | /api/newsletter | Subscribe email |

---

## Content Files (public/)

| File | Purpose |
|------|---------|
| social-media-pack.md | Bios, 30 post ideas, 10 captions, 10 video ideas, hashtags, launch plan |
| seo-content.md | Keywords (3 tiers), page SEO strategy, content calendar, local SEO plan |
| email-templates.md | 6 templates (inquiry confirm, booking, follow-up, proposal, welcome, newsletter) |
| brand-identity.md | Colors, typography, voice, logo direction, messaging pillars |
| launch-checklist.md | Technical, content, business, social, marketing checklists |
| sitemap.xml | Full XML sitemap (22 URLs) |

---

## Key Features

- **Hero:** Full-screen image carousel with 3 rotating images, gold accent line, animated text
- **Navbar:** Transparent on homepage, solid on scroll, mobile hamburger menu, top bar with contact info
- **Footer:** Full footer with destination links, service links, social icons, newsletter
- **Quiz:** 8-question interactive destination matcher with scoring algorithm and personalized results
- **Blog:** DB-driven, category tags, featured images, related posts, lead magnet CTA
- **Gallery:** Destination-organized sections + masonry all-photos grid
- **Real Weddings:** 3 full case studies with hero images, stories, photo galleries, details sidebar
- **Admin:** Password-protected pipeline view with stats
- **SEO:** Schema.org, OG tags, Twitter cards, meta descriptions on all pages

---

## Running

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Production build
```

---

## Deploy

```bash
git push origin main
# Connect repo to Vercel → auto-deploys
# Note: SQLite won't persist on Vercel serverless — migrate to Neon/PlanetScale for production
```

---

## Resort & Venue Database

All venue data is baked into `/app/venues/VenuesClient.tsx` as a typed `regions` array. 32 resorts across 4 regions:

### Caribbean
| Resort | Location | Capacity | Indian Wedding Rating |
|--------|----------|----------|-----------------------|
| Excellence Playa Mujeres | Cancun, Mexico | 300 | ★★★★★ — on-site Basmati Indian restaurant |
| Secrets Maroma Beach | Riviera Maya, Mexico | 250 | ★★★★☆ — named South Asian package |
| Dreams Playa Mujeres | Cancun, Mexico | 400 | ★★★★☆ — "Dulha & Dulhan" package, over-water platform |
| Barceló Maya Palace | Riviera Maya, Mexico | 1,000 | ★★★★★ — 3 Indian packages, resident henna artist |
| Hard Rock Punta Cana | Dominican Republic | 1,000 | ★★★★★ — permanent Indian Wedding Specialists |
| Excellence El Carmen | Dominican Republic | 200 | ★★★★☆ — boutique ultra-luxury |
| Barceló Bávaro Palace | Dominican Republic | 800 | ★★★★☆ — large capacity, Barceló Indian expertise |
| Moon Palace Jamaica | Jamaica | 400 | ★★★★★ — resident Indian chef |
| Round Hill Hotel | Jamaica | 120 | ★★★★☆ — full resort buyout, 110 acres |
| Sandals Montego Bay | Jamaica | 60 | ★★★☆☆ — couples only, small ceremonies |
| Atlantis Paradise Island | Bahamas | 600 | ★★★★★ — "Pyaar Atlantis" dedicated Indian program |

### Europe
| Resort | Location | Capacity | Indian Wedding Rating |
|--------|----------|----------|-----------------------|
| Villa Cimbrone | Ravello, Italy | 100 | ★★★★☆ — Terrace of Infinity, from €15K venue |
| Belmond Hotel Caruso | Ravello, Italy | 120 | ★★★★☆ — infinity pool terrace, from €20K |
| Borgo Egnazia | Puglia, Italy | 350 | ★★★★★ — Europe's #1 Indian wedding resort, Agni provisions |
| Canaves Oia Epitome | Santorini, Greece | 60 | ★★★★☆ — Caldera views, symbolic only |
| Mystique Santorini | Santorini, Greece | 80 | ★★★★☆ — volcanic cliff setting |
| Katikies Hotel | Santorini, Greece | 70 | ★★★★☆ — iconic Condé Nast property |

### Middle East & Asia
| Resort | Location | Capacity | Indian Wedding Rating |
|--------|----------|----------|-----------------------|
| Atlantis The Palm | Dubai, UAE | 1,000 | ★★★★★ — dedicated Indian team, transparent pricing |
| One&Only Royal Mirage | Dubai, UAE | 700 | ★★★★★ — Moorish palace, 2,500sqm event space |
| Waldorf Astoria Dubai | Dubai, UAE | 500 | ★★★★☆ — Indian-inspired ballroom, per-pax pricing |
| Soneva Jani | Maldives | 40 | ★★★☆☆ — overwater, intimate/symbolic |
| Gili Lankanfushi | Maldives | 50 | ★★★☆☆ — Secret Wedding from $13,489 |
| Four Seasons Jimbaran | Bali | 250 | ★★★★★ — Hindu setting, fire ceremony-friendly |
| Alila Villas Uluwatu | Bali | 400 | ★★★★★ — full resort buyout, clifftop |
| Mandapa Ritz-Carlton | Ubud, Bali | 150 | ★★★★★ — 100-year-old Hindu temple on property |
| Amanpuri | Phuket, Thailand | 100 | ★★★★☆ — original Aman, $105K min spend |
| Four Seasons Koh Samui | Koh Samui, Thailand | 120 | ★★★★☆ — private island ceremony option |

### Indian Ocean
| Resort | Location | Capacity | Indian Wedding Rating |
|--------|----------|----------|-----------------------|
| One&Only Le Saint Géran | Mauritius | 200 | ★★★★★ — Michelin-starred Indian restaurant (Rasoi by Vineet) |
| Constance Belle Mare | Mauritius | 250 | ★★★★☆ — Indo-Mauritian culture, Mon–Fri only |

**Key insight:** Best resorts for fire ceremonies (Agni/Mangal Pheras): Borgo Egnazia (Italy), Barceló Maya Palace (Mexico), Hard Rock Punta Cana, Atlantis Dubai, Four Seasons Jimbaran, Mandapa Ritz-Carlton, Moon Palace Jamaica, Atlantis Bahamas.

---

## What's Left To Do

- [ ] Deploy to Vercel (need Vercel token)
- [ ] Migrate DB to Neon (Postgres) for production
- [ ] Real photos (replace Unsplash)
- [ ] Real team photos
- [ ] Logo design
- [ ] Custom domain (shaadiabroad.com)
- [ ] Email notifications on inquiry (Resend)
- [ ] Real NextAuth for client dashboard
- [ ] Stripe for deposits
- [ ] Google Analytics
- [ ] Google Search Console

---

*Last updated: 2026-03-20 EST*

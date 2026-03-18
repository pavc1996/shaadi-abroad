# CLAUDE.md — Shaadi Abroad

> Everything I need to know about this project. Updated as changes are made.

---

## What Is This

**Shaadi Abroad** is a premium Indian destination wedding company website targeting Canadian couples. Full-stack Next.js web app with a marketing site, inquiry system, admin CRM dashboard, and client dashboard.

**Owner:** Lucky (Pavc1996)
**Status:** Built, compiles clean. Ready for deployment.
**Brand:** Shaadi Abroad — *"Your Dream Indian Wedding, Beyond Borders."*
**GitHub:** https://github.com/pavc1996/shaadi-abroad
**Local dev:** `npm run dev` → http://localhost:3000

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (custom brand colors)
- **Animation:** Framer Motion
- **Components:** shadcn/ui + Radix UI
- **Database:** SQLite via `better-sqlite3`
- **Auth:** Cookie-based admin session (password: `shaadi2026`)
- **Deployment target:** Vercel

---

## Brand System

| Token | Value | Usage |
|-------|-------|-------|
| ivory | #FDFAF6 | Page background |
| champagne | #F5E6C8 | Borders, dividers |
| maroon | #6B1A2A | Primary brand color, CTAs |
| gold | #C9A84C | Accent, highlights |
| charcoal | #1C1C1E | Text, dark sections |
| beige | #F0EAE0 | Section backgrounds |

**Fonts:** Playfair Display (headings) + Inter (body)

---

## File Structure

```
shaadi-abroad/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout (fonts, Navbar, Footer, schema.org)
│   ├── globals.css
│   ├── about/page.tsx              # Company story, team, values
│   ├── contact/page.tsx            # Contact info + quick form
│   ├── destinations/
│   │   ├── page.tsx                # 6 destination cards grid
│   │   └── [slug]/page.tsx         # Individual destination pages
│   ├── faq/page.tsx                # 15 questions, 5 categories
│   ├── packages/page.tsx           # 4-tier packages + comparison table
│   ├── process/page.tsx            # 5-phase planning process
│   ├── inquire/
│   │   ├── page.tsx                # Inquiry page wrapper
│   │   └── InquiryForm.tsx         # Multi-step form (client component)
│   ├── admin/
│   │   ├── page.tsx                # Admin page wrapper
│   │   └── AdminDashboard.tsx      # Pipeline CRM (client component)
│   ├── dashboard/
│   │   ├── page.tsx                # Dashboard page wrapper
│   │   └── ClientDashboard.tsx     # Client dashboard (client component)
│   └── api/
│       ├── inquiries/route.ts      # POST (submit) + GET (admin fetch)
│       └── admin/route.ts          # Login + status update endpoints
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Sticky nav, mobile menu, transparent on hero
│   │   └── Footer.tsx              # Full footer with links, social, newsletter
│   ├── sections/                   # Homepage sections (one file each)
│   │   ├── Hero.tsx                # Full-screen image carousel, CTA
│   │   ├── ValueProposition.tsx    # 3 key differentiators
│   │   ├── FeaturedDestinations.tsx # 6 destination cards
│   │   ├── ServicesOverview.tsx    # 8 services
│   │   ├── WhyChooseUs.tsx         # Stats + reasons
│   │   ├── PlanningProcess.tsx     # 5-step process
│   │   ├── Packages.tsx            # 4 pricing tiers
│   │   ├── Testimonials.tsx        # 3 testimonials
│   │   ├── GalleryTeaser.tsx       # Gallery grid placeholder
│   │   ├── LeadCaptureCTA.tsx      # Conversion CTA section
│   │   └── Newsletter.tsx          # Email signup
│   └── ui/                         # shadcn components
├── lib/
│   ├── db.ts                       # SQLite connection, schema, seed data
│   ├── destinations.ts             # Destination data (shared between pages)
│   └── utils.ts                    # cn() helper
├── public/
│   └── social-media-pack.md        # Full social media strategy
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — 11 sections, hero carousel, all content |
| `/about` | Company story, founding, team (4 members), values, stats |
| `/destinations` | 6 destination cards with budget/guest info |
| `/destinations/cancun-riviera-maya` | Cancun & Riviera Maya deep dive |
| `/destinations/punta-cana` | Punta Cana detail page |
| `/destinations/jamaica` | Jamaica detail page |
| `/destinations/italy` | Italy detail page |
| `/destinations/dubai` | Dubai detail page |
| `/destinations/thailand` | Thailand detail page |
| `/packages` | 4 tiers: Signature ($8K), Luxe ($18K), Royal ($35K), Bespoke |
| `/process` | 5-phase planning timeline |
| `/faq` | 15 FAQs across 5 categories |
| `/contact` | Contact info + quick message form |
| `/inquire` | Multi-step inquiry form → saves to DB |
| `/admin` | Admin pipeline dashboard (password: shaadi2026) |
| `/dashboard` | Client dashboard (demo mode) |

---

## Database (SQLite)

File: `shaadi-abroad.db` (auto-created on first run, gitignored)

### Tables

**inquiries**
```sql
id, name, email, phone, province, wedding_date, guest_count,
destinations, budget_range, events, travel_support, notes,
status (New/Qualified/Consultation Booked/Proposal Sent/Won/Lost/Active Client),
created_at
```

**testimonials**
```sql
id, couple_name, location, destination, quote, wedding_date, featured, image_url
```

**blog_posts**
```sql
id, title, slug, excerpt, content, category, published, created_at
```

### Seed Data (auto-inserted on first run)
- 3 testimonials (Toronto/Riviera Maya, Vancouver/Italy, Calgary/Thailand)
- 3 blog posts (full content, published)
- 5 sample inquiries across different stages and provinces

---

## Admin Dashboard

**URL:** http://localhost:3000/admin
**Password:** `shaadi2026`

Features:
- Pipeline view (kanban-style columns by status)
- Stats: total leads, by stage
- Click inquiry to view full details
- Update lead status via dropdown
- Filter by status

---

## Client Dashboard

**URL:** http://localhost:3000/dashboard

Demo mode (no auth required for preview). Shows:
- Wedding overview card
- Pre-seeded task checklist (10 planning tasks)
- Budget tracker visual
- Event itinerary section
- Document upload placeholder
- Contact planner CTA

---

## Destinations

All 6 destinations with dedicated pages:

| Destination | Budget Range | Best Season | Guest Count |
|-------------|-------------|------------|-------------|
| Cancun/Riviera Maya 🇲🇽 | $80K–$250K CAD | Nov–Apr | 100–250 |
| Punta Cana 🇩🇴 | $70K–$200K CAD | Dec–May | 75–175 |
| Jamaica 🇯🇲 | $60K–$150K CAD | Dec–Apr | 50–120 |
| Italy 🇮🇹 | $150K–$500K CAD | May–Oct | 50–150 |
| Dubai 🇦🇪 | $100K–$400K CAD | Oct–Mar | 100–300 |
| Thailand 🇹🇭 | $60K–$200K CAD | Nov–Apr | 75–200 |

---

## Packages

| Package | Price | Guests | Key Feature |
|---------|-------|--------|-------------|
| Signature | From $8K CAD | 50–100 | Planning + 1 on-site day |
| Luxe | From $18K CAD | 100–175 | Full coordination + travel management |
| Royal | From $35K CAD | 150–300+ | Complete white-glove service |
| Bespoke | Custom | Any | Fully custom scope |

---

## API Endpoints

### POST /api/inquiries
Submit new inquiry. Body: `{name, email, phone, province, wedding_date, guest_count, destinations, budget_range, events, travel_support, notes}`

### GET /api/inquiries
Fetch all inquiries. Requires `admin_token` cookie = `shaadi2026_authenticated`

### POST /api/admin
Admin login: `{password: "shaadi2026"}` → sets `admin_token` cookie
Status update: `{action: "updateStatus", id, status}`

---

## Social Media Pack

File: `public/social-media-pack.md`

Includes:
- Platform bios (Instagram, TikTok, Pinterest, LinkedIn)
- 30 content post ideas
- 10 sample captions
- 10 short-form video ideas
- Hashtag strategy (50 hashtags)
- Content pillars
- Launch week plan

---

## SEO

- Metadata on every page (title, description, keywords, OG, Twitter cards)
- Schema.org Organization structured data in layout
- Clean URL structure
- Canonical URLs pointing to shaadiabroad.com
- Target keywords: "Indian destination wedding planner Canada", "Indian wedding Mexico Canada", etc.

---

## Git History

```
(initial build + all pages)
```

---

## Deployment

### Local Dev
```bash
npm install
npm run dev
# Open http://localhost:3000
```

### Vercel (recommended)
1. Push to GitHub (pavc1996/shaadi-abroad)
2. Connect repo at vercel.com
3. Add env var: `ADMIN_PASSWORD=shaadi2026`
4. Deploy — Vercel auto-detects Next.js

**Note:** SQLite doesn't persist on Vercel's serverless functions. For production, migrate DB to:
- PlanetScale (MySQL) or Neon (Postgres) — free tiers available
- Or use Vercel KV for simple data

For now, the local dev experience is fully functional.

---

## What Still Needs To Be Done

- [ ] Push to GitHub (pavc1996/shaadi-abroad)
- [ ] Deploy to Vercel
- [ ] Migrate DB to Neon/PlanetScale for production persistence
- [ ] Real email notifications on inquiry submission (Resend or SendGrid)
- [ ] Gallery page with real images
- [ ] Blog listing + individual post pages
- [ ] Real authentication for client dashboard (NextAuth)
- [ ] Custom domain (shaadiabroad.com)
- [ ] Google Analytics setup
- [ ] Contact form on /contact page (currently placeholder)
- [ ] Real photos (replace Unsplash placeholders)

---

*Last updated: 2026-03-18*

# Shaadi Abroad 🌺

> **Your Dream Indian Wedding, Beyond Borders.**

Canada's premier Indian destination wedding planning company. A full-stack Next.js web application for a luxury wedding brand targeting Canadian couples.

---

## Live Demo

- **Local:** http://localhost:3000
- **Admin:** http://localhost:3000/admin (password: `shaadi2026`)
- **Client Dashboard:** http://localhost:3000/dashboard

---

## Stack

- **Next.js 14** (App Router + TypeScript)
- **Tailwind CSS** (custom brand design system)
- **Framer Motion** (subtle animations)
- **SQLite** (better-sqlite3, auto-seeded)
- **shadcn/ui** (Radix UI components)

---

## Quick Start

```bash
npm install
npm run dev
```

That's it. The database auto-creates and seeds on first run.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage (11 sections) |
| `/destinations` | 6 destination overview |
| `/destinations/[slug]` | Individual destination pages |
| `/packages` | 4 wedding packages |
| `/process` | Planning journey |
| `/about` | Team & story |
| `/faq` | 15 FAQs |
| `/contact` | Contact |
| `/inquire` | Inquiry form |
| `/admin` | Admin CRM pipeline |
| `/dashboard` | Client dashboard |

---

## Brand

**Colors:** Ivory · Champagne · Deep Maroon · Muted Gold · Charcoal
**Fonts:** Playfair Display + Inter
**Vibe:** Luxury travel brand meets modern Indian wedding house

---

## Destinations

Cancun/Riviera Maya 🇲🇽 · Punta Cana 🇩🇴 · Jamaica 🇯🇲 · Italy 🇮🇹 · Dubai 🇦🇪 · Thailand 🇹🇭

---

## Packages

| Package | From |
|---------|------|
| Signature | $8,000 CAD |
| Luxe | $18,000 CAD |
| Royal | $35,000 CAD |
| Bespoke | Custom |

---

## Deploy to Vercel

```bash
# Push to GitHub, then connect at vercel.com
# Add env: ADMIN_PASSWORD=shaadi2026
```

> Note: SQLite doesn't persist on Vercel serverless. Migrate to Neon/PlanetScale for production.

---

Built by G for Lucky · Shaadi Abroad © 2026

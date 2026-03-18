import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const DB_PATH = path.join(process.cwd(), 'shaadi-abroad.db');

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
    db.pragma('foreign_keys = ON');
    initializeDb(db);
  }
  return db;
}

function initializeDb(database: Database.Database): void {
  // Create tables
  database.exec(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      province TEXT,
      wedding_date TEXT,
      guest_count INTEGER,
      destinations TEXT,
      budget_range TEXT,
      events TEXT,
      travel_support INTEGER DEFAULT 0,
      notes TEXT,
      status TEXT DEFAULT 'New',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS testimonials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      couple_name TEXT NOT NULL,
      location TEXT,
      destination TEXT,
      quote TEXT NOT NULL,
      wedding_date TEXT,
      featured INTEGER DEFAULT 0,
      image_url TEXT
    );

    CREATE TABLE IF NOT EXISTS blog_posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      excerpt TEXT,
      content TEXT,
      category TEXT,
      published INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Seed testimonials if empty
  const testimonialCount = database.prepare('SELECT COUNT(*) as count FROM testimonials').get() as { count: number };
  if (testimonialCount.count === 0) {
    const insertTestimonial = database.prepare(`
      INSERT INTO testimonials (couple_name, location, destination, quote, wedding_date, featured, image_url)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    insertTestimonial.run(
      'Priya & Arjun Sharma',
      'Toronto, Ontario',
      'Riviera Maya, Mexico',
      'Shaadi Abroad turned our dream into reality. From the moment we reached out, the team was impeccable — managing every detail from our 3-day celebration, coordinating our 180 guests flying in from Canada, India, and the UK, and ensuring every mandap flower and Mexican sunset aligned perfectly. Our families were blown away. Worth every penny.',
      'November 2024',
      1,
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=200&h=200&fit=crop&crop=face'
    );

    insertTestimonial.run(
      'Raveena & Kabir Malhotra',
      'Vancouver, British Columbia',
      'Amalfi Coast, Italy',
      'We always dreamed of an Italian wedding with all our Punjabi traditions intact. The Shaadi Abroad team made it look effortless — sourcing authentic Indian catering in Italy, arranging a local pandit, and creating a fusion experience that had our guests in tears of joy. The logistics alone would have overwhelmed us. We trusted them completely.',
      'June 2024',
      1,
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200&h=200&fit=crop&crop=face'
    );

    insertTestimonial.run(
      'Ananya & Dev Patel',
      'Calgary, Alberta',
      'Phuket, Thailand',
      'From our Mehndi on the beach to our Pheras at sunset, every moment was curated with love and professionalism. Shaadi Abroad handled our Thailand wedding so seamlessly that we actually got to enjoy every single moment. The team felt like family. We\'ve already referred three couples from our own sangeet!',
      'February 2024',
      1,
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=200&h=200&fit=crop&crop=face'
    );
  }

  // Seed blog posts if empty
  const blogCount = database.prepare('SELECT COUNT(*) as count FROM blog_posts').get() as { count: number };
  if (blogCount.count === 0) {
    const insertBlog = database.prepare(`
      INSERT INTO blog_posts (title, slug, excerpt, content, category, published)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    insertBlog.run(
      'Why More Canadian Indian Couples Are Choosing Destination Weddings in 2025',
      'canadian-indian-couples-destination-weddings-2025',
      'The trend is undeniable: South Asian couples from Toronto, Vancouver, and Calgary are increasingly trading large local banquet halls for breathtaking overseas celebrations. Here\'s why, and what to consider.',
      `The landscape of Indian weddings in Canada is shifting dramatically. While the lavish banquet hall celebration remains beloved, a growing number of South Asian couples are choosing to say "qubool hai" — or exchange jaimalas — against backdrops of Caribbean turquoise, Mediterranean blue, or Southeast Asian gold.

## The Numbers Tell the Story

In 2019, destination weddings accounted for roughly 12% of our client inquiries. By 2024, that number has climbed to over 60%. The reasons are multifaceted, deeply personal, and increasingly practical.

## Intimacy Without Compromise

The average large Indian wedding in Toronto involves 400–600 guests. The logistics alone — catering, décor, accommodation, transport — become a full-time job for the couple's families, often detracting from the actual celebration.

A destination wedding naturally curates the guest list to your closest 60–180 people. The result? More meaningful connections, deeper conversations at dinner, and a wedding where you actually spend time with every guest.

## Cost Efficiency at Scale

Counterintuitively, a destination wedding for 100 guests can cost comparable to — or less than — a local wedding for 400. When you're hosting fewer guests, you can invest more per head: better food, more stunning décor, higher-quality photography, and a venue that no Toronto banquet hall can replicate.

## The Multi-Day Celebration Advantage

Indian weddings are not one-day events. Mehndi, Sangeet, Wedding, Reception — these are four distinct celebrations. At home, coordinating these across multiple venues over multiple days is logistically exhausting.

At a destination? Your guests are already there. The resort becomes your personal wedding campus. Every event flows naturally into the next.

## What to Consider Before You Book

1. **Guest Visa Requirements**: Canada's multicultural guest list may include Indian passport holders who need visas for Mexico or Europe.
2. **Budget Transparency**: Work with a planner who provides all-in quotes, not just venue costs.
3. **Cultural Expertise**: Not every destination wedding planner understands the nuances of a 4-day Hindu or Sikh celebration.
4. **Travel Support**: Your elderly guests need hand-holding. Choose a company that manages travel coordination.

At Shaadi Abroad, we've managed every one of these considerations across 50+ celebrations in 6 countries. Book your free consultation to explore what's possible.`,
      'Trends',
      1
    );

    insertBlog.run(
      'The Ultimate Guide to Planning an Indian Wedding in Cancun or the Riviera Maya',
      'indian-wedding-cancun-riviera-maya-guide',
      'Mexico\'s Caribbean coast has become the top destination for Canadian Indian couples seeking a beach wedding with full cultural integrity. Here\'s everything you need to know.',
      `Mexico's Yucatan Peninsula has become the undisputed favourite destination for Canadian Indian couples, and for good reason. The combination of world-class resort infrastructure, stunning beaches, easy direct flights from Toronto, Vancouver, and Calgary, and vendor ecosystems that understand South Asian celebrations makes the Riviera Maya the gold standard.

## Why Mexico Works for Indian Weddings

**Logistics**: Direct flights from major Canadian cities make travel easy for both Canadian and international guests. Cancun International Airport handles charter groups with ease.

**Resort Infrastructure**: The mega-resorts of Cancun and the Riviera Maya — Dreams, Secrets, Barcelo, Iberostar, Hyatt Ziva, and more — have dedicated Indian wedding packages and experienced event teams.

**Outdoor Ceremony Spaces**: From beachfront terrazas to lush garden terraces and rooftop venues with Mayan ruins as backdrops, Mexico offers ceremony spaces that no indoor hall can match.

**Catering Flexibility**: With advance notice and the right planner, authentic Indian catering — including tandoor-cooked items, live chaat stations, and traditional sweets — is fully achievable.

## Top Venues for Indian Weddings

### Hyatt Ziva Cancun
The iconic rooftop venue with panoramic views of the Caribbean is one of the most photographed Indian wedding backdrops in the world. Their events team has dedicated experience with multi-day South Asian celebrations.

### Secrets Cap Cana (Punta Cana)
For couples willing to go a bit further east, this ultra-luxury property offers cathedral ceilings, Renaissance architecture, and a private beach that feels tailor-made for mandap moments.

### Grand Velas Riviera Maya
The eco-chic luxury of Grand Velas offers verdant jungle backdrops, private cenote access, and some of the finest culinary teams in the region — capable of executing elaborate Indian menus.

## Planning Your Guest Experience

**Travel Coordination**: Work with a planner who manages group bookings, securing room blocks at negotiated rates and coordinating transfers from the airport.

**Visa Considerations**: Canadian passport holders do not need a visa for Mexico. However, Indian passport holders flying from India to join the celebration will need to verify visa requirements.

**Best Season**: November through April offers reliable dry weather. Hurricane season runs June through October — not impossible, but requires contingency planning.

## Budget Expectations

A 100-guest, 3-day Indian wedding in the Riviera Maya ranges from $80,000–$250,000 CAD depending on the property, menus, and décor ambitions. Our Luxe and Royal packages include everything you need to understand the full investment before you commit.

Book your free consultation to receive a personalized estimate for your celebration.`,
      'Destinations',
      1
    );

    insertBlog.run(
      '5 Things Your Destination Wedding Planner Should Handle (That Most Don\'t)',
      '5-things-destination-wedding-planner-should-handle',
      'Not all wedding planners are created equal. When you\'re managing 150 guests across international borders, these five capabilities separate great planners from great disappointments.',
      `Hiring a destination wedding planner feels like a relief — until you realize three months before your wedding that they've never managed a 4-day Indian celebration, don't know what a dhol player permit costs in Italy, and assumed your guests could figure out airport transfers themselves.

Here are five things your planner absolutely must handle — and the right questions to ask before you sign.

## 1. Cultural Ceremony Coordination

Indian weddings aren't "weddings with Indian food." They're complex, multi-day ceremonies with specific ritual requirements: a pandit or granthi, a functional hawan kund, specific flowers for the mandap, a baraat route, and ceremony timelines that flex with ritual pacing.

**Questions to ask**: Have you worked with a pandit at this destination before? How do you source Indian flowers (marigolds, roses) in this location? Can you manage the baraat logistics, including dhol players and transportation?

## 2. Guest Travel Management

Your 150 guests don't just appear at the resort. They need group flight coordination, hotel room blocks, airport transfers, welcome bags on arrival, daily event schedules, and someone to call when Nani's luggage is lost.

**Questions to ask**: Do you manage group travel bookings? Do you have a dedicated travel coordinator? What's your process for guests arriving from multiple cities and countries?

## 3. Cultural Catering Logistics

Authentic Indian food doesn't just happen at a Mexican resort. It requires importing specific spices, coordinating with local catering teams who've never made dal makhani, setting up live stations, and managing dietary requirements across 150 people.

**Questions to ask**: Have you executed Indian menus at this venue before? Do you work with specialized South Asian caterers? Can you accommodate both vegetarian and non-vegetarian guests within the same event?

## 4. Décor Sourcing and Setup

Mandap construction, marigold garlands, doli setups, stage backdrops, table centerpieces that blend Indian and destination aesthetics — all of this requires a specialized décor vendor network and on-the-ground production capability.

**Questions to ask**: Who are your décor partners in this destination? Can I see examples of mandap setups you've managed here? What's your contingency if décor items are delayed in customs?

## 5. Legal and Logistics Compliance

Every destination has different legal requirements for marriages. Some countries require civil ceremonies for the marriage to be legally recognized. Others require specific documentation. A planner who doesn't know this can leave you legally unmarried at home.

**Questions to ask**: What documentation do we need for a legal marriage in this destination? Do we need a civil ceremony in addition to our religious ceremony? What permits are required for beach ceremonies, music, and décor?

---

At Shaadi Abroad, every one of these capabilities is core to our service model. We've been doing this long enough to know what goes wrong — and how to prevent it. Book your free consultation to experience the difference.`,
      'Planning',
      1
    );
  }

  // Seed sample inquiries if empty
  const inquiryCount = database.prepare('SELECT COUNT(*) as count FROM inquiries').get() as { count: number };
  if (inquiryCount.count === 0) {
    const insertInquiry = database.prepare(`
      INSERT INTO inquiries (name, email, phone, province, wedding_date, guest_count, destinations, budget_range, events, travel_support, notes, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    insertInquiry.run(
      'Simran Dhaliwal',
      'simran.dhaliwal@email.com',
      '416-555-0191',
      'Ontario',
      '2025-11-15',
      120,
      'Riviera Maya, Mexico',
      '$18,000 - $30,000 CAD',
      'Mehndi,Sangeet,Wedding,Reception',
      1,
      'We\'re looking for a full 4-day celebration. Family coming from Canada, UK, and India. Need help with visas for Indian family members.',
      'Consultation Booked'
    );

    insertInquiry.run(
      'Neha & Rohan Kapoor',
      'neha.kapoor@email.com',
      '604-555-0187',
      'British Columbia',
      '2025-09-20',
      85,
      'Amalfi Coast, Italy',
      '$30,000+ CAD',
      'Wedding,Reception',
      1,
      'We want an intimate Italian wedding with traditional Hindu ceremony. Smaller guest list, but very high-end experience.',
      'Proposal Sent'
    );

    insertInquiry.run(
      'Aisha Siddiqui',
      'aisha.siddiqui@email.com',
      '403-555-0143',
      'Alberta',
      '2026-02-14',
      200,
      'Dubai, UAE',
      '$30,000+ CAD',
      'Mehndi,Sangeet,Wedding,Reception',
      1,
      'Valentine\'s Day destination wedding in Dubai. Large guest count, need full-service planning.',
      'New'
    );

    insertInquiry.run(
      'Preethi Nair',
      'preethi.nair@email.com',
      '514-555-0167',
      'Quebec',
      '2025-12-28',
      150,
      'Phuket, Thailand',
      '$18,000 - $30,000 CAD',
      'Sangeet,Wedding,Reception',
      1,
      'Beach wedding in Thailand. South Indian Hindu ceremony preferred.',
      'Qualified'
    );

    insertInquiry.run(
      'Meera & Vikram Bhatia',
      'meera.bhatia@email.com',
      '204-555-0122',
      'Manitoba',
      '2026-05-10',
      100,
      'Punta Cana, Dominican Republic',
      '$8,000 - $18,000 CAD',
      'Wedding,Reception',
      0,
      'Budget-conscious destination wedding. 100 guests, looking for best value without compromising on quality.',
      'New'
    );
  }
}

export interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  province: string;
  wedding_date: string;
  guest_count: number;
  destinations: string;
  budget_range: string;
  events: string;
  travel_support: number;
  notes: string;
  status: string;
  created_at: string;
}

export interface Testimonial {
  id: number;
  couple_name: string;
  location: string;
  destination: string;
  quote: string;
  wedding_date: string;
  featured: number;
  image_url: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  published: number;
  created_at: string;
}

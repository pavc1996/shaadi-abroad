import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { destinations } from '@/lib/destinations';

const destinationDetails: Record<string, {
  overview: string;
  whyItWorks: string[];
  venues: string[];
  itinerary: string[];
  travelNotes: string;
  budgetDetails: string;
}> = {
  'cancun-riviera-maya': {
    overview: "Mexico's Riviera Maya has become the premier destination for Canadian Indian weddings — and for good reason. The region offers a rare combination of world-class resort infrastructure, a deeply experienced vendor ecosystem, stunning natural beauty, and easy accessibility from all major Canadian cities. Couples choosing the Riviera Maya benefit from direct flights, no visa requirements for Canadian passport holders, and resorts that have hosted hundreds of South Asian celebrations.",
    whyItWorks: [
      'Direct flights from Toronto, Vancouver, Calgary, and Montreal — 4–5 hours from most Canadian cities',
      'Resorts with dedicated Indian wedding event teams and experience with multi-day celebrations',
      'Outdoor ceremony spaces designed for large mandap setups with Caribbean backdrops',
      'Established network of Indian caterers, dhol players, pandit services, and décor vendors',
      'All-inclusive resort model simplifies guest experience and reduces per-head costs',
      'No Canadian passport holder visa requirements — straightforward for guests',
      'Consistent warm weather November through April',
    ],
    venues: [
      'Hyatt Ziva Cancun — iconic rooftop venue with panoramic Caribbean views, dedicated South Asian event team',
      'Secrets Cap Cana — ultra-luxury all-suite resort with private beach ceremony spaces',
      'Grand Velas Riviera Maya — eco-luxury with private cenote access, exceptional culinary team',
      'Iberostar Grand Paraíso — adults-only luxury resort with exclusive beach terrace venue',
      'Azul Beach Resort — boutique luxury ideal for intimate celebrations (75–120 guests)',
      'Hard Rock Riviera Maya — for couples who want a more vibrant, entertainment-led celebration',
    ],
    itinerary: [
      'Day 1: Guest arrivals, welcome cocktails at sunset terrace',
      'Day 2: Mehndi ceremony — poolside pavilion with live music',
      'Day 3: Sangeet — outdoor terrace, full production with performances',
      'Day 4: Wedding ceremony — beachfront mandap at golden hour; Reception follows',
      'Day 5: Farewell brunch — private beach setup',
    ],
    travelNotes: "Toronto Pearson, Vancouver YVR, Calgary YYC, and Montreal YUL all offer direct flights to Cancun International (CUN). Flight time is approximately 4 hours from Toronto, 5 hours from Vancouver. The airport is well-equipped for large group arrivals. Transfers to the Riviera Maya hotel zone typically take 30–90 minutes by private shuttle. Indian passport holders visiting Mexico need a visa or a valid US/Canadian visa.",
    budgetDetails: "Full-service Indian wedding packages in the Riviera Maya range from $80,000–$250,000 CAD depending on resort, guest count, menu complexity, and décor ambition. Our Luxe package (all-inclusive, 100 guests, 3 days) typically lands between $120,000–$180,000 CAD total including venue, catering, décor, and photography. Note that most resorts require a minimum F&B spend commitment.",
  },
  'punta-cana': {
    overview: "Punta Cana in the Dominican Republic offers an exclusive, high-luxury alternative to Mexico's more heavily trafficked wedding circuit. With dramatically beautiful resorts featuring Renaissance-era architecture, ultra-private beach settings, and fewer South Asian weddings competing for the same venues, Punta Cana suits couples seeking an elevated, intimate luxury experience.",
    whyItWorks: [
      'Ultra-luxury resort infrastructure with cathedral ceilings and dramatic architecture',
      'More exclusive than Cancun — fewer competing weddings at the same time',
      'Stunning private beach ceremony settings',
      'All-inclusive model with premium F&B flexibility',
      'Direct flights from Toronto and Montreal',
      'No visa required for Canadian passport holders',
    ],
    venues: [
      'Secrets Cap Cana — Renaissance-inspired architecture, private peninsula, arguably the most beautiful resort in the Caribbean',
      'Excellence El Carmen — adults-only boutique luxury, exceptional food and wine program',
      'Zoëtry Agua Punta Cana — ultra-intimate, Zen-luxury for guests up to 80',
      'Iberostar Grand Bávaro — large resort infrastructure for 150+ guest celebrations',
    ],
    itinerary: [
      'Day 1: Guest arrivals, poolside welcome reception',
      'Day 2: Mehndi ceremony at garden pavilion',
      'Day 3: Sangeet — terrace with Caribbean backdrop',
      'Day 4: Wedding at private beach; Evening reception in grand ballroom',
      'Day 5: Farewell brunch',
    ],
    travelNotes: "Direct flights from Toronto to Punta Cana (PUJ) are available year-round with Air Transat, Sunwing, and Air Canada. Flight time is approximately 4.5 hours. Transfers to most resorts take 20–45 minutes. No visa required for Canadian passport holders.",
    budgetDetails: "All-in budgets for Punta Cana Indian weddings typically run $70,000–$200,000 CAD for 75–175 guests depending on resort tier and scope. Luxury resort minimum F&B spends are significant — discuss with us before choosing a venue.",
  },
  'jamaica': {
    overview: "Jamaica offers a more intimate, warm, and vibrant alternative to the larger resort destinations. For couples seeking a lush tropical setting with personalized service and a more boutique luxury experience, Jamaica's north coast resorts — particularly in Montego Bay and Ocho Rios — deliver extraordinary results for Indian celebrations up to 120 guests.",
    whyItWorks: [
      'Lush tropical greenery and blue-water settings ideal for photography',
      'Boutique resort format allows more personalized wedding experience',
      'Warm, genuinely hospitable Jamaican service culture',
      'Less competitive weekend availability vs. Mexico',
      'Direct flights from Toronto, Montreal',
    ],
    venues: [
      'Half Moon Resort Montego Bay — 400-acre luxury estate with multiple outdoor ceremony venues',
      'Round Hill Hotel & Villas — ultra-exclusive resort beloved by celebrity clientele',
      'Sandals Royal Plantation — intimate 74-suite adults-only resort',
      'Iberostar Rose Hall Beach — strong event infrastructure for medium-size celebrations',
    ],
    itinerary: [
      'Day 1: Arrivals, beachside welcome drinks',
      'Day 2: Mehndi on the terrace',
      'Day 3: Sangeet — garden pavilion or beachfront stage',
      'Day 4: Wedding ceremony at cliffside or private beach; Reception follows',
    ],
    travelNotes: "Direct flights from Toronto to Montego Bay (MBJ) operate year-round. Flight time is approximately 4 hours. Airport transfers to north coast resorts take 20–60 minutes. No visa required for Canadian passport holders.",
    budgetDetails: "Jamaica all-in budgets run $60,000–$150,000 CAD for 50–120 guests. The more boutique resort nature means per-head costs can be higher, but the overall total is often lower due to smaller guest counts.",
  },
  'italy': {
    overview: "Italy is the pinnacle of destination wedding beauty — and for Canadian Indian couples willing to invest in true grandeur, it offers something no Caribbean resort can match: centuries of architectural magnificence, world-class cuisine, and a backdrop that transforms wedding photography into art. The Amalfi Coast, Lake Como, and Tuscany each offer distinct aesthetics, and we have experience managing Indian celebrations in all three.",
    whyItWorks: [
      'Amalfi, Lake Como, and Tuscany offer three distinct, extraordinary visual aesthetics',
      'Historic villas and palaces with dramatic Italian architecture',
      'World-class Italian cuisine that can be paired with Indian catering coordination',
      'Strong photography tradition — Italian light is extraordinary',
      'European travel hub makes it accessible for guests across multiple continents',
    ],
    venues: [
      'Villa Cimbrone, Ravello (Amalfi) — gardens at the edge of a cliff, 600m above the Mediterranean',
      'Villa d\'Este, Lake Como — one of the most famous venues in Europe, pure Renaissance grandeur',
      'Castello di Vincigliata, Florence — medieval Tuscan castle with panoramic Florentine views',
      'Villa Borghese Cavazza, Lake Orta — island villa accessible only by boat',
    ],
    itinerary: [
      'Day 1: Guest arrivals, welcome aperitivo on the terrace',
      'Day 2: Mehndi ceremony in private garden villa',
      'Day 3: Sangeet — dramatic outdoor terrace overlooking sea or lake',
      'Day 4: Wedding ceremony at historic venue; Italian-Indian dinner reception',
      'Day 5: Farewell lunch',
    ],
    travelNotes: "Most guests fly into Rome (FCO), Milan (MXP), or Naples (NAP) depending on destination region. Direct flights from Toronto to Rome and Milan are available on Air Canada, Alitalia, and others. A Schengen visa is NOT required for Canadian passport holders. Indian passport holders require a Schengen visa — plan 3+ months ahead.",
    budgetDetails: "Italy is our most investment-intensive destination. All-in budgets typically run $150,000–$500,000 CAD for 50–150 guests. The venue, catering complexity, and logistics of managing an Indian celebration in Italy command a premium — but the results are incomparable.",
  },
  'dubai': {
    overview: "Dubai occupies a unique position for Canadian South Asian couples: it's simultaneously exotic and deeply familiar. With a large South Asian expat community, world-class halal catering infrastructure, and unmatched luxury hotel venues, Dubai is the natural choice for Muslim Canadian families and for any couple drawn to ultra-modern opulence.",
    whyItWorks: [
      'Culturally familiar environment for South Asian families',
      'World-class halal catering available at every top hotel',
      'Direct flights from Toronto, Vancouver, and Calgary (Air Canada, Emirates)',
      'Best hotel infrastructure in the world — Burj Al Arab, Atlantis, Armani',
      'Dramatic desert and skyline ceremony settings',
      'Strong South Asian vendor network in Dubai',
    ],
    venues: [
      'Atlantis The Palm — iconic resort with dramatic ocean and Palm skyline views',
      'Burj Al Arab — the world\'s most famous hotel, available for exclusive event hire',
      'Armani Hotel Dubai — understated ultra-luxury in the Burj Khalifa',
      'Jumeirah Beach Hotel — beachfront luxury with Burj Al Arab backdrop',
      'Al Qasr, Madinat Jumeirah — Arabic fortress architecture with canal venue options',
    ],
    itinerary: [
      'Day 1: Arrivals, rooftop welcome reception with skyline views',
      'Day 2: Mehndi — private ballroom or poolside with Arabian Nights décor',
      'Day 3: Sangeet — outdoor terrace overlooking Palm or skyline',
      'Day 4: Wedding ceremony at iconic venue; Grand reception to follow',
      'Day 5: Desert safari or farewell brunch',
    ],
    travelNotes: "Dubai International (DXB) is one of the world's busiest airports with excellent connectivity. Direct flights from Toronto run approximately 13 hours with Emirates and Air Canada. UAE visa is required for Indian passport holders — apply 30+ days in advance. Canadian passport holders receive a visa on arrival.",
    budgetDetails: "Dubai all-in budgets range from $100,000–$400,000 CAD for 100–300 guests depending on hotel tier. Dubai operates at a significant price premium compared to Caribbean destinations but offers an unmatched visual spectacle.",
  },
  'thailand': {
    overview: "Thailand — particularly Phuket and Koh Samui — offers Canadian Indian couples one of the most dramatic tropical wedding settings in the world at exceptional value. With experienced Indian wedding vendors in Phuket, extraordinary natural scenery, and world-class resort infrastructure, Thailand is increasingly the destination of choice for couples who want extraordinary beauty without Italy or Dubai pricing.",
    whyItWorks: [
      'Extraordinary tropical scenery — limestone cliffs, turquoise water, jungle backdrops',
      'Exceptional value at the luxury tier vs. European destinations',
      'Established Indian wedding vendor network in Phuket',
      'World-class resort infrastructure at reasonable rates',
      'Strong Indian food culture in Thailand',
    ],
    venues: [
      'Trisara Resort, Phuket — ultra-exclusive clifftop resort with private ocean villas',
      'Amanpuri, Phuket — Aman flagship property, considered one of the best hotels in Asia',
      'Sri Panwa, Phuket — dramatic cliffside villas overlooking Cape Panwa',
      'Four Seasons Koh Samui — cliffside luxury villas with Gulf of Thailand views',
    ],
    itinerary: [
      'Day 1: Arrivals, beach bonfire welcome',
      'Day 2: Mehndi ceremony at pool villa terrace',
      'Day 3: Sangeet — open-air stage above the sea',
      'Day 4: Sunset beach wedding; Beachside reception follows',
      'Day 5: Island excursion or farewell brunch',
    ],
    travelNotes: "Most guests connect through Bangkok (BKK/DMK) or fly direct to Phuket (HKT). Air Canada and Thai Airways operate Toronto–Bangkok routes. Flight time is approximately 19–22 hours with one connection. Canadian passport holders receive a visa exemption (30 days). Indian passport holders require a tourist visa.",
    budgetDetails: "Thailand offers extraordinary value at the luxury tier. All-in budgets run $60,000–$200,000 CAD for 75–200 guests. Even ultra-luxury resort rates are significantly below comparable European venues.",
  },
};

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const dest = destinations.find((d) => d.slug === params.slug);
  if (!dest) return { title: 'Destination Not Found' };
  return {
    title: `Indian Destination Wedding in ${dest.name}`,
    description: dest.description,
  };
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const dest = destinations.find((d) => d.slug === params.slug);
  const details = destinationDetails[params.slug];
  if (!dest || !details) notFound();

  const otherDestinations = destinations.filter((d) => d.slug !== params.slug).slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image src={dest.image} alt={dest.name} fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        <div className="relative z-10 px-4 pb-16 max-w-4xl mx-auto w-full">
          <Link href="/destinations" className="inline-block font-inter text-ivory/60 text-xs tracking-wide hover:text-ivory mb-4 transition-colors">
            ← All Destinations
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{dest.flag}</span>
            <span className="font-inter text-gold text-xs tracking-widest uppercase">{dest.tagline}</span>
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl text-ivory font-bold mb-4">{dest.name}</h1>
          <p className="font-inter text-ivory/80 text-lg max-w-2xl">{dest.description}</p>
        </div>
      </section>

      {/* Quick stats */}
      <section className="bg-maroon py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { label: 'Estimated Budget', value: dest.budget },
            { label: 'Ideal Guest Count', value: dest.bestFor },
            { label: 'Best Season', value: dest.season },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-inter text-ivory/50 text-xs tracking-widest uppercase mb-1">{item.label}</p>
              <p className="font-playfair text-ivory text-xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        {/* Overview */}
        <section className="py-16">
          <h2 className="font-playfair text-3xl text-charcoal font-bold mb-6">Overview</h2>
          <p className="font-inter text-charcoal/70 leading-relaxed text-lg">{details.overview}</p>
        </section>

        {/* Why it works */}
        <section className="py-12 border-t border-champagne">
          <h2 className="font-playfair text-3xl text-charcoal font-bold mb-8">Why It Works for Indian Weddings</h2>
          <ul className="space-y-3">
            {details.whyItWorks.map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-inter text-charcoal/80">
                <span className="text-gold flex-shrink-0 mt-0.5">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Venues */}
        <section className="py-12 border-t border-champagne">
          <h2 className="font-playfair text-3xl text-charcoal font-bold mb-8">Top Venues</h2>
          <div className="space-y-4">
            {details.venues.map((venue, i) => {
              const [name, ...desc] = venue.split(' — ');
              return (
                <div key={i} className="bg-beige border border-champagne rounded-sm p-5">
                  <p className="font-playfair text-charcoal font-bold">{name}</p>
                  {desc.length > 0 && <p className="font-inter text-charcoal/60 text-sm mt-1">{desc.join(' — ')}</p>}
                </div>
              );
            })}
          </div>
        </section>

        {/* Sample itinerary */}
        <section className="py-12 border-t border-champagne">
          <h2 className="font-playfair text-3xl text-charcoal font-bold mb-8">Sample Celebration Itinerary</h2>
          <div className="space-y-3">
            {details.itinerary.map((item, i) => {
              const [day, ...rest] = item.split(': ');
              return (
                <div key={i} className="flex gap-4">
                  <div className="w-16 flex-shrink-0 font-inter text-maroon text-xs font-bold tracking-wide">{day}</div>
                  <div className="font-inter text-charcoal/80 text-sm flex-1 pb-3 border-b border-champagne/50 last:border-0">{rest.join(': ')}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Travel notes */}
        <section className="py-12 border-t border-champagne">
          <h2 className="font-playfair text-3xl text-charcoal font-bold mb-6">Travel Notes from Canada</h2>
          <p className="font-inter text-charcoal/70 leading-relaxed">{details.travelNotes}</p>
        </section>

        {/* Budget */}
        <section className="py-12 border-t border-champagne">
          <h2 className="font-playfair text-3xl text-charcoal font-bold mb-6">Budget Guide</h2>
          <div className="bg-maroon/5 border border-maroon/20 rounded-sm p-6">
            <p className="font-inter text-charcoal/80 leading-relaxed">{details.budgetDetails}</p>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="py-20 px-4 bg-charcoal text-center">
        <h2 className="font-playfair text-4xl text-ivory font-bold mb-4">Start Planning Your {dest.name} Wedding</h2>
        <p className="font-inter text-ivory/70 mb-10 max-w-xl mx-auto">Book your free consultation and we'll create a personalized proposal for your celebration.</p>
        <Link href="/inquire" className="inline-block bg-gold text-charcoal font-inter font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors">
          Inquire About {dest.name}
        </Link>
      </section>

      {/* Other destinations */}
      <section className="py-16 px-4 bg-beige">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl text-charcoal font-bold mb-8 text-center">Explore Other Destinations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherDestinations.map((d) => (
              <Link key={d.slug} href={`/destinations/${d.slug}`} className="group bg-ivory border border-champagne rounded-sm overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-36 overflow-hidden">
                  <Image src={d.image} alt={d.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <p className="font-inter text-gold text-xs tracking-widest uppercase mb-1">{d.tagline}</p>
                  <h3 className="font-playfair text-lg text-charcoal font-bold">{d.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wedding Packages',
  description: 'Premium Indian destination wedding packages for Canadian couples. Signature, Luxe, Royal, and Bespoke packages for every vision and scale.',
};

const packages = [
  {
    name: 'Signature',
    price: 'From $8,000 CAD',
    tag: 'Perfect for intimate celebrations',
    guestCount: '50–100 guests',
    color: 'border-champagne',
    headerBg: 'bg-beige',
    featured: false,
    description: 'Our foundational package for couples who want professional coordination for a more intimate celebration. Full planning support with curated vendor recommendations.',
    includes: [
      'Dedicated wedding planner (1 event manager)',
      'Destination consultation & shortlisting',
      'Venue sourcing & negotiation support',
      'Vendor recommendations (photographer, décor, catering)',
      'Planning timeline & milestone management',
      'Guest communication templates',
      'On-site coordination for 1 day (wedding day)',
      'Post-wedding debrief & vendor feedback',
    ],
    idealFor: 'Couples hosting 50–100 guests at an all-inclusive resort destination (Mexico, Punta Cana, Jamaica) for a 2-day celebration (Sangeet + Wedding).',
    notIncluded: 'Multi-day coordination beyond 1 on-site day, travel management, décor production, full vendor management.',
  },
  {
    name: 'Luxe',
    price: 'From $18,000 CAD',
    tag: 'Our most popular package',
    guestCount: '100–175 guests',
    color: 'border-gold',
    headerBg: 'bg-charcoal',
    featured: true,
    description: 'The complete planning experience for couples who want every detail managed with precision. Full multi-day coordination, travel support, and on-site team.',
    includes: [
      'Senior wedding planner + on-site assistant',
      'Full destination sourcing & venue negotiation',
      'Complete vendor management (all vendors)',
      'Guest travel coordination & room block management',
      'Indian catering consultation & coordination',
      'Décor concept development & vendor liaison',
      'Baraat & ceremony logistics planning',
      'Guest welcome kits & event schedule management',
      'On-site coordination for full event duration (3–4 days)',
      'Rehearsal coordination',
      'Day-of timeline management (ceremony to reception)',
      'Post-wedding vendor reconciliation',
    ],
    idealFor: 'Couples hosting 100–175 guests for a full 3–4 day Indian celebration (Mehndi, Sangeet, Wedding, Reception) at a resort or private venue in Mexico, Caribbean, Italy, or Southeast Asia.',
    notIncluded: 'Custom décor production, entertainment booking fees, travel costs for on-site team.',
  },
  {
    name: 'Royal',
    price: 'From $35,000 CAD',
    tag: 'The ultimate experience',
    guestCount: '150–300+ guests',
    color: 'border-maroon',
    headerBg: 'bg-maroon',
    featured: false,
    description: 'Our most comprehensive package for large-scale, multi-day celebrations. A dedicated team manages every element of your wedding from concept to farewell brunch.',
    includes: [
      'Lead planner + full on-site team (3+ coordinators)',
      'White-glove destination & venue sourcing worldwide',
      'Complete vendor management across all events',
      'Full guest travel management (flights, transfers, accommodation)',
      'Dedicated guest concierge service',
      'Custom décor concept & production oversight',
      'South Asian catering sourcing & on-site management',
      'Entertainment sourcing (dhol, sangeet performances, DJ)',
      'Full 4–5 day on-site coordination team',
      'Photography & videography direction support',
      'Welcome dinner & farewell brunch coordination',
      'Personalized wedding website creation',
      'Post-event gallery curation support',
      'Future anniversary event priority access',
    ],
    idealFor: 'Couples hosting 150–300+ guests for a landmark 4–5 day Royal celebration. Designed for Dubai, Italy, Thailand, or exclusive resort buyouts in the Caribbean.',
    notIncluded: 'Nothing. This is genuinely full service.',
  },
  {
    name: 'Bespoke',
    price: 'Custom Pricing',
    tag: 'Fully custom, anything is possible',
    guestCount: 'Any guest count',
    color: 'border-gold',
    headerBg: 'bg-gold',
    featured: false,
    description: 'For couples with a vision that doesn\'t fit a template. We design your package from scratch around your specific needs, destination, and budget.',
    includes: [
      'Everything from Royal, restructured to your needs',
      'Exclusive venue buyout support',
      'International pandit / religious officiant sourcing',
      'Custom entertainment production',
      'Private charter flight coordination',
      'Celebrity or influencer guest management',
      'Multi-destination celebrations (pre & post events)',
      'Brand partnerships and sponsorship management',
      'Fully custom pricing built around your vision',
    ],
    idealFor: 'Couples planning extraordinarily large weddings, multi-destination celebrations, or highly unique visions that require custom solutions.',
    notIncluded: 'Nothing. We build this for you.',
  },
];

const comparison = [
  { feature: 'Dedicated Wedding Planner', signature: true, luxe: true, royal: true, bespoke: true },
  { feature: 'Destination Consultation', signature: true, luxe: true, royal: true, bespoke: true },
  { feature: 'Vendor Management', signature: '✦ Partial', luxe: true, royal: true, bespoke: true },
  { feature: 'Guest Travel Coordination', signature: false, luxe: true, royal: true, bespoke: true },
  { feature: 'On-Site Team', signature: '1 day', luxe: 'Full duration', royal: 'Full team', bespoke: 'Custom' },
  { feature: 'Décor Coordination', signature: false, luxe: '✦ Liaison', royal: true, bespoke: true },
  { feature: 'Indian Catering Coordination', signature: false, luxe: true, royal: true, bespoke: true },
  { feature: 'Guest Concierge Service', signature: false, luxe: false, royal: true, bespoke: true },
  { feature: 'Welcome & Farewell Events', signature: false, luxe: false, royal: true, bespoke: true },
  { feature: 'Custom Wedding Website', signature: false, luxe: false, royal: true, bespoke: true },
];

export default function PackagesPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 px-4 bg-beige text-center">
        <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">Investment & Packages</p>
        <h1 className="font-playfair text-5xl text-charcoal font-bold mb-6">Wedding Packages</h1>
        <p className="font-inter text-charcoal/70 max-w-2xl mx-auto">
          Every Shaadi Abroad package is built on deep cultural expertise and meticulous attention to detail. Choose the level of service that matches your vision.
        </p>
      </section>

      {/* Packages */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`border-2 ${pkg.color} rounded-sm overflow-hidden ${pkg.featured ? 'shadow-2xl scale-[1.02]' : ''}`}>
              {pkg.featured && (
                <div className="bg-gold text-center py-2">
                  <span className="font-inter text-charcoal text-xs font-bold tracking-widest uppercase">Most Popular</span>
                </div>
              )}
              <div className={`${pkg.headerBg} p-8`}>
                <p className="font-inter text-xs tracking-widest uppercase mb-1 ${pkg.featured ? 'text-gold' : 'text-charcoal/60'}">{pkg.tag}</p>
                <h2 className={`font-playfair text-4xl font-bold mb-2 ${pkg.featured ? 'text-ivory' : 'text-charcoal'}`}>{pkg.name}</h2>
                <div className={`font-playfair text-2xl font-bold ${pkg.featured ? 'text-gold' : 'text-maroon'}`}>{pkg.price}</div>
                <div className={`font-inter text-sm mt-1 ${pkg.featured ? 'text-ivory/60' : 'text-charcoal/60'}`}>{pkg.guestCount}</div>
              </div>
              <div className="p-8 bg-ivory">
                <p className="font-inter text-charcoal/70 text-sm leading-relaxed mb-6">{pkg.description}</p>
                <h3 className="font-inter font-bold text-charcoal text-xs tracking-widest uppercase mb-4">What's Included</h3>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-inter text-sm text-charcoal/80">
                      <span className="text-gold mt-0.5 flex-shrink-0">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-beige rounded-sm p-4 mb-6">
                  <p className="font-inter text-xs font-bold text-charcoal tracking-wide uppercase mb-1">Ideal For</p>
                  <p className="font-inter text-charcoal/70 text-xs leading-relaxed">{pkg.idealFor}</p>
                </div>
                <Link href="/inquire" className="block w-full text-center py-3.5 bg-maroon text-ivory font-inter font-semibold text-xs tracking-widest uppercase hover:bg-maroon-dark transition-colors">
                  Inquire About {pkg.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4 bg-beige overflow-x-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl text-charcoal font-bold text-center mb-12">Package Comparison</h2>
          <table className="w-full min-w-[600px] text-sm font-inter">
            <thead>
              <tr className="border-b-2 border-champagne">
                <th className="text-left py-3 text-charcoal/60 font-normal text-xs uppercase tracking-wide w-1/3">Feature</th>
                <th className="text-center py-3 text-charcoal font-bold">Signature</th>
                <th className="text-center py-3 text-maroon font-bold">Luxe</th>
                <th className="text-center py-3 text-charcoal font-bold">Royal</th>
                <th className="text-center py-3 text-gold font-bold">Bespoke</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} className="border-b border-champagne/50">
                  <td className="py-3 text-charcoal/80">{row.feature}</td>
                  {[row.signature, row.luxe, row.royal, row.bespoke].map((val, j) => (
                    <td key={j} className="text-center py-3">
                      {val === true ? <span className="text-green-600 font-bold">✓</span>
                        : val === false ? <span className="text-charcoal/20">—</span>
                        : <span className="text-charcoal/60 text-xs">{val}</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-charcoal text-center">
        <h2 className="font-playfair text-4xl text-ivory font-bold mb-4">Not Sure Which Package Is Right?</h2>
        <p className="font-inter text-ivory/70 mb-10 max-w-xl mx-auto">Book a free 30-minute consultation. We'll ask the right questions and recommend the right package for your vision, guest count, and budget.</p>
        <Link href="/inquire" className="inline-block bg-gold text-charcoal font-inter font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors">
          Start With a Free Consultation
        </Link>
      </section>
    </div>
  );
}

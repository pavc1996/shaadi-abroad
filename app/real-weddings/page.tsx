import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real Weddings — Indian Destination Wedding Stories',
  description: 'Real stories from Canadian Indian couples who celebrated their destination weddings with Shaadi Abroad. Inspiring, honest, and beautiful.',
};

const weddings = [
  {
    couple: 'Priya & Arjun',
    surname: 'Sharma',
    destination: 'Riviera Maya, Mexico',
    date: 'November 2024',
    guestCount: 180,
    events: ['Mehndi', 'Sangeet', 'Wedding', 'Reception'],
    from: 'Toronto, Ontario',
    package: 'Royal',
    quote: 'Every single detail was beyond what we imagined. Our families are still talking about it.',
    heroImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&h=700&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=300&fit=crop',
    ],
    story: `Priya and Arjun had always dreamed of a beach wedding, but neither had imagined how perfectly their four-day Hindu celebration could translate to the turquoise shores of the Riviera Maya.

The couple had been together for six years when Arjun proposed in Santorini. They immediately knew they wanted a destination wedding — but planning a celebration for 180 guests across four events in another country felt overwhelming until they found Shaadi Abroad.

The Mehndi was held in a lush garden gazebo draped in marigolds and fairy lights. The Sangeet — 180 guests, a live band, and a dance floor under the stars — was, as Priya's mother described it, "the best night of my life." The wedding ceremony on the beachfront terrace at sunset was everything Priya had ever imagined.

Shaadi Abroad coordinated flight arrangements for guests flying from Toronto, Mumbai, London, and Vancouver. Not a single guest had a logistics problem. Three weeks after the wedding, Priya texted us a voice note that just said "I can't stop smiling."`,
    highlight: { label: 'Guests from', value: '4 countries' },
    highlight2: { label: 'Events', value: '4 days' },
  },
  {
    couple: 'Raveena & Kabir',
    surname: 'Malhotra',
    destination: 'Amalfi Coast, Italy',
    date: 'June 2024',
    guestCount: 65,
    events: ['Wedding', 'Reception', 'Welcome Dinner'],
    from: 'Vancouver, British Columbia',
    package: 'Luxe',
    quote: 'Italy was a dream. The Shaadi Abroad team made it feel effortless.',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&h=700&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=300&fit=crop',
    ],
    story: `Raveena and Kabir wanted something intimate. After years of attending large Indian weddings in banquet halls, they craved an experience that felt personal — where they could actually spend time with every guest.

Italy was Raveena's dream since a solo trip she'd taken at 24. Kabir, ever the romantic, agreed immediately when she said "Amalfi." What they didn't expect was how beautifully their Hindu ceremony would translate to the cliffs of the Amalfi Coast.

Shaadi Abroad sourced an authentic pandit based in Rome who traveled to the venue and conducted a complete Hindu ceremony — complete with hawan kund — against a backdrop of the Mediterranean and lemon trees. Indian catering was coordinated through a London-based South Asian catering company that flew their team in.

Their Italian wedding photographer, who had never shot an Indian ceremony, told us afterward it was the most moving wedding she had ever photographed.`,
    highlight: { label: 'Venue', value: 'Private villa, Positano' },
    highlight2: { label: 'Guests', value: '65 intimate' },
  },
  {
    couple: 'Ananya & Dev',
    surname: 'Patel',
    destination: 'Phuket, Thailand',
    date: 'February 2024',
    guestCount: 120,
    events: ['Mehndi', 'Sangeet', 'Wedding', 'Farewell Brunch'],
    from: 'Calgary, Alberta',
    package: 'Royal',
    quote: 'We referred three couples at our own Sangeet. That says everything.',
    heroImage: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&h=700&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop',
    ],
    story: `Dev had proposed on a beach in Thailand during a backpacking trip five years earlier. When the couple got engaged, they both knew — they were going back.

Planning a 120-person Indian wedding in Phuket sounded impossible. But Shaadi Abroad had done it before. They had vendor relationships in Phuket specifically for South Asian celebrations and knew which resorts had the right outdoor spaces for a full Hindu ceremony.

The Mehndi was held poolside at golden hour. The Sangeet was the most fun either of them had ever had at a party in their lives. The wedding ceremony at sunset on the beach was captured by a photographer who had flown in from London.

Ananya later told us that the moment she walked down the aisle toward Dev, with the Andaman Sea behind him and her entire family watching, was the singular most beautiful moment of her life.`,
    highlight: { label: 'Guests from', value: 'Canada, India, UK' },
    highlight2: { label: 'Photographer', value: 'Flown from London' },
  },
];

export default function RealWeddingsPage() {
  return (
    <div className="pt-20">
      <section className="py-24 px-4 bg-beige text-center">
        <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">Real Stories</p>
        <h1 className="font-playfair text-5xl text-charcoal font-bold mb-6">Real Weddings</h1>
        <p className="font-inter text-charcoal/70 max-w-2xl mx-auto">
          Every wedding is a story. Here are a few of ours — honest, detailed, and told the way they actually happened.
        </p>
      </section>

      {weddings.map((wedding, i) => (
        <section key={wedding.couple} className={`py-20 px-4 ${i % 2 === 1 ? 'bg-beige' : 'bg-ivory'}`}>
          <div className="max-w-5xl mx-auto">
            {/* Hero image */}
            <div className="relative h-[500px] rounded-sm overflow-hidden mb-12">
              <Image src={wedding.heroImage} alt={`${wedding.couple} ${wedding.surname} wedding`} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  {wedding.events.map(e => <span key={e} className="bg-maroon/80 text-ivory font-inter text-xs px-3 py-1 rounded-sm">{e}</span>)}
                </div>
                <h2 className="font-playfair text-4xl text-ivory font-bold">{wedding.couple} {wedding.surname}</h2>
                <p className="font-inter text-gold text-sm mt-1">{wedding.destination} · {wedding.date}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Story */}
              <div className="md:col-span-2">
                <blockquote className="font-playfair text-xl text-charcoal italic border-l-4 border-gold pl-6 mb-8">
                  "{wedding.quote}"
                </blockquote>
                {wedding.story.split('\n\n').map((para, j) => (
                  <p key={j} className="font-inter text-charcoal/70 leading-loose text-base mb-4">{para}</p>
                ))}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {wedding.galleryImages.map((img, j) => (
                    <div key={j} className="relative h-28 rounded-sm overflow-hidden">
                      <Image src={img} alt="" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Details sidebar */}
              <div className="space-y-6">
                <div className="bg-ivory border border-champagne rounded-sm p-6 space-y-4">
                  {[
                    { label: 'Couple', value: `${wedding.couple} ${wedding.surname}` },
                    { label: 'From', value: wedding.from },
                    { label: 'Destination', value: wedding.destination },
                    { label: 'Date', value: wedding.date },
                    { label: 'Guests', value: `${wedding.guestCount}` },
                    { label: 'Package', value: wedding.package },
                    { label: wedding.highlight.label, value: wedding.highlight.value },
                    { label: wedding.highlight2.label, value: wedding.highlight2.value },
                  ].map(item => (
                    <div key={item.label}>
                      <p className="font-inter text-xs text-charcoal/40 uppercase tracking-wide">{item.label}</p>
                      <p className="font-inter text-sm text-charcoal font-medium mt-0.5">{item.value}</p>
                    </div>
                  ))}
                </div>
                <Link href="/inquire" className="block text-center bg-maroon text-ivory font-inter font-semibold text-xs tracking-widest uppercase py-3.5 hover:bg-maroon-dark transition-colors rounded-sm">
                  Plan My Wedding
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 px-4 bg-charcoal text-center">
        <h2 className="font-playfair text-4xl text-ivory font-bold mb-6">Your Story Starts With One Conversation</h2>
        <p className="font-inter text-ivory/70 mb-10 max-w-xl mx-auto">Free 30-minute consultation. No commitment. Just your vision and ours, connecting.</p>
        <Link href="/inquire" className="inline-block bg-gold text-charcoal font-inter font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors">
          Book Free Consultation
        </Link>
      </section>
    </div>
  );
}

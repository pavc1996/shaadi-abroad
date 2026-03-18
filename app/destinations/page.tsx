import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/lib/destinations';

export const metadata: Metadata = {
  title: 'Destinations',
  description: 'Explore 6 stunning Indian destination wedding locations for Canadian couples: Cancun, Punta Cana, Jamaica, Italy, Dubai, and Thailand.',
};


export default function DestinationsPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 px-4 bg-beige text-center">
        <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">Where Dreams Come True</p>
        <h1 className="font-playfair text-5xl text-charcoal font-bold mb-6">Our Destinations</h1>
        <p className="font-inter text-charcoal/70 max-w-2xl mx-auto">
          Six extraordinary destinations, each with unique beauty and carefully curated vendor networks built specifically for Indian celebrations.
        </p>
      </section>

      {/* Destinations grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="group block bg-ivory border border-champagne rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <Image src={dest.image} alt={dest.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-2xl">{dest.flag}</span>
                </div>
                <div className="absolute top-4 right-4 bg-maroon/90 text-ivory text-xs font-inter tracking-wide px-3 py-1 rounded-sm">
                  {dest.season}
                </div>
              </div>
              <div className="p-6">
                <p className="font-inter text-gold text-xs tracking-widest uppercase mb-1">{dest.tagline}</p>
                <h2 className="font-playfair text-xl text-charcoal font-bold mb-1">{dest.name}</h2>
                <p className="font-inter text-charcoal/50 text-xs mb-3">{dest.country}</p>
                <p className="font-inter text-charcoal/70 text-sm leading-relaxed mb-4 line-clamp-2">{dest.description}</p>
                <div className="flex justify-between text-xs font-inter text-charcoal/60 pt-4 border-t border-champagne">
                  <span>💰 {dest.budget}</span>
                  <span>👥 {dest.bestFor}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Help choosing */}
      <section className="py-16 px-4 bg-charcoal text-center">
        <h2 className="font-playfair text-3xl text-ivory font-bold mb-4">Not Sure Which Destination Is Right?</h2>
        <p className="font-inter text-ivory/70 mb-8 max-w-xl mx-auto">
          We'll match you to the perfect destination based on your guest profile, budget, and vision. Book a free consultation.
        </p>
        <Link href="/inquire" className="inline-block bg-gold text-charcoal font-inter font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors">
          Find My Perfect Destination
        </Link>
      </section>
    </div>
  );
}

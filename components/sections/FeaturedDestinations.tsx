'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const destinations = [
  {
    slug: 'riviera-maya',
    name: 'Riviera Maya',
    country: 'Mexico',
    tagline: 'Turquoise waters, lush jungle, world-class resorts',
    highlight: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&h=600&fit=crop',
    startingFrom: '$18,000 CAD',
    weddings: '18+',
  },
  {
    slug: 'punta-cana',
    name: 'Punta Cana',
    country: 'Dominican Republic',
    tagline: 'Picture-perfect beaches and luxury all-inclusives',
    highlight: 'Family Favourite',
    image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=800&h=600&fit=crop',
    startingFrom: '$15,000 CAD',
    weddings: '10+',
  },
  {
    slug: 'jamaica',
    name: 'Montego Bay',
    country: 'Jamaica',
    tagline: 'Lush mountains, crystal coves, vibrant energy',
    highlight: 'Intimate Weddings',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&h=600&fit=crop',
    startingFrom: '$12,000 CAD',
    weddings: '8+',
  },
  {
    slug: 'italy',
    name: 'Amalfi Coast & Tuscany',
    country: 'Italy',
    tagline: 'Timeless elegance, cliffside villas, Roman sunsets',
    highlight: 'Luxury Tier',
    image: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=800&h=600&fit=crop',
    startingFrom: '$35,000 CAD',
    weddings: '5+',
  },
  {
    slug: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    tagline: 'Opulent venues, skyline vistas, desert grandeur',
    highlight: 'Grand Celebrations',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
    startingFrom: '$30,000 CAD',
    weddings: '6+',
  },
  {
    slug: 'thailand',
    name: 'Phuket & Koh Samui',
    country: 'Thailand',
    tagline: 'Tropical paradise, temple backdrops, warm hospitality',
    highlight: 'Unique Experiences',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop',
    startingFrom: '$14,000 CAD',
    weddings: '7+',
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="section-padding bg-beige">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="font-inter text-gold text-xs tracking-[0.3em] uppercase">
              Where We Create Magic
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="heading-lg text-charcoal mb-5">
            Six Extraordinary{' '}
            <span className="text-maroon italic">Destinations</span>
          </h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            From the Caribbean's turquoise shores to the Mediterranean's golden cliffs —
            each destination curated for South Asian celebrations.
          </p>
        </motion.div>

        {/* Destinations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/destinations/${dest.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-sm shadow-md hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={`Indian wedding in ${dest.name}, ${dest.country}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                    {/* Highlight badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-gold text-charcoal font-inter text-xs font-bold tracking-wider uppercase rounded-sm">
                        {dest.highlight}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-1 text-gold/80 mb-1">
                        <MapPin className="w-3 h-3" />
                        <span className="font-inter text-xs tracking-wider uppercase">{dest.country}</span>
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-ivory">
                        {dest.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="bg-white p-5">
                    <p className="font-inter text-sm text-gray-600 mb-4 leading-relaxed">
                      {dest.tagline}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-inter text-xs text-gray-400 uppercase tracking-wide">From</span>
                        <div className="font-playfair text-lg font-semibold text-maroon">{dest.startingFrom}</div>
                      </div>
                      <div className="text-right">
                        <span className="font-inter text-xs text-gray-400 uppercase tracking-wide">Weddings</span>
                        <div className="font-playfair text-lg font-semibold text-charcoal">{dest.weddings}</div>
                      </div>
                      <div className="flex items-center gap-1.5 text-maroon group-hover:text-gold transition-colors font-inter text-sm font-semibold">
                        Explore
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/destinations"
            className="btn-secondary"
          >
            View All Destinations
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const packages = [
  {
    name: 'Signature',
    price: '$8,000',
    currency: 'CAD',
    tagline: 'A beautiful beginning for intimate celebrations',
    guestRange: 'Up to 60 guests',
    events: '2-day celebration',
    highlight: false,
    features: [
      'Initial destination + venue consultation',
      'Venue sourcing and booking management',
      'Vendor coordination (photographer, florist, caterer)',
      'Day-of coordination (2 days)',
      'Guest communication templates',
      'Basic décor direction',
      'Emergency support line',
    ],
    notIncluded: ['Travel coordination', 'Custom décor production', 'On-site planner at venue'],
    cta: 'Inquire About Signature',
    ideal: 'Ideal for: Couples with a smaller guest list and a clear vision who need expert coordination.',
  },
  {
    name: 'Luxe',
    price: '$18,000',
    currency: 'CAD',
    tagline: 'Full-service planning for your dream destination wedding',
    guestRange: '60–150 guests',
    events: '3–4 day celebration',
    highlight: true,
    features: [
      'Everything in Signature, plus:',
      'Group travel + room block management',
      'Full vendor sourcing and management',
      'Custom décor design consultation',
      'Cultural ceremony coordination (pandit/granthi)',
      'Dedicated on-site planner (full event duration)',
      'Guest welcome packages',
      'Dietary + special needs management',
      'Full event timeline + run-of-show',
      'Post-wedding vendor followup',
    ],
    notIncluded: [],
    cta: 'Inquire About Luxe',
    ideal: 'Ideal for: Most couples planning a full destination Indian wedding with 4 events.',
  },
  {
    name: 'Royal',
    price: '$35,000',
    currency: 'CAD',
    tagline: 'The complete luxury destination wedding experience',
    guestRange: '150–300 guests',
    events: '4–5 day celebration',
    highlight: false,
    features: [
      'Everything in Luxe, plus:',
      'Private villa or venue buyout coordination',
      'International vendor flights + accommodation',
      'Custom mandap design and production',
      'Full floral production management',
      'Live entertainment sourcing (dhol, band, DJ)',
      'Dedicated travel agent liaison',
      'Hair & makeup vendor coordination',
      'Pre-wedding site visit with couple',
      'Post-wedding album + video delivery support',
    ],
    notIncluded: [],
    cta: 'Inquire About Royal',
    ideal: 'Ideal for: Large, multi-generational celebrations at premium destination venues.',
  },
  {
    name: 'Bespoke',
    price: 'Custom',
    currency: '',
    tagline: 'No ceiling. No template. Just your vision, fully realized.',
    guestRange: 'Any size',
    events: 'Any duration',
    highlight: false,
    features: [
      'Fully custom scope — you define the vision',
      'Dedicated senior planning team',
      'International talent acquisition',
      'Private resort or estate buyouts',
      'Helicopter or yacht transfers',
      'Celebrity entertainment',
      'Multiple destination weddings',
      'Completely bespoke experience design',
    ],
    notIncluded: [],
    cta: 'Start Bespoke Conversation',
    ideal: 'Ideal for: Couples for whom money is not the constraint — only imagination.',
  },
];

export default function Packages() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="section-padding bg-ivory">
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
              Investment
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="heading-lg text-charcoal mb-5">
            Four Tiers of{' '}
            <span className="text-maroon italic">Extraordinary</span>
          </h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            Every package includes our cultural expertise, transparent pricing, and the
            unwavering commitment to exceed your expectations.
          </p>
        </motion.div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`relative flex flex-col rounded-sm overflow-hidden ${
                pkg.highlight
                  ? 'shadow-2xl ring-2 ring-gold scale-105 z-10'
                  : 'shadow-md hover:shadow-xl'
              } transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Popular badge */}
              {pkg.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-gold text-charcoal text-center py-1.5 font-inter text-xs font-bold tracking-widest uppercase">
                  <Star className="inline w-3 h-3 mr-1" />
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className={`p-7 ${pkg.highlight ? 'bg-maroon pt-10' : 'bg-charcoal'}`}>
                <h3 className="font-playfair text-2xl font-bold text-ivory mb-1">{pkg.name}</h3>
                <p className="font-inter text-sm text-ivory/60 mb-5">{pkg.tagline}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-playfair text-4xl font-bold text-gold">{pkg.price}</span>
                  {pkg.currency && (
                    <span className="font-inter text-sm text-ivory/60">{pkg.currency}</span>
                  )}
                </div>
                <div className="mt-3 space-y-1">
                  <div className="font-inter text-xs text-ivory/70">{pkg.guestRange}</div>
                  <div className="font-inter text-xs text-ivory/70">{pkg.events}</div>
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 bg-white p-6">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      <span className="font-inter text-sm text-charcoal leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {pkg.ideal && (
                  <div className="bg-beige rounded-sm p-4 mb-6">
                    <p className="font-inter text-xs text-gray-600 italic leading-relaxed">{pkg.ideal}</p>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="p-6 pt-0 bg-white">
                <Link
                  href="/inquire"
                  className={`block w-full text-center py-3.5 font-inter font-bold text-xs tracking-widest uppercase rounded-sm transition-all duration-300 ${
                    pkg.highlight
                      ? 'bg-gold text-charcoal hover:bg-gold-dark hover:shadow-lg'
                      : 'bg-maroon text-ivory hover:bg-maroon-dark hover:shadow-lg'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center font-inter text-sm text-gray-500 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          All packages are planning fees only and do not include venue, travel, catering, or vendor costs.
          <Link href="/packages" className="text-maroon hover:text-maroon-dark ml-1 font-semibold">
            View detailed package comparison →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}

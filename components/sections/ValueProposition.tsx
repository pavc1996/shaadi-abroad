'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Heart, Sparkles } from 'lucide-react';

const values = [
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'Cultural Integrity, Always',
    description:
      'Every ritual honoured. Every tradition respected. We understand the nuance of South Asian ceremonies — from Sikh Anand Karaj to Hindu Saptapadi — and ensure your celebration is as culturally rich abroad as it would be at home.',
  },
  {
    icon: <Globe2 className="w-7 h-7" />,
    title: 'White-Glove Global Logistics',
    description:
      'Managing 150 guests across international borders requires military-grade coordination. We handle travel, visas, room blocks, transfers, permits, and on-the-ground production — so your family can enjoy every moment.',
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: 'Breathtaking, Bespoke Experiences',
    description:
      'No templates. No cookie-cutter packages. Every Shaadi Abroad wedding is a unique expression of your love story — designed from scratch, styled with intention, and executed with the precision of a luxury production.',
  },
];

export default function ValueProposition() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="font-inter text-gold text-xs tracking-[0.3em] uppercase">
              Why Shaadi Abroad
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="heading-lg text-charcoal mb-5">
            Where Luxury Meets{' '}
            <span className="text-maroon italic">Cultural Legacy</span>
          </h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            We're not just destination wedding planners. We're South Asian wedding specialists
            who happen to work in the most beautiful places on earth.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group relative text-center p-8 rounded-sm bg-white shadow-sm hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Gold accent top border */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-champagne text-maroon mb-6 group-hover:bg-maroon group-hover:text-ivory transition-all duration-300">
                {value.icon}
              </div>

              <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4">
                {value.title}
              </h3>
              <p className="font-inter text-base text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-block bg-maroon text-ivory px-10 py-8 max-w-3xl rounded-sm">
            <p className="font-playfair text-xl italic leading-relaxed mb-4">
              "We don't plan weddings at beautiful destinations. We create experiences that happen
              to take place in the most breathtaking places on earth."
            </p>
            <div className="w-12 h-0.5 bg-gold mx-auto" />
            <p className="font-inter text-sm text-ivory/70 mt-4 tracking-wider uppercase">
              — The Shaadi Abroad Team
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

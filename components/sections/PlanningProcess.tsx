'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageCircle, MapPin, Palette, Star, Heart } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Free Discovery Call',
    subtitle: 'Week 1',
    description:
      'We start with a complimentary 60-minute consultation to understand your vision, guest count, preferred destinations, cultural requirements, and budget. No pressure — just possibility.',
    deliverable: 'Vision document + destination shortlist',
  },
  {
    number: '02',
    icon: <MapPin className="w-6 h-6" />,
    title: 'Destination & Venue Selection',
    subtitle: 'Weeks 2–4',
    description:
      'Based on your brief, we curate a selection of 3–5 destination options with detailed venue proposals, estimated costs, and travel logistics. We visit shortlisted venues on your behalf when needed.',
    deliverable: 'Detailed venue comparison deck + recommended choice',
  },
  {
    number: '03',
    icon: <Palette className="w-6 h-6" />,
    title: 'Creative Direction & Design',
    subtitle: 'Months 1–3',
    description:
      'Our design team develops a full creative concept for your celebration — from mandap design and colour palette to table styling and lighting. Every element is curated to tell your unique story.',
    deliverable: 'Complete design concept board + vendor shortlists',
  },
  {
    number: '04',
    icon: <Star className="w-6 h-6" />,
    title: 'Logistics & Guest Experience',
    subtitle: 'Months 3–10',
    description:
      'We manage every operational detail: vendor contracts, travel coordination, room blocks, permits, custom event schedules, guest communication, dietary management, and rehearsals.',
    deliverable: 'Full event timeline + guest welcome packages',
  },
  {
    number: '05',
    icon: <Heart className="w-6 h-6" />,
    title: 'Your Perfect Celebration',
    subtitle: 'Your Wedding',
    description:
      'We arrive before the first guest and leave after the last dance. Our on-site team manages every moment so you can be fully present — not managing logistics. This is what you paid for.',
    deliverable: 'Perfect memories. Nothing less.',
  },
];

export default function PlanningProcess() {
  return (
    <section className="section-padding bg-champagne/40">
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
              How It Works
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="heading-lg text-charcoal mb-5">
            From Vision to{' '}
            <span className="text-maroon italic">Reality</span>
          </h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            Our proven 5-step planning process has guided every one of our 50+
            destination weddings from first conversation to perfect celebration.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-champagne -translate-x-1/2 z-0" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content */}
                <div className={`w-full lg:w-[calc(50%-4rem)] ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <div className={`bg-white rounded-sm p-7 shadow-sm hover:shadow-lg transition-shadow duration-300 ${index % 2 === 1 ? 'lg:ml-auto' : ''}`}>
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      <span className="font-inter text-xs text-gold tracking-widest uppercase font-semibold bg-champagne px-3 py-1 rounded-sm">
                        {step.subtitle}
                      </span>
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-charcoal mb-3">
                      {step.title}
                    </h3>
                    <p className="font-inter text-sm text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className={`flex items-center gap-2 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      <span className="font-inter text-xs text-maroon font-semibold italic">
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center node */}
                <div className="relative z-10 flex-shrink-0 hidden lg:flex flex-col items-center">
                  <div className="w-16 h-16 rounded-sm bg-maroon flex flex-col items-center justify-center shadow-lg">
                    <div className="text-ivory mb-1">{step.icon}</div>
                    <span className="font-playfair text-xs text-gold font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Mobile step indicator */}
                <div className="flex items-center gap-4 lg:hidden w-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-maroon text-ivory flex-shrink-0">
                    {step.icon}
                  </div>
                  <span className="font-playfair text-sm font-bold text-gold">{step.number}</span>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-[calc(50%-4rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/process" className="btn-secondary mr-4">
            Learn More About Our Process
          </Link>
          <Link href="/inquire" className="btn-primary">
            Start Step One
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

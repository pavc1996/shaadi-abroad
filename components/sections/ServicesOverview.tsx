'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Plane,
  Hotel,
  Camera,
  Music,
  Flower,
  ChefHat,
  FileText,
  Users,
} from 'lucide-react';

const services = [
  {
    icon: <Plane className="w-6 h-6" />,
    title: 'Group Travel Coordination',
    description:
      'Negotiated group rates, flight coordination, and seamless transfers for guests flying from multiple Canadian cities and international origins.',
  },
  {
    icon: <Hotel className="w-6 h-6" />,
    title: 'Venue Selection & Booking',
    description:
      'Expert curation of luxury resorts and private estates with proven experience hosting South Asian multi-day celebrations.',
  },
  {
    icon: <Flower className="w-6 h-6" />,
    title: 'Décor & Mandap Design',
    description:
      'Custom mandap construction, floral installations, table design, and environmental styling that blends Indian tradition with destination aesthetics.',
  },
  {
    icon: <ChefHat className="w-6 h-6" />,
    title: 'Authentic Indian Catering',
    description:
      'Full Indian menus — from elaborate buffets to live chaat and tandoor stations — coordinated with on-site culinary teams in any country.',
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: 'Entertainment & Performances',
    description:
      'Dhol players, live classical musicians, Bollywood DJs, choreographed sangeet programs, and fireworks coordination.',
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: 'Photography & Videography',
    description:
      'Connection to world-class South Asian wedding photographers and videographers who understand the moments that matter most.',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Legal & Ceremony Logistics',
    description:
      'Pandit and officiant sourcing, ceremony documentation, civil ceremony coordination, and marriage legalization support across jurisdictions.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Guest Experience Management',
    description:
      'Welcome bags, daily event schedules, guest liaison services, accessibility support, and dedicated on-site coordination throughout the celebration.',
  },
];

export default function ServicesOverview() {
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
              What We Handle
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="heading-lg text-charcoal mb-5">
            Full-Service Planning,{' '}
            <span className="text-maroon italic">Every Detail</span>
          </h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            From the moment you say "yes" to the last dance of the reception —
            we handle everything so you can be present in every moment.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group p-6 bg-white border border-beige hover:border-gold rounded-sm transition-all duration-400 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-champagne text-maroon mb-5 group-hover:bg-maroon group-hover:text-ivory transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-playfair text-lg font-semibold text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="font-inter text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-inter text-base text-gray-600 mb-6">
            Ready to explore what a fully-managed destination wedding looks like for your celebration?
          </p>
          <Link href="/inquire" className="btn-primary">
            Book a Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

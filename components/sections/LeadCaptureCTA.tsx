'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Calendar } from 'lucide-react';

export default function LeadCaptureCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=1920&h=800&fit=crop"
          alt="Luxury beach wedding setup"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
      </div>

      {/* Gold accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="font-inter text-gold text-xs tracking-[0.3em] uppercase">
                Your Journey Begins Here
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-ivory leading-tight mb-6">
              Ready to Start
              <span className="block text-gold italic">Planning?</span>
            </h2>

            <p className="font-inter text-lg text-ivory/80 leading-relaxed mb-10">
              Book your free 60-minute consultation. No sales pressure — just an honest
              conversation about your vision, your budget, and whether we're the right fit
              to make it happen.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/inquire"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold text-charcoal font-inter font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-gold-light transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                Book Free Consultation
              </Link>
              <a
                href="tel:+14165550100"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-ivory text-ivory font-inter font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-ivory hover:text-charcoal transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6">
              {[
                'Free, no-obligation consultation',
                'Response within 24 hours',
                '100% satisfaction guaranteed',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="font-inter text-sm text-ivory/70">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-playfair text-5xl md:text-6xl font-bold text-gold">
        {count}{suffix}
      </div>
      <div className="font-inter text-sm text-ivory/70 mt-2 uppercase tracking-wider">{label}</div>
    </div>
  );
}

const reasons = [
  {
    number: '01',
    title: 'We Speak Your Language — Literally',
    description:
      'Our team includes planners fluent in Hindi, Punjabi, and Gujarati who have personal experience with South Asian wedding traditions. We understand the difference between a Sikh Anand Karaj and a Hindu ceremony, and why it matters.',
  },
  {
    number: '02',
    title: 'Zero Surprises Budget Model',
    description:
      'Every quote includes all fees, taxes, gratuities, and coordination costs. We\'ve seen couples blindsided by hidden costs elsewhere. Our full-transparency pricing means you know exactly what you\'re spending from day one.',
  },
  {
    number: '03',
    title: 'On-Site for Every Moment',
    description:
      'We don\'t hand you over to a local coordinator at destination. A Shaadi Abroad lead planner flies with your team and is on-site for every single event across your multi-day celebration.',
  },
  {
    number: '04',
    title: '100% Client Satisfaction. No Exceptions.',
    description:
      'Across 50+ weddings and 500+ guests managed, we have never had a client rate their experience below five stars. That record is our most jealously guarded asset — and the reason our referral rate exceeds 70%.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #C9A84C 0px,
            #C9A84C 1px,
            transparent 1px,
            transparent 60px
          )`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-20 border-b border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedStat value={500} suffix="+" label="Guests Managed" />
          <AnimatedStat value={50} suffix="+" label="Weddings Delivered" />
          <AnimatedStat value={6} suffix="" label="Countries" />
          <AnimatedStat value={100} suffix="%" label="Client Satisfaction" />
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Heading + image */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold" />
                <span className="font-inter text-gold text-xs tracking-[0.3em] uppercase">
                  The Shaadi Abroad Difference
                </span>
              </div>
              <h2 className="heading-lg text-ivory mb-6">
                Why Discerning Couples{' '}
                <span className="text-gold italic">Choose Us</span>
              </h2>
              <p className="body-lg text-ivory/70 mb-8 leading-relaxed">
                We've been trusted with the most important day of people's lives — across six countries,
                in dozens of languages, through every conceivable logistical challenge.
                Here's what makes us different.
              </p>
            </motion.div>

            <motion.div
              className="relative h-80 rounded-sm overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=500&fit=crop"
                alt="Shaadi Abroad team at a destination wedding"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-sm px-5 py-4">
                  <p className="font-playfair text-sm italic text-ivory">
                    "Every single one of our 50 couples said they would do it again —
                    and with us." — Shaadi Abroad Founder
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Reasons */}
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.number}
                className="flex gap-6 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <div className="flex-shrink-0">
                  <span className="font-playfair text-5xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors leading-none">
                    {reason.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-ivory mb-3">
                    {reason.title}
                  </h3>
                  <p className="font-inter text-sm text-ivory/60 leading-relaxed">
                    {reason.description}
                  </p>
                  <div className="w-0 h-0.5 bg-gold mt-4 group-hover:w-12 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

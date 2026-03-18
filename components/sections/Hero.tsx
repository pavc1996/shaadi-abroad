'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920&h=1080&fit=crop',
    alt: 'Luxury Indian wedding ceremony on a beach',
  },
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=1080&fit=crop',
    alt: 'Indian bride and groom at a destination wedding',
  },
  {
    url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1920&h=1080&fit=crop',
    alt: 'Elegant mandap setup at a luxury resort',
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover object-center"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/50 to-charcoal/75" />

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Pre-heading */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="font-inter text-gold text-xs tracking-[0.3em] uppercase">
              Canada's Premier Indian Wedding Company
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>

          {/* Main heading */}
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-8xl font-bold text-ivory leading-tight mb-6">
            Your Dream
            <span className="block text-gold italic">Indian Wedding,</span>
            Beyond Borders.
          </h1>

          {/* Subheading */}
          <motion.p
            className="font-inter text-lg md:text-xl text-ivory/85 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We orchestrate breathtaking Indian celebrations — from sun-soaked Caribbean beaches
            to Tuscan hilltops — while honouring every cherished tradition.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              href="/inquire"
              className="inline-flex items-center justify-center px-10 py-4 bg-gold text-charcoal font-inter font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-gold-light transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Start Planning
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-ivory text-ivory font-inter font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-ivory hover:text-charcoal transition-all duration-300"
            >
              Explore Destinations
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { value: '50+', label: 'Weddings' },
              { value: '500+', label: 'Happy Guests' },
              { value: '6', label: 'Countries' },
              { value: '100%', label: 'Satisfaction' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="text-center">
                  <div className="font-playfair text-2xl font-bold text-gold">{item.value}</div>
                  <div className="font-inter text-xs text-ivory/70 uppercase tracking-wider">{item.label}</div>
                </div>
                <div className="w-px h-8 bg-ivory/20 last:hidden" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-0.5 transition-all duration-300 rounded-full ${
              index === currentImage ? 'w-8 bg-gold' : 'w-2 bg-ivory/40'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="font-inter text-xs text-ivory/60 tracking-widest uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}

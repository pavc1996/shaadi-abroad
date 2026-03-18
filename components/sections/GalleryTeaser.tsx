'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=800&fit=crop',
    alt: 'Beautiful Indian bride at beach ceremony',
    span: 'row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop',
    alt: 'Indian wedding mandap decoration',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop',
    alt: 'Destination wedding reception setup',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop',
    alt: 'Wedding guests celebrating at sangeet',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=800&fit=crop',
    alt: 'Couple at sunset beach wedding',
    span: 'row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&h=400&fit=crop',
    alt: 'Tropical destination wedding venue',
    span: '',
  },
];

export default function GalleryTeaser() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="font-inter text-gold text-xs tracking-[0.3em] uppercase">
              Portfolio
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="heading-lg text-charcoal mb-5">
            Moments We've{' '}
            <span className="text-maroon italic">Captured</span>
          </h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the celebrations we've had the honour of creating.
            Each image tells a story of meticulous planning and pure joy.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${image.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300 flex items-center justify-center">
                <Camera className="w-8 h-8 text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gold overlay CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-inter text-base text-gray-600 mb-5">
            Full galleries coming soon — follow us on Instagram for daily inspiration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://instagram.com/shaadiabroad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              @ShaadiAbroad on Instagram
            </a>
            <Link href="/inquire" className="btn-primary">
              Plan Your Wedding
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

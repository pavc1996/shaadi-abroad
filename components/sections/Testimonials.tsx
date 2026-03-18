'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    couple: 'Priya & Arjun Sharma',
    location: 'Toronto, Ontario',
    destination: 'Riviera Maya, Mexico',
    date: 'November 2024',
    quote:
      'Shaadi Abroad turned our dream into reality. From the moment we reached out, the team was impeccable — managing every detail from our 3-day celebration, coordinating our 180 guests flying in from Canada, India, and the UK, and ensuring every mandap flower and Mexican sunset aligned perfectly. Our families were blown away. Worth every penny.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=120&h=120&fit=crop&crop=face',
    rating: 5,
  },
  {
    couple: 'Raveena & Kabir Malhotra',
    location: 'Vancouver, British Columbia',
    destination: 'Amalfi Coast, Italy',
    date: 'June 2024',
    quote:
      "We always dreamed of an Italian wedding with all our Punjabi traditions intact. The Shaadi Abroad team made it look effortless — sourcing authentic Indian catering in Italy, arranging a local pandit, and creating a fusion experience that had our guests in tears of joy. The logistics alone would have overwhelmed us. We trusted them completely.",
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=120&h=120&fit=crop&crop=face',
    rating: 5,
  },
  {
    couple: 'Ananya & Dev Patel',
    location: 'Calgary, Alberta',
    destination: 'Phuket, Thailand',
    date: 'February 2024',
    quote:
      "From our Mehndi on the beach to our Pheras at sunset, every moment was curated with love and professionalism. Shaadi Abroad handled our Thailand wedding so seamlessly that we actually got to enjoy every single moment. The team felt like family. We've already referred three couples from our own sangeet!",
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=120&h=120&fit=crop&crop=face',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding bg-maroon relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 75% 75%, #C9A84C 0%, transparent 50%)`,
        }} />
      </div>

      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold/60" />
            <span className="font-inter text-gold text-xs tracking-[0.3em] uppercase">
              Real Stories
            </span>
            <div className="w-8 h-px bg-gold/60" />
          </div>
          <h2 className="heading-lg text-ivory mb-5">
            Words From Our{' '}
            <span className="text-gold italic">Couples</span>
          </h2>
          <p className="body-lg text-ivory/70 max-w-2xl mx-auto">
            Don't take our word for it. Hear from the real couples whose celebrations
            we had the honour of bringing to life.
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 md:p-12"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-gold/30 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-playfair text-xl md:text-2xl text-ivory/90 italic leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Couple info */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-sm overflow-hidden flex-shrink-0 ring-2 ring-gold/30">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].couple}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <div className="font-playfair text-lg font-semibold text-ivory">
                    {testimonials[current].couple}
                  </div>
                  <div className="font-inter text-sm text-ivory/60 flex items-center gap-2">
                    <span>{testimonials[current].location}</span>
                    <span className="text-gold">·</span>
                    <span>{testimonials[current].destination}</span>
                    <span className="text-gold">·</span>
                    <span>{testimonials[current].date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="flex items-center justify-center w-12 h-12 rounded-sm border border-white/20 text-ivory/70 hover:border-gold hover:text-gold transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === current ? 'w-8 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-ivory/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex items-center justify-center w-12 h-12 rounded-sm border border-white/20 text-ivory/70 hover:border-gold hover:text-gold transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

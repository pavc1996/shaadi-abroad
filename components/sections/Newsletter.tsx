'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-champagne/50">
      <div className="container-custom">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative */}
          <div className="w-12 h-px bg-gold mx-auto mb-6" />

          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Stay Inspired
          </h2>
          <p className="font-inter text-base text-gray-600 mb-8 leading-relaxed">
            Monthly destination guides, real wedding features, exclusive planning tips,
            and early access to promotions. Join 2,000+ South Asian couples planning
            their dream destination wedding.
          </p>

          {submitted ? (
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle className="w-12 h-12 text-gold" />
              <div>
                <p className="font-playfair text-xl font-semibold text-charcoal">You're on the list!</p>
                <p className="font-inter text-sm text-gray-600 mt-1">
                  Welcome to the Shaadi Abroad community. We'll be in touch soon.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3.5 bg-white border border-beige text-charcoal font-inter text-sm rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors placeholder-gray-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-maroon text-ivory font-inter font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-maroon-dark transition-all duration-200 disabled:opacity-70"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-ivory/30 border-t-ivory rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Subscribe
                  </>
                )}
              </button>
            </form>
          )}

          <p className="font-inter text-xs text-gray-400 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

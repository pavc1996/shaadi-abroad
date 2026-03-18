'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Heart } from 'lucide-react';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.28 8.28 0 004.84 1.55V6.82a4.85 4.85 0 01-1.07-.13z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      {/* Newsletter banner */}
      <div className="bg-maroon">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-ivory mb-1">
                Get Inspired. Stay Informed.
              </h3>
              <p className="font-inter text-ivory/80 text-sm">
                Destination guides, real wedding stories, and exclusive offers — delivered monthly.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 px-4 py-3 bg-white/10 border border-ivory/30 text-ivory placeholder-ivory/50 font-inter text-sm rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold text-charcoal font-inter font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-playfair font-bold text-2xl text-ivory">Shaadi Abroad</span>
              <div className="font-inter text-xs tracking-widest uppercase text-gold mt-0.5">
                Destination Wedding Experts
              </div>
            </Link>
            <p className="font-inter text-sm text-ivory/70 leading-relaxed mb-6 max-w-xs">
              Canada's premier South Asian destination wedding company. We create breathtaking Indian celebrations across the world's most stunning venues — with the cultural expertise to honour every tradition.
            </p>
            <div className="space-y-3">
              <a href="tel:+14165550100" className="flex items-center gap-3 text-sm text-ivory/70 hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold" />
                +1 (416) 555-0100
              </a>
              <a href="mailto:hello@shaadiabroad.com" className="flex items-center gap-3 text-sm text-ivory/70 hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-gold" />
                hello@shaadiabroad.com
              </a>
              <div className="flex items-center gap-3 text-sm text-ivory/70">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Toronto, Ontario, Canada</span>
              </div>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com/shaadiabroad', label: 'Instagram' },
                { icon: <Facebook className="w-4 h-4" />, href: 'https://facebook.com/shaadiabroad', label: 'Facebook' },
                { icon: <TikTokIcon />, href: 'https://tiktok.com/@shaadiabroad', label: 'TikTok' },
                { icon: <PinterestIcon />, href: 'https://pinterest.com/shaadiabroad', label: 'Pinterest' },
                { icon: <LinkedInIcon />, href: 'https://linkedin.com/company/shaadiabroad', label: 'LinkedIn' },
                { icon: <Youtube className="w-4 h-4" />, href: 'https://youtube.com/@shaadiabroad', label: 'YouTube' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-9 h-9 rounded-sm bg-white/10 text-ivory/70 hover:bg-gold hover:text-charcoal transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-playfair text-base font-semibold text-ivory mb-5">Destinations</h4>
            <ul className="space-y-3">
              {[
                { href: '/destinations/cancun-riviera-maya', label: 'Cancun & Riviera Maya' },
                { href: '/destinations/punta-cana', label: 'Punta Cana' },
                { href: '/destinations/jamaica', label: 'Jamaica' },
                { href: '/destinations/italy', label: 'Italy' },
                { href: '/destinations/dubai', label: 'Dubai, UAE' },
                { href: '/destinations/thailand', label: 'Thailand' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-inter text-sm text-ivory/60 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-base font-semibold text-ivory mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { href: '/packages', label: 'Packages & Pricing' },
                { href: '/process', label: 'Our Process' },
                { href: '/inquire', label: 'Book Consultation' },
                { href: '/about', label: 'About Us' },
                { href: '/real-weddings', label: 'Real Weddings' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/blog', label: 'Blog & Guides' },
                { href: '/faq', label: 'FAQ' },
                { href: '/contact', label: 'Contact' },
                { href: '/vendors', label: 'Vendor Partnerships' },
                { href: '/careers', label: 'Careers' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-inter text-sm text-ivory/60 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick info */}
          <div>
            <h4 className="font-playfair text-base font-semibold text-ivory mb-5">Why Us</h4>
            <ul className="space-y-4">
              {[
                { stat: '500+', label: 'Guests Managed' },
                { stat: '50+', label: 'Weddings Delivered' },
                { stat: '6', label: 'Countries' },
                { stat: '100%', label: 'Client Satisfaction' },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="font-playfair text-gold font-bold text-lg">{item.stat}</span>
                  <span className="font-inter text-xs text-ivory/60">{item.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-sm border border-white/10">
              <p className="font-playfair text-sm text-ivory/80 italic leading-relaxed">
                "Your Dream Indian Wedding, Beyond Borders."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-ivory/40 flex items-center gap-1">
            © {new Date().getFullYear()} Shaadi Abroad Inc. All rights reserved. Made with
            <Heart className="w-3 h-3 text-gold fill-gold" />
            in Toronto, Canada.
          </p>
          <div className="flex items-center gap-6">
            {[
              { href: '/privacy', label: 'Privacy Policy' },
              { href: '/terms', label: 'Terms of Service' },
              { href: '/sitemap.xml', label: 'Sitemap' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-inter text-xs text-ivory/40 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

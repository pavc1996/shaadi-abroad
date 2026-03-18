'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/destinations', label: 'Destinations' },
  { href: '/packages', label: 'Packages' },
  { href: '/real-weddings', label: 'Real Weddings' },
  { href: '/process', label: 'Our Process' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Journal' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isTransparent
          ? 'bg-transparent'
          : 'bg-ivory/95 backdrop-blur-md border-b border-champagne shadow-sm'
      )}
    >
      {/* Top bar */}
      <div className={cn(
        'hidden lg:block transition-all duration-500',
        isTransparent ? 'bg-maroon/80' : 'bg-maroon'
      )}>
        <div className="container-custom flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a
              href="tel:+14165550100"
              className="flex items-center gap-1.5 text-ivory/90 hover:text-ivory text-xs font-inter transition-colors"
            >
              <Phone className="w-3 h-3" />
              +1 (416) 555-0100
            </a>
            <span className="text-ivory/50">|</span>
            <a
              href="mailto:hello@shaadiabroad.com"
              className="text-ivory/90 hover:text-ivory text-xs font-inter transition-colors"
            >
              hello@shaadiabroad.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-ivory/70 text-xs font-inter">Canada's Premier Indian Destination Wedding Company</span>
            <a
              href="https://instagram.com/shaadiabroad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/90 hover:text-ivory transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <span className={cn(
              'font-playfair font-bold text-2xl leading-none tracking-wide transition-colors duration-300',
              isTransparent ? 'text-ivory' : 'text-maroon'
            )}>
              Shaadi Abroad
            </span>
            <span className={cn(
              'font-inter text-xs tracking-widest uppercase transition-colors duration-300 mt-0.5',
              isTransparent ? 'text-gold' : 'text-gold'
            )}>
              Destination Wedding Experts
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-inter text-sm tracking-wide transition-colors duration-200 relative group',
                  isTransparent ? 'text-ivory/90 hover:text-ivory' : 'text-charcoal hover:text-maroon',
                  pathname === link.href && (isTransparent ? 'text-gold' : 'text-maroon')
                )}
              >
                {link.label}
                <span className={cn(
                  'absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full',
                  pathname === link.href && 'w-full'
                )} />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact" className={cn(
              'font-inter text-sm tracking-wide transition-colors duration-200',
              isTransparent ? 'text-ivory/90 hover:text-ivory' : 'text-charcoal hover:text-maroon'
            )}>
              Contact
            </Link>
            <Link
              href="/inquire"
              className={cn(
                'inline-flex items-center justify-center px-6 py-2.5 font-inter font-semibold text-xs tracking-widest uppercase rounded-sm transition-all duration-300',
                isTransparent
                  ? 'bg-gold text-charcoal hover:bg-gold-dark'
                  : 'bg-maroon text-ivory hover:bg-maroon-dark'
              )}
            >
              Start Planning
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={cn(
              'lg:hidden p-2 rounded-sm transition-colors',
              isTransparent ? 'text-ivory hover:bg-white/10' : 'text-charcoal hover:bg-beige'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-ivory border-t border-champagne shadow-xl">
          <div className="container-custom py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block py-3 px-4 font-inter text-base text-charcoal hover:text-maroon hover:bg-beige rounded-sm transition-colors',
                  pathname === link.href && 'text-maroon font-semibold bg-beige'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block py-3 px-4 font-inter text-base text-charcoal hover:text-maroon hover:bg-beige rounded-sm transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 px-4">
              <Link
                href="/inquire"
                className="block w-full text-center py-3.5 bg-maroon text-ivory font-inter font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-maroon-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Planning
              </Link>
            </div>
            <div className="pt-2 px-4 pb-2">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <a href="tel:+14165550100" className="flex items-center gap-1.5 hover:text-maroon transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  +1 (416) 555-0100
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

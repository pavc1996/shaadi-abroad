import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Shaadi Abroad — Your Dream Indian Wedding, Beyond Borders',
    template: '%s | Shaadi Abroad',
  },
  description:
    'Canada\'s premier Indian destination wedding planning company. We orchestrate breathtaking Indian weddings in Cancun, Punta Cana, Jamaica, Italy, Dubai, and Thailand. Trusted by 500+ guests, 50+ weddings, 100% satisfaction.',
  keywords: [
    'Indian destination wedding',
    'Indian wedding abroad',
    'South Asian destination wedding',
    'Indian wedding planner Canada',
    'destination wedding Cancun',
    'Indian wedding Mexico',
    'Hindu wedding abroad',
    'Shaadi abroad',
    'luxury Indian wedding',
    'destination wedding Canada',
  ],
  authors: [{ name: 'Shaadi Abroad' }],
  creator: 'Shaadi Abroad',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.shaadiabroad.com',
    siteName: 'Shaadi Abroad',
    title: 'Shaadi Abroad — Your Dream Indian Wedding, Beyond Borders',
    description:
      'Canada\'s premier Indian destination wedding planning company. Luxurious, culturally rich weddings in the world\'s most stunning destinations.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Shaadi Abroad — Luxury Indian Destination Weddings',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaadi Abroad — Your Dream Indian Wedding, Beyond Borders',
    description: 'Canada\'s premier Indian destination wedding planning company.',
    images: ['https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Shaadi Abroad',
              url: 'https://www.shaadiabroad.com',
              logo: 'https://www.shaadiabroad.com/logo.png',
              description: "Canada's premier Indian destination wedding planning company",
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Toronto',
                addressRegion: 'Ontario',
                addressCountry: 'CA',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-416-555-0100',
                contactType: 'customer service',
                availableLanguage: ['English', 'Hindi', 'Punjabi', 'Gujarati'],
              },
              sameAs: [
                'https://www.instagram.com/shaadiabroad',
                'https://www.facebook.com/shaadiabroad',
                'https://www.pinterest.com/shaadiabroad',
                'https://www.tiktok.com/@shaadiabroad',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-ivory text-charcoal font-inter antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

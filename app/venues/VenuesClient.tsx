'use client';

import { useState } from 'react';
import Link from 'next/link';

type Package = {
  name: string;
  price: string;
};

type Resort = {
  name: string;
  location: string;
  description: string;
  highlights: string[];
  packages: Package[];
  capacity: string;
  indianFeatures: string[];
  bestFor: string;
  tier: 'ultra-luxury' | 'luxury' | 'premium';
};

type Destination = {
  name: string;
  flag: string;
  resorts: Resort[];
};

type Region = {
  id: string;
  label: string;
  icon: string;
  destinations: Destination[];
};

const regions: Region[] = [
  {
    id: 'caribbean',
    label: 'Caribbean',
    icon: '🌊',
    destinations: [
      {
        name: 'Cancun & Riviera Maya, Mexico',
        flag: '🇲🇽',
        resorts: [
          {
            name: 'Excellence Playa Mujeres',
            location: 'Playa Mujeres, Cancun',
            tier: 'ultra-luxury',
            description:
              'An adults-only ultra-luxury all-inclusive on a pristine private beach north of Cancun. Excellence is one of the most requested resorts for South Asian weddings in Mexico, featuring an on-site Indian restaurant (Basmati) and a dedicated multicultural events team.',
            highlights: [
              '11 swimming pools and 9 restaurants including Basmati Indian restaurant',
              'Exclusive beach and garden ceremony spaces',
              'Butler service for all guests',
              'No room minimum for group bookings',
            ],
            packages: [
              { name: 'Celebration', price: 'From $5,500 USD' },
              { name: 'Classic', price: 'From $8,900 USD' },
              { name: 'Ultimate', price: 'From $14,500 USD' },
            ],
            capacity: 'Up to 300 guests',
            indianFeatures: [
              'On-site Basmati Indian restaurant for authentic catering',
              'Dedicated South Asian wedding coordinator',
              'Mandap setup on beachfront or garden lawn',
              'Mehendi & Sangeet event spaces',
              'Vegetarian and Jain menu options available',
            ],
            bestFor: 'Couples wanting luxury all-inclusive with built-in Indian cuisine and 100–300 guests',
          },
          {
            name: 'Secrets Maroma Beach',
            location: 'Playa del Carmen, Riviera Maya',
            tier: 'ultra-luxury',
            description:
              "Nestled along one of the world's most acclaimed beaches, Secrets Maroma Beach offers intimate luxury with stunning cenote-fed ocean waters. The resort explicitly offers a South Asian Wedding package and has hosted numerous Indian celebrations.",
            highlights: [
              'Ranked among the world\'s top beaches (TripAdvisor)',
              'Spectacular beachfront and garden event lawns',
              'World-class spa & wellness facilities',
              'Chef-driven culinary program with customizable menus',
            ],
            packages: [
              { name: 'South Asian', price: 'From $7,200 USD' },
              { name: 'Signature', price: 'From $9,500 USD' },
              { name: 'Ultimate', price: 'From $16,000 USD' },
            ],
            capacity: 'Up to 250 guests',
            indianFeatures: [
              'Named South Asian Wedding Package with dedicated planner',
              'Baraat procession along beachfront promenade',
              'Customizable Indian vegetarian menus',
              'Outdoor fire ceremony coordination',
              'Mandap installation on beachfront or lawn',
            ],
            bestFor: 'Couples wanting a world-class beach backdrop with strong Indian wedding program support',
          },
          {
            name: 'Dreams Playa Mujeres',
            location: 'Playa Mujeres, Cancun',
            tier: 'luxury',
            description:
              'A vibrant luxury all-inclusive resort for families and couples, Dreams Playa Mujeres offers the "Dulha & Dulhan" Indian wedding package — one of the few resorts with a specifically named Hindu ceremony program. Features an over-water ceremony platform unique in the Caribbean.',
            highlights: [
              'Exclusive over-water ceremony platform (unique in Mexico)',
              'Multi-generational resort welcoming all ages',
              'Unlimited-Luxury® program includes all food and beverages',
              'Dedicated group event coordination team',
            ],
            packages: [
              { name: 'Dulha & Dulhan', price: 'From $5,600 USD + taxes' },
              { name: 'Wishes Luxury', price: 'From $8,200 USD' },
              { name: 'Ultimate', price: 'From $13,500 USD' },
            ],
            capacity: 'Up to 400 guests',
            indianFeatures: [
              'Named "Dulha & Dulhan" Hindu wedding ceremony package',
              'Over-water platform for Pheras ceremony — truly unique',
              'Indian catering coordination with outside vendors allowed',
              'Mehndi event spaces with garden settings',
              'Family-friendly (grandparents & children welcome)',
            ],
            bestFor: 'Multi-generational Indian families wanting a unique over-water ceremony experience',
          },
          {
            name: 'Barceló Maya Palace',
            location: 'Riviera Maya',
            tier: 'luxury',
            description:
              'The crown jewel of the Barceló Maya Grand Resort complex, Barceló Maya Palace is arguably the most Indian-wedding-ready resort in all of Mexico. With three dedicated South Asian packages, a resident henna artist, and capacity for up to 1,000 guests, this is the go-to choice for large Indian celebrations.',
            highlights: [
              'Part of a 6-resort complex with 2,400+ rooms',
              'Massive event lawns and ballrooms for up to 1,000 guests',
              'Convention Centre with state-of-the-art AV',
              'Resident henna artist and Indian entertainment coordination',
            ],
            packages: [
              { name: 'Sangam', price: 'From $6,500 USD' },
              { name: 'Shaadi', price: 'From $12,000 USD' },
              { name: 'Maharajah', price: 'From $22,000 USD' },
            ],
            capacity: 'Up to 1,000 guests',
            indianFeatures: [
              'Three dedicated Indian wedding packages (Sangam, Shaadi, Maharajah)',
              'Resident henna artist included in Shaadi & Maharajah packages',
              'Indian vegetarian and Jain buffet catering available',
              'Baraat procession route through resort grounds',
              'Full Hindu ceremony coordination with mandap setup',
              'Largest Indian wedding capacity in Mexico',
            ],
            bestFor: 'Large Indian weddings 200–1,000 guests wanting the most established Indian wedding program in Mexico',
          },
        ],
      },
      {
        name: 'Punta Cana, Dominican Republic',
        flag: '🇩🇴',
        resorts: [
          {
            name: 'Hard Rock Hotel & Casino Punta Cana',
            location: 'Punta Cana, Dominican Republic',
            tier: 'luxury',
            description:
              'The Hard Rock Punta Cana is a powerhouse for Indian destination weddings. With permanently stationed Indian Wedding Specialists, 11 distinct event venues, and capacity for 1,000 guests, it is one of the most operationally capable resorts in the Caribbean for South Asian celebrations.',
            highlights: [
              '11 distinctive wedding and event venues on property',
              'Permanent Indian Wedding Specialist on staff year-round',
              'Casino, world-class spa, and entertainment complex',
              'Rockstar Suite accommodations with butler service',
            ],
            packages: [
              { name: 'Harmony', price: 'From $6,800 USD' },
              { name: 'Devotion', price: 'From $11,500 USD' },
              { name: 'Forever After', price: 'From $18,500 USD' },
            ],
            capacity: 'Up to 1,000 guests',
            indianFeatures: [
              'Dedicated Indian Wedding Specialists permanently on staff',
              'Full Mandap setup across multiple outdoor venues',
              'Indian catering with South Asian executive chef consultants',
              'Dhol, baraat & procession services coordinated on-site',
              'Mehendi pavilions and Sangeet ballroom options',
              'Fire ceremony (Agni) coordination available',
            ],
            bestFor: 'Large Indian weddings 250–1,000 guests wanting dedicated Indian wedding staff and maximum event flexibility',
          },
          {
            name: 'Excellence El Carmen',
            location: 'Punta Cana, Dominican Republic',
            tier: 'ultra-luxury',
            description:
              'Excellence El Carmen is the flagship of the Excellence Collection — a boutique ultra-luxury adults-only all-inclusive that delivers white-glove service. Ideal for intimate to mid-size Indian weddings with a refined aesthetic and world-class dining.',
            highlights: [
              'Adults-only boutique ultra-luxury (only 192 suites)',
              'Beachfront ceremony lawn with direct ocean backdrop',
              'Butler service standard for all guests',
              'Multiple Michelin-caliber dining restaurants',
            ],
            packages: [
              { name: 'Classic', price: 'From $5,200 USD' },
              { name: 'Signature', price: 'From $9,800 USD' },
              { name: 'Ultimate', price: 'From $15,500 USD' },
            ],
            capacity: 'Up to 200 guests',
            indianFeatures: [
              'Dedicated multicultural wedding planner',
              'Customizable South Asian catering menus',
              'Beachfront mandap installation space',
              'Private event lawns for Mehndi & Sangeet',
              'Vegetarian menu customization available',
            ],
            bestFor: 'Intimate to mid-size Indian weddings 75–200 guests wanting ultra-luxury boutique service',
          },
          {
            name: 'Barceló Bávaro Palace',
            location: 'Punta Cana, Dominican Republic',
            tier: 'luxury',
            description:
              'One of the largest and most celebrated resorts in Punta Cana, Barceló Bávaro Palace combines massive event capacity with a stunning 5km beachfront. Part of the same Barceló group that pioneered Indian wedding programming in Mexico, bringing established South Asian expertise to the Dominican Republic.',
            highlights: [
              '5km of pristine beachfront on Bávaro Beach',
              'Convention centre with 3,000+ sqm of event space',
              'Thousands of on-site rooms for large groups',
              'Full entertainment complex with live shows',
            ],
            packages: [
              { name: 'Basic', price: 'From $4,500 USD' },
              { name: 'Classic', price: 'From $8,000 USD' },
              { name: 'Premium', price: 'From $14,000 USD' },
            ],
            capacity: 'Up to 800 guests',
            indianFeatures: [
              'South Asian wedding coordination from Barceló Group experts',
              'Indian catering and Jain menu options',
              'Baraat-ready beachfront promenade and main entrance',
              'Large indoor ballroom for Sangeet & Reception',
              'Henna artist coordination available',
            ],
            bestFor: 'Large Indian weddings 200–800 guests wanting beach + ballroom flexibility at a great value',
          },
        ],
      },
      {
        name: 'Jamaica',
        flag: '🇯🇲',
        resorts: [
          {
            name: 'Moon Palace Jamaica',
            location: 'Ocho Rios, Jamaica',
            tier: 'luxury',
            description:
              'Moon Palace Jamaica is Jamaica\'s premier Indian wedding resort. With a resident Indian chef, a unique room-block-based complimentary event hours system, and multiple dedicated event venues, it offers exceptional value for Indian wedding groups of 100–400 guests.',
            highlights: [
              'Up to 9 hours complimentary private events (25–35 rooms booked)',
              'Resident Indian chef for authentic on-site catering',
              'Multiple indoor and outdoor event venues',
              'Golf, water sports, and entertainment for guests',
            ],
            packages: [
              { name: 'Romance', price: 'From $4,800 USD' },
              { name: 'Celebration', price: 'From $9,500 USD' },
              { name: 'Grand', price: 'From $16,000 USD' },
            ],
            capacity: 'Up to 400 guests',
            indianFeatures: [
              'Resident Indian chef — authentic curries and biryanis on-site',
              'Complimentary private event hours tied to room bookings',
              'Outdoor garden ceremony spaces for Mandap setup',
              'Baraat coordination with resort event team',
              'Indoor Sangeet ballroom with AV systems',
              'Mehndi garden terrace settings',
            ],
            bestFor: 'Indian families seeking authentic on-site Indian catering and maximum value for 100–400 guests',
          },
          {
            name: 'Round Hill Hotel & Villas',
            location: 'Montego Bay, Jamaica',
            tier: 'ultra-luxury',
            description:
              'The most exclusive private resort in Jamaica, Round Hill sits on a 110-acre private peninsula in Montego Bay. Favoured by royalty and celebrities, it offers a full resort buyout option perfect for ultra-exclusive Indian weddings of up to 120 guests who want complete privacy.',
            highlights: [
              '110-acre private peninsula, full resort buyout available',
              'Historic Jamaican great house converted to event venue',
              'Private villas with personal housekeepers',
              'Designed by Ralph Lauren with iconic WASPY chic aesthetic',
            ],
            packages: [
              { name: 'Buyout Package', price: 'From $85,000 USD / 3 nights' },
              { name: 'Partial Buyout', price: 'Pricing on request' },
            ],
            capacity: 'Up to 120 guests (full buyout)',
            indianFeatures: [
              'Full resort buyout ensures complete privacy for Indian celebrations',
              'Outdoor garden ceremony with Great House backdrop',
              'Executive chef will create custom Indian menus on request',
              'Indian caterers can be brought in under buyout terms',
              'Beach, clifftop, and garden ceremony location options',
            ],
            bestFor: 'Ultra-exclusive Indian weddings 50–120 guests wanting complete privacy in a legendary setting',
          },
          {
            name: 'Sandals Montego Bay',
            location: 'Montego Bay, Jamaica',
            tier: 'luxury',
            description:
              'The original Sandals resort on a stunning private beachfront in Montego Bay. As a couples-only resort, Sandals is best suited for intimate civil ceremonies, honeymoons, or small symbolic vow exchanges rather than large traditional Hindu weddings.',
            highlights: [
              'Iconic private beachfront in Montego Bay',
              'WeddingMoons® ceremony program',
              'Complimentary ceremony for select room bookings',
              'Couples-only atmosphere for romantic privacy',
            ],
            packages: [
              { name: 'WeddingMoon', price: 'Complimentary with stay' },
              { name: 'Intimate', price: 'From $2,500 USD' },
              { name: 'Signature', price: 'From $6,500 USD' },
            ],
            capacity: 'Up to 60 guests (couples-only resort)',
            indianFeatures: [
              'Best for civil ceremony or symbolic Pheras only',
              'Small mehendi celebration possible in private villa',
              'Custom menus on request for intimate group dinners',
              'Note: Full Hindu fire ceremonies require special coordination',
            ],
            bestFor: 'Honeymoon couples or very small intimate symbolic ceremonies of 20–50 guests',
          },
        ],
      },
      {
        name: 'Bahamas',
        flag: '🇧🇸',
        resorts: [
          {
            name: 'Atlantis Paradise Island',
            location: 'Nassau, Bahamas',
            tier: 'luxury',
            description:
              'Atlantis runs the Caribbean\'s most formally branded Indian wedding program — "Pyaar Atlantis" (pyaar meaning love in Hindi). With a dedicated Indian wedding microsite, transparent pricing, and an experienced South Asian weddings team, Atlantis is the most operationally Indian-wedding-ready resort in the Bahamas.',
            highlights: [
              '"Pyaar Atlantis" — dedicated Indian wedding program',
              'Iconic resort with waterpark, casino, and 11km of beach',
              'Multiple event venues from outdoor terraces to grand ballrooms',
              'Site inspection fee credited toward wedding booking',
            ],
            packages: [
              { name: 'Pyaar Sangeet', price: 'From $5,650 USD (50 guests)' },
              { name: 'Pyaar Shaadi', price: 'From $9,800 USD (75 guests)' },
              { name: 'Pyaar Grand', price: 'From $15,300 USD (100 guests)' },
            ],
            capacity: 'Up to 600 guests',
            indianFeatures: [
              'Dedicated "Pyaar Atlantis" Indian wedding program',
              'South Asian specialist wedding planner assigned',
              'Full Hindu ceremony with Agni (fire) coordination',
              'Mandap installation on beach, terrace, or ballroom',
              'Indian catering and Jain/vegetarian menus',
              'Dhol players, baraat, and procession arrangements',
            ],
            bestFor: 'Indian weddings wanting a landmark Caribbean destination with the most organized Indian wedding program in the Bahamas',
          },
        ],
      },
    ],
  },
  {
    id: 'europe',
    label: 'Europe',
    icon: '🏛️',
    destinations: [
      {
        name: 'Amalfi Coast, Italy',
        flag: '🇮🇹',
        resorts: [
          {
            name: 'Villa Cimbrone',
            location: 'Ravello, Amalfi Coast',
            tier: 'ultra-luxury',
            description:
              'Perched 350 metres above the Tyrrhenian Sea on Ravello\'s clifftops, Villa Cimbrone is arguably the most breathtaking wedding venue in the world. Its Terrace of Infinity — lined with baroque statues — provides an unrivalled backdrop for symbolic Hindu ceremonies.',
            highlights: [
              'Terrace of Infinity overlooking 180° views of the Mediterranean',
              'Medieval villa with manicured historic gardens',
              'Exclusive venue hire (no other events on your day)',
              'UNESCO World Heritage Site setting in Ravello',
            ],
            packages: [
              { name: 'Garden Ceremony', price: 'From €15,000 venue fee' },
              { name: 'Full Day Exclusive', price: 'From €28,000' },
            ],
            capacity: 'Up to 100 guests',
            indianFeatures: [
              'Terraced gardens perfect for Mandap installation',
              'Fire ceremony coordination with municipal permit assistance',
              'Indian caterer access — outside vendors permitted',
              'Baraat arrival via Ravello village procession',
              'Haldi & Mehendi in private gardens the day prior',
            ],
            bestFor: 'Intimate Italian Indian weddings of 40–100 guests seeking the most iconic clifftop setting in Europe',
          },
          {
            name: 'Belmond Hotel Caruso',
            location: 'Ravello, Amalfi Coast',
            tier: 'ultra-luxury',
            description:
              'A converted 11th-century bishop\'s palace with an infinity pool suspended above the coastline, Belmond Hotel Caruso combines medieval grandeur with 5-star luxury. One of the most sought-after small-luxury wedding hotels on the Amalfi Coast.',
            highlights: [
              'Infinity pool terrace with panoramic Amalfi Coast views',
              'Converted 11th-century palazzo with original frescoes',
              'Belmond Luxury Group — among the world\'s finest hospitality brands',
              'Exclusive use buyout available for full-resort events',
            ],
            packages: [
              { name: 'Terrace Ceremony', price: 'From €20,000 venue fee' },
              { name: 'Full Property', price: 'From €65,000 exclusive buyout' },
            ],
            capacity: 'Up to 60 guests (standard) / 120 guests (full buyout)',
            indianFeatures: [
              'Infinity terrace lawn for outdoor Mandap installation',
              'Belmond executive chef creates custom Indian tasting menus',
              'Indian vendor access — external caterers and pandit allowed',
              'Private terrace for Haldi and Mehendi events',
              'Fire ceremony coordination with local council assistance',
            ],
            bestFor: 'Ultra-luxurious intimate Indian weddings 30–60 guests wanting a private palazzo experience',
          },
        ],
      },
      {
        name: 'Puglia, Italy',
        flag: '🇮🇹',
        resorts: [
          {
            name: 'Borgo Egnazia',
            location: 'Savelletri di Fasano, Puglia',
            tier: 'ultra-luxury',
            description:
              'Widely regarded as Europe\'s finest resort for Indian destination weddings, Borgo Egnazia is a masterpiece recreation of a historic Puglian village. The resort has hosted some of Europe\'s most celebrated Indian weddings and is the only Italian property with a fully formalized South Asian wedding program including dedicated mandap design, Agni provisions for Mangal Pheras, and Saptapadi coordination.',
            highlights: [
              'Europe\'s #1 Indian wedding resort (multiple industry awards)',
              'Recreated Puglian village with trulli, masseria, and piazzas',
              'Dedicated South Asian Events Director on permanent staff',
              '4,000 sqm of outdoor event spaces across multiple settings',
            ],
            packages: [
              { name: 'Celebrations', price: 'From €45,000' },
              { name: 'Royal Puglia', price: 'From €85,000' },
              { name: 'Maharajah', price: 'From €150,000+' },
            ],
            capacity: 'Up to 350 guests',
            indianFeatures: [
              'Europe\'s only resort with a fully formalized South Asian wedding program',
              'Dedicated mandap design team and fire pit (Agni) installations',
              'Agni provisions for Mangal Pheras — legal fire ceremonies within resort',
              'Saptapadi (seven steps) coordination with resident pandit network',
              'Indian catering team — Puglian kitchens adapt to masalas and Indian spice',
              'Dhol players flown in from Milan and Rome — pre-arranged partnerships',
              'Mehendi pavilion setups in fragrant citrus gardens',
              'Baraat procession through the reconstructed village piazza',
            ],
            bestFor: 'The ultimate Italian Indian wedding 100–350 guests — Europe\'s most accomplished venue for full Hindu ceremonies',
          },
        ],
      },
      {
        name: 'Santorini, Greece',
        flag: '🇬🇷',
        resorts: [
          {
            name: 'Canaves Oia Epitome',
            location: 'Oia, Santorini',
            tier: 'ultra-luxury',
            description:
              'Canaves Oia Epitome is the most sought-after wedding venue in Santorini — a clifftop collection of cave suites and infinity pools with unobstructed views of the Caldera and Aegean Sea. Ideal for intimate symbolic Hindu ceremonies or elopements.',
            highlights: [
              'World\'s most photographed Caldera views from Oia clifftop',
              'Private infinity pools for each suite',
              'Santorini\'s highest-rated boutique luxury hotel',
              'Exclusive-use buyout available for truly private events',
            ],
            packages: [
              { name: 'Intimate', price: 'From €6,000 (25 guests)' },
              { name: 'Celebration', price: 'From €14,000 (50 guests)' },
            ],
            capacity: 'Up to 60 guests',
            indianFeatures: [
              'Cliff-edge symbolic Hindu ceremony with Caldera backdrop',
              'Small Mehendi dinner setups on private terraces',
              'Custom Indian-inspired menu by resort executive chef',
              'Note: Open fire ceremonies not permitted on Santorini (fire risk regulations)',
              'Best for symbolic ceremonies, vow renewals, or elopements',
            ],
            bestFor: 'Intimate Indian weddings 20–60 guests wanting the world\'s most iconic backdrop for a symbolic ceremony',
          },
          {
            name: 'Mystique, a Luxury Collection Hotel',
            location: 'Oia, Santorini',
            tier: 'ultra-luxury',
            description:
              'Hewn into the volcanic rock of Oia\'s caldera cliffs, Mystique is Marriott\'s Luxury Collection flagship in Santorini. Dramatic terraced architecture, cave suites, and a legendary clifftop restaurant create an unforgettable setting for intimate celebrations.',
            highlights: [
              'Dramatic cave-suite architecture carved into volcanic cliffs',
              'Clifftop swimming pools with 360° Aegean views',
              'Marriott Luxury Collection service standards',
              'Intimate boutique property — complete exclusivity possible',
            ],
            packages: [
              { name: 'Symbolic Ceremony', price: 'From €8,500' },
              { name: 'Celebration Dinner', price: 'From €16,000' },
            ],
            capacity: 'Up to 80 guests',
            indianFeatures: [
              'Clifftop terrace for symbolic Pheras with Caldera backdrop',
              'Executive chef creates custom tasting menus on request',
              'Small Mehendi celebration on private terrace possible',
              'Indian floral decorators permitted with advance approval',
              'Note: Fire ceremonies not feasible — symbolic ceremony recommended',
            ],
            bestFor: 'Couples seeking ultra-dramatic volcanic cliff setting for a luxurious symbolic ceremony and reception dinner',
          },
          {
            name: 'Katikies Hotel',
            location: 'Oia, Santorini',
            tier: 'ultra-luxury',
            description:
              'Katikies has graced the covers of Condé Nast Traveler and Travel+Leisure for decades. Famous for its pure-white Cycladic architecture cascading down the Oia caldera, it is one of Greece\'s most-requested intimate wedding venues.',
            highlights: [
              'Iconic Condé Nast Traveler cover-featured property',
              'Three tiered infinity pools at different cliff levels',
              'Gourmet Greek cuisine with Mediterranean wine cellar',
              'Buyout available for complete group privacy',
            ],
            packages: [
              { name: 'Ceremony Package', price: 'From €7,000' },
              { name: 'Wedding Dinner', price: 'From €18,000' },
            ],
            capacity: 'Up to 70 guests',
            indianFeatures: [
              'Sunset ceremony on iconic white-washed Cycladic terrace',
              'Custom menu design available with Indian-Mediterranean fusion',
              'Small Sangeet dinner setup on terrace possible',
              'External Indian floral designer access with coordination',
              'Best suited to symbolic ceremonies and reception dinners',
            ],
            bestFor: 'Couples wanting a legendary Greek setting for a refined symbolic ceremony and gourmet Indian-Mediterranean fusion reception',
          },
        ],
      },
    ],
  },
  {
    id: 'asia',
    label: 'Middle East & Asia',
    icon: '🌏',
    destinations: [
      {
        name: 'Dubai, UAE',
        flag: '🇦🇪',
        resorts: [
          {
            name: 'Atlantis The Palm',
            location: 'Palm Jumeirah, Dubai',
            tier: 'ultra-luxury',
            description:
              'One of the world\'s most iconic resorts and the premier destination for Indian weddings in Dubai. Atlantis The Palm has a dedicated Indian wedding team with transparent Mehendi and Sangeet package pricing, making it the most operationally ready resort for large Indian celebrations in the UAE.',
            highlights: [
              'Iconic Palm Jumeirah location recognisable worldwide',
              '17,000 sqm of event space across multiple settings',
              'Aquaventure waterpark for guest entertainment',
              'Dedicated Indian weddings team year-round',
            ],
            packages: [
              { name: 'Mehendi Package', price: 'From AED 50,000 (100 pax)' },
              { name: 'Sangeet Package', price: 'AED 280 per person' },
              { name: 'Grand Shaadi', price: 'Pricing on request' },
            ],
            capacity: 'Up to 1,000 guests',
            indianFeatures: [
              'Dedicated Indian Wedding Team on permanent staff',
              'Transparent Mehendi and Sangeet pricing published',
              'Mandap installation in Royal Ballroom or outdoor amphitheatre',
              'Indian catering coordination — South Asian executive chef consultants',
              'Dhol players, baraat route, and procession managed in-house',
              'Fire ceremony (Agni) coordination with Dubai permitting team',
            ],
            bestFor: 'Large Indian weddings 200–1,000 guests wanting the most iconic Dubai venue with full Indian wedding infrastructure',
          },
          {
            name: 'One&Only Royal Mirage',
            location: 'Jumeirah Beach, Dubai',
            tier: 'ultra-luxury',
            description:
              'A magnificent Moorish palace resort spread across 65 acres of manicured gardens on Jumeirah Beach. The One&Only Royal Mirage is Dubai\'s most architecturally opulent resort — offering 2,500 sqm of event space and the most romantic setting for Indian celebrations in the emirate.',
            highlights: [
              'Moorish palace architecture across 65 manicured acres',
              '2,500 sqm of event space including garden terraces',
              'Capacity for 700 guests across multiple settings',
              'One&Only\'s legendary personalized butler service',
            ],
            packages: [
              { name: 'Palace Celebration', price: 'From AED 85,000' },
              { name: 'Garden Shaadi', price: 'From AED 150,000' },
              { name: 'Grand Royal', price: 'Pricing on request' },
            ],
            capacity: 'Up to 700 guests',
            indianFeatures: [
              'Moorish garden terraces ideal for outdoor Mandap setups',
              'Indian wedding cultural consultant assigned',
              'Fire ceremony permitted in garden settings with coordination',
              'Customizable Indian catering from One&Only culinary team',
              'Private beach for baraat arrival and sunset ceremonies',
              'Jasmine and rose petal decor available through resort floristry',
            ],
            bestFor: 'Indian weddings 100–700 guests wanting the most romantic, palace-like architectural setting in Dubai',
          },
          {
            name: 'Waldorf Astoria Dubai Palm Jumeirah',
            location: 'Palm Jumeirah, Dubai',
            tier: 'ultra-luxury',
            description:
              'The Waldorf Astoria on Palm Jumeirah delivers sophisticated luxury with a grand ballroom described as having an "Indian touch" in its design. With transparent per-person pricing and a dedicated South Asian events team, it offers one of the most organized wedding programs in Dubai.',
            highlights: [
              'Grand ballroom with Indian-inspired design elements',
              'Transparent per-person wedding pricing published',
              'Palm Jumeirah\'s most understated luxury property',
              'Hilton Honors points and benefits for guests',
            ],
            packages: [
              { name: 'Classic', price: 'AED 360 per person' },
              { name: 'Signature', price: 'AED 435 per person' },
              { name: 'Royal', price: 'Pricing on request' },
            ],
            capacity: 'Up to 500 guests',
            indianFeatures: [
              'Grand ballroom with Indian-inspired architectural details',
              'South Asian weddings events team on staff',
              'Mandap installation and ceremonial stage design',
              'South Asian catering specialists available',
              'Fire ceremony (Agni) coordination with Dubai municipality',
              'Baraat arrival coordination through hotel grounds',
            ],
            bestFor: 'Indian weddings 100–500 guests wanting transparent pricing and a ballroom with Indian design sensibility',
          },
        ],
      },
      {
        name: 'Maldives',
        flag: '🇲🇻',
        resorts: [
          {
            name: 'Soneva Jani',
            location: 'Noonu Atoll, Maldives',
            tier: 'ultra-luxury',
            description:
              'One of the Maldives\' most spectacular overwater villa resorts, Soneva Jani offers a once-in-a-lifetime setting for intimate Indian wedding celebrations. The resort\'s philosophy of barefoot luxury and environmental consciousness pairs beautifully with smaller, intimate Hindu ceremonies.',
            highlights: [
              'Overwater villas with retractable roofs for stargazing',
              'Private freshwater pools in every villa',
              'Eco-luxury philosophy with zero-waste kitchens',
              'Cinema under the stars on a sandbank',
            ],
            packages: [
              { name: 'Intimate Ceremony', price: 'From $18,000 USD' },
              { name: 'Celebration', price: 'Pricing on request' },
            ],
            capacity: 'Up to 40 guests',
            indianFeatures: [
              'Overwater ceremony platform for symbolic Pheras at sunrise/sunset',
              'Custom Indian-inspired menu by resort\'s Maldivian chef team',
              'Private sandbank Mehendi setup available',
              'Floral design using tropical blooms with marigold-inspired arrangements',
              'Note: Fire ceremonies not feasible in overwater settings',
            ],
            bestFor: 'Intimate Indian elopements or honeymoons 10–40 guests wanting the most extraordinary overwater setting',
          },
          {
            name: 'Gili Lankanfushi',
            location: 'North Malé Atoll, Maldives',
            tier: 'ultra-luxury',
            description:
              'A legendary overwater resort with no children under 12 and the Secret Wedding Experience — one of the most celebrated intimate wedding packages in the Maldives. An extraordinary setting for symbolic Indian ceremonies in total privacy.',
            highlights: [
              'Overwater villas connected by 1.4km of jetty',
              'Secret Wedding Experience from $13,489 USD',
              'Adults-focused atmosphere (no children under 12)',
              'National Geographic Unique Lodges of the World member',
            ],
            packages: [
              { name: 'Secret Wedding', price: 'From $13,489 USD' },
              { name: 'Celebration Dinner', price: 'From $8,500 USD' },
            ],
            capacity: 'Up to 50 guests',
            indianFeatures: [
              'Overwater ceremony gazebo for symbolic Hindu Pheras',
              'Custom Indian-influenced tasting menus on request',
              'Private Mehendi tea celebration on villa deck',
              'Tropical floral arrangements with saffron and marigold tones',
              'Note: Best for symbolic ceremonies — fire not feasible',
            ],
            bestFor: 'Intimate Indian honeymoon weddings 10–50 guests wanting a legendary overwater experience',
          },
        ],
      },
      {
        name: 'Bali, Indonesia',
        flag: '🇮🇩',
        resorts: [
          {
            name: 'Four Seasons Resort at Jimbaran Bay',
            location: 'Jimbaran Bay, Bali',
            tier: 'ultra-luxury',
            description:
              'Terraced down a hillside to the white sands of Jimbaran Bay, the Four Seasons Jimbaran is Bali\'s most revered wedding resort. Set against the Hindu-influenced landscape of Bali, it is naturally aligned with Indian cultural ceremonies and offers a dedicated weddings team.',
            highlights: [
              'Hillside terraced villas to private Jimbaran beachfront',
              'Dedicated Four Seasons wedding team',
              'Hindu Balinese spiritual setting naturally complementary to Indian ceremonies',
              'Base wedding package from $15,700 USD for 30 guests',
            ],
            packages: [
              { name: 'Intimate', price: 'From $15,700 USD (30 guests)' },
              { name: 'Celebration', price: 'From $28,000 USD' },
              { name: 'Grand', price: 'Pricing on request' },
            ],
            capacity: 'Up to 250 guests',
            indianFeatures: [
              'Hindu Balinese setting — deeply resonant with Indian ceremony traditions',
              'Mandap installation on beachfront or garden event lawn',
              'Fire ceremony coordination — Balinese fire use traditions aligned',
              'Indian caterers and pandit permitted with advance coordination',
              'Baraat on beachfront promenade at sunset',
              'Haldi, Mehendi, and Sangeet across distinct property venues',
            ],
            bestFor: 'Indian weddings 50–250 guests wanting a spiritually resonant Hindu setting with 5-star Four Seasons service',
          },
          {
            name: 'Alila Villas Uluwatu',
            location: 'Uluwatu, Bali',
            tier: 'ultra-luxury',
            description:
              'An award-winning clifftop resort offering a full resort buyout for 400 guests across 86 villa bedrooms. Alila Uluwatu\'s dramatic 70-metre clifftop above the Indian Ocean creates an unparalleled backdrop for large Indian celebrations in Bali.',
            highlights: [
              'Full resort buyout: 86 pool villas for 400 guests',
              '70-metre clifftop above Indian Ocean with infinity pool',
              'Aman-Resorts-connected luxury and design pedigree',
              'Multiple ceremony and event terraces at cliff edge',
            ],
            packages: [
              { name: 'Garden Ceremony', price: 'From $12,000 USD' },
              { name: 'Clifftop Celebration', price: 'From $25,000 USD' },
              { name: 'Full Buyout', price: 'From $180,000 USD / 3 nights' },
            ],
            capacity: 'Up to 400 guests (full buyout)',
            indianFeatures: [
              'Full resort buyout creates complete privacy for Indian celebrations',
              'Clifftop Mandap installation with 270° ocean views',
              'Fire ceremony (Agni) coordination on clifftop event terrace',
              'Indian caterers and Indian chef teams permitted',
              'Baraat procession through resort grounds',
              'Mehendi and Haldi in private villa garden settings',
            ],
            bestFor: 'Large Indian weddings 100–400 guests wanting a complete clifftop resort buyout with dramatic Indian Ocean views',
          },
          {
            name: 'Mandapa, a Ritz-Carlton Reserve',
            location: 'Ubud, Bali',
            tier: 'ultra-luxury',
            description:
              'Set within a private rainforest valley along the sacred Ayung River in Ubud, Mandapa is Bali\'s most spiritually resonant luxury wedding resort. The presence of a 100-year-old Pengiasan Temple on the property creates an extraordinary authentic backdrop for Hindu Indian wedding ceremonies.',
            highlights: [
              '100-year-old Pengiasan Hindu temple on the property',
              'Sacred Ayung River flowing through the resort',
              'Ritz-Carlton Reserve — the most exclusive Ritz brand tier',
              'Jungle river valley setting with complete sensory immersion',
            ],
            packages: [
              { name: 'Temple Ceremony', price: 'From $18,000 USD' },
              { name: 'River Celebration', price: 'From $32,000 USD' },
            ],
            capacity: 'Up to 150 guests',
            indianFeatures: [
              '100-year-old Hindu temple on property — deeply sacred setting for Indian Pheras',
              'Temple ceremonies resonant with Hindu Indian spiritual traditions',
              'Fire ceremony possible with temple blessing coordination',
              'Indian caterer access permitted with Ritz-Carlton culinary team',
              'Jungle river Mandap installation on private event lawn',
              'Haldi ceremony by the sacred river — extraordinarily meaningful',
            ],
            bestFor: 'Indian couples 30–150 guests seeking the most spiritually authentic Hindu setting in the world — a real Hindu temple on property',
          },
        ],
      },
      {
        name: 'Thailand',
        flag: '🇹🇭',
        resorts: [
          {
            name: 'Amanpuri',
            location: 'Phuket, Thailand',
            tier: 'ultra-luxury',
            description:
              'The original Aman resort — Amanpuri launched the concept of ultra-luxury private villa resorts in Asia in 1988. Set on a private peninsula in Phuket, it is the most exclusive wedding venue in Thailand with a minimum spend of $105,000 and an intimate capacity of 100 guests.',
            highlights: [
              'Original Aman resort — the founding property of a legendary brand',
              'Private peninsula on Pansea Beach, Phuket',
              'Thai Pavilion event space with classic Siamese architecture',
              'Minimum spend: $105,930 USD (venue + catering)',
            ],
            packages: [
              { name: 'Intimate', price: 'Min spend $105,930 USD' },
              { name: 'Celebration', price: 'Pricing on request' },
            ],
            capacity: 'Up to 100 guests',
            indianFeatures: [
              'Aman\'s white-glove team will execute any Indian cultural requests',
              'Mandap installation on Thai Pavilion event lawn or beachfront',
              'Custom Indian menu developed with Amanpuri\'s culinary team',
              'Indian caterers and pandit permitted with advance coordination',
              'Note: Blackout period Dec 15 – Feb 15; advance booking essential',
            ],
            bestFor: 'Ultra-high-net-worth Indian couples wanting absolute exclusivity in the world\'s most legendary resort brand',
          },
          {
            name: 'Four Seasons Resort Koh Samui',
            location: 'Koh Samui, Thailand',
            tier: 'ultra-luxury',
            description:
              'Perched on a hillside above the Gulf of Thailand on Koh Samui\'s north coast, Four Seasons Koh Samui offers an intimate luxury experience with the unique option of a private island ceremony on Koh Madsum — a tiny offshore island exclusive to resort guests.',
            highlights: [
              'Private island ceremony option on Koh Madsum island',
              'Hillside infinity pools overlooking the Gulf of Thailand',
              'Four Seasons\'s dedicated wedding team',
              'Base wedding package from $16,200 USD for 30 guests',
            ],
            packages: [
              { name: 'Intimate Island', price: 'From $16,200 USD (30 guests)' },
              { name: 'Celebration', price: 'From $28,500 USD' },
            ],
            capacity: 'Up to 120 guests',
            indianFeatures: [
              'Private island ceremony — completely unique Pheras setting surrounded by ocean',
              'Mandap installation on private island beach or resort event terrace',
              'Indian caterer access permitted with Four Seasons coordination',
              'Indian chef and pandit can be flown in from Bangkok',
              'Haldi and Mehendi at hillside villa settings',
              'Fire ceremony coordination with Thai cultural sensitivity',
            ],
            bestFor: 'Intimate Indian weddings 30–120 guests wanting a once-in-a-lifetime private island ceremony experience',
          },
        ],
      },
    ],
  },
  {
    id: 'other',
    label: 'Indian Ocean',
    icon: '🏝️',
    destinations: [
      {
        name: 'Mauritius',
        flag: '🇲🇺',
        resorts: [
          {
            name: 'One&Only Le Saint Géran',
            location: 'Belle Mare, Mauritius',
            tier: 'ultra-luxury',
            description:
              'The jewel of Mauritius luxury, Le Saint Géran is the only resort in the Indian Ocean with a Michelin-starred Indian restaurant — Rasoi by Vineet — on property. This singular feature makes it the finest choice for Indian couples who prioritize culinary authenticity alongside extraordinary luxury.',
            highlights: [
              'Rasoi by Vineet — Michelin-starred Indian restaurant on property',
              'Dramatic peninsula location on Mauritius\' east coast',
              'One&Only\'s signature ultra-personalized butler service',
              '30 acres of private beachfront grounds',
            ],
            packages: [
              { name: 'Garden Ceremony', price: 'From $12,000 USD' },
              { name: 'Beach Celebration', price: 'From $22,000 USD' },
            ],
            capacity: 'Up to 200 guests',
            indianFeatures: [
              'Rasoi by Vineet — Michelin-starred Indian restaurant for authentic wedding catering',
              'Vineet Bhatia\'s award-winning modern Indian cuisine for the reception dinner',
              'Indian cultural wedding coordinator from One&Only\'s events team',
              'Beachfront Mandap installation on private peninsula',
              'Fire ceremony coordination on beach event lawns',
              'Mehendi and Sangeet in manicured garden settings',
            ],
            bestFor: 'Indian couples 50–200 guests who want a Michelin-starred Indian restaurant and the finest Indian Ocean luxury resort',
          },
          {
            name: 'Constance Belle Mare Plage',
            location: 'Belle Mare, Mauritius',
            tier: 'luxury',
            description:
              'A family-owned luxury resort on Mauritius\' most celebrated beach, Belle Mare Plage benefits from Mauritius\' deep Indo-Mauritian cultural heritage. The resort has hosted hundreds of Indian and Indo-Mauritian weddings and provides a culturally intuitive team for South Asian celebrations.',
            highlights: [
              'Mauritius\' most celebrated beach — Belle Mare',
              'Indo-Mauritian cultural heritage deeply aligned with Indian traditions',
              'Two championship golf courses on property',
              'Family-owned Constance Hotels group with personalized service',
            ],
            packages: [
              { name: 'Classic', price: 'From $8,500 USD' },
              { name: 'Prestige', price: 'From $16,000 USD' },
            ],
            capacity: 'Up to 250 guests',
            indianFeatures: [
              'Indo-Mauritian culture — resort team intuitively understands Hindu wedding traditions',
              'Beachfront Mandap installation on Belle Mare beach',
              'Indian and Mauritian-Indian catering fusion available',
              'Fire ceremony coordination with assistance from Indo-Mauritian team',
              'Mehendi and Haldi on beachfront garden terraces',
              'Note: Weddings available Monday–Friday only',
            ],
            bestFor: 'Indian couples 75–250 guests wanting Mauritius\' beach paradise with a culturally aligned team rooted in Indian traditions',
          },
        ],
      },
    ],
  },
];

const tierColors = {
  'ultra-luxury': 'bg-maroon text-ivory',
  'luxury': 'bg-charcoal text-ivory',
  'premium': 'bg-beige text-charcoal',
};

const tierLabels = {
  'ultra-luxury': 'Ultra Luxury',
  'luxury': 'Luxury',
  'premium': 'Premium',
};

export default function VenuesClient() {
  const [activeRegion, setActiveRegion] = useState('caribbean');

  const currentRegion = regions.find((r) => r.id === activeRegion)!;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-4 bg-beige text-center">
        <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">Worldwide Venue Directory</p>
        <h1 className="font-playfair text-5xl text-charcoal font-bold mb-6">Find Your Perfect Venue</h1>
        <p className="font-inter text-charcoal/70 max-w-2xl mx-auto text-lg leading-relaxed">
          Hand-curated resorts and venues across the globe — each researched for their ability to host full Indian wedding celebrations with mandap setup, fire ceremonies, and South Asian catering.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm font-inter text-charcoal/60">
          <span className="flex items-center gap-2"><span className="text-gold font-bold">30+</span> Venues Researched</span>
          <span className="text-champagne">|</span>
          <span className="flex items-center gap-2"><span className="text-gold font-bold">12</span> Countries</span>
          <span className="text-champagne">|</span>
          <span className="flex items-center gap-2"><span className="text-gold font-bold">4</span> Regions</span>
        </div>
      </section>

      {/* Region tabs */}
      <div className="sticky top-[88px] z-40 bg-ivory/95 backdrop-blur-md border-b border-champagne shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={`flex items-center gap-2 px-6 py-4 font-inter text-sm whitespace-nowrap border-b-2 transition-all duration-200 ${
                  activeRegion === region.id
                    ? 'border-maroon text-maroon font-semibold'
                    : 'border-transparent text-charcoal/60 hover:text-charcoal hover:border-champagne'
                }`}
              >
                <span>{region.icon}</span>
                {region.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="font-playfair text-3xl text-charcoal font-bold">
            {currentRegion.icon} {currentRegion.label}
          </h2>
          <p className="font-inter text-charcoal/60 mt-2">
            {currentRegion.destinations.length} destination{currentRegion.destinations.length !== 1 ? 's' : ''} · {currentRegion.destinations.reduce((a, d) => a + d.resorts.length, 0)} curated venues
          </p>
        </div>

        <div className="space-y-16">
          {currentRegion.destinations.map((destination) => (
            <div key={destination.name}>
              {/* Destination header */}
              <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-champagne">
                <span className="text-3xl">{destination.flag}</span>
                <h3 className="font-playfair text-2xl text-maroon font-bold">{destination.name}</h3>
              </div>

              {/* Resort cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {destination.resorts.map((resort) => (
                  <div
                    key={resort.name}
                    className="bg-ivory border border-champagne rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    {/* Resort header */}
                    <div className="bg-charcoal p-6">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-playfair text-xl text-ivory font-bold leading-tight">{resort.name}</h4>
                        <span className={`shrink-0 text-xs font-inter font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm ${tierColors[resort.tier]}`}>
                          {tierLabels[resort.tier]}
                        </span>
                      </div>
                      <p className="font-inter text-gold text-xs tracking-wide">{resort.location}</p>
                    </div>

                    <div className="p-6 flex flex-col flex-1 gap-5">
                      {/* Description */}
                      <p className="font-inter text-charcoal/70 text-sm leading-relaxed">{resort.description}</p>

                      {/* Highlights */}
                      <div>
                        <p className="font-inter text-xs font-bold text-charcoal tracking-widest uppercase mb-3">Venue Highlights</p>
                        <ul className="space-y-1.5">
                          {resort.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 font-inter text-sm text-charcoal/75">
                              <span className="text-gold mt-0.5 flex-shrink-0">✦</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Packages */}
                      <div>
                        <p className="font-inter text-xs font-bold text-charcoal tracking-widest uppercase mb-3">Packages & Pricing</p>
                        <div className="flex flex-wrap gap-2">
                          {resort.packages.map((pkg, i) => (
                            <div key={i} className="bg-beige border border-champagne rounded-sm px-3 py-2">
                              <p className="font-inter text-xs font-bold text-charcoal">{pkg.name}</p>
                              <p className="font-inter text-xs text-maroon">{pkg.price}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Capacity */}
                      <div className="flex items-center gap-2">
                        <span className="bg-maroon/10 text-maroon font-inter text-xs font-semibold tracking-wide px-3 py-1.5 rounded-sm">
                          👥 {resort.capacity}
                        </span>
                        <span className="font-inter text-xs text-charcoal/50">{resort.bestFor.split(' ')[0] === 'Couples' ? '' : ''}</span>
                      </div>

                      {/* Indian wedding features */}
                      <div className="bg-[#FDF6ED] border border-[#F5E0B0] rounded-sm p-4">
                        <p className="font-inter text-xs font-bold text-maroon tracking-widest uppercase mb-3 flex items-center gap-1.5">
                          🌸 Indian Wedding Friendly
                        </p>
                        <ul className="space-y-1.5">
                          {resort.indianFeatures.map((f, i) => (
                            <li key={i} className="flex items-start gap-2 font-inter text-xs text-charcoal/80">
                              <span className="text-gold mt-0.5 flex-shrink-0">✦</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Best for */}
                      <div className="bg-beige rounded-sm px-4 py-3">
                        <span className="font-inter text-xs font-bold text-charcoal tracking-wide uppercase">Best For: </span>
                        <span className="font-inter text-xs text-charcoal/70">{resort.bestFor}</span>
                      </div>

                      {/* CTA */}
                      <Link
                        href="/inquire"
                        className="mt-auto block w-full text-center py-3.5 bg-maroon text-ivory font-inter font-semibold text-xs tracking-widest uppercase hover:bg-maroon-dark transition-colors"
                      >
                        Inquire About This Venue
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 px-4 bg-charcoal text-center">
        <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">Not Sure Where to Start?</p>
        <h2 className="font-playfair text-4xl text-ivory font-bold mb-6">We'll Find the Perfect Venue For You</h2>
        <p className="font-inter text-ivory/70 mb-10 max-w-xl mx-auto">
          Every couple is different. Tell us your guest count, budget, and vision — and we'll shortlist the top 3 venues that perfectly match your dream Indian wedding.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/inquire" className="inline-block bg-gold text-charcoal font-inter font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors">
            Start Planning
          </Link>
          <Link href="/quiz" className="inline-block border border-ivory/40 text-ivory font-inter font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:bg-white/10 transition-colors">
            Take the Quiz First
          </Link>
        </div>
      </section>
    </div>
  );
}

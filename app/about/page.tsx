import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: "Canada's premier Indian destination wedding company. We're a team of South Asian wedding specialists who've orchestrated 50+ celebrations across 6 countries.",
};

const team = [
  {
    name: 'Priya Mehta',
    title: 'Founder & Lead Planner',
    bio: 'With 12 years of experience in luxury event management and a deep personal connection to South Asian wedding traditions, Priya founded Shaadi Abroad after planning her own destination wedding in Mexico and realizing how underserved Canadian Indian couples were.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Arun Nair',
    title: 'Head of Logistics & Travel',
    bio: 'A former travel industry executive with 15 years coordinating group travel across 40+ countries. Arun ensures every guest — from grandparents to toddlers — arrives safely, on time, and well taken care of.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Deepa Sharma',
    title: 'Creative Director & Décor Lead',
    bio: "Deepa trained in textile design in India and studied event design in Paris. She creates the visual language of every Shaadi Abroad wedding — blending the richness of Indian aesthetics with the environment of each destination.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Kabir Singh',
    title: 'Vendor Relations & On-Site Manager',
    bio: 'Having personally managed over 30 weddings on-the-ground across Mexico, Italy, and Southeast Asia, Kabir knows every vendor, every venue quirk, and every cultural detail that separates a good wedding from an extraordinary one.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
  },
];

const values = [
  {
    icon: '🤝',
    title: 'Cultural Fluency',
    description: 'We are South Asian ourselves. We understand the weight of the rituals, the dynamics of multi-generational families, and the nuance of blending traditions across four-day celebrations.',
  },
  {
    icon: '✨',
    title: 'Uncompromising Quality',
    description: 'We work with a curated network of the finest venues, caterers, photographers, and décor artists across every destination we serve. No compromises.',
  },
  {
    icon: '🌍',
    title: 'Seamless Logistics',
    description: 'Moving 100+ guests across international borders is complex. We handle every detail — flights, visas, transfers, accommodation — so your family just shows up and celebrates.',
  },
  {
    icon: '💛',
    title: 'Genuine Care',
    description: 'Our relationships don\'t end at the last dance. Couples and families return to us for milestone events, refer their friends, and treat us like extended family.',
  },
];

const stats = [
  { number: '50+', label: 'Weddings Planned' },
  { number: '6', label: 'Countries' },
  { number: '500+', label: 'Guests Managed' },
  { number: '100%', label: 'Client Satisfaction' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=800&fit=crop"
          alt="Shaadi Abroad team"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 text-center px-4">
          <p className="font-inter text-gold text-sm tracking-widest uppercase mb-4">Our Story</p>
          <h1 className="font-playfair text-5xl md:text-6xl text-ivory font-bold mb-6">About Shaadi Abroad</h1>
          <p className="font-inter text-ivory/80 text-lg max-w-2xl mx-auto">
            We are a team of South Asian wedding specialists who believe that the most meaningful celebrations deserve the most extraordinary settings.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">How We Started</p>
              <h2 className="font-playfair text-4xl text-charcoal font-bold mb-6">Born from a Gap in the Market</h2>
              <p className="font-inter text-charcoal/70 leading-relaxed mb-4">
                Shaadi Abroad was born in 2018 when our founder Priya Mehta was planning her own Indian destination wedding in Mexico and discovered a painful truth: there was no company in Canada that truly understood the complexity and cultural depth of a South Asian multi-day celebration in an international setting.
              </p>
              <p className="font-inter text-charcoal/70 leading-relaxed mb-4">
                Generic destination wedding planners didn't understand mandap requirements, dhol logistics, or the delicate choreography of a four-day Hindu celebration. Indian wedding planners in Canada were brilliant at local banquet halls but had no international network.
              </p>
              <p className="font-inter text-charcoal/70 leading-relaxed">
                So Priya built what she wished had existed: a company that combines world-class destination expertise with deep South Asian cultural intelligence. Today, Shaadi Abroad has orchestrated over 50 celebrations across 6 countries for Canadian couples from Toronto to Vancouver.
              </p>
            </div>
            <div className="relative h-[450px] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop"
                alt="Luxury Indian destination wedding"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent">
                <p className="font-playfair text-ivory text-xl">"Your dream wedding deserves a stage as extraordinary as your love."</p>
                <p className="font-inter text-gold text-sm mt-1">— Priya Mehta, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-maroon">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-playfair text-5xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="font-inter text-ivory/70 text-sm tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-beige">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">What Drives Us</p>
            <h2 className="font-playfair text-4xl text-charcoal font-bold">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-ivory p-8 rounded-sm border border-champagne">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="font-playfair text-xl text-charcoal font-bold mb-3">{value.title}</h3>
                <p className="font-inter text-charcoal/70 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">The People Behind The Magic</p>
            <h2 className="font-playfair text-4xl text-charcoal font-bold">Meet Our Team</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member) => (
              <div key={member.name} className="flex gap-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-champagne">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl text-charcoal font-bold">{member.name}</h3>
                  <p className="font-inter text-gold text-sm tracking-wide mb-3">{member.title}</p>
                  <p className="font-inter text-charcoal/70 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-charcoal text-center">
        <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">Ready to Start?</p>
        <h2 className="font-playfair text-4xl text-ivory font-bold mb-6">Let's Create Something Beautiful Together</h2>
        <p className="font-inter text-ivory/70 max-w-xl mx-auto mb-10">Book your free 30-minute consultation. We'll listen to your vision, share what's possible, and give you an honest roadmap.</p>
        <Link href="/inquire" className="inline-block bg-gold text-charcoal font-inter font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors">
          Book Your Free Consultation
        </Link>
      </section>
    </div>
  );
}

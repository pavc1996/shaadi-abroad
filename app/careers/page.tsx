import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers — Join Shaadi Abroad',
  description: 'Join Canada\'s premier Indian destination wedding company. We\'re looking for passionate, detail-obsessed people who love love.',
};

const openRoles = [
  {
    title: 'Junior Wedding Coordinator',
    type: 'Full-time',
    location: 'Toronto, ON (Hybrid)',
    description: 'Support senior planners across multiple weddings. Manage vendor communication, guest lists, timelines, and logistics documents. Ideal for someone with 1–2 years in events or hospitality.',
    requirements: ['1+ years events or hospitality experience', 'Exceptional organizational skills', 'Familiarity with South Asian wedding culture', 'Willingness to travel for on-site event management', 'Strong written and verbal communication'],
  },
  {
    title: 'Social Media & Content Manager',
    type: 'Full-time',
    location: 'Remote (Canada)',
    description: 'Own our Instagram, Pinterest, TikTok, and LinkedIn presence. Create content, manage our editorial calendar, and grow our community of South Asian Canadian couples.',
    requirements: ['3+ years social media management', 'Visual content creation skills (photo + video)', 'Deep familiarity with South Asian culture and aesthetics', 'Understanding of luxury brand voice', 'Analytics-driven mindset'],
  },
  {
    title: 'Travel & Logistics Coordinator',
    type: 'Full-time',
    location: 'Toronto, ON',
    description: 'Manage group travel bookings, room blocks, airport transfers, and visa guidance for wedding guests. Be the logistics brain that makes complex travel seamless.',
    requirements: ['Experience in travel industry or group travel coordination', 'Familiarity with GDS systems (Sabre, Amadeus) an asset', 'Strong problem-solving under pressure', 'Customer service orientation', 'Willingness to work across time zones'],
  },
];

const values = [
  { icon: '🌍', title: 'Travel Often', desc: 'On-site event management means you go to the places we serve. Mexico, Italy, Dubai, Thailand.' },
  { icon: '💛', title: 'Culture First', desc: 'We deeply respect South Asian traditions. Understanding and honoring culture is core to the role.' },
  { icon: '🚀', title: 'Grow Fast', desc: 'We\'re a growing company. The right people advance quickly and have real ownership over their domain.' },
  { icon: '🤝', title: 'Real Impact', desc: 'You\'re not just filling a seat. You\'re helping create the most important day of someone\'s life.' },
];

export default function CareersPage() {
  return (
    <div className="pt-20">
      <section className="py-24 px-4 bg-maroon text-center">
        <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">Join Our Team</p>
        <h1 className="font-playfair text-5xl text-ivory font-bold mb-6">Careers at Shaadi Abroad</h1>
        <p className="font-inter text-ivory/70 max-w-xl mx-auto">
          We're building Canada's most trusted Indian destination wedding company. We need passionate, detail-obsessed people who believe the world's most meaningful celebrations deserve exceptional execution.
        </p>
      </section>

      <section className="py-16 px-4 bg-beige">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl text-charcoal font-bold text-center mb-12">Why Work Here</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="text-center">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-playfair text-lg text-charcoal font-bold mb-2">{v.title}</h3>
                <p className="font-inter text-charcoal/60 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl text-charcoal font-bold mb-10">Open Positions</h2>
          <div className="space-y-6">
            {openRoles.map(role => (
              <div key={role.title} className="border border-champagne rounded-sm p-8 hover:border-gold transition-colors">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="font-playfair text-xl text-charcoal font-bold">{role.title}</h3>
                    <div className="flex gap-3 mt-1">
                      <span className="font-inter text-xs text-maroon bg-maroon/10 px-2 py-0.5 rounded-sm">{role.type}</span>
                      <span className="font-inter text-xs text-charcoal/50">{role.location}</span>
                    </div>
                  </div>
                  <Link href={`mailto:careers@shaadiabroad.com?subject=Application: ${role.title}`} className="bg-charcoal text-ivory font-inter font-semibold text-xs tracking-widest uppercase px-6 py-2.5 hover:bg-maroon transition-colors rounded-sm">
                    Apply
                  </Link>
                </div>
                <p className="font-inter text-charcoal/70 text-sm leading-relaxed mb-4">{role.description}</p>
                <div>
                  <p className="font-inter text-xs font-bold text-charcoal uppercase tracking-wide mb-2">Requirements</p>
                  <ul className="space-y-1">
                    {role.requirements.map((r, i) => (
                      <li key={i} className="font-inter text-sm text-charcoal/70 flex gap-2"><span className="text-gold flex-shrink-0">✦</span>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-beige border border-champagne rounded-sm p-8 text-center">
            <h3 className="font-playfair text-xl text-charcoal font-bold mb-3">Don't See Your Role?</h3>
            <p className="font-inter text-charcoal/70 text-sm mb-6">We're always interested in exceptional talent. Send your resume and a note about why you belong at Shaadi Abroad.</p>
            <a href="mailto:careers@shaadiabroad.com" className="inline-block bg-maroon text-ivory font-inter font-semibold text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-maroon-dark transition-colors">
              Send Open Application
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

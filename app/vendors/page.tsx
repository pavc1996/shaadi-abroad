'use client';

import Link from 'next/link';


const vendorTypes = [
  { icon: '📸', title: 'Photography & Videography', desc: 'We work with photographers who understand the visual complexity and emotional depth of multi-day South Asian celebrations.' },
  { icon: '🌸', title: 'Décor & Floristry', desc: 'From mandap construction to floral design, we partner with décor companies who can source Indian-specific materials internationally.' },
  { icon: '🍛', title: 'South Asian Catering', desc: "Authentic Indian catering at international venues requires exceptional logistics. We need partners who've done it before." },
  { icon: '🏨', title: 'Venues & Resorts', desc: 'Resort and venue partners who are serious about the Indian wedding market and willing to invest in their service offering.' },
  { icon: '🎵', title: 'Entertainment', desc: 'Dhol players, classical musicians, Bollywood acts, DJs with South Asian repertoire, and baraat coordinators.' },
  { icon: '✈️', title: 'Travel & Transport', desc: 'Group travel specialists, charter operators, and ground transport companies for coordinating large guest movements.' },
  { icon: '💄', title: 'Beauty & Styling', desc: 'Bridal hair and makeup artists experienced with South Asian bridal looks, working in destination markets.' },
  { icon: '🎂', title: 'Cakes & Sweets', desc: 'Specialty bakers who can create fusion or traditional Indian mithai in destination markets.' },
];

const benefits = [
  'Priority referrals to our growing client base of affluent Canadian Indian couples',
  'Co-marketing on our social channels (Instagram, Pinterest, TikTok)',
  'Featured placement on our website and destination pages',
  'Inclusion in our vendor resource guides sent to all clients',
  'Access to our planning team for collaboration and joint proposals',
  'Invitation to annual vendor events and educational workshops',
];

export default function VendorsPage() {
  return (
    <div className="pt-20">
      <section className="py-24 px-4 bg-charcoal text-center">
        <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">Work With Us</p>
        <h1 className="font-playfair text-5xl text-ivory font-bold mb-6">Vendor Partnerships</h1>
        <p className="font-inter text-ivory/60 max-w-2xl mx-auto">
          We are always looking for exceptional vendors who share our commitment to luxury, cultural fluency, and flawless execution. If that sounds like you, we'd love to connect.
        </p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl text-charcoal font-bold mb-4">Who We're Looking For</h2>
            <p className="font-inter text-charcoal/70 max-w-xl mx-auto">We partner with best-in-class vendors across every category of the Indian wedding experience.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vendorTypes.map((v) => (
              <div key={v.title} className="bg-beige border border-champagne rounded-sm p-6 hover:border-gold transition-colors">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-playfair text-base text-charcoal font-bold mb-2">{v.title}</h3>
                <p className="font-inter text-charcoal/60 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-beige">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-playfair text-3xl text-charcoal font-bold mb-6">Benefits of Partnership</h2>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex gap-3 font-inter text-charcoal/80 text-sm leading-relaxed">
                  <span className="text-gold mt-0.5 flex-shrink-0">✦</span>{b}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ivory border border-champagne rounded-sm p-8">
            <h3 className="font-playfair text-xl text-charcoal font-bold mb-6">Apply to Partner</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="font-inter text-xs text-charcoal/50 uppercase tracking-wide block mb-1">Business Name</label>
                <input type="text" className="w-full bg-beige border border-champagne rounded-sm px-4 py-2.5 font-inter text-sm outline-none focus:border-gold transition-colors" />
              </div>
              <div>
                <label className="font-inter text-xs text-charcoal/50 uppercase tracking-wide block mb-1">Your Name</label>
                <input type="text" className="w-full bg-beige border border-champagne rounded-sm px-4 py-2.5 font-inter text-sm outline-none focus:border-gold transition-colors" />
              </div>
              <div>
                <label className="font-inter text-xs text-charcoal/50 uppercase tracking-wide block mb-1">Email</label>
                <input type="email" className="w-full bg-beige border border-champagne rounded-sm px-4 py-2.5 font-inter text-sm outline-none focus:border-gold transition-colors" />
              </div>
              <div>
                <label className="font-inter text-xs text-charcoal/50 uppercase tracking-wide block mb-1">Vendor Category</label>
                <select className="w-full bg-beige border border-champagne rounded-sm px-4 py-2.5 font-inter text-sm outline-none focus:border-gold transition-colors">
                  {vendorTypes.map(v => <option key={v.title}>{v.title}</option>)}
                </select>
              </div>
              <div>
                <label className="font-inter text-xs text-charcoal/50 uppercase tracking-wide block mb-1">Website / Portfolio</label>
                <input type="url" className="w-full bg-beige border border-champagne rounded-sm px-4 py-2.5 font-inter text-sm outline-none focus:border-gold transition-colors" placeholder="https://" />
              </div>
              <div>
                <label className="font-inter text-xs text-charcoal/50 uppercase tracking-wide block mb-1">Tell us about your experience with Indian weddings</label>
                <textarea rows={3} className="w-full bg-beige border border-champagne rounded-sm px-4 py-2.5 font-inter text-sm outline-none focus:border-gold transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full bg-maroon text-ivory font-inter font-semibold text-xs tracking-widest uppercase py-3.5 hover:bg-maroon-dark transition-colors">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

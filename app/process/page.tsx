import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Planning Process',
  description: 'A clear, structured 5-phase process for planning your Indian destination wedding from Canada. No surprises, just results.',
};

const phases = [
  {
    number: '01',
    title: 'Discovery & Vision',
    duration: '1–2 weeks',
    description: 'We start by deeply understanding your vision, your families, and what matters most to you.',
    details: [
      'Free 30-minute consultation call',
      'In-depth vision questionnaire (both partners + key family members)',
      'Budget framework discussion',
      'Guest profile analysis (origins, visa needs, mobility considerations)',
      'Destination shortlisting based on your priorities',
      'Cultural ceremony requirements review',
      'Formal proposal and package recommendation',
    ],
    outcome: 'A clear understanding of what you want, a shortlist of 2–3 destinations, and a confirmed package.',
  },
  {
    number: '02',
    title: 'Destination & Venue',
    duration: '4–8 weeks',
    description: 'We source, evaluate, and negotiate the best venues in your chosen destination.',
    details: [
      'Venue scouting across confirmed destination',
      'Site visits (virtual tours + in-person inspections for senior packages)',
      'Venue contract review and negotiation',
      'Room block negotiations for guest accommodation',
      'Catering capability assessment',
      'Ceremony space evaluation for Indian ceremony requirements',
      'Venue confirmation and deposit management',
    ],
    outcome: 'Venue booked, room block secured, dates confirmed, and ceremony spaces allocated.',
  },
  {
    number: '03',
    title: 'Vendor Building',
    duration: '2–4 months',
    description: 'We assemble your vendor dream team — every role filled with the right expertise.',
    details: [
      'Photography & videography sourcing and booking',
      'Décor vendor engagement and concept development',
      'Indian catering sourcing and menu planning',
      'Entertainment booking (dhol, sangeet acts, DJ)',
      'Pandit / granthi / officiant confirmation',
      'Floristry coordination',
      'Hair, makeup, and styling team',
      'Guest transport vendor arrangements',
    ],
    outcome: 'All vendors booked, contracts signed, and clear communication channels established.',
  },
  {
    number: '04',
    title: 'Guest & Travel Management',
    duration: '3–6 months',
    description: 'We manage every detail of getting your guests there comfortably and joyfully.',
    details: [
      'Personalized wedding website creation',
      'Guest travel information packs',
      'Group flight coordination and room block management',
      'Visa guidance for international guests',
      'Airport transfer scheduling',
      'Welcome kit curation and delivery',
      'RSVP tracking and guest communication',
      'Dietary and accessibility requirement management',
    ],
    outcome: 'Every guest informed, booked, and ready. Your family can focus on celebrating, not coordinating.',
  },
  {
    number: '05',
    title: 'Celebration & Beyond',
    duration: 'Your wedding days',
    description: 'We execute every detail flawlessly while you fully immerse in your celebrations.',
    details: [
      'On-site team arrival 2 days before first event',
      'Full vendor briefing and setup oversight',
      'Day-of timeline management across all events',
      'Guest experience management throughout',
      'Ceremony coordination with pandit/granthi',
      'Décor installation oversight',
      'Real-time problem solving and backup planning',
      'Post-wedding vendor reconciliation and farewell coordination',
    ],
    outcome: 'A flawlessly executed celebration where you and your family are guests at your own wedding.',
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 px-4 bg-beige text-center">
        <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">How We Work</p>
        <h1 className="font-playfair text-5xl text-charcoal font-bold mb-6">The Planning Journey</h1>
        <p className="font-inter text-charcoal/70 max-w-2xl mx-auto">
          Planning a destination wedding across international borders can feel overwhelming. Our structured 5-phase process eliminates the chaos and gives you complete clarity at every step.
        </p>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {phases.map((phase, i) => (
            <div key={phase.number} className="flex gap-8 mb-16 last:mb-0">
              {/* Number + line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-maroon flex items-center justify-center">
                  <span className="font-playfair text-maroon font-bold text-lg">{phase.number}</span>
                </div>
                {i < phases.length - 1 && <div className="flex-1 w-px bg-champagne mt-4 min-h-[60px]" />}
              </div>

              {/* Content */}
              <div className="pb-8 flex-1">
                <div className="flex items-center gap-4 mb-2 flex-wrap">
                  <h2 className="font-playfair text-2xl text-charcoal font-bold">{phase.title}</h2>
                  <span className="font-inter text-xs text-maroon bg-maroon/10 px-3 py-1 rounded-sm tracking-wide">{phase.duration}</span>
                </div>
                <p className="font-inter text-charcoal/70 mb-6">{phase.description}</p>
                <ul className="space-y-2 mb-6">
                  {phase.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 font-inter text-sm text-charcoal/80">
                      <span className="text-gold mt-0.5 flex-shrink-0">✦</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="bg-beige border border-champagne rounded-sm p-4">
                  <p className="font-inter text-xs font-bold text-maroon tracking-wide uppercase mb-1">Phase Outcome</p>
                  <p className="font-inter text-charcoal/70 text-sm">{phase.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline overview */}
      <section className="py-16 px-4 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl text-ivory font-bold mb-4">Typical Planning Timeline</h2>
          <p className="font-inter text-ivory/60 mb-12">For a 18-24 month planning window</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              { period: '18–24 months out', task: 'Discovery, destination shortlisting, venue research' },
              { period: '15–18 months out', task: 'Venue booked, room blocks secured, package confirmed' },
              { period: '12–15 months out', task: 'All vendors booked, catering concepts developed' },
              { period: '6–12 months out', task: 'Guest communications, travel management begins' },
              { period: '3–6 months out', task: 'Final confirmations, rehearsal planning, timeline finalized' },
              { period: 'Wedding week', task: 'On-site team deployed, flawless execution' },
            ].map((item) => (
              <div key={item.period} className="bg-white/5 border border-white/10 rounded-sm p-5">
                <p className="font-inter text-gold text-xs tracking-wide mb-2">{item.period}</p>
                <p className="font-inter text-ivory/80 text-sm leading-relaxed">{item.task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-beige">
        <h2 className="font-playfair text-4xl text-charcoal font-bold mb-6">Ready to Begin Your Journey?</h2>
        <p className="font-inter text-charcoal/70 mb-10 max-w-lg mx-auto">
          Your first step is a free 30-minute consultation. No commitment, no pressure — just a conversation about your vision.
        </p>
        <Link href="/inquire" className="inline-block bg-maroon text-ivory font-inter font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:bg-maroon-dark transition-colors">
          Start Your Journey
        </Link>
      </section>
    </div>
  );
}

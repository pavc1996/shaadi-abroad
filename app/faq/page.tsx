import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ — Indian Destination Wedding Planning',
  description: 'Answers to the most common questions about planning an Indian destination wedding from Canada. Budgets, guests, logistics, cultural ceremonies and more.',
};

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How far in advance should we start planning our Indian destination wedding?',
        a: 'We recommend beginning the planning process 18–24 months before your wedding date. This allows sufficient time to secure your preferred venue and dates (especially at peak-season resorts), coordinate group travel bookings, and manage the complex logistics of a multi-day Indian celebration. For very large weddings (200+ guests) or high-demand destinations like the Amalfi Coast, 24 months is ideal. That said, we have successfully planned weddings in 9–12 months — contact us to discuss your timeline.',
      },
      {
        q: 'We\'ve never planned a destination wedding before. Where do we even start?',
        a: 'Start with a free consultation with our team. We\'ll walk you through the entire process — from destination shortlisting based on your vision, guest profile, and budget, to understanding what a realistic timeline looks like. Most couples feel overwhelmed before they speak with us and completely at ease afterward. The planning process has a clear structure when you have the right team.',
      },
      {
        q: 'Can you work with couples who are already partially into their planning?',
        a: 'Absolutely. We frequently step in at different stages. Some couples come to us with a venue already booked. Others have a date but nothing else. We\'ll assess where you are, identify any gaps, and take over the coordination from that point forward.',
      },
    ],
  },
  {
    category: 'Budget & Packages',
    questions: [
      {
        q: 'What does an Indian destination wedding typically cost?',
        a: 'The cost varies significantly based on destination, guest count, package tier, and the scope of events. As a general guide: our Signature package starts at $8,000 CAD (planning fees only, excludes venue/catering), a full-service 100-guest 3-day wedding in Mexico (all-inclusive) typically runs $80,000–$150,000 CAD total, and a Royal-tier wedding in Italy or Dubai for 150+ guests can exceed $300,000 CAD. Our packages are transparent — we provide complete investment breakdowns before you commit to anything.',
      },
      {
        q: 'Does your package price include the venue, catering, and travel?',
        a: 'Our package fees cover our planning, coordination, and management services. Venue, catering, décor, travel, accommodation, and entertainment are separate costs that we help you source, negotiate, and manage. We provide fully itemized estimates so you understand the complete investment from day one.',
      },
      {
        q: 'Are your fees negotiable?',
        a: 'Our packages are structured based on the real scope of work involved in managing a multi-day Indian destination wedding. That said, we understand budgets vary. Book a consultation and let\'s discuss what\'s possible within your parameters.',
      },
    ],
  },
  {
    category: 'Guests & Travel',
    questions: [
      {
        q: 'How do we manage guests flying in from Canada, India, and other countries?',
        a: 'This is one of our core specializations. We handle group travel coordination including room block negotiations with resorts, charter or group flight arrangements, airport transfer coordination, and a dedicated travel support contact for your guests. We also advise on visa requirements for guests traveling from India and other countries. Your guests will receive a detailed travel guide and have a direct point of contact for their questions.',
      },
      {
        q: 'Our Indian family members will need visas to travel to Mexico or Europe. Can you help?',
        a: 'We provide guidance on visa requirements for all your major guest origin countries, and we connect you with trusted immigration consultants who specialize in travel visas for family gatherings. We build visa timelines into the overall planning calendar to ensure no one misses your celebration.',
      },
      {
        q: 'What\'s the ideal guest count for a destination wedding?',
        a: 'Most of our clients host between 75 and 200 guests. Under 50 can feel thin for a traditional Indian celebration; over 250 requires careful venue and logistics planning. The "right" number is deeply personal — some families want everyone, others prefer intimacy. We\'ll help you navigate those conversations.',
      },
    ],
  },
  {
    category: 'Cultural & Ceremony',
    questions: [
      {
        q: 'Can we have a traditional Hindu or Sikh ceremony at a resort abroad?',
        a: 'Yes — and this is exactly our speciality. We coordinate with pandits and granthis who travel internationally or are based in your destination. We source all required ritual materials (including items that may need to be imported), arrange for a functional hawan kund or Anand Karaj setup, and work with the venue to accommodate ceremony timing and structure. We\'ve facilitated Hindu, Sikh, Muslim, Jain, and interfaith ceremonies across all our destinations.',
      },
      {
        q: 'Will our wedding be legally recognized in Canada?',
        a: 'This depends on the destination and the type of ceremony. Many countries allow legally recognized marriages for foreign nationals — but the requirements vary. We advise all clients on the legal marriage process in their chosen destination, including whether a separate civil ceremony is required. Some couples choose to do a simple legal ceremony in Canada before or after the destination celebration.',
      },
      {
        q: 'Can we have authentic Indian food at a resort in Mexico or Italy?',
        a: 'Yes, with the right planning. We work with specialized South Asian catering partners in each destination and have experience coordinating Indian menus at resorts that have never offered them before. This involves importing spices, coordinating live stations (chaat, tandoor, mithai), and briefing local culinary teams. The result is genuine Indian food, not a "fusion compromise."',
      },
    ],
  },
  {
    category: 'Working With Us',
    questions: [
      {
        q: 'How do you communicate with clients during the planning process?',
        a: 'Every client gets a dedicated planner, a shared planning portal, and a WhatsApp group for quick communication. We hold structured monthly video calls to review progress and address questions. For the three months leading up to the wedding, we increase touchpoints to weekly. On wedding days, you have our team\'s direct numbers and we\'re on-site or on-call throughout.',
      },
      {
        q: 'Do you travel to the destination with us?',
        a: 'Yes. For all packages, a senior Shaadi Abroad team member is present on-site for the full duration of the wedding events. For our Luxe and Royal packages, we send a full on-site team. We do not manage weddings remotely.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 px-4 bg-beige text-center">
        <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">Everything You Need To Know</p>
        <h1 className="font-playfair text-5xl text-charcoal font-bold mb-6">Frequently Asked Questions</h1>
        <p className="font-inter text-charcoal/70 max-w-2xl mx-auto">
          Planning an Indian destination wedding from Canada involves a lot of moving parts. We've answered the questions we hear most often. Don't see yours? Book a free consultation.
        </p>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-16">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="font-playfair text-2xl text-maroon font-bold mb-8 pb-4 border-b border-champagne">
                {section.category}
              </h2>
              <div className="space-y-8">
                {section.questions.map((item, i) => (
                  <div key={i} className="pb-8 border-b border-champagne/50 last:border-0">
                    <h3 className="font-playfair text-lg text-charcoal font-semibold mb-3">{item.q}</h3>
                    <p className="font-inter text-charcoal/70 leading-relaxed text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-maroon text-center">
        <h2 className="font-playfair text-3xl text-ivory font-bold mb-4">Still Have Questions?</h2>
        <p className="font-inter text-ivory/70 mb-8 max-w-lg mx-auto">
          Book a free 30-minute consultation. We'll answer everything specific to your vision, destination, and guest profile.
        </p>
        <Link href="/inquire" className="inline-block bg-gold text-charcoal font-inter font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors">
          Book Free Consultation
        </Link>
      </section>
    </div>
  );
}

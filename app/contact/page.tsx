'use client';

import Link from 'next/link';


export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-24 px-4 bg-beige text-center">
        <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">Get In Touch</p>
        <h1 className="font-playfair text-5xl text-charcoal font-bold mb-6">Contact Us</h1>
        <p className="font-inter text-charcoal/70 max-w-xl mx-auto">
          We'd love to hear about your vision. Reach out via any channel below or book your free consultation directly.
        </p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h2 className="font-playfair text-2xl text-charcoal font-bold mb-8">Our Information</h2>
            <div className="space-y-6">
              {[
                { icon: '📍', label: 'Based In', value: 'Toronto, Ontario, Canada\nServing couples nationwide' },
                { icon: '📞', label: 'Phone', value: '+1 (416) 555-0100' },
                { icon: '📧', label: 'Email', value: 'hello@shaadiabroad.com' },
                { icon: '⏰', label: 'Hours', value: 'Monday–Friday: 9am–6pm EST\nWeekends: By appointment' },
                { icon: '🌐', label: 'Languages', value: 'English, Hindi, Punjabi, Gujarati' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-inter text-xs text-charcoal/50 uppercase tracking-wide mb-1">{item.label}</p>
                    <p className="font-inter text-charcoal whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-champagne">
              <h3 className="font-playfair text-lg text-charcoal font-bold mb-4">Follow Our Work</h3>
              <div className="flex gap-4">
                {[
                  { name: 'Instagram', handle: '@shaadiabroad', url: 'https://instagram.com/shaadiabroad' },
                  { name: 'Pinterest', handle: 'Shaadi Abroad', url: 'https://pinterest.com/shaadiabroad' },
                  { name: 'TikTok', handle: '@shaadiabroad', url: 'https://tiktok.com/@shaadiabroad' },
                ].map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"
                    className="bg-beige border border-champagne rounded-sm px-4 py-3 text-center hover:border-gold transition-colors">
                    <p className="font-inter text-xs text-charcoal/50 uppercase tracking-wide">{social.name}</p>
                    <p className="font-inter text-sm text-charcoal font-medium">{social.handle}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick contact + CTA */}
          <div>
            <div className="bg-maroon rounded-sm p-8 text-center mb-8">
              <h2 className="font-playfair text-2xl text-ivory font-bold mb-3">Ready to Start Planning?</h2>
              <p className="font-inter text-ivory/70 text-sm mb-6">
                Skip the contact form. Fill out our full inquiry form and we'll come back to you within 24 hours with a personalized response.
              </p>
              <Link href="/inquire" className="inline-block bg-gold text-charcoal font-inter font-semibold text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-gold-light transition-colors">
                Submit Full Inquiry
              </Link>
            </div>

            <div className="bg-beige border border-champagne rounded-sm p-8">
              <h3 className="font-playfair text-xl text-charcoal font-bold mb-6">Quick Message</h3>
              <form className="space-y-4" action="/inquire">
                <div>
                  <label className="font-inter text-xs text-charcoal/60 uppercase tracking-wide block mb-1">Name</label>
                  <input type="text" className="w-full bg-ivory border border-champagne rounded-sm px-4 py-3 font-inter text-sm text-charcoal outline-none focus:border-gold transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="font-inter text-xs text-charcoal/60 uppercase tracking-wide block mb-1">Email</label>
                  <input type="email" className="w-full bg-ivory border border-champagne rounded-sm px-4 py-3 font-inter text-sm text-charcoal outline-none focus:border-gold transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="font-inter text-xs text-charcoal/60 uppercase tracking-wide block mb-1">Message</label>
                  <textarea rows={4} className="w-full bg-ivory border border-champagne rounded-sm px-4 py-3 font-inter text-sm text-charcoal outline-none focus:border-gold transition-colors resize-none" placeholder="Tell us briefly about your vision..." />
                </div>
                <button type="submit" className="w-full bg-charcoal text-ivory font-inter font-semibold text-xs tracking-widest uppercase py-3.5 hover:bg-maroon transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

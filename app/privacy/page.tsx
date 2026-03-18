import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Shaadi Abroad privacy policy — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="py-16 px-4 bg-beige">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-4xl text-charcoal font-bold mb-2">Privacy Policy</h1>
          <p className="font-inter text-charcoal/50 text-sm">Last updated: March 2026</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10 font-inter text-charcoal/80 text-sm leading-loose">
          {[
            { title: '1. Information We Collect', content: 'We collect personal information you provide when submitting an inquiry form, signing up for our newsletter, or contacting us. This includes your name, email address, phone number, province of residence, wedding date, guest count, destination preferences, budget range, and any notes you choose to share. We also collect standard web analytics data (page visits, device type, browser) through tools such as Google Analytics.' },
            { title: '2. How We Use Your Information', content: 'We use your information to respond to your wedding planning inquiries, provide our wedding planning services, send you relevant information and resources you\'ve requested, improve our website and services, and communicate with you about our services (with your consent). We never sell your personal information to third parties.' },
            { title: '3. Data Storage & Security', content: 'Your information is stored securely on servers located in Canada and/or the United States. We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet is 100% secure.' },
            { title: '4. Third-Party Services', content: 'We may use third-party services including email platforms, analytics tools, and payment processors. These services have their own privacy policies and we encourage you to review them. We only share information with third parties to the extent necessary to provide our services.' },
            { title: '5. Your Rights (PIPEDA & CASL)', content: 'As a Canadian company, we comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) and Canada\'s Anti-Spam Legislation (CASL). You have the right to access the personal information we hold about you, correct inaccurate information, withdraw consent for marketing communications at any time, and request deletion of your information subject to our legal obligations. To exercise these rights, contact us at privacy@shaadiabroad.com.' },
            { title: '6. Cookies', content: 'Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings. Disabling cookies may affect some website functionality.' },
            { title: '7. Contact', content: 'For any privacy-related questions or concerns, contact us at: privacy@shaadiabroad.com | Shaadi Abroad Inc., Toronto, Ontario, Canada.' },
          ].map(section => (
            <div key={section.title}>
              <h2 className="font-playfair text-xl text-charcoal font-bold mb-3">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

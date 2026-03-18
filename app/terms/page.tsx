import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Shaadi Abroad terms of service — the terms governing use of our website and services.',
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="py-16 px-4 bg-beige">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-4xl text-charcoal font-bold mb-2">Terms of Service</h1>
          <p className="font-inter text-charcoal/50 text-sm">Last updated: March 2026</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10 font-inter text-charcoal/80 text-sm leading-loose">
          {[
            { title: '1. Acceptance of Terms', content: 'By accessing and using the Shaadi Abroad website (shaadiabroad.com) and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.' },
            { title: '2. Services', content: 'Shaadi Abroad provides Indian destination wedding planning and coordination services for Canadian clients. The specific scope, terms, pricing, and conditions of wedding planning services are governed by separate service agreements entered into between Shaadi Abroad and individual clients. Information on this website is for informational purposes only and does not constitute a binding offer of services.' },
            { title: '3. Intellectual Property', content: 'All content on this website — including text, images, logos, graphics, and design — is the property of Shaadi Abroad or its licensors and is protected by Canadian and international copyright law. You may not reproduce, distribute, or use any content without prior written permission.' },
            { title: '4. User Conduct', content: 'You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not submit false information through our inquiry forms, attempt to gain unauthorized access to any portion of our systems, or use our services in connection with any commercial solicitation without our consent.' },
            { title: '5. Disclaimer of Warranties', content: 'This website and its content are provided "as is" without warranty of any kind. Shaadi Abroad makes no representations about the accuracy, completeness, or suitability of the information on this website. Budget estimates, destination information, and pricing are indicative only and subject to change.' },
            { title: '6. Limitation of Liability', content: 'Shaadi Abroad shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services, to the maximum extent permitted by applicable Canadian law.' },
            { title: '7. Governing Law', content: 'These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes shall be subject to the exclusive jurisdiction of the courts of Ontario.' },
            { title: '8. Changes', content: 'We reserve the right to modify these Terms at any time. Changes will be effective upon posting to this website. Your continued use of the website after changes are posted constitutes acceptance of the new Terms.' },
            { title: '9. Contact', content: 'Questions about these Terms? Contact us at legal@shaadiabroad.com.' },
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

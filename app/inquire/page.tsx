import type { Metadata } from 'next';
import InquiryForm from './InquiryForm';

export const metadata: Metadata = {
  title: 'Start Planning Your Destination Wedding',
  description:
    'Take the first step toward your dream Indian destination wedding. Complete our inquiry form and receive a personalized consultation from the Shaadi Abroad team within 24 hours.',
};

export default function InquirePage() {
  return (
    <div className="min-h-screen bg-ivory pt-28">
      {/* Page header */}
      <div className="bg-maroon py-16">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold/60" />
            <span className="font-inter text-gold text-xs tracking-[0.3em] uppercase">
              First Step
            </span>
            <div className="w-8 h-px bg-gold/60" />
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-ivory mb-4">
            Start Your Journey
          </h1>
          <p className="font-inter text-lg text-ivory/80 max-w-xl mx-auto leading-relaxed">
            Tell us about your dream wedding. We'll be in touch within 24 hours
            to schedule your free consultation.
          </p>
        </div>
      </div>

      {/* Form section */}
      <div className="container-custom py-16">
        <InquiryForm />
      </div>
    </div>
  );
}

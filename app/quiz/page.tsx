import type { Metadata } from 'next';
import WeddingQuiz from './WeddingQuiz';

export const metadata: Metadata = {
  title: 'Wedding Planning Quiz — Find Your Perfect Destination',
  description: 'Take our free 2-minute quiz to discover your perfect Indian destination wedding location, estimated budget, and ideal package. Built for Canadian couples.',
};

export default function QuizPage() {
  return (
    <div className="pt-20">
      <section className="py-16 px-4 bg-maroon text-center">
        <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">Free • 2 Minutes • No Commitment</p>
        <h1 className="font-playfair text-5xl text-ivory font-bold mb-4">Find Your Perfect Wedding Destination</h1>
        <p className="font-inter text-ivory/70 max-w-xl mx-auto">Answer 8 quick questions. We'll match you to the ideal destination, estimate your budget range, and recommend the right package.</p>
      </section>
      <WeddingQuiz />
    </div>
  );
}

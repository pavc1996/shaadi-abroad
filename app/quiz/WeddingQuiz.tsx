'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const questions = [
  {
    id: 'guests',
    question: 'How many guests are you expecting?',
    options: [
      { label: 'Intimate — under 75 guests', value: 'small', points: { jamaica: 3, italy: 3, punta_cana: 2 } },
      { label: 'Medium — 75 to 150 guests', value: 'medium', points: { cancun: 3, punta_cana: 3, thailand: 2 } },
      { label: 'Large — 150 to 250 guests', value: 'large', points: { cancun: 3, dubai: 3, thailand: 2 } },
      { label: 'Grand — 250+ guests', value: 'grand', points: { dubai: 3, cancun: 2 } },
    ],
  },
  {
    id: 'budget',
    question: 'What\'s your approximate total wedding budget?',
    options: [
      { label: 'Under $80,000 CAD', value: 'entry', points: { jamaica: 3, thailand: 3 } },
      { label: '$80,000 – $150,000 CAD', value: 'mid', points: { cancun: 3, punta_cana: 3, thailand: 2 } },
      { label: '$150,000 – $300,000 CAD', value: 'premium', points: { cancun: 2, dubai: 2, italy: 3 } },
      { label: '$300,000+ CAD — sky\'s the limit', value: 'luxury', points: { italy: 3, dubai: 3 } },
    ],
  },
  {
    id: 'vibe',
    question: 'What vibe resonates most with your vision?',
    options: [
      { label: '🌊 Sun, sand, and turquoise water', value: 'beach', points: { cancun: 3, punta_cana: 3, jamaica: 2, thailand: 2 } },
      { label: '🏛️ Old-world grandeur and romance', value: 'historic', points: { italy: 3 } },
      { label: '🌆 Ultra-modern luxury and glamour', value: 'modern', points: { dubai: 3 } },
      { label: '🌿 Tropical, lush, and exotic', value: 'tropical', points: { thailand: 3, jamaica: 2 } },
    ],
  },
  {
    id: 'events',
    question: 'How many events are you planning?',
    options: [
      { label: 'Just the wedding + reception (2 events)', value: '2', points: { italy: 2, jamaica: 2 } },
      { label: 'Sangeet + Wedding + Reception (3 events)', value: '3', points: { cancun: 2, punta_cana: 2, thailand: 2 } },
      { label: 'Full 4-day: Mehndi, Sangeet, Wedding, Reception', value: '4', points: { cancun: 3, dubai: 2, thailand: 2 } },
      { label: '5+ days — we want a full week', value: '5', points: { dubai: 3, italy: 2 } },
    ],
  },
  {
    id: 'travel',
    question: 'Where are most of your guests flying from?',
    options: [
      { label: 'Mostly Canada (Toronto / Vancouver / Calgary)', value: 'canada', points: { cancun: 3, punta_cana: 2, jamaica: 2 } },
      { label: 'Mix of Canada and India', value: 'canada_india', points: { dubai: 3, cancun: 2, thailand: 2 } },
      { label: 'Canada, India, UK and other countries', value: 'international', points: { dubai: 3, italy: 2 } },
      { label: 'Mostly India and UK', value: 'india_uk', points: { dubai: 3, thailand: 2 } },
    ],
  },
  {
    id: 'priority',
    question: 'What matters most to you in a destination?',
    options: [
      { label: '📸 Jaw-dropping photography backdrops', value: 'photos', points: { italy: 3, dubai: 2, cancun: 2 } },
      { label: '✈️ Easy travel for all guests', value: 'travel', points: { cancun: 3, punta_cana: 3 } },
      { label: '💰 Best value for the money', value: 'value', points: { thailand: 3, jamaica: 2, cancun: 2 } },
      { label: '👑 Prestige and exclusivity', value: 'prestige', points: { italy: 3, dubai: 3 } },
    ],
  },
  {
    id: 'season',
    question: 'When are you thinking of getting married?',
    options: [
      { label: 'November – February (winter)', value: 'winter', points: { cancun: 3, punta_cana: 3, dubai: 3, thailand: 3 } },
      { label: 'March – May (spring)', value: 'spring', points: { italy: 3, cancun: 2, jamaica: 2 } },
      { label: 'June – August (summer)', value: 'summer', points: { italy: 3, jamaica: 2, thailand: 2 } },
      { label: 'September – October (fall)', value: 'fall', points: { italy: 2, dubai: 2, punta_cana: 2 } },
    ],
  },
  {
    id: 'style',
    question: 'How would you describe your personal style?',
    options: [
      { label: 'Vibrant and celebratory — more is more', value: 'vibrant', points: { cancun: 3, dubai: 2 } },
      { label: 'Elegant and refined — understated luxury', value: 'elegant', points: { italy: 3, punta_cana: 2 } },
      { label: 'Warm and intimate — it\'s about the people', value: 'intimate', points: { jamaica: 3, thailand: 2 } },
      { label: 'Bold and modern — we want to wow everyone', value: 'bold', points: { dubai: 3, cancun: 2 } },
    ],
  },
];

const destinationInfo: Record<string, { name: string; emoji: string; budget: string; package: string; why: string; slug: string }> = {
  cancun: { name: 'Cancun & Riviera Maya', emoji: '🇲🇽', budget: '$80K–$250K CAD', package: 'Luxe or Royal', why: 'The best all-around destination for Canadian Indian couples — direct flights, experienced vendors, stunning beaches, and infrastructure built for large celebrations.', slug: 'cancun-riviera-maya' },
  punta_cana: { name: 'Punta Cana', emoji: '🇩🇴', budget: '$70K–$200K CAD', package: 'Signature or Luxe', why: 'Secluded luxury resorts with gorgeous architecture and private beaches. Perfect for mid-size celebrations that feel exclusive and premium.', slug: 'punta-cana' },
  jamaica: { name: 'Jamaica', emoji: '🇯🇲', budget: '$60K–$150K CAD', package: 'Signature or Luxe', why: 'Boutique luxury with a warm, vibrant atmosphere. Best for couples who want intimacy, lush tropical beauty, and a personalized experience.', slug: 'jamaica' },
  italy: { name: 'Italy', emoji: '🇮🇹', budget: '$150K–$500K CAD', package: 'Royal or Bespoke', why: 'The most breathtaking photography backdrops on earth. An Italian wedding is a landmark celebration that your guests will talk about for decades.', slug: 'italy' },
  dubai: { name: 'Dubai', emoji: '🇦🇪', budget: '$100K–$400K CAD', package: 'Royal or Bespoke', why: 'Ultra-modern opulence with world-class infrastructure and a culturally familiar setting for South Asian families. Great for very large guest counts.', slug: 'dubai' },
  thailand: { name: 'Thailand', emoji: '🇹🇭', budget: '$60K–$200K CAD', package: 'Luxe or Royal', why: 'Stunning tropical beauty with exceptional value at the luxury tier. Phuket has an established Indian wedding vendor ecosystem and spectacular venues.', slug: 'thailand' },
};

export default function WeddingQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [scores, setScores] = useState<Record<string, number>>({ cancun: 0, punta_cana: 0, jamaica: 0, italy: 0, dubai: 0, thailand: 0 });
  const [done, setDone] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleAnswer = (option: typeof questions[0]['options'][0]) => {
    setSelected(option.value);
    const newScores = { ...scores };
    Object.entries(option.points).forEach(([dest, pts]) => {
      newScores[dest] = (newScores[dest] || 0) + pts;
    });

    setTimeout(() => {
      setAnswers([...answers, option.value]);
      setScores(newScores);
      setSelected(null);
      if (current + 1 >= questions.length) {
        setDone(true);
      } else {
        setCurrent(current + 1);
      }
    }, 400);
  };

  const topDest = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const second = Object.entries(scores).sort((a, b) => b[1] - a[1])[1][0];
  const result = destinationInfo[topDest];
  const secondResult = destinationInfo[second];

  const progress = ((current) / questions.length) * 100;

  if (done && result) {
    return (
      <div className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-6xl mb-4">{result.emoji}</div>
            <p className="font-inter text-gold text-xs tracking-widest uppercase mb-2">Your Perfect Match</p>
            <h2 className="font-playfair text-4xl text-charcoal font-bold mb-4">{result.name}</h2>
            <p className="font-inter text-charcoal/70 leading-relaxed">{result.why}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Estimated Budget', value: result.budget },
              { label: 'Recommended Package', value: result.package },
              { label: 'Runner-Up Destination', value: `${secondResult.emoji} ${secondResult.name.split(' ')[0]}` },
            ].map(item => (
              <div key={item.label} className="bg-beige border border-champagne rounded-sm p-4 text-center">
                <p className="font-inter text-xs text-charcoal/50 uppercase tracking-wide mb-1">{item.label}</p>
                <p className="font-inter text-charcoal font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-maroon rounded-sm p-8 text-center mb-6">
            <h3 className="font-playfair text-2xl text-ivory font-bold mb-3">Ready to Explore {result.name}?</h3>
            <p className="font-inter text-ivory/70 text-sm mb-6">Book a free 30-minute consultation. We'll dive deep into your specific vision, guest count, and budget.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/inquire" className="bg-gold text-charcoal font-inter font-semibold text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-gold-light transition-colors">
                Book Free Consultation
              </Link>
              <Link href={`/destinations/${result.slug}`} className="bg-transparent border border-ivory/30 text-ivory font-inter font-semibold text-xs tracking-widest uppercase px-8 py-3.5 hover:border-gold transition-colors">
                Explore {result.name.split(' ')[0]}
              </Link>
            </div>
          </div>

          <div className="text-center">
            <button onClick={() => { setCurrent(0); setAnswers([]); setScores({ cancun: 0, punta_cana: 0, jamaica: 0, italy: 0, dubai: 0, thailand: 0 }); setDone(false); }} className="font-inter text-charcoal/50 text-sm hover:text-maroon transition-colors underline">
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between font-inter text-xs text-charcoal/50 mb-2">
            <span>Question {current + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-1.5 bg-champagne rounded-full overflow-hidden">
            <div className="h-full bg-maroon rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <h2 className="font-playfair text-3xl text-charcoal font-bold mb-8 text-center">{q.question}</h2>

        <div className="space-y-3">
          {q.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option)}
              className={`w-full text-left px-6 py-5 rounded-sm border-2 font-inter text-base transition-all duration-200 ${
                selected === option.value
                  ? 'border-maroon bg-maroon text-ivory'
                  : 'border-champagne bg-ivory text-charcoal hover:border-gold hover:bg-beige'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <p className="text-center font-inter text-charcoal/30 text-xs mt-8">
          {questions.length - current - 1} questions remaining
        </p>
      </div>
    </div>
  );
}

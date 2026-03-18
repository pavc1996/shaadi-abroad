'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronRight, ChevronLeft, Loader2 } from 'lucide-react';
import { CANADIAN_PROVINCES, DESTINATIONS, BUDGET_RANGES, WEDDING_EVENTS } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  province: string;
  wedding_date: string;
  guest_count: string;
  destinations: string[];
  budget_range: string;
  events: string[];
  travel_support: boolean;
  notes: string;
}

const initialData: FormData = {
  name: '',
  email: '',
  phone: '',
  province: '',
  wedding_date: '',
  guest_count: '',
  destinations: [],
  budget_range: '',
  events: [],
  travel_support: false,
  notes: '',
};

const steps = [
  { title: 'About You', subtitle: 'Tell us who you are' },
  { title: 'Your Wedding', subtitle: 'The celebration details' },
  { title: 'Preferences', subtitle: 'Destinations and budget' },
  { title: 'Final Details', subtitle: 'Almost there!' },
];

export default function InquiryForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string | string[] | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const toggleArrayItem = (field: 'destinations' | 'events', value: string) => {
    setFormData((prev) => {
      const current = prev[field] as string[];
      return {
        ...prev,
        [field]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 0) {
      if (!formData.name.trim()) newErrors.name = 'Please enter your name';
      if (!formData.email.trim()) newErrors.email = 'Please enter your email';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = 'Please enter a valid email';
    }

    if (step === 2) {
      if (formData.destinations.length === 0)
        newErrors.destinations = 'Please select at least one destination';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep((s) => s + 1);
  };

  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          guest_count: formData.guest_count ? parseInt(formData.guest_count) : null,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        setErrors({ submit: data.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="max-w-2xl mx-auto text-center py-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-champagne rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-maroon" />
          </div>
        </div>
        <h2 className="font-playfair text-3xl font-bold text-charcoal mb-4">
          Thank You, {formData.name.split(' ')[0]}!
        </h2>
        <p className="font-inter text-lg text-gray-600 mb-6 leading-relaxed">
          Your inquiry has been received. A member of the Shaadi Abroad team will
          reach out within <strong>24 hours</strong> to schedule your complimentary consultation.
        </p>
        <div className="bg-champagne/40 border border-champagne rounded-sm p-6 mb-8">
          <h3 className="font-playfair text-lg font-semibold text-charcoal mb-3">What Happens Next?</h3>
          <ol className="space-y-2 text-left">
            {[
              'We review your inquiry and destination preferences',
              'A senior planner reaches out personally via email or phone',
              'We schedule your free 60-minute discovery consultation',
              'You receive a personalized destination brief within 5 business days',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-inter text-sm text-gray-600">
                <span className="flex-shrink-0 w-5 h-5 bg-maroon text-ivory rounded-full text-xs flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
        <a
          href="/"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-maroon text-ivory font-inter font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-maroon-dark transition-colors"
        >
          Back to Home
        </a>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-10">
        {/* Step indicators */}
        <div className="flex items-center justify-between mb-6">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center">
              <div className={`flex flex-col items-center ${i < steps.length - 1 ? 'flex-1' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-inter font-bold transition-all duration-300 ${
                  i < step
                    ? 'bg-maroon text-ivory'
                    : i === step
                    ? 'bg-gold text-charcoal'
                    : 'bg-beige text-gray-400'
                }`}>
                  {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`font-inter text-xs mt-1.5 hidden sm:block transition-colors ${
                  i === step ? 'text-maroon font-semibold' : 'text-gray-400'
                }`}>
                  {s.title}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 transition-all duration-300 ${
                  i < step ? 'bg-maroon' : 'bg-beige'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Current step header */}
        <div className="text-center">
          <h2 className="font-playfair text-2xl font-semibold text-charcoal">
            {steps[step].title}
          </h2>
          <p className="font-inter text-sm text-gray-500 mt-1">{steps[step].subtitle}</p>
        </div>
      </div>

      {/* Form card */}
      <div className="bg-white shadow-lg rounded-sm p-8 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: About You */}
            {step === 0 && (
              <div className="space-y-6">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g., Priya & Arjun Sharma"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+1 (416) 555-0100"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                  />
                </div>

                <div>
                  <label className="form-label">Province</label>
                  <select
                    className="form-input"
                    value={formData.province}
                    onChange={(e) => updateField('province', e.target.value)}
                  >
                    <option value="">Select your province</option>
                    {CANADIAN_PROVINCES.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Wedding Details */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="form-label">Approximate Wedding Date</label>
                  <input
                    type="date"
                    className="form-input"
                    value={formData.wedding_date}
                    onChange={(e) => updateField('wedding_date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  <p className="text-xs text-gray-400 mt-1">Don't have a date yet? You can leave this blank.</p>
                </div>

                <div>
                  <label className="form-label">Approximate Guest Count</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="e.g., 120"
                    value={formData.guest_count}
                    onChange={(e) => updateField('guest_count', e.target.value)}
                    min="1"
                    max="500"
                  />
                </div>

                <div>
                  <label className="form-label">Events Needed</label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {WEDDING_EVENTS.map((event) => (
                      <label
                        key={event.id}
                        className={`flex items-center gap-3 p-4 border rounded-sm cursor-pointer transition-all duration-200 ${
                          formData.events.includes(event.id)
                            ? 'border-maroon bg-champagne/30'
                            : 'border-beige hover:border-gold'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.events.includes(event.id)}
                          onChange={() => toggleArrayItem('events', event.id)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          formData.events.includes(event.id)
                            ? 'border-maroon bg-maroon'
                            : 'border-gray-300'
                        }`}>
                          {formData.events.includes(event.id) && (
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                          )}
                        </div>
                        <span className="font-inter text-sm text-charcoal">{event.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="form-label">Preferred Destination(s) *</label>
                  <p className="text-xs text-gray-400 mb-3">Select all that interest you</p>
                  <div className="grid grid-cols-1 gap-2">
                    {DESTINATIONS.map((dest) => (
                      <label
                        key={dest.id}
                        className={`flex items-center gap-3 p-4 border rounded-sm cursor-pointer transition-all duration-200 ${
                          formData.destinations.includes(dest.name)
                            ? 'border-maroon bg-champagne/30'
                            : 'border-beige hover:border-gold'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.destinations.includes(dest.name)}
                          onChange={() => toggleArrayItem('destinations', dest.name)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          formData.destinations.includes(dest.name)
                            ? 'border-maroon bg-maroon'
                            : 'border-gray-300'
                        }`}>
                          {formData.destinations.includes(dest.name) && (
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                          )}
                        </div>
                        <span className="text-base">{dest.emoji}</span>
                        <span className="font-inter text-sm text-charcoal">{dest.name}</span>
                      </label>
                    ))}
                  </div>
                  {errors.destinations && (
                    <p className="text-red-500 text-xs mt-1">{errors.destinations}</p>
                  )}
                </div>

                <div>
                  <label className="form-label">Planning Budget (Planner Fee)</label>
                  <p className="text-xs text-gray-400 mb-2">Approximate range for planning services only</p>
                  <div className="space-y-2">
                    {BUDGET_RANGES.map((range) => (
                      <label
                        key={range}
                        className={`flex items-center gap-3 p-4 border rounded-sm cursor-pointer transition-all duration-200 ${
                          formData.budget_range === range
                            ? 'border-maroon bg-champagne/30'
                            : 'border-beige hover:border-gold'
                        }`}
                      >
                        <input
                          type="radio"
                          name="budget"
                          checked={formData.budget_range === range}
                          onChange={() => updateField('budget_range', range)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          formData.budget_range === range
                            ? 'border-maroon'
                            : 'border-gray-300'
                        }`}>
                          {formData.budget_range === range && (
                            <div className="w-2 h-2 bg-maroon rounded-full" />
                          )}
                        </div>
                        <span className="font-inter text-sm text-charcoal">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Final Details */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="form-label">Travel Support Needed?</label>
                  <div className="flex gap-4 mt-2">
                    {[
                      { value: true, label: 'Yes — help coordinate flights & hotels' },
                      { value: false, label: 'No — we\'ll handle travel ourselves' },
                    ].map((option) => (
                      <label
                        key={String(option.value)}
                        className={`flex-1 flex items-center gap-3 p-4 border rounded-sm cursor-pointer transition-all duration-200 ${
                          formData.travel_support === option.value
                            ? 'border-maroon bg-champagne/30'
                            : 'border-beige hover:border-gold'
                        }`}
                      >
                        <input
                          type="radio"
                          name="travel_support"
                          checked={formData.travel_support === option.value}
                          onChange={() => updateField('travel_support', option.value)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          formData.travel_support === option.value
                            ? 'border-maroon'
                            : 'border-gray-300'
                        }`}>
                          {formData.travel_support === option.value && (
                            <div className="w-2 h-2 bg-maroon rounded-full" />
                          )}
                        </div>
                        <span className="font-inter text-sm text-charcoal">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="form-label">Anything Else You'd Like Us to Know?</label>
                  <textarea
                    className="form-input min-h-[140px] resize-y"
                    placeholder="Tell us about your vision, specific traditions important to you, any concerns, or questions you have. The more we know, the better we can help."
                    value={formData.notes}
                    onChange={(e) => updateField('notes', e.target.value)}
                  />
                </div>

                {/* Summary */}
                <div className="bg-beige rounded-sm p-5">
                  <h3 className="font-playfair text-base font-semibold text-charcoal mb-3">
                    Your Inquiry Summary
                  </h3>
                  <dl className="space-y-2 font-inter text-sm">
                    {[
                      { label: 'Name', value: formData.name },
                      { label: 'Email', value: formData.email },
                      { label: 'Province', value: formData.province },
                      { label: 'Guest Count', value: formData.guest_count },
                      { label: 'Destinations', value: formData.destinations.join(', ') || '—' },
                      { label: 'Budget', value: formData.budget_range || '—' },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-2">
                        <dt className="text-gray-500 w-28 flex-shrink-0">{item.label}:</dt>
                        <dd className="text-charcoal font-medium">{item.value || '—'}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {errors.submit && (
                  <div className="bg-red-50 border border-red-200 rounded-sm p-4">
                    <p className="font-inter text-sm text-red-700">{errors.submit}</p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-beige">
          {step > 0 ? (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 font-inter text-sm text-gray-500 hover:text-charcoal transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <div />
          )}

          {step < steps.length - 1 ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-3.5 bg-maroon text-ivory font-inter font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-maroon-dark transition-all duration-200"
            >
              Continue
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-8 py-3.5 bg-gold text-charcoal font-inter font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-gold-dark transition-all duration-200 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Inquiry
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Trust signals below form */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {[
          '60-minute free consultation',
          'Response within 24 hours',
          'No obligation to book',
        ].map((item) => (
          <div key={item} className="flex items-center gap-2 font-inter text-sm text-gray-500">
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

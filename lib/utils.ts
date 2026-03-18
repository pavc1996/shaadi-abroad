import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export const CANADIAN_PROVINCES = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon',
];

export const DESTINATIONS = [
  { id: 'riviera-maya', name: 'Riviera Maya, Mexico', emoji: '🌊' },
  { id: 'cancun', name: 'Cancun, Mexico', emoji: '🏖️' },
  { id: 'punta-cana', name: 'Punta Cana, Dominican Republic', emoji: '🌴' },
  { id: 'jamaica', name: 'Montego Bay, Jamaica', emoji: '🌺' },
  { id: 'italy', name: 'Amalfi Coast / Tuscany, Italy', emoji: '🇮🇹' },
  { id: 'dubai', name: 'Dubai, UAE', emoji: '🌆' },
  { id: 'thailand', name: 'Phuket / Koh Samui, Thailand', emoji: '🏝️' },
  { id: 'other', name: 'Other / Not Sure Yet', emoji: '✨' },
];

export const BUDGET_RANGES = [
  'Under $8,000 CAD',
  '$8,000 - $18,000 CAD',
  '$18,000 - $30,000 CAD',
  '$30,000+ CAD',
  'Custom / Bespoke (no budget ceiling)',
];

export const WEDDING_EVENTS = [
  { id: 'mehndi', label: 'Mehndi Night' },
  { id: 'sangeet', label: 'Sangeet' },
  { id: 'wedding', label: 'Wedding Ceremony' },
  { id: 'reception', label: 'Reception' },
];

export const PIPELINE_STAGES = [
  'New',
  'Qualified',
  'Consultation Booked',
  'Proposal Sent',
  'Won',
  'Lost',
  'Active Client',
];

export const STAGE_COLORS: Record<string, string> = {
  New: 'bg-blue-100 text-blue-800',
  Qualified: 'bg-purple-100 text-purple-800',
  'Consultation Booked': 'bg-yellow-100 text-yellow-800',
  'Proposal Sent': 'bg-orange-100 text-orange-800',
  Won: 'bg-green-100 text-green-800',
  Lost: 'bg-red-100 text-red-800',
  'Active Client': 'bg-emerald-100 text-emerald-800',
};

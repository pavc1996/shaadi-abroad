import type { Metadata } from 'next';
import VenuesClient from './VenuesClient';

export const metadata: Metadata = {
  title: 'Wedding Venues & Resorts | Worldwide Venue Directory',
  description:
    'Explore 30+ hand-curated wedding venues and resorts across the Caribbean, Europe, Middle East, and Asia — each researched for Indian wedding accommodations including mandap setup, fire ceremonies, and South Asian catering.',
};

export default function VenuesPage() {
  return <VenuesClient />;
}

import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ValueProposition from '@/components/sections/ValueProposition';
import FeaturedDestinations from '@/components/sections/FeaturedDestinations';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import PlanningProcess from '@/components/sections/PlanningProcess';
import Packages from '@/components/sections/Packages';
import Testimonials from '@/components/sections/Testimonials';
import GalleryTeaser from '@/components/sections/GalleryTeaser';
import LeadCaptureCTA from '@/components/sections/LeadCaptureCTA';
import Newsletter from '@/components/sections/Newsletter';

export const metadata: Metadata = {
  title: 'Shaadi Abroad — Your Dream Indian Wedding, Beyond Borders',
  description:
    "Canada's premier Indian destination wedding planning company. We orchestrate breathtaking Indian weddings in Cancun, Punta Cana, Jamaica, Italy, Dubai, and Thailand with 100% satisfaction across 50+ celebrations.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <FeaturedDestinations />
      <ServicesOverview />
      <WhyChooseUs />
      <PlanningProcess />
      <Packages />
      <Testimonials />
      <GalleryTeaser />
      <LeadCaptureCTA />
      <Newsletter />
    </>
  );
}

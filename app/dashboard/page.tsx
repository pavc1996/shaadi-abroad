import type { Metadata } from 'next';
import ClientDashboard from './ClientDashboard';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Your Wedding Dashboard',
  description: 'Track your Shaadi Abroad wedding planning progress, tasks, budget, and upcoming milestones.',
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return <ClientDashboard />;
}

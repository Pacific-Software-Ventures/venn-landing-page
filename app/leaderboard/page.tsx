import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/ui/Header';
import { FullLeaderboard } from '@/components/ui/FullLeaderboard';
import { Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Full Leaderboard - Venn Referral Competition',
  description: 'View the complete Venn waitlist leaderboard. Search and track your position in the referral competition to win amazing prizes worth over $10,000.',
  openGraph: {
    title: 'Full Leaderboard - Venn Referral Competition',
    description: 'View the complete Venn waitlist leaderboard. Search and track your position in the referral competition.',
    images: ['/opengraph.png'],
  },
};

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ paddingTop: '140px', paddingBottom: '2rem', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Complex Multi-Layer Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFFBEB] via-white to-white" />

        {/* Radial gradients for depth */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-10%] left-[-5%] w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-gradient-radial from-[#FEF3C7]/40 via-[#FEF3C7]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] md:w-[700px] md:h-[700px] bg-gradient-radial from-[#FBBF24]/20 via-[#FEF3C7]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-[-15%] left-[10%] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-gradient-radial from-[#FB923C]/15 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/15 sm:from-orange-100/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-100/15 sm:from-amber-100/20 via-transparent to-transparent" />

        {/* Content - positioned above background */}
        <div className="relative max-w-6xl mx-auto w-full" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, zIndex: 1 }}>
          {/* Page Header */}
          <div className="text-center mb-4 flex-shrink-0 space-y-3">
            <h1
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-2 tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
              }}
            >
              Full Leaderboard
            </h1>
            <p className="text-sm text-stone-600 font-medium">
              Track your position and see who's leading for{' '}
              <span className="font-semibold text-burnt-orange">$10,000+ in prizes</span>
            </p>

            {/* Referral Reminder Banner */}
            <div className="inline-block bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg px-4 py-2.5 shadow-sm">
              <p className="text-xs text-stone-700">
                <span className="font-semibold text-burnt-orange">💡 Tip:</span> Check your email for your unique referral link to earn{' '}
                <span className="font-bold text-burnt-orange">20 points per referral</span>
              </p>
            </div>
          </div>

          {/* Full Leaderboard Component */}
          <FullLeaderboard />
        </div>
      </main>
    </div>
  );
}

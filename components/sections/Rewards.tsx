'use client';

import { Container } from '../ui/Container';
import { REWARD_TIERS } from '@/lib/rewards';
import { Trophy, Ticket, Gift, Zap, Check } from 'lucide-react';

export function Rewards() {
  return (
    <>
      {/* Section Divider */}
      <div className="relative w-full h-24 overflow-hidden z-0">
        {/* Gradient Wave Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-100/40 to-orange-200/50">
          <svg
            className="absolute bottom-0 w-full h-16"
            preserveAspectRatio="none"
            viewBox="0 0 1440 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z"
              className="fill-amber-100/60"
            />
            <path
              d="M0,60 Q360,20 720,60 T1440,60 L1440,100 L0,100 Z"
              className="fill-orange-100/70"
            />
            <path
              d="M0,70 Q360,40 720,70 T1440,70 L1440,100 L0,100 Z"
              className="fill-orange-200/50"
            />
          </svg>
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent -translate-x-full animate-shimmer" />
        </div>
      </div>

      <section
        className="relative py-12 sm:py-16 overflow-hidden"
        aria-label="Rewards section"
      >
        <Container>
          <div className="text-center max-w-6xl mx-auto relative w-full">
            {/* Header - Matching Hero Style */}
            <h2
              className="text-[1.875rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-normal text-charcoal leading-[1.15] sm:leading-[1.2] tracking-[-0.02em] mb-4 sm:mb-5 md:mb-7 px-4 sm:px-6 animate-fade-in-up animation-delay-100 drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)]"
              style={{
                fontFamily: 'var(--font-display)',
                textShadow: '0 2px 12px rgba(255,255,255,0.95), 0 4px 24px rgba(255,255,255,0.8), 0 1px 3px rgba(0,0,0,0.1)'
              }}
            >
              <span className="block text-center">Share your link.</span>
              <span className="block text-center mt-1.5 sm:mt-2.5 md:mt-3">
                Win <span className="text-burnt-orange" style={{
                  textShadow: '0 2px 12px rgba(234,88,12,0.4), 0 4px 24px rgba(234,88,12,0.3), 0 1px 3px rgba(0,0,0,0.1)'
                }}>amazing prizes</span>.
              </span>
            </h2>

            {/* Subheading - Matching Hero Style */}
            <p
              className="text-[0.8125rem] sm:text-[0.9375rem] md:text-[1.0625rem] lg:text-[1.125rem] text-stone-800 leading-[1.5] sm:leading-[1.6] mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto font-semibold px-6 sm:px-8 animate-fade-in-up animation-delay-200 drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)]"
              style={{
                textShadow: '0 2px 8px rgba(255,255,255,0.95), 0 4px 16px rgba(255,255,255,0.8)'
              }}
            >
              Climb the leaderboard and win prizes worth over $10,000
            </p>

          {/* Prize Tiers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto px-4">
            {/* Champion - Rank #1 */}
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(249,115,22,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(249,115,22,0.4)] transform hover:scale-[1.02] transition-all duration-300 border-4 border-orange-600">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] sm:text-xs font-bold tracking-wider px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg whitespace-nowrap uppercase">
                1 Spot Only
              </div>
              <div className="text-center mb-6 mt-3">
                <Trophy className="w-12 h-12 sm:w-14 sm:h-14 text-orange-600 mx-auto mb-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-2 tracking-tight">Champion</h3>
                <div className="text-2xl sm:text-3xl font-black text-orange-600 tracking-tight">$2,000+</div>
              </div>
              <div className="h-px bg-orange-200 mb-4"></div>
              <ul className="space-y-2 text-left">
                {REWARD_TIERS[0].rewards.map((reward, i) => (
                  <li key={i} className="text-orange-700 text-[12px] sm:text-[13px] leading-relaxed font-medium flex items-start gap-2">
                    <Check className="w-3 h-3 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>{reward}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rank 2-10 */}
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(251,191,36,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(251,191,36,0.4)] transform hover:scale-[1.02] transition-all duration-300 border-4 border-amber-500">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] sm:text-xs font-bold tracking-wider px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg whitespace-nowrap uppercase">
                9 Spots
              </div>
              <div className="text-center mb-6 mt-3">
                <Ticket className="w-12 h-12 sm:w-14 sm:h-14 text-amber-500 mx-auto mb-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-amber-500 mb-2 tracking-tight">Rank 2-10</h3>
                <div className="text-2xl sm:text-3xl font-black text-amber-500 tracking-tight">$500+</div>
              </div>
              <div className="h-px bg-amber-200 mb-4"></div>
              <ul className="space-y-2 text-left">
                {REWARD_TIERS[1].rewards.map((reward, i) => (
                  <li key={i} className="text-amber-600 text-[12px] sm:text-[13px] leading-relaxed font-medium flex items-start gap-2">
                    <Check className="w-3 h-3 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{reward}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rank 11-25 */}
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(234,88,12,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(234,88,12,0.4)] transform hover:scale-[1.02] transition-all duration-300 border-4 border-orange-500">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] sm:text-xs font-bold tracking-wider px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg whitespace-nowrap uppercase">
                15 Spots
              </div>
              <div className="text-center mb-6 mt-3">
                <Gift className="w-12 h-12 sm:w-14 sm:h-14 text-orange-500 mx-auto mb-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-2 tracking-tight">Rank 11-25</h3>
                <div className="text-2xl sm:text-3xl font-black text-orange-500 tracking-tight">$300+</div>
              </div>
              <div className="h-px bg-orange-200 mb-4"></div>
              <ul className="space-y-2 text-left">
                {REWARD_TIERS[2].rewards.map((reward, i) => (
                  <li key={i} className="text-orange-600 text-[12px] sm:text-[13px] leading-relaxed font-medium flex items-start gap-2">
                    <Check className="w-3 h-3 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{reward}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rank 26-100 */}
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(234,88,12,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(234,88,12,0.4)] transform hover:scale-[1.02] transition-all duration-300 border-4 border-orange-700">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] sm:text-xs font-bold tracking-wider px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg whitespace-nowrap uppercase">
                75 Spots
              </div>
              <div className="text-center mb-6 mt-3">
                <Zap className="w-12 h-12 sm:w-14 sm:h-14 text-orange-700 mx-auto mb-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-orange-700 mb-2 tracking-tight">Rank 26-100</h3>
                <div className="text-2xl sm:text-3xl font-black text-orange-700 tracking-tight">$100+</div>
              </div>
              <div className="h-px bg-orange-200 mb-4"></div>
              <ul className="space-y-2 text-left">
                {REWARD_TIERS[3].rewards.map((reward, i) => (
                  <li key={i} className="text-orange-800 text-[12px] sm:text-[13px] leading-relaxed font-medium flex items-start gap-2">
                    <Check className="w-3 h-3 text-orange-700 flex-shrink-0 mt-0.5" />
                    <span>{reward}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How It Works & Rules - Paragraph Style */}
          <div className="max-w-4xl mx-auto space-y-12 px-4">
            {/* How to Win */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-5 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                How to Win
              </h3>
              <p className="text-base sm:text-lg text-stone-700 leading-[1.75] font-normal">
                <span className="font-semibold text-burnt-orange">Share your unique referral link</span> with friends and watch your rank climb as they sign up.
                Each verified signup earns you points on the live leaderboard.
                The top performers when the competition ends on <span className="font-semibold text-charcoal">January 20, 2026</span> will win incredible prizes.
                It's that simple—the more people you bring to Venn, the bigger your rewards.
              </p>
            </div>

            {/* The Rules */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-5 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                The Rules
              </h3>
              <p className="text-base sm:text-lg text-stone-700 leading-[1.75] font-normal">
                Only <span className="font-semibold text-charcoal">valid signups count</span>—fake accounts will be disqualified.
                The leaderboard updates in real-time so you can track your progress.
                The competition closes on <span className="font-semibold text-charcoal">January 20, 2026 at 11:59 PM EST</span>, and winners will be notified in February 2026.
                You'll have 30 days to claim your prizes.
                <span className="font-semibold text-burnt-orange"> No purchase necessary</span>—it's completely free to join and compete.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Enhanced Decorative Light Orbs - Same as Hero */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Primary warm glow */}
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-[#FBBF24]/30 via-[#F59E0B]/15 to-transparent rounded-full blur-3xl animate-float" />

        {/* Secondary orange accent */}
        <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-gradient-to-tl from-[#FB923C]/20 via-[#EA580C]/10 to-transparent rounded-full blur-3xl animate-float animation-delay-1000" />

        {/* Tertiary soft glow */}
        <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] bg-gradient-to-tr from-[#FEF3C7]/25 via-[#FDE68A]/15 to-transparent rounded-full blur-3xl animate-pulse-slow" />

        {/* Additional accent orb */}
        <div className="absolute top-1/2 left-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-[#FBBF24]/15 to-transparent rounded-full blur-3xl animate-float animation-delay-500" />
      </div>

      {/* Premium Noise Texture + Grain */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.2\' numOctaves=\'3\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
      }} />
    </section>
    </>
  );
}

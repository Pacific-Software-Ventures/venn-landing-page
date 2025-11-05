'use client';

import { useEffect, useState } from 'react';
import { Trophy, TrendingUp, Users, Sparkles, Zap, X, Gift, Sailboat, Crown, Ticket } from 'lucide-react';
import { getRewardTier } from '@/lib/rewards';
import { RewardsShowcase } from './RewardsShowcase';
import Link from 'next/link';

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  referralCount: number;
}

export function LeaderboardSidebar() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [previousLeaderboard, setPreviousLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [countdown, setCountdown] = useState(30);
  const [isUpdating, setIsUpdating] = useState(false);
  const [changedRanks, setChangedRanks] = useState<Set<number>>(new Set());
  const [showRewardsShowcase, setShowRewardsShowcase] = useState(false);

  useEffect(() => {
    fetchLeaderboard();

    // Auto-refresh every 30 seconds
    const interval = setInterval(() => {
      fetchLeaderboard();
      setCountdown(30); // Reset countdown
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fetchLeaderboard = async () => {
    setIsUpdating(true);
    try {
      const response = await fetch('/api/leaderboard');
      const data = await response.json();

      if (data.success) {
        // Track which ranks changed
        const changed = new Set<number>();
        data.leaderboard.forEach((entry: LeaderboardEntry, index: number) => {
          const prevEntry = previousLeaderboard[index];
          if (prevEntry && (prevEntry.name !== entry.name || prevEntry.points !== entry.points)) {
            changed.add(entry.rank);
          }
        });
        setChangedRanks(changed);

        // Clear changed ranks after animation
        setTimeout(() => setChangedRanks(new Set()), 2000);

        setPreviousLeaderboard(leaderboard);
        setLeaderboard(data.leaderboard);
      }
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    } finally {
      setLoading(false);
      setTimeout(() => setIsUpdating(false), 500);
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Trophy className="w-5 h-5 text-slate-400" />;
      case 3:
        return <Trophy className="w-5 h-5 text-amber-600" />;
      default:
        return null;
    }
  };

  const getPrizeLabel = (rank: number) => {
    if (rank === 1) return 'Champion';
    if (rank >= 2 && rank <= 10) return 'Rank 2-10';
    if (rank >= 11 && rank <= 25) return 'Rank 11-25';
    if (rank >= 26 && rank <= 100) return 'Rank 26-100';
    return null;
  };

  return (
    <>
      {/* Desktop: Fixed Sidebar */}
      <div className="hidden lg:block absolute right-6 top-[140px] z-30 max-h-[calc(100vh-10rem)]">
        <div className="w-[280px] h-full flex flex-col gap-3">
          {/* Leaderboard Card - Scrollable */}
          <div className="rounded-2xl p-[2px] bg-gradient-to-br from-burnt-orange via-amber-500 to-burnt-orange bg-[length:200%_200%] animate-gradient-rotate shadow-[0_0_30px_rgba(234,88,12,0.3)] flex-1 flex flex-col min-h-0">
            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
            </div>

            <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg flex-1 flex flex-col min-h-0">
              {/* Header - VIRAL MESSAGING - Fixed */}
              <div className="p-3 pb-2 flex-shrink-0">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-4 h-4 text-burnt-orange" />
                  <h3 className="font-bold text-sm text-charcoal">Live Leaderboard</h3>
                </div>
                <div className="bg-gradient-to-r from-burnt-orange/10 to-amber-500/10 rounded-lg p-1.5 border border-burnt-orange/20">
                  <div className="flex items-center justify-center gap-1.5">
                    <Trophy className="w-3 h-3 text-burnt-orange" />
                    <p className="text-[10px] font-bold text-burnt-orange text-center">
                      #1 Grand Prize
                    </p>
                    <span className="text-[10px] text-stone-400">·</span>
                    <Ticket className="w-3 h-3 text-burnt-orange" />
                    <p className="text-[10px] font-bold text-burnt-orange text-center">
                      Rank 2-10
                    </p>
                  </div>
                </div>
              </div>

              {/* Leaderboard List - Scrollable */}
              <div className="flex-1 overflow-y-auto px-3 min-h-0">
                {loading ? (
                  <div className="space-y-2 py-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="animate-pulse flex gap-2">
                        <div className="w-5 h-5 bg-stone-200 rounded" />
                        <div className="flex-1 h-5 bg-stone-200 rounded" />
                      </div>
                    ))}
                  </div>
                ) : leaderboard.length === 0 ? (
                  <div className="text-center py-6 text-stone-500">
                    <Users className="w-8 h-8 mx-auto mb-2 opacity-30" />
                    <p className="text-xs">Be the first to refer friends!</p>
                  </div>
                ) : (
                  <div className="space-y-1.5 py-2">
                    {leaderboard.map((entry, index) => {
                      const isChanged = changedRanks.has(entry.rank);
                      const isFirst = entry.rank === 1;
                      const rewardTier = getRewardTier(entry.rank, entry.referralCount);

                      return (
                        <div
                          key={`${entry.rank}-${entry.name}`}
                          style={{
                            animationDelay: `${index * 50}ms`,
                          }}
                          className={`relative flex items-center gap-2 p-2 rounded-lg transition-all duration-500 animate-fade-in-up ${
                            isChanged ? 'animate-pulse-glow' : ''
                          } ${
                            entry.rank <= 3
                              ? 'bg-gradient-to-r from-amber-50 to-orange-50 border border-burnt-orange/20'
                              : 'bg-stone-50 hover:bg-stone-100'
                          } ${
                            isFirst ? 'ring-2 ring-burnt-orange/30 shadow-lg shadow-burnt-orange/20 animate-pulse-ring' : ''
                          }`}
                        >

                          {/* Rank Icon */}
                          <div className="flex-shrink-0 w-6 flex items-center justify-center">
                            {getRankIcon(entry.rank) || (
                              <div className="w-5 h-5 rounded-full bg-stone-200 flex items-center justify-center">
                                <span className="text-[10px] font-bold text-stone-600">
                                  {entry.rank}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Name & Prize */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <p className={`font-semibold text-xs truncate ${
                                isFirst ? 'text-burnt-orange' : 'text-charcoal'
                              }`}>
                                {entry.name}
                              </p>
                              {isChanged && (
                                <Zap className="w-2.5 h-2.5 text-burnt-orange animate-bounce flex-shrink-0" />
                              )}
                            </div>

                            {/* Prize Label - CLEAR VALUE with Icons */}
                            {getPrizeLabel(entry.rank) ? (
                              <div className="flex items-center gap-1">
                                {entry.rank === 1 && <Trophy className="w-2.5 h-2.5 text-burnt-orange" />}
                                {entry.rank >= 2 && entry.rank <= 10 && <Ticket className="w-2.5 h-2.5 text-burnt-orange" />}
                                {entry.rank >= 11 && entry.rank <= 25 && <Gift className="w-2.5 h-2.5 text-burnt-orange" />}
                                {entry.rank >= 26 && entry.rank <= 100 && <Sparkles className="w-2.5 h-2.5 text-burnt-orange" />}
                                <p className="text-[10px] font-semibold text-burnt-orange">
                                  {getPrizeLabel(entry.rank)}
                                </p>
                              </div>
                            ) : (
                              <p className="text-[10px] text-stone-600">
                                {entry.referralCount} referral{entry.referralCount !== 1 ? 's' : ''}
                              </p>
                            )}
                          </div>

                          {/* Points Badge */}
                          <div className="flex-shrink-0">
                            <div className={`px-1.5 py-0.5 rounded-full transition-all duration-300 ${
                              isChanged
                                ? 'bg-burnt-orange text-white scale-110'
                                : 'bg-burnt-orange/10'
                            }`}>
                              <span className={`text-[10px] font-bold ${
                                isChanged ? 'text-white' : 'text-burnt-orange'
                              }`}>
                                {entry.points}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer with live countdown - Fixed */}
              <div className="p-3 pt-2 border-t border-stone-200 flex-shrink-0">
                <div className="flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-1.5 text-stone-500">
                    <TrendingUp className={`w-3 h-3 ${isUpdating ? 'animate-spin' : ''}`} />
                    <span>Live updates</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-burnt-orange animate-pulse" />
                    <span className={`font-mono font-semibold ${
                      countdown <= 5 ? 'text-burnt-orange animate-pulse' : 'text-stone-600'
                    }`}>
                      {countdown}s
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VIRAL PRIZES CARD - Compact */}
          <div className="rounded-2xl p-[2px] bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-[0_0_30px_rgba(251,146,60,0.4)] flex-shrink-0">
            <div className="bg-white rounded-2xl p-3">
              {/* Header */}
              <div className="text-center mb-2">
                <div className="flex items-center justify-center mb-1">
                  <Sailboat className="w-5 h-5 text-burnt-orange" />
                </div>
                <h3 className="font-black text-xs text-charcoal mb-0.5">WIN BIG!</h3>
                <p className="text-[10px] text-stone-600">Share to climb & win</p>
              </div>

              {/* Prize List - Compact */}
              <div className="space-y-1.5 mb-2">
                {/* #1 Prize */}
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-1.5 border-2 border-yellow-400/30">
                  <div className="flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-yellow-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-black text-yellow-900">#1 - GRAND PRIZE</p>
                      <p className="text-[9px] text-yellow-800">4 VIP tickets or $250</p>
                    </div>
                  </div>
                </div>

                {/* Top 10 */}
                <div className="bg-gradient-to-br from-slate-50 to-stone-50 rounded-lg p-1.5 border border-slate-300/30">
                  <div className="flex items-center gap-1.5">
                    <Ticket className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-slate-900">#2-10 - FLAGSHIP</p>
                      <p className="text-[9px] text-slate-700">Free ticket + $100 flight</p>
                    </div>
                  </div>
                </div>

                {/* Top 25 */}
                <div className="bg-stone-50 rounded-lg p-1.5 border border-stone-200">
                  <div className="flex items-center gap-1.5">
                    <Gift className="w-3.5 h-3.5 text-burnt-orange flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-charcoal">#11-25 - DINNER</p>
                      <p className="text-[9px] text-stone-600">Prime Rib up to $150</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: Floating Widget */}
      <div className="lg:hidden fixed bottom-6 right-4 z-[9000]">
        {/* Compact Widget Bubble - VIRAL */}
        {isCollapsed && (
          <button
            onClick={() => setIsCollapsed(false)}
            className="relative bg-gradient-to-br from-burnt-orange to-amber-600 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-3 flex items-center gap-2 animate-fade-in hover:scale-105 cursor-pointer"
            aria-label="View leaderboard and prizes"
          >
            <Trophy className="w-5 h-5 flex-shrink-0" />

            {/* Show prize for #1 */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5" />
                <span className="text-xs font-bold whitespace-nowrap">
                  {loading ? 'Loading...' : 'Grand Prize'}
                </span>
              </div>
              <span className="text-[10px] opacity-90">
                {loading ? '' : `Live · ${countdown}s`}
              </span>
            </div>

            {/* Live indicator dot */}
            {!loading && <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />}
          </button>
        )}

        {/* Expanded Overlay */}
        {!isCollapsed && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in z-[8999]"
              onClick={() => setIsCollapsed(true)}
            />

            {/* Floating Card */}
            <div className="fixed bottom-6 right-4 left-4 max-w-sm mx-auto bg-white rounded-2xl shadow-2xl animate-scale-in p-[2px] bg-gradient-to-br from-burnt-orange via-amber-500 to-burnt-orange z-[9000]">
              <div className="bg-white rounded-2xl p-4 max-h-[70vh] overflow-y-auto">
                {/* Header - VIRAL */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-burnt-orange" />
                      <h3 className="font-bold text-base text-charcoal">Live Leaderboard</h3>
                    </div>
                    <button
                      onClick={() => setIsCollapsed(true)}
                      className="p-2 rounded-full hover:bg-stone-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                      aria-label="Close leaderboard"
                    >
                      <X className="w-5 h-5 text-stone-500" />
                    </button>
                  </div>
                  <div className="bg-gradient-to-r from-burnt-orange/10 to-amber-500/10 rounded-lg p-2 border border-burnt-orange/20">
                    <div className="flex items-center justify-center gap-2">
                      <Trophy className="w-3.5 h-3.5 text-burnt-orange" />
                      <p className="text-xs font-bold text-burnt-orange text-center">
                        #1 Grand Prize
                      </p>
                      <span className="text-xs text-stone-400">·</span>
                      <Ticket className="w-3.5 h-3.5 text-burnt-orange" />
                      <p className="text-xs font-bold text-burnt-orange text-center">
                        Rank 2-10
                      </p>
                    </div>
                  </div>
                </div>

                {/* Leaderboard Content */}
            {loading ? (
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="animate-pulse flex gap-3">
                    <div className="w-6 h-6 bg-stone-200 rounded" />
                    <div className="flex-1 h-6 bg-stone-200 rounded" />
                  </div>
                ))}
              </div>
            ) : leaderboard.length === 0 ? (
              <div className="text-center py-8 text-stone-500">
                <Users className="w-10 h-10 mx-auto mb-2 opacity-30" />
                <p className="text-sm">Be the first to refer friends!</p>
              </div>
            ) : (
              <div className="space-y-2">
                {leaderboard.map((entry, index) => {
                  const isChanged = changedRanks.has(entry.rank);
                  const isFirst = entry.rank === 1;
                  const rewardTier = getRewardTier(entry.rank, entry.referralCount);

                  return (
                    <div
                      key={`${entry.rank}-${entry.name}`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                      className={`relative flex items-center gap-3 p-3 rounded-lg transition-all duration-500 animate-fade-in-up ${
                        isChanged ? 'animate-pulse-glow' : ''
                      } ${
                        entry.rank <= 3
                          ? 'bg-gradient-to-r from-amber-50 to-orange-50 border border-burnt-orange/20'
                          : 'bg-stone-50'
                      } ${
                        isFirst ? 'ring-2 ring-burnt-orange/30 shadow-lg shadow-burnt-orange/20' : ''
                      }`}
                    >
                      <div className="flex-shrink-0 w-8 flex items-center justify-center">
                        {getRankIcon(entry.rank) || (
                          <div className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center">
                            <span className="text-xs font-bold text-stone-600">
                              {entry.rank}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className={`font-semibold text-sm truncate ${
                            isFirst ? 'text-burnt-orange' : 'text-charcoal'
                          }`}>
                            {entry.name}
                          </p>
                          {isChanged && (
                            <Zap className="w-3 h-3 text-burnt-orange animate-bounce flex-shrink-0" />
                          )}
                        </div>

                        {/* Prize Label */}
                        {getPrizeLabel(entry.rank) ? (
                          <div className="flex items-center gap-1">
                            {entry.rank === 1 && <Trophy className="w-3 h-3 text-burnt-orange" />}
                            {entry.rank >= 2 && entry.rank <= 10 && <Ticket className="w-3 h-3 text-burnt-orange" />}
                            {entry.rank >= 11 && entry.rank <= 25 && <Gift className="w-3 h-3 text-burnt-orange" />}
                            {entry.rank >= 26 && entry.rank <= 100 && <Sparkles className="w-3 h-3 text-burnt-orange" />}
                            <p className="text-xs font-semibold text-burnt-orange">
                              {getPrizeLabel(entry.rank)}
                            </p>
                          </div>
                        ) : (
                          <p className="text-xs text-stone-600">
                            {entry.referralCount} referral{entry.referralCount !== 1 ? 's' : ''}
                          </p>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        <div className={`px-2 py-1 rounded-full transition-all duration-300 ${
                          isChanged
                            ? 'bg-burnt-orange text-white scale-110'
                            : 'bg-burnt-orange/10'
                        }`}>
                          <span className={`text-xs font-bold ${
                            isChanged ? 'text-white' : 'text-burnt-orange'
                          }`}>
                            {entry.points}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Footer with countdown */}
            <div className="mt-4 pt-4 border-t border-stone-200">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-stone-500">
                  <TrendingUp className={`w-3 h-3 ${isUpdating ? 'animate-spin' : ''}`} />
                  <span>Live updates</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-burnt-orange animate-pulse" />
                  <span className={`font-mono font-semibold ${
                    countdown <= 5 ? 'text-burnt-orange animate-pulse' : 'text-stone-600'
                  }`}>
                    {countdown}s
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
    </div>

      {/* Rewards Showcase Modal */}
      <RewardsShowcase
        isOpen={showRewardsShowcase}
        onClose={() => setShowRewardsShowcase(false)}
      />
    </>
  );
}
